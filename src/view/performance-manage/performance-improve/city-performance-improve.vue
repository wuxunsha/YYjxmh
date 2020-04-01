<template>
  <div>
    <div class="content">
      <div class="everyday-assess">
        <div class="everyday-assess-content">
          <h4>{{title}}</h4>
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
      // 标题
      title: '',
      // 页签id
      orgType: 0,
      // 地区数据
      orgList: []
    }
  },
  created () {
    this.getInformApproOrgTabs()
  },
  methods: {
    // 根据路径获取绩效改进页签
    getInformApproOrgTabs () {
      homeApi.getInformApproOrgType().then((res) => {
        if (res.data.code === 10000) {
          this.orgType = res.data.data[1].orgType
          this.getOrgListByOrgType()
        }
      })
    },
    // 根据页签查询机构
    getOrgListByOrgType () {
      const data = {
        orgId: 1,
        orgType: this.orgType
      }
      homeApi.getOrgListByOrgTypeByTag(data).then((res) => {
        if (res.data.code === 10000) {
          if (res.data.data.length === 0) {
            this.title = '暂无数据'
          } else {
            this.orgList = res.data.data.data
            this.title = res.data.data.title
          }
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
