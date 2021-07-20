import Vue from 'vue'
import Router from 'vue-router'
import ShowBlogs from '@/components/ShowBlogs'
import Addlog from '@/components/Addlog'
import SingleBlogs from '@/components/SingleBlogs'
import Usercenter from '@/components/Usercenter'
import Login from '@/components/Login'
import AuthSign from '@/components/AuthSign'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: ShowBlogs
    },
    {
      path: '/add',
      component: Addlog
    },
    {
      path: '/blog/:id',
      component: SingleBlogs
    },
    {
      path: '/usercenter',
      component: Usercenter
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/authsign',
      component: AuthSign
    },
    {
      path: '/register',
      component: Register
    }
  ]
})
