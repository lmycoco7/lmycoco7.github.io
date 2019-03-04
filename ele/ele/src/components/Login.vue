<template>
  <div class="loginDiv">
    <header>
      <section data-v-4c7aa4f2 class="head_goback" @click="goBack()">
        <svg
          data-v-4c7aa4f2
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <polyline
            data-v-4c7aa4f2
            points="12,18 4,9 12,0"
            style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2;"
          ></polyline>
        </svg>
      </section>
      <section class="middle">
        <span class="title_text">密码登录</span>
      </section>
    </header>

    <form class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="账号" v-model="userName">
      </section>
      <section class="input_container">
        <input :type="value2 ?'password' :'text'" v-model="passWord" placeholder="密码">
        <div class="switch_container">
          <el-switch v-model="value2" active-color="#13ce66" inactive-color="#f1f1f1"></el-switch>
          <span @click="value()">abc...</span>
        </div>
      </section>
      <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="captcha_code">
        <div class="img_change_img">
          <img :src="baseImg">
          <div class="change_img" @click="request_cap()">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <p class="login_tips">温馨提示：未注册过的账号，登录时将自动注册</p>
    <p class="login_tips">注册过的用户可凭账号密码登录</p>
    <div class="login_container" @click="login()">登录</div>
    <router-link to="/forget">
      <a class="to_forget">重置密码 ?</a>
    </router-link>
    <div class="alert_container" v-show="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入手机/邮箱/用户名</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>
    <div class="alert_container" v-show="alert2">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入密码</p>
        <div class="confirm" @click="alert2=!alert2">确认</div>
      </section>
    </div>
    <div class="alert_container" v-show="alert3">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">密码错误</p>
        <div class="confirm" @click="alert3=!alert3">确认</div>
      </section>
    </div>
    <div class="alert_container" v-show="alert4">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入验证码</p>
        <div class="confirm" @click="alert4=!alert4">确认</div>
      </section>
    </div>
    <div class="alert_container" v-show="alert5">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">验证码错误</p>
        <div class="confirm" @click="alert5=!alert5">确认</div>
      </section>
    </div>

    <div class="alert_container" v-show="alert6">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">验证码不正确</p>
        <div class="confirm" @click="alert6=!alert6">确认</div>
      </section>
    </div>

    <div class="alert_container" v-show="alert7">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">验证码失效</p>
        <div class="confirm" @click="alert7=!alert7">确认</div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      value2: true,
      baseImg: "",
      userName: "",
      passWord: "",
      captcha_code: "",
      alert1: false,
      alert2: false,
      alert3: false,
      alert4: false,
      alert5: false,
      alert6: false,
      alert7: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    value() {
      this.value2 = !this.value2;
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
    login() {
      if (!this.userName) {
        this.alert1 = !this.alert1;
      } else if (!this.passWord) {
        this.alert2 = !this.alert2;
      } else if (!this.captcha_code) {
        this.alert4 = !this.alert4;
      }

      this.$http({
        url: "https://elm.cangdu.org/v2/login",
        method: "post",
        withCredentials: true,
        data: {
          username: this.userName,
          password: this.passWord,
          captcha_code: this.captcha_code
        }
      }).then(response => {
        console.log(response, response.data.username);
        if (response.data.message == "验证码不正确") {
          this.alert6 = !this.alert6;
          this.request_cap();
        } else if (response.data.message == "验证码失效") {
          this.alert7 = !this.alert7;
        } else if (response.data.message == "密码错误") {
          this.alert3 = !this.alert3;
        } else if (response.data.username) {
          localStorage.setItem("isLogin", "true");
          localStorage.setItem("userId", response.data.username);
          localStorage.setItem("id", response.data.user_id);
          if (this.$store.state.loginPage) {
            this.$router.go(-1);
          } else if (localStorage.getItem("userGeohash")) {
            this.$router.push("/profile");
          } else {
            this.$router.push("/home");
          }
        }
      });
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
.loginDiv {
  position: relative;
}
header {
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 0.45rem;
  line-height: 0.45rem;
}
.head_goback {
  position: absolute;
  top: 0.02rem;
  left: 0.1rem;
}
svg {
  height: 0.17rem;
  width: 0.15rem;
}
.middle {
  position: absolute;
  left: 39%;
  top: 5%;
}
.title_text {
  font-size: 0.1875rem;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-family: "Microsoft Yahei";
}
.loginForm {
  border-top: 0.14rem solid rgba(218, 215, 215, 0.158);
  margin-top: 0.44rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.input_container {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid #f1f1f1;
  height: 0.48rem;
  width: 100% !important;
  padding: 0 0.1875rem;
  box-sizing: border-box;
  background-color: #fff !important;
}
.input_container input {
  color: #666;
  font-size: 0.16rem;
}
.switch_container {
  margin-top: 0.14rem;
  position: relative;
}
.switch_container span {
  position: absolute;
  font-size: 0.12rem;
  color: #fff;
  top: 0.01rem;
  left: 0.05rem;
}
.img_change_img {
  position: relative;
}
.img_change_img img {
  width: 0.82rem;
  height: 0.35rem;
  margin-top: 0.04rem;
  margin-right: 0.457rem;
}
.change_img {
  position: absolute;
  right: 0;
  top: 0.05rem;
  color: #3b95e9;
}
.change_img p {
  font-size: 0.13rem;
  margin-top: 0.05rem;
}
.change_img p:nth-child(1) {
  color: #666;
  font-family: Helvetica Neue, Tahoma, Arial;
}
.login_tips {
  font-size: 0.12rem;
  color: red;
  padding: 0.093rem 0.141rem;
  line-height: 0.117rem;
}
.login_container {
  margin: 0 0.12rem 0.234rem;
  font-size: 0.164rem;
  color: #fff;
  background-color: #4cd964;
  padding: 0.117rem 0;
  border: 0.01rem;
  border-radius: 0.035rem;
  text-align: center;
}
.to_forget {
  float: right;
  color: #3b95e9;
  margin-right: 0.07rem;
  font-size: 0.14rem;
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