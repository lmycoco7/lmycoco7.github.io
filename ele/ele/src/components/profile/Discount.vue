<template>
  <div class="discount">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">我的优惠</span>
    </div>
    <div class="category_title">
      <span v-if="!show" @click="discount" class="btn">红包</span>
      <span v-else class="btn2">红包</span>
      
      <span v-if="show" class="voucher" @click="discount">商家代金券</span>
      <span v-else class="voucher2">商家代金券</span>
      
    </div>
    <div class="hongbao_container" v-if="show">
      <div class="hongbao_title">
        <div class="total_number">
          有
          <span>3</span>个红包即将到期
        </div>
        <div class="hongbao_description">
          <img src="../../../static/img/ques.png" alt>
          <router-link to="/benefit/detail" class="hongbao_detail">红包说明</router-link>
        </div>
      </div>
      <ul class="hongbao_list_ul">
        <li class="hongbao_list_li" v-for="(hongbao,index) in hongbao_data" :key="index">
          <div class="list_item">
            <div class="list_item_left">
              <span>¥</span>
              <!-- <span v-if="hongbao.amount % 1 == 0">{{hongbao.amount}}</span> -->
              <span v-if="hongbao.amount % 1 == 0">{{hongbao.amount}}.0</span>
              <span v-else>{{hongbao.amount}}</span>
              <!-- <span>.</span> -->
              <!-- <span>{{hongbao.jiao}}</span> -->
              <p>满 {{hongbao.sum_condition}} 元可用</p>
            </div>
            <div class="list_item_right">
              <h4>分享红包</h4>
              <p>{{hongbao.end_date}}到期</p>
              <p>限收货手机号为{{hongbao.phone}}</p>
            </div>
            <div class="time_left">限3日</div>
          </div>
        </li>
        <footer class="list_item_footer">
          <p>限品类：快餐便当、特色菜系、小吃夜宵、甜品饮品、异国料理</p>
        </footer>
      </ul>
      <router-link to="/benefit/hbHistory" class="history_hongbao">
        <span class="check_history">查看历史红包</span>
        <svg data-v-841e3554 class="history_right">
          <use data-v-841e3554 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
            <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%">
              <path
                d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"
                class="selected"
              ></path>
            </svg>
          </use>
        </svg>
      </router-link>
    </div>

    <Shopvoucher v-if="show2"></Shopvoucher>
    <div class="hongbao_footer">
      <router-link
        to="/benefit/exchange"
        class="hongbao_style"
        style="border-right: 1px solid rgb(245, 245, 245);"
      >兑换红包</router-link>
      <router-link to="/benefit/recommend" class="hongbao_style">推荐有奖</router-link>
    </div>
  </div>
</template>
<script>
import Shopvoucher from "@/components/profile/Shopvoucher";
export default {
  name: "discount1",
  components: {
    Shopvoucher
  },
  data() {
    return {
      show: true,
      show2: false,
      yuan: "",
      jiao: "",
      hongbao_data: []
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    discount() {
      this.show = !this.show;
      this.show2 = !this.show;
    }
  },
  created() {
    // let user_id = "1111"
    // let api = "https://elm.cangdu.org/promotion/v2/users/" + user_id + "/hongbaos"
    let api =
      "https://elm.cangdu.org/promotion/v2/users/1/hongbaos?limit=20&offset=0";
    this.$http({
      type: "get",
      url: api
    }).then(res => {
      console.log(res);
      this.hongbao_data = res.data;
      for (let i = 0; i < res.data.length; i++) {
        this.yuan = Math.floor(res.data[i].amount);
        this.jiao = res.data[i].amount % 1;
      }
      console.log(this.yuan, this.jiao);
    });
  }
};
</script>
<style scoped>
.balanceQues {
  background-color: #fff;
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

.category_title {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 0.5rem;
  background-color: #fff;
}
.btn,.voucher {
  text-align: center;
  color: #333;
  padding-bottom: 0.1rem;
  border-bottom: 0.02rem solid #ffffff;
}
.btn2 {
  text-align: center;
  padding-bottom: 0.1rem;
  color: #3190e8;
  border-bottom: 0.02rem solid #3190e8;
}
.voucher2 {
  text-align: center;
  padding-bottom: 0.1rem;
  color: #3190e8;
  border-bottom: 0.02rem solid #3190e8;
}

.hongbao_container {
  padding: 0 0.1rem;
  /* display: none; */
}
.hongbao_container .hongbao_title {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  font-size: 0.125rem;
  line-height: 0.45rem;
}
.total_number {
  color: #666;
}
.total_number span {
  color: #ff5340;
}
.hongbao_detail {
  color: #3190e8;
}
.hongbao_description {
  display: flex;
  align-items: center;
}
.hongbao_description img {
  width: 0.1406rem;
  height: 0.1406rem;
  margin-right: 0.0469rem;
}
.hongbao_list_li {
  background: #fff url(../../../static/img/red.png) repeat-x;
  background-size: 0.1172rem 0.0469rem;
  margin-bottom: 0.1172rem;
  border-radius: 0.0586rem;
}
.list_item {
  display: flex;
  justify-content: space-between;
  padding: 0.23438rem 0.1172rem 0.1875rem;
}
.list_item_left {
  font-size: 0;
  border-right: 0.0058rem dotted #ccc;
  -ms-flex: 1;
  flex: 1;
}
.list_item_left span:first-of-type {
  font-size: 0.1758rem;
  color: #ff5340;
  font-weight: 700;
}
.list_item_left span:nth-of-type(2) {
  font-size: 0.35156rem;
  color: #ff5340;
}
.list_item_left span:nth-of-type(3),
.hongbao_container
  .hongbao_list_ul
  .hongbao_list_li
  .list_item
  .list_item_left
  span:nth-of-type(4) {
  font-size: 0.1875rem;
  color: #ff5340;
  font-weight: 700;
}
.list_item_left p {
  font-size: 0.096rem;
  color: #999;
}
.list_item_right {
  -ms-flex: 2;
  flex: 2;
  margin-left: 0.35156rem;
}
.list_item_right h4 {
  font-size: 0.1641rem;
  color: #666;
  margin-left: -0.1641rem;
}
.list_item_right p {
  line-height: 0.13rem;
  list-style-type: disc;
  margin-left: -0.1641rem;
  font-size: 0.096rem;
  color: #999;
}
.time_left {
  font-size: 0.1758rem;
  color: #ff5340;
}

.hongbao_footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  display: -ms-flexbox;
  display: flex;
}
.hongbao_style {
  color: #555;
  flex: 1;
  text-align: center;
  line-height: 0.47rem;
}
.list_item_footer {
  margin-top: -0.1172rem;
  background-color: #f9f9f9;
  padding: 0.09375rem;
  border-bottom-left-radius: 0.0586rem;
  border-bottom-right-radius: 0.0586rem;
}
.hongbao_list_li:nth-of-type(3) {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.list_item_footer p {
  list-style-type: disc;
  font-size: 0.096rem;
  color: #999;
  margin-left: 0.09375rem;
}
.history_hongbao {
  margin-top: 0.25rem;
  padding: 0.11719rem 0 0.65625;
  display: flex;
  align-items: center;
  justify-content: center;
}
.check_history {
  font-size: 0.1172rem;
  color: #999;
  margin-right: 0.046875rem;
}
.history_right {
  width: 0.09375rem;
  height: 0.09375rem;
  fill: #aaa;
}
</style>
