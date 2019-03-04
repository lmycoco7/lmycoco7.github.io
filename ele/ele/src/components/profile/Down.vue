<template>
  <div class="discount">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">下载</span>
    </div>
    <div class="download_container">
        <img src="../../../static/img/logo.jpg" alt="">
        <p>下载饿了么App</p>
        <div class="datermine" @click="down()">下载</div>
    </div>

    <div class="alert_container" v-if="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">Ios用户请前往AppStrore</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "down",
  data() {
    return {
      alert1: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    down(){
      this.alert1 = !this.alert1;
    }
  }
};
</script>
<style scoped>
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
.discount{
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
.download_container{
  text-align: center;
}
.download_container img{
  border-radius: 0.235rem;
  margin-top: 0.235rem;
}
.download_container p {
    font-size: .18rem;
    color: #666;
    margin-bottom: 0.235rem;
    line-height: 0.35rem;
}
.datermine {
    background-color: #4cd964;
    font-size: 0.164rem;
    color: #fff;
    text-align: center;
    margin: 0 .164rem;
    line-height: 0.422rem;
    border-radius: .05rem;
    margin-top: 0.1172rem;
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
</style>
