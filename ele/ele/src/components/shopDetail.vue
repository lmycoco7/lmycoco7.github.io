<template>
  <div class="shopDetail">
    <div class="shopDetail_nav">
      <i @click="go_back()" class="el-icon-arrow-left"></i>
      <span>商家详情</span>
    </div>
    <div class="shop_activity">
      <p class="act_nav">活动与属性</p>
      <div v-if="show_act" class="shop_event">
        <span>{{activities[0].icon_name}}</span>
        <span class="gary_word">{{activities[0].description}}</span>
      </div>
      <ul class="act_mes">
        <li v-for="(sup, index) in supports" :key="index">
          <span>{{sup.icon_name}}</span>
          <span class="gary_word">{{sup.description}}</span>
        </li>
      </ul>
    </div>
    <div class="food_safe">
      <div class="food_nav">
        <span>食品监督安全公示</span>
        <router-link :to="{path: '/shop/shopDetail/shopSafe', query: {des: this.description}}">
          <span>企业认证详情></span>
        </router-link>
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
      <h3 class="shop_nav">商家信息</h3>
      <p class="shop_name">{{alls.name}}</p>
      <p class="shop_address">{{alls.address}}</p>
      <p class="shop_time">营业时间:{{alls.opening_hours}}</p>
      <p class="business_license">
        营业执照
        <i class="el-icon-arrow-right"></i>
      </p>
      <p class="shop_license">
        餐饮服务许可证
        <i class="el-icon-arrow-right"></i>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopDetail",
  data() {
    return {
      // 所有数据的集合
      alls: "",
      // 开放时间
      opening_hours: "",
      // 商家属性
      supports: "",
      // 活动
      activities: "",
      // 经营信息
      identification: "",
      // 监督检查结果
      description: "",
      // 布尔值判断需不需要展示活动
      show_act: false,
      //   判断检查结果的
      show_result: true,
    //   商铺id
    shop_id: ""
    };
  },
  created() {
      console.log(this.$route);
      this.shop_id = this.$route.params.shopid;
    this.request();
    
  },
  methods: {
    go_back() {
      this.$router.go(-1);
    },
    request() {
      this.$http({
        method: "get",
        url: "https://elm.cangdu.org/shopping/restaurant/"+this.shop_id
      }).then(res => {
        console.log(res.data);
        this.alls = res.data;
        this.opening_hours = res.data.opening_hours;
        console.log(this.opening_hours);

        this.supports = res.data.supports;
        console.log(this.supports);

        this.activities = res.data.activities;
        console.log(this.activities);
        if (this.activities != "") {
          this.show_act = true;
        }

        this.identification = res.data.identification;
        console.log(this.identification);

        this.description = res.data.description;
        console.log(this.description);
        if (this.description == "sad") {
          this.show_result = false;
        }
      });
    }
  }
};
</script>
<style scoped>
.gary_word {
  color: #666;
}
.shop_event {
  width: 90%;
  margin-left: 5%;
  line-height: 0.3rem;
}
.shop_event span:first-child {
  color: #fff;
  background: rgb(240, 115, 115);
  border-radius: 0.03rem;
  margin-right: 0.1rem;
}
.act_mes li:first-child span:first-child {
  color: #fff;
  background: rgb(153, 153, 153);
  border-radius: 0.03rem;
  margin-right: 0.1rem;
}
.act_mes li:nth-child(2) span:first-child {
  color: #fff;
  background: rgb(87, 169, 255);
  border-radius: 0.03rem;
  margin-right: 0.1rem;
}
.act_mes li:last-child span:first-child {
  color: #fff;
  background: rgb(153, 153, 153);
  border-radius: 0.03rem;
  margin-right: 0.1rem;
}
.shop_name {
  width: 95%;
  margin-left: 5%;
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.shop_address {
  width: 95%;
  margin-left: 5%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.shop_time {
  width: 95%;
  margin-left: 5%;
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.business_license {
  width: 95%;
  margin-left: 5%;
  height: 0.5rem;
  line-height: 0.5rem;
  border-bottom: 0.01rem solid #f1f1f1;
}
.business_license i {
  font-size: 0.2rem;
  color: rgb(187, 187, 187);
  margin-left: 2.5rem;
  line-height: 0.5rem;
}
.shop_license {
  width: 95%;
  margin-left: 5%;
  height: 0.5rem;
  line-height: 0.5rem;
}
.shop_license i {
  font-size: 0.2rem;
  color: rgb(187, 187, 187);
  margin-left: 2.01rem;
  line-height: 0.5rem;
}
.shop_mes {
  width: 100%;
  overflow: hidden;
  background: #fff;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.shop_nav {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  padding-left: 0.2rem;
  border-bottom: 0.01rem solid #f1f1f1;
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
.food_safe {
  margin-top: 0.1rem;
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
.food_nav span:last-child {
  float: right;
  color: #bbb;
  margin-right: 0.15rem;
}

.act_nav {
  width: 100%;
  color: #333;
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.18rem;
  border-bottom: 0.01rem solid #f1f1f1;
  padding-left: 0.19rem;
}
.act_mes li {
  width: 90%;
  margin-left: 5%;
  height: 0.3rem;
}
.act_mes li span {
  line-height: 0.3rem;
}
.shop_activity {
  margin-top: 0.6rem;
  background: #fff;
  overflow: hidden;
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
  margin-left: 0.9rem;
}
</style>
