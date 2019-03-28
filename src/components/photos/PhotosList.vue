<template>
    <div>
       <!-- 顶部滑动条区域 -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <!-- <div class="mui-scroll">
                    <a :class="['mui-control-item ',item.id==0?'mui-active':''] " v-for="item in cates"
                    :key="item.id" @click="getPhotoByCateId(item.id)">
                        {{item.title}}
                    </a> -->
                <div class="mui-scroll">
                    <a class="mui-control-item mui-active" to="#item1mobile" data-wid="tab-top-subpage-1.html">
                        推荐
                    </a>
                    <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                        热点
                    </a>
                    <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                        北京
                    </a>
                    <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                        社会
                    </a>
                    <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                        娱乐
                    </a>
                </div>
            </div>

		</div>
        <!-- <ul class="photo-list">
            <li v-for="item in list" :key="item.id">
                <img v-lazy="item">
                
            </li>
        </ul> -->
        <ul class="pthoto-list">
            <router-link to="/home/photoinfo" tag="li">
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/1.jpg" alt="">
                    <router-link to="/home/photoslist"></router-link>
                    <div class="info">
                        <h1 class="info-title">标题</h1>
                        <h3 class="info-content">仿佛兮若轻云之蔽日，飘飘兮如流风之回雪。这句话意思是：行止若有若无象薄云轻轻掩住了明月，形象飘荡不定如流风吹起了回旋的雪花。这句出自三国魏曹植的《洛神赋》中对宓(fú)妃的描写，形容美女的美貌与气质优美、动人。描写的意境是：晃晃忽忽、迷迷茫茫一种似雾非雾、花开花散的梦境，飘渺的来来回回，魂无居所，游离彷徨，跳动的心早已忘记了疼痛，只晓凉的麻木。</h3>
                    </div>
                    </router-link>
            </router-link>
            <li>
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/2.jpg" alt="">
                    </router-link>
            </li>
            <li>
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/3.jpg" alt="">
                    
                    </router-link>
            </li>
            <li>
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/1.jpg" alt="">
                    <div class="info">
                        <h1 class="info-title">标题</h1>
                        <h3 class="info-content">仿佛兮若轻云之蔽日，飘飘兮如流风之回雪。这句话意思是：行止若有若无象薄云轻轻掩住了明月，形象飘荡不定如流风吹起了回旋的雪花。这句出自三国魏曹植的《洛神赋》中对宓(fú)妃的描写，形容美女的美貌与气质优美、动人。描写的意境是：晃晃忽忽、迷迷茫茫一种似雾非雾、花开花散的梦境，飘渺的来来回回，魂无居所，游离彷徨，跳动的心早已忘记了疼痛，只晓凉的麻木。</h3>
                    </div>
                    </router-link>
            </li>
            <li>
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/2.jpg" alt="">
                    </router-link>
            </li>
            <li>
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/3.jpg" alt="">
                    
                    </router-link>
            </li>
            <li>
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/1.jpg" alt="">
                    <div class="info">
                        <h1 class="info-title">标题</h1>
                        <h3 class="info-content">仿佛兮若轻云之蔽日，飘飘兮如流风之回雪。这句话意思是：行止若有若无象薄云轻轻掩住了明月，形象飘荡不定如流风吹起了回旋的雪花。这句出自三国魏曹植的《洛神赋》中对宓(fú)妃的描写，形容美女的美貌与气质优美、动人。描写的意境是：晃晃忽忽、迷迷茫茫一种似雾非雾、花开花散的梦境，飘渺的来来回回，魂无居所，游离彷徨，跳动的心早已忘记了疼痛，只晓凉的麻木。</h3>
                    </div>
                    </router-link>
            </li>
            <li>
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/2.jpg" alt="">
                    </router-link>
            </li>
            <li>
                <router-link to="/home/photoslist">
                    <img  src="../../images/Home/3.jpg" alt="">
                    
                    </router-link>
            </li>

        </ul>
    
    </div>
</template>
<script>
//导入mui的js文件
import mui from '../../lib/mui/js/mui.js'


export default {
    data(){
        return{
            cate:[],
            list:[]
        }
    },
    created(){
        this.getAllCategory(),
        this.getPhotoByCateId(0);
    },
    mounted(){
        mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    },
    methods:{
        getAllCategory(){
            this.$http.get('api/getmgcategory').then(result=>{
                if(result.body === 0){
                    result.body.message.unshift({title:"all",id:0});
                    this.cates=result.body.message;
                }
                
            })
        },
        getPhotoByCateId(cateId){
            this.$http.get('api/getimages'+cated).then(result=>{
                if(result.body.status===0){
                    this.list=result.body.message;
                }
            })
        }
    }
    
}
</script>
<style lang="" scoped>
    *{
        touch-action: pan-y
    }

    img{
        width: 100%;
        height: 100%;
    }
    /* .router-link-exact-active .mui-active[lazy="loading"]{
        width: 40px;
        height: 40px;
        margin:auto;
    } */


    ul{
        list-style: none;
        text-align:center;
        margin: 0 14px 14px 14px;
        padding: 0;
        }
    li{
        margin-bottom: 10px;
        box-shadow: 0 0 19px pink
    }
    .info{
        color:white;
        text-align: left;
        position: fixed;
        position:absolute;
        top: 390px;
        bottom: 0;
        background-color:rgba(0, 0, 0,0.4);
        margin-right: 20px;
        margin-left:5px; 
        max-height: 120px;
        

    }
    .info-title{
        font-size: 14px;

    }
    .info-content{
        font-size: 12px;
        /* font-style: oblique; */
        font-family: 'Times New Roman', Times, serif;
        
    }
      


    
</style>