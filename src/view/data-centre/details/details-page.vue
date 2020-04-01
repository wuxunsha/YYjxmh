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
      activee: 6,
      // 详情id
      sortId: 0,
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
      // 资讯详情数据
      informationData: {}
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
      this.sortId = Number(this.$route.query.id)
      let type = Number(this.$route.query.type)
      if (type === 1) {
        this.getInnovateInfoList()
      } else {
        this.informationFindOneList()
      }
    },
    // 根据id获取详情数据(绩效资讯、民生绩效、绩效理论)
    informationFindOneList () {
      homeApi.informationFindOne(this.sortId).then((res) => {
        if (res.data.code === 10000) {
          this.informationData = res.data.data
        }
      })
    },
    // 根据id获取详情数据(创新创优)
    getInnovateInfoList () {
      homeApi.getInnovateInfo(this.sortId).then((res) => {
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