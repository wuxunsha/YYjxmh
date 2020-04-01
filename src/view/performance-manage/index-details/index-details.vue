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
      <div class="assess-target-content">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="targetValue" label="目标名称" align="center"></el-table-column>
          <el-table-column label="考核内容及指标" header-align="center">
            <template slot-scope="scope">
              <p>{{scope.row.indexNames}}</p>
              <p>
                <span @click="examineSchedule(scope.row.perDesc, scope.row.indexNames, scope.row.busiValueStr)">[查看进度]</span>
              </p>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页 -->
        <div class="page">
          <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.page" :page-sizes="[10, 20, 50, 100]" :page-size="querInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total" background></el-pagination>
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
export default {
  components: {
    commonHeader,
    swiper,
    foot
  },
  data () {
    return {
      // 顶部tab切换栏高亮索引
      activee: 2,
      // 主项类型
      type: 0,
      // 面包屑导航数据
      breadcrumbList: [],
      orgName: '',
      orgId: 0,
      indexType: 0,
      // 查询条件
      querInfo: {
        page: 1,
        size: 10
      },
      // 商品总条数
      total: 0,
      // 表单数据
      tableData: []
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
      this.type = Number(this.$route.query.type)
      let navIndex = Number(this.$route.query.navIndex)
      this.orgId = Number(this.$route.query.id)
      this.indexType = Number(this.$route.query.indexType)
      this.orgName = this.$route.query.name
      if (this.type === 1 && navIndex === 1) {
        this.getOrgidIndexList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'regionPerformanceIndex?type=1&navIndex=1'
          },
          {
            content: '绩效指标',
            breadcrumbUrl: 'regionPerformanceIndex?type=1&navIndex=1'
          },
          {
            content: '区县(市)',
            breadcrumbUrl: 'regionPerformanceIndex?type=1&navIndex=1'
          },
          {
            content: this.orgName
          }
        ]
      } else if (this.type === 1 && navIndex === 2) {
        this.getOrgidIndexList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'cityPerformanceIndex?type=1&navIndex=2'
          },
          {
            content: '绩效指标',
            breadcrumbUrl: 'cityPerformanceIndex?type=1&navIndex=2'
          },
          {
            content: '市直单位',
            breadcrumbUrl: 'cityPerformanceIndex?type=1&navIndex=2'
          },
          {
            content: this.orgName
          }
        ]
      } else if (this.type === 1 && navIndex === 3) {
        this.getOrgidIndexList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'gardenPerformanceIndex?type=1&navIndex=3'
          },
          {
            content: '绩效指标',
            breadcrumbUrl: 'gardenPerformanceIndex?type=1&navIndex=3'
          },
          {
            content: '经济园区',
            breadcrumbUrl: 'gardenPerformanceIndex?type=1&navIndex=3'
          },
          {
            content: this.orgName
          }
        ]
      } else if (this.type === 2 && navIndex === 1) {
        this.getOrgidList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'regionEverydayAssess?type=2&navIndex=1'
          },
          {
            content: '日常考核',
            breadcrumbUrl: 'regionEverydayAssess?type=2&navIndex=1'
          },
          {
            content: '区县(市)',
            breadcrumbUrl: 'regionEverydayAssess?type=2&navIndex=1'
          },
          {
            content: this.orgName
          }
        ]
      } else if (this.type === 2 && navIndex === 2) {
        this.getOrgidList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'cityEverydayAssess?type=2&navIndex=2'
          },
          {
            content: '日常考核',
            breadcrumbUrl: 'cityEverydayAssess?type=2&navIndex=2'
          },
          {
            content: '市直单位',
            breadcrumbUrl: 'cityEverydayAssess?type=2&navIndex=2'
          },
          {
            content: this.orgName
          }
        ]
      } else if (this.type === 2 && navIndex === 3) {
        this.getOrgidList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'gardenEverydayAssess?type=2&navIndex=3'
          },
          {
            content: '日常考核',
            breadcrumbUrl: 'gardenEverydayAssess?type=2&navIndex=3'
          },
          {
            content: '经济园区',
            breadcrumbUrl: 'gardenEverydayAssess?type=2&navIndex=3'
          },
          {
            content: this.orgName
          }
        ]
      } else if (this.type === 3 && navIndex === 1) {
        this.getOrgidList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'regionPerformanceImprove?type=3&navIndex=1'
          },
          {
            content: '绩效改进',
            breadcrumbUrl: 'regionPerformanceImprove?type=3&navIndex=1'
          },
          {
            content: '区县(市)',
            breadcrumbUrl: 'regionPerformanceImprove?type=3&navIndex=1'
          },
          {
            content: this.orgName
          }
        ]
      } else if (this.type === 3 && navIndex === 2) {
        this.getOrgidList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'cityPerformanceImprove?type=3&navIndex=2'
          },
          {
            content: '绩效改进',
            breadcrumbUrl: 'cityPerformanceImprove?type=3&navIndex=2'
          },
          {
            content: '市直单位',
            breadcrumbUrl: 'cityPerformanceImprove?type=3&navIndex=2'
          },
          {
            content: this.orgName
          }
        ]
      } else if (this.type === 3 && navIndex === 3) {
        this.getOrgidList()
        this.breadcrumbList = [
          {
            content: '绩效管理',
            breadcrumbUrl: 'gardenPerformanceImprove?type=3&navIndex=3'
          },
          {
            content: '绩效改进',
            breadcrumbUrl: 'gardenPerformanceImprove?type=3&navIndex=3'
          },
          {
            content: '经济园区',
            breadcrumbUrl: 'gardenPerformanceImprove?type=3&navIndex=3'
          },
          {
            content: this.orgName
          }
        ]
      }
    },
    // 根据机构id获取考核列表信息
    getOrgidList () {
      const data = {
        indexType: this.indexType,
        orgId: this.orgId,
        currentPage: this.querInfo.page,
        pageSize: this.querInfo.size
      }
      homeApi.getOrgidBatchInfoList(data).then((res) => {
        if (res.data.code === 10000) {
          if (res.data.data) {
            this.tableData = res.data.data.dataList
            this.total = res.data.data.total
          }
        }
      })
    },
    // 根据机构id获取指标列表信息
    getOrgidIndexList () {
      const data = {
        indexType: this.indexType,
        orgId: this.orgId,
        currentPage: this.querInfo.page,
        pageSize: this.querInfo.size
      }
      homeApi.getOrgidIndexInfoList(data).then((res) => {
         if (res.data.data) {
            this.tableData = res.data.data.dataList
            this.total = res.data.data.total
          }
      })
    },
    // 查看进度
    examineSchedule (perDesc, indexNames, busiValueStr) {
      let type = Number(this.$route.query.type)
      let navIndex = Number(this.$route.query.navIndex)
      this.$router.push(
        {
          path: '/examineSchedule',
          query: {
            type: type,
            navIndex: navIndex,
            name: this.orgName,
            perDesc: perDesc,
            indexNames: indexNames,
            busiValueStr: busiValueStr,
            id: this.orgId
          }
        }
      )
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
      } else if (val === 6) {
        this.$router.push(
          {
            path: '/dataInquire'
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
    },
    // 展示条数切换
    handleSizeChange (size) {
      this.querInfo.size = size
    },
    // 展示页数切换
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
  .assess-target-content {
    text-align: left;
    /deep/.el-table {
      margin-top: 10px;
      border-collapse: collapse;
      border: 1px solid #0A72E6;
    }
    /deep/.el-table th.is-leaf {
      border-bottom: 1px solid #0A72E6;
    }
    /deep/.el-table--border th,
    /deep/.el-table--border td {
      border-right: 1px solid #0A72E6;
    }
    /deep/.el-table--border td {
      font-size:  14px;
      font-family:  PingFang SC;
      font-weight:  500;
      color:  rgba(51,51,51,1);
      line-height: 26px;
      p:nth-child(1) {
        text-align: left;
      }
      p {
        width: 100%;
        text-align: right;
        span {
          font-size: 14px;
          font-family: PingFang SC;
          font-weight: 500;
          color: rgba(10,114,230,1);
          cursor: pointer;
        }
      }
    }
    /deep/.el-table thead {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: bold;
      color: rgba(51,51,51,1);
    }
    .page {
      margin-top: 60px;
      text-align: center; 
    }
  }
}
</style>
