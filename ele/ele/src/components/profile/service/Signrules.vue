<template>
  <div class="signrules">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">签到规则</span>
    </div>
    <div class="markdown">
      <h3>
          如何签到领红包 用户需要支付 1 元参与活动（后续签到不收费）
          <br>
           活动期间每日签到，9 天后即可领取 10 元无门槛红包
           <br>
            如期间忘记签到，可领红包金额会减少，详细如下：
            <br>
            <strong>完成 9 天签到：</strong>
            10元（2个5元红包） - 
            <strong>漏签 1 天：</strong>
            8元（2个4元红包） - 
            <strong>漏签 2 天：</strong>
            6元（2个3元红包） - 
            <strong>漏签 3 天：</strong>
            4元（2个2元红包） - 
            <strong>漏签 4 天及以上：</strong>
            1个2元红包 
            <br>
             ### 漏签后如何补签 如忘记签到，可通过下单补签，漏签当日至红包领取日前一天每1笔有效订单可补签 1 天（仅限在线支付订单），例：如您在活动第 3 天忘记签到，只要你在第 3 天至第 9 天内完成1笔有效的订单，即可完成补签。 ### 每日签到拿福利： - 签到期间，每日 10:30 可抢 5 元红包，每日限领取 1个。红包数量有限，抢完即止，要记得来早哦~
      </h3>
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
.signrules{
  width: 100%;
  height: 100%;
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
  line-height: 0.25rem;
    font-size: .155rem;
    color: #666;
    padding: 0 .1325rem ;
}
.h3{
    line-height: 0.45rem;
    color: black;
}
p{
    color: #666;
    line-height: 0.225rem;
}
strong, b {
    font-weight: bold;
}
</style>
