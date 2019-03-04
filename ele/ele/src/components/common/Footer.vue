<template>
  <div class="footer">
    <router-view></router-view>
    <div class="footer_page">
      <ul>
        <router-link :to="takeoutLink">
          <li>
            <span class="iconfont">&#xe60b;</span>
            <br>
            <span class="word">外卖</span>
          </li>
        </router-link>
        <router-link :to="searchLink">
          <li>
            <span class="iconfont">&#xe786;</span>
            <br>
            <span class="word">搜索</span>
          </li>
        </router-link>
        <router-link to="/order">
          <li>
            <span class="iconfont">&#xe603;</span>
            <br>
            <span class="word">订单</span>
          </li>
        </router-link>
        <router-link to="/profile">
          <li>
            <span class="iconfont">&#xe63f;</span>
            <br>
            <span class="word">我的</span>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      takeoutLink: "",
      searchLink: ""
    };
  },
  created() {
    this.takeoutLink =
      "/takeout?geohash=" + localStorage.getItem("userGeohash");
    this.searchLink = "/search?geohash=" + localStorage.getItem("userGeohash");
  }
};
</script>
<style scoped>
.footer {
  position: relative;
}
.router-link-active .iconfont {
  color: #3190e8 !important;
}
.footer_page {
  overflow: hidden;
  width: 100%;
  height: 0.6rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid gray;
  background: #fff;
  z-index: 3;
}
.footer_page li {
  margin-top: 0.1rem;
  float: left;
  text-align: center;
  width: 25%;
}
.footer_page li .word {
  color: #666;
}
.footer_page li .iconfont {
  font-size: 0.23rem;
  color: #666;
}
</style>
