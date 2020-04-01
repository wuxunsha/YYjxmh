<template>
	<div class="content">
        <div class="title">
            <div class="left">
                <div class="titleImg">
                </div>
            </div>
            <div class="center">
                <h1>{{titleName}}</h1>
                <span>{{englishName}}</span>
            </div>
            <div class="right">
                <div class="titleImg">
                </div>
            </div>
        </div>
	</div>
</template>

<script>
export default {
  props: ['titleName', 'englishName'],
  data () {
    return {
      msg: '基础开发环境'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.title{
    width: 1000px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    .left{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .titleImg{
            width: 252px;
            height: 30px;
            background: url('../assets/image/title-right.png') no-repeat;
            background-size: 100% 100%;
        }
    }
    .center{
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin: 0 10px;
        h1{
            margin: 0;
            font-weight: 600;
            color: #333;
        }
        span{
            color: #CCCCCC;
        }
    }
    .right{
        flex:1;
        display: flex;
        align-items: center;
        .titleImg{
            width: 252px;
            height: 30px;
            background: url('../assets/image/title-left.png') no-repeat;
            background-size: 100% 100%;
        }        
    }
}
</style>
