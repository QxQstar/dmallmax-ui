<script>
  import { Carousel } from 'element-ui'
  export default {
    name:'ElCarousel',
    extends:Carousel,
    props:{
      size:{
        type:String,
        default:'small'
      }
    }
  }
</script>
