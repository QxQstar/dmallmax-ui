<template>
  <div class="dm-table-list">
    <div
      v-if="$slots.title || dataResource && dataResource.title"
      class="dm-table-list-header"
    >
      <slot name="title">
        {{ dataResource.title }}
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
    >
      <template v-for="(col,index) in resultTableConf.thead">
        <dm-table-column
          v-if="resultTableConf.filters[col.key] || (col.type === 'operation' && resultTableConf.filters._OPERATION_)"
          :key="index"
          :type="col.type"
          :label="col.value"
          :prop="col.key || ''"
          :min-width="col.minWidth||'55px'"
          :width="col.width"
          :fixed="col.fixed || false"
          :sortable="col.sortable||false"
        >
          <template
            slot-scope="scope"
          >
            <v-operation
              :render-func="col.type === 'operation' && resultTableConf.filters._OPERATION_ ? resultTableConf.filters._OPERATION_ :resultTableConf.filters[col.key]"
              :row="scope.row"
              :index="scope.$index"
              :col="col.key"
            />
          </template>
        </dm-table-column>
        <dm-table-column
          v-else
          :key="index"
          :type="col.type"
          :label="col.value"
          :prop="col.key || ''"
          :min-width="col.minWidth||'55px'"
          :width="col.width"
          :fixed="col.fixed||false"
          :sortable="col.sortable||false"
        />
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
  import { param } from '@/lib/tools'
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
      vOperation:{
        render(createElement) {
          return this.renderFunc(createElement,this.row,vm.$parent,this.col,this.index)
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
            type:String,
            default:''
          }
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
        resultTableConf:{
          ...defaultConfig,
          ...this.tableConf
        },
        // table 数据
        dataResource:'',
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
      }
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
      const resetEvent = ['selection-change','current-change'];
      Object.keys(this.$listeners).forEach(key => {
        if(resetEvent.indexOf(key) < 0) {
          this.listeners[key] = this.$listeners[key]
        }
      });
      this.fetchData();
    },
    methods:{
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
        return address + '?' + param(obj)
      },
      // 从接口中获取数据
      httpData(){
        const paramObj = {
          ...this.resultTableConf.defaultParams,
          ...this.$DMALLMAX.searchQuery.query,
          rn:this.resultTableConf.pages.size,
          pn:this.pn
        };

        const url = this.getUrl(
          this.resultTableConf.url,
          this.resultTableConf.customParam ? this.resultTableConf.customParam(this.$parent,paramObj) : paramObj
        );

        return this.http(url)
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
      fetchData(){
        let fn = '';
        if(this.resultTableConf.url) {
          fn = this.httpData()
        } else {
          fn = this.getData();
        }

        fn
          .then((res) => {
            if(this.resultTableConf.setData) {
              this.dataResource = this.resultTableConf.setData(this.$parent,res.content)
            } else {
              this.dataResource = res.content
            }
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