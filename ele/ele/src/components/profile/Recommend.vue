<template>
  <div class="recommend">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">推荐有奖</span>
    </div>
    <div class="activity_banner">
        <img src="../../../static/img/activity.png">
    </div>
    <div class="invite_firend">
        <div class="invite_firend_style"  @click="rec()">
            <img src="../../../static/img/wexin.png">
            <p>邀请微信好友</p>
        </div>
        <div class="invite_firend_style" @click="rec()">
            <img src="../../../static/img/qq.png">
            <p>邀请QQ好友</p>
        </div>
        <div class="invite_firend_style" @click="rec()">
            <img src="../../../static/img/erweima.png">
            <p>面对面邀请</p>
        </div>
    </div>
    <div class="invite_num">
        <div class="invite_num_style">
            <p>累计收益</p>
            <p>
                <span>0</span>元
            </p>
        </div>
        <div class="invite_person_style">
            <p>成功邀请</p>
            <p>
                <span>0</span>人
            </p>
        </div>
    </div>
    <p class="income_detail">-收益明细-</p>
    <div class="incom_tips">
        <img src="../../../static/img/wallet.png">
        <p>还不赶紧去邀请好友</p>
    </div>

    <div class="alert_container" v-show="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请在饿了么App中打开</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "recommend1",
  data() {
    return {
      alert1: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    rec(){
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
.activity_banner{
    height: 2.4078rem;
}
.activity_banner img{
    width: 100%;
    height: 2.34375rem;
}
.invite_firend {
    display: -ms-flexbox;
    display: flex;
    padding: 0.234rem 0;
    background-color: #fff;
}
.invite_firend_style {
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
.invite_firend_style img{
    width:0.59rem;
    height: 0.59rem;
}
.invite_firend_style p {
    font-size: .12rem;
    color: #333;
    margin-top: 0.05rem;
}
.invite_num {
    display: -ms-flexbox;
    display: flex;
    margin-top: 0.2344rem;
    font-size: .12rem;
    color: #666;
}
.invite_num_style {
    -ms-flex: 1;
    flex: 1;
    text-align: center;
}
.invite_num_style span {
    font-size: .2rem;
    color: #ff5633;
    font-weight: 700;
}
.invite_person_style{
    -ms-flex: 1;
    flex: 1;
    text-align: center;
    border-left: 1px solid #ddd;
}
.invite_person_style span {
    font-size: .2rem;
    color: #666;
    font-weight: 700;
}
.invite_num_style span,.invite_person_style span{
    line-height: 0.3rem;
}
.income_detail,.incom_tips {
    text-align: center;
    margin-top: 0.35rem;
}
.income_detail {
    font-size: .12rem;
    color: #666;
}
.incom_tips img{
    width: 0.3046rem;
    height: 0.375rem;
}
.incom_tips p{
    font-size: .12rem;
    color: #666;
    line-height: 0.3rem;
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
