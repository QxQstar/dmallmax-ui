export default function searchQuery(Vue) {
  return new Vue({
    data(){
      return {
        // status-filter 中的参数
        statusParams:{},
        // search-box 中的参数
        searchParams:{}
      }
    },
    computed:{
      query(){
        return {
          ... this.statusParams,
          ... this.searchParams
        }
      }
    },
    methods:{
      changeSearchParams(value){
        this.searchParams = value
      },
      changeStatusParams(value){
        this.statusParams = value;
      },
      resetData(){
        this.statusParams = {};
        this.searchParams = {}
      }
    }
  })
}
