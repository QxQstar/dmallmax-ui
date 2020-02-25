<script>
  import { RadioGroup } from 'element-ui'
  export default {
    name:'ElRadioGroup',
    extends:RadioGroup,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
