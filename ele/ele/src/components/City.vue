<template>
  <div class="city">
    <div class="city_nav">
      <router-link to="/">
        <i class="el-icon-arrow-left"></i>
      </router-link>
      <span class="location_city">{{loc_city}}</span>
      <span class="switch_city">切换城市</span>
    </div>
    <div class="input_box">
      <form v-on:submit.prevent>
        <input type="text" placeholder="输入学校、商务楼、地址" required v-model="keyword_address">
        <button  @click="sub()" class="button" >提交</button>
      </form>
    </div>
    <div v-if="show" class="search_history">
      <span>搜索历史</span>
      <ul v-if="show_history" class="sites_mes">
        <li
          @click="getdata(local.item1, local.item2, local.item3)"
          class="site_mes"
          v-for="(local, index) in local_data"
          :key="index"
        >
          <h4>{{local.item1}}</h4>
          <p>{{local.item2}}</p>
        </li>
        <div class="clearAll">
          <span @click="clear()">清空所有</span>
        </div>
      </ul>
    </div>
    <ul v-else class="sites_mes">
      <li
        @click="getdata(mes.name, mes.address, mes.geohash)"
        class="site_mes"
        v-for="(mes, index) in address_mes"
        :key="index"
      >
        <h4>{{mes.name}}</h4>
        <p>{{mes.address}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "city",
  data() {
    return {
      cityid: "",
      keyword_address: "",
      loc_city: "",
      address_mes: [],
      local_data: [],
      show: true,
      show_history: false
    };
  },
  created() {
    // 请求城市id
    console.log(this.$route.params.cityid);
    this.cityid = this.$route.params.cityid;

    var getLocal = localStorage.getItem("History");
    var obj = JSON.parse(getLocal);
    this.local_data = obj;
    console.log(this.local_data);

    if (localStorage.getItem("History")) {
      this.show_history = !this.show_history;
    }
    let api1 = "https://elm.cangdu.org/v1/cities/" + this.cityid;
    this.$http({
      method: "get",
      url: api1
    }).then(res => {
      console.log("###", res);
      this.loc_city = res.data.name;
    });
  },
  methods: {
    clear() {
      this.show_history = !this.show_history;
      this.local_data == [];
      localStorage.removeItem("History");
    },
    sub() {
      if (this.keyword_address == "") {
        return;
      }
      this.show = false;
      let api =
        "https://elm.cangdu.org/v1/pois?city_id=" +
        this.cityid +
        "&keyword=" +
        this.keyword_address;
      this.$http({
        type: "get",
        url: api
      }).then(res => {
        console.log("!!!!!", res);
        this.address_mes = res.data;
      });
    },
    getdata(add_name, add, jwd) {
      console.log(add_name, add, jwd);
      this.$store.state.address_name.push(add_name);
      this.$store.state.address.push(add);
      this.$store.state.geohash.push(jwd);
      let positionArr = jwd.split(",");
      this.$store.state.latitude.push(positionArr[0]);
      this.$store.state.longitude.push(positionArr[1]);
      var temp = [];
      for (var i = 0; i < this.$store.state.address_name.length; i++) {
        if (temp.indexOf(this.$store.state.address_name[i]) == -1) {
          temp.push(this.$store.state.address_name[i]);
        }
      }
      this.$store.state.address_name = temp;

      var temp2 = [];
      for (var i = 0; i < this.$store.state.address.length; i++) {
        if (temp2.indexOf(this.$store.state.address[i]) == -1) {
          temp2.push(this.$store.state.address[i]);
        }
      }
      this.$store.state.address = temp2;

      var temp3 = [];
      for (var i = 0; i < this.$store.state.geohash.length; i++) {
        if (temp3.indexOf(this.$store.state.geohash[i]) == -1) {
          temp3.push(this.$store.state.geohash[i]);
        }
      }
      this.$store.state.geohash = temp3;

      var temp4 = [];
      for (var i = 0; i < this.$store.state.latitude.length; i++) {
        if (temp4.indexOf(this.$store.state.latitude[i]) == -1) {
          temp4.push(this.$store.state.latitude[i]);
        }
      }
      this.$store.state.latitude = temp4;

      var temp5 = [];
      for (var i = 0; i < this.$store.state.longitude.length; i++) {
        if (temp5.indexOf(this.$store.state.longitude[i]) == -1) {
          temp5.push(this.$store.state.longitude[i]);
        }
      }
      this.$store.state.longitude = temp5;

      console.log(this.$store.state.address_name, this.$store.state.address);
      let addArr = [];
      for (let i = 0; i < this.$store.state.address_name.length; i++) {
        let a = this.$store.state.address_name[i];
        let b = this.$store.state.address[i];
        let c = this.$store.state.geohash[i];
        let d = this.$store.state.latitude[i];
        let e = this.$store.state.longitude[i];
        addArr.push({ item1: a, item2: b, item3: c, item4: d, item5: e });
      }
      console.log(addArr);
      var myJsonString = JSON.stringify(addArr);
      localStorage.setItem("History", myJsonString);
      var getLocal = localStorage.getItem("History");
      var obj = JSON.parse(getLocal);
      this.local_data = obj;

      localStorage.setItem("userGeohash", jwd);
      this.$router.push({ name: "Takeout", query: { geohash: jwd } });
    }
  }
};
</script>
<style scoped>
.city_nav {
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
  margin-bottom: 0.1rem;
}
.el-icon-arrow-left {
  margin-left: 0.05rem;
  font-size: 0.25rem;
  color: #fff;
}
.city_nav span {
  line-height: 0.5rem;
  color: #fff;
}
.city_nav .location_city {
  font-size: 0.2rem;
  font-weight: 700;
  margin-left: 1.2rem;
  margin-top: 0.1rem;
}
.city_nav .switch_city {
  font-size: 0.15rem;
  margin-left: 1rem;
}
.input_box {
  width: 100%;
  background: #fff;
  border-bottom: 0.02rem solid lightgray;
}
.input_box input {
  width: 3.4rem;
  height: 0.3rem;
  padding-left: 0.1rem;
  border: 0.01rem solid #e4e4e4;
  border-radius: 0.01rem;
  margin-left: 0.18rem;
  margin-top: 0.1rem;
}
.input_box .button {
  width: 3.4rem;
  height: 0.3rem;
  color: #fff;
  background: #3190e8;
  border-radius: 0.02rem;
  margin-left: 0.18rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  border: 0;
}
/* 修改输入框的placeholder颜色 以及字体大小 */
.input_box ::-webkit-input-placeholder {
  color: gray;
  font-size: 0.15rem;
}
.search_history {
  width: 100%;
  height: 0.2rem;
  border-top: 0.01rem solid lightgray;
  border-bottom: 0.01rem solid lightgray;
  /* display: none; */
}
.search_history span {
  font-size: 0.12rem;
  line-height: 0.2rem;
  color: #333;
  margin-left: 0.1rem;
}
.sites_mes {
  width: 100%;
  background: #fff;
}
.site_mes {
  width: 100%;
  border-bottom: 0.01rem solid lightgray;
}
.site_mes h4 {
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  color: #333;
}
.site_mes p {
  margin-left: 0.2rem;
  margin-top: 0.15rem;
  margin-bottom: 0.15rem;
  font-size: 0.12rem;
  color: #999;
}
.clearAll {
  width: 100%;
  height: 0.4rem;
  background: #fff;
  text-align: center;
}
.clearAll span {
  line-height: 0.4rem;
  color: #666;
}
</style>
