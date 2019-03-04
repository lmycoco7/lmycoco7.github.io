<template>
  <div class="balanceQues">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">活动细则</span>
    </div>
    <div class="markdown">
      <h3 id="q1">会员权益调整 尊敬的用户，随着会员服务体系优化，「蜂鸟专送」商家得到大规模普及，大大丰富了会员用户的用餐选择，从2016年9月1日开始，新购及续费的会员服务将由免配送费调整为每单最高减免4元配送费，之前购买的会员服务不受影响，感谢您的支持！敬请期待更多会员特权。 ### Q1: 特权介绍 * 减配送费：饿了么会员卡绑定账户，每日前3单在「蜂鸟专送」标识商家可减配送费，每单最高可减4元。 * 更多特权，敬请期待！ ### Q2: 会员资费 * 月卡20元（一个月按31天计算） ### Q3: 购卡说明 * 在线购买：饿了么App &gt; 我的 &gt; 饿了么会员卡。 * 请认准饿了么官方认证渠道，任何从其他第三方途径获得的会员卡，饿了么不保证其可用性。</h3>
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
