<template>
  <div>
    <div class="content">
      <h4>实事项目明细</h4>
      <el-table :data="tableData" style="width: 100%" :show-header="false" @row-click="examineDetails">
        <el-table-column prop="projectName" label="内容"></el-table-column>
      </el-table>
      <!-- 分页 -->
      <div class="page">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.page" :page-sizes="[10, 20, 50, 100]" :page-size="querInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total" background></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import * as homeApi from '../../../api/home-api'
export default {
  data () {
    return {
      tableData: [],
      // 查询条件
      querInfo: {
        page: 1,
        size: 10
      },
      // 商品总条数
      total: 0
    }
  },
  created () {
    // 获取实事项目列表数据
    this.getPeoplesProjectData()
  },
  methods: {
    // 获取实事项目列表数据
    getPeoplesProjectData () {
      const data = {
        page: this.querInfo.page,
        size: this.querInfo.size
      }
      homeApi.getThatYearPracticalProjectByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.tableData = res.data.data.dataList
          this.total = res.data.data.total
        }
      })
    },
    // 查看详情
    examineDetails (row) {
      this.$router.push(
        {
          path: '/projectParticulars',
          query: {
            type: 1,
            id: row.id
          }
        }
      )
    },
    handleSizeChange (size) {
      this.querInfo.size = size
    },
    handleCurrentChange (page) {
      this.querInfo.page = page
    }
  }
}
</script>

<style lang="less" scoped>
h5,
p,
ul,
h4 {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.content {
  width: 100%;
  padding: 12px 0 50px;
  background: #fff;
  h4 {
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51,51,51,1);
    text-align: center;
  }
  /deep/.el-table {
    td {
      border-bottom: 1px dashed #EBEEF5;
    }
  }
  .page {
    margin-top: 60px;
    text-align: center;
  }
}
</style>
