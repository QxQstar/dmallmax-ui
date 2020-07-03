<template>
  <div
    v-loading="loading"
    class="dm-table-list"
  >
    <div
      v-if="$slots.title || dataResource && (dataResource.title || dataResource.right) || $slots.right"
      class="dm-table-list-header dm-text--clear"
    >
      <slot
        name="title"
      >
        <v-title
          :title="dataResource.title"
        />
      </slot>
      <slot
        name="right"
      >
        <span
          class="dm-table-list-header--right"
        >{{ dataResource.right }}</span>
      </slot>
    </div>
    <dm-table
      v-if="dataResource"
      ref="DmTableList"
      :data="dataResource.list || []"
      style="width: 100%"
      v-bind="$attrs"
      v-on="listeners"
      @select-all="handleSelectionChange"
      @select="handleSelectionChange"
      @sort-change="handleSortChange"
    >
      <template v-for="(col,index) in resultTableConf.thead">
        <dm-table-column
          v-if="col.type === 'selection'"
          :key="index"
          type="selection"
          :width="col.width || '55px'"
          :fixed="col.fixed || false"
          :index="col.index"
        />
        <dm-table-column
          v-else-if="resultTableConf.filters[col.key] || (col.type === 'operation' && resultTableConf.filters._OPERATION_)"
          :key="index"
          :type="col.type"
          :label="col.value"
          :prop="col.key || ''"
          :min-width="col.minWidth||'55px'"
          :width="col.width"
          :fixed="col.fixed || false"
          :sortable="col.sortable||false"
          :index="col.index"
        >
          <template
            slot-scope="scope"
          >
            <v-operation
              :render-func="col.type === 'operation' && resultTableConf.filters._OPERATION_ ? resultTableConf.filters._OPERATION_ :resultTableConf.filters[col.key]"
              :row="scope.row"
              :index="scope.$index"
              :col="col"
            />
          </template>
        </dm-table-column>
        <dm-table-column
          v-else
          :key="index"
          :index="col.index"
          :type="col.type"
          :label="col.value"
          :prop="col.key || ''"
          :min-width="col.minWidth||'55px'"
          :width="col.width"
          :fixed="col.fixed||false"
          :sortable="col.sortable||false"
        >
          <template
            slot-scope="scope"
          >
            <col-content
              :col="col"
              :row="scope.row"
            />
          </template>
        </dm-table-column>
      </template>
    </dm-table>

    <dm-pagination
      v-if="resultTableConf.paging && dataResource && Number(dataResource.total)"
      :page-size="resultTableConf.pages.size"
      :total="Number(dataResource.total)"
      :current-page.sync="current"
      @current-change="handlePageChange"
    />
  </div>
