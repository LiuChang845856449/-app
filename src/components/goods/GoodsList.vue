<template>
    <div class="goods-list">
        <div class="goods-item">
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
    
        <div class="goods-item">
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
        </div>
    
        <div class="goods-item">
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
    </div>
</template>
<script>
export default {
    
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
    margin: 3px 0;
    padding:2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* min-height: 272px; */

}
img{
    width:100%;
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
.price{}
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