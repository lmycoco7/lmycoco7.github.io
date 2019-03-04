<template>
  <div class="balanceQues">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">商务合作</span>
    </div>
    <div class="markdown">
      <h3 id="q1">Q1: 我是新用户，为什么不能享受新用户下单立减优惠／新用户首单红包？ * 新用户是指您的下单设备、手机号、饿了么账号、支付账号都是第一次在饿了么平台使用。以上任意条件不满足，都不能享受新用户优惠。 * 如果监测到您不满足以上的信用条件，您的订单将被系统拦截或无偿取消。 * 新用户立减优惠、新用户红包、满减特价菜活动不能同时使用。在您首次下单过程中，我们会优先为您选择优惠最大（优惠金额最高）的。 ### Q2: 首单被取消，再次下单还能享受新用户立减优惠／新用户红包吗？ * 您主动取消或商家、骑手取消的订单，饿了么会返还您的新用户资格，这时您仍然可以享受新用户的优惠。 * 您被取消的首单因为「使用的支付账户曾下过单」，必须更换新的支付账户才可以享受新用户优惠。 * 但您取消的原因是账户异常等原因，则不能享受新用户优惠。 ### Q3: 我第一次在 "A" 商家下单，"A" 商家有参加「新用户」活动，我为什么享受不到新用户的立减优惠？ * 活动中的新用户指的是饿了么网站的新用户，而不是指 "A" 商家的新客户。如果您不符合饿了么网站新用户的定义则无法享受于新用户相关的活动优惠。 ### Q4: 一个红包能拆开多次使用吗？ * 不能，一个红包只能一次性使用，不能分开使用。 ### Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？ * 会的，订单无效后红包会自动返还到您的账户里。 ### Q6: 红包兑换码怎样兑换成红包，怎样查看红包？ * 在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。 ### Q7: 在线支付订单取消后，钱怎么返还？ * 使用饿了么账户余额支付，订单无效后，所有款项将退到您的饿了么账户；使用第三方支付订单无效后，支付款项将于2个工作日内返还到您的第三方支付账户，红包退还到饿了么账户。 ### Q8: 每天限制优惠3单，前面下了一个在线支付的单子，由于未付款，订单自动取消了，这单会计算我的参与活动次数吗？ * 不会。未付款的订单不会计入您使用优惠的次数。 ### Q9: 每天红包使用次数有限制吗？ * 同一个手机号每天最多能使用两个红包优惠（不含预订早餐和预订午餐），使用红包的订单出现退单情况不计入限制。</h3>
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
