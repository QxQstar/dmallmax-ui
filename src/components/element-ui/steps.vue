<script>
  import { Steps } from 'element-ui'
  export default {
    name:'ElSteps',
    extends:Steps,
    props:{
      finishStatus:{
        type:String,
        default:'success'
      }
    }
  }
</script>
