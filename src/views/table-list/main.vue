<template>
  <dm-table-list
    :http="http"
    :table-conf="tableConf"
  />
</template>
<script>
  import { http } from "../../lib/http";

  export default {
    data(){
      return {
        tableConf:{
          dataResource:{
            list:[{
              uid:'3344',
            }],
            total:1
          },
          thead:[
            {
              value:'账号ID',
              key:'uid'
            },
            {
              value:'操作',
              colType:'operate'
            }
          ],
          operateFilter(h){
            return h('div',[
              h('dm-button',{
                props:{
                  type:'text'
                }
              },'编辑')
            ])
          }
        },
        http:http
      }
    }
  }
</script>
