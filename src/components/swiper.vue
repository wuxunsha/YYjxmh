<template>
  <div class="swiper">
    <mu-carousel hide-controls>
      <mu-carousel-item v-for="item in bannerData" :key="item.id">
        <div class="one" v-if="bannerData.length > 0">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="one" v-else>
          <img src="../assets/image/banner.png" alt="">
        </div>
      </mu-carousel-item>
    </mu-carousel>
  </div>
</template>

<script>
import * as homeApi from '../api/home-api'
export default {
  name: 'HelloWorld',
  data () {
    return {
      // banner图数据
      bannerData: []
    }
  },
  created () {
    // 获取banner轮播图
    this.findByPageList()
  },
  methods: {
    // 获取banner轮播图
    findByPageList () {
      homeApi.bannerInfoFindByPage().then((res) => {
        if (res.data.code === 10000) {
          this.bannerData = res.data.data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.mu-carousel{
    height: 100%;
}
.swiper {
  width: 100%;
  height: 320px;
}
.mu-carousel-item{
  div{
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
