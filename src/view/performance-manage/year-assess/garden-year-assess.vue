<template>
  <div>
    <div class="content">
      <div class="year-assess-header">
        <span>查看年份</span>
        <span>
          <el-select v-model="years" placeholder="请选择年份" @change="yearsChange">
            <el-option v-for="(item, index) in yearList" :key="index" :label="item.years" :value="item.years"></el-option>
          </el-select>
        </span>
      </div>
      <div class="year-assess-box">
        <h4 class="year-assess-header">{{recentlyYear}}年经济园区综合评估</h4>
        <div class="year-assess-table">
          <el-table :data="tableData" border style="width: 100%;">
            <el-table-column type="index" label="排名" align="center" :index="indexMethod" width="80"></el-table-column>
            <el-table-column prop="orgName" label="单位" align="center"></el-table-column>
            <el-table-column prop="sumScore" label="总分" align="center"></el-table-column>
            <el-table-column prop="deductionScore" label="指标扣分" align="center"></el-table-column>
            <el-table-column prop="innovateScore" label="创新加分" align="center"></el-table-column>
            <el-table-column prop="finalScore" label="得分" align="center"></el-table-column>
            <el-table-column prop="sugLevel" label="等级" align="center"></el-table-column>
          </el-table>
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
    indexMethod(index) {
      return index + 1
    },
    // 获取页签
    getTabList () {
      homeApi.getOrgTypeTree(1).then((res) => {
        if (res.data.code === 10000) {
          this.indexType = res.data.data[0].id
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
          this.getStatis()
        }
      })
    },
    // 获取评分列表
    getStatis () {
      const data = {
        orgType: this.indexType,
        years: this.years,
        pageIndex: 1,
        pageSize: 10,
        parentId: 1
      }
      homeApi.getStatisList(data).then((res) => {
        if (res.data.code === 10000) {
          this.tableData = res.data.data.data.childreds
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
  .year-assess-header {
    >span:nth-child(1) {
      font-size: 16px;
    }
  }
  .year-assess-box {
    margin-top: 12px;
    .year-assess-header {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 20px;
    }
    .year-assess-table {
      margin-bottom: 20px;
    }
  }
}
</style>
