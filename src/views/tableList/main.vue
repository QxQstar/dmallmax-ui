<template>
  <div>
    <dm-table-list
      ref="tableList"
      :table-conf="tableConf"
      @selection-change="handleSelectionChange"
      @current-change="handlePageChange"
      @sort-change="sortChange"
    />
  </div>
</template>
<script>
  export default {
    data(){
      return {
        tableConf:{
          selectableMultiPage:true,
          unixId:'uid',
          dataResource: {
            list:[
              {
              uid:'3344',
              age:'2',
              person:{
                name:'bella'
              }
            },
              {
              uid:'44',
              person:{
                name:'何遇'
              }
            }
            ],
            total:2,
            title:(h) => {
              return h('span',{
                style:{color:'red'}
              },'标题')
            },
            right:'右侧'
          },
          thead:[
            {
              type:'selection',
              width:55,
              index:0
            },
            {
              value:'账号ID',
              key:'uid',
              index:1
            },
            {
              value:'姓名',
              key:'person.name',
              editable:true,
              index:2
            },
            {
              value:'操作',
              type:'operation',
              index:3
            }
          ],
          filters:{
            _OPERATION_(h,row,vm,col,index,oldRow){
              const btns = []
              if(row._ISEDIT_){
                btns.push(
                  h('dm-button',{
                    props:{
                      type:'text'
                    },
                    on:{
                      click(){
                        row._ISEDIT_ = false
                        row.person.name = oldRow.person.name;
                      }
                    }
                  },'取消')
                )
              } else {
                btns.push(
                  h('dm-button',{
                    props:{
                      type:'text'
                    },
                    on:{
                      click(){
                        row._ISEDIT_ = true
                      }
                    }
                  },'编辑')
                )
              }
              return h('div',btns)
            }
          },
        },
      }
    },
    methods:{
      handleSelectionChange(roe){
        console.log(roe,'roe')
      },
      handlePageChange(pn,rn,page){
        console.log(pn,rn,page)
      },
      sortChange(obj){
        console.log(obj)
      }
    }
  }
</script>
