import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* 按需加载 */
export const vueConfig = {
  hello: resolve => require.ensure([], () => resolve(require('@/components/hello')), 'views/hello'), //hello
  index: resolve => require.ensure([], () => resolve(require('@/views/index')), 'views/index'), //index
  user: {
    login: resolve => require.ensure([], () => resolve(require('@/views/login/login')), 'views/login/login'), //login
  }
}

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'index', component: vueConfig.index, meta: {title: 'index'}},
    {path: '/login', name: 'login', component: vueConfig.user.login, meta: {title: 'login'}}
  ]
})
