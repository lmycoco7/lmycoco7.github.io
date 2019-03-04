// 引入vue核心模块
import Vue from "vue"
// 引入Vuex
import Vuex from 'vuex'
// 引入state模块
import state from "./state"
// 引入getters模块
import getters from "./getters"
// 引入mutations模块
import mutations from "./mutations"
// 引入actions模块
import actions from "./actions"

// 固定写法, 让vuex有效
Vue.use(Vuex);


// 创建全局存储器, 管理状态
const store = new Vuex.Store({
  // 类似data, 是个共享的状态
  state,
  getters,
  mutations,
  actions,
})

export default store;
