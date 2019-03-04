<template>
  <div class="shopvoucher">
    <div class="voucher_container">
        <div class="hongbao_description voucher_header">
            <img src="../../../static/img/ques.png" alt="" width="24" height="24">
            <router-link to="/benefit/coupon" class="hongbao_detail">商家代金券说明</router-link>
        </div>
    </div>
    <div class="unable_use">
        <img src="../../../static/img/ques2.png" alt="">
        <p>无法使用代金券</p>
        <p>非客户端或客户端版本过低</p>
        <router-link to="/download" class="download_app">下载或升级客户端</router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: "shopvoucher1",
  data() {
    return {
    };
  },
  methods: {
      
  }
};
</script>
<style scoped>
    .hongbao_description{
        display: flex;
        align-items: center;
    }
    .voucher_header{
        font-size: 0.125rem;
        justify-content: flex-end;
        line-height: 0.45rem;
        margin-right: 0.12rem;
    }
    .hongbao_description img{
        width: 0.14rem;
        height: 0.14rem;
        margin-right: 0.05rem;
    }
    .hongbao_detail{
        color: #3190e8;
    }
    .unable_use{
        text-align: center;
        margin-top: 0.94rem;
    }
    .unable_use img{
        width: 1.4rem;
        height: 0.8rem;

    }
    .unable_use p:first-of-type{
        font-size: 0.165rem;
        color: #666;
        margin-top: 0.09rem;
    }
    .unable_use p:nth-of-type(2){
        font-size: 0.125rem;
        color: #999;
        margin-top: 0.1rem;
        margin-bottom: 0.2rem;
    }
    .download_app{
        background-color: #56d176;
        font-size: 0.165rem;
        color: #fff;
        padding: 0.07rem;
        border-radius: 0.03rem;
    }
</style>
