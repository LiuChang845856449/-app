#这是我的第一个项目
##用心去感受
###我们是有灵魂的程序员，我们的代码富有诗意
####废话少说
##制作首页app组件
1.完成Header区域，使用mint-ui中的Header
2.制作底部的tabbar ，使用MUI的tabbar.html
+在制作购物车小图标的时候，
 先把扩展样式拷贝到项目中
 再拷贝扩展库的ttf到项目中
 为购物车小图标添加如下样式mui-icon-extra mui-icon-extra-cart
3.要在中间区域放一个路由匹配组件
##改造tabbar为router-link
##设置路由高亮
##点击tabbar中的路有链接，展示对应的路由组件
##制作首页轮播图布局
##加载首页轮播图数据
1.获取数据，使用vue-resource
2.使用vue-resource 的this.$http.get
3.获取到的数据，保存到data上
4.使用v-for循环渲染每个item项
##改造新闻链接路由
## 新闻页面制作
1.绘制界面
2.使用vue-resource获得新数据
3.渲染真实数据

## 实现新闻资讯列表 点击跳转到新闻详情
1.把列表每一项改造为 router-link 同时，在跳转的时候应该提供唯一的Id标识符
2.创建新闻详情的组建页面 Newsinfo.vue
3.在路由模块中，将 新闻详情的 路由地址 和 组件页面对应起来

## 实现新闻详情的页面布局和数据渲染


## 单独封装一个 comment.vue评论组件
1.先创建一个单独的组件模板
2.在需要comment.vue组建的页面中倒入组件
3.import coment from './comment.vue’
4.在父组件中，使用components属性，将刚才导入的comment组件。注册为自己的子组件
4.将注册子组件时候的，注册名称，以标签的形式 ，在页面中引用即可
## 实现点击加载更多评论的功能
1.为加载更多按钮，绑定点击事件，在事件中，请求下一页数据
2.点击加载更多，让pageIndex++，然后重新调用this.getCom恩特List（）方法重新获取最新一页数据
3.为了防止新数据覆盖老数据，我们在加载的时候，每当获取到新数据，应该让 老数据调用数组的从cat方法，拼接上新数据

## 发表评论功能
1.把文本框做双向数据绑定
2.为发表按钮绑定一个事件
3.校验评论内容是否为空，如果为空，则Toast提示用户
4.通过Vue-resource 发送一个请求，把评论内容交给服务器
5.党发表评论OK后，重新刷新列表，以查看最新的评论
+如果调用getComments 方法重新刷新评论列表的话，可能只能得到最后一页的评论，之前的评论获取不到
+当评论成功后，在客户端，手动拼接处一个最新的评论对象，然后，调用数组的UNshift 方法，把最新的评论，追加到data中comments的开头，这样，就能完美的刷新评论列表的需求。

## 改造图片分析 按钮为 路由的连接并显示对应的页面

## 绘制图片列表组件的页面结构，并美化样式
1. 制作顶部的滑动条
2.制作底部的图片列表
##制作顶部的滑动条的坑：
1.需要借助MUI中的ta-top-webview-main.html
2.需要把slider区域的 full-screen 去掉
3.滑动条无法正常触发滑动，通过检查官方文档，发现JS组件，需要被初始化一下
+导入mui.js
+调用官方提供的方式去初始化
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
4.我们在初始化滑动条的时候，导入了MUI，但是报错Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
+ 可能是mui。js中用到了这三个东西，但是webpack打包好的bundle.js中，默认是启用严格模式的，所以两者冲突了；
+ 解决方案：1.把mui.js中的非严格模式的代码改掉，不现实
           2.webpack打包过程中禁用严格模式。
+ 最终我们选择了plan B 移除严格模式：使用插件
babel-plugin-transform-remove-strict-mode
5.刚进入 图片分享页面的时候，滑动条无法正常工作，经过我们认真分析，发现，如果要初始化 滑动条，必须要等 DOM 元素加载完毕，所以，我们把 初始化 滑动条 的代码 ，搬到了 mounted 生命周期函数中。
6.当滑动条 调试OK后，发现，tabbar 无法正常工作了，这时候，我们需要把 每个 tabbar 按钮的样式中 ‘mui-tab-item' 重新改一下名字 

### 制作图片列表区域
1.图片列表需要使用懒加载技术，可以使用Mint-ui 提供的现成的组件’lazy-load
2.根据lazy-load 的使用文档 尝试使用
3.渲染图片
###  实现了图片列表的懒加载改造和美化

### 实现了点击图片 跳转到 图片详情页面
1.在改造li成 router-link 的时候，用tag 来指定要渲染为哪种元素。
## 实现缩略图的功能
1.使用vue-preview 插件
2.获取所有图片列表，使用v-for 指令渲染数据
3.img标签上的class不能去掉
4.每个图片数据对象必须有w和h属性


## 尝试在手机上去实现项目的预览和测试
1.保证手机是正常运行的
2.保证手机和电脑处于同一个WiFi环境中，手机可以访问到电脑的ip，
3.打开自己的项目中package.json 文件中，在dev脚本中，添加一个 --host 指令，把当前电脑的WiFi ip地址，设置为 --host的指令值
+如何查看自己电脑所处的ip,dev 中设置 -- host ip地址，即可。




