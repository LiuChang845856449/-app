<template>
    <div class="goodsinfo-container">
        <transition 
        @befor-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter">
        <div class="ball" v-show="ballFlag"> </div>
        </transition>
       

       
        <!-- 商品轮播图趣图 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!-- 引入轮播图组件也可以使用这个 -->
                    <!-- <swiper></swiper> -->

                    <mt-swipe :auto="4000">
        <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
            <img :src="item.img">
        </mt-swipe-item> -->
                    <mt-swipe-item><img src="../../images/goods/1.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../images/goods/2.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../images/goods/3.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
                </div>
            </div>
			</div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品名称</div>
            <div class="mui-card-content1">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥2399</del>&nbsp;&nbsp;&nbsp;
                        销售价：<span class="noe_price">￥2199</span>
                    </p>
                    <p >
                        购买数量：<goodsnum class="p1"></goodsnum>
                    </p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small"
                        @click="addShopCar()">加入购物车</mt-button>
                    </p>
                </div>
            </div>
            <div class="mui-card-footer">页脚</div>
        </div>
        <!-- 参数区域 -->
         <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content1">
                <div class="mui-card-content-inner">
                    <p>商品货号：DS13940205887</p>
                    <p>库存情况:60件</p>
                    <p>上架时间：2019.04.01</p>
                </div>
                <div class="mui-card-footer"> 
                    <mt-button class="btn1" type="primary" size="large" plain @click="goDesc()">图文介绍 </mt-button>
                    <!-- <br> -->
                    <mt-button type="danger" size="large" plain  @click="goComment()">商品评论</mt-button>
                </div>
            </div>
				
			</div>
       
           
    </div>
</template>
<script>
import swiper from '../subcomponents/swiper.vue'
import goodsnum from '../subcomponents/goodsnum.vue'

export default {
    data(){
        return {
            ballFlag:false//小球标识符true
        }
    },
    methods:{
        goDesc(){//点击使用编程方式导航
        
           this.$router.push({path:'/home/goodslist/goodsinfo/goodsdesc'})


        },
        goComment(){//点击跳转到评论页面
            this.$router.push({path:"/home/goodslist/goodsinfo/goodscomments"})
        },
        addShopCar(){//小球交替出现
            this.ballFlag=!this.ballFlag;
           
        },
        
        beforeEnter(el){
            this.style.transform="translate(0,0)";

        },
        enter(el,done){
             el.offsetWidth;
             el.style.transform="translate(113px,198px)";
             el.style.transition='all 1s cubic-bazier(.4,-0.3,1,.68)'//小球动画
             el.style.transition='all 1s ease'
             done()
        },
        afterEnter(el){
            
            this.ballFlag=!this.ballFlag;
            

        },
  
          

    },
    components:{
        swiper,
        goodsnum,
   
    }
    
    
}
</script>
<style lang="">
    .goodsinfo-container{
        background-color: #eee;
    }
    .mui-card-content{
        text-align:center;

    }
    .mui-card-content-inner img{
        width: 80%;
       
    }
    .p1{
        display: inline;
       
    }
    .mui-card-footer{
        display: block;
        width: 30px；
     }
     .btn1{
         margin-bottom: 10px;
     }
    
.price{
  
    font-weight: bold;
    font-size: 15px;
} 
del{
 
    font-size:12px;
    margin-left:10px;
    text-decoration: line-through;
}
.noe_price{
    color:red
}
.ball{
    width: 15px;
    height: 15px;
    background-color: red;
    border-radius: 50%;
    position:absolute;
    z-index: 99;
    top: 490px;
    left: 149px;


}

</style>