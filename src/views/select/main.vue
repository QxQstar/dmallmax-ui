<template>
  <div>
    <dm-select
      v-model="val"
      multiple
      placeholder="请选择"
    >
      <dm-option
        v-for="(item) in list"
        :key="item"
        :label="item"
        :value="item"
      />
    </dm-select>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        val:[],
        list:[1,2,3]
      }
    }
  }
</script>
