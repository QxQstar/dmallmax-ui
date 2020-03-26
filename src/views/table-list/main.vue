<template>
  <dm-table-list
    :http="http"
    :table-conf="tableConf"
    @selection-change="handleSelectionChange"
    @current-change="handlePageChange"
    @sort-change="sortChange"
  />
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
            list:[{
              uid:'3344',
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
          },
          thead:[
            {
              type:'selection',
              width:55
            },
            {
              value:'账号ID',
              key:'uid',
            },
            {
              value:'姓名',
              key:'person.name',
              editable:true
            },
            {
              value:'操作',
              type:'operation'
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
      }
    }
  }
</script>
