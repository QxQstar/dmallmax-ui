<script>
  import { InputNumber } from 'element-ui'
  export default {
    name:'ElInputNumber',
    extends:InputNumber,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
