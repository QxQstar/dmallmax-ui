<template>
  <div>
    <dm-steps
      :active="active"
    >
      <dm-step
        title="步骤 1"
      />
      <dm-step
        title="步骤 2"
      />
      <dm-step
        title="步骤 3"
      />
    </dm-steps>

    <dm-button
      style="margin-top: 12px;"
      @click="next"
    >
      下一步
    </dm-button>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        active:0
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
