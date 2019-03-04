<template>
  <div class="balance">
    <div class="my_header">
      <div @click="goBack()" >
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">我的余额</span>
    </div>
    <div class="content_container">
        <div class="content">
            <div class="content_header">
                <span class="content_title_style">当前余额</span>
                <div class="content_description">
                    <img data-v-10f76fe0="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvJJREFUSA21Vk1IFVEU/s7MvOd/+U+pkZmEEBXiIgpq06KFYUmLFrZp0S4fFAW1ioi2RU9oFbQJCgoqQYIWEkKQixKK7IfMCnuEYvlSek99M7d77rzRGWfu06Du5s49P98599zzM4QCa3dyumlR2IeFEJ0gbJWiDXnxFATGiGggRuaj4UTNhA6GohjtfVMNcMQlgjghwc0oGY8mjdgCdAsGXRzprUt5dG8PGWjv+95FNt0WEBWe0Fp2As0KUxwf6d3Q75c3/IeO5GQCNj34W3DGUDpSV2H4QJduwJ4zuBQNGPVky+KELVUmZEgw/iOHuQXhsVbs5MAU3d5NlAGOOdnOuyjPK4oIp/aW4+iOEhlm1x/bEbj/OoO+Z3P4vRg25IbLaOM3sZR5+aBR4Ax39VAlOpriGPyYxdNP8zAl8cj2EhzbVYraMgPnBtIrbpAPl8SUjJPkpmLuc1S2dLYV4/LB9XjyIYvzj5eBLBnEuz01aKm20HNnGm8ncyEjnF0xspqNfJ5HpmJ7Y0wp9o9mAgA5Bxj+uqBo2+rcIAQE5IEdZmxDFdFKbv78fiqHh28yGJsOe9i4zvVpJhN+Aw+OsS1VoRqZe6/Y86D3rLxzYwx7NseRzjp4+c29iQca2GX1c0p65R/g6Q4t1Saud1Uq9gX5LrPzGu9cgIbInNeB15cbuNFdhdIYyeyZwfP8O+jkmc4GQv1Dp3BmXwXqy01cGfyFofECoVkGSBncFZfP+q+4fNMDrUWYSOfQP5rVC/o5ElsWJw34abpvLirTIHz5aetEQnTGLlhofg0urjppJCNbw0y24MMqtaVC42Gh+rkfLeK72CK01lpoltW7lsWYjO1mkRwW3KAKKW6q5PSswtn9q48JhSUxGU8Z4K7HwwKQrVazON+HZLMbSa2WPeS4g8edbm7/zYPysHAccU03EzS2fWRyDINOv0jUJz1iwAAT/+vIZAM8iYRptIGMm5wJTCu0lIyUZR1vivnlQzfwM//Fb8sfhhUzHMwI/u8AAAAASUVORK5CYII=" height="13" width="13">
                    <router-link to="/balance/detail" class="cont_title_stytle">余额说明</router-link>
                </div>
            </div>
            <p class="content_num">
                <span>0.00</span>
                <span>元</span>
            </p>
            <div class="promit_button">提现</div>
        </div>
    </div>
    <p class="deal_detail">交易明细</p>
    <div class="no_log">
        <img src="../../../static/img/ques2.png">
        <p>暂无明细记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Balance1",
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
.content_container{
    padding: 0.07rem;
    background-color: #3190e8;
}
.content_container .content {
    padding: 0.1rem;
    background-color: #fff;
    border-radius: 0.03rem;
}
.content .content_header {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-size: .13rem;
}
.content_num{
    margin-top: 0.05rem;
}
.content_title_style{
    color: #666;
}
.cont_title_stytle{
    color: #3190e8;
}
.content_num span:first-of-type {
    font-size: 0.385rem;
    color: #333;
}
.promit_button {
    width: 100%;
    height: 0.47rem;
    font-size: 0.2rem;
    color: #fff;
    border-radius: 0.05rem;
    line-height: 0.47rem;
    margin-top: 0.235rem;
    text-align: center;
    background-color: #ccc;
}
.deal_detail{
    color: #999;
    line-height: 0.47rem;
    padding-left: 0.1rem;
    font-size: 0.15rem;
}
.no_log {
    text-align: center;
    margin-top: 0.20rem;
}
.no_log img {
    width: 1.875rem;
    height: 1.172rem;
}
.no_log p {
    margin-top: 0.2rem;
    font-size: 0.17rem;
    color: #666;
}
</style>
