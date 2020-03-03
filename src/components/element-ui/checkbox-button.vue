<script>
  import {CheckboxButton} from 'element-ui'
  export default {
    name:'ElCheckboxButton',
    extends:CheckboxButton,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
