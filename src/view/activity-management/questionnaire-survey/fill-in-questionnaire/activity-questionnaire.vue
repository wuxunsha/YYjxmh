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
        <h4>{{formData.title}}</h4>
        <el-form :model="formData" ref="formData" class="questionnaire-survey-content" :rules="rules">
          <div class="each-question" v-for="(item, index) in formData.list" :key="item.id">
            <el-form-item v-if="item.flag === 1" :prop="'list[' + index + '].answerCode'" :rules="{required: true, message: '请选择答案', trigger: 'blur'}">
              <!-- 问题 -->
              <div class="evaluate-issue">
                <span>{{index + 1}}、</span>
                <span>{{item.title}}</span>
              </div>
              <!-- 答案选项 -->
              <el-radio-group v-model="item.answerCode" class="radio-select" :disabled="status === 1 ? false : true">
                <el-row v-for="(item1, index1) in item.str" :key="index1">
                  <el-radio :label="mapRealtionshipAnswerName[index1]" class="radio-select-box">
                    <span>{{item1}}</span>
                  </el-radio>
                </el-row>
              </el-radio-group>
            </el-form-item>
            <el-form-item v-else :prop="'list[' + index + '].arr'" :rules="{type: 'array', required: true, message: '请选择答案', trigger: 'blur'}">
              <!-- 问题 -->
              <div class="evaluate-issue">
                <span>{{index + 1}}、</span>
                <span>{{item.title}}</span>
              </div>
              <!-- 答案选项 -->
              <el-checkbox-group v-model="item.arr" class="radio-select" :disabled="status === 1 ? false : true">
                <el-row v-for="(item1, index1) in item.str" :key="index1">
                  <el-checkbox :label="mapRealtionshipAnswerName[index1]" class="radio-select-box checkbox-select">
                    <span>{{item1}}</span>
                  </el-checkbox>
                </el-row>
              </el-checkbox-group>
            </el-form-item>
          </div>
          <el-form-item class="cellphone-number" v-if="formData.realNameStatus === 1" prop="phone">
            <div v-if="status === 1">
              <span>手机号码：</span>
              <span>
                <input type="number" maxlength="11" v-model="formData.phone" placeholder="请输入手机号码">
              </span>
            </div>
          </el-form-item>
          <el-form-item class="submit-btn" v-if="status === 1">
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
import { Message } from 'element-ui'
export default {
  components: {
    commonHeader,
    swiper,
    foot
  },
  data () {
    // 手机号自定义验证规则
    var validatePhone = (rule, value, callback) => {
      let reg = /^1(3[0-9]|4[5,7]|5[0,1,2,3,5,6,7,8,9]|6[2,5,6,7]|7[0,1,7,8]|8[0-9]|9[1,8,9])\d{8}$/
      if (value === '') {
        callback(new Error('请输入手机号码'))
      } else if (!reg.test(value)) {
        callback(new Error('请输入正确的手机号码'))
      } else {
        callback();
      }
    }
    return {
      select: '1',
      // 顶部tab切换栏高亮索引
      activee: 0,
      // 问卷id
      questionnaireId: 0,
      // 问卷状态
      status: 1,
      // 面包屑导航数据
      breadcrumbList: [
        {
          content: '活动管理',
          breadcrumbUrl: '/activityManagement/questionnaireSurvey?type=1'
        },
        {
          content: '问卷调查',
          breadcrumbUrl: '/activityManagement/questionnaireSurvey?type=1'
        },
        {
          content: '填写问卷调查表'
        }
      ],
      // 选择数据
      formData: {},
      mapRealtionshipAnswerName: {
        0: 'A',
        1: 'B',
        2: 'C',
        3: 'D',
        4: 'E'
      },
      // 手机号验证规则
       rules: {
        phone: [
          { validator: validatePhone, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.getFindByList()
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
    // 查询问卷详情
    getFindByList () {
      // 获取状态
      this.status = Number(this.$route.query.status)
      homeApi.findByList(this.$route.query.id).then((res) => {
        if (res.data.code === 10000) {
          this.questionnaireId = res.data.data.id
          res.data.data.phone = ''
          res.data.data.list.forEach(item => {
            item.questtionId = item.id
            item.answerCode = ''
            item.arr = []
          })
          this.formData = res.data.data
        }
      })
    },
    // 提交
    submit () {
      this.$refs.formData.validate((valid) => {
        if (valid) {
          this.formData.surveyId = this.questionnaireId
          homeApi.submitAnswer(this.formData).then((res) => {
            if (res.data.code === 10000) {
              Message.success('提交成功')
              setTimeout(() => {
                this.$router.push(
                  {
                    path: '/activityManagement/questionnaireSurvey',
                    query: {
                      type: 1
                    }
                  }
                )
              }, 500);
            }
          })
        }
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
      font-size: 20px;
      color: #333;
    }
    .questionnaire-survey-content {
      text-align: left;
      margin-bottom: 20px;
      .each-question {
        margin-bottom: 10px;
        .evaluate-issue {
          font-size: 18px;
        }
        .radio-select {
          .radio-select-box {
            margin: 14px 0 0 28px;
            /deep/.el-radio__label {
              font-size: 16px;
            }
            /deep/.el-checkbox__label {
              font-size: 16px;
            }
          }
          .checkbox-select {
            margin-top: 0;
          }
        }
        /deep/.el-form-item__error {
          left: 28px;
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
      text-align: center;
      margin-top: 20px;
      .el-button {
        width: 200px;
        font-size: 16px;
      }
    }
  }
}
</style>
