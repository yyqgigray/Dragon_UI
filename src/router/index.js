import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/IndexPage'
import UserLogin from '../components/user/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    }
  ]
})
