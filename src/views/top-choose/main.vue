<template>
  <dm-top-choose
    :config="{
      title:'商品管理',
      createname:'返回',
      path:'/',
      content:[{status:'3',status_name:'代发货',total:34},{status:'4',status_name:'代发货2',total:4}],
      statusParam:{
        key:'status',
        props:{
          label:'status_name',
          num:'total',
          key:'status'
        },
        default:'3'
      }
    }"
    @statusChange="statusChange"
  >
    <dm-button slot="otherBtn">
      导出
    </dm-button>
  </dm-top-choose>
</template>
<script>
  export default {
    data(){
      return {}
    },
    methods:{
      statusChange(value){
        console.log(value)
      }
    }
  }
</script>
