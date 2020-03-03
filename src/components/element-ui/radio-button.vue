<script>
  import { RadioButton } from 'element-ui'
  export default {
    name:'ElRadioButton',
    extends:RadioButton,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
