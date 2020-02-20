<template>
  <div
    class="g-slider elem_no-scale"
    :class="['g-slider_'+sliderSize]"
  >
    <div class="g-slider-inner">
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <el-menu
          :unique-opened="false"
          :collapse-transition="false"
          mode="vertical"
        >
          <sidebar-item
            v-for="(route,index) in data"
            :key="index"
            :uniq-index="index + ''"
            :item="route"
          />
        </el-menu>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
  import SidebarItem from './SidebarItem'

  export default {
    components: { SidebarItem },
    data() {
      return {
        data:[],
        // 可选值 large,small,hidden
        sliderSize:'large'
      }
    },
    computed:{
    }
  }
</script>

<style scoped>

</style>
