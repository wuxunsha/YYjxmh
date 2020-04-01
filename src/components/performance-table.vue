<template>
    <div class="main-content">
        <div>
            <div>
                <span></span>
                <span>市长信箱</span>
            </div>
            <div>
                <a href="#">我要写信</a>
                <a href="#">来信需知</a>
            </div>
        </div>
        <div>
            <!-- 表格数据 -->
            <div>
                <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#EBF4FF'}" :row-class-name="tableRowClassName">
                    <el-table-column prop="title" label="标题" align="center"></el-table-column>
                    <el-table-column prop="classify" label="分类" align="center"></el-table-column>
                    <el-table-column prop="department" label="处理部门" align="center"></el-table-column>
                    <el-table-column prop="time" label="处理时间" align="center"></el-table-column>
                </el-table>
            </div>
            <!-- 分页 -->
            <div>
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="querInfo.page" :page-sizes="[10, 20, 50, 100]" :page-size="querInfo.size" layout="total, sizes, prev, pager, next, jumper" :total="total" background></el-pagination>
            </div>   
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格数据
      tableData: [
        {
          title: '市长热线办19081349216559',
          classify: '求决',
          department: '沅江市',
          time: '2016-05-02'
        }, 
        {
          title: '市长热线办19081349216559',
          classify: '求决',
          department: '沅江市',
          time: '2016-05-02'
        },
        {
          title: '市长热线办19081349216559',
          classify: '求决',
          department: '沅江市',
          time: '2016-05-02'
        },
        {
          title: '市长热线办19081349216559',
          classify: '求决',
          department: '沅江市',
          time: '2016-05-02'
        },{
          title: '市长热线办19081349216559',
          classify: '求决',
          department: '沅江市',
          time: '2016-05-02'
        }
      ],
      //查询条件
      querInfo: {
        type: 3,
        page: 1,
        size: 5
      },
      //商品总条数
      total: 20
    }
  },
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex % 2 === 1) {
        return 'success-row'
      }
      return ''
    },
    handleSizeChange(size) {
        console.log(size)
    },
    handleCurrentChange(page) {
        console.log(page)
    }
  }
}
</script>

<style lang="less" scoped>
a {
    text-decoration: none;
}
/deep/.el-table thead {
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    color: rgba(51,51,51,1);
}
/deep/.el-table td {
    border-bottom: none;
}
/deep/.el-table th.is-leaf {
    border-bottom: none;
}
/deep/.el-table {
    font-size: 16px;
}
/deep/.el-table::before {
    background-color: #fff;
}
/deep/.el-table .success-row {
    background: #EBF4FF;
}
.main-content {
    width: 100%;
    >div:nth-child(1) {
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
        >div:nth-child(2) {
            float: right;
            a {
                font-size: 14px;
                font-family: PingFang SC;
                font-weight: 500;
                color: rgba(10,114,230,1);
            }
            a:nth-child(2) {
                margin-left: 10px;
            }
        }
    }
    >div:nth-child(2) {
        width: 100%;
        >div:nth-child(1) {
            width: 100%;
            margin-bottom: 24px;
        }
        >div:nth-child(2) {
            width: 100%;
            text-align: center;
        }
    }
}
</style>
