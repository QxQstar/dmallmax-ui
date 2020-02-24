<template>
  <div>
    <dm-table
      :data="tableData"
    >
      <dm-table-column
        prop="date"
        label="日期"
        width="180"
      />
      <dm-table-column
        prop="name"
        label="姓名"
        width="180"
      />
      <dm-table-column
        prop="address"
        label="地址"
      />
      <dm-table-column
        label="操作"
      >
        <template>
          <dm-button
            type="text"
            size="small"
          >
            Edit
          </dm-button>
          <dm-button
            type="text"
            size="small"
          >
            Delete
          </dm-button>
        </template>
      </dm-table-column>
    </dm-table>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
