<template>
  <div class="account">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">账户信息</span>
    </div>

    <div class="profile-info">
      <form >
        <input type="file" class="profile_input">
      </form>
      <div class="headportrait">
        <span>头像</span>
        <div class="headportrait1">
          <img  src="//elm.cangdu.org/img/default.jpg" class="privateImage">
          <span  class="arrow">
            <svg  fill="#fff" class="arrow-svg">
              <use
                
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  id="arrow-right"
                  class="icon"
                  width="100%"
                  height="100%"
                >
                  <path
                    d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                    class="selected"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
        </div>
      </div>

      <router-link to="/profile/info/setusername" class="username">
        <div class="userName">
          <span>用户名</span>
          <div class="username1_a">
            <span class="username1_user" v-if="isLogin">{{username}}</span>
            <span  class="arrow">
              <svg  fill="#fff" class="arrow-svg">
                <use
                  
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    id="arrow-right"
                    class="icon"
                    width="100%"
                    height="100%"
                  >
                    <path
                      d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                      class="selected"
                    ></path>
                  </svg>
                </use>
              </svg>
            </span>
          </div>
        </div>
      </router-link>

      <router-link to="/profile/info/infoAddress" class="address">
        <div class="Add">
          <span>收货地址</span>
          <div class="address1_a">
            <span class="address1_Add"></span>
            <span  class="arrow">
              <svg  fill="#fff" class="arrow-svg">
                <use
                  
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    id="arrow-right"
                    class="icon"
                    width="100%"
                    height="100%"
                  >
                    <path
                      d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                      class="selected"
                    ></path>
                  </svg>
                </use>
              </svg>
            </span>
          </div>
        </div>
      </router-link>
      <div class="bind_phone">
          账号绑定
      </div>
      <div class="phonenumber"  @click="account()">
          <div class="Phone">
              <div>
                  <img  src="../../../static/img/phone.png" >手机
              </div>
              <div class="phonenumber1_a">
            <span class="phonenumber1_Phone"></span>
            <span  class="arrow">
              <svg  fill="#fff" class="arrow-svg">
                <use
                  
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    id="arrow-right"
                    class="icon"
                    width="100%"
                    height="100%"
                  >
                    <path
                      d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                      class="selected"
                    ></path>
                  </svg>
                </use>
              </svg>
            </span>
          </div>
          </div>
      </div>
      <div class="bind_phone">
          安全设置
      </div>

      <router-link to="/forget" class="password">
        <div class="passWord">
          <span>登录密码</span>
          <div class="password1_a">
            <span class="password1_pass">修改</span>
            <span  class="arrow">
              <svg  fill="#fff" class="arrow-svg">
                <use
                  
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xlink:href="#arrow-right"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    id="arrow-right"
                    class="icon"
                    width="100%"
                    height="100%"
                  >
                    <path
                      d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                      class="selected"
                    ></path>
                  </svg>
                </use>
              </svg>
            </span>
          </div>
        </div>
      </router-link>

      <div class="exitlogin" @click="out()">退出登录</div>
    </div>

    <div class="alert_container" v-show="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请在手机App中设置</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>

    <div class="coverpart" v-show="alertout">
      <div class="cover-background"></div>
      <div class="cover-content cover-animate">
      <div class="sa-icon">
        <span class="sa-body"></span>
        <span class="sa-dot"></span>
      </div>
      <h2>是否退出登录</h2>
      <div class="sa-botton">
        <button class="waiting" @click="alertout=!alertout">再等等</button>
        <div style="display: inline-block;">
          <button class="quitlogin" @click="log_out()">退出登录</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Account1",
  data() {
    return {
      isLogin:false,
      username:"",
      alert1: false,
      alertout:false
    };
  },
  computed: {
    judgeLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    account() {
      this.alert1 = true
    },
    out(){
      this.alertout = true
    },
    log_out(){
      this.$http({
      url:"https://elm.cangdu.org/v2/signout",
      method:"get",
      withCredentials:true
    }).then(response => {
      // this.username = this.$store.state.userId;
      console.log(this.$store.state.userId,this.$store.state.isLogin);
      localStorage.removeItem('isLogin');
      localStorage.removeItem('id');
      localStorage.removeItem('userId');
      this.$router.push('/profile')
    })
    },
    

  },
  created(){
    this.$http({
      url:"https://elm.cangdu.org/v2/login",
      method:"post",
    }).then(res => {
      console.log(res);
      this.$store.state.isLogin = !this.$store.state.isLogin;
      this.$store.state.userId = res.data.username;
      // this.username = this.$store.state.userId;
      console.log(this.$store.state.userId)
    })


    if(localStorage.getItem('userId')){
        this.isLogin = true;
        this.username = localStorage.getItem('userId')
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
.headportrait {
  color: #333;
  font-weight: 500;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.headportrait1 {
  display: flex;
  align-items: center;
}
.privateImage {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  padding-right: 0.05rem;
}
.arrow {
  display: inline-block;
}
.arrow-svg {
  width: 0.156rem;
  height: 0.328rem;
}
.profile-info{
    font-size: 0.15rem;
}
.profile-info .headportrait {
  margin-top: 0.1rem;
  padding: 0.1rem 0.1rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  border-top: 1px solid #ddd;
  background: #fff;
}
svg {
  fill: rgb(216, 216, 216);
}
.profile_input,
.profile-info {
  display: block;
  position: absolute;
  /* top: 0.7rem; */
  width: 100%;
  height: 0.81rem;
}
.profile_input {
  top: 0.1rem;
  opacity: 0;
}
.username,.address,.phonenumber,.password {
  /* margin-top: 0.1rem; */
  display: block;
  color: #333;
  font-weight: 500;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #ddd;
}
.userName,
.username1_a,
.Add,
.address1_a,
.Phone,
.phonenumber1_a,
.passWord,
.password1_a
 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.userName,.Add,.Phone,.passWord {
  padding: 0.06rem 0.1rem;
}
.username1_user,.address1_Add,.phonenumber1_Phone,.password1_pass {
  color: #999;
  text-align: left;
  font-size: 0.17rem;
  margin-right: 0.05rem;
}
.phonenumber{
  z-index: 100;
}
.bind_phone{
    color: #666;
    font-size: 0.13rem;
    padding: 0.1rem;
    border-bottom: 1px solid #ddd;
}
.Phone div:first-of-type{
    display: flex;
    align-items: center;
}
.exitlogin{
    width: 96%;
    margin: 0.3rem auto 0;
    line-height: 0.4rem;
    border-radius: 5px;
    text-align: center;
    background: #d8584a;
    color: #fff;
    font-size: 0.17rem;
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

.coverpart {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
}
.coverpart .cover-background {
    background: #000;
    z-index: 100;
    opacity: .2;
}
.coverpart .cover-background, .coverpart {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
}

.cover-content {
    width: 85%;
    background: #fff;
    padding: 17px;
    position: absolute;
    top: 20%;
    left: 3%;
    z-index: 1000;
    border-radius: 5px;
    animation: tipMove 0.4s;
}
.sa-icon {
    width: 90px;
    height: 90px;
    border: 4px solid #f8bb86;
    border-radius: 50%;
    margin: 20px auto;
    position: relative;
}
.sa-body {
    width: 5px;
    height: 47px;
    border-radius: 2px;
    background: #f8bb86;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 10px;
}
.sa-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #f8bb86;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10px;
}
.cover-content h2 {
    width: 100%;
    text-align: center;
    font-size: 30px;
    color: #575757;
    font-weight: 500;
    margin: 25px 0;
}
.sa-botton {
    width: 100%;
    text-align: center;
}
.waiting {
    background: #c1c1c1;
    margin-right: .09375rem;
}
.quitlogin {
    background: #dd6b55;
}
.coverpart .cover-content .sa-botton button {
    display: inline-block;
    padding: .09375rem 0.23438rem;
    border-radius: 5px;
    font-size: .1406rem;
    color: #fff;
    letter-spacing: 1px;
    margin-top: 26px;
    border: none;
}
.quitlogin {
    background: #dd6b55;
}
</style>
