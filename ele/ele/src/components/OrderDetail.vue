<template>
  <div>
    <header id="head_top">
      <section class="head_goback" @click="goBack">
        <img src="../../static/img/返回.png">
      </section>
      <section class="title_head ellipsis">
        <span class="title_text">订单详情</span>
      </section>
    </header>
    <section class="order_title">
        <img :src='baseURL+order.restaurant_image_url' >
        <p>支付超时</p>
        <p></p>
        <a class="order_again">再来一单</a>
    </section>
    <section class="food_list">
        <a  class="food_list_header">
            <div class="shop_name">
                <img :src='baseURL+order.restaurant_image_url' >
                <span>{{order.restaurant_name}}</span>
            </div>
            <img src="../../static/img/右.png"  class="arrow_right">
        </a>
        <ul class="food_list_ul">
            <li v-for="(item,index) in order.basket.group[0]" :key="index">
                <p class="food_name ellipsis">{{item.name}}</p>
                <div class="quantity_price">
                    <span>X{{item.quantity}}</span>
                    <span>{{item.price}}</span>
                </div>
            </li>
        </ul>
        <div class="deliver_fee">
            <span>配送费</span>
            <span>{{order.basket.deliver_fee.price}}</span>
        </div>
        <div class="pay_ment">实付{{order.total_amount.toFixed(2)}}</div>
    </section>
    <section class="order_detail_style">
        <header>配送信息</header>
        <section class="item_style">
            <p class="item_left">送达时间:</p>
            <div class="item_right">
                <p>&nbsp;尽快送达</p>
            </div>
        </section>
        <section class="item_style">
            <p class="item_left">送货地址:</p>
            <div class="item_right">
                <p>&nbsp;王</p>
                <p>&nbsp;123456789</p>
                <p></p>
            </div>
        </section>
        <section class="item_style">
            <p class="item_left">配送方式:</p>
            <div class="item_right">
                <p>&nbsp;蜂鸟专送</p>
            </div>
        </section>
    </section>

    <section class="order_detail_style">
        <header>订单信息</header>
        <section class="item_style">
            <p class="item_left">订单号：</p>
            <div class="item_right">
                <p>{{order.unique_id}}</p>
            </div>
        </section>
        <section class="item_style">
            <p class="item_left">支付方式：</p>
            <div class="item_right">
                <p> 在线支付</p>
            </div>
        </section>
        <section class="item_style">
            <p class="item_left">下单时间：</p>
            <div class="item_right">
                <p>{{order.formatted_created_at}}</p>
            </div>
        </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
        baseURL:'https://elm.cangdu.org/img/',
        order: [],
        userID:''
    };
  },
  created() {
    this.order = this.$route.params;
    console.log(this.order);
    this.userID = this.order.user_id;
  },
  methods:{
      goBack(){
          this.$router.go(-1);
      }
  }
};
</script>

<style scoped>
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
.title_text{
  font-size: 0.1875rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
}
.order_title{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.1641rem;
    background-color: #fff;
    margin-bottom: 0.1172rem;
    margin-top: 0.4569rem;
}
.order_title img{
    border: 0.0058rem solid #3190e8;
    border-radius: 50%;
    width: 0.703rem;
    height: 0.703rem;
}
.order_title p:first-of-type {
    font-size: 0.211rem;
    color: #333;
    font-weight: 700;
    margin-top: 0.0938rem;
}
.order_title p:nth-of-type(2){
    font-size: 0.1289rem;
    color: #999;
    width: 2.344rem;
    margin-top: 0.07rem;
    text-align: center;
}
.order_again{
    font-size: 0.141rem;
    color: #3190e8;
    margin-top: 0.1172rem;
    border: 0.0058rem solid #3190e8;
    line-height: 0.19rem;
    padding: 0.035rem 0.094rem;
    border-radius: 0.0234rem;
}
.food_list{
    background-color: #fff;
}
.food_list_header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.047rem 0.1172rem;
    border-bottom: 1px solid #f5f5f5;
}
.shop_name img{
    width: 0.281rem !important;
    height: 0.281rem;
    vertical-align: middle;
    margin-right: 0.0469rem;
}
.shop_name span{
    font-size: 0.1758rem;
    color: #333;
    font-weight: 700;
}
.food_list_header img{
    width: 0.141rem;
}
.food_list_ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1172rem;
    line-height: 0.469rem;
}
.food_name{
    font-size: 0.141rem;
    color: #666;
    flex: 4;
}
.quantity_price{
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.quantity_price span:first-of-type{
    font-size: 0.141rem ;
    color: #ccc;
}
.quantity_price span:nth-of-type(2){
    font-size: 0.141rem;
    color: #666;
}
.deliver_fee{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.1172rem;
    line-height: 0.4688rem;
    border-top: 1px solid #f5f5f5;
}
.deliver_fee span{
    font-size: 0.141rem;
    color: #666;
}
.pay_ment{
    font-size: 0.141rem;
    color: #fb6b23;
    border-top: 1px solid #f5f5f5;
    font-weight: 700;
    text-align: right;
    line-height: 0.4688rem;
    padding-right: 0.1172rem;
}
.order_detail_style{
    background-color: #fff;
    margin-top: 0.1172rem;
}
.order_detail_style header{
    font-size: 0.1758rem;
    color: #333;
    padding: 0.1172rem;
    border-bottom: 1px solid #f5f5f5;
}
.item_style{
    display: flex;
    padding: 0.1172rem;
}
.item_style p{
    font-size: 0.1523rem;
    color: #666;
    line-height: 0.2344rem;
}

</style>
