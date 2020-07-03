<template>
  <div class="dm-empty-box">
    <!-- @slot 暂无数据显示内容 -->
    <slot>
      <i
        v-if="icon"
        class="dm-empty-box__icon dm-text--primary"
        :class="icon"
      />
      <p class="dm-text--medium dm-text--tip">
        {{ content }}
      </p>
    </slot>
  </div>
</template>
<script>
  /**
   * @displayName dm-empty-box 暂无数据
   */
  export default {
    name:'DmEmptyBox',
    props:{
      /**
       * 要显示的 icon
       */
      icon:{
        type:String,
        default:'el-icon-warning'
      },
      /**
       * 要显示的文字内容
       */
      content:{
        type:String,
        default: '暂无数据'
      }
    },
    data(){
      return {}
    }
  }
</script>
