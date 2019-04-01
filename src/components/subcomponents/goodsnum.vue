<template >
    <div>
       <div class="mui-numbox" data-numbox-min='1' data-numbox-max='60'>
            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
            <input id="test" class="mui-input-numbox" 
            type="number" value="1" @change="countChanged" ref="numbox" />
            <!--  -->
            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        </div>
    </div>
    <!-- //子组件什么时候把数据传递给父组件 -->
</template>
<script>
import mui from '../../lib/mui/js/mui.min.js';
export default {
    data(){
        return{}
    },
    mounted(){
        mui(".mui-numbox").numbox()
    },
    methods:{//监听数据框改变
        countChanged(){
            // 每当文本框数据被修改时，立即把最新的
            // console.log(this.$refs.numbox.value)
            this.$emit("getcount",parseInt(this.$refs.numbox.value))
        }

    }

    
}


</script>
<style lang="">
   
</style>