<template>
  <div class="chioceLocation">
    <div class="choose_nav">
      <i @click="go_back()" class="el-icon-arrow-left"></i>
      <h2>选择地址</h2>
    </div>
    <ul>
      <li
        @click="enter_address(mes.name, mes.phone, mes.address, mes.tag, mes.sex)"
        v-for="(mes, index) in address_mes"
        :key="index"
      >
        <div class="logo">
          <i class="el-icon-circle-check"></i>
        </div>
        <div class="right">
          <div class="mes_top">
            <span class="user_name">{{mes.name}}</span>
            <span class="Mr">先生</span>
            <span class="user-phone">{{mes.phone}}</span>
          </div>
          <div class="mes_bot">
            <span class="user_address">{{mes.address}}</span>
            <span class="user_address_detail">{{mes.address_detail}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div @click="jump_add()" class="add_site">
      <i class="el-icon-circle-plus-outline"></i>
      <span>新增收货地址</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "chioceLocation",
  data() {
    return {
      address_mes: ""
    };
  },
  created() {
    console.log(this.$route);
    this.request();
  },
  methods: {
    enter_address(a, b, c, d, e) {
      console.log(a, b, c, d, e);
      this.$router.push({
        name: "ConfirmOrder",
        query: {
          names: a,
          phones: b,
          sites: c,
          tags: d,
          sexs: e
        }
      });
    },
    go_back() {
      this.$router.push({ name: "ConfirmOrder" });
    },
    jump_add() {
      this.$router.push({ name: "addAddress" });
    },
    request() {
      this.$http({
        method: "get",
        url: "https://elm.cangdu.org/v1/users/15486/addresses"
      }).then(res => {
        this.address_mes = res.data;
        console.log(this.address_mes);
      });
    }
  }
};
</script>
<style scoped>
.logo {
  float: left;
  margin-left: 5%;
  display: none;
}
.logo i {
  font-size: 0.25rem;
  line-height: 0.8rem;
}
.right {
  width: 80%;
  float: right;
  margin-top: 0.15rem;
}
.el-icon-circle-check {
  font-size: 0.16rem;
  color: #4cd964;
}
ul li:first-child .logo {
  display: block;
}
.chioceLocation {
  width: 100%;
  height: 7rem;
  overflow: hidden;
  background: #fff;
  position: relative;
}
.choose_nav {
  width: 100%;
  height: 0.6rem;
  background: #3190e8;
  position: fixed;
  top: 0;
}
ul {
  width: 100%;
  height: 6rem;
  overflow: scroll;
  margin-top: 0.6rem;
  margin-bottom: 0.5rem;
}
.choose_nav i {
  float: left;
  color: #fff;
  font-size: 0.25rem;
  line-height: 0.6rem;
}
.choose_nav h2 {
  float: right;
  color: #fff;
  line-height: 0.6rem;
  margin-right: 38%;
}

.chioceLocation li {
  width: 100%;
  height: 0.8rem;
  border-bottom: 0.01rem solid #f5f5f5;
}
.mes_top span:first-child {
  font-size: 0.2rem;
  font-weight: 700;
}
.mes_bot {
  margin-top: 0.08rem;
}
.mes_bot span:first-child {
  background: rgb(76, 217, 100);
  border-radius: 0.05rem;
  letter-spacing: 0.03rem;
  color: #fff;
}
.mes_bot span:last-child {
  color: #777;
}
.add_site {
  background: #fff;
  width: 100%;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  text-align: center;
}
.add_site i {
  font-size: 0.23rem;
  color: #3190e8;
  line-height: 0.5rem;
}
.add_site span {
  color: #3190e8;
  font-size: 0.18rem;
  line-height: 0.5rem;
}
</style>
