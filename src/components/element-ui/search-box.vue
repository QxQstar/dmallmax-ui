<template>
  <div class="dm-search-box dm-elem--flex">
    <div class="dm-search-box-content dm-elem--1x">
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
          :suffix-icon="item.icon"
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
          :props="{ expandTrigger: 'hover' }"
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
          v-if="item.type == 'date'"
          v-model="searchModel[item.key]"
          type="date"
          :value-format="item.valueFormat || 'yyyy-MM-dd '"
          :format="item.formatter || 'yyyy-MM-dd'"
          :placeholder="item.ph || '请选择日期'"
        />
        <!--daterange-->
        <dm-date-picker
          v-if="item.type == 'daterange'"
          v-model="searchModel[item.key]"
          :picker-options="daterangePickerOptions"
          type="datetimerange"
          range-separator="至"
          :format="item.formatter || 'yyyy-MM-dd'"
          :value-format="item.valueFormat || 'yyyy-MM-dd'"
          :start-placeholder="item.startPh || '开始日期'"
          :end-placeholder="item.endPh || '结束日期'"
        />
      </div>
    </div>
    <div
      v-if="searchConf && searchConf.length > 0"
      class="dm-search-box-btns dm-elem--no-scale"
    >
      <dm-button
        type="primary"
        @click="handleSearch"
      >
        搜索
      </dm-button>
      <dm-button
        plain
        @click="handleReset"
      >
        重置
      </dm-button>
    </div>
  </div>
</template>
<script>
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
        daterangePickerOptions:{}
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
          if(item.type === 'daterange'){
            daterange.push(item);
          }
        })
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
          searchParam[item.key] = item.default;
        });
        this.searchModel = searchParam;
        this.initSearchModel = {...searchParam};
      },
      //点击搜索
      handleSearch() {
        const searchQuery = this.getQuery(this.searchModel);
        this.$emit('search', searchQuery);

        this.$DMALLMAX.searchQuery.changeSearchParams(searchQuery)
      },
      //点击重置
      handleReset() {
        this.searchModel = {...this.initSearchModel};
        this.$emit('reset');
        this.handleSearch()
      }
    },
  }
</script>
