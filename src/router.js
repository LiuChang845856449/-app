import Vue from 'vue'
import VueRouter from 'vue-router'
//导入路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/Newsinfo.vue'
import PhotosList from './components/photos/PhotosList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComments from './components/goods/GoodsComments.vue'



Vue.use(VueRouter)
var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopcarContainer},

        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsinfo',component:NewsInfo},
        {path:'/home/photoslist',component:PhotosList},
        {path:'/home/photoinfo',component:PhotoInfo},
        {path:'/home/goodslist',component:GoodsList},
        {path:'/home/goodslist/goodsinfo',component:GoodsInfo},
        {path:'/home/goodslist/goodsinfo/goodsdesc',component:GoodsDesc},
        {path:'/home/goodslist/goodsinfo/goodscomments',component:GoodsComments},


       
        
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类 router-link-active
})
export default router