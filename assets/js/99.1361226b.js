(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{404:function(n,e,v){"use strict";v.r(e);var _=v(15),t=Object(_.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("1:重写push与replace方法\n工作的时候想处理掉，不想处理对于你的程序没有任何影响\nfunction push(){\nreturn new Promise(resolve,reject){")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("}\n")])])]),e("p",[n._v("}")]),n._v(" "),e("p",[n._v("2:axios二次封装\n-----API：关于请求相关的（axios）\n请求、响应拦截器----nprogress进度条")]),n._v(" "),e("p",[n._v("3:vuex\n当项目比较大，组件通信数据比较复杂，这种情况在使用vuex")]),n._v(" "),e("p",[n._v("Vuex是插件，通过vuex仓库进行存储项目的数据")]),n._v(" "),e("p",[n._v("1)vuex模块式开发【modules】\n由于项目体积比较大，你向服务器发请求的接口过多，服务器返回的数据也会很多，如果还用以前的方式存储数据，导致vuex中的state数据格式比较复杂。采用vuex模块式管理数据。\nVuex核心概念:state、actions、mutations、getters、modules")]),n._v(" "),e("p",[n._v("{\nstate：{\na:1,\nb:2,\nc:[],\nd:{}\n}\n}")]),n._v(" "),e("p",[n._v("//模块式开发\n{\nstate:{\nhome:{a:1},\nsearch:{},\ndetail:{}\n}\n}")]),n._v(" "),e("p",[n._v("2)商品分类三级联动展示动态数据")]),n._v(" "),e("p",[n._v("以前基础课程的时候，发请求操作如下：在组件的mounted中书写axios.get||post,获取到数据存储到组件的data当中进行使用")]),n._v(" "),e("p",[n._v("你们写项目的时候发请求在哪里发呀？\nmounted|created:都可以")]),n._v(" "),e("p",[n._v("mounted：模板已经变为真是DOM【只不过没有数据，显示空白】，因为ajax是异步，需要时间的。\ncreated：稍微好那么一丢丢（不算啥）")]),n._v(" "),e("p",[n._v("3)商品分类数据猜想？")]),n._v(" "),e("p",[n._v("[\n{\nid:1,categoryName:'图书',\nchild:[\n{id:3.14,\ncategoryName:'影像'，\nchild:[\n{id:4,categoryName:'华为'}\n]\n}\n]\n}\n]")]),n._v(" "),e("p",[n._v("4)完成动态展示商品分类的数据")]),n._v(" "),e("p",[n._v("5)完成一级分类的背景效果\n第一种解决方案：CSS  hover 怎么接单怎么来")]),n._v(" "),e("p",[n._v("6)完成动态展示2|3联动结构")]),n._v(" "),e("p",[n._v("7)演示卡顿现象")]),n._v(" "),e("p",[n._v("8)函数防抖与节流*******面试题")]),n._v(" "),e("p",[n._v("正常：事件触发非常频繁，而且每一次的触发，回调函数都要去执行（如果时间很短，而回调函数内部有计算，那么很可能出现浏览器卡顿）")]),n._v(" "),e("p",[n._v("防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会触发，也就是说如果连续快速的触发,只会执行最后一次")]),n._v(" "),e("p",[n._v("节流：在规定的间隔时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发")]),n._v(" "),e("p",[n._v("今晚需要把防抖与节流的原理，通过JS实现【闭包 + 延迟器】")]),n._v(" "),e("p",[n._v("9)优化项目。\nv-if|v-show\n按需加载\n函数防抖与节流\n按需加载:对于loadsh插件，它里面封装的函数功能很多\nimport _ from lodash 相当于把全部功能引入进来，但是我们只是需要节流。")]),n._v(" "),e("p",[n._v("10)路由的跳转与传参")]),n._v(" "),e("p",[n._v("第一种声明式导航:为什么使用router-link组件的时候，会出现卡顿那？\nrouter-link是一个组件：相当于VueComponent类的实例对象，一瞬间\nnew VueComponent很多实例（1000+），很消耗内存，因此导致卡顿。")]),n._v(" "),e("p",[n._v("第二种编程式导航:push|replace")]),n._v(" "),e("p",[n._v("三级分类由于使用router-link的时候，会出现卡顿现象，因此采用编程式导航。")]),n._v(" "),e("p",[n._v("路由跳转的时候【home->search】：需要进行路由传递参数【分类的名字、一、二、三级分类的id】")]),n._v(" "),e("p",[n._v("this.$router.push()")]),n._v(" "),e("p",[n._v("{\nname:'search',\nquery:{\ncategoryName:'电子书',\ncategory2Id:4\n}\n}")])])}),[],!1,null,null,null);e.default=t.exports}}]);