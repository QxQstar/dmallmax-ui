<script>
  import { Cascader } from 'element-ui'
  export default {
    name:'ElCascader',
    extends:Cascader,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
