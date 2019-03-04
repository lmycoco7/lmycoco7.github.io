<template>
  <div class="exchange">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">兑换红包</span>
    </div>
    <form action class="exchange_code">
      <input
        type="text"
        placeholder="请输入兑换码"
        class="exchange_input"
        v-model="number"
        id="exchange_input"
      >
      <div class="input_container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="testCode" id="input_code" @keyup="inp()">
        <div class="img_change_img">
          <img :src="baseImg">
          <div class="change_img" @click="request_cap()">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </div>
    </form>
    <button :v-if="show"  @click="exchange()" id="datermine">兑换</button>

    <div class="alert_container" v-if="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入正确的兑换码</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>
    <div class="alert_container" v-if="alert2">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">验证码错误</p>
        <div class="confirm" @click="alert2=!alert2" id="confirm">确认</div>
      </section>
    </div>

    <div class="alert_container" v-show="alert3">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请在手机App中设置</p>
        <div class="confirm" @click="alert3=!alert3">确认</div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "exchange1",
  data() {
    return {
      show:true,
      alert1: false,
      alert2: false,
      alert3:false,
      baseImg: "",
      number: "",
      testCode: ""
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    inp(){
      var exchange_input = document.getElementById("exchange_input");
      var input_code = document.getElementById("input_code");
      var datermine = document.getElementById("datermine");
      if(exchange_input.value.length && input_code.value.length){
        if(exchange_input.value.length == "" && input_code.value.length != 4){
          this.show = false;
          datermine.style.backgroundColor = "#ccc"
        }else if(exchange_input.value.length != "" && input_code.value.length == 4){
          this.show = true;
          datermine.style.backgroundColor = "#4cd964"
        }else if(exchange_input.value.length == "" || input_code.value.length != 4){
          this.show = false;
          datermine.style.backgroundColor = "#ccc"
        }
      }
    },
    request_cap() {
      this.$http({
        url: "https://elm.cangdu.org/v1/captchas",
        method: "post",
        withCredentials: true
      }).then(response => {
        console.log(response);
        this.baseImg = response.data.code;
      });
    },
    exchange() {
      if (!this.number) {
        this.alert1 = !this.alert1;
      } else if (!this.testCode) {
        this.alert2 = !this.alert2;
      }
      this.$http({
        
      }).then(res => {

      })
    }
  },
  created() {
    this.request_cap();
    
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
.exchange_code {
  margin-top: 0.2rem;
  padding: 0 0.15rem;
}
.exchange_input {
  width: 94.5%;
  color: #666;
  font-size: 0.17rem;
  padding: 0.14rem 0.1rem;
  border-radius: 0.04rem;
}
.input_container {
  height: 0.55rem;
  display: flex;
  margin-top: 0.2rem;
}
.input_container input {
  font-size: 0.17rem;
  color: #666;
  flex: 3;
  width: 2rem;
  padding: 0.1rem;
  border-radius: 0.04rem;
}
.img_change_img {
  display: flex;
  align-items: center;
  flex: 2;
  width: 1.3rem;
  background-color: #fff;
  padding-left: 0.05rem;
  margin-left: 0.08rem;
  border-radius: 0.04rem;
}

.img_change_img img {
  width: 0.7rem;
  height: 0.4rem;
  margin-right: 0rem;
}
.change_img {
  display: flex;
  flex-wrap: wrap;
  width: 0.45rem;
  justify-content: center;
}
.change_img p {
  font-size: 0.13rem;
  margin-top: 0.05rem;
}
.change_img p:nth-of-type(2) {
  color: #3b95e9;
  margin-top: 0.08rem;
}
#datermine {
  background-color: #ccc;
  font-size: 0.17rem;
  color: #fff;
  text-align: center;
  line-height: 0.4rem;
  border-radius: 0.04rem;
  margin-top: 0.2rem;
  border: none;
  width: 90%;
  margin-left: 0.2rem;
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
input {
  outline: none;
}
</style>
