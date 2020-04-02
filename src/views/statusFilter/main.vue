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
          2:{
            status_name:'ff',
            status:'',
            total:2
          },
          3:{
            status_name:'ff55',
            status:'3',
            total:2
          }
        },
        // list:[{
        //   status_name:'ff',
        //   status:'',
        //   total:2
        // },
        //   {
        //     status_name:'ff55',
        //     status:'3',
        //     total:2
        //   }
        // ],
        conf:{
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
