<script>
  import  { Button }  from 'element-ui'
  export default {
    name:'ElButton',
    extends:Button,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
