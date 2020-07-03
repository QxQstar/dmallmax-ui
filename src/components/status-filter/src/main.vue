<template>
  <div class="dm-status-filter">
    <dm-link
      v-for="(item) in list"
      :key="item[props.key]"
      class="dm-status-filter__link"
      :underline="false"
      :type="activeStatus == item[props.key] ? 'primary':undefined"
      @click.native="changeStatus(item)"
    >
      <span>{{ item[props.label] }}</span>
      <span>({{ item[props.num] }})</span>
    </dm-link>
  </div>
</template>
<script>
  export default {
    name:'DmStatusFilter',
    props:{
      list:{
        type:[Array,Object],
        default(){
          return []
        }
      },
      conf:{
        type:Object,
        default() {
          return {
            key:'status',
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
    created() {
      this.activeStatus = this.conf.default || '';
      this.setStatus();
    },
    methods:{
      setStatus(){
        const obj = {};
        if(this.activeStatus) {
          obj[this.conf.key || 'status'] = this.activeStatus;
        }
        this.$DMALLMAX.searchQuery.changeStatusParams(obj)
        return obj;
      },
      changeStatus(item){
        if(this.activeStatus != item[this.props.key]) {
          this.activeStatus = item[this.props.key];
          const obj = this.setStatus();
          this.$emit('change', obj)
        }
      }
    }
  }
</script>
