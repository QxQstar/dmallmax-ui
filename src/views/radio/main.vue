<template>
  <div>
    <dm-radio
      v-model="radio"
      label="1"
    >
      ddd1
    </dm-radio>
    <dm-radio
      v-model="radio"
      border
      label="2"
    >
      ddd2
    </dm-radio>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        radio:'2'
      }
    }
  }
</script>
