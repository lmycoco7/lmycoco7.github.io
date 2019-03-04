<template>
  <div class="changename">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">新增地址</span>
    </div>
    <div class="adddetail">
      <form action>
        <div class="adddetail-input">
          <div class="input-new">
            <input type="text" placeholder="请填写你的姓名" v-model="username">
          </div>
          <div class="input-new">
            <input @focus="address_focus()" type="text" placeholder="小区/写字楼/学校等" v-model="address">
          </div>
          <div class="input-new">
            <input type="text" placeholder="请填写详细送餐地址" v-model="detail_address">
          </div>
          <div class="input-new">
            <input type="text" placeholder="请填写能够联系到您的手机号" v-model="phone">
          </div>
          <div class="input-new">
            <input type="text" placeholder="备用联系电话(必填)" v-model="spare_phone">
          </div>
        </div>
        <div class="addbutton">
            <button class="butopacity" @click="add()">新增地址</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "addsitepage1",
  data() {
    return {
      username:"",
      address:"",
      detail_address:"",
      phone:"",
      spare_phone:""
    };
  },
  created(){
    let arrs = localStorage.getItem("History");
    let obj = JSON.parse(arrs);
    console.log(obj);
    for(let i = 0;i < obj.length;i++){
      this.address = obj[i].item1
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    address_focus(){
      this.$router.push('/searchsite')
      
    },
    add() {
      
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
.adddetail {
  margin-top: 0.1rem;
  padding-top: 0.1rem;
  
}
.adddetail-input{
    background-color: #fff;
    padding-top: 0.1rem;
}
.input-new {
  padding-bottom: 0.1rem;
}
.input-new input {
  display: block;
  margin: 0 auto;
  width: 90%;
  font-size: 0.15rem;
  padding: 0.09rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
}
.addbutton{
    margin: 0.12rem auto;
    width: 95%;
    background: #4cd964;
    border-radius: 3px;
}
.butopacity{
    width: 100%;
    font-size: 0.15rem;
    color: #fff;
    background: none;
    border: none;
    font-weight: 700;
    opacity: .6;
    line-height: 0.37rem;
}
</style>
