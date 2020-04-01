<template>
    <div class="main-content">
        <div>
            <div>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>绩效资讯</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div>
            <div>
                <span></span>
                <span>2018年度实事项目总体实施进度</span>
            </div>
        </div>
        <div>
            <ul>
                <li v-for="(item, index) in dataList" :key="index" @click="checkDetail">
                    <span>{{item.content}}</span>
                </li>
            </ul>
        </div>
        <!-- 分页 -->
        <div>
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.page" :page-sizes="[10, 20, 50, 100]" :page-size="querInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total" background></el-pagination>
        </div> 
    </div>
</template>

<script>
export default {
  props: {
    dataList: Array
  },
  data () {
    return {
      // 查询条件
      querInfo: {
        type: 3,
        page: 1,
        size: 5
      },
      // 商品总条数
      total: 20
    }
  },
  methods: {
    //  点击跳转到详情页
    checkDetail () {
      this.$router.push({path: '/details'})
    },
    handleSizeChange (size) {
      console.log(size)
    },
    handleCurrentChange (page) {
      console.log(page)
    }
  }
}
</script>

<style lang="less" scoped>
ul {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
.main-content {
    width: 100%;
    >div:nth-child(1) {
        padding: 10px 0;
        margin-bottom: 20px;
        border-bottom: 1px solid #EEE;
        overflow: hidden;
        div {
            float: right;
        }
    }
    >div:nth-child(2) {
        width: 100%;
        padding-bottom: 12px;
        overflow: hidden;
        >div:nth-child(1) {
            float: left;
            span:nth-child(1) {
                margin-top: 6px;
                float: left;
                display: block;
                width: 2px;
                height: 16px;
                background-color: #0A72E6;
            }
            span:nth-child(2) {
                float: left;
                margin-left: 10px;
                font-size: 18px;
                font-family: PingFang SC;
                font-weight: bold;
                color: rgba(51,51,51,1);
            }
        }
    }
    >div:nth-child(3) {
        ul {
            li {
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 500;
                color: #666;
                line-height: 44px;
                border-bottom: 1px solid #EEE;
                cursor: pointer;
                span:hover {
                    color: rgba(10,114,230,1);
                }
            }
        }
    }
    >div:nth-child(4) {
        margin-top: 34px;
        text-align: center;
    }
}
</style>
