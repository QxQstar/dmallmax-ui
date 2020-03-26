<template>
  <div class="dm-empty-box">
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
  export default {
    name:'DmEmptyBox',
    props:{
      icon:{
        type:String,
        default:'el-icon-warning'
      },
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
