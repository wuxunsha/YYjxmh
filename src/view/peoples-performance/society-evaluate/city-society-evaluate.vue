<template>
  <div>
    <div class="content">
      <div class="social-evaluation-header">
        <span>查看年份</span>
        <span>
          <el-select v-model="years" placeholder="请选择年份" @change="yearsChange">
            <el-option v-for="(item, index) in yearList" :key="index" :label="item.years" :value="item.years"></el-option>
          </el-select>
        </span>
      </div>
      <div class="social-evaluation-box">
        <div class="social-evaluation-table">
          <h4>
            市直单位
            <span>{{recentlyYear}}年</span>
          </h4>
          <div class="social-evaluation-table-content" v-for="(item, index) in tableData" :key="index">
            <h5>{{item.busiName}}</h5>
            <el-table :data="item.childreds" border style="width: 100%;">
              <el-table-column prop="orgName" label="机构名称" align="center"></el-table-column>
              <el-table-column prop="score" label="评价得分" align="center"></el-table-column>
            </el-table>
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
      // 顶部tab切换栏高亮索引
      activee: 2,
      // 页签
      indexType: '',
      // 最近年份
      recentlyYear: '',
      // 年份
      years: '',
      yearList: [],
      tableData: []
    }
  },
  created () {
    // 获取页签
    this.getTabList()
  },
  methods: {
    // 获取页签
    getTabList () {
      homeApi.getOrgTypeTree(1).then((res) => {
        if (res.data.code === 10000) {
          this.indexType = res.data.data[2].id
          this.getYearList()
        }
      })
    },
    // 获取年份列表
    getYearList () {
      homeApi.getSocieYearList().then((res) => {
        if (res.data.code === 10000) {
          this.yearList = res.data.data
          this.recentlyYear = res.data.data[0].years
          this.years = res.data.data[0].years
          this.getSociaEval()
        }
      })
    },
    // 获取评分列表
    getSociaEval () {
      const data = {
        orgType: this.indexType,
        years: this.years,
        pageIndex: 1,
        pageSize: 10,
        parentId: 1
      }
      homeApi.getSociaEvalList(data).then((res) => {
        if (res.data.code === 10000) {
          this.tableData = res.data.data.data
        }
      })
    },
    // 年份变化
    yearsChange (val) {
      this.recentlyYear = val
      this.getSociaEval()
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
  .social-evaluation-header {
    >span:nth-child(1) {
      font-size: 16px;
    }
  }
  .social-evaluation-box {
    margin-top: 12px;
    .social-evaluation-table {
      margin-bottom: 20px;
      h4 {
        font-size: 16px;
      }
      .social-evaluation-table-content {
        h5 {
          text-align: center;
          font-size: 14px;
          margin-bottom: 4px;
        }
      }
    }
  }
}
</style>
