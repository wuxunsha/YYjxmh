import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'

// 绩效资讯
import performanceInformation from '@/view/performance-information/performance-information'
// 绩效资讯-工作动态
import workDynamic from '@/view/performance-information/work-dynamic/work-dynamic'
// 绩效资讯-文件公告
import fileAnnouncement from '@/view/performance-information/file-announcement/file-announcement'
// 绩效资讯-媒体聚焦
import mediaFocus from '@/view/performance-information/media-focus/media-focus'
// 绩效资讯-查看详情
import performanceDetails from '@/view/performance-information/details/details-page'

// 亮点特色
import lightspotFeature from '@/view/lightspot-feature/lightspot-feature'
// 亮点特色-市直单位
import cityUnit from '@/view/lightspot-feature/city-unit/city-unit'
// 亮点特色-区县(市)
import region from '@/view/lightspot-feature/region/region'
// 亮点特色-查看详情
import lightspotDetails from '@/view/lightspot-feature/details/details-page'

// 绩效理论
import performanceTheory from '@/view/performance-theory/performance-theory'
// 绩效理论-理论研究
import theoryStudy from '@/view/performance-theory/theory-study/theory-study'
// 绩效理论-他山之石
import adviceFromOthers from '@/view/performance-theory/advice-from-others/advice-from-others'
// 绩效理论-交流学习
import exchangeStudy from '@/view/performance-theory/exchange-study/exchange-study'
// 绩效理论-益阳实践
import yyPractice from '@/view/performance-theory/yy-practice/yy-practice'
// 绩效理论-查看详情
import performanceTheoryDetails from '@/view/performance-theory/details/details-page'

// 绩效管理
import performanceManage from '@/view/performance-manage/performance-manage'
// 绩效管理-日常考核-区县（市）考核
import regionEverydayAssess from '@/view/performance-manage/everyday-assess/region-everyday-assess'
// 绩效管理-日常考核-市直单位考核
import cityEverydayAssess from '@/view/performance-manage/everyday-assess/city-everyday-assess'
// 绩效管理-日常考核-经济园区考核
import gardenEverydayAssess from '@/view/performance-manage/everyday-assess/garden-everyday-assess'
// 绩效管理-年度考核-区县（市）考核
import regionYearAssess from '@/view/performance-manage/year-assess/region-year-assess'
// 绩效管理-年度考核-市直单位考核
import cityYearAssess from '@/view/performance-manage/year-assess/city-year-assess'
// 绩效管理-年度考核-经济园区考核
import gardenYearAssess from '@/view/performance-manage/year-assess/garden-year-assess'
// 绩效管理-绩效指标-区县（市）指标
import regionPerformanceIndex from '@/view/performance-manage/performance-index/region-performance-index'
// 绩效管理-绩效指标-市直单位指标
import cityPerformanceIndex from '@/view/performance-manage/performance-index/city-performance-index'
// 绩效管理-绩效指标-经济园区指标
import gardenPerformanceIndex from '@/view/performance-manage/performance-index/garden-performance-index'
// 绩效管理-创新创优
import innovateCreate from '@/view/performance-manage/innovate-create/innovate-create'
// 绩效管理-创新创优-查看详情
import innovateCreateDetails from '@/view/performance-manage/innovate-create/details/details-page'
// 绩效管理-绩效改进-区县（市）指标
import regionPerformanceImprove from '@/view/performance-manage/performance-improve/region-performance-improve'
// 绩效管理-绩效改进-市直单位指标
import cityPerformanceImprove from '@/view/performance-manage/performance-improve/city-performance-improve'
// 绩效管理-绩效改进-经济园区指标
import gardenPerformanceImprove from '@/view/performance-manage/performance-improve/garden-performance-improve'
// 绩效管理-社会评价-区县（市）评价
import regionSocietyEvaluate from '@/view/performance-manage/society-evaluate/region-society-evaluate'
// 绩效管理-社会评价-市直单位评价
import citySocietyEvaluate from '@/view/performance-manage/society-evaluate/city-society-evaluate'
// 绩效管理-社会评价-经济园区评价
import gardenSocietyEvaluate from '@/view/performance-manage/society-evaluate/garden-society-evaluate'
// 绩效管理-指标详情
import indexDetails from '@/view/performance-manage/index-details/index-details'
// 绩效管理-查看进度
import examineSchedule from '@/view/performance-manage/examine-schedule/examine-schedule'

// 民生绩效
import peoplesPerformance from '@/view/peoples-performance/peoples-performance'
// 民生绩效-社会评价-区县(市)评价
import peoplesRegionSocietyEvaluate from '@/view/peoples-performance/society-evaluate/region-society-evaluate'
// 民生绩效-社会评价-市直单位评价
import cityRegionSocietyEvaluate from '@/view/peoples-performance/society-evaluate/city-society-evaluate'
// 民生绩效-社会评价-经济园区评价
import gardenRegionSocietyEvaluate from '@/view/peoples-performance/society-evaluate/garden-society-evaluate'
// 民生绩效-实事项目
import practicalProject from '@/view/peoples-performance/practical-project/practical-project'
// 民生绩效-实事项目-查看进度
import projectParticulars from '@/view/peoples-performance/practical-project/examine-schedule/project-particulars'

