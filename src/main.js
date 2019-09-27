import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import admin from './store/admin/index'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Login from "./Login";
import router from "@/router/index"

Vue.use(ElementUI)

//请求拦截,
axios.interceptors.request.use(config=>{
  //config是axios的配置信息
  config.url = "/ele" + config.url;
   return config;
   store.commit("CHANGE_LOADING",false)
})
//目标拦截
axios.interceptors.response.use(({data})=>{
    return data;
    store.commit("CHANGE_LOADING",true)
})



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(store.state.admin.token?App:Login) }
}).$mount('#app')