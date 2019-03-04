<template>
  <div class="balanceQues">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">优惠说明</span>
    </div>
    <div class="markdown">
      <h3 id="q1">Q1: 怎么获得红包？ * 抢微信朋友分享的红包获得； * 玩游戏领红包（仅限Android客户端）； ### Q2: 红包如何使用？ * 红包仅限订单选择在线支付时使用； * 每个订单限使用一个红包，每天最多可使用2个红包； * 每个红包只能使用一次，不能叠加或拆分使用； * 红包如有使用金额门槛，则购物车金额需满足金额门槛才可使用； * 红包如有品类、商家、手机号或时段限制，订单需满足对应条件后才可使用； * 红包使用不设找零，如红包可抵扣金额大于订单金额，则订单需支付0.01元。 ### Q3: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？ * 会的，订单无效后红包会自动返还到您的账户里。 ### Q4: 红包兑换码怎样兑换成红包，怎样查看红包？ * 在个人中心 &gt; 我的红包 &gt; 兑换红包，输入兑换码进行兑换。 ### Q5: 预订早餐、预订午餐的红包怎么使用？在哪里查询？ * 预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。 * 预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。 ### Q6: 互斥红包怎么使用？ * 互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。 ### Q7: 红包领取规则是什么? * 同一个手机号一天限领取三个。 * 同一注册用户一天限领取三个。 * 注册用户红包直接发送至用户账户里。 * 同一个手机号一天最多使用两个红包。 * 未收到红包短信的用户注意查看手机里的拦截短信。 * 有任何问题请拨打客服电话：10105757。 ### Q8：首单红包的使用条件？ * 首单红包需同时满足以下条件才可用，且首单红包不与其他优惠（首减、满减、满赠、套餐赠、折扣菜）同享。 * 新用户（设备、手机号、饿了么账号、支付账号均未在饿了么外卖下过单）首次下单。 * 仅限在线支付使用，且收餐人手机号、领取红包时输入的手机号和账号中的手机号需为同一手机号。 * 微信小程序中“商超便利”和“果蔬生鲜”分类暂未开通。</h3>
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
