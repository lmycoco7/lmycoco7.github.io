<template>
  <div class="evaluate">
        <nav class="goback">
        <svg width="4rem" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <polyline
            points="12,18 4,9 12,0"
            style="fill: none; stroke: rgb(255, 255, 255); stroke-width: 3;"
          ></polyline>
        </svg>
      </nav>
      <header class="shop_detail_header">
        <img :src="baseURL + shopDetail.image_path" class="header_cover_img">
        <section class="description_header">
          <a class="description_top">
            <section class="description_left">
              <img :src="baseURL + shopDetail.image_path">
            </section>
            <section class="description_right" >
              <h4 class="description_title ellipsis">{{shopDetail.name}}</h4>
              <p class="description_text">商家配送 / 30分钟到达 / 配送费￥{{shopDetail.float_delivery_fee}}</p>
              <p class="description_promotion ellipsis">公告：{{shopDetail.promotion_info}}</p>
              <footer
                class="description_footer"
                v-if="shopDetail.activities && shopDetail.activities.length > 0"
                
              >
                <p class="ellipsis">
                  <span
                    class="tip_icon"
                    :style="'background-color:#'+shopDetail.activities[0].icon_color+';border-color:#'+shopDetail.activities[0].icon_color"
                  >{{shopDetail.activities[0].icon_name}}</span>
                  <span>{{ shopDetail.activities[0].description }}（APP专享）</span>
                </p>
                <p>{{ shopDetail.activities.length }}个活动 &nbsp;</p>

                <svg
                  width="14"
                  height="14"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  class="footer_arrow"
                >
                  <path d="M0 0 L8 7 L0 14" stroke="#fff" stroke-width="1" fill="none"></path>
                </svg>
              </footer>
            </section>
            <svg
              width="14"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              class="description_arrow"
            >
              <path d="M0 0 L8 7 L0 14" stroke="#fff" stroke-width="1" fill="none"></path>
            </svg>
          </a>
        </section>
      </header>
      <section class="change_show_type">
        <div>
          <span  @click="goBack()">商品</span>
        </div>
        <div>
          <span class="activity_show">评价</span>
        </div>
      </section>
    <div class="rating_header">
      <div class="rating_header_left">
        <p>{{overall_score}}</p>

        <p>综合评价</p>

        <p>高于周边商家76.9%</p>
      </div>

      <div class="rating_header_right">
        <div class="rating_header_right_class">
          <span>服务态度</span>

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

          <span class="rating_num">{{service_score}}</span>
        </div>

        <div class="rating_header_right_class">
          <span>菜品评价</span>

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

          <span class="rating_num">{{food_score}}</span>
        </div>

        <div class="rating_header_right_class">
          <span>送达时间</span>
          
          <span class="delivery_time">{{deliver_time}}分钟</span>
        </div>
      </div>
    </div>

    <ul class="tag_list_ul">
      <li
        @click="btn"
        v-for="(assess,index) in assess_data"
        :key="index"
       
        :class=" assess.unsatisfied ? 'unsatisfied': ''"
      >
      {{assess.name}}({{assess.count}})
      </li>
    </ul>

    <ul class="rating_list_ul">
      <li class="rating_list_li" v-for="(tag,index) in tag_data" :key="index">
        <!-- <img v-if="tag.avatar=''" src="../img/logo.jpg" alt="" class="user_avatar"> -->
        <img :src="baseurl + tag.avatar" alt class="user_avatar">

        <div class="rating_list_details">
          <header>
            <div class="username_star">
              <p class="username">{{tag.username}}</p>

              <div class="star_desc">
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

                <span class="time_spent_desc">{{tag.time_spent_desc}}</span>
              </div>
            </div>

            <time class="rated_at">{{tag.rated_at}}</time>
          </header>

          <ul class="food_img_ul">
            <li v-for="(item,index) in tag.item_ratings" :key="index">
              <img :src="baseurl + item.image_hash" alt="">
            </li>
          </ul>
           <!-- v-for="(item,index) in tag_data" -->
          <ul class="food_name_ul"> 
            <li class="ellipsis" v-for="(food,index) in tag.item_ratings" :key="index">
              {{food.food_name}}
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "evaluate",
  data() {
    return {
      overall_score: "",
      service_score: "",
      food_score: "",
      deliver_time: "",
      avatar:"",
      img_url:"",
      baseurl:"https://fuss10.elemecdn.com",
      assess_data: [],
      count: [],
      tag_data:[],
      item_ratings:"",
      itemArr:[],
      restaurant_id:'',
      shopDetail:'',
      baseURL: "//elm.cangdu.org/img/",
    };
  },

  methods: {
    goBack(){
      this.$router.go(-1);
    },
    btn(e) {
      var tagArr = document.querySelectorAll(".tag_list_ul li");

      for (let i = 0; i < tagArr.length; i++) {
        tagArr[i].style.backgroundColor = "#ebf5ff";
        tagArr[i].style.color = "#6d7885";
      }
      document.querySelector(".unsatisfied").style.backgroundColor = "#f5f5f5";
      document.querySelector(".unsatisfied").style.color = "#aaa";
      e.target.style.backgroundColor = "#3190e8";
      e.target.style.color = "#fff";
    },
    get_food_img(lis) {
       for (let index = 0; index < lis.length; index++) {
        // console.log(lis[index].item_ratings);
        let arr = lis[index].item_ratings;
        if (lis[index].item_ratings != "") {
          // console.log(1);
          let lisArr = lis[index].item_ratings;
          console.log(lisArr);
          for (let index = 0; index < lisArr.length; index++) {
            let msgArr = lisArr[index].image_hash.split("");
            msgArr.splice(32, 0, ".");
            msgArr.splice(0, 0, "/");
            msgArr.splice(2, 0, "/");
            msgArr.splice(5, 0, "/");
            msgArr.splice(35, 0, "jpeg");
            lisArr[index].image_hash = msgArr.join("");
            console.log(msgArr);
          }
        } else {
          lis[index].item_ratings.image_hash = "";
        }
      }

    },
    get_url(mes) {
      for (let index = 0; index < mes.length; index++) {
        let arr2 = mes[index].avatar.split("");
        arr2.splice(32, 0, ".");
        arr2.splice(0, 0, "/");
        arr2.splice(2, 0, "/");
        arr2.splice(5, 0, "/");
        console.log(mes[index].avatar.length);
        if (mes[index].avatar.length == 36) {
          arr2.splice(35, 0, "jpeg");
          mes[index].avatar = arr2.join("");
        }
      }
    },
  },
  created() {
    console.log(this.$route);
    this.restaurant_id = this.$route.query.shopID;
    this.shopDetail = this.$route.query.shopDetail;
    let api =
      "https://elm.cangdu.org/ugc/v2/restaurants/" +
      this.restaurant_id +
      "/ratings/scores";
    this.$http({
      type: "get",
      url: api
    }).then(res => {
      console.log(res);
      this.overall_score = res.data.overall_score.toFixed(1);
      this.service_score = res.data.service_score.toFixed(1);
      this.food_score = res.data.food_score.toFixed(1);
      this.deliver_time = res.data.deliver_time;
    });
    let restaurant_url =
      "https://elm.cangdu.org/ugc/v2/restaurants/" +
      this.restaurant_id +
      "/ratings/tags";
    this.$http({
      type: "get",
      url: restaurant_url
    }).then(response => {
      console.log(response);
      this.assess_data = response.data;
      console.log(this.assess_data);
      let assessArr = [];
      for (let i = 0; i < response.data.length; i++) {
        assessArr.push(response.data[i]);
        this.assess_data_unsatisfied = assessArr[i].unsatisfied;
      }
    });

    let tag_url = "https://elm.cangdu.org/ugc/v2/restaurants/" + this.restaurant_id + "/ratings";
    this.$http({
      type: "get",
      url: tag_url
    }).then(respon => {
      console.log(respon.data);
      this.tag_data = respon.data;
      this.get_food_img(this.tag_data);
      this.get_url(this.tag_data);
      console.log(this.tag_data);
      // this.item_ratings = respon.data.item_ratings;
    //  for(let i = 0;i < respon.data.length;i++){
    //    console.log(respon.data[i].item_ratings)
    //    for(let j = 0;j < respon.data[i].item_ratings.length;j++){
    //      console.log(respon.data[i].item_ratings[j].image_hash)
    //    }
    //  }
    });
  }
};
</script>
<style scoped>
.description_footer p {
  color: #fff;
  font-size: 0.12rem;
}
.description_footer p span {
  color: #fff;
}
.tip_icon {
  padding: 0 0.0094rem;
  border: 0.0058rem solid #fff;
  border-radius: 0.0234rem;
  font-size: 0.12rem;
  display: inline-block;
}
.footer_arrow {
  width: 0.1055rem;
  height: 0.1055rem;
  position: absolute;
  top: -0.05rem;
  right: 0.1203rem;
}
.description_footer p:first-of-type {
  position: relative;
  left: -0.77rem;
}
.activities_details {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #262626;
  z-index: 200;
  padding: 0.293rem;
}
.activities_shoptitle {
  text-align: center;
  color: #fff;
  font-size: 0.1875rem;
}
.activities_list {
  margin-top: 0.3516rem;
  margin-bottom: 0.2344rem;
  font-size: 0.12rem;
  color: #fff;
}
.activities_title_style {
  text-align: center;
  margin-top: 0.4444rem;
  margin-bottom: 0.2344rem;
}
.activities_title_style span {
  font-size: 0.12rem;
  color: #fff;
  border: 0.0058rem solid #555;
  padding: 0.0469rem 0.0938rem;
  border-radius: 0.1172rem;
}
.activities_list li {
  margin-bottom: 0.0469rem;
}
.activities_icon {
  padding: 0 0.00469rem;
  display: inline-block;
  border: 0.00578rem solid #fff;
  border-radius: 0.0234rem;
}
.activities_list li span {
  color: #fff;
  line-height: 0.1406rem;
}
.activities_title_style {
  text-align: center;
  margin-bottom: 0.2344rem;
}
.activities_title_style span {
  font-size: 0.12rem;
  color: #fff;
  border: 0.00578rem solid #555;
  padding: 0.0469rem 0.0938rem;
  border-radius: 0.1172rem;
}
.activities_shopinfo p {
  line-height: 0.1461rem;
  font-size: 0.12rem;
  color: #fff;
}
.close_activities {
  position: absolute;
  left: 50%;
  bottom: 0.2344rem;
  transform: translateX(-50%);
}
.goback {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.422rem;
  z-index: 11;
  padding-top: 0.047rem;
  padding-left: 0.047rem;
}
.goback svg {
  width: 0.938rem;
  height: 100%;
}
.shop_detail_header {
  z-index: 10;
  position: relative;
  overflow: hidden;
}
.header_cover_img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
  filter: blur(0.1rem);
}
.description_header {
  position: relative;
  z-index: 10;
  background-color: rgba(119, 103, 137, 0.43);
  padding: 0.094rem 0 0.094rem 0.094rem;
  width: 100%;
  overflow: hidden;
}
.description_top {
  display: flex;
}
.description_left {
  margin-right: 0.07rem;
}
.description_left img {
  width: 0.6797rem;
  height: 0.6797rem;
  display: block;
  border-radius: 0.0352rem;
}
.description_right {
  flex: 1;
}
.description_title {
  color: #fff;
  font-size: 0.1875rem;
  font-weight: 700;
  width: 100%;
  margin-bottom: 0.07rem;
  font-family: "Microsoft Yahei";
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.description_text {
  font-size: 0.12rem;
  color: #fff;
  margin-top: 0.11rem;
  margin-bottom: 0.07rem;
  font-family: "Microsoft Yahei";
}
.description_promotion {
  font-size: 0.12rem;
  color: #fff;
  margin-top: 0.11rem;
  width: 2.695rem;
  font-family: "Microsoft Yahei";
}
.description_arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.15rem;
  z-index: 11;
}
.change_show_type {
  display: flex;
  background-color: #fff;
  padding: 0.18rem 0 0.18rem;
  border-bottom: 0.01rem solid #ebebeb;
}
.change_show_type div {
  flex: 1;
  text-align: center;
}
.change_show_type div span {
  font-size: 0.1523rem;
  padding: 0.0469rem 0.0234rem;
  border-bottom: 0.0281rem solid #fff;
  font-family: "Microsoft Yahei";
}
.change_show_type div .activity_show {
  color: #3190e8;
  border-color: #3190e8;
}
.rating_header {
  display: -ms-flexbox;
  display: flex;
  background-color: #fff;
  padding: 0.1875rem 0.1172rem;
  margin-bottom: 0.1172rem;
}
.rating_header_left {
  -ms-flex: 3;
  flex: 3;
  text-align: center;
}
.rating_header_left p:first-of-type {
  font-size: 0.28125rem;
  color: #f60;
}
.rating_header_left p:nth-of-type(2) {
  font-size: 0.152344rem;
  color: #666;
  margin: 0.07rem;
}
.rating_header_left p:nth-of-type(3) {
  font-size: 0.1rem;
  color: #999;
}
.rating_header_right {
  -ms-flex: 4;
  flex: 4;
}
.rating_header_right_class {
  font-size: 0.152344rem;
  line-height: 0.23475rem;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
.rating_header_right_class span:first-of-type {
  color: #666;
  margin-right: 0.1172rem;
}
.rating_container {
  position: relative;
  top: 0.0169rem;
  width: 0.5805rem;
  height: 0.09375rem;
}
.star_container {
  position: absolute;
  display: -ms-flexbox;
  display: flex;
  width: 0.46875rem;
  height: 0.09375rem;
  top: -0.0046875rem;
  left: -0.0046875rem;
}
.star_overflow {
  /* overflow: hidden; */
  position: relative;
  height: 100%;
}
.grey_fill {
  fill: #d1d1d1;
  /* width: .09rem; */
}
svg:not(:root) {
  overflow: hidden;
}
.orange_fill {
  fill: #ff9a0d;
}
.rating_num {
  width: 0.703125rem;
  font-size: 0.1289rem;
  color: #f60;
}
.delivery_time {
  font-size: 0.1rem;
  color: #999;
}
.tag_list_ul {
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0.11719rem;
}
.tagActivity {
  background-color: #3190e8;
  color: #fff;
}
.tag_list_ul .unsatisfied {
  background-color: #f5f5f5;
  color: #aaa;
}
.tag_list_ul li {
  font-size: 0.1406rem;
  color: #6d7885;
  padding: 0.0703125rem;
  background-color: #ebf5ff;
  border-radius: 0.047rem;
  border: 1px;
  margin: 0 0.0938rem 0.0469rem 0;
}
.onsee {
  background-color: #3190e8;
  color: #fff;
}
.rating_list_ul {
  background-color: #fff;
  padding: 0 0.1172rem;
}
.rating_list_li {
  border-top: 1px solid #f1f1f1;
  display: -ms-flexbox;
  display: flex;
  padding: 0.1406rem 0;
}
.user_avatar {
  width: 0.3515rem;
  height: 0.3515rem;
  border-radius: 50%;
  margin-right: 0.1875rem;
}
.rating_list_details {
  -ms-flex: 1;
  flex: 1;
}
.rating_list_details header {
  display: -ms-flexbox;
  display: flex;
  -ms-flex: 1;
  flex: 1;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 0.07rem;
}
.username_star {
  font-size: 0.1289rem;
  color: #666;
}
.username {
  color: #666;
  margin-bottom: 0.0469rem;
}
.star_desc {
  display: flex;
  align-items: center;
}
.time_spent_desc {
  font-size: 0.1289rem;
  color: #666;
  margin-left: 0.0316rem;
}
.rated_at {
  font-size: 0.1rem;
  color: #999;
}
.food_img_ul {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.1rem;
}
.food_img_ul li img {
  width: 0.703rem;
  height: 0.703rem;
  margin-right: 0.1rem;
  display: block;
}
.food_name_ul {
  display: flex;
  flex-wrap: wrap;
}
.food_name_ul li {
  font-size: 0.129rem;
  color: #999;
  width: 0.4rem;
  padding: 0.04688rem;
  border: 0.005rem solid #ebebeb;
  border-radius: 0.03515rem;
  margin-right: 0.0703rem;
  margin-bottom: 4px;
  overflow: hidden;
  /*自动隐藏文字*/
  text-overflow: ellipsis;
  /*文字隐藏后添加省略号*/
  white-space: nowrap;
}
</style>
