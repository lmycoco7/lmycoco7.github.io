<template>
  <div class="purchase">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">购买记录</span>
    </div>
    <div class="invoice_contianer">
        <img src="../../../static/img/ques2.png" alt="">
        <p>没有购买记录</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "purchase",
  data() {
    return {
     
    };
  },
  methods: {
   goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    
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
.invoice_contianer {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.invoice_contianer img {
    width: 1.875rem;
    height: 1.172rem;
    margin-top: 1.172rem;
}
.invoice_contianer p {
    font-size: .0.1406rem;
    color: #999;
    margin-top: .1875rem;
}
</style>
