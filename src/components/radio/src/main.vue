<script>
  import { Radio } from 'element-ui'
  export default {
    name:'ElRadio',
    extends:Radio,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
