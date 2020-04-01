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
              <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index">{{item.content}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="innovate-create-content">
        <div class="innovate-create-left">
          <div class="innovate-create-title">
            <div class="innovate-create-title-content">
              <span class="iconfont iconxiazai"></span>
              <span>
                <span>表格下载</span>
                <span>FormDownload</span>
              </span>
            </div>
            <div class="innovate-create-nabla"></div>
          </div>
          <ul>
            <li v-for="(item, index) in tabNav" :key="item.id" @click="yearChange(item.year, index)" :class="activeIndex === index ? 'active' : ''">{{item.year}}年度</li>
          </ul>
        </div>
        <div class="innovate-create-right">
          <el-table :data="tableData" style="width: 100%" :show-header="false">
            <el-table-column prop="fileName" label="标题"></el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <el-button type="text" size="small" @click="download(scope.row.id)">下载</el-button>
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.page" :page-sizes="[20, 30, 50, 100]" :page-size="querInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total" background></el-pagination>
          </div> 
        </div>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import * as homeApi from '../../api/home-api'
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
      activee: 6,
      // 高亮索引
      activeIndex: 0,
      tabNav: [],
      // 默认年份
      defaultYear: 0,
      // 面包屑导航数据
      breadcrumbList: [
        {
          content: '资料查询'
        },
        {
          content: '表格下载'
        }
      ],
      tableData: [],
      // 查询条件
      querInfo: {
        page: 1,
        size: 20
      },
      // 商品总条数
      total: 0,
      // 下载域名
      downloadUrl: 'http://47.112.144.243:8085'
    }
  },
  created () {
    // 获取年份
    this.getDocumentYear()
    this.$nextTick(() => {
      this.scrollTop()
    })
  },
  methods: {
    // 获取年份
    getDocumentYear () {
      homeApi.getDocumentYearAll().then((res) => {
        if (res.data.code === 10000) {
          this.tabNav = res.data.data
          this.defaultYear = res.data.data[0].year
          this.getYearShowDownloadList()
        }
      })
    },
    // 根据年份获取数据列表
    getYearShowDownloadList () {
      const data = {
        page: this.querInfo.page,
        size: this.querInfo.size,
        years: this.defaultYear
      }
      homeApi.getShowDownloadDocumentByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.tableData = res.data.data.dataList
          this.total = res.data.data.total
        }
      })
    },
    // 滚动条置顶
    scrollTop () {
      let headerTop = this.$refs.headerTop
      headerTop.scrollIntoView({behaviour: 'smooth'})
    },
    yearChange (year, index) {
      this.activeIndex = index
    },
    // 下载
    download (id) {
      location.href = this.downloadUrl + '/portalHomePage/download/' + id
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
h4,
ul,
li {
  margin: 0;
  padding: 0;
}
/deep/.el-menu {
  border: none;
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
  .innovate-create-content {
    display: flex;
    text-align: left;
    justify-content: space-between;
    >div:nth-child(1) {
      width: 16%;
    }
    >div:nth-child(2) {
      width: 82%;
    }
    .innovate-create-left {
      width: 100%;
      .innovate-create-title {
        position: relative;
        width: 100%;
        height: 54px;
        margin-bottom: 20px;
        .innovate-create-title-content {
          width: 100%;
          background-color: #0A72E6;
          text-align: center;
          >span:nth-child(1) {
            font-size: 35px;
            color: #fff;
            vertical-align: top;
            margin-right: 4px;
          }
          >span:nth-child(2) {
            display: inline-block;
            height: 46px;
            >span {
              display: block;
            }
            >span:nth-child(1) {
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(255,255,255,1);
            }
            >span:nth-child(2) {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(255,255,255,1);
            }
          }
        }
        .innovate-create-nabla {
          position: absolute;
          left: 50%;
          bottom: -8px;
          transform: translate(-50%);
          width: 0;
          height: 0;
          border-right: 10px solid transparent;
          border-left: 10px solid transparent;
          border-top: 10px solid #0A72E6;
        }
      }
      ul {
        margin-top: 10px;
        li {
          height: 40px;
          line-height: 40px;
          font-size: 18px;
          cursor: pointer;
          background: #CDE8FB;
          color: #0A72E6;
          text-align: center;
          margin-bottom: 10px;
        }
        .active {
          background: #0A72E6;
          color: #fff;
        }
      }
    }
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
