<template>
  <div>
    <dm-search-box
      :search-data="searchData"
      @search="handleSearch"
    />
  </div>
</template>
<script>
  export default {
    data(){
      return {
        searchData:{
          searchConf:[
            {
              key: 'checked_by',
              type: 'select',
              label: '',
              options:[
                {
                  checked_by:'',
                  type_name:'全部货损单'
                },
                {
                  checked_by:'SUPPORT_STAFF',
                  type_name:'客服定损'
                },
                {
                  checked_by:'WAREHOUSE',
                  type_name:'仓库定损'
                }
              ],
              props:{
                key:'checked_by',
                label:'type_name'
              },
              ph: '货损单类型',
            },
            {
              key: 'take_responsibility',
              type: 'select',
              label: '成本责任人',
              ph: '成本责任人',
            },
            {
              key:'payment-status',
              type: 'select',
              label: '司机是否支付',
              props:{
                key:'value',
                label:'label'
              },
              ph: '司机是否支付',
            },
            {
              key:'[date_begin,date_end]',
              type:'daterange',
              formatter:'yyyy-MM-dd',
              label:'时间',
              default(){return ['2019-12-1','2019-12-2']}
            },
            {
              key: 'key',
              label: '按货损单号',
              type: 'input',
              ph: '按货损单号/订单号/下单账号/客户名称/相关司机'
            },
            {
              key:'mulit',
              type:'batchInput',
              ph:'多个'
            },

            {
              key: '[category,onde,rr]',
              type: 'cascader',
              label: '',
              props:{
                value:'value' // select组件中用下拉选择的显示的选项和后端需要的筛选字段
              },
            },
          ],
          selectInfo:{
            'take_responsibility':{
              COMPANY:'公司',
              DELIVERYMAN:'司机'
            },
            'payment-status':[
              {
                value:'SUCCESS',
                label:'是'
              },
              {
                value:'PENDING',
                label:'否'
              }
            ],
            '[category,onde,rr]':[{
              value: 'zhinan',
              label: '指南',
              children: [{
                value: 'shejiyuanze',
                label: '设计原则',
                children: [{
                  value: 'yizhi',
                  label: '一致'
                }, {
                  value: 'fankui',
                  label: '反馈'
                }, {
                  value: 'xiaolv',
                  label: '效率'
                }, {
                  value: 'kekong',
                  label: '可控'
                }]
              }, {
                value: 'daohang',
                label: '导航',
                children: [{
                  value: 'cexiangdaohang',
                  label: '侧向导航'
                }, {
                  value: 'dingbudaohang',
                  label: '顶部导航'
                }]
              }]
            }, {
              value: 'zujian',
              label: '组件',
              children: [{
                value: 'basic',
                label: 'Basic',
                children: [{
                  value: 'layout',
                  label: 'Layout 布局'
                }, {
                  value: 'color',
                  label: 'Color 色彩'
                }, {
                  value: 'typography',
                  label: 'Typography 字体'
                }, {
                  value: 'icon',
                  label: 'Icon 图标'
                }, {
                  value: 'button',
                  label: 'Button 按钮'
                }]
              }, {
                value: 'form',
                label: 'Form',
                children: [{
                  value: 'radio',
                  label: 'Radio 单选框'
                }, {
                  value: 'checkbox',
                  label: 'Checkbox 多选框'
                }, {
                  value: 'input',
                  label: 'Input 输入框'
                }, {
                  value: 'input-number',
                  label: 'InputNumber 计数器'
                }, {
                  value: 'select',
                  label: 'Select 选择器'
                }, {
                  value: 'cascader',
                  label: 'Cascader 级联选择器'
                }, {
                  value: 'switch',
                  label: 'Switch 开关'
                }, {
                  value: 'slider',
                  label: 'Slider 滑块'
                }, {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器'
                }, {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器'
                }, {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器'
                }, {
                  value: 'upload',
                  label: 'Upload 上传'
                }, {
                  value: 'rate',
                  label: 'Rate 评分'
                }, {
                  value: 'form',
                  label: 'Form 表单'
                }]
              }, {
                value: 'data',
                label: 'Data',
                children: [{
                  value: 'table',
                  label: 'Table 表格'
                }, {
                  value: 'tag',
                  label: 'Tag 标签'
                }, {
                  value: 'progress',
                  label: 'Progress 进度条'
                }, {
                  value: 'tree',
                  label: 'Tree 树形控件'
                }, {
                  value: 'pagination',
                  label: 'Pagination 分页'
                }, {
                  value: 'badge',
                  label: 'Badge 标记'
                }]
              }, {
                value: 'notice',
                label: 'Notice',
                children: [{
                  value: 'alert',
                  label: 'Alert 警告'
                }, {
                  value: 'loading',
                  label: 'Loading 加载'
                }, {
                  value: 'message',
                  label: 'Message 消息提示'
                }, {
                  value: 'message-box',
                  label: 'MessageBox 弹框'
                }, {
                  value: 'notification',
                  label: 'Notification 通知'
                }]
              }, {
                value: 'navigation',
                label: 'Navigation',
                children: [{
                  value: 'menu',
                  label: 'NavMenu 导航菜单'
                }, {
                  value: 'tabs',
                  label: 'Tabs 标签页'
                }, {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑'
                }, {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单'
                }, {
                  value: 'steps',
                  label: 'Steps 步骤条'
                }]
              }, {
                value: 'others',
                label: 'Others',
                children: [{
                  value: 'dialog',
                  label: 'Dialog 对话框'
                }, {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示'
                }, {
                  value: 'popover',
                  label: 'Popover 弹出框'
                }, {
                  value: 'card',
                  label: 'Card 卡片'
                }, {
                  value: 'carousel',
                  label: 'Carousel 走马灯'
                }, {
                  value: 'collapse',
                  label: 'Collapse 折叠面板'
                }]
              }]
            }, {
              value: 'ziyuan',
              label: '资源',
              children: [{
                value: 'axure',
                label: 'Axure Components'
              }, {
                value: 'sketch',
                label: 'Sketch Templates'
              }, {
                value: 'jiaohu',
                label: '组件交互文档'
              }]
            }]
          }
        }
      }
    },
    created(){
      const param = {
        date_begin:'2019-12-4',
        date_end:'2019-12-6',
        checked_by:'SUPPORT_STAFF',
        category: "zujian",
        onde: "form",
        rr: "checkbox",
      }
      const getDefault = (searchItem) => {
        return this.combineValue(param,searchItem.key) || searchItem.default
      }
      this.searchData.searchConf = this.searchData.searchConf.map(item => {
        return {
          ...item,
          default:getDefault(item)
        }
      })

    },
    methods:{
      // 根据 key  的格式生成参数的格式
      combineValue(value,key){
        let result
        key = key.trim();
        // 如果 key 是 [key1,key2] 这种形式
        if(/^\[.+\]$/.test(key)){
          const keyArr = key.replace(/^\[/,'').replace(/\]$/,'').split(',');
          result = []
          keyArr.forEach(key => {
            result.push(value[key])
          });

          if(result.every(item => !item)){
            result = ''
          }
        } else {
          result =  value[key];
        }
        return result
      },
      handleSearch(obj){
        console.log(obj)
      }
    }
  }
</script>
