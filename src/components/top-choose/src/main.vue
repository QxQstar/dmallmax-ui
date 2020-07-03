<template>
  <div class="dm-top-choose">
    <div class="dm-page-title dm-page-title--large dm-text--clear">
      <!-- @slot 左上角标题或者面包屑 -->
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
        <!-- @slot 右上角按钮 -->
        <slot name="otherBtn" />
      </div>
    </div>
    <!-- @slot 搜索框上方的内容 -->
    <slot name="show-result" />
    <!-- @slot 搜索框 -->
    <slot name="search-box" />
    <!--
      当状态筛选组件选中值发生变化时触发
      @event statusChange
      @property {object} 状态筛选组件的值
    -->
    <dm-status-filter
      v-if="config.content && config.content.length"
      :list="config.content"
      :conf="config.statusParam"
      @change="$emit('statusChange',$event)"
    />
  </div>
</template>
<script>
  /**
   * @displayName dm-top-choose 列表顶部布局组件
   */
  export default {
    name:'DmTopChoose',
    props:{
      /**
       * 配置
       */
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
