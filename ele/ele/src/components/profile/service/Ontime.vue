<template>
  <div class="balanceQues">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">准时达问题</span>
    </div>
    <div class="markdown">
      <h3 id="q1">Q1: 准时达规则： 饿了么用户在饿了么App带有「准时达」标签的商家下单，若商品送达时间超过承诺送达时间10分钟，我们将为您赔付一个无门槛红包。 ### Q2: 关于准时达的特殊情况： a. 预订单暂不参加赔付； b. 夜间部分时段下单暂不参加赔付； c. 恶劣天气（雨、雪等）暂不参加赔付； d. 每位用户每天最多赔付3个红包； ### Q3: 常见问题Q&amp;A Q1：我怎么收到赔付红包？ A1：当确认送达商品时已超过承诺送达时间10分钟，我们将向您的饿了么账户发放一个无门槛红包，同时会有短信通知到您的手机号码。 ### 饿了么保留法律允许范围内对活动的解释权</h3>
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
    line-height: 0.25rem;
    color: black;
}
</style>
