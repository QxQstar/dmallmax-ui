<template>
  <dm-date-picker
    v-model="value1"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  />
</template>
<script>
  export default {
    data(){
      return {
        value1:''
      }
    }
  }
</script>
