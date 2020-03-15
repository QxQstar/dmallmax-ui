<script>
  import { Checkbox } from 'element-ui'
  export default {
    name:'ElCheckbox',
    extends:Checkbox,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
