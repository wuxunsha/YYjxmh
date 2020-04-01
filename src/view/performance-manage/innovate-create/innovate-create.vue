<template>
  <div>
    <div class="content">
      <div class="innovate-create-content">
        <div class="innovate-create-right">
          <el-table :data="tableData" style="width: 100%" :show-header="false" @row-click="examineDetails">
            <el-table-column prop="title" label="内容"></el-table-column>
            <el-table-column prop="orgName" label="机构名称" width="200" align="center">
            </el-table-column>
            <el-table-column label="日期" width="100" align="center">
              <template slot-scope="scope">
                {{scope.row.createTime | dateYMD}}
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.page" :page-sizes="[10, 20, 50, 100]" :page-size="querInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total" background></el-pagination>
          </div> 
        </div>
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
    // 获取列表信息
    this.getInnovateList()
  },
  methods: {
    // 获取列表
    getInnovateList () {
      const data = {
        currentPage: this.querInfo.page,
        pagesize: this.querInfo.size
      }
      homeApi.getInnovateInfoList(data).then((res) => {
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
          path: '/innovateCreate/details',
          query: {
            id: row.id
          }
        }
      )
    },
    handleSizeChange (size) {
      this.querInfo.size = size
      this.getInnovateList()
    },
    handleCurrentChange (page) {
      this.querInfo.page = page
      this.getInnovateList()
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
  .innovate-create-content {
    .innovate-create-right {
      width: 100%;
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
  }
}
</style>
