<script>
  import { Table } from 'element-ui'
  export default {
    name:'ElTable',
    extends:Table,
    props:{
      size:{
        type:String,
        default:'small'
      },
      border:{
        type:Boolean,
        default: true
      }
    }
  }
</script>
