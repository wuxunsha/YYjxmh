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
              <el-breadcrumb-item>资料查询</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="innovate-create-content">
        <div class="inquire-box" v-if="tableFlag">
            <el-form :model="informationCentreData" label-width="100px">
              <el-form-item label="关键字" class="inquire-input">
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
                <el-button type="primary" @click="inquire">查询</el-button>
                <el-button type="primary" @click="empty">清空</el-button>
              </el-form-item>
            </el-form>
        </div>
        <p class="conceal-btn">
          <span @click="tableShow" v-if="tableFlag">收起</span>
          <span @click="tableShow" v-if="!tableFlag">展开</span>
        </p>
        <div class="innovate-create-table">
          <el-table :data="tableData" style="width: 100%" :show-header="false" @row-click="examineDetails">
            <el-table-column label="类型" width="140" prop="typeName">
            </el-table-column>
            <el-table-column prop="title" label="标题"></el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="page">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.page" :page-sizes="[10, 20, 50, 100]" :page-size="querInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total" background></el-pagination>
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
import { Message } from 'element-ui'
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
      // 资源类型
      resourceType: [],
      tableData: [],
      // 控制内容显示隐藏开关
      tableFlag: true,
      // 查询条件
      querInfo: {
        page: 1,
        size: 20
      },
      // 商品总条数
      total: 0
    }
  },
  created () {
    this.getType()
    this.$nextTick(() => {
      this.scrollTop()
    })
    // 获取资源类型
    this.getResourceType()
    // 获取资源年份
    this.getResourceYearType()
  },
  methods: {
    // 获取传参数据
    getType () {
      if (this.$route.query.type) {
        this.informationCentreData.type = this.$route.query.type.split(',')
      }
      if (this.$route.query.title) {
        this.informationCentreData.title = this.$route.query.title
      }
      if (this.$route.query.years) {
        this.informationCentreData.years = this.$route.query.years
      }
      if (this.$route.query.startTime) {
        this.informationCentreData.startTime = this.$route.query.startTime
      }
      if (this.$route.query.endTime) {
        this.informationCentreData.endTime = this.$route.query.endTime
      }
      this.getMultiConditionPagingQuery()
    },
    // 资源查询
    getMultiConditionPagingQuery () {
      const data = {
        types: this.informationCentreData.type,
        title: this.informationCentreData.title,
        year: this.informationCentreData.years,
        startTime:  this.informationCentreData.startTime,
        endTime: this.informationCentreData.endTime,
        page: this.querInfo.page,
        size: this.querInfo.size
      }
       homeApi.getMultiConditionPagingQueryAll(data).then((res) => {
        if (res.data.code === 10000) {
          this.tableData = res.data.data.dataList
          this.total = res.data.data.total
        }
      })
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
    // 点击查询
    inquire () {
      if (!this.informationCentreData.title && !this.informationCentreData.years && !this.informationCentreData.startTime && !this.informationCentreData.endTime && this.informationCentreData.type.length < 1) {
        Message.error('至少输入一项查询条件')
      } else if (this.informationCentreData.startTime > this.informationCentreData.endTime) {
        Message.error('开始时间不能大于结束时间')
      } else {
        this.querInfo.page = 1
        this.getMultiConditionPagingQuery()
      }
    },
    // 清空
    empty () {
      this.informationCentreData = {
        title: '',
        years: '',
        type: [],
        startTime: '',
        endTime: ''
      }
      this.querInfo.page = 1
      this.getMultiConditionPagingQuery()
    },
    // 查看详情
    examineDetails (row) {
      if (row.types === 4) {
        this.$router.push(
          {
            path: '/dataCentreParticulars',
            query: {
              id: row.id
            }
          }
        )
      } else if (row.types === 3) {
        this.$router.push(
          {
            path: '/dataCentreDetails',
            query: {
              id: row.id,
              type: 1
            }
          }
        )
      } else {
        this.$router.push(
          {
            path: '/dataCentreDetails',
            query: {
              id: row.id,
              type: 2
            }
          }
        )
      }
    },
    // 滚动条置顶
    scrollTop () {
      let headerTop = this.$refs.headerTop
      headerTop.scrollIntoView({behaviour: 'smooth'})
    },
    // 显示隐藏表格
    tableShow () {
      this.tableFlag = !this.tableFlag
    },
    handleSizeChange (size) {
      this.querInfo.size = size
      this.getMultiConditionPagingQuery()
    },
    handleCurrentChange (page) {
      this.querInfo.page = page
      this.getMultiConditionPagingQuery()
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
  .innovate-create-content {
    .inquire-box {
      text-align: left;
      margin-top: 20px;
      .inquire-input {
        .el-input {
          width: 50%;
        }
      }
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
        /deep/.el-form-item__content {
          margin-left: 0!important;
        }
      }
    }
    .conceal-btn {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid #409EFF;
      span {  
        font-size: 16px;
        color: #409EFF;
        cursor: pointer;
      }
    }
    .innovate-create-table {
      width: 100%;
      /deep/.el-table {
        td {
          border-bottom: 1px dashed #EBEEF5;
        }
      }
      .page {
        margin-top: 40px;
      }
    }
  }
}
</style>
