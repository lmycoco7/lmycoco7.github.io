// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入请求模块
import axios from 'axios'
import VueAxios from 'vue-axios'
//vuex
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

// 引入element模块
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入阿里巴巴图标
import './assets/icon/iconfont.css'
import FastClick from 'fastclick'

import NProgress from 'nprogress' 
import 'nprogress/nprogress.css'// nprogress样式文件

Vue.config.productionTip = false


Vue.use(VueAxios, axios)
Vue.use(ElementUI);

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}

//当路由开始跳转时
router.beforeEach((to, from , next) => {
  // 开启进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next();
});
//当路由跳转结束后
router.afterEach(() => {  
  // 关闭进度条
  NProgress.done()
})
NProgress.configure({     
  easing: 'slow',  // 动画方式    
  speed: 50,  // 递增进度条的速度    
  showSpinner: true, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.1 // 初始化时的最小百分比
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
