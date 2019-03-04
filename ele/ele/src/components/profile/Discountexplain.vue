<template>
  <div class="redexplain">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">红包说明</span>
    </div>
    <div class="markdown">
      <h3 id="q1">Q1: 怎么获得红包？</h3>
      <p>通过邀请好友获得</p>
      <p>在下单返红包的商家下单获得</p>
      <p>抢微信朋友分享的红包获得</p>
      <h3 id="q2">Q2: 红包可以做什么？</h3>
      <p>可以抵扣在线支付时的实际支付金额。</p>
      <h3 id="q3">Q3: 红包的门槛金额按照什么金额计算？</h3>
      <p>红包的的门槛金额按照（选购菜品折后价＋餐盒费）的金额作为计算门槛，即购物车显示的金额（7.3以上版本）。假设红包满30可用，只要选购的菜品现价（折后价）＋餐盒费超过30，就可以使用红包。</p>
      <h3 id="q4">Q4: 一个红包能拆开多次使用吗？</h3>
      <p>不能，一个红包只能一次性使用，不能分开使用。</p>
      <h3 id="q4">Q5: 下单的时候使用了红包，但是后来订单取消了，红包还会返还吗？</h3>
      <p>会的，订单无效后红包会自动返还到您的账户里。</p>
      <h3 id="q4">Q6: 红包兑换码怎样兑换成红包，怎样查看红包？</h3>
      <p>在个人中心 > 我的红包 > 兑换红包，输入兑换码进行兑换。</p>
      <h3 id="q4">Q7: 邀请好友了，为什么没获得红包？</h3>
      <p>先检查下您是否在同一设备上进行的邀请？或者被邀请人是否通过您发给对方的链接进行注册？而非自己复制链接注册的。同一设备上邀请或没有按照点击发送的链接邀请都是无效邀请。如果您是正常邀请没获得红包，可以致电客服进行查实。</p>
      <h3 id="q4">Q8: 预订早餐、预订午餐的红包怎么使用？在哪里查询？</h3>
      <p>预订早餐、预订午餐的红包暂时不支持直接点外卖使用，并且当前点外卖的红包也暂时不支持在预订早餐、预订午餐时使用。</p>
      <p>预订早餐、预订午餐的红包从APP首页点击“预订早餐”按钮进入后在右上角的个人中心中查找预订早餐、预订午餐的红包。</p>
      <h3 id="q4">Q9: 互斥红包怎么使用？</h3>
      <p>互斥红包不与其他优惠活动（包含但不限于：新用户专享、满X元减X元、满X元赠XX）同时使用。</p>
      <h3 id="q4">Q10: 返红包活动， 红包领取规则是什么?</h3>
      <p>同一个手机号一天限领取三个。</p>
      <p>同一注册用户一天限领取三个。</p>
      <p>注册用户红包直接发送至用户账户里。</p>
      <p>非注册用户红包以兑换码短信的形式发送至用户手机，注册后凭兑换码兑换即可。</p>
      <p>红包的使用周期为1周，自红包发放的第2天开始计算。</p>
      <p>同一个手机号一天最多使用两个红包。</p>
      <p>未收到红包短信的用户注意查看手机里的拦截短信。</p>
      <p>有任何问题请拨打客服电话：10105757。</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "redexplain1",
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
.redexplain{
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
    line-height: 0.45rem;
    color: black;
}
p{
    color: #666;
    line-height: 0.225rem;
}
</style>
