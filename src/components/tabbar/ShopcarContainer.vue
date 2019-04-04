<template>
    <div>
        <!-- 列表区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch ></mt-switch>
                    <img class="img-shopcar" src="../../images/goods/3.jpg" alt="">
                    <div class="info">
                        <h1>华为honor，全网通 128g ,我看行</h1>
                        <p class="container">
                            <span class="price">￥2199</span>
                             <numbox></numbox>
                            <a href="">删除</a>
                        </p>
                    </div>
            	</div>
			</div>
		</div>
         <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch ></mt-switch>
                    <img class="img-shopcar" src="../../images/goods/2.jpg" alt="">
                    <div class="info">
                        <h1>华为honor，全网通 128g ,我看行</h1>
                        <p class="container">
                            <span class="price">￥2199</span>
                             <numbox></numbox>
                            <a href="">删除</a>
                        </p>
                    </div>
            	</div>
			</div>
		</div>
         <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <mt-switch ></mt-switch>
                    <img class="img-shopcar" src="../../images/goods/1.png" alt="">
                    <div class="info">
                        <h1>华为honor，全网通 128g ,我看行</h1>
                        <p class="container">
                            <span class="price">￥2199</span>
                             <numbox></numbox>
                            <a href="">删除</a>
                        </p>
                    </div>
            	</div>
			</div>
		</div>
            <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan1">
                    <div class="jiesuan">
                        <p>总计（不含运费）</p>
                        <p>已勾选商品 
                            <span class="jianshu">0 </span>
                            <span>件,总价：</span>
                            <span class="zongjia">￥0</span>
                        </p>
                    </div>
                    <mt-button type="danger">结算</mt-button>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import numbox  from '../subcomponents/shopcar_numbox.vue'
export default {
    components:{
        numbox
    }
    
    
}
</script>
<style lang="" scoped>
.container{
    display: flex;
    margin-left: 0;
    padding: 0%;
    padding-top: 3px;
}
.img-shopcar{
    width: 65px;
    height: 89px;
}
.mui-card-content-inner{
    display: flex;
}
.jiesuan1{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
h1{
    font-size: 20px;
}
.price{
    color: red;
}
.info{
    margin-left: 3px;
}
.jiesuan p{
    font-size: 16px;
}

   
.jianshu{
    color:red
}
.zongjia{
    color: red;
    
}


    
</style>