<template>
  <div>
    <div class="order_page">
      <header id="head_top">
        <section class="head_goback">
          <img src="../../static/img/返回.png">
        </section>
        <section class="title_head ellipsis">
          <span class="title_text">订单列表</span>
        </section>
      </header>
      <ul class="order_list_ul" v-if="show">
        <li class="order_list_li" v-for="(order,index) in orderDetail" :key="index">
          <img :src="baseURL+order.restaurant_image_url" class="restaurant_image">
          <section class="order_item_right" @click="showOrderDetail(order)">
            <section>
              <header class="order_item_right_header">
                <section class="order_header">
                  <h4>
                    <span class="ellipsis">{{order.restaurant_name}}</span>
                    <img src="../../static/img/右.png" class="arrow_right">
                  </h4>
                  <p class="order_time">{{order.formatted_created_at}}</p>
                </section>
                <p class="order_status">{{ getStatus(order) }}</p>
              </header>
              <section class="order_basket">
                <p class="order_name ellispsis">
                  {{order.basket.group[0][0].name}}
                  {{order.basket.group[0].length > 1 ? '等' : ''}}
                  {{order.basket.group[0].length > 1 ? order.basket.group[0].length : ''}}
                  {{order.basket.group[0].length > 1 ? '件商品' : ''}}
                </p>
                <p class="order_amount">￥{{order.total_amount.toFixed(2)}}</p>
              </section>
              <div class="order_again">
                <div class="page" v-if="showTime">
                  <span class="rem_time">还剩{{getStatus(order)}}</span>
                </div>
                <span class="buy_again" v-else>再来一单</span>
              </div>
            </section>
          </section>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orderDetail: "",
      baseURL: "https://elm.cangdu.org/img/",
      showTime: false,
      show: false
    };
  },
  created() {
    if (localStorage.getItem("id")) {
      this.$http({
        method: "get",
        url:
          "https://elm.cangdu.org/bos/v2/users/" +
          localStorage.getItem("id") +
          "/orders?limit=100"
      }).then(res => {
        console.log(res.data);
        this.orderDetail = res.data;
      });

      this.show = true;
    }
  },
  methods: {
    getOrderTime(order) {
      let d = new Date();
      d.setTime(order.order_time);
      console.log(d);
      return d.toLocaleString();
    },
    jump_back() {
      console.log("反悔了");
      this.$router.go(-1);
    },
    getStatus(order) {
      if (order.pay_remain_seconds == 0) {
        return "支付超时";
      } else {
        let t = order.pay_remain_seconds;
        let f = t % 60;
        let m = t - f * 60;
        this.showTime = true;
        return f + ":" + m;
      }
    },
    showOrderDetail(order) {
      this.$router.push({ name: "OrderDetail", params: order });
    }
  }
};
</script>
<style scoped>
.order_page {
  background-color: #f1f1f1;
  margin-bottom: 0.457rem;
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
.order_list_ul {
  padding-top: 0.457rem;
}
.order_list_li {
  background-color: #fff;
  display: flex;
  margin-bottom: 0.1172rem;
  padding: 0.141rem 0.141rem 0;
}
.restaurant_image {
  width: 0.4688rem;
  height: 0.4688rem;
  margin-right: 0.094rem;
}
.order_item_right {
  flex: 4;
  position: relative;
  left: -0.09rem;
}
.order_item_right_header {
  border-bottom: 0.0058rem solid #f5f5f5;
  padding-bottom: 0.07rem;
  display: flex;
  justify-content: space-between;
}
.order_header h4 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.1758rem;
  color: #333;
  line-height: 0.2344rem;
  width: 2.109 rem;
}
.order_header span {
  font-family: "Helvetica Neue,Tahoma,Arial";
}
.arrow_right {
  width: 0.0938rem;
  height: 0.0938rem;
  margin-right: 0.04688rem;
}
.order_time {
  font-size: 0.1289rem;
  color: #999;
  line-height: 0.1875rem;
}
.order_status {
  font-size: 0.141rem;
  color: #333;
}
.order_basket {
  display: flex;
  justify-content: space-between;
  line-height: 0.4688rem;
  border-bottom: 0.0058rem solid #f5f5f5;
}
.order_name {
  font-size: 0.141rem;
  color: #666;
  width: 2.344rem;
}
.order_amount {
  font-size: 0.141rem;
  color: #f60;
  font-weight: 700;
}
.order_again {
  text-align: right;
  line-height: 0.375rem;
}
.buy_again {
  font-size: 0.1289rem;
  color: #3190e8;
  border: 0.0058rem solid #3190e8;
  padding: 0.0234rem 0.0468rem;
  border-radius: 0.0352rem;
}
.page {
  display: inline-block;
}
.rem_time {
  font-size: 0.1289rem;
  color: orange;
  padding: 0.0234rem 0.0468rem;
  border-radius: 0.0352rem;
}
</style>
