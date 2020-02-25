<template>
  <div>
    <dm-button
      type="primary"
    >
      保存
    </dm-button>

    <dm-button
      type="primary"
      plain
    >
      下载
    </dm-button>

    <dm-button
      plain
    >
      重置
    </dm-button>

    <dm-button>
      取消
    </dm-button>

    <dm-button
      type="text"
      @click="opdia"
    >
      详情
    </dm-button>
  </div>
</template>

<script>
  export default {
    data(){
      return {}
    },
    methods:{
      opdia(){
        this.$message.error('dfff')
      }
    }
  }
</script>
