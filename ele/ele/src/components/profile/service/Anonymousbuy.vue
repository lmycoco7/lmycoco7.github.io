<template>
  <div class="balanceQues">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">匿名购买</span>
    </div>
    <div class="markdown">
      <h3 id="q1">Q1: 什么是商家代金券？ 商家代金券是指由商家自己发放代金券，只限在指定的商家使用，可根据条件抵扣相应金额。 ### Q2: 怎么获得商家代金券？ * 进入有「进店领券」或「下单返券」标示的商家即有机会获得代金券。 * 「下单返券」需要在指定商家完成满足返券金额要求的订单后才会返还，代金券可在下次下单时使用。 ### Q3: 商家代金券使用条件 * 商家代金券仅限在指定商家使用 * 商家代金券仅限在线支付使用 * 每个订单只能使用一张商家代金券，不可与其他代金券叠加使用</h3>
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
