<template>
  <div class="shopSafe">
    <div class="shopDetail_nav">
      <i @click="go_back()" class="el-icon-arrow-left"></i>
      <span>食品监督安全公示</span>
    </div>
    <div class="food_safe">
      <div class="food_nav">
        <span>食品监督安全公示</span>
      </div>
      <div class="check_result">
        <div class="left_mes">
          <span v-if="show_result" class="iconfont good_word">&#xe637;</span>
          <span v-else class="iconfont bad_word">&#xe629;</span>
        </div>
        <div class="right_mes">
          <p>监督检查结果: {{description}}</p>
          <p>检查日期:</p>
        </div>
      </div>
    </div>
    <div class="shop_mes">
      <h3>工商登记信息</h3>
      <p>企业名称</p>
      <p>工商执照注册号</p>
      <p>注册资本</p>
      <p>注册地址</p>
      <p>属地监管所</p>
      <p>法定代表人</p>
      <p>经营范围</p>
    </div>
    <div class="eat_mes">
      <h3>餐饮许可证</h3>
      <p>营业范围</p>
      <p>许可证有效期</p>
      <p>许可证号</p>
      <p>发证时间</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        // 检查结果
        description: "",
        show_result: true

    };
  },
  created() {
      console.log(this.$route);
      this.description = this.$route.query.des;
      if (this.description == "sad") {
          this.show_result = false;
      }
  },
  methods: {
    go_back() {
      this.$router.go(-2);
    }
  }
};
</script>
<style scoped>
.eat_mes {
  width: 100%;
  overflow: hidden;
  background: #fff;
  margin-top: 0.1rem;
}
.eat_mes h3 {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.18rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.eat_mes p {
  width: 90%;
  margin-left: 5%;
  line-height: 0.4rem;
}
.shop_mes {
  width: 100%;
  overflow: hidden;
  background: #fff;
  margin-top: 0.1rem;
}
.shop_mes h3 {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.18rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.shop_mes p {
  width: 90%;
  margin-left: 5%;
  line-height: 0.4rem;
}
.shopDetail_nav {
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
  position: fixed;
  top: 0;
}
.shopDetail_nav i {
  font-size: 0.25rem;
  color: #fff;
  line-height: 0.5rem;
  margin-left: 0.1rem;
}
.shopDetail_nav span {
  font-size: 0.22rem;
  color: #fff;
  line-height: 0.5rem;
  margin-left: 0.7rem;
}

.food_safe {
  margin-top: 0.5rem;
  width: 100%;
  background: #fff;
  overflow: hidden;
}
.food_nav {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.food_nav span:first-child {
  float: left;
  color: #333;
  margin-left: 0.19rem;
}
.check_result {
  width: 100%;
  overflow: hidden;
}
.left_mes {
  width: 20%;
  float: left;
}
.left_mes .good_word {
  font-size: 0.9rem;
  color: rgb(126, 211, 33);
}
.left_mes .bad_word {
  font-size: 0.9rem;
  color: rgb(208, 2, 27);
}
.right_mes {
  width: 75%;
  float: right;
}
.right_mes p:first-child {
  margin-top: 0.4rem;
}
.right_mes p:last-child {
  margin-top: 0.2rem;
  margin-bottom: 0.2rem;
}
</style>
