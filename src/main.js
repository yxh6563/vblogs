// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

// import Routes from './routes'
Vue.use(ElementUI);
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false


const vuex_store = new Vuex.Store({
  state:{
    totalmess: 0, //未读消息总数，在footer公用组件
    title: '登录' ////每个页面的名称，在nav公用组件中
  },
  mutations:{

  }
})
//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})
Vue.directive('theme',{
  bind(el,binding,vnode){
    if (binding.value == 'wide'){
      el.style.maxWidth = '1260px';
    }
    else if (binding.value == 'narrow'){
      el.style.maxWidth = '500px';
    }
    if (binding.arg == 'column'){
      el.style.background = "#6677cc";
      el.style.padding = '20px';
    }
  }
})
//自定义过滤器
Vue.filter("to-uppercase",function(value){
  return value.toUpperCase();
})
Vue.filter("sninspect",function(value){
  return value.slice(0,100)+ "...";
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: vuex_store,
  components: { App },
  template: '<App/>'
})
