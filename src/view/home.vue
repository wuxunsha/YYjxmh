<template>
  <div class="hello">
    <div class="header-top" ref="headerTop"></div>
    <!-- 头部组件 -->
    <div>
      <commonHeader :activee=0  @childByvelue="childByvelue"></commonHeader>
    </div>
    <!-- 轮播图 -->
    <div>
      <swiper></swiper>
    </div>
    <!-- 绩效资讯 -->
    <div class="performance-content">
      <div class="performance-message min" ref="performanceMessage">
        <titles titleName="绩效资讯" englishName="Performance message" ></titles>
        <div class="message-content">
          <div class="left">
            <mu-carousel hide-controls hide-indicators  v-if="informationBanner.length > 0">
              <mu-carousel-item v-for="item in informationBanner" :key="item.id">
                <div class="item-one">
                  <img :src="item.imgurl" alt="" v-if="item.imgurl" @click="checkDetail(item.id)">
                  <img src="../assets/image/performance.png" alt="" v-else>
                </div>
              </mu-carousel-item>
            </mu-carousel>
            <mu-carousel hide-controls hide-indicators v-else>
              <mu-carousel-item>
                <div class="item-one">
                  <img src="../assets/image/performance.png" alt="">
                </div>
              </mu-carousel-item>
            </mu-carousel>
          </div>
          <div class="right">
            <div class="message-title">
              <ul>
                <li v-for="(item, index) in informationTableList" :key="item.id" :class="informationTableIndex === index ? 'active' : ''" @mouseover="mouseOver(index, item.id)" @click="information(index, item.id)">{{item.name}}</li>
              </ul>
            </div>
            <div class="demo-text">
              <ul class="list">
                <li @click="checkDetail(item.id)" v-for="item in informationData" :key="item.id">
                  <div class="dots"></div>
                  <div class="content">
                    {{item.title.length > 30 ? item.title.substring(0, 30) + '...' : item.title}}
                  </div>
                  <div class="time">
                    {{item.createTime | dateYMD}}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 绩效管理 -->
    <div class="performance-manage-box">
      <div class="performance-manage min" ref="performanceManage">
        <titles titleName="绩效管理" englishName="performance management" ></titles>
        <div class="performance-manage-content">
          <div class="performance-manage-content-left">
            <div class="performance-manage-content-left-top">
              <i class="iconfont iconjixiaokaoping"></i>
              绩效考核
            </div>
            <div class="performance-manage-content-left-bottom">
              <div class="performance-manage-left-box" @click="everydayAssess">
                <div class="performance-manage-left-box-top">
                  <i class="iconfont iconweihaiyinsujiancejieguo"></i>
                </div>
                <p>日常考核</p>
              </div>
              <div class="performance-manage-left-box" @click="indexAssess">
                <div class="performance-manage-left-box-top">
                  <i class="iconfont iconrili1-copy-copy"></i>
                </div>
                <p>年度考核</p>
              </div>
              <div class="performance-manage-left-box" @click="innovateCreate">
                <div class="performance-manage-left-box-top">
                  <i class="iconfont iconzan-copy"></i>
                </div>
                <p>创新创优</p>
              </div>
              <div class="performance-manage-left-box" @click="performanceImprovement">
                <div class="performance-manage-left-box-top">
                  <i class="iconfont iconxiugai3-copy"></i>
                </div>
                <p>绩效改进</p>
              </div>
               <div class="performance-manage-left-box" @click="socialEvaluation">
                <div class="performance-manage-left-box-top">
                  <i class="iconfont iconpingjia1-copy1"></i>
                </div>
                <p>社会评价</p>
              </div>
            </div>
          </div>
          <div class="performance-manage-content-right">
            <div class="performance-manage-content-right-top">
              <i class="iconfont iconjixiaokaoping"></i>
              绩效指标
            </div>
            <div class="performance-manage-content-right-bottom">
              <div class="performance-manage-right-bottom-one" @click="regionIndexAssess">
                <p>区县市</p>
                <p>District, county and city</p>
              </div>
              <div class="performance-manage-right-bottom-two" @click="straightIndexAssess">
                <p>市直单位</p>
                <p>Municipal units</p>
              </div>
              <div class="performance-manage-right-bottom-three" @click="economicParkIndexAssess">
                <p>经济园区</p>
                <p>Economic Park</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 民生绩效 -->
    <div class="peoples-performance-box">
      <div class="peoples-performance min" ref="peoplesPerformance">
        <titles titleName="民生绩效" englishName="People's livelihood performance" ></titles>
        <div class="peoples-performance-tabs">
          <div :class="peoplesPerformanceTabNum === index ? 'is-active' : ''" v-for="(item, index) in peoplesPerformanceTabsList" :key="index" @mouseenter="peoplesPerformanceMouse(index)" @click="practicalProject(index)">
            {{item}}
          </div>
        </div>
        <div class="peoples-performance-tabs-content">
          <!-- 互联网+政务服务 -->
          <div v-if="peoplesPerformanceTabNum === 0" class="government-serve">
            <div class="government-serve-left">
              <div class="serve-matter">
                <h4>重点服务事项</h4>
                <ul>
                  <li>
                    <el-row>
                        <el-button icon="iconfont iconjigou" circle></el-button>
                    </el-row>
                    <p>保障性住房</p>
                  </li>
                  <li>
                    <el-row>
                        <el-button icon="iconfont iconzhufang" circle></el-button>
                    </el-row>
                    <p>房屋产权登记</p>
                  </li>
                  <li>
                    <el-row>
                        <el-button icon="iconfont iconcredentials_icon" circle></el-button>
                    </el-row>
                    <p>身份证办理</p>
                  </li>
                  <li>
                    <el-row>
                        <el-button icon="iconfont icongongjijin" circle></el-button>
                    </el-row>
                    <p>公积金服务</p>
                  </li>
                  <li>
                    <el-row>
                        <el-button icon="iconfont iconjiashizheng" circle></el-button>
                    </el-row>
                    <p>驾驶证办理</p>
                  </li>
                </ul>
              </div>
              <div class="work-matter">
                <h4>办事事项</h4>
                <ul>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    消费者权益争议调解
                  </li>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    益工资集体协商协议审查备案
                  </li>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    权限内入河排污口(新建、改建、扩大)审批
                  </li>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    新建项目涉及增加主要污染物排放总量的
                  </li>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    新建项目涉及增加主要污染物排放总量的
                  </li>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    新建项目涉及增加主要污染物排放总量的
                  </li>
                </ul>
              </div>
            </div>
            <div class="government-serve-right">
              <div class="inquire">
                <div class="inquire-input">
                  <input type="text" placeholder="请输入申报号/办件名称">
                </div>
                <div class="inquire-button">
                  <button>办件查询</button>
                </div>
              </div>
              <div class="facility-inquire">
                <h4>公共设施查询</h4>
                <ul>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    体育场馆信息查询
                  </li>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    文化场馆信息查询
                  </li>
                  <li>
                    <i class="iconfont iconyuandian"></i>
                    公园绿地信息查询
                  </li>
                </ul>
              </div>
              <div class="message-gather">
                <div class="message-gather-left">
                  <div class="message-gather-character">
                    <p>国务院</p>
                    <p>互联网+督查</p>
                  </div>
                  <div class="message-gather-image">
                    <img src="../assets/image/message-gather-character.png" alt="">
                  </div>
                </div>
                <div class="message-gather-right">
                  <div class="message-gather-right-left">
                    <i class="iconfont iconzixun"></i>
                    <p>咨询</p>
                  </div>
                  <div class="message-gather-right-center">
                    <div>
                      <i class="iconfont icondianhua-copy"></i>
                      <p>投诉</p>
                    </div>
                  </div>
                  <div class="message-gather-right-right">
                    <i class="iconfont icontousujianyi"></i>
                    <p>建议</p>
                  </div>
                </div>
              </div>
              <div class="serve-type">
                <div class="serve-type-left">
                  <i class="iconfont icongerenzhongxin"></i>
                  <p>个人服务</p>
                </div>
                <div class="serve-type-center">
                  <div>
                    <i class="iconfont iconfarendaibiao"></i>
                    <p>法人服务</p>
                  </div>
                </div>
                <div class="serve-type-right">
                  <i class="iconfont iconcengji"></i>
                  <p>部门服务</p>
                </div>
              </div>
              <div class="serve-nav">
                <div class="serve-nav-box">
                  <div>
                    <i class="iconfont iconpingjia"></i>
                    <span>服务评价</span>
                  </div>
                  <div>
                    <i class="iconfont iconchaxun"></i>
                    <span>便民查询</span>
                  </div>
                </div>
                <div class="serve-nav-box">
                  <div>
                    <i class="iconfont iconlilunxuexi-copy"></i>
                    <span>服务知识库</span>
                  </div>
                  <div>
                    <i class="iconfont iconpingjia1-copy1"></i>
                    <span>个性化服务</span>
                  </div>
                </div>
                <div class="serve-nav-box">
                  <div>
                    <i class="iconfont icontongzhigonggao-copy"></i>
                    <span>结果公示</span>
                  </div>
                  <div>
                    <i class="iconfont iconqingdan-copy"></i>
                    <span>清单目录</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 市长热线 -->
          <div v-if="peoplesPerformanceTabNum === 1" class="mayor-hotLine">
            <div class="mayor-hotLine-left">
              <div class="mayor-hotLine-left-header">
                <span>市长信箱</span>
                <span>
                  <span>我要写信</span>
                  <span>来信须知</span>
                </span>
              </div>
              <div class="mayor-hotLine-center">
                <table width="100%" border-collapse="collapse" cellpadding="14px">
                  <tr class="mayor-hotLine-table-th">
                    <th style="text-align: left;">标题</th>
                    <th style="text-align: center;">分类</th>
                    <th style="text-align: center;">处理部门</th>
                    <th style="text-align: center;">处理时间</th>
                  </tr>
                  <tr>
                    <td style="text-align: left;">市长热线办19081349216559</td>
                    <td style="text-align: center;">求决</td>
                    <td style="text-align: center;">沅江市</td>
                    <td style="text-align: center;">2019-05-12</td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">市长热线办19081349216559</td>
                    <td style="text-align: center;">求决</td>
                    <td style="text-align: center;">沅江市</td>
                    <td style="text-align: center;">2019-05-12</td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">市长热线办19081349216559</td>
                    <td style="text-align: center;">求决</td>
                    <td style="text-align: center;">沅江市</td>
                    <td style="text-align: center;">2019-05-12</td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">市长热线办19081349216559</td>
                    <td style="text-align: center;">求决</td>
                    <td style="text-align: center;">沅江市</td>
                    <td style="text-align: center;">2019-05-12</td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">市长热线办19081349216559</td>
                    <td style="text-align: center;">求决</td>
                    <td style="text-align: center;">沅江市</td>
                    <td style="text-align: center;">2019-05-12</td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">市长热线办19081349216559</td>
                    <td style="text-align: center;">求决</td>
                    <td style="text-align: center;">沅江市</td>
                    <td style="text-align: center;">2019-05-12</td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">市长热线办19081349216559</td>
                    <td style="text-align: center;">求决</td>
                    <td style="text-align: center;">沅江市</td>
                    <td style="text-align: center;">2019-05-12</td>
                  </tr>
                  <tr>
                    <td style="text-align: left;">市长热线办19081349216559</td>
                    <td style="text-align: center;">求决</td>
                    <td style="text-align: center;">沅江市</td>
                    <td style="text-align: center;">2019-05-12</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="mayor-hotLine-right">
              <div class="mayor-hotLine-right-header">
                <span>在线访谈</span>
                <span>访谈回顾</span>
              </div>
              <div class="mayor-hotLine-right-image">

              </div>
            </div>
          </div>
          <!-- 社会评价 -->
          <div v-if="peoplesPerformanceTabNum === 2" class="society-evaluate">
            <div @click="cityUnit(index)" v-for="(item, index) in performanceOrgType" :key="item.id">
              <div>
                {{item.orgType}}
              </div>
            </div>
          </div>
          <!-- 实事项目 -->
          <div v-if="peoplesPerformanceTabNum === 3" class="practical-projects">
            <div class="practical-projects-top">
              <div class="practical-projects-left">
                <h4>{{projectYears}}年度实事项目总体实施进度</h4>
                <ul>
                  <li v-for="(item, index) in projectList" :key="index">
                    <div class="practical-projects-left-index">
                      <i>{{10 > index + 1 ? '0' + (index + 1) : index + 1}}</i>
                    </div>
                    <div class="practical-projects-left-content">
                      <span :title="item.projectName">{{item.projectName}}</span>
                    </div>
                    <div class="practical-projects-left-botton" @click="examineDetails(item.id)">
                      <span>查看进度</span>
                    </div>
                  </li>
                </ul>
              </div>
              <!-- <div class="practical-projects-right">
                <chartColumnar style="width: 100%;height: 427px;" :value="chartColumnarData"></chartColumnar>
              </div> -->
            </div>
            <div class="switch-years">
              <p>历年市政府为民办实事项目情况：</p>
              <div class="switch">
                <i class="iconfont iconzuojiantou-tianchong prev" @click="switchLeft"></i>
                <div class="bd">
                  <p>
                    <span v-for="(item, index) in projectYear" :key="index" @click="projectYearInquire(item)">{{item}}</span>
                  </p>
                </div>
                <i class="iconfont iconyoujiantou-tianchong next" @click="switchRight"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 亮点特色 -->
    <div ref="lightspotFeature">
      <lightspotFeature></lightspotFeature>
    </div>
    <!-- 绩效理论 -->
    <div ref="performanceTheory">
      <performanceTheory></performanceTheory>
    </div>
    <!-- 资料查询 -->
    <div class="information-information-box">
      <div class="information-information min" ref="informationInformation">
        <titles titleName="资料查询" englishName="Data inquiry" ></titles>
        <div class="information-information-tabs">
          <div :class="informationInformationTabNum === index ? 'is-active' : ''" v-for="(item, index) in informationInformationTabsList" :key="index" @mouseenter="informationInformationMouse(index)" @click="dataCentre(index)">
            {{item}}
          </div>
        </div>
        <div class="information-information-tabs-content">
          <div v-if="informationInformationTabNum === 0" class="resource-center">
            <el-form :model="informationCentreData" label-width="100px">
              <el-form-item label="关键字">
                <el-input v-model="informationCentreData.title" placeholder="支持标题或正文关键字"></el-input>
              </el-form-item>
              <el-form-item label="发布年份">
                <el-select v-model="informationCentreData.years" placeholder="选择年份">
                  <el-option v-for="(item, index) in yearsList" :key="index" :label="item" :value="item"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="类别">
                <el-checkbox-group v-model="informationCentreData.type">
                  <el-checkbox :label="item.id" v-for="item in resourceType" :key="item.id">{{item.name}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="日期">
                <el-col :span="11">
                  <el-form-item>
                    <el-date-picker type="date" placeholder="开始日期" v-model="informationCentreData.startTime" style="width: 100%;" value-format="timestamp"></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">~</el-col>
                <el-col :span="11">
                  <el-form-item>
                    <el-date-picker type="date" placeholder="结束日期" v-model="informationCentreData.endTime" style="width: 100%;" value-format="timestamp"></el-date-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item class="searching-btn">
                <el-button type="primary" @click="searching">检索</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div v-if="informationInformationTabNum === 1" class="data-download">
            <p v-if="formDownloadList.length > 0">
              <span @click="more">更多...</span>
            </p>
            <ul v-if="formDownloadList.length > 0">
              <li v-for="item in formDownloadList" :key="item.id">
                <span class="data-title">{{item.fileName}}</span>
                <span class="download" @click="download(item.id)">下载</span>
              </li>
            </ul>
            <ul v-else>
              <li class="no-data">
                暂无数据
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 了解我们 -->
    <div ref="konwUs">
      <knowUs></knowUs>
    </div>
    <foot></foot>
    <!-- 浮窗 -->
    <div class="floating-window">
      <div class="activity-box" @click="activityList">
        <i class="iconfont iconhuodong"></i>
        <p>活动</p>
      </div>
      <div class="questionnaire-box" @click="questionnaireList">
        <i class="iconfont iconwenjuan"></i>
        <p>问卷</p>
      </div>
    </div>
  </div>
</template>

<script>
import * as homeApi from '../api/home-api'
import commonHeader from '@/components/head-assembly'
import swiper from '@/components/swiper'
import foot from '@/components/foot-assembly'
import lightspotFeature from '@/components/lightspot-feature'
import performanceTheory from '@/components/performance-theory'
import knowUs from '@/components/know-us'
import titles from '@/components/titleName'
// import chartColumnar from '@/components/echarts/chart-columnar.vue'
export default {
  name: 'HelloWorld',
  components: {
    commonHeader,
    swiper,
    foot,
    lightspotFeature,
    performanceTheory,
    knowUs,
    titles
  },
  data () {
    return {
      // 绩效讯息的tab激活项
      activeIndex: 0,
      // 资讯轮播图
      informationBanner: [],
      // 资讯table页签
      informationTableList: [],
      // 资讯table页签高亮索引
      informationTableIndex: 0,
      // 资讯table页签typeId
      tableTypeId: 0,
      // 资讯数据列表
      informationData: [],
      // 民生绩效tab切换数据
      peoplesPerformanceTabsList: ['互联网+政务服务', '市长热线', '社会评价', '实事项目'],
      peoplesPerformanceTabNum: 0,
      // 社会评价机构类型
      performanceOrgType: [
        {
          id: 1,
          orgType: '区县（市）评价'
        },
        {
          id: 2,
          orgType: '市直单位'
        },
        {
          id: 3,
          orgType: '经济园区'
        }
      ],
      // 资料查询tab切换数据
      informationInformationTabsList: ['资源中心', '表格下载'],
      // 资源类型
      resourceType: [],
      informationInformationTabNum: 0,
      // 民生绩效-实事项目年份
      projectYears: '',
      projectYear: [],
      // 民生绩效-实事项目列表数据
      projectList: [],
      // 实事项目移动年份当前的位置
      practicalProjectsCurIndex: 0,
      // 每次偏移距离
      distance: 0.2,
      // 资源中心查询数据
      informationCentreData: {
        title: '',
        years: '',
        type: [],
        startTime: '',
        endTime: ''
      },
      // 资源中心查询年份
      yearsList: [],
      // 表格下载数据列表
      formDownloadList: [],
      // 下载域名
      downloadUrl: 'http://47.112.144.243:8085'
    }
  },
  created () {
    // 获取资讯轮播图
    this.queryInformationByImgUrlList()
    // 获取资讯table页签
    this.findListByTitleTypeList()
    // 获取资源类型
    this.getResourceType()
    // 获取资源年份
    this.getResourceYearType()
  },
  methods: {
    // 获取资讯轮播图
    queryInformationByImgUrlList () {
      homeApi.queryInformationByImgUrl().then((res) => {
        if (res.data.code === 10000) {
          this.informationBanner = res.data.data
        }
      })
    },
    // 获取资讯table页签
    findListByTitleTypeList () {
      homeApi.findListByTitleType(8).then((res) => {
        if (res.data.code === 10000) {
          this.informationTableList = res.data.data
          this.navName = res.data.data[0].name
          this.informationTableTypeFindByPage()
        }
      })
    },
    // 根据资讯table页签获取资讯信息列表数据
    informationTableTypeFindByPage () {
      if (this.informationTableIndex === 0) {
        const data = {
          infoType: 8,
          page: 1,
          size: 6
        }
        this.informationFindByPageList(data)
      } else {
        const data = {
          infoType: 8,
          sortType: this.tableTypeId,
          page: 1,
          size: 6
        }
        this.informationFindByPageList(data)
      }
    },
    // 获取资讯信息列表数据
    informationFindByPageList (data) {
      homeApi.informationFindByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.informationData = res.data.data.dataList
        }
      })
    },
    // 鼠标移入切换页签
    mouseOver (index, id) {
      this.tableTypeId = id
      this.activeIndex = index
      this.informationTableIndex = index
      this.informationTableTypeFindByPage()
    },
    // 点击资讯页签跳转列表页
    information (index) {
      if (index === 1) {
        this.$router.push(
          {
            path: '/performanceInformation/workDynamic',
            query: {
              navIndex: index
            }
          }
        )
      } else if (index === 2) {
        this.$router.push(
          {
            path: '/performanceInformation/fileAnnouncement',
            query: {
              navIndex: index
            }
          }
        )
      } else if (index === 3) {
        this.$router.push(
          {
            path: '/performanceInformation/mediaFocus',
            query: {
              navIndex: index
            }
          }
        )
      }
    },
    // 点击跳转到详情页
    checkDetail (id) {
      this.$router.push(
        {
          path: '/performanceInformation/details',
          query: {
            id: id,
            activeIndex: this.activeIndex
          }
        }
      )
    },
    // 电梯导航
    childByvelue (val) {
      if (val === 0) {
        let headerTop = this.$refs.headerTop
        headerTop.scrollIntoView({behaviour: 'smooth'})
      } else if (val === 1) {
        let messageTop = this.$refs.performanceMessage
        messageTop.scrollIntoView({behaviour: 'smooth'})
      } else if (val === 2) {
        let messageTop = this.$refs.performanceManage
        messageTop.scrollIntoView({behaviour: 'smooth'})
      } else if (val === 3) {
        let messageTop = this.$refs.peoplesPerformance
        messageTop.scrollIntoView({behaviour: 'smooth'})
      } else if (val === 4) {
        let lightTop = this.$refs.lightspotFeature
        lightTop.scrollIntoView({behaviour: 'smooth'})
      } else if (val === 5) {
        let performanceTop = this.$refs.performanceTheory
        performanceTop.scrollIntoView({behaviour: 'smooth'})
      } else if (val === 6) {
        let performanceTop = this.$refs.informationInformation
        performanceTop.scrollIntoView({behaviour: 'smooth'})
      } else if (val === 7) {
        let KonwUsTOP = this.$refs.konwUs
        KonwUsTOP.scrollIntoView({behaviour: 'smooth'})
      }
    },
    // 跳转日常考核目标页面
    everydayAssess () {
      this.$router.push(
        {
          path: '/regionEverydayAssess',
          query: {
            type: 2,
            navIndex: 1
          }
        }
      )
    },
    // 跳转年度考核目标页面
    indexAssess () {
      this.$router.push(
        {
          path: '/cityYearAssess',
          query: {
            type: 4,
            navIndex: 1
          }
        }
      )
    },
    // 跳转创新创优页面
    innovateCreate () {
      this.$router.push(
        {
          path: '/innovateCreate',
          query: {
            type: 5
          }
        }
      )
    },
    // 跳转绩效改进页面
    performanceImprovement () {
      this.$router.push(
        {
          path: '/regionPerformanceImprove',
          query: {
            type: 3,
            navIndex: 1
          }
        }
      )
    },
    // 跳转社会评价页面
    socialEvaluation () {
      this.$router.push(
        {
          path: '/regionSocietyEvaluate',
          query: {
            type: 6,
            navIndex: 1
          }
        }
      )
    },
    // 跳转区县市绩效指标页面
    regionIndexAssess () {
      this.$router.push(
        {
          path: '/regionPerformanceIndex',
          query: {
            type: 1,
            navIndex: 1
          }
        }
      )
    },
    // 跳转市直单位绩效指标页面
    straightIndexAssess () {
      this.$router.push(
        {
          path: '/cityPerformanceIndex',
          query: {
            type: 1,
            navIndex: 2
          }
        }
      )
    },
    // 跳转经济园区绩效指标页面
    economicParkIndexAssess () {
      this.$router.push(
        {
          path: '/gardenPerformanceIndex',
          query: {
            type: 1,
            navIndex: 3
          }
        }
      )
    },
    // 民生绩效tabs鼠标移入切换
    peoplesPerformanceMouse (index) {
      this.peoplesPerformanceTabNum = index
      if (this.peoplesPerformanceTabNum === 3) {
        this.getProjectYear()
      }
    },
    // 跳转民生绩效页面
    practicalProject (index) {
      if (index === 2) {
        this.$router.push(
          {
            path: '/peoples/regionSocietyEvaluate',
            query: {
              type: 1,
              navIndex: 1
            }
          }
        )
      } else if (index === 3) {
        this.$router.push(
          {
            path: '/peoples/practicalProject',
            query: {
              type: 2
            }
          }
        )
      }
    },
    //　跳转社会评价页面
    cityUnit (index) {
      if (index === 0) {
        this.$router.push(
          {
            path: '/peoples/regionSocietyEvaluate',
            query: {
              type: 1,
              navIndex: index + 1
            }
          }
        )
      } else if (index === 1) {
        this.$router.push(
          {
            path: '/peoples/citySocietyEvaluate',
            query: {
              type: 1,
              navIndex: index + 1
            }
          }
        )
      } else if (index === 2) {
        this.$router.push(
          {
            path: '/peoples/gardenSocietyEvaluate',
            query: {
              type: 1,
              navIndex: index + 1
            }
          }
        )
      }
    },
    // 资料查询tabs鼠标移入切换
    informationInformationMouse (index) {
      this.informationInformationTabNum = index
      if (index === 1) {
        this.getShowDownloadDocumentList()
      }
    },
    // 跳转资料中心
    dataCentre (index) {
      if (index === 0) {
        this.$router.push(
          {
            path: '/dataInquire'
          }
        )
      } else if (index === 1) {
        this.$router.push(
          {
            path: '/formDownload?type=2'
          }
        )
      }
    },
    // 民生绩效-实事项目-获取年份
    getProjectYear () {
      homeApi.getActualProjectYear().then((res) => {
        if (res.data.code === 10000) {
          this.projectYear = res.data.data
          this.projectYears = res.data.data[0]
          this.getPracticalProjectsByYearList(res.data.data[0])
        }
      })
    },
    // 获取民生绩效-实事项目数据
    getPracticalProjectsByYearList (year) {
      homeApi.getPracticalProjectsByYear(year).then((res) => {
        if (res.data.code === 10000) {
          this.projectList = res.data.data.list
        }
      })
    },
    // 查看实事项目详情
    examineDetails (id) {
      this.$router.push(
        {
          path: '/projectParticulars',
          query: {
            type: 1,
            id: id
          }
        }
      )
    },
    // 点击年度查询实事项目数据
    projectYearInquire (year) {
      this.getPracticalProjectsByYearList(year)
    },
    // 实事项目年份右偏移
    switchRight () {
      let bdBox = document.querySelector('.bd')
      let len = (document.querySelectorAll('.bd p span')).length
      this.practicalProjectsCurIndex ++
      if (this.practicalProjectsCurIndex >= len - 4) {
        this.practicalProjectsCurIndex = len - 5
      }
      bdBox.style.left = '-' + (this.distance * this.practicalProjectsCurIndex) * 100 + '%'
    },
    // 实事项目年份左偏移
    switchLeft () {
      let bdBox = document.querySelector('.bd')
      let len = (document.querySelectorAll('.bd p span')).length
      this.practicalProjectsCurIndex --
      if (this.practicalProjectsCurIndex <= -1) {
        this.practicalProjectsCurIndex = 0
      }
      bdBox.style.left = '-' + (this.distance * Math.abs(this.practicalProjectsCurIndex)) * 100 + '%'
    },
    // 获取资源类型
    getResourceType () {
       homeApi.getTypeList().then((res) => {
        if (res.data.code === 10000) {
          this.resourceType = res.data.data
        }
      })
    },
    // 获取资源年份
    getResourceYearType () {
      homeApi.getYearList().then((res) => {
        if (res.data.code === 10000) {
          this.yearsList = res.data.data
        }
      })
    },
    // 资源检索
    searching () {
      this.$router.push(
        {
          path: '/dataInquire',
          query: {
            type: this.informationCentreData.type.join(','),
            title: this.informationCentreData.title,
            years: this.informationCentreData.years,
            startTime: this.informationCentreData.startTime,
            endTime: this.informationCentreData.endTime
          }
        }
      )
    },
    // 获取表格下载列表
    getShowDownloadDocumentList () {
      const data = {
        page: 1,
        size: 10,
        year: ''
      }
      homeApi.getShowDownloadDocumentByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.formDownloadList = res.data.data.dataList
        }
      })
    },
    // 更多表格下载
    more () {
      this.$router.push(
        {
          path: '/formDownload'
        }
      )
    },
    // 下载
    download (id) {
      location.href = this.downloadUrl + '/portalHomePage/download/' + id
    },
    // 跳转活动列表页面
    activityList () {
      this.$router.push(
        {
          path: '/activityManagement/platformActivity',
          query: {
            type: 2
          }
        }
      )
    },
    // 跳转问卷列表页面
    questionnaireList () {
      this.$router.push(
        {
          path: '/activityManagement/questionnaireSurvey',
          query: {
            type: 1
          }
        }
      )
    }
  }
}
</script>

