<template>
 <div class="home">

   <!--   轮播图组件 -->
  <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,index) in lunbotu" :key='index'>
    <img :src="item.images" alt="">
  </mt-swipe-item>
</mt-swipe>


           <!-- 九宫格组件 -->
         <div class="mui-content"> 
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="images/menu2.png" alt="">		                    
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="images/menu3.png" alt="">		                    
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="images/menu4.png" alt="">		                    
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="images/menu5.png" alt="">		                    
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="images/menu6.png" alt="">		                    
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       lunbotu : [
         {
           images: 'images/2.jpg'
         },
             {
           images: 'images/3.jpg'
         },
             {
           images: 'images/4.jpg'
         },
             {
           images: 'images/5.jpg'
         },
       ]
     }
   },
 }
</script>

<style lang='less' scoped>
.mint-swipe{
 height: 200px;
    img{
      width: 360px;
    }
}

 .mui-grid-view.mui-grid-9 {
       margin-bottom: 10px;
       border-left: none;
       background-color:#fff;
       img {
         width: 45px;
       }
   .mui-table-view-cell {
       border: none;
       background-color:#fff;
 }

 }
 .mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
   font-size: 13px;
 }


</style>
