<template>
    <div class="goods-list">

        <router-link to="/home/goodslist/goodsinfo" class="goods-item" tag="div">
            <img src="../../images/goods/1.png" alt="">
            <h1 >oppo手机 64g 全网通 渲染你的美</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1099</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
        <router-link to="/home/goodslist/goodsinfo" class="goods-item">
            <img src="../../images/goods/1.png" alt="">
            <h1 >oppo手机 64g 全网通 渲染你的美</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1099</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
        <!-- 在网页中有两种跳转方式1.a《router-link》标签2.使用 window.location.href，编程方式跳转 router.push -->
        <div  class="goods-item" @click="goDetail()">
            <img src="../../images/goods/1.png" alt="">
            <h1 >oppo手机 64g 全网通 渲染你的美</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1099</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </div>


        <router-link to="home/goodslist/goodsinfo" class="goods-item">
            <img src="../../images/goods/1.png" alt="">
            <h1 >oppo手机 64g 全网通 渲染你的美</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1099</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
        <router-link to="home/goodslist/goodsinfo" class="goods-item">
            <img src="../../images/goods/1.png" alt="">
            <h1 >oppo手机 64g 全网通 渲染你的美</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1099</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
    
        <router-link to="home/goodslist/goodsinfo" class="goods-item">
            <img src="../../images/goods/1.png" alt="">
            <h1 >oppo手机 64g 全网通 渲染你的美oppo手机 64g 全网通 渲染你的美</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1099</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
    
        <router-link to="home/goodslist/goodsinfo" class="goods-item">
            <img src="../../images/goods/1.png" alt="">
            <h1 >oppo手机 64g 全网通 渲染你的美</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥999</span>
                    <span class="old">￥1099</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩60件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        goDetail(){
            //区分this.$route和this.$route这两个对象
            //前者是路由参数对象，所有路由中的参数，params，query 都属于他
            //后者是路由导航对象，用它可以方便的使用JS代码，实现路由的前进后退
            console.log(this)
            //1.最简单的
            // this.$router.push('/home/goodslist/goodsinfo');
            //2.传递对象
            this.$router.push({path:'/home/goodslist/goodsinfo'});


        }
    }
    
}
</script>
<style lang="" scoped>
.goods-list{
    display: inline-flex;
    flex-wrap: wrap;
    padding: 8px;
    justify-content: space-between;
}
.goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow:0 0 8px #ccc;
    margin: 3px 0px;
    /* margin-top: 0;
    margin-top: 30px; */
    padding:2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;

}
img{
    width:100%;
    height: 100%;
}
h1{
    font-size: 16px;
}
.info{
    background-color: #ddd;
}
p{
    margin: 0;
    padding: 5px;
}

.now{
    
    color: red;
    font-weight: bold;
    font-size: 16px;
}
.old{
 
    font-size:12px;
    margin-left:10px;
    text-decoration: line-through;
}
.sell{
    display: flex;
    justify-content: space-between;
    font-size: 12px；
}

    
</style>