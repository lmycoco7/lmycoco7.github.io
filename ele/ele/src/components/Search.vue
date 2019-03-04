<template>
  <div>
    <header>
      <section data-v-4c7aa4f2 class="head_goback" @click="goBack()">
        <svg
          data-v-4c7aa4f2
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <polyline
            data-v-4c7aa4f2
            points="12,18 4,9 12,0"
            style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2;"
          ></polyline>
        </svg>
      </section>
      <section class="middle">
        <span class="title_text">搜索</span>
      </section>
    </header>
    <div  class="search_form">
      <input type="search" v-model="searchValue" placeholder="请输入商家或美食名称" class="search_input">
      <input type="submit" value="提交" class="search_sumbit" @click="search">
    </div>

    <div v-if="show_H" class="search_h">
      <h4 class="title_restaurant">搜索历史</h4>
      <ul>
        <li
          class="history_list"
          v-for="(item,index) in search_history"
          @click="searchAgain(index)"
          :key="index"
        >
          <span class="history_text">{{item}}</span>
          <svg
            data-v-3726cde6
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="delete_icon"
            @click="deleteHistory(index)"
          >
            <line
              data-v-3726cde6
              x1="8"
              y1="8"
              x2="18"
              y2="18"
              style="stroke: rgb(153, 153, 153); stroke-width: 3;"
            ></line>
            <line
              data-v-3726cde6
              x1="18"
              y1="8"
              x2="8"
              y2="18"
              style="stroke: rgb(153, 153, 153); stroke-width: 3;"
            ></line>
          </svg>
        </li>
      </ul>
      <footer class="clear_history" @click="clearHistory">清空搜索历史</footer>
    </div>

    <div class="notice_user" v-if="notice">很抱歉！无搜索结果</div>
    <section v-if="show_search">
      <h4 class="title_restaurant">商家</h4>
      <li class="list_li" v-for="(item,index) in search_result" :key="index">
        <section class="item_left">
          <img :src="baseUrl+item.image_path" class="restaurant_img">
        </section>
        <section class="item_right">
          <div class="item_right_text">
            <p>
              <span>{{item.name}}</span>
              <svg
                data-v-3726cde6
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="24"
                height="14"
                class="pay_icon"
              >
                <polygon
                  data-v-3726cde6
                  points="0,14 4,0 24,0 20,14"
                  style="fill: none; stroke: rgb(255, 96, 0); stroke-width: 1;"
                ></polygon>
                <line
                  data-v-3726cde6
                  x1="1.5"
                  y1="12"
                  x2="20"
                  y2="12"
                  style="stroke: rgb(255, 96, 0); stroke-width: 1.5;"
                ></line>
                <text
                  data-v-3726cde6
                  x="3.5"
                  y="9"
                  style="fill: rgb(255, 96, 0); font-size: 9px; font-weight: bold;"
                >支付</text>
              </svg>
            </p>
            <p>月售 {{item.recent_order_num}} 单</p>
            <p>{{item.float_minimum_order_amount}} 元起送/距离 {{item.distance}}</p>
          </div>
        </section>
      </li>
    </section>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      baseUrl: "//elm.cangdu.org/img/",
      searchValue: "",
      search_history: [],
      search_result: [],
      notice: false,
      show_search: false,
      show_H: false
      // hasHistory: false
    };
  },
  created() {
    if (localStorage.getItem("searchHistory")) {
      this.hasHistory = true;
      this.show_H = true;
    }
    let getLocal = localStorage.getItem("searchHistory");
    let obj = JSON.parse(getLocal);
    this.$store.state.search = obj;
    this.search_history = obj;
    console.log(this.$route.query.geohash);
  },
  watch: {
    searchValue() {
      console.log("a");
      if (this.searchValue == "") {
        this.notice = false;
        this.show_search = false;
        this.show_H = true;
      }
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    search(val) {
      if (this.searchValue == "") {
        return;
      }
      val = this.searchValue;

     this.$store.state.search = [] ;

      this.$store.state.search.push(this.searchValue);
      var temp = [];
      for (var i = 0; i < this.$store.state.search.length; i++) {
        if (temp.indexOf(this.$store.state.search[i]) == -1) {
          temp.push(this.$store.state.search[i]);
        }
      }
      this.$store.state.search = temp;

      var myJsonString = JSON.stringify(this.$store.state.search);
      localStorage.setItem("searchHistory", myJsonString);
      var getLocal = localStorage.getItem("searchHistory");
      this.search_history = JSON.parse(getLocal);
      // this.hasHistory = true;

      this.$http({
        method: "get",
        url:
          "https://elm.cangdu.org/v4/restaurants?geohash=" +
          this.$route.query.geohash +
          "&keyword=" +
          val
      }).then(res => {
        console.log(res.data);
        if (res.data[0] == undefined) {
          this.show_H = false;
          this.show_search = false;
          this.notice = true;
          return;
        }
        this.notice = false;
        this.show_H = false;
        this.search_result = res.data;
        this.show_search = true;
      });
    },
    clearHistory() {
      this.search_history = [];
      this.$store.state.search = [];
      localStorage.removeItem("searchHistory");
      this.show_H = false;
    },
    deleteHistory(index) {
      let getLocal = localStorage.getItem("searchHistory");
      let obj = JSON.parse(getLocal);
      obj.splice(index, 1);
      this.$store.state.search = obj;
      this.search_history = obj;
      let myJsonString = JSON.stringify(obj);
      localStorage.setItem("searchHistory", myJsonString);
    },
    searchAgain(index) {
      let getLocal = localStorage.getItem("searchHistory");
      let obj = JSON.parse(getLocal);
      console.log(obj);
      let key = obj.slice(index, index + 1)[0];

      this.$http({
        method: "get",
        url:
          "https://elm.cangdu.org/v4/restaurants?geohash=" +
          this.$route.query.geohash +
          "&keyword=" +
          key
      }).then(res => {
        console.log(res.data);
        if (res.data[0] == undefined) {
          this.show_H = false;
          this.show_search = false;
          this.notice = true;
          return;
        }
        this.notice = false;
        this.show_H = false;

        this.search_result = res.data;
        this.show_search = true;
        console.log(this.show_H, this.show_search);
      });
    }
  }
};
</script>
<style scoped>
.loginDiv {
  position: relative;
}
header {
  background-color: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  height: 0.45rem;
  line-height: 0.45rem;
}
.head_goback {
  position: absolute;
  top: 0.02rem;
  left: 0.1rem;
}
svg {
  height: 0.17rem;
  width: 0.15rem;
}
.middle {
  position: absolute;
  left: 45%;
  top: 5%;
}
.title_text {
  font-size: 0.1875rem;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-family: "Microsoft Yahei";
}
.search_form {
  background-color: #fff;
  padding: 0.1172rem;
  display: flex;
  position: relative;
  top: 0.5rem;
}
.search_input {
  flex: 4;
  border: 0.0058rem solid #e4e4e4;
  font-size: 0.152rem;
  color: #333;
  border-radius: 0.0293rem;
  background-color: #f2f2f2;
  font-weight: 700;
  padding: 0 0.0586rem;
  height: 0.352rem;
}
.search_sumbit {
  flex: 1;
  border: 0.0058rem solid #3190e8;
  margin-left: 0.047rem;
  font-size: 0.152rem;
  color: #fff;
  border-radius: 0.0293rem;
  background-color: #3190e8;
  font-weight: 700;
  padding: 0 0.0586rem;
}
.notice_user {
  margin: 0 auto;
  font: 0.1523rem/0.41rem Microsoft Yahei;
  color: #333;
  background-color: #fff;
  text-align: center;
  margin-top: 0.0293rem;
  position: relative;
  top: 0.5rem;
}
.search_h {
  position: relative;
  top: 0.5rem;
}
.title_restaurant {
  font-size: 0.141rem;
  line-height: 0.4688rem;
  text-indent: 0.1172rem;
  font-weight: 700;
  color: #666;
  font-family: "Microsoft Yahei";
}
.history_list {
  background-color: #fff;
  border-bottom: 0.00578rem solid #e4e4e4;
  font: 0.164rem/0.4688rem Microsoft Yahei;
  padding: 0 0.07rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.delete_icon {
  width: 0.2344rem;
  height: 0.2344rem;
}
.clear_history {
  background-color: #fff;
  color: #3190e8;
  font-weight: 700;
  text-align: center;
  font-size: 0.1641rem;
  line-height: 0.4688rem;
  font-family: "Microsoft Yahei";
}
.list_li {
  display: flex;
  padding: 0.1172rem;
  border-bottom: 0.0058px solid #e4e4e4;
}
.list_li .item_left {
  margin-right: 0.0586rem;
}
.list_li .item_right {
  font-size: 0.1289rem;
  flex: 1;
}
.restaurant_img {
  width: 0.3984rem;
  height: 0.3984rem;
}
.item_right_text {
  padding-bottom: 0.0586rem;
  border-bottom: 0.00578rem solid #e4e4e4;
}
.item_right_text p {
  line-height: 0.211rem;
}
.pay_icon {
  margin-bottom: -0.0188rem;
  width: 0.24rem;
  height: 0.14rem;
}
</style>
