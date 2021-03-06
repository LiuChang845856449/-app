import Vue from 'vue'

//1.1-1.2导入路由包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import moment from 'moment'
//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})
//2.1导入vue-resource2.2.安装
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.http.options.root='http://vue.studyit.io';
//全局设置 post 时候表单数据格式组织形式
Vue.http.options.emulateJSON=true;


//设置请求的根路径
// vue.http.option.toor='/http://vue.studyit.io';

//导入MUI的样式
import './lib/mui/css/mui.min.css'
//导入扩展样式
import './lib/mui/css/icons-extra.css'

// import { Header,Swipe, SwipeItem,Button ,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload)

//全局导入Mint-ui
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// import VuePreview from 'vue-Preview'
// Vue.use(VuePreview)


//1.3导入router.js模块
import router from './router.js'

import app from './APP.vue'




var vm=new Vue({
    el:"#app",
    
    render:c=>c(app),
    router//1.4挂载路由
})