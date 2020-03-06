<template>
  <div class="dm-search-box">
    <div class="dm-search-box-content">
      <div
        v-for="(item, index) in searchConf"
        :key="index"
        class="dm-search-box__item dm-elem--inline-block"
      >
        <div
          v-if="item.label"
          class="search-label"
        >
          <label>{{ item.label }}</label>
        </div>
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
              v-if="!item.props"
            >
              <dm-option
                key="-1"
                value=""
                :label="item.ph || '请选择'"
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
                key=""
                :label="item.ph || '请选择'"
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
        <!--选择框  自带搜索url-->
        <!-- <el-select v-if="item.type == 'select_online'"
            size="mini"
            remote
            filterable
            :remote-method="remoteMethod(item.url, item.key)"
            :multiple="item.ismultiple"
            :placeholder="item.ph || '请选择'"
            v-model="searchModel[item.key]">
            <el-option v-for="item2 in selectInfo[item.key]"
                :key="item2[(item.props && item.props.key) || 'id']"
                :label="item2[(item.props && item.props.label) || 'value']"
                :value="item2[(item.props && item.props.key) || 'id']">
            </el-option>
        </el-select> -->
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
          :start-placeholder="item.startPh || '开始日期'"
          :end-placeholder="item.endPh || '结束日期'"
        />
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
  import { isFunction } from "../../lib/tools";

  export default {
    name: 'DataSearch',
    componentName: 'dataSearch',
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
          const searchQuery = this.getQuery(val)
          this.$emit('update:query', searchQuery)
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
      getQuery(val){
        let query = {...val};
        let searchQuery = {};
        this.changeDateRangeParam(query);
        for(let key in query) {
          if(query[key]) {
            searchQuery[key] = query[key];
          }
        }
        return searchQuery;
      },
      changeDateRangeParam(query){
        let daterange=[];
        this.searchConf.forEach(item=>{
          if(this.doubleDateType.indexOf(item.type) > -1){
            daterange.push(item);
          }
        });
        daterange.forEach(item=>{
          if(query[item.key]&& Object.prototype.toString.call(query[item.key])== '[object Array]'){
            query[item.key1]=query[item.key][1];
            query[item.key]=query[item.key][0];
          }
        })

      },
      getInitParams() {
        const searchParam = {};
        this.searchConf.forEach(item => {
          searchParam[item.key] = isFunction(item.default) ? item.default(this) : item.default;
        });
        this.searchModel = searchParam;
        this.initSearchModel = {...searchParam};
        this.setSearchQuery();
      },
      setSearchQuery(){
        const searchQuery = this.getQuery(this.searchModel);
        this.$DMALLMAX.searchQuery.changeSearchParams(searchQuery)
        return searchQuery
      },
      //点击搜索
      handleSearch() {
        const searchQuery = this.setSearchQuery();
        this.$emit('search', searchQuery);
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
