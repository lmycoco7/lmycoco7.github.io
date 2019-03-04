<template>
  <div class="searchAddress">
    <div class="search_nav">
      <i @click="go_back()" class="el-icon-arrow-left"></i>
      <span>添加地址</span>
    </div>
    <div class="btn">
      <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="key_word">
      <button @click="request_address()">搜索</button>
    </div>
    <ul>
      <li @click="jump_back(msg.name)" v-for="(msg, index) in msgs" :key="index">
        <h3>{{msg.name}}</h3>
        <p>{{msg.address}}</p>
      </li>
    </ul>
    <div class="hint">
      <p>找不到地址</p>
      <p>尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号等）可稍后输入哦</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "searchAddress",
  data() {
    return {
      key_word: "",
      cityid: "",
      msgs: "",
      names: "",
      phones: "",
      phone_bks: "",
      details: "",
      tags: ""
    };
  },
  created() {
    console.log(this.$route.query);
    this.cityid = localStorage.getItem("cityId");
    console.log(this.cityid);
    this.names = this.$route.query.names;
    this.phones = this.$route.query.phones;
    this.phone_bks = this.$route.query.phone_bks;
    this.details = this.$route.query.details;
    this.tags = this.$route.query.tags;
  },
  methods: {
    go_back() {
      this.$router.go(-1);
    },
    jump_back(address_name) {
      this.$router.push({
        name: "addAddress",
        query: {
          addname: address_name,
          n: this.names,
          p: this.phones,
          ps: this.phone_bks,
          d: this.details,
          t: this.tags
        }
      });
    },
    request_address() {
      let lo = document.querySelectorAll(".hint");
      lo[0].style.display = "none";
      this.$http({
        method: "get",
        url:
          "https://elm.cangdu.org/v1/pois?city_id=" +
          this.cityid +
          "&keyword=" +
          this.key_word
      }).then(res => {
        console.log(res);
        this.msgs = res.data;
      });
    }
  }
};
</script>
<style scoped>
ul li {
  width: 90%;
  height: 1rem;
  border-bottom: 0.01rem solid #f5f5f5;
  margin-left: 5%;
}
ul li h3 {
  padding-top: 0.3rem;
  padding-bottom: 0.1rem;
  color: #555;
  font-size: 0.2rem;
}
ul li p {
  font-size: 0.16rem;
  color: #999;
}
.hint {
  width: 100%;
  text-align: center;
  position: fixed;
  top: 3.2rem;
  color: #aaa;
  font-size: 0.14rem;
}
.searchAddress {
  width: 100%;
  height: 11.5rem;
  background: #fff;
  position: relative;
}
.search_nav {
  width: 100%;
  height: 0.6rem;
  background: #3190e8;
  position: fixed;
  top: 0;
}
.search_nav i {
  font-size: 0.25rem;
  color: #fff;
  line-height: 0.6rem;
  margin-left: 0.1rem;
}
.search_nav span {
  font-size: 0.25rem;
  color: #fff;
  line-height: 0.6rem;
  margin-left: 0.9rem;
}
.btn {
  margin-top: 0.2rem;
  text-align: center;
}
.btn input {
  width: 70%;
  height: 0.4rem;
  background: #f5f5f5;
  border-radius: 0.05rem;
  margin-top: 0.6rem;
}
input::-webkit-input-placeholder {
  font-size: 0.15rem;
}
.btn button {
  width: 20%;
  height: 0.4rem;
  border: 0;
  color: #fff;
  background: #3190e8;
  border-radius: 0.05rem;
  outline: none;
  margin-left: 2%;
}
</style>
