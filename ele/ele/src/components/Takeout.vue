<template>
  <div class="takeout">
    <!-- 外卖导航头部部分 -->
    <div class="takeout_nav">
      <el-row>
        <el-col :span="4">
          <div class="grid-content">
            <i @click="goSearch()" class="el-icon-search"></i>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content">
            <router-link to="/home">
              <span class="address">{{address}}</span>
            </router-link>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <router-link to="/profile" class="head_login" v-if="judgeLogin">
              <svg data-v-cec0c0c0 class="user_avatar">
                <use data-v-cec0c0c0 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user">
                  <svg viewBox="0 0 28 33" id="user" width="100%" height="100%">
                    <path
                      fill-rule="evenodd"
                      d="M20.798 19.289c2.636-2.002 4.215-5.091 4.215-8.437 0-5.886-4.845-10.647-10.808-10.647S3.397 4.966 3.397 10.852c0 3.345 1.578 6.433 4.212 8.435l.264-2.678C4.358 18.32 1.591 21.403.168 25.187l1.478.556v-1.579c-1.485.73-1.485.73-1.501 1.079-.054.188-.054.188-.069.278a2.58 2.58 0 0 0-.026.229 9.112 9.112 0 0 0-.019.4c-.008.265-.014.617-.018 1.039-.005.511-.006 1.037-.006 1.451v.027c-.004 1.732 1.41 3.129 3.154 3.129h22.082a3.18 3.18 0 0 0 3.172-3.153l.011-1.305.008-.897.003-.296.001-.083v-.022-.006-.001l.002-.278-.093-.262c-1.385-3.918-4.203-7.122-7.812-8.88l.263 2.678zm-1.911-2.516l-2.045 1.553 2.309 1.125c2.856 1.392 5.106 3.949 6.218 7.093l-.09-.54V26.033l-.001.083-.003.296-.008.897-.011 1.305c0 .01-.011.021-.013.021H3.161c-.007 0 .005.011.005.032v-.031c0-.404.001-.92.006-1.418.004-.4.01-.732.017-.969.004-.121.008-.212.012-.262l-.006.043c-.009.06-.009.06-.058.229-.01.336-.01.336-1.49 1.063H2.74l.385-1.024c1.141-3.035 3.35-5.495 6.131-6.849l2.309-1.124-2.045-1.554c-1.859-1.412-2.964-3.576-2.964-5.92 0-4.129 3.418-7.488 7.649-7.488s7.649 3.359 7.649 7.488c0 2.344-1.106 4.509-2.966 5.921z"
                      class="path1"
                    ></path>
                  </svg>
                </use>
              </svg>
            </router-link>
            <router-link to="/login" v-else class="head_word">
              <span>登录|注册</span>
            </router-link>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 轮播图 -->
    <div class="swiper">
      <template>
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->
          <swiper-slide class="store">
            <div
              @click="skip_food(swiper.title, swiper.id)"
              v-for="(swiper,index) in async_swiper"
              :key="index"
            >
              <img :src="base_url+swiper.image_url" alt>
              <p>{{swiper.title}}</p>
            </div>
          </swiper-slide>
          <swiper-slide class="store">
            <div
              @click="skip_food(swiper.title, swiper.id)"
              v-for="(swiper,index) in async_data"
              :key="index"
            >
              <img :src="base_url+swiper.image_url" alt>
              <p>{{swiper.title}}</p>
            </div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </template>
    </div>
    <!-- 附近商家 -->
    <div class="near-shops">
      <!-- logo部分 -->
      <div class="logo_shops">
        <span class="iconfont">&#xe618;</span>
        <span class="near">附近商家</span>
      </div>
      <!-- 商家列表部分 -->
      <div class="shops">
        <ul>
          <li
            @click="pass(shop.id, shop.location)"
            class="lists"
            v-for="(shop, index) in shopMsgs"
            :key="index"
          >
            <div class="shop_list">
              <div class="left_shop">
                <img :src="baseUrl+shop.image_path" alt>
              </div>
              <div class="right_shop">
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
                    <div class="right_mes">
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
  </div>
