<template>
  <div class="changename">
    <div class="my_header">
      <div @click="goBack()">
        <i class="el-icon-arrow-left"></i>
      </div>
      <span class="title_text">修改用户名</span>
    </div>
    <div class="setname">
      <div class="setname-top">
        <input type="text" placeholder="输入用户名" class="setname_inp" id="setname_inpt" @keyup="changeInp()" v-model="changeName">
        <div>
          <p :v-if="show" id="u">用户名只能修改一次（5-24字符之间）</p>
        </div>
      </div>
      <div class="reset">
        <button id="resetbtn" @click="change()">确认修改</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "changename1",
  data() {
    return {
      changeName:"",
      show: true
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    changeInp() {
      var u = document.getElementById("u");
      var setname_inpt = document.getElementById("setname_inpt");
      var resetbtn = document.getElementById("resetbtn");
        console.log(setname_inpt);
        if(setname_inpt.value.length){
        if (setname_inpt.value.length > 0 && setname_inpt.value.length < 5) {
        this.show = false;
        u.innerText = "用户名长度在5到24位之间";
        u.style.color = "#ea3106";
        u.style.fontSize = "0.12rem";
        u.style.paddingTop = "0.03rem";
      }else if(setname_inpt.value.length > 4) {
          this.show = true;
          u.innerText = "用户名只能修改一次（5-24字符之间）";
          u.style.fontSize = "0.1rem";
          u.style.color = "#666";
          u.style.padding = "0.1rem 0 0.235rem";
          resetbtn.style.opacity = 1;
      }
        }
      
    },
    change(){
      this.$http({
        url:"https://elm.cangdu.org/v1/user",
        method:"get",
        data:{
          changeName:this.changename,
        }
      }).then(res => {
        console.log(res);
        
      })
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
.setname {
  width: 94%;
  margin: 0 auto;
}
.setname .setname-top {
  padding-top: 0.1rem;
}
.setname .setname-top input {
  background: none;
  width: 99%;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0.04rem 0.01rem;
  line-height: 0.3rem;
  font-size: 0.17rem;
  display: block;
  background-color: #fff;
  outline: none;
}
.setname .setname-top p {
  width: 100%;
  font-size: 0.1rem;
  color: #666;
  padding: 0.1rem 0 0.235rem;
}
.setname .reset {
  width: 100%;
  background: #3199e8;
}
.setname .reset button {
  display: block;
  width: 100%;
  background: none;
  line-height: 0.5rem;
  font-size: 0.17rem;
  color: #fff;
  opacity: 0.6;
  transition: all 1s;
  border: none;
  outline: none;
}
</style>
