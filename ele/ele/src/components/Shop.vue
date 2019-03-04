<template  >
  <div>
    <router-view class="fixed"></router-view>

    <div>
      <!-- 头部 -->
      <nav class="goback" @click="goBack()">
        <svg width="4rem" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline
            points="12,18 4,9 12,0"
            style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3;"
          ></polyline>
        </svg>
      </nav>
      <header class="shop_detail_header">
        <img :src="baseUrl + shopDetail.image_path" class="header_cover_img">
        <section class="description_header">
          <a class="description_top">
            <section class="description_left">
              <img :src="baseUrl + shopDetail.image_path">
            </section>
            <section class="description_right" @click="jump_detail()">
              <h4 class="description_title ellipsis">{{shopDetail.name}}</h4>
              <p class="description_text">商家配送 / 30分钟到达 / 配送费￥{{shopDetail.float_delivery_fee}}</p>
              <p class="description_promotion ellipsis">公告：{{shopDetail.promotion_info}}</p>
              <footer
                class="description_footer"
                v-if="shopDetail.activities && shopDetail.activities.length > 0"
                @click="showActivities"
              >
                <p class="ellipsis">
                  <span
                    class="tip_icon"
                    :style="'background-color:#'+shopDetail.activities[0].icon_color+';border-color:#'+shopDetail.activities[0].icon_color"
                  >{{shopDetail.activities[0].icon_name}}</span>
                  <span>{{ shopDetail.activities[0].description }}（APP专享）</span>
                </p>
                <p>{{ shopDetail.activities.length }}个活动 &nbsp;</p>

                <svg
                  width="14"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  class="footer_arrow"
                >
                  <path d="M0 0 L8 7 L0 14" stroke="#fff" stroke-width="1" fill="none"></path>
                </svg>
              </footer>
            </section>
            <svg
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              class="description_arrow"
            >
              <path d="M0 0 L8 7 L0 14" stroke="#fff" stroke-width="1" fill="none"></path>
            </svg>
          </a>
        </section>
      </header>
      <!-- 内容 -->
      <section class="change_show_type">
        <div>
          <span class="activity_show">商品</span>
        </div>
        <div>
          <span @click="goEvaluate">评价</span>
        </div>
      </section>
      <section class="food_container">
        <section class="menu_container">
          <section class="menu_left">
            <ul>
              <li
                class="menu_left_li"
                v-for="(item,index) in shop_goods"
                :class="index ==0 ? 'activity_menu' : '' "
                :key="index"
                @click="jumpToRight(index)"
              >
                <img :src="item.icon_url ? item.icon_url :'' ">
                <span>{{item.name}}</span>
                <span class="category_num" v-if="0"></span>
              </li>
            </ul>
          </section>
          <section class="menu_right">
            <ul>
              <li v-for="(goods,index) in shop_goods" :key="index" :id="'k' + index">
                <header class="menu_detail_header">
                  <section class="menu_detail_header_left">
                    <strong class="menu_item_title">{{goods.name}}</strong>
                    <span class="menu_item_description">{{goods.description}}</span>
                  </section>
                  <span class="menu_detail_header_right"></span>
                </header>
                <section
                  class="menu_detail_list"
                  v-for="(good,index) in goods.foods"
                  :key="index"
                  @click="showFood(good)"
                >
                  <div class="menu_detail_link">
                    <section class="menu_food_img">
                      <img :src="baseUrl+good.image_path">
                    </section>
                    <section class="menu_food_description">
                      <h3 class="food_description_head">
                        <strong class="description_foodname">{{good.name}}</strong>
                        <ul class="attributes_ul">
                          <li
                            class="attritube_new"
                            v-if="good.attributes[0] && good.attributes[0].icon_name =='新'"
                          >
                            <p>新品</p>
                          </li>
                          <li
                            class="attritube_main"
                            v-if="( good.attributes[0] &&   good.attributes[0].icon_name =='招牌') || (good.attributes[1] &&good.attributes[1].icon_name =='招牌'   )"
                          >
                            <p>招牌</p>
                          </li>
                        </ul>
                      </h3>
                      <p class="food_description_content">{{good.description}}</p>
                      <p class="food_description_sale_rating">
                        <span>月售{{good.month_sales}}份</span>
                        <span>好评率{{good.satisfy_rate}}%</span>
                      </p>
                      <p class="food_activity">
                        <span v-if="good.activity">{{good.activity.image_text }}</span>
                      </p>
                    </section>
                  </div>
                  <footer class="menu_detail_footer">
                    <section class="food_price">
                      <span>￥</span>
                      <span>{{good.specfoods[0].price}}</span>
                      <span v-if="good.specfoods.length > 1">起</span>
                    </section>
                    <section class="choose_specification" v-if="good.specfoods.length >1">
                      <div class="choose_icon_container">
                        <div v-if="shopDetail.num[good.item_id]">
                          <img src="../../static/img/灰色减.png" @click.stop="noticeUser">
                          <span class="choosenNum">{{shopDetail.num[good.item_id]}}</span>
                        </div>
                        <div class="show_chooselist" @click.stop="showChooselist(good)">选规格</div>
                      </div>
                    </section>
                    <section class="cart_module" v-if="good.specfoods.length == 1">
                      <section class="cart_button">
                        <div v-if="shopDetail.num[good.item_id]">
                          <img src="../../static/img/减.png" @click.stop="deleteSelectedFood(good)">
                          <span class="choosenNum">{{shopDetail.num[good.item_id] }}</span>
                        </div>
                        <img
                          src="../../static/img/加.png"
                          @click.stop="addSelectedFood($event,good);"
                          class="jump"
                        >
                      </section>
                    </section>
                  </footer>
                </section>
              </li>
            </ul>
          </section>
        </section>
        <section class="buy_cart_container">
          <section class="cart_icon_num">
            <div :class="cartScale ? 'scale_cart' : ''" class="container_con">
              <div
                class="cart_icon_container"
                :class="finalSum ? 'cart_icon_container_active' :'' "
              >
                <span class="cart_list_length" v-if="finalSum" v-text="jisuanNum()"></span>
                <div class="cart_icon" @click.stop="showList">
                  <img src="../../static/img/白色购物车.png">
                </div>
              </div>
            </div>
            <div class="cart_num">
              <div>￥{{finalSum}}</div>
              <div>配送费￥{{shopDetail.float_delivery_fee}}</div>
            </div>
          </section>
          <section class="gotopay" v-if="finalSum < shopDetail.float_minimum_order_amount">
            <span
              class="gotopay_button_style"
            >还差￥{{shopDetail.float_minimum_order_amount - finalSum}}起送</span>
          </section>
          <section class="gotopay gotopay_activity" v-else>
            <span class="gotopay_button_style" @click="goSettle">去结算</span>
          </section>
        </section>
      </section>

      <section class="activities_details" v-if="showActivity">
        <h2 class="activities_shoptitle">{{shopDetail.name}}</h2>
        <section class="activities_list">
          <header class="activities_title_style">
            <span>优惠信息</span>
          </header>
          <ul v-if="shopDetail.activities && shopDetail.activities.length >0">
            <li v-for="(info,index) in shopDetail.activities" :key="index">
              <span
                class="activities_icon"
                :style="'border-color:#'+info.icon_color+';background-color:#'+info.icon_color"
              >{{info.icon_name}}</span>
              <span>{{info.description}}（APP专享）</span>
            </li>
          </ul>
        </section>

        <section class="activities_shopinfo">
          <section class="activities_title_style">
            <span>商家公告</span>
          </section>
          <p>{{shopDetail.promotion_info}}</p>
        </section>
        <svg width="60" height="60" class="close_activities" @click="closeActivity">
          <circle cx="30" cy="30" r="25" stroke="#555" stroke-width="1" fill="none"></circle>
          <line
            x1="22"
            y1="38"
            x2="38"
            y2="22"
            style="stroke: rgb(153, 153, 153); stroke-width: 2;"
          ></line>
          <line
            x1="22"
            y1="22"
            x2="38"
            y2="38"
            style="stroke: rgb(153, 153, 153); stroke-width: 2;"
          ></line>
        </svg>
      </section>
      <p :class="addAnimation ?'show_delete_tip' :'' " v-if="addAnimation">多规格商品只能去购物车删除哦</p>
      <transition name="list">
        <section class="cart_food_list" v-show="showFoodList">
          <header>
            <h4>购物车</h4>
            <div>
              <img src="../../static/img/垃圾箱.png">
              <span class="clear_cart" @click="clearCart">清空</span>
            </div>
          </header>
          <section>
            <ul>
              <li class="cart_food_li" v-for="(every,index) in selected_kind" :key="index">
                <div class="cart_list_num">
                  <p class="ellipsis">{{every.name}}</p>
                  <p class="ellipsis">{{every.description}}</p>
                </div>
                <div class="cart_list_price">
                  <span>￥</span>
                  <span>{{every.price}}</span>
                </div>
                <section class="cart_list_control">
                  <span>
                    <img src="../../static/img/减.png">
                  </span>
                  <span class="cart_num1">{{ every.num }}</span>
                  
                  <span>
                    <img src="../../static/img/加.png">
                  </span>
                </section>
              </li>
            </ul>
          </section>
        </section>
      </transition>

      <div
        class="screen_over"
        v-show="showMask"
        @click="this.showFoodList = !this.showFoodList;this.showMask = !this.showMask"
      ></div>

      <section v-if="show_specs">
        <div class="specs_cover"></div>
        <div class="specs_list">
          <header class="specs_list_header">
            <h4 class="ellipsis">{{good.name}}</h4>
            <img src="../../static/img/关闭.png" @click="closeSpecs()">
          </header>
          <section class="specs_details">
            <h5 class="specs_details_title">规格</h5>
            <ul>
              <li
                @click="changeSpec(index)"
                v-for="(sp,index) in good.specfoods"
                :key="index"
              >{{sp.specs_name}}</li>
            </ul>
          </section>
          <footer class="specs_footer">
            <div class="specs_price">
              <span>￥</span>
              <span>{{selected_spec}}</span>
            </div>
            <div class="specs_addto_cart" @click="specfoodsSelect(good)">加入购物车</div>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "Shop",
  data() {
    return {
      showDeleteButton: false,
      shopDetail: {},
      shop_goods: [],
      baseUrl: "//elm.cangdu.org/img/",
      showActivity: false,
      showFoodDetail: false,
      shopShow: true,
      show_specs: false,
      cartScale: false,
      good: "",
      selected_spec: "",
      shopid: "",
      selected_situation: [],
      selected_kind: [],
      finalFoodNum: [],
      category: [],
      selected_num: 0,
      showNum: false,
      finalSum: 0,
      finalNum: 0,
      addAnimation: false,
      showFoodList: false,
      showMask: false,
      showCategoryNum: false,
      ball: false
    };
  },
  created() {
    this.shopShow = true;
    this.shopid = this.$route.query.id;
    let id = this.$route.query.id;
    this.$http({
      method: "get",
      url: "https://elm.cangdu.org/shopping/restaurant/" + id
    }).then(res => {
      console.log(res);
      this.shopDetail = res.data;
      this.$store.state.shopInfo = this.shopDetail;
      this.$set(this.shopDetail, "num", "");
    });

    this.$http({
      method: "get",
      url: "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" + id
    }).then(res => {
      console.log(res.data);
      this.shop_goods = res.data;

      for (let i = 0; i < this.shop_goods.length; i++) {
        if (this.shop_goods[i].icon_url) {
          let s = this.shop_goods[i].icon_url;
          this.shop_goods[i].icon_url =
            "https://fuss10.elemecdn.com/" +
            s.slice(0, 1) +
            "/" +
            s.slice(1, 3) +
            "/" +
            s.slice(3) +
            ".jpeg";
        }
      }
    });
  },
  mounted() {
    //  $('.jump').on('click',this.jumpImg)
    let title = document.getElementsByClassName("menu_detail_header");
    let menu = document.getElementsByClassName("menu_right")[0];
    let lis = document.getElementsByClassName("menu_left_li");
    menu.addEventListener("scroll", function() {
      for (let i = 0; i < title.length; i++) {
        if (menu.scrollTop >= title[i].offsetTop) {
          for (let a = 0; a < lis.length; a++) {
            lis[a].classList.remove("activity_menu");
          }
          lis[i].classList.add("activity_menu");
        }
      }
    });
  },
  computed: {
    finalExactNum() {
      let arr = [];
      for (let i = 0; i < this.finalFoodNum.length; i++) {
        if (this.finalFoodNum[i]) {
          arr.push(this.finalFoodNum[i]);
        }
      }
      return arr;
    }
  },
  methods: {
    goBack() {
      this.$router.push({name: "Takeout"});
    },
    jumpToRight(index) {
      let id = "k" + index;
      let right = document.getElementById(id);
      let lis = document.getElementsByClassName("menu_left_li");
      for (let i = 0; i < lis.length; i++) {
        lis[i].classList.remove("activity_menu");
      }
      lis[index].classList.add("activity_menu");
      let menu = document.getElementsByClassName("menu_right")[0];
      menu.scrollTo({
        top: right.offsetTop,
        behavior: "smooth"
      });
    },
    jump_detail() {
      this.$router.push({
        name: "shopDetail",
        params: { shopid: this.shopid }
      });
    },
    clearCart() {
      this.showFoodList = !this.showFoodList;
      this.showMask = !this.showMask;
      this.finalSum = 0;
      this.selected_situation = [];
      this.shopDetail.num = [];
      this.finalFoodNum = [];
    },
    showActivities() {
      this.showActivity = true;
    },
    closeActivity() {
      this.showActivity = false;
    },
    showFood(good) {
      this.showFoodDetail = true;
      this.$router.push({ name: "FoodDetail", query: { clickGood: good } });
    },
    goSettle() {
      this.$store.state.shopID = this.shopDetail.id;
      this.$store.state.finalFoodNum = this.finalFoodNum;
      this.$router.push({
        name: "ConfirmOrder",
        query: {
          shopDetail: this.shopDetail,
          selected_kind: this.selected_kind,
          finalFoodNum: this.finalFoodNum
        }
      });
    },
    showChooselist(good) {
      console.log(good);
      this.good = good;
      this.selected_spec = this.good.specfoods[0].price;
      this.show_specs = true;
      setTimeout(function() {
        /* 变样式 */
        let arr = document.querySelectorAll(".specs_details li");
        console.log(arr);
        arr[0].style.color = "#3199e8";
        arr[0].style.borderColor = "#3199e8";
      }, 20);
      let id = good.item_id;
      if (this.shopDetail.num[id]) {
        this.selected_situation[id] += 1;
      } else {
        this.selected_situation[id] = 1;
      }
      let arr = this.selected_situation;
      this.shopDetail.num = [...arr];
    },
    closeSpecs() {
      this.show_specs = false;
    },
    noticeUser() {
      this.addAnimation = true;
      setTimeout(() => {
        this.addAnimation = false;
      }, 3000);
    },
    goEvaluate(){
      this.$router.push({
        name:'Evaluate',
        query:{
          shopID:this.shopDetail.id,
          shopDetail:this.shopDetail
          }
      })

    },
    changeSpec(index) {
      /* 变样式 */
      let arr = document.querySelectorAll(".specs_details li");
      for (let i = 0; i < arr.length; i++) {
        arr[i].style.color = "#333";
        arr[i].style.borderColor = "#ddd";
      }
      arr[index].style.color = "#3199e8";
      arr[index].style.borderColor = "#3199e8";
      /* 变数据 */
      this.selected_spec = this.good.specfoods[index].price;
      this.selected_num = index;
      console.log(this.selected_num);
    },
    jumpImg(e) {
      let offset = $(".cart_icon").offset();
      let flyer = $(
        '<img width="20px" height="20px" src="../../static/img/加.png" />'
      );
      flyer.fly({
        start: {
          left: e.pageX,
          top: e.pageY
        },
        end: {
          left: offset.left,
          top: offset.top,
          width: 0,
          height: 0
        },
        onEnd: () => {
          this.cartScale = true;
          setTimeout(() => {
            this.cartScale = false;
          }, 400);
        }
      });
    },
    addSelectedFood(ev, good) {
      this.jumpImg(ev);
      // console.log( $('.jump') );

      console.log(good.item_id);
      let id = good.item_id;
      let kind = good.name;
      this.cartDetail(good);
      if (this.shopDetail.num[id]) {
        this.selected_situation[id] += 1;
      } else {
        this.selected_situation[id] = 1;
      }
      if (good.specfoods[0].num) {
        good.specfoods[0].num += 1;
      } else {
        good.specfoods[0].num = 1;
      }

      let arr = this.selected_situation;
      this.shopDetail.num = [...arr];

      this.showNum = true;
      let price = good.specfoods[0].price;
      this.calcucateSum(price);

      console.log(this.selected_kind);
    },
    deleteSelectedFood(good) {
      let id = good.item_id;
      let newNum = this.shopDetail.num[id] - 1;
      this.shopDetail.num.splice(id, 1, newNum);
      let price = -good.specfoods[0].price;
      this.calcucateSum(price);
      good.specfoods[0].num--;
    },
    calcucateSum(price) {
      let num = parseInt(price);
      this.finalSum += price;
      console.log(this.finalSum);
    },

    specfoodsSelect(good) {
      let k = {};
      k.item_id = good.item_id;
      k.name = good.name;
      k.price = good.specfoods[this.selected_num].price;
      k.food_id = good.specfoods[this.selected_num].food_id;
      k.description = good.specfoods[this.selected_num].specs_name;
      k.id = good.specfoods[this.selected_num].food_id;
      k.category_id = good.category_id;
      let a = true;
      for (let i = 0; i < this.selected_kind.length; i++) {
        if (this.selected_kind[i].id == k.id) {
          a = false;
        }
      }
      if (a) {
        this.selected_kind.push(k);
      }

      if (good.specfoods[this.selected_num].num) {
        good.specfoods[this.selected_num].num += 1;
      } else {
        good.specfoods[this.selected_num].num = 1;
      }
      console.log(good);
      if (this.finalFoodNum[good.specfoods[this.selected_num].food_id]) {
        this.finalFoodNum[good.specfoods[this.selected_num].food_id]++;
      } else {
        this.finalFoodNum[good.specfoods[this.selected_num].food_id] = 1;
      }

      this.$store.state.shopData = this.selected_kind;
      let price = this.selected_spec;
      this.calcucateSum(price);
      this.show_specs = false;
    },
    jisuanNum() {
      let q = 0;
      for (let i = 0; i < this.shopDetail.num.length; i++) {
        if (this.shopDetail.num[i]) {
          q += this.shopDetail.num[i];
        }
      }
      return q;
    },
    cartDetail(good) {
      let k = {};
      k.item_id = good.item_id;
      k.name = good.name;
      k.food_id = good.specfoods[0].food_id;
      k.price = good.specfoods[0].price;
      k.description = "";
      k.id = "";
      k.category_id = good.category_id;
      let a = true;

      if (this.finalFoodNum[good.specfoods[0].food_id]) {
        this.finalFoodNum[good.specfoods[0].food_id]++;
      } else {
        this.finalFoodNum[good.specfoods[0].food_id] = 1;
      }

      for (let i = 0; i < this.selected_kind.length; i++) {
        if (this.selected_kind[i].item_id == k.item_id) {
          a = false;
        }
      }

      if (a) {
        this.selected_kind.push(k);
      }
      this.$store.state.shopData = this.selected_kind;
    },
    showList() {
      console.log(this.shop_goods);
      for (let i = 0; i < this.shop_goods.length; i++) {
        for (let a = 0; a < this.shop_goods[i].foods.length; a++) {
          let quq = this.shop_goods[i].foods[a];
          for (let u = 0; u < this.selected_kind.length; u++) {
            if (quq.specfoods.length == 1) {
              if (quq.specfoods[0].food_id == this.selected_kind[u].food_id) {
                console.log(111);
                if (quq.specfoods[0].num) {
                  console.log(quq.specfoods[0].num);
                  1;

                  this.selected_kind[u].num = quq.specfoods[0].num;

                  console.log(this.selected_kind[u]);
                }
              }
            } else {
              if (quq.specfoods[0].food_id == this.selected_kind[u].food_id) {
                console.log(222);
                if (quq.specfoods[0].num) {
                  this.selected_kind[u].num = quq.specfoods[0].num;
                }
              } else {
                console.log(333);
                if (quq.specfoods[1].num) {
                  this.selected_kind[u].num = quq.specfoods[1].num;
                }
              }
            }
          }
        }
      }
      console.log(this.selected_kind);
      if (this.finalSum > 0) {
        this.showFoodList = !this.showFoodList;
        this.showMask = !this.showMask;
      }
    }
  }
};
</script>
<style scoped>
.flyer {
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 50%;
  background-color: #3190e8;
}
@keyframes list {
  0% {
    transform: translateY(0.5rem);
  }
  100% {
    transform: translateY(0);
  }
}
.list-enter-active {
  animation: list 0.2s linear;
}
.list-leave-active {
  animation: list 0.2s linear reverse;
}

