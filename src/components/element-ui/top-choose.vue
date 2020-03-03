<template>
  <div class="dm-top-choose">
    <div class="dm-page-title dm-page-title--large dm-text--clear">
      <slot>{{ config.title }}</slot>
      <div
        v-if="config.createname || $slots.otherBtn"
        class="dm-top-choose__btns dm-block--r"
      >
        <dm-button
          v-show="config.createname"
          type="primary"
          @click="toPath"
        >
          {{ config.createname }}
        </dm-button>
        <slot name="otherBtn" />
      </div>
    </div>
    <slot name="show-result" />
    <slot name="search-box" />
    <dm-status-filter
      v-if="config.content && config.content.length"
      :list="config.content"
      :conf="config.statusParam"
      @change="$emit('statusChange',$event)"
    />
  </div>
</template>
<script>
  export default {
    props:{
      config:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return {}
    },
    methods:{
      toPath() {
        this.$router.push(this.config.path)
      },
    }
  }
</script>
