/**
 * 引入fetch、baseUrl
 * @param params
 * @returns {*}
 */
import {fetch, baseUrl} from '../apiconfig/index'

// 登录接口
export function loginUserNo (params) {
  return fetch(`${baseUrl}/root/login/checkMemberLogin`, params)
}

export function tab (data) {
  return fetch(`${baseUrl}information/getlistbytype/` + data)
}

// 获取首页tab页签
export function getlistbytype () {
  return fetch(`${baseUrl}information/getlistbytype`)
}

// 获取banner轮播图
export function bannerInfoFindByPage () {
  return fetch(`${baseUrl}bannerInfo/findByPage`)
}

// 获取资讯轮播图
export function queryInformationByImgUrl () {
  return fetch(`${baseUrl}information/queryInformationByImgUrl`)
}

// 获取资讯table页签
export function findListByTitleType (id) {
  return fetch(`${baseUrl}information/findListByTitleType/` + id)
}

// 获取资讯列表信息
export function informationFindByPage (data) {
  return fetch(`${baseUrl}information/findByPage`, data)
}

// 根据id查看讯息详情
export function informationFindOne (id) {
  return fetch(`${baseUrl}information/findOne/` + id)
}

// 获取绩效管理-日常考核页签
export function portalToShowBatchIndexTab () {
  return fetch(`${baseUrl}portalToShow/getBatchIndexTab`)
}

// 绩效管理-日常考核页签-考核机构
export function getOranizationInfoListByTabKey (id) {
  return fetch(`${baseUrl}portalToShow/getOranizationInfoListByTabKey/` + id)
}

// 绩效管理-考核信息列表
export function getOrgidBatchInfoList (data) {
  return fetch(`${baseUrl}portalToShow/queryThisYearBatchInfoList`, data)
}

// 绩效管理-指标信息列表
export function getOrgidIndexInfoList (data) {
  return fetch(`${baseUrl}portalToShow/queryThisYearIndexInfoList`, data)
}

// 绩效管理-创新创优-创新创优列表
export function getInnovateInfoList (data) {
  return fetch(`${baseUrl}portalToShow/queryInnovateInfoList`, data)
}

// 绩效管理-创新创优-创新创优详情
export function getInnovateInfo (id) {
  return fetch(`${baseUrl}portalToShow/queryInnovateInfo/` + id)
}

// 绩效管理-绩效改进页签
export function getInformApproOrgType () {
  return fetch(`${baseUrl}wechatOptData/getInformApproOrgType`)
}

// 绩效管理-绩效改进-列表数据
export function getOrgListByOrgTypeByTag (data) {
  return fetch(`${baseUrl}wechatOptData/getOrgListByOrgTypeByTag`, data)
}

// 绩效管理-社会评价页签
export function getOrgTypeTree (id) {
  return fetch(`${baseUrl}socie/getOrgTypeTree/` + id)
}

// 绩效管理-社会评价-年份列表
export function getSocieYearList () {
  return fetch(`${baseUrl}socie/getSocieYearList`)
}

// 绩效管理-社会评价-评分列表
export function getSociaEvalList (data) {
  return fetch(`${baseUrl}socie/sociaEvalList`, data)
}

// 绩效管理-社会评价-年度评估列表
export function getStatisList (data) {
  return fetch(`${baseUrl}socie/statisList`, data)
}

// 民生绩效-实事项目-获取年份(首页)
export function getActualProjectYear () {
  return fetch(`${baseUrl}pracProject/getActualProjectYear`)
}

// 民生绩效-实事项目-根据年份获取列表数据(首页)
export function getPracticalProjectsByYear (year) {
  return fetch(`${baseUrl}pracProject/getPracticalProjectsByYear/` + year)
}

// 民生绩效-实事项目列表数据
export function getThatYearPracticalProjectByPage (data) {
  return fetch(`${baseUrl}pracProject/getThatYearPracticalProjectByPage`, data)
}

// 民生绩效-实事项目-实事项目详情
export function getPracticalProjectFindOne (id) {
  return fetch(`${baseUrl}pracProject/findOne/` + id)
}

// 资源中心-资源类型
export function getTypeList () {
  return fetch(`${baseUrl}portalHomePage/getTypeList`)
}

// 资源中心-资源年份
export function getYearList () {
  return fetch(`${baseUrl}portalHomePage/getYearList`)
}

// 资源中心-资源查询
export function getMultiConditionPagingQueryAll (data) {
  return fetch(`${baseUrl}portalHomePage/getMultiConditionPagingQueryAll`, data)
}

// 资源中心-表格下载列表
export function getShowDownloadDocumentByPage (data) {
  return fetch(`${baseUrl}portalHomePage/getShowDownloadDocumentByPage`, data)
}

// 资源中心-表格下载-年份
export function getDocumentYearAll () {
  return fetch(`${baseUrl}portalHomePage/getDocumentYearAll`)
}

// 了解我们-公告公示列表
export function getFindByPage (data) {
  return fetch(`${baseUrl}portalNotice/findByPage`, data)
}

// 了解我们-公告公示-查看详情
export function getFindOne (id) {
  return fetch(`${baseUrl}portalNotice/findOne/` + id)
}

// 活动管理-问卷调查列表
export function findSurveyByPage (data) {
  return fetch(`${baseUrl}portalSurvey/findSurveyByPage`, data)
}

// 活动管理-问卷调查-查询问卷详情
export function findByList (id) {
  return fetch(`${baseUrl}portalSurvey/findByList/` + id)
}

// 活动管理-问卷调查-提交问卷调查表(活动管理)
export function submitAnswer (data) {
  return fetch(`${baseUrl}portalSurvey/answer`, data)
}

// 活动管理-问卷调查-提交问卷调查表(社会评价)
export function submitPcIndexSocieAnsQuesttion (data) {
  return fetch(`${baseUrl}portalSurvey/pcIndexSocieAnsQuesttion`, data)
}

// 活动管理-平台活动列表
export function activityFindByPage (data) {
  return fetch(`${baseUrl}activity/findByPage`, data)
}

// 活动管理-平台活动-查看活动详情
export function activityFindOne (id) {
  return fetch(`${baseUrl}activity/findOne/` + id)
}