@keyframes fadeInOut {
  0% {
    opacity: 0.8;
    z-index: 18;
  }
  25% {
    opacity: 0.8;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
@keyframes scale_cart {
  0% {
    transform: scale(0.8);
  }
  25% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
}
.container_con {
  width: 0.64rem;
  height: 0.64rem;
}
.ball {
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 50%;
  background-color: #3190e8;
  position: relative;
}
.activity_menu {
  background-color: #fff;
  border-left: 0.0352rem solid #3190e8;
}
.show_delete_tip {
  animation: fadeInOut 3s 1;
  position: fixed;
  top: 50%;
  left: 15%;
  width: 70%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: -1;
  font-size: 0.1524rem;
  color: #fff;
  text-align: center;
  padding: 0.12rem 0;
  border: 0.01rem;
  border-radius: 0.0586rem;
  opacity: 0;
}
.fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 30;
}
.goback {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.422rem;
  z-index: 11;
  padding-top: 0.047rem;
  padding-left: 0.047rem;
}
.goback svg {
  width: 0.938rem;
  height: 100%;
}
.shop_detail_header {
  z-index: 10;
  position: relative;
  overflow: hidden;
}
.header_cover_img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  filter: blur(0.1rem);
}
.description_header {
  position: relative;
  z-index: 10;
  background-color: rgba(119, 103, 137, 0.43);
  padding: 0.094rem 0 0.094rem 0.094rem;
  width: 100%;
  overflow: hidden;
}
.description_top {
  display: flex;
}
.description_left {
  margin-right: 0.07rem;
}
.description_left img {
  width: 0.6797rem;
  height: 0.6797rem;
  display: block;
  border-radius: 0.0352rem;
}
.description_right {
  flex: 1;
}
.description_title {
  color: #fff;
  font-size: 0.1875rem;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.07rem;
  font-family: "Microsoft Yahei";
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.description_text {
  font-size: 0.12rem;
  color: #fff;
  margin-top: 0.11rem;
  margin-bottom: 0.07rem;
  font-family: "Microsoft Yahei";
}
.description_promotion {
  font-size: 0.12rem;
  color: #fff;
  margin-top: 0.11rem;
  width: 2.695rem;
  font-family: "Microsoft Yahei";
}
.description_arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.15rem;
  z-index: 11;
}
.change_show_type {
  display: flex;
  background-color: #fff;
  padding: 0.18rem 0 0.18rem;
  border-bottom: 0.01rem solid #ebebeb;
}
.change_show_type div {
  flex: 1;
  text-align: center;
}
.change_show_type div span {
  font-size: 0.1523rem;
  padding: 0.0469rem 0.0234rem;
  border-bottom: 0.0281rem solid #fff;
  font-family: "Microsoft Yahei";
}
.change_show_type div .activity_show {
  color: #3190e8;
  border-color: #3190e8;
}
.food_container {
  display: flex;
  flex: 1;
  padding-bottom: 0.4688rem;
}
.menu_container {
  display: flex;
  flex: 1;
  overflow-y: hidden;
  position: relative;
}
.menu_left {
  width: 0.891rem;
  height: 5.89rem;
  overflow-y: auto;
}
.menu_left_li {
  padding: 0.1641rem 0.0703rem;
  border-bottom: 0.0058rem solid #ededed;
  box-sizing: border-box;
  position: relative;
}
.menu_left_li img {
  width: 0.1172rem;
  height: 0.141rem;
}
.activity_menu {
  background-color: #fff;
  border-left: 0.0352rem solid #3190e8;
}
.menu_left_li span {
  font-size: 0.141rem;
  color: #666;
}
.menu_right {
  flex: 4;
  height: 5.93rem;
  overflow-y: auto;
}
.menu_right::-webkit-scrollbar {
  display: none;
}
.menu_left::-webkit-scrollbar {
  display: none;
}
.menu_detail_header {
  width: 100%;
  padding: 0.094rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu_detail_header_left {
  width: 2.556rem;
  white-space: nowrap;
  overflow: hidden;
}
.menu_item_title {
  font-size: 0.1641rem;
  color: #666;
  font-weight: 700;
}
.menu_item_description {
  font-size: 0.12rem;
  color: #999;
  width: 30%;
  overflow: hidden;
}
.menu_detail_header_right {
  width: 0.1161rem;
  height: 0.2344rem;
  display: block;
  background-image: url(../../static/img/下载.png);
  background-repeat: no-repeat;
  background-size: 100% 0.0938rem;
  background-position: 0;
  position: relative;
  left: -0.2rem;
}
.menu_detail_list {
  background-color: #fff;
  padding: 0.141rem 0.094rem;
  border-bottom: 1px solid #f8f8f8;
  position: relative;
  overflow: hidden;
}
.menu_detail_link {
  display: flex;
}
.menu_food_img {
  margin-right: 0.094rem;
}
.menu_food_img img {
  width: 0.4688rem;
  height: 0.4688rem;
  display: block;
}
.menu_food_description {
  width: 100%;
}
.food_description_head {
  display: flex;
  justify-content: space-between;
  line-height: 0.21rem;
  vertical-align: middle;
  margin-bottom: 0.0469rem;
}
.description_foodname {
  font-size: 0.1641rem;
  color: #333;
  font-weight: 700;
  font-family: "Microsoft Yahei";
}
.food_description_content {
  font-size: 0.12rem;
  color: #999;
  line-height: 0.1406rem;
}
.food_description_sale_rating {
  line-height: 0.1875rem;
}
.food_description_sale_rating span {
  font-size: 0.12rem;
  color: #333;
}
.food_activity {
  line-height: 0.0938rem;
}
.food_activity span {
  font-size: 0.12rem;
  color: rgb(241, 136, 79);
  border: 1px solid rgb(240, 115, 115);
  border-radius: 0.07rem;
  padding: 0.01875rem;
  display: inline-block;
  transform: scale(0.8);
  margin-left: -0.082rem;
}
.menu_detail_footer {
  margin-left: 0.5625rem;
  font-size: 0;
  margin-top: 0.073rem;
  display: flex;
  justify-content: space-between;
}
.menu_detail_footer span {
  font-family: Helvetica Neue, Tahoma, Arial;
}
.menu_detail_footer span:first-of-type {
  font-size: 0.12rem;
  color: #f60;
  margin-right: 0.012rem;
}
.choosenNum {
  position: relative;
  top: -0.05rem;
}
.menu_detail_footer span:nth-of-type(2) {
  font-size: 0.164rem;
  color: #f60;
  font-weight: 700;
  margin-right: 0.07rem;
}
.menu_detail_footer span:nth-of-type(3) {
  font-size: 0.12rem;
  color: #666;
}
.choose_icon_container {
  display: flex;
  align-items: center;
}
.show_chooselist {
  display: block;
  font-size: 0.1289rem;
  color: #fff;
  padding: 0.04344rem 0.05988rem;
  background-color: #3190e8;
  border-radius: 0.04688rem;
  border: 0.01rem solid #3190e8;
  box-sizing: border-box;
}
.cart_button {
  display: flex;
  align-items: center;
  z-index: 22;
}
.cart_module img {
  width: 0.188rem;
}
.attributes_ul {
  display: flex;
}
.attritube_new {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #4cd964;
  width: 0.4219rem;
  height: 0.4219rem;
  display: flex;
  align-items: flex-end;
  transform: rotate(-45deg) translate(-0.03rem, -0.32rem);
  border: none;
  border-radius: 0;
}
.attritube_new p {
  white-space: nowrap;
  font-size: 0.12rem;
  text-align: center;
  color: #fff;
  flex: 1;
  transform: scale(0.8) translate(0.0234rem, -0.0234rem);
}
.attritube_main {
  font-size: 0.12rem;
  line-height: 0.082rem;
  padding: 0.0234rem;
  border: 0.01rem solid rgb(240, 115, 115);
  color: rgb(240, 115, 115);
  border-radius: 0.0703rem;
  margin-right: 0.0234rem;
  transform: scale(0.8);
}
.attritube_main p {
  white-space: nowrap;
}
.buy_cart_container {
  position: fixed;
  background-color: #3d3d3f;
  bottom: 0;
  left: 0;
  z-index: 33;
  display: flex;
  width: 100%;
  height: 0.4688rem;
}
.cart_icon_num {
  flex: 1;
}
.gotopay {
  position: absolute;
  right: 0;
  background-color: #535356;
  width: 1.117rem;
  height: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gotopay_activity {
  background-color: #4cd964;
}
.gotopay_button_style {
  font-size: 0.1641rem;
  color: #fff;
  font-weight: 700;
}
.cart_icon {
  width: 0.3513rem;
  height: 0.3513rem;
}
.cart_icon img {
  width: 100%;
  height: 100%;
  z-index: 15;
}
.cart_icon_activity {
  background-color: #3190e8;
}
.scale_cart {
  animation: scale_cart 1s linear;
}
.cart_icon_container {
  display: flex;
  position: absolute;
  background-color: #3d3d3f;
  /* background-color: #3190e8; */
  padding: 0.0938rem;
  border: 0.0422rem solid #444;
  border-radius: 50%;
  left: 0.1172rem;
  top: -0.1641rem;
}
.cart_icon_container_active {
  background-color: #3190e8;
}
.cart_list_length {
  position: absolute;
  top: -0.0586rem;
  right: -0.0586rem;
  background-color: #ff461d;
  line-height: 0.1641rem;
  text-align: center;
  border-radius: 50%;
  border: 0.0058rem solid #ff461d;
  min-width: 0.1641rem;
  height: 0.1641rem;
  font-size: 0.12rem;
  color: #fff;
  font-family: "Helvetica Neue, Tahoma, Arial";
}
.description_footer {
  display: flex;
  justify-content: space-between;
  margin-top: 0.1472rem;
  padding-right: 0.2344rem;
  position: relative;
}
.description_footer p {
  color: #fff;
  font-size: 0.12rem;
}
.description_footer p span {
  color: #fff;
}
.tip_icon {
  padding: 0 0.0094rem;
  border: 0.0058rem solid #fff;
  border-radius: 0.0234rem;
  font-size: 0.12rem;
  display: inline-block;
}
.footer_arrow {
  width: 0.1055rem;
  height: 0.1055rem;
  position: absolute;
  top: -0.05rem;
  right: 0.1203rem;
}
.description_footer p:first-of-type {
  position: relative;
  left: -0.77rem;
}
.activities_details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #262626;
  z-index: 200;
  padding: 0.293rem;
}
.activities_shoptitle {
  text-align: center;
  color: #fff;
  font-size: 0.1875rem;
}
.activities_list {
  margin-top: 0.3516rem;
  margin-bottom: 0.2344rem;
  font-size: 0.12rem;
  color: #fff;
}
.activities_title_style {
  text-align: center;
  margin-top: 0.4444rem;
  margin-bottom: 0.2344rem;
}
.activities_title_style span {
  font-size: 0.12rem;
  color: #fff;
  border: 0.0058rem solid #555;
  padding: 0.0469rem 0.0938rem;
  border-radius: 0.1172rem;
}
.activities_list li {
  margin-bottom: 0.0469rem;
}
.activities_icon {
  padding: 0 0.00469rem;
  display: inline-block;
  border: 0.00578rem solid #fff;
  border-radius: 0.0234rem;
}
.activities_list li span {
  color: #fff;
  line-height: 0.1406rem;
}
.activities_title_style {
  text-align: center;
  margin-bottom: 0.2344rem;
}
.activities_title_style span {
  font-size: 0.12rem;
  color: #fff;
  border: 0.00578rem solid #555;
  padding: 0.0469rem 0.0938rem;
  border-radius: 0.1172rem;
}
.activities_shopinfo p {
  line-height: 0.1461rem;
  font-size: 0.12rem;
  color: #fff;
}
.close_activities {
  position: absolute;
  left: 50%;
  bottom: 0.2344rem;
  transform: translateX(-50%);
}
.gotopay_button_style {
  font-size: 0.1641rem;
  color: #fff;
  font-weight: 700;
}
.cart_num {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.8203rem;
  font-family: "Microsoft Yahei";
}
.cart_num div {
  color: #fff;
}
.cart_num div:first-of-type {
  font-weight: 700;
  font-size: 0.1875rem;
  margin-bottom: 0.0234rem;
}
.cart_num div:nth-of-type(2) {
  font-size: 0.12rem;
}
.specs_cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 17;
}
.specs_list {
  position: fixed;
  top: 35%;
  left: 15%;
  width: 70%;
  background-color: #fff;
  z-index: 18;
  border: 1px;
  border-radius: 0.0469rem;
}
.specs_list_header h4 {
  font-size: 0.1641rem;
  color: #222;
  font-weight: 400;
  text-align: center;
  padding: 0.1172rem;
}
.specs_details {
  padding: 0.1172rem;
}
.specs_details_title {
  font-size: 0.141rem;
  color: #666;
}
.specs_details ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0.0938rem 0;
}
.specs_details ul li {
  font-size: 0.141rem;
  padding: 0.0703rem 0.1172rem;
  border: 0.01rem solid #ddd;
  border-radius: 0.0469rem;
  margin-right: 0.1172rem;
  margin-bottom: 0.0469rem;
}
.specs_activity {
  border-color: #3199e8;
  color: #3199e8;
}
.specs_footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f9f9f9;
  padding: 0.1172rem;
  border: 1px;
  border-bottom-left-radius: 0.0469rem;
  border-bottom-right-radius: 0.0469rem;
}
.specs_price span {
  color: #ff6000;
}
.specs_price span:first-of-type {
  font-size: 0.12rem;
}
.specs_price span:nth-of-type(2) {
  font-weight: 700;
  font-family: "Helvetica Neue,Tahoma";
  font-size: 0.1875rem;
}
.specs_addto_cart {
  width: 0.9375rem;
  height: 0.3047rem;
  background-color: #3199e8;
  border: 1px;
  border-radius: 0.0352rem;
  font-size: 0.141rem;
  color: #fff;
  text-align: center;
  line-height: 0.3047rem;
}
.specs_list_header img {
  position: absolute;
  top: 0.1172rem;
  right: 0.1172rem;
}
.cart_food_list {
  position: fixed;
  width: 100%;
  padding-bottom: 0.4688rem;
  z-index: 12;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
.cart_food_list header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.0703rem 0.141rem;
  background-color: #eceff1;
}
.cart_food_list header h4 {
  font-size: 0.1641rem;
  color: #666;
}
.cart_food_list header img {
  width: 0.141rem;
  height: 0.141rem;
  vertical-align: middle;
}
.clear_cart {
  font-size: 0.141rem;
  color: #666;
}
.cart_food_details {
  background-color: #fff;
  max-height: 4rem;
  overflow-y: auto;
}
.cart_food_li {
  display: flex;
  justify-content: space-between;
  padding: 0.141rem 0.1172rem;
}
.cart_list_num {
  width: 55%;
}
.cart_list_num p:first-of-type {
  font-size: 0.1641rem;
  color: #666;
  font-weight: 700;
}
.cart_list_num p:nth-of-type(2) {
  font-size: 0.12rem;
  color: #666;
}
.cart_list_price {
  font-size: 0;
}
.cart_list_price span:first-of-type {
  color: #f60;
  font-size: 0.141rem;
  font-family: "Helvetica Neue,Tahoma";
}
.cart_list_price span:nth-of-type(2) {
  font-size: 0.1641rem;
  color: #f60;
  font-family: "Helvetica Neue,Tahoma";
  font-weight: 700;
}
.cart_list_control {
  float: left;
}
.cart_list_control span {
  display: inline-block;
}
.cart_list_control img {
  width: 0.211rem;
  height: 0.211rem;
}
.cart_num {
  font-size: 0.1523rem;
  color: #666;
  min-width: 0.2344rem;
  text-align: center;
  font-family: "Helvetica Neue,Tahoma";
}
.screen_over {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 11;
}
.category_num {
  position: absolute;
  top: 0.0234rem;
  right: 0.0234rem;
  background-color: #ff461d;
  line-height: 0.141rem;
  text-align: center;
  border-radius: 50%;
  border: 0.0058rem solid #ff461d;
  min-width: 0.141rem;
  height: 0.141rem;
  font-size: 0.12rem;
  color: #fff;
  font-family: "Helvetica Neue,Tahoma,Arial";
}
</style>
