<template>
  <div class="IntegralMall">
    <h3>请重新输入</h3>
    <p>请返回重新进入积分商城~</p>
    <img src="../../../static/img/retrylogin.png" alt="">
  </div>
</template>
<script>
export default {
  name: "integralmall",
  data() {
    return {};
  },
  methods: {
   
  }
};
</script>
<style scoped>
.IntegralMall{
    text-align: center;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
h3{
    font-size: 26px;
    color: #0d7fd5;
    margin-bottom: 15px;
}
p {
    font-size: 14px;
    color: #666;
    margin-bottom: 19px;
}
img {
    width: 176px;
    height: 176px;
    border: 0;
    vertical-align: middle;
}
</style>
