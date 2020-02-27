<template>
  <div class="dm-batch-input">
    <dm-input
      v-model="searchVal"
      :disabled="disabled"
      :placeholder="placeholder"
      style="width: 200px"
    />
    <dm-button
      type="primary"
      icon="el-icon-right"
      class="dm-batch-input__button"
      @click="handleOpenDia"
    />

    <dm-dialog
      title="批量查询"
      :visible.sync="dialogVisible"
      width="400px"
      class="dm-batch-input-dialog"
    >
      <div>
        <dm-input
          v-model="dialogValue"
          type="textarea"
          rows="10"
          placeholder="数据之间请使用换行(回车)分隔"
        />
      </div>
      <span slot="footer">
        <dm-button
          @click="dialogVisible = false"
        >
          取 消
        </dm-button>
        <dm-button
          type="primary"
          @click="handleChangeSearchVal"
        >
          确 定
        </dm-button>
      </span>
    </dm-dialog>
  </div>
</template>
<script>
  export default {
    props:{
      value:{
        type:Array,
        default() {
          return []
        }
      },
      placeholder:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return {
        dialogVisible:false,
        dialogValue:''
      }
    },
    computed:{
      searchVal:{
        get(){
          return this.value.join(',');
        },
        set(val){
          this.$emit('input',val.split(','))
        }
      }
    },
    methods:{
      handleOpenDia(){
        this.dialogVisible = true;
        this.dialogValue = this.searchVal.replace(/,/g,'\n')
      },
      handleChangeSearchVal(){
        this.dialogVisible = false;
        this.searchVal = this.dialogValue.replace(/\n/g,',')
      }
    }
  }
</script>
