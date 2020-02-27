<template>
  <div class="dm-table-list">
    <dm-table
      v-if="dataResource"
      ref="DmTableList"
      :data="dataResource.list || []"
      style="width: 100%"
      v-on="$listeners"
    >
      <template v-for="(col,index) in resultTableConf.thead">
        <dm-table-column
          v-if="resultTableConf.filters[col.key] || (col.colType === 'operate' && resultTableConf.operateFilter)"
          :key="index"
          :type="col.type"
          :index="col.index"
          :label="col.value"
          :prop="col.key || ''"
          :min-width="col.minWidth"
          :width="col.width"
          :fixed="col.fixed"
          :sortable="col.sortable"
          :ddd="col.key"
        >
          <template
            slot-scope="scope"
          >
            <v-operation
              :render-func="col.colType === 'operate' && resultTableConf.operateFilter ? resultTableConf.operateFilter :resultTableConf.filters[col.key]"
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
          :index="col.index"
          :label="col.value"
          :prop="col.key || ''"
          :min-width="col.minWidth"
          :width="col.width"
          :fixed="col.fixed"
          :sortable="col.sortable"
          :ddd="col.key"
        />
      </template>
    </dm-table>

    <dm-pagination
      v-if="resultTableConf.paging && dataResource"
      :page-size="resultTableConf.pages.size"
      :total="Number(dataResource.total)"
      :current-page.sync="current"
      @current-change="fetchData"
    />
  </div>
</template>
<script>
  const defaultConfig = {
    // 接口地址
    dataUrl: null,
    method:"GET",
    dataResource:{
      list:[],
      total:0
    },
    // 当页面上有 search-box 或者 status-filter 时不用传 defaultParams
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
    operateFilter:null,
    // 显示分页器
    paging:true,
    pages:{
      size:15
    },
    setData(content){
      return content
    }
  };
  export default {
    components:{
      vOperation:{
        render(createElement) {
          return this.renderFunc(createElement,this.row,this.col,this.index)
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
        current:1,
        resultTableConf:{
          ...defaultConfig,
          ...this.tableConf
        },
        // table 数据
        dataResource:this.tableConf.dataResource
      }
    },

    computed:{
      pn() {
        return (this.current - 1 ) * this.resultTableConf.pages.size
      }
    },
    watch:{
      '$DMALLMAX.searchQuery.query'(){
          this.fetchData()
      }
    },
    destroyed() {
      this.$DMALLMAX.searchQuery.resetData()
    },
    created(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        if(!this.resultTableConf.dataUrl) {
          return false
        }
        this.http({
          url:this.resultTableConf.dataUrl,
          param:{
            ...this.resultTableConf.defaultParams,
            ...this.$DMALLMAX.searchQuery.query,
            rn:this.resultTableConf.pages.size,
            pn:this.pn
          }
        }).then((content) => {
          this.dataResource = this.resultTableConf.setData ? this.resultTableConf.setData(content) : content
        })
      }
    }
  }
</script>
