//引入vue实例
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)
// //引入vue跨域系统
// import VueResource from 'vue-resource'
// //使用vue跨域
// Vue.use(VueResource)
//引入默认组件
import App from './App.vue'
//引入首页组件
import Home from '../components/tagger/Home.vue'
//引入首页组件
import Shopcar from '../components/tagger/Shopcar.vue'
//引入首页组件
import Member from '../components/tagger/Member.vue'
//引入首页组件
import Search from '../components/tagger/Search.vue'
//引入组件
import Mint from 'mint-ui'
//引入组件样式
import "mint-ui/lib/style.css"
//引入底部样式
import './mui/css/mui.min.css'
//引入字体样式
import './mui/css/icons-extra.css'
//使用组件
Vue.use(Mint)



//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'



//使用路由
const router = new VueRouter({
    routes:[
        //默认路由
        {
            name : 'App',path:'/',component:App,redirect:'/home'
        },
        //首页路由
        {
            name : 'Home',path:'/home',component:Home
        },
        //会员路由
        {
            name : 'Member',path:'/member',component:Member
        },
        //购物车路由
        {
            name : 'Shopcar',path:'/shopcar',component:Shopcar
        },
        //设置路由
        {
            name : 'Search',path:'/search',component:Search
        },
        
    ],
    linkActiveClass : 'mui-active'
})
//创建vue实例
new Vue({
    el : '#app',
    //注入路由
    router,
    //渲染组件
    render : h => h(App)
})