</template>
<script>
  import { param,deepClone,cleanObject } from '@/lib/tools'
  import colContent from './col-content'
  let vm = null;
  const defaultConfig = {
    current:1,
    // 接口地址
    url: null,
    method:"GET",
    dataResource:{
      list:[],
      total:0
    },
    // 是否跨页多选
    selectableMultiPage:false,
    // 在选择行时唯一标识行数据的字段
    unixId:'',
    // search-box 和 status-filter 之外的 params
    defaultParams: {},
    // 表头
    thead:[
      {
        type:'',
        index:'',
        value:'标题',
        key:'title',
        minWidth:'200',
        width:'200',
        fixed:true,
        sortable:false
      }
    ],
    filters:{},
    // 显示分页器
    paging:true,
    pages:{
      size:15
    },
    setData(vm,content){
      return content
    },
    // 自定义参数
    customParam(vm,param){
      return param
    }
  };
  export default {
    components:{
      colContent,
      vOperation:{
        render(createElement) {
          return this.renderFunc(createElement,this.row,vm.$parent,this.col,this.index,this.oldRowData)
        },
        props:{
          renderFunc:{
            type:Function,
            required: true
          },
          row:{
            type:Object,
            default(){return {}}
          },
          index:{
            type:Number,
            default:0
          },
          col:{
            type:Object,
            default() { return {} }
          }
        },
        data(){
          return {
            oldRowData:deepClone(this.row)
          }
        }
      },
      vTitle:{
        render(h){
          if(typeof this.title === 'function') {
           return this.title(h)
          } else {
            return h('span',this.title)
          }
        },
        props:{
          title:{
            type:[Function,String],
            required: true
          },
        }
      }
    },
    props:{
      tableConf:{
        type:Object,
        default(){
          return {
            ...defaultConfig
          }
        }
      },
      http:{
        type:Function,
        default() {
          return function () {}
        }
      }
    },
    data(){
      return {
        current:this.tableConf.current || 1,
        // 排序
        sort:{
          key:'',
          value:''
        },
        // table 数据
        dataResource:{
          list:[],
          total:0
        },
        loading:false,
        chooseRows:[],
        listeners:{}
      }
    },

    computed:{
      chooseRowIds(){
        return this.chooseRows.map(row => row[this.resultTableConf.unixId])
      },
      pn() {
        return (this.current - 1 ) * this.resultTableConf.pages.size
      },
      resultTableConf(){
        return {
          ...defaultConfig,
          ...this.tableConf
        }
      },
    },
    watch:{
      '$DMALLMAX.searchQuery.query'(){
          // 重置分页
          this.current = 1
          this.fetchData()
      }
    },
    destroyed() {
      this.$DMALLMAX.searchQuery.resetData()
    },
    created(){
      vm = this;
      // 不在 dm-table 上绑定的事件
      const resetEvent = ['selection-change','current-change','sort-change'];
      Object.keys(this.$listeners).forEach(key => {
        if(resetEvent.indexOf(key) < 0) {
          this.listeners[key] = this.$listeners[key]
        }
      });
      this.fetchData();
    },
    methods:{
      handleSortChange({ column, prop, order }){
        this.sort = {
          key:prop+'_sort',
          value:order || undefined
        }
        this.fetchData();
        this.$emit('sort-change',{column, prop, order })
      },
      handlePageChange(page){
        this.fetchData();
        this.$emit('current-change',this.pn,this.resultTableConf.pages.size,page)
      },
      handleSelectionChange(rows){
        if(this.resultTableConf.selectableMultiPage) {
          rows.forEach(row => {
            if(this.chooseRowIds.indexOf(row[this.resultTableConf.unixId]) < 0){
              this.chooseRows.push(row);
            }
          });

          for(let i = this.chooseRows.length - 1;i >= 0;i--){
            const row = this.chooseRows[i];
            // 是否是当前页的数据
            const isCurPage = this.dataResource.list.find(item => item[this.resultTableConf.unixId] === row[this.resultTableConf.unixId]);
            // 是否被选中
            const isSelect = rows.find(item => item[this.resultTableConf.unixId] === row[this.resultTableConf.unixId]);
            if(isCurPage && !isSelect) {
              this.chooseRows.splice(i,1);
            }
          }
        } else {
          this.chooseRows = rows;
        }

        this.$emit('selection-change',this.chooseRows)
      },
      getUrl(address,obj){
        const method = this.resultTableConf.method.toUpperCase()
        if(method !== 'POST') {
          return address + '?' + param(obj)
        } else {
          return address
        }
      },
      // 从接口中获取数据
      httpData(){
        const paramObj = {
          ...this.resultTableConf.defaultParams,
          ...this.$DMALLMAX.searchQuery.query,
          rn:this.resultTableConf.pages.size,
          pn:this.pn
        };
        this.loading = true;
        if(this.sort.key && this.sort.value){
          paramObj[this.sort.key] = this.sort.value
        }
        const param = cleanObject(this.resultTableConf.customParam ? this.resultTableConf.customParam(this.$parent,paramObj) : paramObj)
        const url = this.getUrl(
          this.resultTableConf.url,
          param
        );
        const method = this.resultTableConf.method.toUpperCase()
        return this.http(url,method === 'POST' ? param: {})
      },
      // 本地分页
      getData(){
        return new Promise((resolve) => {
          let list = [];
          if(this.resultTableConf.paging) {
            list = (this.resultTableConf.dataResource.list||[]).slice(this.pn,this.resultTableConf.pages.size + this.pn);
          } else {
            list = (this.resultTableConf.dataResource.list||[])
          }
          resolve({
              content:{
                ...this.resultTableConf.dataResource,
                list:list,
                total:this.resultTableConf.dataResource.total || 0
              }
            })
        })
      },
      // 设置跨页选中
      setMultiPageSelect(){
        this.dataResource.list.forEach(row => {
          if(this.chooseRowIds.indexOf(row[this.resultTableConf.unixId]) > -1) {
            this.$refs.DmTableList && this.$refs.DmTableList.toggleRowSelection(row);
          }
        })
      },
      setUIField(data){
        return data.map(item => {
          return {
            ...item,
            _ISEDIT_:false
          }
        })
      },
      fetchData(){
        let fn = '';
        if(this.resultTableConf.url) {
          fn = this.httpData()
        } else {
          fn = this.getData();
        }

        fn
          .then((res) => {
            let dataResource = '';
            if(this.resultTableConf.setData) {
              dataResource = this.resultTableConf.setData(this.$parent,res.content)
            } else {
              dataResource = res.content
            }
            dataResource.list = this.setUIField(dataResource.list || [])
            this.dataResource = dataResource
            this.loading = false
            return this.dataResource;
        })
          .then(() => {
            this.$nextTick(() => {
              if(this.resultTableConf.selectableMultiPage) {
                this.setMultiPageSelect();
              }
            })
          })
      },
    }
  }
</script>
