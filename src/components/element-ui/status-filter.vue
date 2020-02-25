<template>
  <div class="dm-status-filter">
    <dm-link
      v-for="(item) in conf.list"
      :key="item[props.key]"
      class="dm-status-filter__link"
      :type="activeStatus == item[props.key] ? 'primary':undefined"
      @click.native="changeStatus(item)"
    >
      <span>{{ item[props.label] }}</span>
      <span>({{ item[props.num] }})</span>
    </dm-link>
  </div>
</template>
<script>
  import { param,getQueryObject ,objectMerge } from '../../lib/tools'
  export default {
    props:{
      onTime:{
        type:Boolean,
        default:false
      },
      conf:{
        type:Object,
        default() {
          return {
            key:'status',
            list:[],
            props:{
              label:'status_name',
              num:'total',
              key:'status'
            },
            default:''
          }
        }
      }
    },
    data(){
      return {
        activeStatus:''
      }
    },
    computed:{
      props(){
        return this.conf.props || {
          label:'status_name',
          num:'total',
          key:'status'
        }
      }
    },
    mounted() {
      this.activeStatus = this.conf.default || '';
    },
    methods:{
      changeStatus(item){
        this.activeStatus = item[this.props.key];
        let obj = {};
        obj[this.conf.key || 'status'] = this.activeStatus;
        this.$emit('handleChange', obj);
        if(this.onTime) {
          const search = getQueryObject();
          window.location.href = window.location.pathname + '?' + param(objectMerge(search,obj));
        }
      }
    }
  }
</script>
