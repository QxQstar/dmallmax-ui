<script>
  import { Form } from 'element-ui'
  export default {
    name:'ElForm',
    extends:Form,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
