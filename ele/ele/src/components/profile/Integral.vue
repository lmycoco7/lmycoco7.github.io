<template>
  <div class="balance">
    <div class="my_header">
      <div @click="goBack()" >
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">我的积分</span>
    </div>
    <div class="content_container">
        <div class="content">
            <div class="content_header">
                <span class="content_title_style">当前余额</span>
                <div class="content_description">
                    <img src="../../../static/img/ques.png" height="13" width="13">
                    <router-link to="/points/detail" class="cont_title_stytle">积分说明</router-link>
                </div>
            </div>
            <p class="content_num">
                <span>0</span>
                <span>分</span>
            </p>
            <div class="promit_button" @click="int()">积分兑换商品</div>
        </div>
    </div>
    <p class="deal_detail">最近30天积分纪录</p>
    <div class="no_log">
        <img src="../../../static/img/ques2.png">
        <p>最近30天五积分纪录</p>
        <p>快去下单赚取大量积分吧</p>
    </div>

    <div class="alert_container" v-show="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">快去下单赚取大量积分吧</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>

  </div>
</template>
<script>
export default {
  name: "Balance1",
  data() {
    return {
      alert1: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    int(){
      this.alert1 = !this.alert1;
    }
  }
};
</script>
<style scoped>
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
.content_container{
    padding: 0.07rem;
    background-color: #3190e8;
}
.content_container .content {
    padding: 0.1rem;
    background-color: #fff;
    border-radius: 0.03rem;
}
.content .content_header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .13rem;
}
.content_num{
    margin-top: 0.05rem;
}
.content_title_style{
    color: #666;
}
.cont_title_stytle{
    color: #3190e8;
}
.content_num span:first-of-type {
    font-size: 0.385rem;
    color: #333;
}
.promit_button {
    width: 100%;
    height: 0.47rem;
    font-size: 0.2rem;
    color: #fff;
    border-radius: 0.05rem;
    line-height: 0.47rem;
    margin-top: 0.235rem;
    text-align: center;
    background-color: #fe6d47;
}
.deal_detail{
    color: #999;
    line-height: 0.47rem;
    padding-left: 0.1rem;
    font-size: 0.15rem;
}
.no_log {
    text-align: center;
    margin-top: 0.20rem;
}
.no_log img {
    width: 1.875rem;
    height: 1.172rem;
}
.no_log p {
    margin-top: 0.2rem;
    font-size: 0.17rem;
    color: #666;
}
.no_log p:nth-of-type(2) {
    font-size: .1rem;
    color: #999;
}
.alert_container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  height: 8.12rem;
  width: 3.75rem;
}
.tip_text_container {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -1.41rem;
  margin-left: -1.41rem;
  padding-top: 0.141rem;
  width: 2.81rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 0.01rem;
  border-radius: 0.0586rem;
  animation: tipMove 0.4s;
}

.tip_text {
  font-size: 0.164rem;
  color: #333;
  line-height: 0.211rem;
  text-align: center;
  margin-top: 0.126rem;
  padding: 0 0.094rem;
  font-family: "Microsoft Yahei";
}
.confirm {
  font-size: 0.188rem;
  color: #fff;
  font-weight: bold;
  margin-top: 0.188rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 0.422rem;
  border: 0.01rem;
  border-bottom-left-radius: 0.0586rem;
  border-bottom-right-radius: 0.0586rem;
}
@keyframes tipMove {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

</style>
