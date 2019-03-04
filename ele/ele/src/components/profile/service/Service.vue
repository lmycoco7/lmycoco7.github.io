<template>
  <div class="service">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">服务中心</span>
    </div>
    <div class="service_connect">
      <a href="https://ecs-im.ele.me/" class="service_left">
        <svg data-v-1a228d92>
          <use data-v-1a228d92 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#human">
            <svg viewBox="0 0 46 46" id="human" width="100%" height="100%">
              <path
                fill="#ff7b52"
                d="M33.291 37.774c-.25.097-.504.175-.765.233-6.427 1.444-5.954-3.968-6-3.953 10.457-5.053 10.348-13.466 10-16.216-16.15-.041-22.943-7.063-22.943-7.063s-.176 1.733-2.933 4.996c-2.756 3.262-5.236 4.09-5.132 4.113.54 13.9 12.246 14.242 12.246 14.242-.762 4.662-4.357 4.33-4.357 4.33s-6.38.213-11.173-7.446c-.85-1.359-1.02-2.864-1.166-4.579-.217-2.542.14-4.643.312-7.2.271-4.064.96-6.269.96-6.269S7.13 0 21.4 0s17.828 12.508 17.828 12.508l-.035.074c.533.763.984 1.997 1.356 3.36A3.483 3.483 0 0 1 45 19.281v7.257a3.484 3.484 0 0 1-3.325 3.472c-2.009 4.537-6.657 12.185-15.241 12.457C26.023 44.485 24.269 46 22.168 46c-2.407 0-4.357-1.988-4.357-4.44 0-2.453 1.95-4.44 4.357-4.44 1.955 0 3.609 1.311 4.16 3.118 1.447.13 4.044-.094 6.963-2.464zM18.216 27.018s.99 3.08 3.705 3.08 3.807-1.875 3.807-2.906c.467-1.135 1.348-.541 1.482-.071.134.47-.763 4.67-5.24 4.67s-5.205-4.358-5.205-4.358.033-.97.702-.97c.669 0 .749.555.749.555zm10.052-2.332c.963 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664zm-12.723 0c.962 0 1.743-1.192 1.743-2.664 0-1.471-.78-2.664-1.743-2.664-.963 0-1.743 1.193-1.743 2.664 0 1.472.78 2.664 1.743 2.664z"
              ></path>
            </svg>
          </use>
        </svg>
        <span>在线客服</span>
      </a>
      <a href="tel:10105757" class="service">
        <svg data-v-1a228d92>
          <use data-v-1a228d92 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#phone"></use>
          <svg viewBox="0 0 46 46" id="phone" width="100%" height="100%">
            <path
              fill="#6ac20b"
              d="M15.433 30.568c9.342 9.342 17.708 12.15 18.871 12.316 1.163.167 3.07.542 5.837-2.225 3.24-3.24 3.566-4.94 1.783-6.724-1.783-1.783-6.212-4.48-7.416-5.176-1.206-.696-2.228-.472-3.097.133-.868.605-1.87 1.375-2.798 2.047-.927.671-2.087.955-3.332.167-1.245-.79-3.35-2.27-5.735-4.652-2.384-2.384-3.863-4.49-4.651-5.735-.789-1.245-.505-2.405.167-3.332.671-.928 1.441-1.93 2.046-2.798.605-.869.828-1.89.134-3.097-.696-1.204-3.394-5.633-5.177-7.416-1.783-1.783-3.484-1.457-6.724 1.783-2.766 2.766-2.391 4.674-2.226 5.837.167 1.164 2.976 9.53 12.318 18.872"
            ></path>
          </svg>
        </svg>
        <span>在线客服</span>
      </a>
    </div>
    <div class="hot_questions">
      <h4 class="question_header">热门问题</h4>
      <ul>
        <router-link to="/supervip">
          <li class="question_title">
            <span>超级会员权益说明</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/signrules">
          <li class="question_title">
            <span>签到规则</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/levelexplain">
          <li class="question_title">
            <span>用户等级说明
</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="integralques">
          <li class="question_title">
            <span>积分问题</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="takephoto">
          <li class="question_title">
            <span>教我拍大片</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/payques">
          <li class="question_title">
            <span>支付问题</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="otherques">
          <li class="question_title">
            <span>其他问题</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/ontime">
          <li class="question_title">
            <span>准时达问题</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="vipexplain">
          <li class="question_title">
            <span>会员说明</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="vipques">
          <li class="question_title">
            <span>会员问题</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="redques">
          <li class="question_title">
            <span>红包问题</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/activityrules">
          <li class="question_title">
            <span>活动规则</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/addsign">
          <li class="question_title">
            <span>补签规则</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="discountexplain">
          <li class="question_title">
            <span>优惠说明</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="reliefexplain">
          <li class="question_title">
            <span>免责说明</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/voucherexplain">
          <li class="question_title">
            <span>代金券说明</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/cooperate">
          <li class="question_title">
            <span>商务合作</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/balanceques">
          <li class="question_title">
            <span>余额问题</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/goodshop">
          <li class="question_title">
            <span>超赞商家</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/anonymousbuy">
          <li class="question_title">
            <span>匿名购买</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        <router-link to="/activityques">
          <li class="question_title">
            <span>活动问题</span>
            <svg data-v-1a228d92 fill="#999" class="arrow-svg">
              <use
                data-v-1a228d92
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
          </li>
        </router-link>
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "service",
  data() {
    return {
     
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    let api = "https://elm.cangdu.org/v3/profile/explain";
    this.$http({
        type: "get",
        url:api
    }).then(res =>{
        console.log(res)
    })
  }
};
</script>
<style scoped>
.my_header {
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
  text-align: center;
  position: fixed;
  left: 0;
  top: 0;
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

.service_connect {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
}
.service_connect a {
  -ms-flex: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 0.9375rem;
  border-bottom: 1px solid #f5f5f5;
  background-color: #fff;
}
.service_left {
  border-right: 1px solid #f5f5f5;
}
.service_connect a svg {
  width: 0.234375rem;
  height: 0.234375rem;
}
.service_connect a span {
  margin-top: 0.09375rem;
  font-size: 0.1406rem;
  color: #666;
}

.question_header {
  font-size: 0.1758rem;
  color: #333;
  line-height: 0.7031rem;
  border-bottom: 1px solid #f5f5f5;
  padding-left: 0.164rem;
  background-color: #fff;
}
.question_title {
  padding: 0 0.164rem;
  line-height: 0.46875rem;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.question_title span {
  font-size: 0.1406rem;
  color: #666;
}
.question_title svg {
  width: 0.1406rem;
  height: 0.1406rem;
}
svg {
  fill: rgb(153, 153, 153);
}
</style>
