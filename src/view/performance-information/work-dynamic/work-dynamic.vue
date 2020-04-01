<template>
  <div>
    <div class="content">
      <el-table :data="dataList" style="width: 100%" :show-header="false" @row-click="examineDetails">
        <el-table-column prop="title" label="内容"></el-table-column>
        <el-table-column label="日期" width="100">
          <template slot-scope="scope">
              {{scope.row.createTime | dateYMD}}
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <div>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.page" :page-sizes="[10, 20, 50, 100]" :page-size="querInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total" background></el-pagination>
      </div> 
    </div>
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
      activee: 0,
      // 页签id
      sortType: 0,
      dataList: [],
      // 查询判断条件 0:外部跳转进来 1:点击顶部导航栏切换
      querInfoType: 0,
      // 查询条件
      querInfo: {
        page: 1,
        size: 10
      },
      // 商品总条数
      total: 0
    }
  },
  created () {
    this.findListByTitleTypeList()
  },
  methods: {
    // 获取资讯table页签
    findListByTitleTypeList () {
      homeApi.findListByTitleType(8).then((res) => {
        if (res.data.code === 10000) {
          this.sortType = res.data.data[1].id
          this.getListData()
        }
      })
    },
    // 根据页签获取列表数据
    getListData () {
      const data = {
        infoType: 8,
        sortType: this.sortType,
        page: this.querInfo.page,
        size: this.querInfo.size
      }
      homeApi.informationFindByPage(data).then((res) => {
        if (res.data.code === 10000) {
          this.dataList = res.data.data.dataList
          this.total = res.data.data.total
        }
      })
    },
    // 点击顶部导航栏切换
    childByvelue (val) {
      this.querInfo.page = 1
      if (val === 0) {
        this.$router.push({path: '/'})
      } else if (val === 1) {
        this.querInfoType = 1
        this.tableType = 1
        this.tabNav = []
        this.findListByTitleTypeList()
        this.activeIndex = 1
        this.titleChinese = '绩效资讯'
        this.iconName = 'iconfont iconzixunlanmu'
        this.titleEnglish = 'Performance news'
        this.breadcrumbList = [
          {
            content: '绩效资讯'
          }
        ]
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
        this.querInfoType = 1
        this.tableType = 2
        this.tabNav = []
        this.getLightspotFeatureList()
        this.activeIndex = 1
        this.titleChinese = '亮点特色'
        this.iconName = 'iconfont iconchuangxin'
        this.titleEnglish = 'Highlight features'
        this.breadcrumbList = [
          {
            content: '亮点特色'
          }
        ]
      } else if (val === 5) {
        this.querInfoType = 1
        this.tableType = 3
        this.tabNav = []
        this.getPerformanceType()
        this.activeIndex = 1
        this.titleChinese = '绩效理论'
        this.iconName = 'iconfont iconlilunxuexi'
        this.titleEnglish = 'Performance theory'
        this.breadcrumbList = [
          {
            content: '绩效理论'
          }
        ]
      } else if (val === 6) {
        this.$router.push(
          {
            path: '/dataInquire',
            query: { 
              type: 1
            }
          }
        )
      } else if (val === 7) {
        this.$router.push(
          {
            path: '/orgIntroduce'
          }
        )
      }
    },
    //  点击跳转到详情页
    examineDetails (row) {
      this.$router.push(
        {
          path: '/performanceInformation/details',
          query: {
            id: row.id,
            activeIndex: 1
          }
        }
      )
    },
    handleSizeChange (size) {
      this.querInfo.size = size
      this.getListData()
    },
    handleCurrentChange (page) {
      this.querInfo.page = page
      this.getListData()
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  width: 100%;
  padding: 0 0 50px;
  background: #fff;
  /deep/.el-table {
    td {
      border-bottom: 1px dashed #EBEEF5;
    }
  }
  >div:nth-child(2) {
    margin-top: 60px;
    text-align: center;
  }
}
</style>
