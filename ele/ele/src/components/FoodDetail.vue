<template>
  <div>
    <div class="rating_page">
      <header id="head_top">
        <section class="head_goback">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1" @click="goBack()">
            <polyline
              points="12,18 4,9 12,0"
              style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 2;"
            ></polyline>
          </svg>
        </section>
        <section class="title_head ellipsis">
          <span class="title_text">{{good.name}}</span>
        </section>
      </header>
      <section class="header_img">
        <img :src="baseUrl+good.image_path" alt class="food_img">
        <div class="cover"></div>
      </section>
      <p class="description">{{good.description}}</p>
      <section class="detail_container">
        <section class="detail_left">
          <p>{{good.name}}</p>
          <div class="rating_sale">
            <span>评分</span>
            <div class="rating_container">
              <div class="star_container">
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                    <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                      <path
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                        class="path1"
                      ></path>
                    </svg>
                  </use>
                </svg>
                
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                    <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                      <path
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                        class="path1"
                      ></path>
                    </svg>
                  </use>
                </svg>
                
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                    <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                      <path
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                        class="path1"
                      ></path>
                    </svg>
                  </use>
                </svg>
                
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                    <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                      <path
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                        class="path1"
                      ></path>
                    </svg>
                  </use>
                </svg>
                
                <svg class="grey_fill">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                    <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                      <path
                        d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                        class="path1"
                      ></path>
                    </svg>
                  </use>
                </svg>
              </div>
              <div class="star_overflow">
                <div class="star_container">
                  <svg class="orange_fill">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                      <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                        <path
                          d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                          class="path1"
                        ></path>
                      </svg>
                    </use>
                  </svg>
                  
                  <svg class="orange_fill">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                      <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                        <path
                          d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                          class="path1"
                        ></path>
                      </svg>
                    </use>
                  </svg>
                  
                  <svg class="orange_fill">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                      <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                        <path
                          d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                          class="path1"
                        ></path>
                      </svg>
                    </use>
                  </svg>
                  
                  <svg class="orange_fill">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                      <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                        <path
                          d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                          class="path1"
                        ></path>
                      </svg>
                    </use>
                  </svg>
                  
                  <svg class="orange_fill">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star">
                      <svg id="star" viewBox="0 0 32 32" width="100%" height="100%">
                        <path
                          d="M16 26.382l-8.16 4.992c-1.5 0.918-2.382 0.264-1.975-1.435l2.226-9.303-7.269-6.218c-1.337-1.143-0.987-2.184 0.755-2.322l9.536-0.758 3.667-8.835c0.674-1.624 1.772-1.613 2.442 0l3.667 8.835 9.536 0.758c1.753 0.139 2.082 1.187 0.755 2.322l-7.269 6.218 2.226 9.303c0.409 1.71-0.485 2.347-1.975 1.435l-8.16-4.992z"
                          class="path1"
                        ></path>
                      </svg>
                    </use>
                  </svg>
                </div>
              </div>
            </div>
            <span>{{good.rating}}</span>
          </div>
          <p>
            <span>月售{{good.month_sales}}单</span>
            <span>售价￥{{good.specfoods[0].price }}</span>
            <span>{{good.specfoods[1] ? '起' : '' }}</span>
          </p>
          <p>
            <span>评论数 {{good.rating_count}}</span>
            <span>好评率 {{good.satisfy_rate}}%</span>
          </p>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      good: "",
      baseUrl: "//elm.cangdu.org/img/"
    };
  },
  created() {
    this.good = this.$route.query.clickGood;
    console.log(this.good, "...........................");
  },
  methods: {
      goBack(){
          this.$router.go(-1);
      }
  }
};
</script>

<style scoped>
.rating_page {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1200;
  padding-top: 0.457rem;
}
#head_top {
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.457rem;
}
.head_goback {
  width: 0.141rem;
  height: 0.2344rem;
  line-height: 0.5711rem;
  margin-left: 0.0938rem;
  left: 0.094rem;
}
.title_head {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
}
.title_text {
  font-size: 0.1875rem;
  color: #fff;
  text-align: center;
  font-weight: bold;
}
.header_img {
  position: relative;
}
.food_img {
  width: 100%;
  display: block;
}
.header_img .cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.rating_page p {
  font-family: "Helvetica Neue,Tahoma,Arial";
}
.description {
  font-size: 0.141rem;
  color: #666;
  margin-top: 0.1172rem;
  line-height: 0.1875rem;
  bottom: 0.0469rem;
  padding: 0 0.0938rem;
}
.detail_container {
  padding: 0.1172rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.detail_left p:first-of-type {
  font-size: 0.1641rem;
  color: #333;
  line-height: 0.21rem;
  margin-bottom: 0.0469rem;
}
.rating_sale {
  display: flex;
  align-items: center;
}
.rating_sale span:first-of-type {
  font-size: 0.1641rem;
  color: #666;
  margin-bottom: 0.0469rem;
}
.rating_container {
  position: relative;
  top: 0.0469rem;
  width: 0.4699rem;
  height: 0.0938rem;
}
.star_container {
  position: absolute;
  display: flex;
  width: 0.4688rem;
  height: 0.0938rem;
  top: -0.0047rem;
  left: -0.0047rem;
}
.grey_fill {
  fill: #d1d1d1;
}
.star_overflow {
  overflow: hidden;
  position: relative;
  height: 100%;
}
.orange_fill {
  fill: #ff9a0d;
}
.rating_sale span:nth-of-type(2) {
  font-size: 0.1289rem;
  color: #f60;
  margin-left: 0.0469rem;
}
.detail_left p:nth-of-type(2) {
  font-size: 0;
  margin-top: 0.07rem;
}
.detail_left p:nth-of-type(2) span:first-of-type {
  font-size: 0.141rem;
  color: #666;
  margin-right: 0.0938rem;
}
.detail_left p:nth-of-type(2) span:nth-of-type(2) {
  font-size: 0.141rem;
  color: #f60;
  margin-right: 0.0469rem;
}
.detail_left p:nth-of-type(2) span:nth-of-type(3) {
  font-size: 0.141rem;
  color: #f60;
  margin-right: 0.0469rem;
}
.detail_left p:nth-of-type(3) span {
  font-size: 0.141rem;
  color: #666;
}
</style>