// 资料中心-资料查询
import dataInquire from '@/view/data-centre/data-inquire'
// 资料中心-资料查询-查看详情
import dataCentreDetails from '@/view/data-centre/details/details-page'
// 资料中心-资料查询-查看详情(实事项目)
import dataCentreParticulars from '@/view/data-centre/details/project-particulars'
// 资料中心-资料下载列表
import formDownload from '@/view/data-centre/form-download'

// 了解我们
import realizeUs from '@/view/know-us/realize-us'
// 了解我们-公告公示
import announcement from '@/view/know-us/announcement/announcement'
// 了解我们-公告公示-查看详情
import announcementDetails from '@/view/know-us/announcement/details/details-page'
// 了解我们-机构介绍
import orgIntroduce from '@/view/know-us/organization-introduce/org-introduce'

// 活动管理
import activityManagement from '@/view/activity-management/activity-management'
// 活动管理-问卷调查列表
import questionnaireSurvey from '@/view/activity-management/questionnaire-survey/questionnaire-survey'
// 活动管理-问卷调查-填写问卷调查表(社会评价)
import fillInQuestionnaire from '@/view/activity-management/questionnaire-survey/fill-in-questionnaire/fill-in-questionnaire'
// 活动管理-问卷调查-填写问卷调查表(活动管理)
import activityQuestionnaire from '@/view/activity-management/questionnaire-survey/fill-in-questionnaire/activity-questionnaire'
// 活动管理-平台活动列表
import platformActivity from '@/view/activity-management/platform-activity/platform-activity'
// 活动管理-平台活动列表-查看活动详情
import platformActivityDetails from '@/view/activity-management/platform-activity/details/details-page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        },
        // 绩效资讯
        {
          path: '/performanceInformation',
          name: 'performanceInformation',
          component: performanceInformation,
          children: [
            // 工作动态
            {path: '/performanceInformation/workDynamic', component: workDynamic, meta: { requireAuth: true }},
            // 文件公告
            {path: '/performanceInformation/fileAnnouncement', component: fileAnnouncement, meta: { requireAuth: true }},
            // 媒体聚焦
            {path: '/performanceInformation/mediaFocus', component: mediaFocus, meta: { requireAuth: true }}
          ]
        },
        // 绩效资讯-查看资讯详情
        {
          path: '/performanceInformation/details',
          name: 'performanceDetails',
          component: performanceDetails
        },
        // 亮点特色
        {
          path: '/lightspotFeature',
          name: 'lightspotFeature',
          component: lightspotFeature,
          children: [
            // 市直单位亮点特色
            {path: '/lightspotFeature/cityUnit', component: cityUnit, meta: { requireAuth: true }},
            // 区县(市)亮点特色
            {path: '/lightspotFeature/region', component: region, meta: { requireAuth: true }}
          ]
        },
        // 亮点特色-查看资讯详情
        {
          path: '/lightspotFeature/details',
          name: 'lightspotDetails',
          component: lightspotDetails
        },
        // 绩效理论
        {
          path: '/performanceTheory',
          name: 'performanceTheory',
          component: performanceTheory,
          children: [
            // 理论研究
            {path: '/performanceTheory/theoryStudy', component: theoryStudy, meta: { requireAuth: true }},
            // 他山之石
            {path: '/performanceTheory/adviceFromOthers', component: adviceFromOthers, meta: { requireAuth: true }},
            // 交流学习
            {path: '/performanceTheory/exchangeStudy', component: exchangeStudy, meta: { requireAuth: true }},
            // 益阳实践
            {path: '/performanceTheory/yyPractice', component: yyPractice, meta: { requireAuth: true }}
          ]
        },
        // 绩效理论-查看资讯详情
        {
          path: '/performanceTheory/details',
          name: 'performanceTheoryDetails',
          component: performanceTheoryDetails
        },
        // 绩效管理
        {
          path: '/performanceManage',
          name: 'performanceManage',
          meta: { requireAuth: true },
          component: performanceManage,
          children: [
            // 绩效考核-日常考核-区县(市)考核
            {path: '/regionEverydayAssess', component: regionEverydayAssess, meta: { requireAuth: true }},
            // 绩效考核-日常考核-市直单位考核
            {path: '/cityEverydayAssess', component: cityEverydayAssess, meta: { requireAuth: true }},
            // 绩效考核-日常考核-经济园区考核
            {path: '/gardenEverydayAssess', component: gardenEverydayAssess, meta: { requireAuth: true }},
            // 绩效考核-年度考核-区县(市)考核
            {path: '/regionYearAssess', component: regionYearAssess, meta: { requireAuth: true }},
            // 绩效考核-年度考核-市直单位考核
            {path: '/cityYearAssess', component: cityYearAssess, meta: { requireAuth: true }},
            // 绩效考核-年度考核-经济园区考核
            {path: '/gardenYearAssess', component: gardenYearAssess, meta: { requireAuth: true }},
            // 绩效指标-区县(市)指标
            {path: '/regionPerformanceIndex', component: regionPerformanceIndex, meta: { requireAuth: true }},
            // 绩效指标-市直单位指标
            {path: '/cityPerformanceIndex', component: cityPerformanceIndex, meta: { requireAuth: true }},
            // 绩效指标-经济园区指标
            {path: '/gardenPerformanceIndex', component: gardenPerformanceIndex, meta: { requireAuth: true }},
            // 创新创优
            {path: '/innovateCreate', component: innovateCreate, meta: { requireAuth: true }},
            // 绩效改进-区县(市)指标
            {path: '/regionPerformanceImprove', component: regionPerformanceImprove, meta: { requireAuth: true }},
            // 绩效改进-市直单位指标
            {path: '/cityPerformanceImprove', component: cityPerformanceImprove, meta: { requireAuth: true }},
            // 绩效改进-经济园区指标
            {path: '/gardenPerformanceImprove', component: gardenPerformanceImprove, meta: { requireAuth: true }},
            // 社会评价-区县(市)评价
            {path: '/regionSocietyEvaluate', component: regionSocietyEvaluate, meta: { requireAuth: true }},
            // 社会评价-市直单位评价
            {path: '/citySocietyEvaluate', component: citySocietyEvaluate, meta: { requireAuth: true }},
            // 社会评价-经济园区评价
            {path: '/gardenSocietyEvaluate', component: gardenSocietyEvaluate, meta: { requireAuth: true }}
          ]
        },
        // 绩效管理-创新创优-查看详情
        {
          path: '/innovateCreate/details',
          name: 'innovateCreateDetails',
          component: innovateCreateDetails
        },
        // 民生绩效
        {
          path: '/peoplesPerformance',
          name: 'peoplesPerformance',
          meta: { requireAuth: true },
          component: peoplesPerformance,
          children: [
            // 社会评价-区县(市)评价
            {path: '/peoples/regionSocietyEvaluate', component: peoplesRegionSocietyEvaluate, meta: { requireAuth: true }},
            // 社会评价-市直单位评价
            {path: '/peoples/citySocietyEvaluate', component: cityRegionSocietyEvaluate, meta: { requireAuth: true }},
            // 社会评价-经济园区评价
            {path: '/peoples/gardenSocietyEvaluate', component: gardenRegionSocietyEvaluate, meta: { requireAuth: true }},
            // 实事项目
            {path: '/peoples/practicalProject', component: practicalProject, meta: { requireAuth: true }}
          ]
        },
        // 绩效指标详情
        {
          path: '/indexDetails',
          name: 'indexDetails',
          component: indexDetails
        },
        // 查看指标详情进度页
        {
          path: '/examineSchedule',
          name: 'examineSchedule',
          component: examineSchedule
        },
        // 实事项目详情
        {
          path: '/projectParticulars',
          name: 'projectParticulars',
          component: projectParticulars
        },
        // 资料查询
        {
          path: '/dataInquire',
          name: 'dataInquire',
          component: dataInquire
        },
        // 资料查询-查看详情
        {
          path: '/dataCentreDetails',
          name: 'dataCentreDetails',
          component: dataCentreDetails
        },
        // 资料查询-查看详情(实事项目)
        {
          path: '/dataCentreParticulars',
          name: 'dataCentreParticulars',
          component: dataCentreParticulars
        },
        // 表格下载
        {
          path: '/formDownload',
          name: 'formDownload',
          component: formDownload
        },
        // 了解我们
        {
          path: '/realizeUs',
          name: 'realizeUs',
          meta: { requireAuth: true },
          component: realizeUs,
          children: [
            // 机构介绍
            {path: '/orgIntroduce', component: orgIntroduce, meta: { requireAuth: true }},
            // 公告公示
            {path: '/announcement', component: announcement, meta: { requireAuth: true }}
          ]
        },
        // 了解我们-公示公告-查看详情
        {
          path: '/announcement/details',
          name: 'announcementDetails',
          component: announcementDetails
        },
        // 活动管理
        {
          path: '/activityManagement',
          name: 'activityManagement',
          meta: { requireAuth: true },
          component: activityManagement,
          children: [
            // 问卷调查列表
            {path: '/activityManagement/questionnaireSurvey', component: questionnaireSurvey, meta: { requireAuth: true }},
            // 平台活动列表
            {path: '/activityManagement/platformActivity', component: platformActivity, meta: { requireAuth: true }}
          ]
        },
        // 活动管理-问卷调查-填写问卷调查表(社会评价)
        {
          path: '/activityManagement/fillInQuestionnaire',
          name: 'fillInQuestionnaire',
          component: fillInQuestionnaire
        },
        // 活动管理-问卷调查-填写问卷调查表(活动管理)
        {
          path: '/activityManagement/activityQuestionnaire',
          name: 'activityQuestionnaire',
          component: activityQuestionnaire
        },
        // 活动管理-平台活动列表-查看活动详情
        {
          path: '/platformActivity/details',
          name: 'platformActivityDetails',
          component: platformActivityDetails
        }
      ]
    }
  ]
})
