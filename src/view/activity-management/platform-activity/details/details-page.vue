<template>
  <div>
    <div class="header-top" ref="headerTop"></div>
    <!-- 头部组件 -->
    <commonHeader :activee="activee" @childByvelue="childByvelue"></commonHeader>
    <!-- 轮播图 -->
    <swiper></swiper>
    <div class="main-content min">
      <div>
        <div>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :to="{ path: item.breadcrumbUrl}">{{item.content}}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <h4>{{informationData.title}}</h4>
      <p>{{informationData.titleSmall}}</p>
      <p>
        <span>发布时间：{{informationData.createTime | dateYMD}}</span>
        <span>作者：{{informationData.author}}</span>
        <span>来源：{{informationData.infosource}}</span>
      </p>
      <div>
        <p v-html="informationData.content"></p>
      </div>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import * as homeApi from '../../../../api/home-api'
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
      activee: 0,
      // 详情id
      sortId: 0,
      // 面包屑导航数据
      breadcrumbList: [
        {
          content: '活动管理',
          breadcrumbUrl: '/activityManagement/platformActivity?type=2'
        },
        {
          content: '平台活动',
          breadcrumbUrl: '/activityManagement/platformActivity?type=2'
        },
        {
          content: '查看活动详情'
        }
      ],
      // 资讯详情数据
      informationData: {}
    }
  },
  created () {
    this.getActivityFindOne()
    this.$nextTick(() => {
      this.scrollTop()
    })
  },
  methods: {
    // 根据id获取详情数据
    getActivityFindOne () {
      homeApi.activityFindOne(this.$route.query.id).then((res) => {
        if (res.data.code === 10000) {
          this.informationData = res.data.data
        }
      })
    },
    // 滚动条置顶
    scrollTop () {
      let headerTop = this.$refs.headerTop
      headerTop.scrollIntoView({behaviour: 'smooth'})
    },
    childByvelue (val) {
      if (val === 0) {
        this.$router.push({path: '/'})
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
h4,
p {
  margin: 0;
}
.min{
  width: 1200px!important;
  margin: 0 auto;
}
.main-content {
  padding: 24px 0 60px;
  background-color: #fff;
  >div:nth-of-type(1) {
    padding: 10px 0;
    margin-bottom: 20px;
    font-size: 18px;
    border-bottom: 1px solid #EEE;
  }
  h4 {
    text-align: center;
    font-size: 18px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51,51,51,1);
  }
  >p:nth-of-type(1) {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(51,51,51,1);
  }
  >p:nth-of-type(2) {
    margin-top: 10px;
    text-align: center;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    color: rgba(136,136,136,1);
    span {
      margin-right: 20px;
    }
  }
  >div:nth-of-type(2) {
    margin-top: 26px;
    p {
      text-indent: 2em;
      font-size: 14px;
      font-family: PingFang SC;
      font-weight: 500;
      color: rgba(51,51,51,1);
      line-height: 30px;
      text-align: left!important;
    }
    img {
      width: 100%;
    }
  }
}
</style>