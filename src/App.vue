<template>
 <div class="app">
     <mt-header fixed title="嗨哥商城"></mt-header>
     		<nav class="mui-bar mui-bar-tab ">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-extra mui-icon-extra-peoples"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">设置</span>
			</router-link>
			
		</nav>
		 <router-view></router-view>
 </div>

</template>

<script>
// import {Header} from 'mint-ui'
 export default {
   data () {
     return {

     }
   },
 }
</script>

<style lang='less' scoped>
.app {
	padding-top: 40px;
	font-size: 14px
}
a:hover, a:focus {
	text-decoration: none
}
 
</style>
