<template>
    <div class="main-content">
        <div class="min">
        <div class="know-title">
            <titles titleName="了解我们" englishName="Understand us" ></titles>
        </div>
        <div class="know-content">
            <div class="know-left" @click="orgIntroduce">
                <span>机构介绍</span>
            </div>
            <div class="know-right" @click="announcement">
                <span>公告公示</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import titles from '@/components/titleName'
export default {
  name: 'knowUs',
  components: {
    titles
  },
  data () {
    return {

    }
  },
  methods: {
    // 跳转机构介绍页面
    orgIntroduce () {
      this.$router.push(
        {
          path: '/orgIntroduce',
          query: {
            type: 1
          }
        }
      )
    },
    // 跳转公告公示页面
    announcement () {
      this.$router.push(
        {
          path: '/announcement',
          query: {
            type: 2
          }
        }
      )
    },
  }
}
</script>

<style lang="less" scoped>
.min{
  width: 1200px !important;
  margin: 0 auto;
}
.main-content {
    width: 100%;
    padding: 46px 0 78px;
    .know-title {
        padding: 0 0 34px;
        text-align: center;
    }
    .know-content {
        display: flex;
        text-align: left;
        margin-bottom: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        div {
            width: 49%;
            height: 156px;
            line-height: 156px;
            border-radius:10px;
        }
        .know-left,
        .know-right {
            text-align: center;
            font-size: 46px;
            font-family: PingFang SC;
            font-weight: bold;
            color: rgba(255,255,255,1);
            cursor: pointer;
        }
        .know-left {
            background: url("../assets/image/org-introduce.png") no-repeat center center;
            background-size: 100%;
            span:before {
                content: '';
                display: inline-block;
                width: 54px;
                height: 54px;
                background: url("../assets/image/org-introduce-icon.png") no-repeat center center;
                background-size: 100%;
                vertical-align: text-bottom;
                margin-right: 16px;
            }
        }
        .know-right {
            background: url("../assets/image/notice-publicity.png") no-repeat center center;
            background-size: 100%;
            span:before {
                content: '';
                display: inline-block;
                width: 54px;
                height: 54px;
                background: url("../assets/image/notice-publicity-icon.png") no-repeat center center;
                background-size: 100%;
                vertical-align: text-bottom;
                margin-right: 16px;
            }
        }
    }
}
</style>
