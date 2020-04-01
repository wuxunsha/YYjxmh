<template>
  <div>
    <div class="content">
      <div class="questionnaire-survey-content">
        <div class="questionnaire-survey-right">
          <el-table :data="tableData" style="width: 100%" @row-click="examineDetails">
            <el-table-column prop="title" label="主题"></el-table-column>
            <el-table-column label="开始时间" width="160" align="center">
              <template slot-scope="scope">
                {{scope.row.createTime | dateYMD}}
              </template>
            </el-table-column>
            <el-table-column label="状态" width="100" align="center">
              <template slot-scope="scope">
                {{scope.row.status === 0 ? '未开始' : scope.row.status === 1 ? '进行中' : '已结束'}}
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
    this.getFindSurveyByPage()
  },
  methods: {
    // 获取列表
    getFindSurveyByPage () {
      const data = {
        page: this.querInfo.page,
        size: this.querInfo.size
      }
      homeApi.findSurveyByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.tableData = res.data.data.dataList
          this.total = res.data.data.total
        }
      })
    },
    // 查看详情
    examineDetails (row) {
      if (row.types === 1) {
        this.$router.push(
          {
            path: '/activityManagement/fillInQuestionnaire',
            query: {
              id: row.id,
              status: row.status
            }
          }
        )
      } else if (row.types === 2) {
        this.$router.push(
          {
            path: '/activityManagement/activityQuestionnaire',
            query: {
              id: row.id,
              status: row.status
            }
          }
        )
      }
    },
    handleSizeChange (size) {
      this.querInfo.size = size
      this.getFindSurveyByPage()
    },
    handleCurrentChange (page) {
      this.querInfo.page = page
      this.getFindSurveyByPage()
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
  padding: 0 0 50px;
  background: #fff;
  .questionnaire-survey-content {
    .questionnaire-survey-right {
      width: 100%;
      /deep/.el-table {
        th  {
          background: #c0e5ff;
          font-size: 18px;
          font-weight: 700;
          color: #000;
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
