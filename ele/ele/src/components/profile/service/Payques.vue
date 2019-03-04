<template>
  <div class="balanceQues">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">支付问题</span>
    </div>
    <div class="markdown">
      <h3 id="q1">Q1: 使用余额支付不了？ 先确认下您的饿了么账户是否有绑定手机号，使用余额支付必须先绑定手机号。 ### Q2: 在线支付订单取消后，钱怎么返还？ 使用饿了么账户余额支付（包括：余额、余额+红包），订单无效后，所有款项（包括红包）将退到您的饿了么账户；使用第三方支付（包括：第三方支付、第三方支付+红包），订单无效后，支付款项将于2个工作日内返还到您的第三方支付账户，红包退还到饿了么账户。 ### Q3: 在线支付的过程中，订单显示未支付成功，款项却被扣了，怎么办？ 该问题属于第三方（银行/支付宝/微信等）数据传输延迟问题。您可以再等待一下， 如果超过半个小时，订单还是未支付状态，第三方会把款项返还到您的付款账户。具体到账时间依银行而定，一般会在2个工作日内。 ### Q4: 每天限制优惠3单，前面下了一个在线支付的单子，由于未付款，订单自动取消了，这单会计算我的参与活动次数吗？ 不会，您可以在「订单列表页」或者「订单详情页」查看，当订单状态变为「订单已取消」时，系统会自动将您之前享受的优惠返还到您的账户中，下一次下单依然可以使用。自己取消订单、超时未付款自动取消订单、商家取消订单，这些情况都会返还优惠次数。 ### Q5: 饿了么账户里的款项怎么提现？ 在个人中心 &gt; 我的余额 &gt; 提现处进行提现操作。操作日起2个工作日内，款项会返还至您最近消费过的账户中。 ### Q6: 支付宝免密支付功能如何使用？ 首次进入支付收银台并使用支付宝支付时，系统会默认进入免密支付签约页面，您可以根据自身支付喜好选择是否签约免密支付功能。如您不签约该功能，之后会默认使用正常支付宝支付流程。此外，您还可以通过“个人中心”－“小额免密支付”中的免密支付开关，随时进行“签约”、“解约”支付宝免密支付操作。</h3>
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
