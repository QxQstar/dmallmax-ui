<template>
  <div>
    <dm-status-filter
      :list="list"
      :conf="conf"
      @change="handleChange"
    />
  </div>
</template>
<script>
  export default {
    data(){
      return {
        list:{
          0:{
            status_name:'全部',
            status:'',
            total:22
          },
          2:{
            status_name:'待发布',
            status:'2',
            total:20
          },
          3:{
            status_name:'已发布',
            status:'3',
            total:2
          }
        },
        // list:[{
        //   status_name:'待发布',
        //   status:'',
        //   total:2
        // },
        //   {
        //     status_name:'已发布',
        //     status:'3',
        //     total:2
        //   }
        // ],
        conf:{
          key:'order_status',
          props:{
            label:'status_name',
            num:'total',
            key:'status'
          },
        }
      }
    },
    methods:{
      handleChange(vv){
        console.log(vv)
      }
    }
  }
</script>
