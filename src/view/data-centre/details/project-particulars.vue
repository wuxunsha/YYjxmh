<template>
  <div>
    <div class="header-top" ref="headerTop"></div>
    <!-- 头部组件 -->
    <commonHeader :activee="activee" @childByvelue="childByvelue"></commonHeader>
    <!-- 轮播图 -->
    <swiper></swiper>
    <div class="content min">
      <div class="crumbs-nav">
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="{ path: item.breadcrumbUrl}">{{item.content}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="project-particulars-content">
        <div class="project-particulars-content-table">
          <h4>市政为民实事项目</h4>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="projectName" label="项目名称/指标名称" header-align="center"></el-table-column>
            <el-table-column prop="orgName" label="项目机构" header-align="center"></el-table-column>
            <el-table-column prop="projectContent" label="项目描述/要点名称" header-align="center"></el-table-column>
            <el-table-column prop="compValue" label="完成情况" header-align="center"></el-table-column>
          </el-table>
        </div>
        <div class="project-particulars-chart" v-if="echartData.targetValue !== ''">
          <chartProject style="width: 100%;height: 300px;" :value="echartData"></chartProject>
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import * as homeApi from '../../../api/home-api'
import commonHeader from '@/components/head-assembly'
import swiper from '@/components/swiper'
import foot from '@/components/foot-assembly'
import chartProject from '@/components/echarts/chart-project.vue'
export default {
  components: {
    commonHeader,
    swiper,
    foot,
    chartProject
  },
  data () {
    return {
      // 顶部tab切换栏高亮索引
      activee: 6,
      // 面包屑导航数据
      breadcrumbList: [
        {
          content: '资料查询',
          breadcrumbUrl: '/dataInquire'
        },
        {
          content: '查看详情'
        }
      ],
      // 表单数据
      tableData: [],
      // 图表数据
      echartData: {
        targetValue: '',
        compValue: ''
      }
    }
  },
  created () {
    this.getType()
    this.$nextTick(() => {
      this.scrollTop()
    })
  },
  methods: {
    // 滚动条置顶
    scrollTop () {
      let headerTop = this.$refs.headerTop
      headerTop.scrollIntoView({behaviour: 'smooth'})
    },
    // 获取传参数据
    getType () {
      let projectId = Number(this.$route.query.id)
      this.getPracticalProjectFindOneData(projectId)
    },
    // 获取实事项目详情
    getPracticalProjectFindOneData (id) {
      homeApi.getPracticalProjectFindOne(id).then((res) => {
        if (res.data.code === 10000) {
          this.tableData.push(res.data.data)
          this.echartData.targetValue = res.data.data.targetValue
          this.echartData.compValue = res.data.data.compValue
        }
      })
    },
    // 点击顶部导航栏切换
    childByvelue (val) {
      if (val === 0) {
        this.$router.push({path: '/'})
      } else if (val === 1) {
        this.$router.push(
          {
            path: '/performanceInformation/workDynamic',
            query: {
              navIndex: 1
            }
          }
        )
      } else if (val === 2) {
        this.$router.push(
          {
            path: '/regionPerformanceIndex',
            query: { 
              type: 1,
              navIndex: 1
            }
          }
        )
      } else if (val === 3) {
        this.$router.push(
          {
            path: '/peoples/regionSocietyEvaluate',
            query: { 
              type: 1,
              navIndex: 1
            }
          }
        )
      } else if (val === 4) {
        this.$router.push(
          {
            path: '/lightspotFeature/cityUnit',
            query: {
              navIndex: 1
            }
          }
        )
      } else if (val === 5) {
        this.$router.push(
          {
            path: '/performanceTheory/theoryStudy',
            query: {
              navIndex: 1
            }
          }
        )
      } else if (val === 7) {
        this.$router.push(
          {
            path: '/orgIntroduce',
            query: { 
              type: 1
            }
          }
        )
      }
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
.min{
  width: 1200px!important;
  margin: 0 auto;
}
.content {
  width: 100%;
  padding: 12px 0 50px;
  background: #fff;
  .crumbs-nav {
    padding: 10px 0;
    div {
      font-size: 18px;
    }
  }
  .project-particulars-content {
    text-align: left;
    .project-particulars-content-table {
      h4 {
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(51,51,51,1);
        text-align: center;
        margin-bottom: 16px;
      }
      /deep/.el-table thead {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(51,51,51,1);
      }
    }
    .project-particulars-chart {
      margin-top: 30px;
    }
  }
}
</style>
