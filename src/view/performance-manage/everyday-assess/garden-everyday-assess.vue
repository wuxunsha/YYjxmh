<template>
  <div>
    <div class="content">
      <div class="everyday-assess">
        <div class="everyday-assess-content">
          <h4>{{presentYear}}年益阳市经济园区下辖机构绩效指标</h4>
          <ul>
            <li @click="targetPath(item.orgName, item.id)" v-for="item in orgList" :key="item.id">{{item.orgName}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as homeApi from '../../../api/home-api'
export default {
  data () {
    return {
      // 当前年份
      presentYear: '',
      // 页签id
      indexType: 0,
      // 地区数据
      orgList: []
    }
  },
  created () {
    this.getIndex()
    // 获取当前年份
    this.getYears()
  },
  methods: {
    // 获取当前年份
    getYears () {
      let date = new Date
      this.presentYear = date.getFullYear()
    },
    // 获取传参数据
    getIndex () {
      this.getEverydayAssessIndexTab()
    },
    // 根据路径获取日常考核页签
    getEverydayAssessIndexTab () {
      homeApi.portalToShowBatchIndexTab().then((res) => {
        if (res.status === 200) {
          this.indexType = res.data[2].id
          this.getOranization(res.data[2].id)
        }
      })
    },
    // 根据页签查询机构
    getOranization (orgId) {
      homeApi.getOranizationInfoListByTabKey(orgId).then((res) => {
        if (res.status === 200) {
          this.orgList = res.data
        }
      })
    },
    // 跳转到绩效目标页面
    targetPath (name, id) {
      let navIndex = Number(this.$route.query.navIndex)
      let type = Number(this.$route.query.type)
      this.$router.push(
        {
          path: '/indexDetails',
          query: {
            type: type,
            navIndex: navIndex,
            name: name,
            id: id,
            indexType: this.indexType
          }
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
ul,
h4 {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
.content {
  width: 100%;
  padding: 12px 0 50px;
  background: #fff;
  .everyday-assess {
    .everyday-assess-content {
      width: 100%;
      h4 {
        text-align: center;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: bold;
        color: rgba(51,51,51,1);
      }
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        li {
          width: 29%;
          height: 100px;
          line-height: 100px;
          margin: 40px 20px 0;
          background: #0A72E6;
          text-align: center;
          font-size: 18px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #fff;
          border-radius: 8px;
          box-shadow: 2px 3px 10px #8888D3;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
