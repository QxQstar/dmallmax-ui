<script>
  import { Breadcrumb } from 'element-ui'
  export default {
    name:'ElBreadcrumb',
    extends:Breadcrumb,
    props:{
      separatorClass:{
        type:String,
        default:'el-icon-arrow-right'
      }
    }
  }
</script>
