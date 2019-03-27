<template>
    <div class="cmt-container">
      <h3>发表评论</h3>  
      <hr>
      <textarea placeholder="最多吐槽20字符！！"
      maxlength="120"></textarea>
      
      <mt-button type="primary" size="large">发表评论</mt-button>
     
      <div class="cmt-list">
          <div class="cmt-item">
              <div class="cmt-title">
                  第一楼    $nbsp;$nbsp;用户:$nbsp;$nbsp;发表时间：2012.3.6 
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
export default {
    data(){
        return{
            // pageIndex:1
        }
    },
    created(){
        // this.getComment();
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

    },
    // 
    
}
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