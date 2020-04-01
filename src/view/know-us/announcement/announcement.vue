<template>
  <div>
    <div class="content">
      <div class="innovate-create-content">
        <div class="innovate-create-right">
          <el-table :data="tableData" style="width: 100%" :show-header="false" @row-click="examineDetails">
            <el-table-column prop="title" label="内容"></el-table-column>
            <el-table-column label="日期" width="100">
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
    // 获取公告公示信息列表
    this.getFindList ()
  },
  methods: {
    // 获取公告公示信息列表
    getFindList () {
      const data = {
        page: this.querInfo.page,
        size: this.querInfo.size
      }
      homeApi.getFindByPage(data).then((res) => {
        if (res.status === 200) {
          this.tableData = res.data.dataList
          this.total = res.data.total
        }
      })
    },
    // 查看详情
    examineDetails (row) {
      this.$router.push(
        {
          path: '/announcement/details',
          query: {
            id: row.id
          }
        }
      )
    },
    handleSizeChange (size) {
      this.querInfo.size = size
      this.getFindList ()
    },
    handleCurrentChange (page) {
      this.querInfo.page = page
      this.getFindList ()
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
