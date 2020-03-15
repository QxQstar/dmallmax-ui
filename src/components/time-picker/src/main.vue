<script>
  import { TimePicker } from 'element-ui'
  export default {
    name:'ElTimePicker',
    extends:TimePicker,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
