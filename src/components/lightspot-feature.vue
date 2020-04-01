<template>
    <div class="main-content">
        <div class="min">
            <div class="feature-title">
                <titles titleName="亮点特色" englishName="Highlight features" ></titles>
            </div>
            <div class="feature-main">
                <div class="feature-content">
                    <div>
                        <!-- <span></span> -->
                        <span>
                            {{oneTable}}
                        </span>
                        <span @click="informationOne">
                        更多>>
                        </span>
                        </div>
                            <div></div>
                            <div>
                                <div>
                                    <img :src="oneData.imgurl" alt="" v-if="oneData.imgurl">
                                    <img src="../assets/image/lightspot-feature.png" alt="" v-else>
                                </div>
                                <div>
                                    <div>
                                        <h4>{{oneData.title}}</h4>
                                        <p>
                                            {{oneData.content}}
                                            <span @click="checkDetailOne(oneData.id)">[详情]</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div>
                        <ul>
                            <li v-for="item in oneList" :key="item.id" @click="checkDetailOne(item.id)">
                                <span>{{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}}</span>
                                <span>{{item.createTime | dateYMD}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="feature-content">
                    <div>
                        <!-- <span></span> -->
                        <span>
                            {{twoTable}}
                        </span>
                        <span @click="informationTwo">
                        更多>>
                        </span>
                        </div>
                            <div></div>
                            <div>
                                <div>
                                    <img :src="twoData.imgurl" alt="" v-if="twoData.imgurl">
                                    <img src="../assets/image/lightspot-feature.png" alt="" v-else>
                                </div>
                                <div>
                                    <div>
                                        <h4>{{twoData.title}}</h4>
                                        <p>
                                            {{twoData.content}}
                                            <span @click="checkDetailTwo(twoData.id)">[详情]</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        <div>
                        <ul>
                            <li v-for="item in twoList" :key="item.id" @click="checkDetailTwo(item.id)">
                                <span>{{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}}</span>
                                <span>{{item.createTime | dateYMD}}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as homeApi from '../api/home-api'
import titles from '@/components/titleName'
export default {
  name: 'lightspotFeature',
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
      // 第一条列表数据
      oneData: {},
      // 第二条数据
      twoList: [],
      // 第二条列表数据
      twoData: [],
      // 第二条页签
      twoTable: ''
    }
  },
  created () {
    // 获取亮点特色页签
    this.getLightspotFeatureList()
  },
  methods: {
    // 获取亮点特色页签
    getLightspotFeatureList () {
      homeApi.findListByTitleType(11).then((res) => {
        if (res.data.code === 10000) {
          res.data.data.forEach(item => {
            this.tableId.push(item.id)
          })
          this.oneTable = res.data.data[0].name
          this.twoTable = res.data.data[1].name
          this.getLightspotFeatureOneData()
          this.getLightspotFeatureTwoData()
        }
      })
    },
    // 根据亮点特色table页签获取第一条数据
    getLightspotFeatureOneData () {
        const data = {
          infoType: 11,
          sortType: this.tableId[0],
          page: 1,
          size: 5
        }
        homeApi.informationFindByPage(data).then((res) => {
            if (res.data.code === 10000) {
                res.data.data.dataList.forEach((item, index) => {
                    if (index === 0) {
                        let re1 = new RegExp("<.+?>","g")
                        let content = item.content.replace(re1,'')
                        if (content.length > 70) {
                            item.content = content.substring(0, 70) + '...'
                            this.oneData = item
                        } else {
                            this.oneData = item
                        }
                    } else {
                        this.oneList.push(item)
                    }
                })
            }
        })
    },
    // 根据亮点特色table页签获取第二条数据
    getLightspotFeatureTwoData () {
        const data = {
          infoType: 11,
          sortType: this.tableId[1],
          page: 1,
          size: 5
        }
        homeApi.informationFindByPage(data).then((res) => {
            if (res.data.code === 10000) {
                res.data.data.dataList.forEach((item, index) => {
                    if (index === 0) {
                        let re1 = new RegExp("<.+?>","g")
                        let content = item.content.replace(re1,'')
                        if (content.length > 70) {
                            item.content = content.substring(0, 70) + '...'
                            this.twoData = item
                        } else {
                            this.twoData = item
                        }
                    } else {
                        this.twoList.push(item)
                    }
                })
            }
        })
    },
    // 跳转列表页
    informationOne () {
      this.$router.push(
        {
          path: '/lightspotFeature/cityUnit',
          query: {
            navIndex: 1
          }
        }
      )
    },
    informationTwo () {
      this.$router.push(
        {
          path: '/lightspotFeature/region',
          query: {
            navIndex: 2
          }
        }
      )
    },
    // 跳转详情页
    checkDetailOne (id) {
      this.$router.push(
        {
          path: '/lightspotFeature/details',
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
          path: '/lightspotFeature/details',
          query: {
            activeIndex: 2,
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
a {
  text-decoration: none;
  color: rgba(10,114,230,1);
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.main-content {
    padding: 66px 0;
    background: #F5F5F5;
    .feature-title {
      padding: 0 0 30px;
      text-align: center;
    }
    .feature-main {
        display: flex;
        text-align: left;
        >div {
            flex: 1;
        }
        >div:nth-child(1) {
            margin-right: 16px;
        }
        .feature-content {
            >div:nth-child(1) {
                height: 32px;
                line-height: 32px;
                // span:nth-child(1) {
                //     display: inline-block;
                //     width: 3px;
                //     height: 16px;
                //     background: rgba(10,114,230,1);
                // }
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
            >div:nth-child(2) {
                width: 100%;
                height: 1px;
                background: rgba(10,114,230,1);
            }
            >div:nth-child(3) {
                margin-top: 22px;
                height: 138px;
                display: flex;
                div {
                    flex: 1;
                }
                >div:nth-child(1) {
                    height: 100%;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                >div:nth-child(2) {
                    width: 100%;
                    height: 100%;
                    div {
                        padding: 0 20px;
                        h4 {
                            margin: 0;
                            padding: 0;
                            width: 300px;
                            font-size: 18px;
                            font-family: PingFang SC;
                            font-weight: bold;
                            color: rgba(10,114,230,1);
                            overflow:hidden;
                            text-overflow:ellipsis;
                            white-space:nowrap;
                        }
                        p {
                            font-size: 16px;
                            font-family: PingFang SC;
                            font-weight: 500;
                            line-height: 24px;
                            color: rgba(51,51,51,1);
                                span {
                                font-size: 14px;
                                font-family: PingFang SC;
                                font-weight: 500;
                                color: #F32E2E;
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
            >div:nth-child(4) {
                margin-top: 12px;
                li {
                    margin-top: 10px;
                    overflow: hidden;
                    cursor: pointer;
                    >span:nth-child(1) {
                        margin-right: 22px;
                        font-size: 16px;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #666;
                        cursor: pointer;
                    }
                    >span:nth-child(2) {
                        float: right;
                        font-size: 16px;
                        color: rgba(170,170,170,1);
                    }
                    >span:nth-child(1):hover {
                        color: rgba(10,114,230,1);
                    }
                }
            }
        }
    }
}
</style>
