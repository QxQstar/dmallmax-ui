<script>
  import { Pagination } from 'element-ui'
  export default {
    name:'ElPagination',
    extends:Pagination,
    props:{
      background:{
        type:Boolean,
        default:true
      },
      layout:{
        type:String,
        default: 'prev, pager, next'
      }
    }
  }
</script>
