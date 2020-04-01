<template>
	<div class="header">
    <mu-tabs :value.sync="active" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center @change="tabChange">
      <mu-tab v-for="item in tableList" :key="item.id">{{item.name}}</mu-tab>
    </mu-tabs>
	</div>
</template>

<script>
import * as homeApi from '../api/home-api'
export default {
  data () {
    return {
      // tab默认选中第一个
      active: 0,
      // tab页签
      tableList: []
    }
  },
  props: {
    activee: {
      type: Number
    }
  },
  created () {
    this.createdActive()
    // 获取首页tab页签
    this.getTypeList()
  },
  methods: {
    // 获取首页tab页签
    getTypeList () {
      homeApi.getlistbytype().then((res) => {
        if (res.data.code === 10000) {
          this.tableList = res.data.data
        }
      })
    },
    tabChange (value) {
      this.$emit('childByvelue', value)
    },
    createdActive () {
      this.active = this.activee
    }
  },
  components: {
  },
  computed: {
  }
}
</script>


<style lang="less" scoped>
/deep/.mu-tabs-inverse {
    background-color: #0A72E6;
    color: #fff!important;
}
/deep/.mu-secondary-text-color {
    color: #fff;
}
/deep/.mu-tab-active  {
    background-color: #3D99FF;
}
/deep/.mu-tab-link-highlight {
    background-color: Transparent;
}
/deep/.mu-tab{
    font-size: 16px;
    font-weight: 400;
}
/deep/.mu-tabs{
    position: fixed;
    top: 0;
    z-index: 1000;
}
.header{
    overflow: hidden;
}
</style>
