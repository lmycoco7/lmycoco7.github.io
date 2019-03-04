<template>
  <div class="my">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">我的</span>
    </div>
    <router-link :to="isLogin ? '/profile/info'   :'/login'" class="my_login">
      <span class="portrait">
        <svg  class="privateImage-svg">
          <use
            
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#avatar-default"
          >
            <svg viewBox="0 0 122 122" id="avatar-default" width="100%" height="100%">
              <path
                fill="#DCDCDC"
                fill-rule="evenodd"
                d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"
              ></path>
            </svg>
          </use>
        </svg>
      </span>
      <div class="user_info">
        
        
        <router-link to="/profile/info" v-if="isLogin">
          <p>{{username}}</p>
        </router-link>
        
        <p v-else>登录/注册</p>
        <p>
          <span class="user-icon">
            <svg  fill="#fff" class="icon-mobile">
              <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile">
                <svg viewBox="0 0 655 1024" id="mobile" width="100%" height="100%">
                  <path
                    d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"
                  ></path>
                </svg>
              </use>
            </svg>
          </span>
          <span class="icon_mobile_number">暂无绑定手机号</span>
        </p>
      </div>
      <span class="arrow">
        <svg fill="#fff" class="arrow-svg">
          <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
            <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%">
              <path
                d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                class="selected"
              ></path>
            </svg>
          </use>
        </svg>
      </span>
    </router-link>

    <div class="info_data">
      <el-row>
        <el-col :span="8" class="elF">
          <router-link to="/balance">
            <div class="grid-content bg-purple">
              <span class="info_data_top">
                <b class="pr">0.00</b>元
              </span>
              <span class="info_data_bottom">我的余额</span>
            </div>
          </router-link>
        </el-col>
        <el-col :span="8" class="elS">
          <router-link to="/benefit">
            <div class="grid-content bg-purple-light">
              <span class="info_data_top">
                <b class="num">3</b>个
              </span>
              <span class="info_data_bottom">我的优惠</span>
            </div>
          </router-link>
        </el-col>
        <el-col :span="8" class="elT">
          <router-link to="/points">
            <div class="grid-content bg-purple">
            <span class="info_data_top">
              <b class="int">0</b>分
            </span>
            <span class="info_data_bottom">我的积分</span>
          </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
    <div class="profile_rete">
      <router-link to='/order' class="myOrderA">
        <svg  fill="#4aa5f0">
          <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order">
            <svg
              data-v-617269a8
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 38 38"
              id="order"
              width="100%"
              height="100%"
            >
              <g data-v-617269a8 fill="none" fill-rule="evenodd">
                <g
                  data-v-617269a8
                  stroke="#666"
                  stroke-width="4"
                  mask="url(#order-regular.41c17f8_b)"
                ></g>
                <rect data-v-617269a8 width="24" height="2" x="7" y="8" fill="#666" rx="1"></rect>
                <rect data-v-617269a8 width="20" height="2" x="7" y="17" fill="#666" rx="1"></rect>
                <rect data-v-617269a8 width="8" height="2" x="7" y="26" fill="#666" rx="1"></rect>
              </g>
            </svg>
          </use>
        </svg>
        <div class="myOrderA_div">
          <span>我的订单</span>
          <span  class="myorderA-divsvg">
            <svg  fill="#bbb">
              <use
                
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              ></use>
            </svg>
          </span>
        </div>
      </router-link>
      <router-link to="/integralmall" class="myOrderB">
        <svg  fill="#fc7b53">
          <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#point">
            <svg viewBox="0 0 40 40" id="point" width="100%" height="100%">
              <path
                d="M34.6 7.1c0-1.1-1-2.1-2.1-2.1h-24c-1.1 0-2 1-2.1 2.1l-1.6 25C4.6 34.3 6.3 36 8.5 36h24c2.2 0 3.9-1.7 3.7-3.9l-1.6-25zm-5.9 6.1c-.2 4.6-3.7 8.2-8.3 8.2-4.6 0-8.2-3.7-8.4-8.3-.3-.2-.5-.6-.5-1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c0 .5-.3.9-.7 1.1.2 3.8 3.2 6.8 7.1 6.8 3.9 0 6.8-3.1 7-6.9-.4-.2-.6-.6-.6-1.1 0-.7.6-1.2 1.3-1.2s1.3.6 1.3 1.2c-.2.6-.4 1-.8 1.2z"
              ></path>
            </svg>
          </use>
        </svg>
        <div class="myOrderB_div">
          <span>积分商城</span>
          <span  class="myorderA-divsvg">
            <svg  fill="#bbb">
              <use
                
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              ></use>
            </svg>
          </span>
        </div>
      </router-link>
      <router-link to="/member" class="myOrderC">
        <svg  fill="#ffc636">
          <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#vip">
            <svg viewBox="0 0 40 40" id="vip" width="100%" height="100%">
              <path d="M7 33.4c0 1.1.9 1.6 2 1.6h22c1.1 0 2-.5 2-1.6V31H7v2.4z"></path>
              <path
                d="M32.1 14.3c-.6 2.3-2.6 4-5.1 4-2.9 0-5.3-2.3-5.3-5.2v-.2c-.5.2-1 .3-1.6.3-.6 0-1.1-.1-1.7-.3v.2c0 2.9-2.4 5.2-5.3 5.2-2.5 0-4.6-1.7-5.1-4.1-.5.4-1.2.6-1.8.6-.3 0-.5.1-.8 0L7.2 29h26l1.7-14.2c-.3.1-.5.1-.8.1-.8 0-1.5-.2-2-.6z"
                class="st0"
              ></path>
              <ellipse cx="20.1" cy="8.2" rx="3.2" ry="3.2"></ellipse>
              <ellipse cx="6.4" cy="10.5" rx="2.4" ry="2.4"></ellipse>
              <ellipse cx="33.8" cy="10.5" rx="2.4" ry="2.4"></ellipse>
            </svg>
          </use>
        </svg>

        <div class="myOrderC_div">
          <span>饿了么会员卡</span>
          <span  class="myorderA-divsvg">
            <svg  fill="#bbb">
              <use
                
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              ></use>
            </svg>
          </span>
        </div>
      </router-link>
    </div>

    <div class="profile_rete2">
      <router-link to="/service" class="myOrder1">
        <svg  fill="#4aa5f0">
          <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#service">
            <svg viewBox="0 0 40 40" id="service" width="100%" height="100%">
              <g id="service_XMLID_1_">
                <path
                  id="service_XMLID_6_"
                  d="M32.2 9.5c-.2-.7-.1-.7-.4-.9-1.7-1.2-5.3.2-6.7 1.9-.8-3.8-3.8-6.1-4.7-5.9-.9-.2-4 2.1-4.8 5.9-1.3-1.7-5-3.1-6.7-1.9-.1.1-.5.6-.5.7C5.4 20.7 15 24.6 19 25.7v8.7c0 .7.3 1.2 1 1.2s1-.5 1-1.2v-8.6c4-1 14.2-4.8 11.2-16.3z"
                ></path>
                <path
                  id="service_XMLID_7_"
                  d="M6 25c-.9 0-1.6.7-1.6 1.5.1.8.7 1.5 1.6 1.5 3.1 0 6.5 1.5 8.5 3.7.3.3.7.6 1.1.6.4 0 .7-.1 1-.4.6-.6.6-1.6.1-2.3C14.1 26.8 10 25 6 25z"
                ></path>
                <path
                  id="service_XMLID_8_"
                  d="M34.6 25c-4 0-8.1 1.9-10.7 4.6-.6.6-.5 1.6.1 2.2.3.3.7.4 1 .4.4 0 .8-.3 1.1-.6 2-2.1 5.3-3.7 8.4-3.7h.1c.8 0 1.5-.7 1.5-1.5 0-.7-.7-1.4-1.5-1.4z"
                ></path>
              </g>
              <path d="M0 0h40v40H0z" class="st1"></path>
            </svg>
          </use>
        </svg>
        <div class="myOrder1_div">
          <span>服务中心</span>
          <span  class="myorderA-divsvg">
            <svg  fill="#bbb">
              <use
                
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              ></use>
            </svg>
          </span>
        </div>
      </router-link>
      <router-link to="/download" class="myOrder2">
        <svg  fill="#3cabff">
          <use  xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#download">
            <svg viewBox="0 0 40 40" id="download" width="100%" height="100%">
              <path
                d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"
              ></path>
            </svg>
          </use>
        </svg>
        <div class="myOrder2_div">
          <span>下载饿了么App</span>
          <span  class="myorderA-divsvg">
            <svg  fill="#bbb">
              <use
                
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#arrow-right"
              ></use>
            </svg>
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "My1",
  data() {
    return {
      username:"",
      isLogin:false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created(){
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
.my_login {
  display: flex;
  align-items: center;
  background-color: #3190e8;
  padding: 0.15rem 0.1rem;
}
.portrait {
  height: 0.586rem;
  width: 0.586rem;
}
.privateImage-svg {
  width: 0.586rem;
  height: 0.586rem;
  border-radius: 50%;
  background-color: #fff;
}
.user_info p:first-of-type {
  font-size: 0.2rem;
  color: #fff;
  margin-bottom: 0.1rem;
  font-weight: 700;
  font-size: 0.1875rem;
}
.icon-mobile {
  width: 0.118rem;
  height: 0.176rem;
}
.icon_mobile_number {
  color: #fff;
  font-size: 0.134rem;
  line-height: 0.176rem;
}
.user-icon {
  display: inline-block;
  line-height: 0.176rem;
  vertical-align: middle;
}
.user_info p {
  color: #fff;
}
.user_info {
  margin-left: 0.2rem;
}
.arrow {
  display: inline-block;
}
.arrow-svg {
  width: 0.23rem;
  height: 0.11rem;
}
.my_login .user_info {
  flex-grow: 1;
}
.info_data {
  width: 100%;
  height: 0.844rem;
}
.el-col {
  border: 0.01rem solid #f1f1f1;
  background-color: #fff;
  font-size: 0.13rem;
}

.bg-purple .bg-purple-light .grid-content {
  float: left;
  border: 0.01rem solid #f1f1f1;
  height: 0.844rem;
  text-align: center;
}
.info_data_top {
  color: #333;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  display: block;
  text-align: center;
}
.pr,
.num,
.int {
  font-weight: 700;
  font-size: 0.26rem;
  display: inline-block;
  text-align: center;
}
.pr {
  color: #f90;
}
.num {
  color: #ff5f3e;
}
.int {
  color: #6ac20b;
}
.info_data_bottom {
  display: block;
  color: #666;
  font-weight: 400;
  padding-bottom: 0.1rem;
  text-align: center;
}
.myOrderA svg,
.myOrderB svg,
.myOrderC svg,
.myOrder1 svg,
.myOrder2 svg {
  width: 0.163rem;
  height: 0.163rem;
}
.myorderA-divsvg svg {
  width: 0.1094rem;
  height: 0.1094rem;
}
svg:not(:root) {
  overflow: hidden;
}
.profile_rete {
  margin-top: 0.15rem;
}
.profile_rete2 {
  margin-top: 0.07rem;
}
.myOrderA,
.myOrderB,
.myOrderC,
.myOrder1,
.myOrder2 {
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #f1f1f1;
  padding: 0.11rem 0.12rem 0.11rem 0.1rem;
  box-sizing: border-box;
  background-color: #fff;
}
.myOrderA_div,
.myOrderB_div,
.myOrderC_div,
.myOrder1_div,
.myOrder2_div {
  display: inline-block;
  color: #333;
  width: 94%;
}
.myorderA-divsvg,
.myorderB-divsvg,
.myorderB-divsvg {
  float: right;
  width: 0.194rem;
}
</style>
