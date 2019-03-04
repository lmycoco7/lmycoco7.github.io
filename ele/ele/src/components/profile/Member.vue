<template>
  <div class="member">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">会员中心</span>
    </div>
    <p class="buy_for">
        为账户<span>111</span>购买会员
    </p>
    <div class="vip_prerogative">
        <router-link to="/memberexplain" class="header_style">
            <span class="header_left">会员特权</span>
            <div class="header_right">
                <span>会员说明</span>
                <svg data-v-4e602cfc="" fill="#ccc"><use data-v-4e602cfc="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
                <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use></svg>
            </div>
        </router-link>
        <div class="vip_detail">
            <div class="vip_detail_left">
                <img src="../../../static/img/save.png" alt="" width="70" height="80">
            </div>
            <div class="vip_detail_right">
                <h4>减免配送费</h4>
                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                <p>蜂鸟专送专享</p>
            </div>
        </div>
        <div class="vip_detail">
            <div class="vip_detail_left">
                <img src="../../../static/img/package.png" alt="" width="70" height="80">
            </div>
            <div class="vip_detail_right">
                <h4>减免配送费</h4>
                <p>每月减免30单，每日可减免3单，每单最高减4元</p>
                <p>蜂鸟专送专享</p>
            </div>
        </div>
    </div>

    <div class="apply_vip">
        <header class="header_style">
            <span class="header_left">开通会员</span>
        </header>
        <div class="apply_vip_buy">
            <div class="apply_vip_buy_left">
                <span>1个月</span>
                <span>¥20</span>
            </div>
            <router-link to="/pay">
                <div class="apply_vip_buy_right">购买</div>
            </router-link>
        </div>
    </div>

    <router-link to="/exchangemember" class="header_style common_style">
        <span class="header_left">兑换会员</span>
        <div class="header_right">
            <span>使用卡号卡密</span>
            <svg data-v-4e602cfc="" fill="#ccc"><use data-v-4e602cfc="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
                <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use></svg>
        </div>
    </router-link>

    <router-link to="/purchaserecord" class="header_style common_style">
        <span class="header_left">购买记录</span>
        <div class="header_right">
            <span>开发票</span>
            <svg data-v-4e602cfc="" fill="#ccc"><use data-v-4e602cfc="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right">
                <svg viewBox="0 0 1024 1024" id="arrow-right" class="icon" width="100%" height="100%"><path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z" class="selected"></path></svg>
                </use></svg>
        </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "member",
  data() {
    return {};
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>

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
.buy_for {
    font-size: .1406rem;
    color: #666;
    line-height: 0.46875rem;
    padding-left: .16406rem;
}
.buy_for span {
    font-weight: 700;
}
.vip_prerogative {
    background-color: #fff;
    padding-left: .1641rem;
    margin-bottom: .1172rem;
}
.header_style {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 0.46875rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .1641rem;
}
.header_left {
    font-size: .16406rem;
    color: #333;
}
.header-right{
    display: flex;
    align-items: center;
}
.header_right span{
    font-size: 0.14062rem;
    color: #999;
    margin-right: 0.047rem;
}
.header_right svg {
    width: 0.1171rem;
    height: 0.1171rem;
}
.vip_detail {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding: .1875rem 0;
    
}
.vip_detail_left {
    margin-right: .1406rem;
}
.vip_detail_left img{
    width: 0.375rem;
    height: 0.422rem;
}
.vip_detail_right h4 {
    font-size: .1641rem;
    color: #333;
    font-weight: 400;
}
.vip_detail_right p {
    margin: 0.03rem 0;
    font-size: .1172rem;
    color: #999;
}
.apply_vip {
    background-color: #fff;
    padding-left: .16406rem;
    margin-bottom: .1172rem;
}
.header_style {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    line-height: 0.46875rem;
    border-bottom: 1px solid #f5f5f5;
    padding-right: .16406rem;
}
.header_left {
    font-size: .16406rem;
    color: #333;
}
.apply_vip_buy {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: .16406rem;
    font-size: .16406rem;
    line-height: 0.609rem;
}
.apply_vip_buy_left span:nth-of-type(2) {
    font-weight: 700;
    color: #f60;
}
.apply_vip_buy_right {
    border: 0.6px solid #f60;
    border-radius: 0.047rem;
    line-height: 0.27rem;
    height: 0.27rem;
    width: 0.61rem;
    text-align: center;
    font-size: .1406rem;
    color: #f60;
}
.common_style {
    padding: 0 .16406rem;
    margin-bottom: .1172rem;
}


svg {
    fill: rgb(204, 204, 204);
}
</style>
