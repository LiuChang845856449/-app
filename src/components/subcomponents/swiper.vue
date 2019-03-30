<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img">
            </mt-swipe-item> -->
            <mt-swipe-item><img src="../../images/Home/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/Home/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../../images/Home/3.jpg" alt=""></mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- 分析 为什么 商品评论中的轮播图那么丑
    1.首页中的图片。它的长和宽都使用了100% 
    2.在商品详情页面中，轮播图的图片，也使用了百分之百，页面不好看
    3.商品详情中的轮播图，期望高度是100%，宽度应该是自适应
    4.经过分析，得到问题的原因：页面中的轮播图和详情中的轮播图 分歧点是 宽度到底是100% 还是自适应
    5.既然两个轮播图，其他方面都一样，只是宽度有分歧，那么我们可以定义一个属性
    让轮播图的调用者手动指定是否为100%的宽度 -->
</template>
<script>
export default {
    probs:["lunbotuList"]
    
}
</script>
<style lang="">
   .mint-swipe{
        height: 300px;
     }
     img{
        width: 100%;
        height: 100%;
     }
</style>