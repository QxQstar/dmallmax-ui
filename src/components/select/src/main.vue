<script>
  import { Select } from 'element-ui'
  export default {
    name:'ElSelect',
    extends:Select,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
