<template>
  <div class="addAddress">
    <div class="add_nav">
      <i @click="go_back()" class="el-icon-arrow-left"></i>
      <span>添加地址</span>
    </div>
    <ul>
      <li>
        <div class="one_left">
          <span>联系人</span>
        </div>
        <div class="one_right">
          <input class="one" type="text" placeholder="你的名字" v-model="name">
          <div class="sex-bot">
            <i @click="choose_it" @mouseup="sex_a(1)" class="el-icon-circle-check"></i>
            <span>先生</span>
            <i @click="choose_it" @mouseup="sex_a(2)" class="el-icon-circle-check"></i>
            <span>女士</span>
          </div>
        </div>
      </li>
      <li class="six">
        <div class="one_left">
          <span>联系电话</span>
        </div>
        <div class="one_right">
          <input class="one" type="text" placeholder="你的手机号" v-model="phone">
          <span @click="show_another" class="iconfont">&#xe6a9;</span>
        </div>
      </li>
      <div class="another">
        <input type="text" placeholder="备选电话" v-model="phone_bk">
      </div>
      <li>
        <div class="one_left">
          <span>送餐地址</span>
        </div>
        <div class="one_right">
          <input
            @click="search()"
            class="one"
            type="text"
            placeholder="小区/写字楼/学校等"
            v-model="address"
          >
          <div class="sex-bot">
            <input type="text" placeholder="详细地址(如门牌号等)" v-model="address_detail">
          </div>
        </div>
      </li>
      <li>
        <div class="one_left">
          <span>标签</span>
        </div>
        <div class="one_right">
          <input type="text" placeholder="无/家/学校/公司" v-model="tag">
        </div>
      </li>
    </ul>
    <div class="btn">
      <button @click="enter()">确定</button>
    </div>
    <!-- 登录弹窗 -->
    <div class="alert_container" v-show="alert1">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请登录</p>
        <div class="confirm" @click="alert1=!alert1">确认</div>
      </section>
    </div>
    <!-- 名字弹窗 -->
    <div class="alert_container" v-show="alert2">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入姓名</p>
        <div class="confirm" @click="alert2=!alert2">确认</div>
      </section>
    </div>
    <div class="alert_container" v-show="alert3">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请输入电话号码</p>
        <div class="confirm" @click="alert3=!alert3">确认</div>
      </section>
    </div>
    <div class="alert_container" v-show="alert4">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">请选择地址</p>
        <div class="confirm" @click="alert4=!alert4">确认</div>
      </section>
    </div>
    <div class="alert_container" v-show="alert5">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">详细地址信息错误</p>
        <div class="confirm" @click="alert5=!alert5">确认</div>
      </section>
    </div>
    <div class="alert_container" v-show="alert6">
      <section class="tip_text_container">
        <div class="tip_icon">
          <img src="../../static/img/1.png" alt>
        </div>
        <p class="tip_text">标签错误</p>
        <div class="confirm" @click="alert6=!alert6">确认</div>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: "addAddress",
  data() {
    return {
      alert1: false,
      alert2: false,
      alert3: false,
      alert4: false,
      alert5: false,
      alert6: false,
      user_id: "",
      address: "",
      address_detail: "",
      geohash: "",
      name: "",
      phone: "",
      tag: "",
      sex: 1,
      phone_bk: "",
      tag_type: "",
      log_status: ""
    };
  },
  created() {
    console.log(this.$route.query.addname);
    this.address = this.$route.query.addname;
    this.user_id = localStorage.getItem("id");
    console.log(this.user_id);
    this.geohash = localStorage.getItem("userGeohash");
    console.log(this.geohash);
    this.log_status = localStorage.getItem("isLogin");
    console.log(this.log_status);

    //  获取已经填写过的值
    this.name = this.$route.query.n;
    this.phone = this.$route.query.p;
    this.phone_bk = this.$route.query.ps;
    this.address_detail = this.$route.query.d;
    this.tag = this.$route.query.t;
  },
  methods: {
    go_back() {
      this.$router.go(-1);
    },
    // 点击跳转到搜索地址页面
    search() {
      this.$router.push({ name: "searchAddress", query:{
        names: this.name,
        phones:this.phone,
        phone_bks: this.phone_bk,
        details: this.address_detail,
        tags: this.tag
      } });
    },
    // 点击确定按钮
    enter() {
      // 判断标签的类型
      if (this.tag == "家") {
        this.tag_type = 2;
      } else if (this.tag == "学校") {
        this.tag_type = 3;
      } else if (this.tag == "公司") {
        this.tag_type = 4;
      }
      console.log(this.tag_type);
      if (!this.user_id) {
        this.alert1 = true;
      } else if (!this.name) {
        this.alert2 = true;
      } else if (!this.phone) {
        this.alert3 = true;
      } else if (!this.address) {
        this.alert4 = true;
      } else if (!this.address_detail) {
        this.alert5 = true;
      } else if (!this.tag) {
        this.alert6 = true;
      }
      console.log(this.tag_type);
      this.$http({
        method: "post",
        url: "https://elm.cangdu.org/v1/users/" + this.user_id + "/addresses",
        data: {
          user_id: this.user_id,
          address: this.address,
          address_detail: this.address_detail,
          geohash: this.geohash,
          name: this.name,
          phone: this.name,
          tag: this.tag,
          sex: this.sex,
          phone_bk: this.phone_bk,
          tag_type: this.tag_type
        }
      }).then(res => {
        console.log(res);
        if (res.data) {
          this.$router.push({ name: "chioceLocation" });
        }
      });
    },

    // 获取性别值
    sex_a(index) {
      console.log(index);
      this.sex = index;
      console.log(this.sex);
    },
    choose_it(e) {
      let tarArr = document.querySelectorAll(".el-icon-circle-check");
      console.log(tarArr);
      for (let index = 0; index < tarArr.length; index++) {
        tarArr[index].style.color = "#ccc";
      }
      e.target.style.color = "#4cd964";
    },
    // 点击后展示备选电话
    show_another(e) {
      let des = document.querySelectorAll(".another");
      console.log(des[0]);
      des[0].style.display = "block";
    }
  }
};
</script>
<style scoped>
.sex-bot i:first-child {
  color: #4cd964;
}
.another {
  width: 100%;
  height: 0.7rem;
  line-height: 0.7rem;
  padding-left: 1.33rem;
  background: #fff;
  border-bottom: 0.01rem solid #f5f5f5;
  display: none;
}
.btn {
  width: 100%;
  text-align: center;
  margin-top: 0.2rem;
}
.btn button {
  width: 95%;
  height: 0.5rem;
  outline: none;
  color: #fff;
  border: 0;
  background: #4cd964;
  border-radius: 0.05rem;
}
li:last-child {
  width: 100%;
  height: 0.7rem;
}
.iconfont {
  position: absolute;
  right: 0;
  top: 0.2rem;
  margin-right: 0.1rem;
  font-size: 0.35rem;
  font-weight: 700;
  color: blue;
}
.sex-bot span {
  font-size: 0.2rem;
  color: #333;
}
.el-icon-circle-check {
  color: #ccc;
  font-size: 0.25rem;
  line-height: 0.7rem;
}
input::-webkit-input-placeholder {
  font-size: 0.2rem;
  color: #999;
}
input {
  font-size: 0.18rem;
}
ul li {
  width: 100%;
  height: 1.5rem;
  background: #fff;
  border-bottom: 0.01rem solid #f5f5f5;
}
.one_left {
  float: left;
}
.one_left span {
  font-size: 0.2rem;
  color: #333;
  line-height: 0.65rem;
  margin-left: 0.2rem;
}
.one_right {
  width: 65%;
  float: right;
  position: relative;
}
ul {
  width: 100%;
  overflow: hidden;
  margin-top: 0.6rem;
}
.one_right input {
  width: 100%;
  height: 0.7rem;
}
.one {
  border-bottom: 0.01rem solid #f5f5f5;
}
.addAddress {
  width: 100%;
  overflow: hidden;
  position: relative;
}
.add_nav {
  width: 100%;
  height: 0.6rem;
  background: #3190e8;
  position: fixed;
  top: 0;
}
.add_nav i {
  font-size: 0.25rem;
  color: #fff;
  line-height: 0.6rem;
  margin-left: 0.1rem;
}
.add_nav span {
  font-size: 0.25rem;
  color: #fff;
  line-height: 0.6rem;
  margin-left: 0.9rem;
}
ul .six {
  height: 0.7rem;
  border: 0;
}
/* 弹窗动画 */
@keyframes tipMove {
  0% {
    transform: scale(1);
  }
  35% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
/* 弹窗样式 */
.alert_container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 200;
  height: 8.12rem;
  width: 3.75rem;
}
.tip_text_container {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -1.41rem;
  margin-left: -1.41rem;
  padding-top: 0.141rem;
  width: 2.81rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 0.01rem;
  border-radius: 0.0586rem;
  animation: tipMove 0.4s;
}

.tip_text {
  font-size: 0.164rem;
  color: #333;
  line-height: 0.211rem;
  text-align: center;
  margin-top: 0.126rem;
  padding: 0 0.094rem;
  font-family: "Microsoft Yahei";
}
.confirm {
  font-size: 0.188rem;
  color: #fff;
  font-weight: bold;
  margin-top: 0.188rem;
  background-color: #4cd964;
  width: 100%;
  text-align: center;
  line-height: 0.422rem;
  border: 0.01rem;
  border-bottom-left-radius: 0.0586rem;
  border-bottom-right-radius: 0.0586rem;
}
</style>

