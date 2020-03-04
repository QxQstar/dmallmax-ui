<template>
  <div>
    <dm-checkbox
      v-model="checked"
    >
      eee
    </dm-checkbox>

    <dm-checkbox-group v-model="checkboxGroup1">
      <dm-checkbox-button
        v-for="city in cities"
        :key="city"
        :label="city"
      >
        {{ city }}
      </dm-checkbox-button>
    </dm-checkbox-group>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        checked: true,
        checkboxGroup1:[],
        cities: ['上海', '北京', '广州', '深圳']
      }
    }
  }
</script>
