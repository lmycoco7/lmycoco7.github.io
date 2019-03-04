<template>
  <div class="levele">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">用户等级说明</span>
    </div>
    <div class="markdown">
      <p>用户等级是你在饿了么的身份表现，为了感谢您长期以来对饿了么的信赖和支持，我们会根据你的等级回馈相应福利和特权，功能还在内测中，暂定规则如下： ### 用户等级的划分： 用户等级按月度计算，每个自然月的最后一天会统计你当月的累计消费金额（限在线支付金额，不包含活动优惠及红包及代金券抵扣），决定你次月的等级，具体要求如下。 * Lv0 月累计消费100元以下； * Lv1 月累计消费大于等于100，小于200元 * Lv2 月累计消费大于等于200，小于500元 * Lv3 月累计消费大于等于500 ### 升级及降级规则： 每笔订单完成后，系统会自动计算你当月有效的消费金额（限在线支付金额，不包含活动优惠及红包及代金券抵扣），当月累计消费一旦达到下一等级要求，我们会立刻为您升级，您即时就可享受新等级的相关权益。<br> 如你本月累计消费金额未达到当前等级要求，次月你将被降到与本月消费相匹配的对应等级。 *内测期间饿了么会调整等级权益及规则，饿了么保留对等级体系的所有解释权</p>
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
.levele{
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
  line-height: 0.25rem;
    font-size: .155rem;
    color: #666;
    padding: 0 .1325rem ;
}

p{
    color: #666;
    line-height: 0.225rem;
}
</style>
