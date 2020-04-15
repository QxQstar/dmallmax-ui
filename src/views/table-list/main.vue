<template>
  <div>
    <dm-button
      @click="modifyFilter"
    >
      修改filter
    </dm-button>
    <dm-button
      @click="modifykey"
    >
      修改key
    </dm-button>
    <dm-button
      @click="modifyList"
    >
      修改 List
    </dm-button>
    <dm-table-list
      ref="tableList"
      :http="http"
      :table-conf="tableConf"
      @selection-change="handleSelectionChange"
      @current-change="handlePageChange"
      @sort-change="sortChange"
      @header-click="handleHeaderClick"
    />
  </div>
</template>
<script>
  import { http } from "../../lib/http";

  export default {
    data(){
      return {
        tableConf:{
          selectableMultiPage:true,
          unixId:'uid',
          pages:{
            size:10
          },
          dataResource:{
            list:[],
            total:0
          },
          thead:[
            {
              type:'selection',
              width:55,
              index:0
            },
            {
              value:'账号ID',
              key:'uid',
              index:1
            },
            {
              value:'姓名',
              key:'person.name',
              editable:true,
              index:2
            },
            {
              value:'操作',
              type:'operation',
              index:3
            }
          ],
          filters:{
            _OPERATION_(h,row,vm,col,index,oldRow){
              console.log(vm,col,index,oldRow)
              const btns = []
              if(row._ISEDIT_){
                btns.push(
                  h('dm-button',{
                    props:{
                      type:'text'
                    },
                    on:{
                      click(){
                        row._ISEDIT_ = false
                        row.person.name = oldRow.person.name;
                      }
                    }
                  },'取消')
                )
              } else {
                btns.push(
                  h('dm-button',{
                    props:{
                      type:'text'
                    },
                    on:{
                      click(){
                        row._ISEDIT_ = true
                      }
                    }
                  },'编辑')
                )
              }
              return h('div',btns)
            }
          },
        },
        http:http
      }
    },
    methods:{
      handleSelectionChange(roe){
        console.log(roe,'roe')
      },
      handlePageChange(pn,rn,page){
        console.log(pn,rn,page)
      },
      sortChange(obj){
        console.log(obj)
      },
      modifyFilter(){
        this.$set(this.tableConf.filters,'uid',function (h, row) {
          return h('span',row.uid +'--')
        })
      },
      modifyList(){
        this.tableConf.dataResource = {
          list:[{
            uid:'3344',
            age:'2',
            person:{
              name:'bella'
            }
          },{
            uid:'44',
            person:{
              name:'何遇'
            }
          }],
          total:2
        }
        this.$refs.tableList.fetchData()
      },
      modifykey(){
        const thead = this.tableConf.thead
        thead[1].key='age'

        this.tableConf.thead = [].concat(thead)
        this.$refs.tableList.fetchData()
      },
      handleHeaderClick(col){
        console.log(col)
      }
    }
  }
</script>
