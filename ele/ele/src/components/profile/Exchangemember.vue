<template>
  <div class="exchangemember">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">兑换会员</span>
    </div>
    <p class="buy_for">
        成功兑换后将关联到当前帐号： 
    </p>
    <form action class="exchange_code">
      <input
        type="text"
        placeholder="请输入10位卡号"
        id="exchange_input"
      >
      <div class="input_container">
        <input type="" placeholder="请输入6位卡密"  id="input_code">
      </div>
    </form>
    <button id="datermine" @click="exchange()">兑换</button>

    <footer class="Binding">
        <h3>——温馨提示——</h3>
        <p>新兑换的会员服务，权益以「会员说明」为准。</p>
        <p>月卡：<b>30次</b>减免配送费。</p>
        <p>季卡：<b>90次</b>减免配送费。</p>
        <p>年卡：<b>360</b>次减免配送费。</p>
        <p>＊仅限蜂鸟专送订单，每日最多减免3单，每单最高减免4元（一个月按31天计算）</p>
    </footer>

    <div class="alert_container" v-if="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../../static/img/1.png" alt>
        </div>
        <p class="tip_text">无效的卡号</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "exchangemember",
  data() {
    return {
      alert1: false,
      alert2: false,
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    exchange() {
        this.alert1 = !this.alert1;
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
    }
  },
  created() {
    // document.querySelector(".text")
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

#exchange_input {
  width: 94.5%;
  color: #666;
  font-size: 0.17rem;
  padding: 0.14rem 0.1rem;
  border-bottom: 1px solid #f5f5f5;
}
.input_container {
  height: 0.55rem;
  display: flex;
}
.input_container input {
  font-size: 0.17rem;
  color: #666;
  flex: 3;
  width: 2rem;
  padding: 0.1rem;
}
.buy_for {
    font-size: .1406rem;
    color: #666;
    line-height: 0.46875rem;
    padding-left: .164rem;
}
.Binding {
    margin-top: 0.23438rem;
}
.Binding h3 {
    text-align: center;
    font-weight: 400;
    font-size: .1523rem;
    color: #aaa;
    margin-bottom: .1406rem;
}
.Binding p{
    padding-left: 0.46875rem;
    font-size: 0.1172rem;
    color: #aaa;
    line-height: 0.1875rem;
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
