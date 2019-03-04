<template>
  <div class="hello">
    <div class="city_nav">
      <router-link to="/">
        <p>ele.me</p>
      </router-link>
      <router-link to="/profile" class="head_login" v-if="judgeLogin">
        <svg data-v-cec0c0c0 class="user_avatar">
          <use data-v-cec0c0c0 xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user">
            <svg viewBox="0 0 28 33" id="user" width="100%" height="100%">
              <path
                fill-rule="evenodd"
                d="M20.798 19.289c2.636-2.002 4.215-5.091 4.215-8.437 0-5.886-4.845-10.647-10.808-10.647S3.397 4.966 3.397 10.852c0 3.345 1.578 6.433 4.212 8.435l.264-2.678C4.358 18.32 1.591 21.403.168 25.187l1.478.556v-1.579c-1.485.73-1.485.73-1.501 1.079-.054.188-.054.188-.069.278a2.58 2.58 0 0 0-.026.229 9.112 9.112 0 0 0-.019.4c-.008.265-.014.617-.018 1.039-.005.511-.006 1.037-.006 1.451v.027c-.004 1.732 1.41 3.129 3.154 3.129h22.082a3.18 3.18 0 0 0 3.172-3.153l.011-1.305.008-.897.003-.296.001-.083v-.022-.006-.001l.002-.278-.093-.262c-1.385-3.918-4.203-7.122-7.812-8.88l.263 2.678zm-1.911-2.516l-2.045 1.553 2.309 1.125c2.856 1.392 5.106 3.949 6.218 7.093l-.09-.54V26.033l-.001.083-.003.296-.008.897-.011 1.305c0 .01-.011.021-.013.021H3.161c-.007 0 .005.011.005.032v-.031c0-.404.001-.92.006-1.418.004-.4.01-.732.017-.969.004-.121.008-.212.012-.262l-.006.043c-.009.06-.009.06-.058.229-.01.336-.01.336-1.49 1.063H2.74l.385-1.024c1.141-3.035 3.35-5.495 6.131-6.849l2.309-1.124-2.045-1.554c-1.859-1.412-2.964-3.576-2.964-5.92 0-4.129 3.418-7.488 7.649-7.488s7.649 3.359 7.649 7.488c0 2.344-1.106 4.509-2.966 5.921z"
                class="path1"
              ></path>
            </svg>
          </use>
        </svg>
      </router-link>
      <router-link to="/login" v-else>
        <span>登录|注册</span>
      </router-link>
    </div>
    <div class="guess_city">
      <p>当前定位城市:</p>
      <span>定位不准时,请在城市列表中选择</span>
    </div>
    <div class="city_show" @click="getID(guess.id)">
      <div>
        <router-link to="/city">
          <span>{{guess.name}}</span>
        </router-link>
      </div>
      <i class="el-icon-arrow-right"></i>
    </div>
    <div class="hot_city">
      <span>热门城市</span>
    </div>
    <div class="hotCity_list">
      <ul>
        <li v-for="(hot, index) in hots" :key="index" @click="getID(hot.id)">{{hot.name}}</li>
      </ul>
    </div>
    <div class="groupCity_list">
      <ul class="alls_citys">
        <li v-for="(key, index) in keys" :key="index" class="citys_list">
          <div class="word_box">
            <span>{{key}}</span>
          </div>
          <ul class="city_box">
            <li
              @click="getID(group.id)"
              v-for="(group, index) in groups[key]"
              :key="index"
              class="list_city"
            >{{group.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      guess: "",
      hots: [],
      groups: [],
      keys: [],
      city_id: "",
      judgeLogin: false
    };
  },
  created() {
     if(localStorage.getItem('isLogin') == 'true'){
        this.judgeLogin = true
    }
    let api = "https://elm.cangdu.org/v1/cities?type=guess";
    this.$http({
      method: "get",
      url: api
    }).then(res => {
      // console.log(res);
      this.guess = res.data;
      console.log(res.data);
    });
    let url = "https://elm.cangdu.org/v1/cities?type=hot";
    this.$http({
      method: "get",
      url: url
    }).then(res => {
      // console.log(res);
      this.hots = res.data;
    });
    let site = "https://elm.cangdu.org/v1/cities?type=group";
    this.$http({
      method: "get",
      url: site
    }).then(res => {
      // console.log(res);
      this.groups = res.data;
      this.get_keys(res.data);
      // console.log(this.groups);
    });
  },
  methods: {
    get_keys(alls) {
      this.keys = Object.keys(alls);
      this.keys.sort();
    },
    getID(num) {
      let api1 = "https://elm.cangdu.org/v1/cities/" + num;
      this.$http({
        method: "get",
        url: api1
      }).then(res => {
        console.log("###", res);
        localStorage.setItem('cityId',res.data.id);
        this.$router.push({
          name: "City",
          params: { cityid: res.data.id},
          // query: res.data
        });
      });
    }
  }
};
</script>