<style lang='less' scoped>
ul {
  margin: 0;
  padding: 0;
}
.min{
  width: 1200px !important;
  margin: 0 auto !important;
}
// 绩效资讯
.performance-content {
  width: 100%;
  background: url('../assets/image/messageBackground.png') no-repeat;
  background-position-x: 100%;
  .performance-message {
    width: 100%;
    padding: 50px 0 78px;
    overflow: hidden;
    background-size: 100% 100%;
    .message-content {
      margin: 0 auto;
      margin-top: 20px;
      display: flex;
      .left {
        flex: 1;
        height: 320px;
        margin-right: 10px;
        .item-one {
          width: 100%;
          height: 100%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .right {
        flex: 1;
        height: 320px;
        .message-title {
          margin-bottom: 10px;
          ul {
            display: flex;
            height: 100%;
            li {
              flex: 1;
              padding: 10px 0;
              background: rgba(231,243,255,1);
              border-radius: 4px;
              margin-left: 10px;
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(10,114,230,1);
            }
            li:nth-child(1) {
              margin-left: 0;
            }
            .active {
              background: rgba(10,114,230,1);
              color: rgba(255,255,255,1);
            }
          }
        }
        li{
          cursor:pointer;
        }
      }
    }
  }
}
// 绩效管理
.performance-manage-box {
  width: 100%;
  background-color: #F5F5F5;
  .performance-manage {
    width: 100%;
    padding: 40px 0 10px 0;
    .performance-manage-content {
      display: flex;
      .performance-manage-content-left {
        flex: 1;
        text-align: left;
        width: 100%;
        height: 100%;
        .performance-manage-content-left-top {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51,51,51,1);
          i {
            font-size: 18px;
            color: #0A72E6;
          }
        }
        .performance-manage-content-left-bottom {
          display: flex;
          >div {
            flex: 1;
            text-align: center;
            padding-top: 30px;
          }
          .performance-manage-left-box {
            width: 100%;
            height: 100%;
            cursor: pointer;
            .performance-manage-left-box-top {
              width: 80px;
              height: 80px;
              background: url('../assets/image/performanceManage.png') no-repeat center top;
              background-size: 100%;
              margin: 0 auto;
              i {
                line-height: 80px;
                font-size: 30px;
                color: #fff;
              }
            }
            p {
              font-size: 16px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(51,51,51,1);
              margin: 0;
              margin-top: 24px;
            }
          }
        }
      }
      .performance-manage-content-right {
        flex: 0.4;
        text-align: left;
        .performance-manage-content-right-top {
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: rgba(51,51,51,1);
          i {
            font-size: 18px;
            color: #0A72E6;
          }
        }
        .performance-manage-content-right-bottom {
          padding: 14px 30px 0;
          >div {
            height: 50px;
            border-radius: 10px;
            margin-bottom: 10px;
          }
          .performance-manage-right-bottom-one {
              background: url('../assets/image/performanceManage-01.png') no-repeat center top;
              background-size: 100%;
              cursor: pointer;
            p {
              color: #fff;
              margin: 0;
              text-align: center;
            }
            >p:nth-child(1) {
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(254,254,254,1);
            }
            >p:nth-child(2) {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(254,254,254,1);
            }
          }
          .performance-manage-right-bottom-two {
            background: url('../assets/image/performanceManage-02.png') no-repeat center top;
              background-size: 100%;
              cursor: pointer;
            p {
              color: #fff;
              margin: 0;
              text-align: center;
            }
            >p:nth-child(1) {
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(254,254,254,1);
            }
            >p:nth-child(2) {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(254,254,254,1);
            }
          }
          .performance-manage-right-bottom-three {
            background: url('../assets/image/performanceManage-03.png') no-repeat center top;
              background-size: 100%;
              cursor: pointer;
            p {
              color: #fff;
              margin: 0;
              text-align: center;
            }
            >p:nth-child(1) {
              font-size: 20px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(254,254,254,1);
            }
            >p:nth-child(2) {
              font-size: 12px;
              font-family: PingFang SC;
              font-weight: 400;
              color: rgba(254,254,254,1);
            }
          }
        }
      }
    }
  }
}
// 民生绩效
.peoples-performance-box {
  width: 100%;
  background-color: #fff;
  .peoples-performance {
    width: 100%;
    padding: 40px 0 10px 0;
    .peoples-performance-tabs {
      display: flex;
      height: 56px;
      line-height: 56px;
      background: #E7F3FF;
      >div {
        flex: 1;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #0A72E6;
        cursor: pointer;
      }
      .is-active {
        color: #fff;
        background: #0A72E6;
      }
    }
    .peoples-performance-tabs-content {
      width: 100%;
      height: 520px;
      padding: 15px 15px 0;
      text-align: left;
      // 互联网+政府服务
      .government-serve {
        display: flex;
        >div {
          flex: 1;
        }
        >div:nth-child(1) {
          margin-right: 40px;
        }
        .government-serve-left {
          .serve-matter {
            margin-bottom: 20px;
            >h4 {
              margin: 0;
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(51,51,51,1);
            }
            ul {
              margin-top: 26px;
              display: flex;
              li {
                flex: 1;
                text-align: center;
                cursor: pointer;
                .el-button {
                  width: 50px;
                  height: 50px;
                  border: 2px solid #0A72E6;
                  color: #0A72E6;
                }
              }
            }
          }
          .work-matter {
            >h4 {
              margin: 0;
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(51,51,51,1);
            }
            ul {
              margin-top: 16px;
              li {
                border-bottom: 1px solid rgba(238,238,238,1);
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #666;
                line-height: 44px;
                cursor: pointer;
              }
              li:hover {
                color: #0A72E6;
              }
            }
          }
        }
        .government-serve-right {
          .inquire {
            display: flex;
            height: 40px;
            width: 100%;
            .inquire-input {
              flex: 1;
              height: 100%;
              width: 100%;
              input {
                height: 100%;
                width: 100%;
                padding-left: 16px;
                background: #F5F5F5;
                border: none;
                border-radius: 10px 0 0 10px;
                outline: none;
              }
              ::-webkit-input-placeholder {  /*Webkit browsers 谷歌*/
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(136,136,136,1);
              }
              :-moz-placeholder {  /*Mozilla Firefox 4 to 8 火狐*/
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(136,136,136,1);
              }
              ::moz-placeholder {  /*Mozilla Firefox 19+ 火狐*/
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(136,136,136,1);
              }
              :-ms-input-placeholder {  /*Internet Explorer 10+ IE10以上*/
                font-size: 16px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(136,136,136,1);
              }
            }
            .inquire-button {
              flex: 0.3;
              height: 100%;
              width: 100%;
              button {
                height: 100%;
                width: 100%;
                border: none;
                background: #0A72E6;
                border-radius: 0 10px 10px 0;
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(255,255,255,1);
                cursor: pointer;
                outline: none;
              }
            }
          }
          .facility-inquire {
            h4 {
              margin: 10px 0;
              font-size: 18px;
              font-family: PingFang SC;
              font-weight: bold;
              color: rgba(51,51,51,1);
            }
            ul {
              display: flex;
              justify-content: space-between;
              li {
                flex: 1;
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(102,102,102,1);
                text-align: center;
                cursor: pointer;
                i {
                  color: #0A72E6;
                }
              }
              li:first-child {
                text-align: left;
              }
              li:last-child {
                text-align: right;
              }
            }
          }
          .message-gather {
            display: flex;
            margin: 10px 0 16px;
            .message-gather-left {
              display: flex;
              flex: 0.6;
              width: 100%;
              height: 56px;
              background:linear-gradient(265deg,rgba(10,114,230,1) 0%,rgba(112,180,255,1) 100%);
              border-radius:10px;
              margin-right: 30px;
              .message-gather-character {
                flex: 1;
                p {
                  margin: 0;
                  padding: 0;
                  text-align: center;
                  color: #fff;
                }
                >p:nth-child(1) {
                  line-height: 36px;
                  font-size: 18px;
                }
                >p:nth-child(2) {
                  line-height: 10px;
                  font-size: 14px;
                }
              }
              .message-gather-image {
                flex: 0.7;
                text-align: center;
                img {
                  width: 80%;
                  height: 100%;
                }
              }
            }
            .message-gather-right {
              flex: 1;
              margin: 0 auto;
              width: 100%;
              height: 56px;
              display: flex;
              >div {
                text-align: center;
              }
              .message-gather-right-left,
              .message-gather-right-right {
                width: 56px;
                height: 56px;
                border: 1px solid #E5E5E5;
                border-radius: 10px;
              }
              .message-gather-right-center {
                flex: 1;
                >div {
                  width: 56px;
                  height: 56px;
                  border: 1px solid #E5E5E5;
                  border-radius: 10px;
                  margin: 0 auto;
                }
              }
              .message-gather-right-left,
              .message-gather-right-center,
              .message-gather-right-right {
                cursor: pointer;
                i {
                  font-size: 24px;
                  color: #0A72E6;
                }
                p {
                  margin: 0;
                  padding: 0;
                  font-size: 16px;
                  font-family: PingFang SC;
                  font-weight: 500;
                  color: rgba(51,51,51,1);
                  line-height: 10px;
                }
              }
            }
          }
          .serve-type {
            margin: 0 auto;
            width: 100%;
            height: 96px;
            display: flex;
            >div {
              text-align: center;
            }
            .serve-type-left,
            .serve-type-right {
              width: 96px;
              height: 96px;
              border: 1px solid #E5E5E5;
              border-radius: 10px;
            }
            .serve-type-center {
              flex: 1;
              >div {
                width: 96px;
                height: 96px;
                border: 1px solid #E5E5E5;
                border-radius: 10px;
                margin: 0 auto;
              }
            }
            .serve-type-left,
            .serve-type-center,
            .serve-type-right {
              cursor: pointer;
              i {
                font-size: 40px;
                color: #0A72E6;
              }
              p {
                margin: 0;
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(51,51,51,1);
              }
            }
          }
          .serve-nav {
            margin-top: 17px;
            .serve-nav-box {
              display: flex;
              margin-top: 16px;
              >div {
                flex: 1;
                margin-right: 20px;
                width: 100%;
                height: 50px;
                line-height: 50px;
                background: rgba(10,114,230,1);
                border-radius: 10px;
                text-align: center;
                cursor: pointer;
                i {
                  font-size: 22px;
                  color: #fff;
                  vertical-align: bottom;
                }
                span {
                  font-size: 18px;
                  font-family: PingFang SC;
                  font-weight: 500;
                  color: rgba(255,255,255,1);
                }
              }
              >div:last-child {
                margin-right: 0;
              }
            }
          }
        }
      }
      // 市长热线
      .mayor-hotLine {
        display: flex;
        >div {
          flex: 1;
        }
        .mayor-hotLine-left {
          margin-right: 40px;
          .mayor-hotLine-left-header {
            margin-bottom: 10px;
            >span {
              font-size: 16px;
              cursor: pointer;
            }
            >span:first-child {
              color: rgb(59, 136, 224);
            }
            >span:nth-child(2) {
              float: right;
            }
          }
          .mayor-hotLine-center {
            table {
              border-collapse: collapse;
            }
            th {
              background: #E5E5E5;
              font-size: 14px;
              font-family: PingFang SC;
              font-weight: 500;
              color: rgba(51,51,51,1);
            }
            tr {
              border-bottom: 1px dashed #ccc;
              color: #ccc;
            }
            .mayor-hotLine-table-th {
              border-bottom: none;
            }
          }
        }
        .mayor-hotLine-right {
          .mayor-hotLine-right-header {
            margin-bottom: 10px;
            >span {
              font-size: 16px;
              cursor: pointer;
            }
            >span:first-child {
              color: rgb(59, 136, 224);
            }
            >span:last-child {
              float: right;
            }
          }
          .mayor-hotLine-right-image {
            width: 100%;
            height: 450px;
            background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582883679444&di=183fb7205a8e4dd84502a02169328203&imgtype=0&src=http%3A%2F%2Fwww.nea.gov.cn%2F2017-01%2F19%2F135995609_14847865094371n.jpg') no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      // 社会评价
      .society-evaluate {
        display: flex;
        margin-top: 20px;
        >div {
          flex: 1;
          text-align: center;
          margin-top: 100px;
          cursor: pointer;
          >div {
            width: 50%;
            height: 120px;
            line-height: 120px;
            background: url('../assets/image/societyEvaluate.png') no-repeat center top;
            background-size: 100% 100%;
            margin: 0 auto;
            border-radius: 8px;
            font-size: 22px;
            font-family: PingFang SC;
            font-weight: 700;
            color: #fff;
          }
        }
      }
      // 实事项目
      .practical-projects {
        .practical-projects-top {
          .practical-projects-left {
            width: 100%;
            height: 440px;
            margin-right: 20px;
            h4 {
              margin: 0;
              padding: 0;
              font-size: 18px;
              font-weight: 700;
              font-family: PingFang SC;
              color: #000;
              text-align: center;
            }
            ul {
              margin-top: 10px;
              height: 382px;
              overflow-y: auto;
              padding-right: 6px;
              li {
                display: flex;
                margin-bottom: 2px;
                height: 36px;
                line-height: 36px;
                border-bottom: 1px dashed #d9e4fe;
                .practical-projects-left-index {
                  i {
                    display: inline-block;
                    width: 26px;
                    height: 26px;
                    line-height: 26px;
                    border-radius: 50%;
                    font-size: 16px;
                    font-weight: 600;
                    color: #000;
                    text-align: center;
                    background-color: #d9e4fe;
                    vertical-align: middle;
                    font-style: normal;
                  }
                }
                .practical-projects-left-content {
                  flex: 1;
                  margin: 0 30px;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  overflow: hidden;
                  span {
                    font-size: 16px;
                    color: #000;
                    vertical-align: middle;
                    font-style: normal;
                  }
                }
                .practical-projects-left-botton {
                  width: 80px;
                  height: 21px;
                  span {
                    display: inline-block;
                    width: 80px;
                    height: 21px;
                    line-height: 21px;
                    text-align: center;
                    border-radius: 3px;
                    background-color: #d9e4fe;
                    font-size: 14px;
                    color: #5278c9;
                    vertical-align: middle;
                    cursor: pointer;
                  }
                }
              }
            }
          }
          // .practical-projects-right {
          //   flex: 1;
          //   width: 100%;
          //   height: 420px;
          //   background:'#d3f0fd';
          // }
        }
        .switch-years {
          display: flex;
          margin-top: 10px;
          padding: 0 10px;
          overflow: hidden;
          background-color: #e9f5ff;
          >p {
            flex: 0.5;
            margin: 0;
            padding: 0;
            line-height: 52px;
            font-size: 16px;
            color: #1d659c;
          }
          .switch {
            flex: 1;
            width: 100%;
            position: relative;
            overflow: hidden;
            .bd {
              position: absolute;
              left: 0;
              width: 100%;
              height: 100%;
              white-space:nowrap;
              >p {
                margin: 0;
                width: 100%;
                line-height: 52px;
                white-space:nowrap;
                padding: 0 20px;
                text-align: center;
                >span {
                  display: inline-block;
                  width: 20%;
                  font-size: 16px;
                  color: #333;
                  text-decoration: underline;
                  cursor: pointer;
                }
                >span:hover {
                  color: #1d659c;
                }
              }
            }
            .prev,
            .next {
              margin-top: -10px;
              position: absolute;
              top: 50%;
              width: 20px;
              height: 20px;
              cursor: pointer;
            }
            .prev:hover,
            .next:hover {
              filter: alpha(opacity=80);
              opacity: 0.8;
              -moz-opacity: 0.8;
            }
            .prev {
              left: 0;
              z-index: 10;
            }
            .next {
              right: 0;
            }
          }
        }
      }
    }
  }
}
// 资料查询
.information-information-box {
  width: 100%;
  background-color: #F5F5F5;
  .information-information {
    width: 100%;
    padding: 40px 0 10px 0;
    .information-information-tabs {
      display: flex;
      height: 56px;
      line-height: 56px;
      background: #E7F3FF;
      >div {
        flex: 1;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #0A72E6;
        cursor: pointer;
      }
      .is-active {
        color: #fff;
        background: #0A72E6;
      }
    }
    .information-information-tabs-content {
      width: 100%;
      height: 380px;
      padding: 0 15px;
      margin-top: 30px;
      text-align: left;
      // 资源中心
      .resource-center {
        .line {
          text-align: center;
        }
        .searching-btn {
          text-align: center;
          padding-top: 20px;
          .el-button {
            width: 200px;
            font-size: 16px;
          }
        }
      }
      // 资料下载
      .data-download {
        p {
          margin: 0;
          width: 100%;
          text-align: right;
          font-size: 16px;
          line-height: 20px;
          font-family:PingFang SC;
          font-weight:500;
          color:rgba(10,114,230,1);
          span {
            cursor: pointer;
          }
        }
        ul {
          li {
            padding: 0 10px 0 15px;
            height: 36px;
            line-height: 36px;
            font-size: 16px;
            color: #333;
            .data-title {
              width: 80%;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
            .download {
              float: right;
              font-family:PingFang SC;
              font-weight:500;
              color:rgba(10,114,230,1);
              cursor: pointer;
            }
          }
          .no-data {
            text-align: center;
            font-size: 18px;
            color: #ccc;
          }
        }
      }
    }
  }
}
// 浮窗
.floating-window {
  position: fixed;
  top: 50%;
  left: 0;
  width: 60px;
  height: 200px;
  background: #0A72E6;
  transform: translateY(-50%);
  p {
    margin: 0;
    padding: 0;
  }
  .activity-box,
  .questionnaire-box {
    width: 100%;
    height: 50%;
    text-align: center;
    cursor: pointer;
    padding-top: 12px;
    i,
    p {
      color: #fff;
      font-size: 34px;
    }
    p {
      font-size: 16px;
    }
  }
  .activity-box {
    border-bottom: 1px solid #ccc;
  }
}
/deep/.mu-carousel {
  width: 100%;
  height: 100%;
}
/deep/.container{
  padding: 0;
}
/deep/.mu-tab-active{
  background-color: #0A72E6;
  color: #fff;
}
/deep/.mu-tab-link-highlight{
  background-color: transparent;
}
/deep/.mu-tabs-inverse{
  color: #0A72E6;
}
/deep/.mu-tab-wrapper{
  border-radius: 10px;
}
.list{
  padding: 0;
  margin: 0;
  li{
    display: flex;
    align-items: center;
    border-bottom: 1px dotted #EEEEEE;
    padding: 10px 0;
    .dots{
      width: 10px;
      height: 10px;
      border: 2px solid #0A72E6 ;
      background-color: #fff;
      border-radius: 50%;
      margin-right: 10px;
      margin-left: 5px;
    }
    .content{
      font-size: 16px;
      color: #676767;
      text-align: left;
    }
    .content:hover {
      color: #0A72E6;
    }
    .time{
      margin-left: auto;
      font-size: 16px;
      color: #AAAAAA;
    }
  }
}
li{
  list-style-type :none;
}
</style>
