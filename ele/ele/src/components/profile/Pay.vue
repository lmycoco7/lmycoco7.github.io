<template>
  <div class="pay">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">会员中心</span>
    </div>
    <div class="show_time_amount">
      <div>
        <p class="time_last">支付剩余时间</p>
        <p class="time">00:{{min}}:{{sec}}</p>
      </div>
    </div>
    <div class="pay_way">选择支付方式</div>
    <div class="pay_way_list">
      <div class="pay_item">
        <div class="pay_icon_contaienr">
          <div class="zhifubao"></div>
          <span>支付宝</span>
        </div>
        <img v-if="btn1" class="choose_icon" src="../../../static/img/绿色对号.png" alt>
        <img v-else class="choose_icon" @click="pay()" src="../../../static/img/灰色对号.png" alt>
      </div>

      <div class="pay_item">
        <div class="pay_icon_contaienr">
          <svg data-v-cc8c4d24>
            <use data-v-cc8c4d24 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#weixin">
              <svg viewBox="0 0 72 72" id="weixin" width="100%" height="100%">
                <g fill="none" fill-rule="evenodd">
                  <path
                    d="M36 72c19.882 0 36-16.118 36-36S55.882 0 36 0 0 16.118 0 36s16.118 36 36 36z"
                    fill="#45C144"
                  ></path>
                  <path
                    d="M29 40l-4-8c-.262-.292-.288-.398 0-1 .594-.228.743-.174 1 0l4 4c1.5 1.098 1.5 1.098 3 0l21-10c-3.668-4.964-10.11-8-17-8-12.33 0-22 8.12-22 18 0 5.6 2.91 10.518 7 14 1 .8 1.068.537 1 1 .068.185-.954 4.042-1 4-.027.316-.097.495 0 1-.097.075.225.4 1 0-.22.4 5-3 5-3 1.4.6 5.8 1 9 1 11.533 0 21.2-7.85 21-18 .2-2.899-.692-5.756-2-8L31 41c-1.5.5-2-1-2-1z"
                    fill="#FFF"
                  ></path>
                </g>
              </svg>
            </use>
          </svg>
          <span>微信</span>
        </div>
        <img v-if="btn" @click="pay()" class="choose_icon" src="../../../static/img/灰色对号.png" alt>
        <img v-else class="choose_icon" src="../../../static/img/绿色对号.png" alt>
      </div>
    </div>
    <p class="determine" @click="Confirm_pay()">确认支付</p>
    <div class="alert_container" v-show="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">当前环境无法支付,请打开官方App进行付款</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>

    <div class="alert_container" v-show="alert2">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">支付超时</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "pay",
  data() {
    return {
      min:"",
      sec:"",
      alert1: false,
      alert2: false,
      btn: true,
      btn1: true,
    };
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
    pay() {
      this.btn = !this.btn;
      this.btn1 = !this.btn1;
    },
    Confirm_pay() {
      this.alert1 = true;
    },
    endtime(){
      const msec = 15 * 60;
    setTimeout(() => {
      let min = parseInt(msec / 60 % 60 / 1000 )
      let sec = parseInt(msec % 60 / 1000)
      this.min = min > 9 ? min : '0' + min
      this.sec = sec > 9 ? sec : '0' + sec
      const that = this
    }, 1000)
    }
  },
  created() {
    
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
.show_time_amount {
  background-color: #fff;
  padding: 0.15rem;
  text-align: center;
}
.time_last {
  font-size: 0.129rem;
  color: #666;
  margin-top: 0.2144rem;
}
.time {
  font-size: 0.3216rem;
  color: #333;
  margin: 0.064rem 0 0.2144rem;
}
.pay_way {
  background-color: #f1f1f1;
  padding: 0 0.15rem;
  font-size: 0.15rem;
  color: #666;
  line-height: 0.356rem;
}
.pay_way_list {
  background-color: #fff;
}
.pay_icon_contaienr,
.pay_item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pay_item {
  padding: 0.0865rem 0.15137rem;
  line-height: 0.5623rem;
  border-bottom: 0.006rem solid #f5f5f5;
}
.zhifubao {
  width: 0.4325rem;
  height: 0.4325rem;
  background: url(../../../static/img/zhifubao.png) no-repeat;
  background-size: 100% 100%;
  margin-right: 0.0433rem;
}
.choosed_way {
  fill: #4cd964;
}
.choose_icon {
  width: 0.21625rem;
  height: 0.21625rem;
  fill: #ccc;
}
.pay_icon_contaienr svg {
  width: 0.4325rem;
  height: 0.4325rem;
  margin-right: 0.06487rem;
}
.determine {
  background-color: #4cd964;
  font-size: 0.15137rem;
  color: #fff;
  text-align: center;
  margin: 0 0.15137rem;
  line-height: 0.38925rem;
  border-radius: 0.04325rem;
  margin-top: 0.10813rem;
  font-weight: 700;
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
