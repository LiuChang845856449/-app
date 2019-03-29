<template>
    <div>
        <!-- 轮播图区域 -->
      
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img">
            </mt-swipe-item> -->
            <mt-swipe-item><img src="../../images/Home/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/Home/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/Home/3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
       
        <!-- 九宫格到六宫格改造 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/logol1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photoslist">
                    <img src="../../images/logol2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/logol3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/logol4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/logol5.png" alt="">
                    <div class="mui-media-body">视频专区</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/logol6.png" alt="">
                    <div class="mui-media-body">联系我们</div></router-link></li>
           
        </ul> 
       
    </div>
</template>
<script>
// import {Toast} from 'mint-ui'
export default {
    data(){
        return{
            // lunbotuList:[]
        };
    },
    created(){
        // this.getLunbotu();
    },
    methods:{
        
    //     getLunbotu(){
    //         // this.$http.get("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553508626708&di=6c41b2fa77bc86bd7e5285bc7d8b1ff6&imgtype=0&src=http%3A%2F%2Fpic22.nipic.com%2F20120714%2F9622064_105642209176_2.jpg").then(result=>{
    //         // this.$http.get("api/getlunbo").then(result=>{
    //         //    if(result.body.status===0){
    //         //        this.lunboList=result.body.message;
    //         //    }else{
    //         //        Toast('加载轮播图失败')
    //         //    }
                
    //         });
    //     }
    }
    
}
</script>
<style lang="" scoped>
 /* body {background: url('../static/img/back5.jpg');} */
   
    .mint-swipe{
        height: 300px;
     }
    .mint-swipe-item:nth-child(1){
       
        /* background: url('./src/images/home/1.jpg'); */
        /* background-image: url:'./src/images/home/1.jpg'; */
         background-color: red; 
            }
    .mint-swipe-item:nth-child(2){
        background-color:blue ; 
            }
    .mint-swipe-item:nth-child(3){
         background-color:yellow ; 
    }
    img{
        width: 100%;
        height: 100%;
       
    }
    /* .img1{
        height: 400px;
    } */
     .mui-table-view.mui-grid-9{
         background-color:#ffff;
         border:none;
         /* margin-top: 200px; */
     }
     .mui-grid-view.mui-grid-9 .mui-table-view-cell{
         border:0;
     } 
     li img {
         
         width:60px;
         height: 60px;
     } 
     
     .mui-media-body{
        font-size: 13px; 
     }
     
    

   
</style>