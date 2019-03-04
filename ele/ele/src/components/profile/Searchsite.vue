<template>
  <div class="search">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">搜索地址</span>
    </div>

    <div class="add-detail">
        <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="newAddress">
        <button @click="search()">确认</button>
    </div>
    <div class="warnpart">
      为了满足商家的送餐要求，建议您从列表中选择地址
    </div>
    <div class="point" v-if="show">
      <p>找不到地址？</p>
      <p>请尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号）可稍后输入哦。</p>
    </div>
    <div class="poisearch-container" v-else>
      <ul>
        <li @click="getdata(search.name, search.address, search.geohash)" v-for="(search,index) in search_data" :key="index">
          <p>{{search.name}}</p>
          <p>{{search.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "addsitepage1",
  data() {
    return {
      show:true,
      search_data:[],
      newAddress:"",
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    search(){
      this.show = !this.show;
      let city_id = this.$store.state.cityId;
      let address = this.newAddress;
      this.$http({
        method:"get",
        url:"https://elm.cangdu.org/v1/pois?city_id=" + city_id + "&keyword=" + address,
        data:{
          
        }
      }).then(res => {
        console.log(res.data)
        this.search_data = res.data
      })
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
      this.$router.push("/profile/info/address/add");
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
  position: fixed;
  left: 0;
  top: 0;
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
.add-detail{
  margin-top: 0.5rem;
  display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    background: #fff;
    padding: 0.1rem;
}
.add-detail input{
  display: block;
  background: #f2f2f2;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 2.55rem;
    font-size: 0.15rem;
    padding: 0.1rem;
}
.add-detail button{
  display: block;
  background: #3199e8;
  font-size: 0.15rem;
  /* padding: 0.1rem; */
  color: #fff;
  border-radius: 5px;
  border: none;
  width: 0.7031rem;
}
.warnpart{
  background: #fff6e4;
  color: #ff883f;
  text-align: center;
  font-size: 0.145rem;
  padding: 0.025rem 0;
}
.point {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
}
.point p{
  width: 100%;
  text-align: center;
  color: #969696;
  margin-bottom: 0.1rem;
}
.poisearch-container{
  background: #f2f2f2;
}
.poisearch-container li{
  border-bottom: 1px solid #ccc;
  padding: 0.1rem;
}
.poisearch-container li p:first-child {
    margin-bottom: 0.1rem;
}
.poisearch-container li p{
    color: #969696;
}
</style>
