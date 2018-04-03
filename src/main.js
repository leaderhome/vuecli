// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//css
require('@/assets/css/mui.css');
require('@/assets/css/iconfont.css');

//js
window.mui = require('@/assets/libs/mui.js');
window.utils = require('@/assets/libs/utils.js').utils;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/* 自定义指令 */
Vue.directive('colorSwatch', {
  inserted(el, binding, vnode) {
    el.style.backgroundColor = binding.value.bgColor;
  }
})
