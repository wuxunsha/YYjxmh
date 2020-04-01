<template>
    <div>
        <div class="content">
            <div class="performance-content">
                <div class="performance-right">
                    <div class="table-content">
                        <h5 class="table-title">益阳市综合考评委员会（益阳市绩效管理委员会）</h5>
                        <table border width="100%" border-collapse="collapse" cellpadding="14px">
                            <tr>
                                <td style="text-align: center;width: 18%;">主任</td>
                                <td>杨爱云（市委常委、组织部长）</td>
                            </tr>
                            <tr>
                                <td style="text-align: center;width: 18%;">副主任</td>
                                <td>汤瑞祥（秘书长）</td>
                            </tr>
                            <tr>
                                <td style="text-align: center;width: 18%;">委 员</td>
                                <td>
                                    <ul>
                                        <li>孙达良（市委常委、市委秘书长）</li>
                                        <li>胡立安（市委常委、市委宣传部部长）</li>
                                        <li>彭建忠（常务副市长）</li>
                                        <li>黄东红（副市长）</li>
                                        <li>谢寿保（副市长）</li>
                                        <li>瞿晏平（副市长）</li>
                                    </ul>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="table-content">
                        <h5 class="table-title">益阳市综合考评委员会办公室（益阳市绩效管理委员会办公室）</h5>
                        <table border width="100%" border-collapse="collapse" cellpadding="14px">
                            <tr>
                                <td style="text-align: center;width: 18%;">办公室 主 任</td>
                                <td>熊国平</td>
                            </tr>
                            <tr>
                                <td style="text-align: center;width: 18%;">办公室 副主任</td>
                                <td>赵远帆</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
h5,
p,
ul {
    margin: 0;
    padding: 0;
}
li {
    list-style: none;
}
.content {
    width: 100%;
    padding: 0 0 50px;
    background: #fff;
    .performance-content {
        .performance-right {
            .table-content {
                margin-bottom: 30px;
                .table-title {
                    width: 100%;
                    height: 40px;
                    background-color: #CDE8FB;
                    line-height: 40px;
                    text-align: center;
                    margin-bottom: 10px;
                    font-size: 18px;
                    font-family: PingFang SC;
                    font-weight: bold;
                    color: rgba(51,51,51,1);
                }
                table,
                td {
                    border: 1px solid #0A72E6;
                }
                table {
                    border-collapse: collapse;
                    font-size: 14px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: rgba(51,51,51,1);
                }
                td {
                    li {
                        line-height: 30px;
                    }
                }
            }
        }
    }
}
</style>
