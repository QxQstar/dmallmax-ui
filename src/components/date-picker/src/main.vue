<script>
  import { DatePicker } from 'element-ui'
  export default {
    name:'ElDatePicker',
    extends:DatePicker,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
