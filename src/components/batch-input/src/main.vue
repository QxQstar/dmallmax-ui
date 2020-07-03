<template>
  <div class="dm-batch-input">
    <dm-input
      v-model="searchVal"
      :disabled="disabled"
      :placeholder="placeholder"
      class="dm-batch-input__input"
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
  /**
   * @displayName dm-batch-input 批量输入框
   */
  export default {
    name:'DmBatchInput',
    props:{
      /**
       * 绑定值
       * @model
       */
      value:{
        type:[Array,String],
        default() {
          return []
        }
      },
      /**
       * 输入框占位文本
       */
      placeholder:{
        type:String,
        default:''
      },
      /**
       * 禁用
       */
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
          if(typeof this.value === 'string'){
            return this.value
          } else {
            return this.value.join(',');
          }
        },
        set(val){
          /**
           * 在批量输入框的值改变时触发
           *
           * @property {array} 批量输入框的值
           */
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
