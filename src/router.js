import Vue from 'vue'
import VueRouter from 'vue-router'
//导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/Newsinfo.vue'

Vue.use(VueRouter)
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopcarContainer},

        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo',component:NewsInfo}
       
        
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类 router-link-active
})
export default router