<template>
  <div>
    <dm-input
      v-model="value"
      size="small"
      placeholder="请输入内容"
      style="width: 270px"
    />
  </div>
</template>
<script>
  export default {
    data(){
      return {
        value:''
      }
    }
  }
</script>
