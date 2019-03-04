<template>
  <div>
    <div class="confirmOrderContainer">
      <section>
        <header id="head_top">
          <section class="head_goback">
            <img @click="go_back()" src="../../static/img/返回.png" alt>
          </section>
          <a class="head_login">
            <span class="login_span" v-if="!isLogin" @click="login">登录|注册</span>
            <i @click="gotoProfile" v-else>{{userID}}</i>
          </a>
          <section class="title_head ellipsis">
            <span class="title_text">确认订单</span>
          </section>
        </header>
        <div class="alert_container" v-show="alert1">
          <section class="tip_text_container">
            <div class="tip_icon">
              <img src="../../static/img/1.png" alt>
            </div>
            <p class="tip_text">请登录</p>
            <div class="confirm" @click="alert1=!alert1">确认</div>
          </section>
        </div>
        <div class="alert_container" v-show="alert2">
          <section class="tip_text_container">
            <div class="tip_icon">
              <img src="../../static/img/1.png" alt>
            </div>
            <p class="tip_text">请添加一个收货地址</p>
            <div class="confirm" @click="alert2=!alert2">确认</div>
          </section>
        </div>
        <a class="address_container" @click="choice()">
          <div class="address_empty_left">
            <img src="../../static/img/定位.png" alt>
            <div v-if="!this.name" class="add_address">&nbsp;请添加一个收货地址</div>
            <div v-else class="right_mes">
              <div class="mes_top">
                <span class="user_name">{{name}}</span>
                <span v-if="sex_show" class="Mr">先生</span>
                <span v-else class="Mr">女士</span>
                <span class="user-phone">{{phone}}</span>
              </div>
              <div class="mes_bot">
                <span class="user_address">{{tag}}</span>
                <span class="user_address_detail">{{address}}</span>
              </div>
            </div>
          </div>
          <img src="../../static/img/右.png" alt class="address_empty_right">
        </a>
        <section class="delivery_model container_style">
          <p class="deliver_text">送达时间</p>
          <section class="deliver_time">
            <p>尽快送达 | 预计 20:49</p>
            <p>蜂鸟专送</p>
          </section>
        </section>
        <section class="pay_way container_style">
          <header class="header_style">
            <span>支付方式</span>
            <div class="more_type" @click="changeType">
              <span>在线支付</span>
              <img src="../../static/img/右.png" class="address_empty_right">
            </div>
          </header>
          <section class="hongbo">
            <span>红包</span>
            <span>暂时只在饿了么 APP中支持</span>
          </section>
        </section>
        <section class="food_list">
          <header>
            <img :src="baseUrl +shopInfo.image_path" alt>
            <span>{{shopInfo.name}}</span>
          </header>
          <ul class="food_list_ul">
            <li class="food_item_style" v-for="(good, index) in listDetail" :key="index">
              <p class="food_name ellipsis">{{good.name}}</p>
              <div class="num_price">
                <span>X{{numContainer[index] }}</span>
                <span>{{good.price}}</span>
              </div>
            </li>
          </ul>
          <div class="food_item_style">
            <p class="food_name ellipsis">餐盒</p>
            <div class="num_price">
              <span></span>
              <span>￥24149.5</span>
            </div>
          </div>
          <div class="food_item_style">
            <p class="food_name ellipsis">配送费</p>
            <div class="num_price">
              <span></span>
              <span>￥{{shopInfo.float_delivery_fee}}</span>
            </div>
          </div>
          <div class="food_item_style total_price">
            <p class="food_name ellipsis">订单</p>
            <div class="num_price">
              <span>待支付 ￥{{totalMoney}}</span>
            </div>
          </div>
        </section>
        <section class="pay_way container_style">
          <a class="header_style" @click="addRemark">
            <span>订单备注</span>
            <div class="more_type">
              <span class="ellipsis">口味丶偏好等</span>
              <img src="../../static/img/右.png" class="address_empty_right">
            </div>
          </a>
          <a class="hongbo support_is_available" @click="showInvoice">
            <span>发票抬头</span>
            <span>
              '不需要开发票'
              <img src="../../static/img/右.png" class="address_empty_right">
            </span>
          </a>
        </section>

        <section class="confirm_order">
          <p>待支付 ￥{{totalMoney}}</p>
          <p>确认下单</p>
        </section>
      </section>

      <transition name="maskBottom">
        <div class="cover" v-if="showCover" @click="changeType"></div>
      </transition>

      <transition name="fromBottom">
        <div class="choose_type_container" v-if="showType">
          <header>支付方式</header>
          <ul>
            <li>
              <span>
                '货到付款'
                <span>(商家不支持货到付款)</span>
              </span>
              <img src="../../static/img/灰色对号.png" alt>
            </li>
            <li class="choose">
              <span>在线支付</span>
              <img src="../../static/img/绿色对号.png" @click="changeType">
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <transition name="fromRight">
      <div class="rating_page" v-if="show_invoice">
        <section>
          <header id="head_top">
            <section class="head_goback">
              <img src="../../static/img/返回.png" @click="showInvoice">
            </section>
            <section class="title_head ellipsis">
              <span class="title_text">选择发票抬头</span>
            </section>
          </header>
          <section class="choose_invoice">
            <span>不需要开发票</span>
            <img src="../../static/img/灰色对号.png" v-if="showImg" @click="changeImg">
            <img src="../../static/img/绿色对号.png" v-else @click="changeImg">
          </section>
          <div class="determine" @click="showInvoice">确定</div>
        </section>
      </div>
    </transition>
    <transition name="fromRight">
      <div class="rating_page" v-if="showRemark">
        <section>
          <header id="head_top">
            <section class="head_goback" @click="backOrder()">
              <img src="../../static/img/返回.png" alt>
            </section>
            <section class="title_head ellipsis">
              <span class="title_text">订单备注</span>
            </section>
          </header>
          <section class="quick_remark">
            <header class="header_style">快速备注</header>
            <ul class="remark_arr_list_ul">
              <li class="remark_arr_list_li">
                <span class="remark_item_li first spicy" @click="changeSpicy(0)">不要辣</span>
                <span class="remark_item_li spicy" @click="changeSpicy(1)">少点辣</span>
                <span class="remark_item_li last spicy" @click="changeSpicy(2)">多点辣</span>
              </li>
              <li class="remark_arr_list_li">
                <span class="remark_item_Li first last coriander" @click="changeCoriander()">不要香菜</span>
              </li>
              <li class="remark_arr_list_li">
                <span class="remark_item_Li first last onion" @click="changeOnion()">不要洋葱</span>
              </li>
              <li class="remark_arr_list_li">
                <span class="remark_item_Li first last vinegar" @click="changeVinegar()">多点醋</span>
              </li>
              <li class="remark_arr_list_li">
                <span class="remark_item_Li first last shallot" @click="changeShallot()">多点葱</span>
              </li>
              <li class="remark_arr_list_li">
                <span class="remark_item_Li first ice" @click="changeIce(0)">去冰</span>
                <span class="remark_item_Li last ice" @click="changeIce(1)">少冰</span>
              </li>
            </ul>
          </section>
          <section class="input_remark quick_remark">
            <header class="header_style">其他备注</header>
            <textarea placeholder="请输入备注内容（可不填）" class="input_text" v-model="textVal"></textarea>
          </section>
          <div class="determine" @click="sumbit">确定</div>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: "https://elm.cangdu.org/img/",
      listDetail: "",
      shopInfo: "",
      finalFoodNum: [],
      numContainer: [],
      totalMoney: 0,
      isLogin: false,
      name: "",
      phone: "",
      address: "",
      tag: "",
      sex: "",
      sex_show: true,
      spicy: "",
      coriander: "",
      onion: "",
      vinegar: "",
      shallot: "",
      ice: "",
      textVal: "",
      remark: "",
      alert1: false,
      alert2: false,
      showCover: false,
      showType: false,
      showRemark: false,
      show_invoice: false,
      showImg: false
    };
  },
  created() {
    console.log(this.$route);
    this.name = this.$route.query.names;
    this.phone = this.$route.query.phones;
    this.address = this.$route.query.sites;
    this.tag = this.$route.query.tags;
    this.sex = this.$route.query.sexs;
    if (this.sex == 2) {
      this.sex_show = false;
    }
    console.log(this.name);

    if (localStorage.getItem("isLogin")) {
      this.isLogin = true;
    }
    console.log(this.$route);
    if (this.$route.query.selected_kind) {
      this.listDetail = this.$route.query.selected_kind;
      this.shopInfo = this.$route.query.shopDetail;
      this.finalFoodNum = this.$route.query.finalFoodNum;
      for (let i = 0; i < this.finalFoodNum.length; i++) {
        if (this.finalFoodNum[i]) {
          this.numContainer.push(this.finalFoodNum[i]);
        }
      }
      let foodTotalMoney = 0;
      for (let i = 0; i < this.listDetail.length; i++) {
        foodTotalMoney +=
          parseInt(this.listDetail[i].price) * parseInt(this.numContainer[i]);
      }
      // console.log(foodTotalMoney);
      this.totalMoney =
        foodTotalMoney + 24149.5 + this.shopInfo.float_delivery_fee;
    } else {
      this.listDetail = this.$route.query.c1;
      this.shopInfo = this.$route.query.c2;
      this.finalFoodNum = this.$route.query.c3;
      this.totalMoney = this.$route.query.c4;
      this.sex = this.$route.query.c5;
      for (let i = 0; i < this.finalFoodNum.length; i++) {
        if (this.finalFoodNum[i]) {
          this.numContainer.push(this.finalFoodNum[i]);
        }
      }
      let foodTotalMoney = 0;
      for (let i = 0; i < this.listDetail.length; i++) {
        foodTotalMoney +=
          parseInt(this.listDetail[i].price) * parseInt(this.numContainer[i]);
      }
      // console.log(foodTotalMoney);
      this.totalMoney =
        foodTotalMoney + 24149.5 + this.shopInfo.float_delivery_fee;
    }
  },

  methods: {
    go_back() {
      this.$router.push({ name: "Shop", query: { id: this.shopInfo.id } });
    },
    choice() {
      this.$router.push({
        name: "chioceLocation",
        query: {
          a1: this.listDetail,
          a2: this.shopInfo,
          a3: this.finalFoodNum,
          a4: this.totalMoney
        }
      });
    },
    gotoProfile() {
      this.$router.push("/profile");
    },
    login() {
      this.$store.state.loginPage = "order";
      this.$router.push({ name: "Login" });
    },
    changeType() {
      this.showCover = !this.showCover;
      this.showType = !this.showType;
    },
    addRemark() {
      this.showRemark = true;
    },
    backOrder() {
      this.showRemark = false;
    },
    changeSpicy(index) {
      let lis = document.querySelectorAll(".spicy");
      for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove("choosed");
        this.spicy = "";
      }
      lis[index].classList.add("choosed");
      this.spicy = lis[index].innerHTML;
    },
    changeCoriander() {
      let li = document.querySelector(".coriander");
      li.classList.toggle("choosed");
      if (li.classList.contains("choosed")) {
        this.coriander = li.innerHTML;
      } else {
        this.coriander = "";
      }
    },
    changeOnion() {
      let li = document.querySelector(".onion");
      li.classList.toggle("choosed");
      if (li.classList.contains("choosed")) {
        this.onion = li.innerHTML;
      } else {
        this.onion = "";
      }
    },
    changeVinegar() {
      let li = document.querySelector(".vinegar");
      li.classList.toggle("choosed");
      if (li.classList.contains("choosed")) {
        this.vinegar = li.innerHTML;
      } else {
        this.vinegar = "";
      }
    },
    changeShallot() {
      let li = document.querySelector(".shallot");
      li.classList.toggle("choosed");
      if (li.classList.contains("choosed")) {
        this.shallot = li.innerHTML;
      } else {
        this.shallot = "";
      }
    },
    changeIce(index) {
      let lis = document.querySelectorAll(".ice");
      for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove("choosed");
        this.ice = "";
      }
      lis[index].classList.add("choosed");
      this.ice = lis[index].innerHTML;
    },
    sumbit() {
      let arr = [
        this.spicy,
        this.coriander,
        this.onion,
        this.vinegar,
        this.textVal,
        this.shallot,
        this.ice
      ];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
          arr[i] = arr[i] + ",";
          this.remark += arr[i];
        }
      }
      this.remark = this.remark.slice(0, this.remark.length - 1);
      this.showRemark = false;
    },
    showInvoice() {
      this.show_invoice = !this.show_invoice;
    },
    changeImg() {
      this.showImg = !this.showImg;
    },
    placeOrder() {
      if (!localStorage.getItem("isLogin")) {
        this.alert1 = !this.alert1;
      }
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
@keyframes fromBottom {
  0% {
    transform: translateY(3rem);
  }
  100% {
    transform: translateY(0);
  }
}
.fromBottom-enter-active {
  animation: fromBottom 1s;
}
.fromBottom-leave-active {
  animation: fromBottom 0.5s reverse;
}
@keyframes maskBottom {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.maskBottom-enter-active {
  animation: maskBottom 1s;
}
.maskBottom-leave-active {
  animation: maskBottom 0.5s reverse;
}
@keyframes fromRight {
  0% {
    transform: translateX(1rem);
  }
  100% {
    transform: translateX(0);
  }
}
.fromRight-enter-active {
  animation: fromRight 0.2s ease-out;
}
.fromRight-leave-active {
  animation: fromRight 0.2s reverse ease-in;
}
.head_login {
  position: absolute;
  right: 0.129rem;
  font-size: 0.152rem;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
}
.user_avatar {
  fill: #fff;
  width: 0.188rem;
  height: 0.188rem;
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
.choosed {
  color: #fff;
  background-color: #3190e8;
}
.confirmOrderContainer {
  padding-top: 0.457rem;
  padding-bottom: 0.7031rem;
}
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.457rem;
}
.head_goback {
  width: 0.141rem;
  height: 0.2344rem;
  line-height: 0.5156rem;
  margin-left: 0.0938rem;
}
.head_login {
  position: absolute;
  top: 50%;
  right: 0.1289rem;
  font-size: 0.1523rem;
  color: #fff;
  transform: translateY(-50%);
}
.login_span {
  color: #fff;
  font-family: "Microsoft Yahei";
}
.title_head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.title_text {
  font-size: 0.1875rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
}
.address_container {
  display: flex;
  align-items: center;
  min-height: 0.82rem;
  justify-content: space-between;
  padding: 0 0.141rem;
  background: url(../../static/img/背景图.png) 0 100% repeat-x;
  background-color: #fff;
  background-size: auto 0.0281rem;
}
.address_empty_left {
  display: flex;
  align-items: center;
}
.location_icon {
  width: 0.1875rem;
  height: 0.1875rem;
  margin-right: 0.04688rem;
}
.add_address {
  font-size: 0.1641rem;
  color: #333;
  font-family: "Microsoft Yahei";
}
.delivery_model {
  border-left: 0.0469rem solid #3190e8;
  min-height: 0.9375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_style {
  background-color: #fff;
  margin-top: 0.09375rem;
  padding: 0 0.1641rem;
}
.confirmOrderContainer p {
  font-family: "Helvetica Neue,Tahoma,Arial";
}
.deliver_text {
  font-size: 0.1875rem;
  color: #333;
  font-weight: 700;
  padding-left: 0.0703rem;
}
.deliver_time {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.deliver_time p:first-of-type {
  font-size: 0.1641rem;
  color: #3190e8;
}
.deliver_time p:nth-of-type(2) {
  font-size: 0.12rem;
  color: #fff;
  background-color: #3190e8;
  width: 0.5625rem;
  margin-top: 0.1172rem;
  text-align: center;
  border-radius: 0.0281rem;
  padding: 0.02344rem;
  line-height: 0.16rem;
}
.container_style {
  background-color: #fff;
  margin-top: 0.0938rem;
  padding: 0 0.1641rem;
}
.header_style {
  display: flex;
  justify-content: space-between;
  line-height: 0.4688rem;
}
.header_style span:first-of-type {
  color: #666;
  font-size: 0.1641rem;
}
.more_type span:first-of-type {
  font-size: 0.141rem;
  color: #aaa;
  width: 2.344rem;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}
.address_empty_right {
  width: 0.1372rem;
}
.hongbo {
  display: flex;
  justify-content: space-between;
  border-top: 0.00578rem solid #f5f5f5;
}
.hongbo span {
  font-size: 0.141rem;
  color: #aaa;
  line-height: 0.4688rem;
}
.hongbo span:nth-of-type(2) {
  color: #aaa;
}
.food_list {
  background-color: #fff;
  margin-top: 0.094rem;
}
.food_list header {
  padding: 0.1641rem;
  border-bottom: 0.00578rem solid #f5f5f5;
}
.food_list header img {
  width: 0.2813rem;
  height: 0.2813rem;
  vertical-align: middle;
}
.food_list header span {
  font-size: 0.1875rem;
  color: #333;
}
.food_list_ul {
  padding-top: 0.1172rem;
}
.food_item_style {
  display: flex;
  justify-content: space-between;
  line-height: 0.4219rem;
  padding: 0 0.1641rem;
}
.food_item_style p {
  font-size: 0.1523rem;
  color: #666;
}
.food_name {
  width: 2.5781rem;
}
.num_price {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}
.food_item_style span {
  font-size: 0.1523rem;
  color: #666;
}
.num_price span:first-of-type {
  color: #f60;
}
.total_price {
  border-top: 0.00578rem solid #f5f5f5;
}
.pay_way .header_style {
  display: flex;
  justify-content: space-between;
  line-height: 0.4688rem;
}
.header_style span:first-of-type {
  color: #666;
  font-size: 0.1641rem;
}
.more_type span:first-of-type {
  font-size: 0.141rem;
  color: #aaa;
  width: 2.344rem;
  display: inline-block;
  text-align: right;
  vertical-align: middle;
}
.more_type img {
  width: 0.1172rem;
  height: 0.1172rem;
}
.pay_way .hongbo {
  display: flex;
  justify-content: space-between;
  border-top: 0.00578rem solid #f5f5f5;
}
.hongbo span {
  font-size: 0.141rem;
  color: #aaa;
  line-height: 0.4688rem;
}
.support_is_available span {
  color: #666;
}
.hongbo span:nth-of-type(2) {
  color: #aaa;
}
.hongbo span img {
  width: 0.1172rem;
  height: 0.1172rem;
  vertical-align: middle;
}
.confirm_order {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.4688rem;
}
.confirm_order p {
  line-height: 0.4688rem;
  font-size: 0.1758rem;
  color: #fff;
}
.confirm_order p:first-of-type {
  background-color: #3c3c3c;
  flex: 5;
  padding-left: 0.1641rem;
}
.confirm_order p:nth-of-type(2) {
  flex: 2;
  background-color: #56d176;
  text-align: center;
}
.cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 203;
}
.choose_type_container {
  min-height: 2.344rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 204;
}
.choose_type_container header {
  background-color: #fafafa;
  font-size: 0.1641rem;
  color: #333;
  text-align: center;
  line-height: 0.4688rem;
}
.choose_type_container ul li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1641rem;
  line-height: 0.5859rem;
}
.choose_type_container ul li span {
  color: #ccc;
  font-size: 0.1641rem;
}
.choose_type_container ul li img {
  width: 0.18rem;
}
.choose span {
  color: #333 !important;
}
.rating_page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  z-index: 204;
  padding-top: 0.457rem;
}
.quick_remark {
  background-color: #fff;
  margin-top: 0.0938rem;
  padding: 0 0.141rem 0.2344rem;
}
.header_style {
  color: #333;
  line-height: 0.4688rem;
  font-size: 0.1523rem;
}
.quick_remark ul {
  display: flex;
  flex-wrap: wrap;
}
.quick_remark ul li {
  margin-right: 0.151rem;
  margin-bottom: 0.281rem;
}
.quick_remark ul li span {
  font-size: 0.141rem;
  color: #333;
  padding: 0.07rem 0.141rem;
  border: 0.0058rem solid #3190e8;
}
.input_remark {
  background-color: #fff;
}
.quick_remark {
  background-color: #fff;
  margin-top: 0.0938rem;
  padding: 0 0.141rem 0.2344rem;
}
.header_style {
  font-size: 0.1523rem;
  color: #333;
  line-height: 0.4688rem;
}
.input_text {
  width: 100%;
  background-color: #f9f9f9;
  border: 0.0058rem solid #eee;
  resize: none;
  min-height: 1.055rem;
  border-radius: 0.04688rem;
  font-size: 0.141rem;
  color: #666;
  padding: 0.1172rem;
}
.determine {
  background-color: #4cd964;
  font-size: 0.1641rem;
  color: #fff;
  text-align: center;
  margin: 0 0.1641rem;
  line-height: 0.4219rem;
  border-radius: 0.04688rem;
}
.first {
  border-left: 0.0058rem solid #3190e8;
  border-top-left-radius: 0.0469rem;
  border-bottom-left-radius: 0.0469rem;
}
.last {
  border-top-right-radius: 0.0469rem;
  border-bottom-right-radius: 0.0469rem;
}
.choose_invoice {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  line-height: 0.5859rem;
  margin-top: 0.1172rem;
  padding: 0 0.1641rem;
}
.choose_invoice span {
  font-size: 0.1758rem;
  color: #333;
}
.choose_invoice img {
  width: 0.18rem;
}
.determine {
  background-color: #4cd964;
  font-size: 0.1641rem;
  color: #fff;
  text-align: center;
  margin: 0 0.1641rem;
  line-height: 0.4219rem;
  border-radius: 0.0469rem;
  margin-top: 0.1172rem;
}
</style>