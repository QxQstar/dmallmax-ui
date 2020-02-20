<template>
  <div class="g-header elem_no-scale">
    <div class="header-main elem_1x">
      <div class="logo elem_no-scale">
        <img
          class="logo__img"
          src="../../../assets/images/h_dmall.png"
        >
      </div>
      <!-- nav -->
      <ul class="nav-box elem_1x">
        <li
          v-for="(navItem,key) in data"
          :key="key"
          class="nav-box__nav"
        >
          {{ navItem.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
        return {
          data:[]
        }
    },
    methods:{
      handleChangeNav() {
        // todo
      }
    }
  }
</script>

<style scoped>

</style>
