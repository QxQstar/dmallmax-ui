<script>
  import { CheckboxGroup } from 'element-ui'
  export default {
    name:'ElCheckboxGroup',
    extends:CheckboxGroup,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
