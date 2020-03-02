<template>
  <div>
    <dm-search-box
      :search-data="searchData"
      @search="handleSearch"
    />
  </div>
</template>
<script>
  export default {
    data(){
      return {
        searchData:{
          searchConf:[
            {
              key:'date_begin',
              type:'daterange',
              label:'',
              key1:'date_end',
              default:['2019-12-1','2019-12-2']
            },
            {
              key: 'checked_by',
              type: 'select',
              label: '',
              options:[
                {
                  checked_by:'',
                  type_name:'全部货损单'
                },
                {
                  checked_by:'SUPPORT_STAFF',
                  type_name:'客服定损'
                },
                {
                  checked_by:'WAREHOUSE',
                  type_name:'仓库定损'
                }
              ],
              props:{
                key:'checked_by',
                label:'type_name'
              },
              ph: '货损单类型',
            },
            {
              key: 'take_responsibility',
              type: 'select',
              label: '',
              options:[
                {
                  responsibility:'',
                  label:'全部'
                },
                {
                  responsibility:'COMPANY',
                  label:'公司'
                },
                {
                  responsibility:'TENANT',
                  label:'入驻'
                },
                {
                  responsibility:'DELIVERYMAN',
                  label:'司机'
                }
              ],
              props:{
                key:'responsibility',
                label:'label'
              },
              ph: '成本责任人',
            },
            {
              key:'payment-status',
              type: 'select',
              label: '',
              options:[
                {
                  value:'',
                  label:'全部'
                },
                {
                  value:'SUCCESS',
                  label:'是'
                },
                {
                  value:'PENDING',
                  label:'否'
                }
              ],
              props:{
                key:'value',
                label:'label'
              },
              ph: '司机是否支付',
            },
            {
              key: 'key',
              type: 'input',
              ph: '按货损单号/订单号/下单账号/客户名称/相关司机'
            },
            {
              key:'mulit',
              type:'batchInput',
              ph:'多个'
            }
          ],
          selectInfo:{}
        }
      }
    },
    methods:{
      handleSearch(obj){
        console.log(obj)
      }
    }
  }
</script>
