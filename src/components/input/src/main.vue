<script>
  import { Input } from 'element-ui'
  export default {
    name:'ElInput',
    extends:Input,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
