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
      <div class="questionnaire-survey">
        <h4>2018年绩效办李四社会评价问卷调查表</h4>
        <el-form :model="formData" ref="formData">
          <div class="questionnaire-survey-content" v-for="(item, index) in formData.surveySubtitleEntityList" :key="index">
            <el-form-item>
              <!-- 方向 -->
              <div class="evaluate-direction"> {{mapSequence[index]}}、{{item.title}}</div>
            </el-form-item>
            <el-form-item v-for="(item1, index1) in item.questtionEntities" :key="index1" :prop="'surveySubtitleEntityList[' + index + '].questtionEntities[' + index1 + '].select'" :rules="{required: true, message: '请选择答案', trigger: 'blur'}" class="each-question">
              <!-- 问题 -->
              <div class="evaluate-issue">
                <span>{{index1 + 1}}、</span>
                <span>{{item1.title}}</span>
              </div>
              <!-- 答案选项 -->
              <el-radio-group v-model="item1.select">
                <el-radio :label="index2" v-for="(item2, index2) in item1.quesList" :key="index2">
                  <span>{{mapRealtionshipAnswerName[index2]}}.</span>
                  <span>{{item2}}</span>
                </el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
          <el-form-item prop="phoneNumber" :rules="{required: true, message: '请输入手机号码', trigger: 'blur'}" class="cellphone-number">
            <div>
              <span>手机号码：</span>
              <span>
                <input type="number" maxlength="11" v-model="formData.phoneNumber" placeholder="请输入手机号码">
              </span>
            </div>
          </el-form-item>
          <el-form-item class="submit-btn">
            <el-button type="primary" @click="submit">提交</el-button>
          </el-form-item>
        </el-form>
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
      activee: 3,
      // 主项类型
      tableType: 0,
      // 面包屑导航数据
      breadcrumbList: [],
      // 选择数据
      formData: {
        phoneNumber: '',
        surveySubtitleEntityList: [
          {
            title: '民生',
            questtionEntities: [
              {
                title: '您感觉在过去的一年，资阳区环境变化是怎么样的？',
                select: '',
                quesList: ['变化非常大','跟往年差不多', '比以前差了很多']
              },
              {
                title: '您感觉在过去的一年，资阳区环境变化是怎么样的？',
                select: '',
                quesList: ['变化非常大','跟往年差不多', '比以前差了很多']
              }
            ]
          },
          {
            title: '民生',
            questtionEntities: [
              {
                title: '您感觉在过去的一年，资阳区环境变化是怎么样的？',
                select: '',
                quesList: ['变化非常大','跟往年差不多', '比以前差了很多']
              },
              {
                title: '您感觉在过去的一年，资阳区环境变化是怎么样的？',
                select: '',
                quesList: ['变化非常大','跟往年差不多', '比以前差了很多']
              }
            ]
          }
        ]
      },
      // 序号
      mapRealtionshipAnswerName: {
        0: 'A',
        1: 'B',
        2: 'C',
        3: 'D',
        4: 'E'
      },
      // 方向映射
      mapSequence: {
        0: '一',
        1: '二',
        2: '三',
        3: '四',
        4: '五',
        5: '六',
        6: '七',
        7: '八',
        8: '九',
        9: '十',
        10: '十一',
        11: '十二',
        12: '十三',
        13: '十四',
        14: '十五',
        15: '十六',
        16: '十七',
        17: '十八',
        18: '十九',
        19: '二十'
      }
    }
  },
  created () {
    this.getType ()
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
    getType () {
      let navIndex = Number(this.$route.query.navIndex)
      if (navIndex === 1) {
        this.breadcrumbList = [
          {
            content: '民生绩效',
            breadcrumbUrl: '/peoples/regionSocietyEvaluate?type=1&navIndex=1'
          },
          {
            content: '社会评价',
            breadcrumbUrl: '/peoples/regionSocietyEvaluate?type=1&navIndex=1'
          },
          {
            content: '区县(市)',
            breadcrumbUrl: '/peoples/regionSocietyEvaluate?type=1&navIndex=1'
          },
          {
            content: '填写问卷调查'
          }
        ]
      } else if (navIndex === 2) {
        this.breadcrumbList = [
          {
            content: '民生绩效',
            breadcrumbUrl: '/peoples/citySocietyEvaluate?type=1&navIndex=1'
          },
          {
            content: '社会评价',
            breadcrumbUrl: '/peoples/citySocietyEvaluate?type=1&navIndex=2'
          },
          {
            content: '市直单位',
            breadcrumbUrl: '/peoples/citySocietyEvaluate?type=1&navIndex=2'
          },
          {
            content: '填写问卷调查'
          }
        ]
      } else if (navIndex === 3) {
        this.breadcrumbList = [
          {
            content: '民生绩效',
            breadcrumbUrl: '/peoples/gardenSocietyEvaluate?type=1&navIndex=1'
          },
          {
            content: '社会评价',
            breadcrumbUrl: '/peoples/gardenSocietyEvaluate?type=1&navIndex=3'
          },
          {
            content: '经济园区',
            breadcrumbUrl: '/peoples/gardenSocietyEvaluate?type=1&navIndex=3'
          },
          {
            content: '填写问卷调查'
          }
        ]
      }
    },
    // 提交
    submit () {
      console.log(this.formData)
      this.$refs.formData.validate((valid) => {
        console.log(valid)
      })
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]{
  -moz-appearance: textfield;
}
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
  .questionnaire-survey {
    padding-top: 20px;
    h4 {
      font-size: 18px;
      color: #333;
    }
    .questionnaire-survey-content {
      text-align: left;
      margin-bottom: 20px;
      /deep/.el-form-item {
        margin: 0;
      }
      .evaluate-direction {
        font-size: 16px;
        font-weight: 700;
      }
      .each-question {
        margin-bottom: 10px;
        .evaluate-issue {
          font-size: 16px;
          input {
              width: 46px;
              border: none;
              border-bottom: 1px solid #333;
              background: none;
              text-align: center;
          }
        }
        .answer-option {
          margin: 6px 0 0 20px;
          span {
            cursor: pointer;
          }
        }
      }
    }
    .cellphone-number {
      text-align: left;
      input {
        border: none;
        border-bottom: 1px solid #333;
        outline: none;
      }
      /deep/.el-form-item__error {
        margin-left: 70px;
      }
    }
    .submit-btn {
      .el-button {
        width: 200px;
        font-size: 16px;
      }
    }
  }
}
</style>
