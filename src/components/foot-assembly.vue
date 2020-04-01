<template>
	<div class="foot">
		<div class="footer">
                <div class="min">
            <div class="content">
                <div class="left">
                    <div class="icon">
                    </div>
                    <p>益阳市综合考评委员会办公室</p>
                    <p>益阳市绩效管理委员会办公室</p>
                </div>
                <div class="center">
                    <div class="topBar">
                        首页 / 绩效资讯 / 绩效管理 / 民生绩效 / 亮点特色 / 绩效理论 / 资料查询 / 了解益阳
                    </div>
                    <div class="government-info">
                        <div class="info">
                            <div class="info-icon phone">
                            </div>
                            <p>0737-6206182</p>
                        </div>
                        <div class="info">
                            <div class="info-icon address">
                            </div>
                            <p>益阳市政府办公大楼三楼</p>
                        </div>
                        <div class="info">
                            <div class="info-icon qrcode">
                            </div>
                            <p>关注微信公众号</p>
                        </div>
                    </div>
                    <div class="address">
                        <p>中共益阳市委 益阳市人民政府主办 益阳市人民政府绩效办管理办公室承办</p>
                        <p>备案号; 湘ICP备05002141  网站标识码：43</p>
                    </div>
                </div>
                <div class="right">
                </div>
            </div>
        </div>
        </div>
	</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '基础开发环境'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.min{
  width: 1200px !important;
  margin: 0 auto;
}
.footer{
    width: 100%;
    height: 400px;
    background-color: #0A72E6;
    border-top: 2px solid #7CB4F2;
    .topBar{
        color: #fff;
        text-align: center;
        margin: 25px 0;
        font-size: 18px;
    }
    .content{
        width: 100%;
        height: 100%;
        display: flex;
        padding-bottom: 60px;
        .left{
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction:column;
            align-items: flex-end;
            margin-right: 30px;
            padding-top: 60px;
            .icon{
                width: 140px;
                height: 170px;
                background-color: #fff;
                margin-bottom: 25px;
                margin-right: 15px;
                background: url('../assets/image/governmentIcon.png') no-repeat;
                background-size: 100% 100%;
            }
            p{
                margin: 0;
                color: #fff;
                font-size: 16px;
            }
        }
        .center{
            flex: 1;
            .government-info{
                display: flex;
                .info{
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                     .info-icon{
                         width: 90px;
                         height: 90px;
                     }
                     .phone{
                        background: url('../assets/image/phone.png') no-repeat;
                        background-size: 100% 100%;
                     }
                     .address{
                        background: url('../assets/image/address.png') no-repeat;
                        background-size: 100% 100%;                         
                     }
                     .qrcode{
                        background: url('../assets/image/QRCode.png') no-repeat;
                        background-size: 100% 100%;                          
                     }
                     p{
                         font-size: 16px;
                         color: #fff;
                     }
                 }
            }
            .address{
                p{
                    font-size: 18px;
                    color: #fff;
                }
            }
        }
        .right{
            width: 15%;
            height: 100%; 
        }
    }
}
</style>
