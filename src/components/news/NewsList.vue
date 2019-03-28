<template>
    <div>
        <!-- //新闻列表 -->
      <ul class="mui-table-view">
          <!-- 获取数据后进行页面渲染的方法 -->
          <!-- <li class="mui-table-view-cell mui-media" v-for="item in newslist"
          :key="item.id">
            <router-link :to="'/home/NewsInfo/'+item.id">
                <img class="mui-media-object mui-pull-left" src="item.img_url">
                <div class="mui-media-body">
                    <h1>{{item.title}}</h1>
                    <p class='mui-ellipsis'><span>发表时间{{item.add_time | dateFormat}}</span><span>点击次数:{{item.click}}</span></p>
                </div>
            </touter-link>
        </li> -->
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                    <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>

        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                     <h1>幸福</h1>
                    <p class='mui-ellipsis'><span>发表时间：2019.3.26</span><span>点击次数:00</span></p>
                </div>
            </router-link>
        </li>
        <li class="mui-table-view-cell mui-media">
            <router-link to="/home/NewsInfo">
                <img class="mui-media-object mui-pull-left" src="../../images/Home/1.jpg">
                <div class="mui-media-body">
                     <h1>幸福1</h1>
                    <p class='mui-ellipsis'><span>发表时间：</span><span>点击次数</span></p>
                </div>
            </router-link>
        </li>
        
      </ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui';
export default {
    data(){
        return{
            // newslist:[]
        }
    },
    created(){
    //   this.getNewsList();  
    },
    methods:{
        // getNewsList(){
        //     this.$http.get("api/getnewslist").then(result=>{
        //         if(result.body.status===0){
        //             this.newslist=result.body.message;
        //         }else{
        //             Toast('获取失败')
        //         }
        //     })

        // }


    }
}
</script>


<style lang="scss" scoprd>
.mui-table-view{
    li{
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display:flex;
            justify-content: space-between;
        }
    }
}
    
</style>