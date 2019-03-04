<template>
  <div class="food">
    <div class="food_nav">
      <div class="food_name">
        <i @click="go_back()" class="el-icon-arrow-left"></i>
        <h4>{{title}}</h4>
      </div>
      <div class="rank">
        <ul>
          <li @click="show_sweet()" class="dessert">
            <span>分类</span>
            <i class="el-icon-caret-bottom"></i>
          </li>
          <li @click="order_shows()" class="sort">
            <span>排序</span>
            <i class="el-icon-caret-bottom"></i>
          </li>
          <li @click="screen_shows()" class="screen">
            <span>筛选</span>
            <i class="el-icon-caret-bottom"></i>
          </li>
        </ul>
      </div>
      <transition name="fade">
        <div v-if="screen_show" class="filtrate">
          <div class="bird_father">
            <p class="send_way">配送方式</p>
            <ul>
              <li
                @click.stop="change_way(index, send.id)"
                class="bird_send"
                v-for="(send, index) in this.sendWay"
                :key="index"
              >
                <i v-if="wayArr.indexOf(send.id) !== -1" class="el-icon-check"></i>
                <i v-else class="iconfont bird">&#xe631;</i>
                <span class="big_bird">{{send.text}}</span>
              </li>
            </ul>
          </div>
          <div class="shop_pro">
            <p>商家属性(可以多选)</p>
            <ul>
              <li
                @click.stop="change_icon(index, pay.id)"
                v-for="(pay, index) in payWay"
                :key="index"
              >
                <i v-if="iconArr.indexOf(pay.id) !== -1" class="el-icon-check"></i>
                <span v-else class="one_word">{{pay.icon_name}}</span>
                <span class="word_mean">{{pay.name}}</span>
              </li>
            </ul>
          </div>
          <div class="btn">
            <button class="clear" @click="clear()">清空</button>
            <button v-if="count_num" class="enter" @click="enter()">确定({{count_num}})</button>
            <button v-else class="enter" @click="enter()">确定</button>
          </div>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="order_show" class="order">
          <ul>
            <li @click="jump_order(1)">
              <i class="el-icon-sort oneA"></i>
              <p>
                <span>智能排序</span>
              </p>
            </li>
            <li @click="jump_order(2)">
              <i class="el-icon-location-outline twoA"></i>
              <p>
                <span>距离最近</span>
              </p>
            </li>
            <li @click="jump_order(3)">
              <i class="iconfont threeA">&#xe60a;</i>
              <p>
                <span>销量最高</span>
              </p>
            </li>
            <li @click="jump_order(4)">
              <i class="iconfont fourA">&#xe607;</i>
              <p>
                <span>起送价最低</span>
              </p>
            </li>
            <li @click="jump_order(5)">
              <i class="el-icon-time fiveA"></i>
              <p>
                <span>配送速度最快</span>
              </p>
            </li>
            <li @click="jump_order(6)">
              <i class="el-icon-star-off sixA"></i>
              <p>
                <span>评分最高</span>
              </p>
            </li>
          </ul>
        </div>
      </transition>
      <transition name="fade">
        <div v-if="show" class="classify">
          <div class="left_name">
            <ul>
              <li
                class="lis"
                @click="show_right(index)"
                v-for="(msg, index) in msgs"
                @mouseup="change_style"
                :key="index"
              >
                <div class="left_me">
                  <img
                    class="img"
                    :src="msg.image_url.length < 17 ? baseUrl+msg.image_url : base_url+msg.image_url "
                  >
                  <span class="class_name">{{msg.name}}</span>
                </div>
                <div class="right_me">
                  <span class="right_arrow">></span>
                  <span class="count">{{msg.count}}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="right_detail">
            <ul>
              <li
                @click="jump_shopLists(mes.id)"
                v-for="(mes, index) in sub_categories"
                :key="index"
              >
                <span class="rice">{{mes.name}}</span>
                <span class="shop_count">{{mes.count}}</span>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <!-- 商家列表部分 -->
    <div class="shops" v-if="shopMsgs">
      <ul>
        <li
          @click="pass(shop.id, shop.location)"
          class="lists"
          v-for="(shop, index) in shopMsgs"
          :key="index"
        >
          <div class="shop_list">
            <div class="left_shop">
              <img :src="baseURL+shop.image_path" alt>
            </div>
            <div class="right_shop" v-if="shop">
              <ul>
                <li class>
                  <div class="left_mes">
                    <p class="brand">品牌</p>
                    <h4 class="shop_name">{{shop.name}}</h4>
                  </div>
                  <div class="right_mes">
                    <span class="vouch" v-for="(icon, index) in shop.supports" :key="index">
                      <span class="time">{{icon.icon_name}}</span>
                    </span>
                  </div>
                </li>
                <li class="score">
                  <div class="left_mes">
                    <span class="grade">
                      <el-rate
                        v-model="shop.rating"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}"
                        class="star"
                      ></el-rate>
                    </span>
                    <span class="sales">月售{{shop.recent_order_num}}单</span>
                  </div>
                  <div class="right_mes" v-if="shop.delivery_mode">
                    <span class="courier">{{shop.delivery_mode.text}}</span>
                    <span class="reach">{{shop.supports[1].name}}</span>
                  </div>
                </li>
                <li>
                  <div class="left_mes">
                    <span
                      class="least"
                    >￥{{shop.float_minimum_order_amount}}起送/配送费约{{shop.float_delivery_fee}}￥</span>
                  </div>
                  <div class="right_mes">
                    <span class="distance">{{shop.distance}}</span>
                    <span class="send_time">/{{shop.order_lead_time}}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      right_end: false,
      title: "",
      msgs: "",
      base_url: "https://fuss10.elemecdn.com",
      baseUrl: "https://elm.cangdu.org",
      baseURL: "//elm.cangdu.org/img/",
      imgurl: "",
      sub_categories: "",
      arr1: "",
      arr3: [],
      show: false,
      lat: "",
      long: "",
      shopMsgs: "",
      order_show: false,
      screen_show: false,
      sendWay: "",
      payWay: "",
      iconArr: [],
      wayArr: [],
      count_num: ""
    };
  },
  created() {
    // 请求配送方式接口
    this.send_to();
    console.log(this.$route);
    this.title = this.$route.query.title;
    //  请求商铺分类列表
    this.request();

    console.log(this.$route.query.geohash);
    let la = this.$route.query.geohash;
    let lon = la.split(",");
    // lon.join(" ");
    console.log(lon);
    this.lat = lon[0];
    this.long = lon[1];
    console.log(this.lat);
    console.log(this.long);
    //  请求接口数据
    this.request_shop();
  },
  methods: {
    pass(shopId, shopLoc) {
      console.log(shopId, shopLoc);
      this.$router.push({
        name: "Shop",
        query: {
          id: shopId,
          shop_loc: shopLoc
        }
      });
    },
    show_sweet() {
      this.show = !this.show;
      let spans = document.querySelector(".dessert span");
      let tags = document.querySelector(".dessert i");
      spans.classList.remove("new");
      tags.classList.remove("spin");
      let spans1 = document.querySelector(".sort span");
      let tags1 = document.querySelector(".sort i");
      spans1.classList.remove("new");
      tags1.classList.remove("spin");
      let spans2 = document.querySelector(".screen span");
      let tags2 = document.querySelector(".screen i");
      spans2.classList.remove("new");
      tags2.classList.remove("spin");
      if (this.show == true) {
        this.order_show = false;
        this.screen_show = false;
        spans.classList.add("new");
        tags.classList.add("spin");
      }
    },
    order_shows() {
      this.order_show = !this.order_show;
      let spans = document.querySelector(".dessert span");
      let tags = document.querySelector(".dessert i");
      spans.classList.remove("new");
      tags.classList.remove("spin");
      let spans1 = document.querySelector(".sort span");
      let tags1 = document.querySelector(".sort i");
      spans1.classList.remove("new");
      tags1.classList.remove("spin");
      let spans2 = document.querySelector(".screen span");
      let tags2 = document.querySelector(".screen i");
      spans2.classList.remove("new");
      tags2.classList.remove("spin");
      if (this.order_show == true) {
        this.show = false;
        this.screen_show = false;
        spans1.classList.add("new");
        tags1.classList.add("spin");
      }
    },
    screen_shows() {
      this.screen_show = !this.screen_show;
      let spans = document.querySelector(".dessert span");
      let tags = document.querySelector(".dessert i");
      spans.classList.remove("new");
      tags.classList.remove("spin");
      let spans1 = document.querySelector(".sort span");
      let tags1 = document.querySelector(".sort i");
      spans1.classList.remove("new");
      tags1.classList.remove("spin");
      let spans2 = document.querySelector(".screen span");
      let tags2 = document.querySelector(".screen i");
      spans2.classList.remove("new");
      tags2.classList.remove("spin");
      if (this.screen_show == true) {
        this.order_show = false;
        this.show = false;
        spans2.classList.add("new");
        tags2.classList.add("spin");
      }
    },
    change_way(num, mesId) {
      this.right_end = !this.right_end;
      if (this.wayArr.indexOf(mesId) === -1) {
        this.wayArr.push(mesId);
        this.count_num -= -1;
      } else {
        let index = this.wayArr.indexOf(mesId);
        this.wayArr.splice(index, 1);
        this.count_num -= 1;
      }
    },
    change_icon(num, mesId) {
      if (this.iconArr.indexOf(mesId) === -1) {
        this.iconArr.push(mesId);
        this.count_num -= -1;
      } else {
        let index = this.iconArr.indexOf(mesId);
        this.iconArr.splice(index, 1);
        this.count_num -= 1;
      }
      console.log(this.iconArr);
    },
    clear() {
      this.wayArr = [];
      this.iconArr = [];
      this.count_num = "";
      console.log(this.wayArr);
    },
    enter() {
      console.log(this.wayArr);
      console.log(this.iconArr);
      this.screen_show = false;
      let spans = document.querySelector(".dessert span");
      let tags = document.querySelector(".dessert i");
      spans.classList.remove("new");
      tags.classList.remove("spin");
      let spans1 = document.querySelector(".sort span");
      let tags1 = document.querySelector(".sort i");
      spans1.classList.remove("new");
      tags1.classList.remove("spin");
      let spans2 = document.querySelector(".screen span");
      let tags2 = document.querySelector(".screen i");
      spans2.classList.remove("new");
      tags2.classList.remove("spin");
      this.$http({
        method: "get",
        url: "https://elm.cangdu.org/shopping/restaurants",
        params: {
          latitude: this.lat,
          longitude: this.long,
          delivery_mode: this.wayArr,
          support_ids: this.iconArr
        }
      }).then(res => {
        console.log(res.data);
        this.shopMsgs = res.data;
      });
    },
    send_to() {
      this.$http({
        method: "get",
        url: "https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes"
      }).then(res => {
        console.log(res.data);
        this.sendWay = res.data;
      }),
        this.$http({
          method: "get",
          url:
            "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes"
        }).then(res => {
          console.log(res.data);
          this.payWay = res.data;
        });
    },
    jump_order(num) {
      this.order_show = false;
      let spans = document.querySelector(".dessert span");
      let tags = document.querySelector(".dessert i");
      spans.classList.remove("new");
      tags.classList.remove("spin");
      let spans1 = document.querySelector(".sort span");
      let tags1 = document.querySelector(".sort i");
      spans1.classList.remove("new");
      tags1.classList.remove("spin");
      let spans2 = document.querySelector(".screen span");
      let tags2 = document.querySelector(".screen i");
      spans2.classList.remove("new");
      tags2.classList.remove("spin");
      console.log(num);
      this.$http({
        method: "get",
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.lat +
          "&longitude=" +
          this.long +
          "&order_by=" +
          num
      }).then(res => {
        console.log(res);
        this.shopMsgs = res.data;
      });
    },
    jump_shopLists(num) {
      this.show = false;
      let spans = document.querySelector(".dessert span");
      let tags = document.querySelector(".dessert i");
      spans.classList.remove("new");
      tags.classList.remove("spin");
      let spans1 = document.querySelector(".sort span");
      let tags1 = document.querySelector(".sort i");
      spans1.classList.remove("new");
      tags1.classList.remove("spin");
      let spans2 = document.querySelector(".screen span");
      let tags2 = document.querySelector(".screen i");
      spans2.classList.remove("new");
      tags2.classList.remove("spin");
      console.log(num);
      this.$http({
        method: "get",
        url:
          "https://elm.cangdu.org/shopping/restaurants?latitude=" +
          this.lat +
          "&longitude=" +
          this.long +
          "&restaurant_category_ids[]=" +
          num
      }).then(res => {
        console.log(res.data);
        this.shopMsgs = res.data;
      });
    },
    request() {
      this.$http({
        method: "get",
        url: "https://elm.cangdu.org/shopping/v2/restaurant/category"
      }).then(res => {
        console.log(res);
        console.log(res.data);
        this.msgs = res.data;
        this.get_url(this.msgs);
        console.log(this.arr3);
        console.log(this.msgs);
      });
    },
    go_back() {
      // 点击返回上一级
      this.$router.go(-1);
      // this.$router.back();
    },
    get_url(mes) {
      for (let index = 0; index < mes.length; index++) {
        let arr2 = mes[index].image_url.split("");
        arr2.splice(32, 0, ".");
        arr2.splice(0, 0, "/");
        arr2.splice(2, 0, "/");
        arr2.splice(5, 0, "/");
        console.log(mes[index].image_url.length);
        if (mes[index].image_url.length == 36) {
          arr2.splice(35, 0, "jpeg");
          mes[index].image_url = arr2.join("");
        } else if (mes[index].image_url.length == 35) {
          arr2.splice(35, 0, "png");
          mes[index].image_url = arr2.join("");
        } else {
          mes[index].image_url = "/img/default.jpg";
        }
      }
    },
    request_shop() {
      console.log(this.lat);
      let api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.lat +
        "&longitude=" +
        this.long;
      this.$http({
        method: "get",
        url: api
      }).then(res => {
        console.log("11111", res.data);
        this.shopMsgs = res.data;
        console.log(res.data);
      });
    },
    show_right(num) {
      console.log(num);
      this.sub_categories = this.msgs[num].sub_categories;
      console.log(this.sub_categories);
    },
    change_style(e) {
      console.log(e.target.parentNode.tagName);
      let tarArr = document.querySelectorAll(".lis");
      for (let index = 0; index < tarArr.length; index++) {
        tarArr[index].style.backgroundColor = "#f5f5f5";
      }
      if (e.target.parentNode.tagName == "LI") {
        e.target.parentNode.style.backgroundColor = "#fff";
      } else {
        e.target.parentNode.parentNode.style.backgroundColor = "#fff";
      }
    }
  }
};
</script>
<style scoped>
.new {
  color: #3190e8;
}
.spin {
  color: #3190e8 !important;
  transform: rotate(180deg);
  transform-origin: center center;
  transition: all 0.3s linear;
}
.enter {
  outline: none;
}
.clear {
  outline: none;
}
.el-icon-check {
  font-size: 0.18rem;
  color: #3190e8;
  font-weight: 800;
}
.bird_father li span {
  font-size: 0.12rem;
}
.shop_pro p {
  font-size: 0.12rem;
}
.oneA {
  color: rgb(59, 135, 200);
}
.twoA {
  color: rgb(42, 155, 211);
}
.threeA {
  color: rgb(240, 115, 115);
}
.fourA {
  color: rgb(230, 182, 26);
}
.fiveA {
  color: rgb(55, 199, 183);
}
.sixA {
  color: rgb(235, 165, 59);
}
.bird {
  color: rgb(0, 137, 207);
}
.shop_pro li {
  border-radius: 0.05rem;
}
.shop_pro li span:first-child {
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: center;
  border-radius: 0.05rem;
  margin: 0 0.05rem;
}
.shop_pro li:first-child .one_word,
.shop_pro li:nth-child(3) .one_word {
  color: rgb(63, 189, 230);
  border: 0.01rem solid rgb(63, 189, 230);
}
.shop_pro li:last-child .one_word,
.shop_pro li:nth-child(2) .one_word {
  color: rgb(153, 153, 153);
  border: 0.01rem solid rgb(153, 153, 153);
}
.shop_pro li:nth-child(4) .one_word {
  color: rgb(232, 132, 45);
  border: 0.01rem solid rgb(232, 132, 45);
}
.shop_pro li:nth-child(5) .one_word {
  color: rgb(255, 78, 0);
  border: 0.01rem solid rgb(255, 78, 0);
}
.shop_pro li .word_mean {
  font-size: 0.12rem;
}
.big {
  font-size: 0.2rem;
}
.btn {
  width: 100%;
  overflow: hidden;
  background: #f5f5f5;
}
.clear {
  width: 45%;
  height: 0.4rem;
  background: #fff;
  border: 0;
  font-size: 0.18rem;
  margin: 0.1rem 0.1rem 0.15rem;
  border-radius: 0.07rem;
}
.enter {
  width: 45%;
  height: 0.4rem;
  background: #56d176;
  border: 0;
  font-size: 0.18rem;
  font-weight: 300;
  color: #fff;
  border-radius: 0.07rem;
}
.shop_pro {
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.2rem;
  margin-left: 2%;
  margin-top: 0.2rem;
}
.shop_pro p {
  margin-bottom: 0.2rem;
}
.shop_pro li {
  width: 30%;
  height: 0.3rem;
  margin-right: 2%;
  margin-bottom: 0.1rem;
  float: left;
  border: 0.01rem solid #eee;
}
.filtrate {
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.filtrate .bird_father {
  width: 100%;
}
.filtrate .send_way {
  height: 0.2rem;
  line-height: 0.2rem;
  margin-left: 2%;
  color: #333;
  font-size: 0.15rem;
}
.filtrate .bird_send {
  width: 25%;
  height: 0.3rem;
  margin-left: 2%;
  margin-top: 0.1rem;
  border: 0.01rem solid #eee;
  border-radius: 0.1rem;
}
.filtrate span,
i {
  font-size: 0.15rem;
  line-height: 0.3rem;
}
.filtrate span {
  color: #333;
}
.filtrate i {
  margin-left: 0.05rem;
}

.order {
  width: 100%;
  overflow: hidden;
  background: #fff;
}
.order li {
  width: 100%;
  height: 0.5rem;
}
.order li i {
  float: left;
  margin-left: 5%;
  line-height: 0.5rem;
}
.order li p {
  width: 85%;
  line-height: 0.5rem;
  float: right;
  border-bottom: 0.01rem solid lightgray;
}
/* vue动画 */
.fade-enter,
.fade-leave-to {
  /* transform: translateY(-3.6rem); */
  opacity: 0;
  height: 0;
}
.fade-enter-active,
.fade-leave-active {
  /* 定义动画效果 */
  /* height: 0; */
  /* opacity: 1; */
  transition: all 1s;
}
.food {
  position: relative;
}
.food_nav {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
}
.food_name {
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
}
.el-icon-arrow-left {
  color: #fff;
  font-size: 0.25rem;
  line-height: 0.5rem;
  margin-left: 0.05rem;
}
.food_name h4 {
  float: right;
  color: #fff;
  font-size: 0.2rem;
  font-weight: 700;
  line-height: 0.5rem;
  text-align: center;
  margin-right: 1.5rem;
  margin-top: 0.03rem;
}

.rank {
  width: 100%;
  height: 0.4rem;
  background: #fff;
  border-bottom: 0.01rem solid #e4e4e4;
}
.rank ul {
  width: 100%;
  overflow: hidden;
  padding-top: 0.04rem;
}
.rank li {
  width: 33.1%;
  float: left;
  text-align: center;
  line-height: 0.3rem;
}
.rank .dessert {
  color: #333;
  margin-top: -0.03rem;
  border-right: 0.01rem solid #e4e4e4;
}
.rank .sort {
  color: #333;
  margin-top: -0.03rem;
  border-right: 0.01rem solid #e4e4e4;
}
.rank .screen {
  color: #333;
  margin-top: -0.03rem;
}
.el-icon-caret-bottom {
  color: #666;
}
.classify {
  width: 100%;
  height: 3.6rem;
  z-index: 5;
  position: absolute;
  top: 0.9rem;
}
.left_name {
  z-index: 5;
  width: 50%;
  height: 3.6rem;
  float: left;
  background: #f5f5f5;
}

.left_name li {
  width: 100%;
  color: #666;
  height: 0.4rem;
}
.left_name .left_me {
  float: left;
  width: 60%;
  height: 0.4rem;
}
.left_name .right_me {
  width: 33%;
  float: right;
  height: 0.4rem;
  margin-right: 7%;
}
.left_name .right_me .count {
  height: 0.2rem;
  line-height: 0.2rem;
  display: inline-block;
  font-size: 0.13rem;
  background: #ccc;
  color: #fff;
  border-radius: 0.1rem;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}
.left_name .right_me .right_arrow {
  color: #ccc;
}
.left_me img {
  width: 0.2rem;
}
.left_me .img {
  vertical-align: middle;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.left_me .class_name {
  font-size: 0.12rem;
  line-height: 0.4rem;
}
.right_me span {
  line-height: 0.4rem;
  float: right;
}
/* 异国料理 */
/* .left_name li:first-child .left_me img,
.left_name li:first-child .right_me .right_arrow {
  display: none;
}
.left_name li:first-child .left_me .class_name {
  margin-left: 0.1rem;
} */
.right_detail {
  z-index: 5;
  width: 50%;
  height: 3.6rem;
  float: left;
  background: #fff;
  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
}
.right_detail li {
  width: 92%;
  height: 0.4rem;
  margin-left: 6%;
  margin-right: 2%;
  border-bottom: 0.01rem solid #e4e4e4;
}
.right_detail .rice {
  float: left;
  color: #666;
  font-size: 0.14rem;
  line-height: 0.4rem;
}
.right_detail .shop_count {
  float: right;
  color: #666;
  margin-right: 0.08rem;
  font-size: 0.14rem;
  line-height: 0.4rem;
}

/* 商铺列表的样式 */
.shops {
  margin-top: 0.9rem;
  background: #fff;
  padding-top: 0.02rem;
}

.shops .lists {
  margin-top: 0.2rem;
  width: 100%;
  height: 1rem;
  border-bottom: 0.01rem solid lightgray;
}
.shop_list {
  width: 100%;
  height: 0.8rem;
}
.left_shop {
  float: left;
  width: 20%;
  height: 0.8rem;
  margin-left: 3%;
  margin-right: 3%;
}
.left_shop img {
  width: 100%;
  height: 0.7rem;
}
.right_shop {
  float: right;
  width: 71%;
  height: 0.8rem;
  margin-right: 3%;
}
.right_shop .left_mes {
  float: left;
  font-size: 0.12rem;
}
.right_shop .right_mes {
  float: right;
  font-size: 0.12rem;
}
.right_shop li {
  overflow: hidden;
}
.right_shop li:first-child {
  margin-bottom: 0.15rem;
}
.right_shop li:last-child {
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  margin-left: -0.03rem;
}
.right_shop li:last-child .left_mes {
  transform: scale(0.9);
}
.right_shop li:last-child .right_mes {
  transform: scale(0.9);
}
.right_shop .left_mes .shop_name {
  display: inline;
  font-size: 0.17rem;
  color: #333;
}
.right_shop .left_mes .brand {
  display: inline-block;
  width: 0.3rem;
  height: 0.15rem;
  line-height: 0.15rem;
  background: #ffd930;
  color: #333;
  text-align: center;
}
.right_mes .vouch {
  font-size: 0.12rem;
  color: #999;
  letter-spacing: 0.02rem;
}
.right_mes .vouch .time {
  border: 0.01rem solid lightgray;
}
/* 评分以及星级样式 */

.left_mes .star {
  float: left;
  margin-left: -0.25rem;
  transform: scale(0.6);
}
.left_mes .sales {
  float: right;
  color: #666;
  margin-left: -20px;
}
.score {
  overflow: hidden;
}
.right_mes .courier {
  color: #fff;
  background: #3190e8;
}
.right_mes .reach {
  color: #3190e8;
  background: #fff;
  border: 0.01rem solid #3190e8;
}
.right_mes .send_time {
  color: #3190e8;
  font-size: 0.12rem;
}
.right_mes .distance {
  color: #999;
}
.left_mes .least {
  color: #666;
}
.score .left_mes .scales {
  transform: scale(0.6);
}
.score .right_mes {
  transform: scale(0.9);
}
</style>
