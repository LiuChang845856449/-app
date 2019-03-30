<template>
    <div class="cmt-container">
      <h3>发表评论</h3>  
      <hr>
      <textarea placeholder="最多吐槽20字符！！"
      maxlength="120" v-model="msg"></textarea>
      
      <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
     
      <div class="cmt-list">
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼    &nbsp;&nbsp;用户:&nbsp;&nbsp;发表时间：2012.3.6 
              </div>
              <div class="comlist-body">
                  锄禾日当午
              </div>
          </div>

      </div>
       <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
    <!-- <div class="cmt-container">
      <h3>发表评论</h3>  
      <hr>
      <textarea placeholder="最多吐槽20字符！！"
      maxlength="120"></textarea>
      
      <mt-button type="primary" size="large">发表评论</mt-button>
     
      <div class="cmt-list">
          <div class="cmt-item" v-for="(item,i)in coments" :key="item.add_time">
              <div class="cmt-title">
                  第{{i+1}}楼 &nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | dateFormat}}2012.3.6 
              </div>
              <div class="comlist-body">
                  {{item.content==='undefine'?'此用户很懒，啥都没说' :item.content}}
              </div>
          </div>

      </div>
       <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div> -->
</template>
<script>
import{Toast} from "mint-ui"
export default {
    data(){
        return{
            // pageIndex:1

            msg:''
        }
    },
    created(){
        // this.getComment();
        this.postComment()
    },
    methods: {
        // getComment(){
        //     this.$http.get("api/getcomment/"+this.id+
        //     "?pageindex="+this.pageIndex).then(result=>{
        //         if(result.body===0){
        //             this.comments=this.comment.concat(result.body.message)
        //         }else{
        //             Toast("pinglunshibai")
        //         }
        //     })
        
        // }，
        // getMore(){
        //     this.pageIdex++;
        //     this.getComments();
        // },
        // props:[id]

    
    postComment(){
        
        if(this.msg.trim().length ===0){
            return Toast ("评论内容不能为空")
        }
        //post参数
        //1，请求的url地址
        //2.提交给服务器的数据对象{content：this.mag}
        //3.定义提交时候，表单中的数据的格式{emulateJSON：true}
        this.$http.post("api/postcommet"+this.$route.params.id,
        {content:this.msg.trim()
        })
        .then(function(result){
            if(result.body.status===0){
                var cmt ={
                    user_name:"匿名用户",
                    add_time:Data.now(),
                    content:this.msg.trin()

                };
                this.comment.unshift(cmt);
                this.msg=''
            }
        })

    }
    // 
    
}}
</script>

<style lang="">
    
    h3{ font-size:16px;}
    textarea{font-size: 10px;
    height: 85px;
    margin: 0;
    }
    .cmt-list{
        margin:5px 0;
    }
    .cmt-item{
        font-size:13px;
    }
    .cmt-title{
        line-height: 30px;
        background-color: #ccc;
        font-size: 10px;
        
    }
    .cmt-body{
        line-height: 30px;
        text-indent:2em;

    }
   
     
    
</style>