</template>
<script>
export default {
  name: "carrousel",
  data() {
    return {
      judgeLogin: false,
      geohash: "",
      jwd: "",
      address: "",
      latitude: "",
      longitude: "",
      shopMsgs: "",
      loct: "",
      baseUrl: "//elm.cangdu.org/img/",
      base_url: "http://fuss10.elemecdn.com",
      async_swiper_data: null,
      async_swiper: null,
      async_data: null,
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    };
  },
  created() {
    console.log(this.$route);
    console.log(this.$route.query.latitude);
    console.log(this.$route.query.longitude);
    this.latitude = this.$route.query.latitude;
    this.longitude = this.$route.query.longitude;
    if (localStorage.getItem("isLogin") == "true") {
      this.judgeLogin = true;
    }
    console.log(this.$route.query.geohash);
    this.jwd = this.$route.query.geohash;
    // 请求轮播图片
    this.request_swiper();
    // 请求城市名
    this.request_city();
    // 请求商铺列表
    this.request_shop();
  },
  methods: {
    goSearch() {
      this.$router.push(
        "/search?geohash=" + localStorage.getItem("userGeohash")
      );
    },
    request_swiper() {
      let api = "https://elm.cangdu.org/v2/index_entry";
      this.$http({
        method: "get",
        url: api
      }).then(res => {
        console.log("#####", res);
        this.async_swiper_data = res.data;
        this.async_swiper = res.data.slice(0, 8);
        this.async_data = res.data.slice(8);
      });
    },
    request_city() {
      let api = "https://elm.cangdu.org/v2/pois/" + this.jwd;
      this.$http({
        method: "get",
        url: api
      }).then(res => {
        console.log("!!!!", res.data);
        this.address = res.data.name;
      });
    },
    request_shop() {
      let api =
        "https://elm.cangdu.org/shopping/restaurants?latitude=" +
        this.latitude +
        "&longitude=" +
        this.longitude;
      this.$http({
        method: "get",
        url: api
      }).then(res => {
        console.log("11111", res.data);
        this.shopMsgs = res.data;
      });
    },
    pass(num, loc) {
      console.log("@@@@@", num, loc);
      loc.reverse();
      this.loct = loc.join(",");
      console.log(this.loct);
      this.$router.push({
        name: "Shop",
        query: { geohash: this.loct, id: num }
      });
    },
    skip_food(tit, res_id) {
      console.log(tit, res_id);
      this.$router.push({
        name: "Food",
        query: {
          geohash: this.jwd,
          title: tit,
          restaurant_id: res_id
        }
      });
    }
  }
};
</script>
<style scoped>
.takeout {
  position: relative;
}
.takeout_nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
  z-index: 3;
}
.takeout_nav .el-icon-search {
  margin-left: 0.15rem;
  font-size: 0.2rem;
  color: #fff;
  line-height: 0.5rem;
}
.takeout_nav .address {
  margin-left: 0.2rem;
  display: block;
  width: 1.876rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.2rem;
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.takeout_nav .login {
  color: #fff;
  line-height: 0.5rem;
  font-size: 0.15rem;
}
.swiper {
  width: 100%;
  height: 2.1rem;
  background: #fff;
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
}
.store {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-wrap: wrap;
}
.store div {
  width: 25%;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
.store div p {
  text-align: center;
  color: #666;
  font-size: 0.129rem;
  width: 0.52rem;
}
.store div img {
  margin-top: 0.12rem;
  width: 0.442rem;
  height: 0.442rem;
  margin-bottom: 0.07rem;
}
.head_word span {
  float: right;
  color: #fff;
  line-height: 0.5rem;
  margin-right: 0.1rem;
  font-size: 0.16rem;
}
.user_avatar {
  fill: #fff;
  width: 0.188rem;
  height: 0.188rem;
}
svg {
  height: 0.21rem;
  width: 0.21rem;
}
.head_login {
  position: absolute;
  right: 0.25rem;
  font-size: 0.152rem;
  color: #fff;
  top: 48%;
  transform: translateY(-50%);
}
.logo_shops {
  width: 100%;
  height: 0.3rem;
}

.logo_shops .iconfont {
  margin-left: 0.1rem;
  font-size: 0.18rem;
  line-height: 0.3rem;
}
.logo_shops .near {
  font-size: 0.13rem;
  color: #999;
  line-height: 0.3rem;
}
.near-shops {
  width: 100%;
  overflow: hidden;
  background: #fff;
  margin-bottom: 0.6rem;
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
