<template>
  <div class="dm-col-content">
    <span
      v-if="!col.editable || !row._ISEDIT_"
    >
      {{ text }}
    </span>
    <span
      v-if="col.editable && row._ISEDIT_"
    >
      <dm-input
        v-model="text"
      />
    </span>
  </div>
</template>
<script>
  import { Path } from "cool-path"

  export default {
    name:'DmColContent',
    props:{
      col:{
        type:Object,
        required:true
      },
      row:{
        type:Object,
        required: true
      }
    },
    data(){
      return {
        path:new Path(this.col.key)
      }
    },
    computed:{
      text:{
        get(){
          return this.path.getIn(this.row) || '- -'
        },
        set(value){
          this.path.setIn(this.row,value)
        }
      }
    }
  }
</script>
