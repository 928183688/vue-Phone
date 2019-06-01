<template>
 <div class="app">
	     <!-- 顶部 -->
     <mt-header fixed title="嗨哥商城"></mt-header>


	  <!-- 调用路由 -->
			<transition>
					 <router-view></router-view>
			</transition>

		    <!-- 底部 -->
     		<nav class="mui-bar mui-bar-tab ">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon mui-icon-contact"></span>
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
	font-size: 14px;
	overflow-x: hidden;
}
	 .v-enter,
	 .v-leave-to {
		 opacity: 0;
		 transform: translateX(100%)
	 }
	 .v-enter-active,
	 .v-leavt-active{
		 opacity: 1;
		transition: all 0.5s ease
	 }




a:hover, a:focus {
	text-decoration: none
}
 
</style>
