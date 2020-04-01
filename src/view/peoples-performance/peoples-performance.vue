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
              <el-breadcrumb-item>民生绩效</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="everyday-assess-content">
        <div class="everyday-assess-left">
          <div class="everyday-assess-title">
            <div class="everyday-assess-title-content">
              <span class="iconfont iconbumen"></span>
              <span>
                <span>民生绩效</span>
                <span>Livelihood</span>
              </span>
            </div>
            <div class="everyday-assess-nabla"></div>
          </div>
          <el-menu :default-active="pathURL" class="el-menu-vertical-demo" unique-opened active-text-color="#0A72E6" router>
            <el-submenu index="0">
              <template slot="title">
                <span>社会评价 </span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/peoples/regionSocietyEvaluate?type=1&navIndex=1">区县(市)</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/peoples/citySocietyEvaluate?type=1&navIndex=2">市直单位</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <el-menu-item index="/peoples/gardenSocietyEvaluate?type=1&navIndex=3">经济园区</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/peoples/practicalProject">实事项目</el-menu-item>
          </el-menu>
        </div>
        <div class="everyday-assess-right">
          <router-view></router-view>
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
      activee: 3,
      // 主项类型
      type: 0,
      navIndex: 0,
      // 页签id
      sortType: 0,
      pathURL: ''
    }
  },
  created () {
    this.getType()
    this.$nextTick(() => {
      this.scrollTop()
    })
  },
  methods: {
    // 获取传参数据
    getType () {
      this.type = Number(this.$route.query.type)
      this.navIndex = Number(this.$route.query.navIndex)
      if (this.type === 1 && this.navIndex === 1) {
        this.pathURL = '/peoples/regionSocietyEvaluate?type=1&navIndex=1'
      } else if (this.type === 1 && this.navIndex === 2) {
        this.pathURL = '/peoples/citySocietyEvaluate?type=1&navIndex=2'
      } else if (this.type === 1 && this.navIndex === 3) {
        this.pathURL = '/peoples/gardenSocietyEvaluate?type=1&navIndex=3'
      } else if (this.type === 2) {
        this.pathURL = '/peoples/practicalProject'
      }
    },
    // 滚动条置顶
    scrollTop () {
      let headerTop = this.$refs.headerTop
      headerTop.scrollIntoView({behaviour: 'smooth'})
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
/deep/.el-menu {
  border: none;
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
  .everyday-assess-content {
    display: flex;
    text-align: left;
    justify-content: space-between;
    >div:nth-child(1) {
      width: 18%;
    }
    >div:nth-child(2) {
      width: 82%;
    }
    .everyday-assess-left {
      width: 100%;
      margin-right: 10px;
      .everyday-assess-title {
        position: relative;
        width: 100%;
        height: 54px;
        margin-bottom: 20px;
        .everyday-assess-title-content {
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
        .everyday-assess-nabla {
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
    }
    .everyday-assess-right {
      width: 100%;
      h4 {
        text-align: center;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(51,51,51,1);
      }
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
          width: 32%;
          height: 100px;
          line-height: 100px;
          margin-top: 10px;
          background: #0A72E6;
          text-align: center;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