<!-- scoped: 添加“作用域”属性以仅将CSS限制到此组件 -->
<style scoped>
.city_nav {
  width: 100%;
  height: 0.5rem;
  background: #3190e8;
  position: relative;
}
.city_nav p {
  float: left;
  color: white;
  line-height: 0.5rem;
  margin-left: 0.1rem;
  margin-top: 0.05rem;
}
.city_nav span {
  float: right;
  color: #fff;
  line-height: 0.5rem;
  margin-right: 0.1rem;
  font-size: 0.16rem;
}
.head_login {
  position: absolute;
  right: 0.129rem;
  font-size: 0.152rem;
  color: #fff;
  top: 50%;
  transform: translateY(-50%);
}
.user_avatar {
  fill: #fff;
  width: 0.188rem;
  height: 0.188rem;
}
.guess_city {
  width: 100%;
  height: 0.4rem;
  background: #fff;
  border-bottom: 0.01rem solid lightgray;
}
.guess_city p {
  float: left;
  font-size: 0.14rem;
  line-height: 0.4rem;
  margin-left: -0.5rem;
  margin-top: 0.05rem;
  color: #666;
}
.guess_city span {
  float: right;
  color: #9f9f9f;
  font-size: 0.13rem;
  line-height: 0.4rem;
  margin-top: 0.05rem;
  margin-right: 0.1rem;
}
.city_show {
  background: #fff;
  width: 100%;
  height: 0.4rem;
  margin-bottom: 0.1rem;
  border-bottom: 0.015rem solid lightgray;
}
.city_show span {
  float: left;
  vertical-align: top;
  padding: 0;
  font-size: 0.2rem;
  line-height: 0.4rem;
  color: #3190e8;
  margin-left: -0.86rem;
}

.city_show .el-icon-arrow-right {
  float: right;
  font-size: 0.2rem;
  line-height: 0.4rem;
  color: #999;
  margin-right: -1.85rem;
}
.hot_city {
  background: #fff;
  width: 100%;
  height: 0.3rem;
  border-top: 0.015rem solid lightgray;
  border-bottom: 0.01rem solid lightgray;
}
.hot_city span {
  font-size: 0.14rem;
  color: #666;
  line-height: 0.3rem;
  margin-left: 0.13rem;
}
.hotCity_list {
  background: #fff;
  width: 100%;
  /* 清除浮动 */
  overflow: hidden;
}
.hotCity_list li {
  color: #3190e8;
  height: 0.4rem;
  float: left;
  width: 24.8%;
  border-bottom: 0.01rem solid lightgrey;
  border-right: 0.01rem solid lightgrey;
  text-align: center;
  line-height: 0.4rem;
}
.hotCity_list li:nth-child(4) {
  border-right: 0;
}
.hotCity_list li:last-child {
  border-right: 0;
}
.hotCity_list li span {
  display: inline-block;
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
}
.groupCity_list {
  width: 100%;
  overflow: hidden;
}
.groupCity_list li .word_box {
  background: #fff;
  width: 100%;
  height: 0.3rem;
  overflow: hidden;
  border-bottom: 0.01rem solid lightgray;
  border-top: 0.01rem solid lightgray;
}
.groupCity_list li .word_box span {
  margin-right: 0.05rem;
  line-height: 0.3rem;
  color: #666;
  margin-left: 0.08rem;
}
.groupCity_list .list_city {
  float: left;
  width: 24.87%;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-bottom: 0.005rem solid lightgray;
  border-right: 0.005rem solid lightgray;
}
.alls_citys li:first-child div span:after {
  text-indent: 0.5rem;
  content: "(按字母排序)";
  color: #999;
  font-size: 0.12rem;
  margin-left: 0.1rem;
}
.city_box {
  overflow: hidden;
  background: #fff;
  border-bottom: 0.0005rem solid lightgray;
}
.groupCity_list .citys_list {
  margin-top: 0.1rem;
}
</style>

