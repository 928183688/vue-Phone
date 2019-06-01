//引入vue实例
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router'
//使用路由
Vue.use(VueRouter)
//引入首页
import App from './App.vue'
//引入组件
import Mint from 'mint-ui'
//引入组件样式
import "mint-ui/lib/style.css"
//引入组件样式
import './mui/css/mui.min.css'
//使用组件
Vue.use(Mint)



//导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'



//使用路由
const router = new VueRouter({
    routes:[
        {
            name : 'App',path:'/',component:App
        }
    ]
})
//创建vue实例
new Vue({
    el : '#app',
    //注入路由
    router,
    //渲染组件
    render : h => h(App)
})