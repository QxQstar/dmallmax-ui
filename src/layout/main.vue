<template>
  <div class="g-layout">
    <header-bar />
    <div class="g-container elem_1x">
      <!--<slide-bar />-->
      <app-main />
    </div>
  </div>
</template>

<script>
    import headerBar from './components/headerBar/main.vue'
    // import slideBar from './components/slideBar/main.vue'
    import appMain from './components/appMain.vue'
    export default {
      components:{headerBar,appMain},
      data() {
          return {}
      }
    }
</script>
