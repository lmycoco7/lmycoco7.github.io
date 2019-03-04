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
        <span class="title_text">重置密码</span>
      </section>
    </header>
    <form class="loginForm">
      <section class="input_container">
        <input type="text" placeholder="账号" v-model="userName">
      </section>
      <section class="input_container">
        <input type="text" v-model="oldPassWord" placeholder="密码">
      </section>
      <section class="input_container">
        <input type="text" v-model="newPassWord" placeholder="请输入新密码">
      </section>
      <section class="input_container">
        <input type="text" v-model="newPassWordAgain" placeholder="请确认密码">
      </section>
      <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码" maxlength="4" v-model="testCode">
        <div class="img_change_img">
          <img :src="baseImg">
          <div class="change_img" @click="request_cap()">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section>
    </form>
    <div class="login_container" @click="reset()">确认修改</div>

    <div class="alert_container" v-if="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入正确的账号</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>

    <div class="alert_container" v-if="alert2">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入旧密码</p>
        <div class="confirm" @click="alert2=!alert2">确认</div>
      </section>
    </div>

    <div class="alert_container" v-if="alert3">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入新密码</p>
        <div class="confirm" @click="alert3=!alert3">确认</div>
      </section>
    </div>

    <div class="alert_container" v-if="alert4">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输确认密码</p>
        <div class="confirm" @click="alert4=!alert4">确认</div>
      </section>
    </div>

    <div class="alert_container" v-if="alert5">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">两次输入的密码不一致</p>
        <div class="confirm" @click="alert5=!alert5">确认</div>
      </section>
    </div>

    <div class="alert_container" v-if="alert6">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输验证码</p>
        <div class="confirm" @click="alert6=!alert6">确认</div>
      </section>
    </div>

    <div class="alert_container" v-if="alert7">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">验证码不正确</p>
        <div class="confirm" @click="alert7=!alert7">确认</div>
      </section>
    </div>

    <div class="alert_container" v-if="alert8">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">密码不正确</p>
        <div class="confirm" @click="alert8=!alert8">确认</div>
      </section>
    </div>

    <div class="alert_container" v-if="alert9">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">密码修改成功</p>
        <div class="confirm" @click="alert9=!alert9">确认</div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Forget",
  data() {
    return {
      baseImg: "",
      userName: "",
      oldPassWord: "",
      newPassWord: "",
      newPassWordAgain: "",
      testCode: "",
      alert1: false,
      alert2: false,
      alert3: false,
      alert4: false,
      alert5: false,
      alert6: false,
      alert7: false,
      alert8: false,
      alert9: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
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
    reset() {
      if (!this.userName) {
        this.alert1 = !this.alert1;
      } else if (!this.oldPassWord) {
        this.alert2 = !this.alert2;
      } else if (!this.newPassWord) {
        this.alert3 = !this.alert3;
      } else if (!this.newPassWordAgain) {
        this.alert4 = !this.alert4;
      } else if (this.newPassWord !== this.newPassWordAgain) {
        this.alert5 = !this.alert5;
      } else if (!this.testCode) {
        this.alert6 = !this.alert6;
      } else {
        this.$http({
          url: "https://elm.cangdu.org/v2/changepassword",
          method: "post",
          withCredentials: true,
          data: {
            username: this.userName,
            oldpassWord: this.oldPassWord,
            newpassword: this.newPassWord,
            confirmpassword: this.newPassWordAgain,
            captcha_code: this.testCode
          }
        }).then(response => {
          console.log(response);
          if (response.data.status == 1) {
            this.alert9 = !this.alert9;
          } else if (
            response.data.type == "ERROR_PASSWORD" &&
            response.data.message == "密码不正确"
          ) {
            this.alert8 = !this.alert8;
          } else if (response.data.message == "验证码不正确") {
            this.alert7 = !this.alert7;
          }
        });
      }
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
  width:100% !important;
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
  color: #fff;
  padding: 0.117rem 0;
  margin: 0.234rem 0.117rem;
  font-size: 0.164rem;
  border: 0.01rem;
  border-radius: 0.0352rem;
  text-align: center;
  background-color: #4cd964;
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
