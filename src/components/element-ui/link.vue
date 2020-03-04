<script>
  import { Link } from 'element-ui'
  export default {
    name:'ElLink',
    extends:Link,
    props:{
      underline:{
        type:Boolean,
        default:false
      }
    }
  }
</script>
