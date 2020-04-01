<template>
    <div class="main-content">
        <div class="min">
        <div class="performance-title">
            <titles titleName="绩效理论" englishName="Performance theory" ></titles>
        </div>
        <div class="performance-content">
            <div class="performance">
                <div>
                    <span>{{oneTable}}</span>
                    <span @click="informationOne">更多>></span>
                </div>
                <ul>
                    <li v-for="item in oneList" :key="item.id" @click="checkDetailOne(item.id)">{{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}}</li>
                </ul>
            </div>
            <div class="performance">
                <div>
                    <span>{{twoTable}}</span>
                    <span @click="informationTwo">更多>></span>
                </div>
                <ul>
                    <li v-for="item in twoList" :key="item.id" @click="checkDetailTwo(item.id)">{{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}}</li>
                </ul>
            </div>
            <div class="performance">
                <div>
                    <span>{{threeTable}}</span>
                    <span @click="informationThree">更多>></span>
                </div>
                <ul>
                    <li v-for="item in threeList" :key="item.id" @click="checkDetailThree(item.id)">{{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}}</li>
                </ul>
            </div>
            <div class="performance">
                <div>
                    <span>{{fourTable}}</span>
                    <span @click="informationFoure">更多>></span>
                </div>
                <ul>
                   <li v-for="item in fourList" :key="item.id" @click="checkDetailFour(item.id,)">{{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}}</li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import * as homeApi from '../api/home-api'
import titles from '@/components/titleName'
export default {
  name: 'performanceTheory',
  components: {
    titles
  },
  data () {
    return {
      // 页签id
      tableId: [],
      // 第一条页签
      oneTable: '',
      // 第一条数据
      oneList: [],
      // 第二条数据
      twoList: [],
      // 第二条页签
      twoTable: '',
      // 第三条数据
      threeList: [],
      // 第三条页签
      threeTable: '',
      // 第四条数据
      fourList: [],
      // 第四条页签
      fourTable: ''
    }
  },
  created () {
    // 获取绩效理论页签
    this.getPerformanceType()
  },
  methods: {
    // 获取绩效理论页签
    getPerformanceType () {
      homeApi.findListByTitleType(12).then((res) => {
        if (res.data.code === 10000) {
          res.data.data.forEach(item => {
            this.tableId.push(item.id)
          })
          this.oneTable = res.data.data[0].name
          this.twoTable = res.data.data[1].name
          this.threeTable = res.data.data[2].name
          this.fourTable = res.data.data[3].name
          this.getPerformanceOneData()
          this.getPerformanceTwoData()
          this.getPerformanceThreeData()
          this.getPerformanceFourData()
        }
      })
    },
    // 根据绩效理论table页签获取第一条数据
    getPerformanceOneData () {
      const data = {
        infoType: 12,
        sortType: this.tableId[0],
        page: 1,
        size: 4
      }
      homeApi.informationFindByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.oneList = res.data.data.dataList
        }
      })
    },
    // 根据绩效理论table页签获取第二条数据
    getPerformanceTwoData () {
      const data = {
        infoType: 12,
        sortType: this.tableId[1],
        page: 1,
        size: 4
      }
      homeApi.informationFindByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.twoList = res.data.data.dataList
        }
      })
    },
    // 根据绩效理论table页签获取第三条数据
    getPerformanceThreeData () {
      const data = {
        infoType: 12,
        sortType: this.tableId[2],
        page: 1,
        size: 4
      }
      homeApi.informationFindByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.threeList = res.data.data.dataList
        }
      })
    },
    // 根据绩效理论table页签获取第四条数据
    getPerformanceFourData () {
      const data = {
        infoType: 12,
        sortType: this.tableId[3],
        page: 1,
        size: 4
      }
      homeApi.informationFindByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.fourList = res.data.data.dataList
        }
      })
    },
    // 跳转列表页
    informationOne () {
        this.$router.push(
        {
          path: '/performanceTheory/theoryStudy',
          query: {
            navIndex: 1
          }
        }
      )
    },
    informationTwo () {
        this.$router.push(
        {
          path: '/performanceTheory/adviceFromOthers',
          query: {
            navIndex: 2
          }
        }
      )
    },
    informationThree () {
        this.$router.push(
        {
          path: '/performanceTheory/exchangeStudy',
          query: {
            navIndex: 3
          }
        }
      )
    },
    informationFoure () {
        this.$router.push(
        {
          path: '/performanceTheory/yyPractice',
          query: {
            navIndex: 4
          }
        }
      )
    },
    // 点击跳转到详情页
    checkDetailOne (id) {
      this.$router.push(
        {
          path: '/performanceTheory/details',
          query: {
            activeIndex: 1,
            id: id
          }
        }
      )
    },
    checkDetailTwo (id) {
      this.$router.push(
        {
          path: '/performanceTheory/details',
          query: {
            activeIndex: 2,
            id: id
          }
        }
      )
    },
    checkDetailThree (id) {
      this.$router.push(
        {
          path: '/performanceTheory/details',
          query: {
            activeIndex: 3,
            id: id
          }
        }
      )
    },
    checkDetailFour (id) {
      this.$router.push(
        {
          path: '/performanceTheory/details',
          query: {
            activeIndex: 4,
            id: id
          }
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.min{
  width: 1200px !important;
  margin: 0 auto;
}
h4 {
    margin: 0;
    padding: 0;
}
ul {
    margin: 0;
    padding: 22px 0 0 10px;
}
li {
    list-style: none;
}
.main-content {
    width: 100%;
    padding: 80px 0 60px;
    background: #fff;
    .performance-title {
        padding: 0 0 40px;
        text-align: center;
    }
    .performance-content {
        display: flex;
        text-align: left;
        margin-bottom: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        >div {
            width: 49%;
        }
        .performance {
            margin-bottom: 20px;
            >div {
                span:nth-child(1) {
                    font-size: 20px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: rgba(51,51,51,1);
                }
                span:nth-child(2) {
                    float: right;
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: rgba(10,114,230,1);
                    cursor: pointer;
                }
            }
            ul {
                height: 160px;
                margin-top: 12px;
                background-color: #DEEEFF;
                border-radius: 10px;
                padding: 10px;
                li {
                    font-size: 16px;
                    font-weight: 500;
                    line-height: 36px;
                    font-family: PingFang SC;
                    color: #666;
                    cursor: pointer;
                }
                li::before {
                    content: '●';
                    color: #0A72E6;
                    margin-right: 10px;
                    font-size: 14px;
                }
                li:hover {
                    color: rgba(10,114,230,1);
                }
            }
        }
    }
}
</style>
