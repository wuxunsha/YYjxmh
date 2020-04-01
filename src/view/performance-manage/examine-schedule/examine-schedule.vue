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
          <el-table-column prop="perDesc" label="目标名称" align="center"></el-table-column>
          <el-table-column prop="indexNames" label="考核指标" header-align="center"></el-table-column>
          <el-table-column prop="busiValueStr" label="完成情况 第三季度" header-align="center"></el-table-column>
        </el-table>
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
      // 指标id
      indexId: 0,
      // 面包屑导航数据
      breadcrumbList: [],
      orgName: '',
      // 表单数据
      tableData: [
        {
          perDesc: '',
          indexNames: '',
          busiValueStr: ''
        }
      ]
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
      this.tableData[0].perDesc = this.$route.query.perDesc
      this.tableData[0].indexNames = this.$route.query.indexNames
      this.tableData[0].busiValueStr = this.$route.query.busiValueStr
      this.type = Number(this.$route.query.type)
      this.indexId = Number(this.$route.query.id)
      let navIndex = Number(this.$route.query.navIndex)
      this.orgName = this.$route.query.name
      if (this.type === 1 && navIndex === 1) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=1&navIndex=1&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      } else if (this.type === 1 && navIndex === 2) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=1&navIndex=2&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      } else if (this.type === 1 && navIndex === 3) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=1&navIndex=3&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      } else if (this.type === 2 && navIndex === 1) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=2&navIndex=1&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      } else if (this.type === 2 && navIndex === 2) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=2&navIndex=2&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      } else if (this.type === 2 && navIndex === 3) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=2&navIndex=3&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      } else if (this.type === 3 && navIndex === 1) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=3&navIndex=1&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      } else if (this.type === 3 && navIndex === 2) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=3&navIndex=2&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      } else if (this.type === 3 && navIndex === 3) {
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
            content: this.orgName,
            breadcrumbUrl: 'indexDetails?type=3&navIndex=3&name=' + this.orgName + '&id=' + this.indexId
          },
          {
            content: '进度详情'
          }
        ]
      }
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
      color: rgba(10,114,230,1);
    }
  }
}
</style>
