<template>
  <div class="dm-search-box">
    <div class="dm-search-box-content dm-elem--flex">
      <div
        v-for="(item, index) in searchConf"
        :key="index"
        class="dm-search-box__item"
      >
        <div
          v-if="item.label"
          class="dm-search-label dm-elem--inline-block"
        >
          <label>{{ item.label }}</label>
        </div>
        <div class="dm-elem--inline-block">
          <!--输入框-->
          <dm-input
            v-if="item.type == 'input'"
            v-model="searchModel[item.key]"
            :placeholder="item.ph || '请输入搜索项'"
          />
          <!--批量输入-->
          <dm-batch-input
            v-if="item.type == 'batchInput'"
            v-model="searchModel[item.key]"
            :placeholder="item.ph || '请输入'"
          />
          <!--选择框-->
          <dm-select
            v-if="item.type == 'select'"
            v-model="searchModel[item.key]"
            :multiple="item.ismultiple"
            :placeholder="item.ph || '请选择'"
            filterable
            clearable
          >
            <template
              v-if="item.options"
            >
              <dm-option
                v-for="item2 in item.options"
                :key="item2[(item.props && item.props.key) ]"
                :value="item2[(item.props && item.props.key) ]"
                :label="item2[(item.props && item.props.label) ]"
              />
            </template>
            <template v-else>
              <template
                v-if="!Array.isArray(selectInfo[item.key])"
              >
                <dm-option
                  v-if="selectInfo[item.key] && Object.keys(selectInfo[item.key]).every(key => key + '' !== '0')"
                  key="-1"
                  value=""
                  label="全部"
                />
                <dm-option
                  v-for="(item2, i) in selectInfo[item.key]"
                  :key="i"
                  :value="i"
                  :label="item2"
                />
              </template>
              <template v-else>
                <dm-option
                  v-if="selectInfo[item.key] && selectInfo[item.key].every(item2 => item2[(item.props && item.props.key)] && item2[(item.props && item.props.key)] + '' !== '0')"
                  key="-1"
                  label="全部"
                  value=""
                />
                <dm-option
                  v-for="item2 in selectInfo[item.key]"
                  :key="item2[(item.props && item.props.key) ]"
                  :label="item2[(item.props && item.props.label) ]"
                  :value="item2[(item.props && item.props.key) ]"
                />
              </template>
            </template>
          </dm-select>
          <!--级联选择-->
          <dm-cascader
            v-if="item.type == 'cascader'"
            v-model="searchModel[item.key]"
            :options="selectInfo[item.key]"
            filterable
            clearable
            :props="{...item.props,...{expandTrigger:'hover'}}"
          />
          <!--单个时间选择-->
          <dm-date-picker
            v-if="singleDateType.indexOf(item.type) > -1"
            v-model="searchModel[item.key]"
            :type="item.type"
            clearable
            :value-format="item.valueFormat || 'yyyy-MM-dd'"
            :format="item.formatter"
            :placeholder="item.ph || '请选择日期'"
          />
          <!--daterange-->
          <dm-date-picker
            v-if="doubleDateType.indexOf(item.type) > -1"
            v-model="searchModel[item.key]"
            :picker-options="daterangePickerOptions"
            :type="item.type"
            range-separator="至"
            clearable
            :format="item.formatter"
            :value-format="item.valueFormat || 'yyyy-MM-dd'"
            :start-placeholder="(item.ph||'').split(',')[0] || '开始日期'"
            :end-placeholder="(item.ph||'').split(',')[1] || '结束日期'"
          />
        </div>
      </div>
      <template
        v-if="searchConf && searchConf.length > 0"
        class="dm-search-box-btns "
      >
        <dm-button
          type="primary"
          class="dm-search-box__button"
          @click="handleSearch"
        >
          搜索
        </dm-button>
        <dm-button
          plain
          class="dm-search-box__button"
          @click="handleReset"
        >
          重置
        </dm-button>
      </template>
    </div>
  </div>
</template>
<script>
  import { isFunction } from "../../../lib/tools";

  export default {
    name: 'DmSearchBox',
    props: {
      //搜索配置
      searchData: {
        type: Object,
        default(){
          return {
            searchConf:[],
            selectInfo:{}
          }
        }
      }
    },
    data() {
      return {
        searchModel: {},
        initSearchModel: {},       //初始化参数model，用于reset后赋值
        daterangePickerOptions:{},
        singleDateType:['year','month','date','week','datetime'],
        doubleDateType:['datetimerange','daterange','monthrange'],
      }
    },
    computed:{
      searchConf(){
        return this.searchData.searchConf || []
      },
      selectInfo(){
        return this.searchData.selectInfo || {}
      }
    },
    watch: {
      searchModel: {
        handler(val) {
          // 修改传入进来的参数
          const searchParams = this.getSearchParams(val)
          this.$emit('update:query', searchParams)
        },
        deep: true // 深度监听
      }
    },
    created() {
      if(this.searchConf && this.searchConf.length > 0) {
        this.getInitParams();
      }
    },
    methods: {
      getSearchParams(val){
        let query = {...val};
        let searchQuery = {};
        for(let key in query) {
          if(query[key]) {
            const _key = key.replace(/\s/g,'')
            if(/^\[.+\]$/.test(_key)){
              searchQuery = {
                ...searchQuery,
                ...this.separateParam(query[key],_key)
              }
            }else{
              searchQuery[key] = query[key];
            }
          }
        }
        return searchQuery;
      },
      // 解构参数
      separateParam(value,key){
        const keyArr = key.replace(/^\[/,'').replace(/\]$/,'').split(',');
        const result = {};
        keyArr.forEach((key,index) => {
          result[key] = value[index]
        });
        return result;
      },
      getInitParams() {
        const searchParam = {};
        this.searchConf.forEach(item => {
          searchParam[item.key] = isFunction(item.default) ? item.default(this) : item.default;
        });
        this.searchModel = searchParam;
        this.initSearchModel = {...searchParam};
        this.setSearchParams();
      },
      setSearchParams(){
        const searchParams = this.getSearchParams(this.searchModel);
        this.$DMALLMAX.searchQuery.changeSearchParams(searchParams)
        return searchParams
      },
      //点击搜索
      handleSearch() {
        const searchParams = this.setSearchParams();
        this.$emit('search', searchParams);
      },
      //点击重置
      handleReset() {
        this.searchModel = {...this.initSearchModel};
        this.handleSearch();
        this.$emit('reset');
      }
    },
  }
</script>
