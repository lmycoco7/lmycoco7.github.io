<template>
  <div class="balanceQues">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">其它问题</span>
    </div>
    <div class="markdown">
      <h3 id="q1">Q1: 什么是订单数 订单数是指商家最近30天的订单总数，这个数据是动态的，每天都会进行更新。 ### Q2: 商品多久内可以评价？评价后是否能修改？ * 下单确认收货后，7天内可以对商品进行评价。超过7天，评价功能自动失效。 * 美食一旦点评就不能做修改，评价不可删除撤销，请知悉。 ### Q3: 为什么提示下单次数过多，无法下单？ 在24小时内，同一手机号在同一设备上最多可以成功提交7次订单。</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "BalanceQues1",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.balanceQues{
  position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* z-index: 300; */
  background-color: #fff;
}
.my_header {
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
  text-align: center;
  position: relative;
}
.el-icon-arrow-left {
  margin-left: 0.05rem;
  font-size: 0.25rem;
  color: #fff;
  float: left;
  line-height: 0.5rem;
}
.my_header span {
  font-size: 0.2rem;
  line-height: 0.5rem;
  color: #fff;
  font-weight: 700;
  text-align: center;
  position: relative;
  left: -0.12rem;
}
.markdown {
    font-size: .145rem;
    color: #666;
    padding: 0 .1rem .1rem;
}
h3{
    line-height: 0.3rem;
    color: black;
}

</style>
