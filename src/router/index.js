import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import ShowBlogs from '@/components/ShowBlogs'
import SingleBlogs from '@/components/SingleBlogs'
import AddBlog from '@/components/AddBlog'
import Mine from '@/components/Mine/Mine'
//二级路由
//三级路由
import Login from '@/components/Mine/Login'
import Register from '@/components/Mine/Register'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/',component:ShowBlogs},
    {path:'/blog/:id',component:SingleBlogs},
    {path:'/addBlog',component:AddBlog},
    {path:'/mine',component:Mine},
    {path:'/login',component:Login},
    {path:'/register',component:Register}
  ]
})
