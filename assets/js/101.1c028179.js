(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{406:function(n,e,o){"use strict";o.r(e);var r=o(15),v=Object(r.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("------作业：\n晚上翻看一下swiperAPI")]),n._v(" "),e("p",[n._v("项目第四天:重要的事情\n1:mockjs模块实现模拟数据\n---对于将来实际工作的时候，后台没有准备好接口（服务器没有开发出来），前端工程师可以利用mock技术，\n实现模拟数据，将来项目上线（后台真实接口）写好了，替换为真实接口即可。\n---对于咱们而言，后台老师确实没有给首页中轮播这部分的接口，mock数据，你可以当中一个真实接口就行了。\n上线的时候，对于mock数据对于项目而言没有任何影响。")]),n._v(" "),e("p",[n._v("对于项目而言:真实的接口 /api/xxxx    模拟的数据/mock/xxxx\n模拟数据JSON：没有空格，最好使用格式化插件进行格式化。")]),n._v(" "),e("p",[n._v("2:swiper插件。\n提醒:当年学习过移动端视口、rem、高清图等等。\nswiper插件：可以在移动端、PC端都可以使用，这个插件经常可以快速开发轮播图。\n前端开发:轮播图、分页器、日历。")]),n._v(" "),e("p",[n._v("Swiper使用步骤：\n第一步：引入依赖包【swiper.js|swiper.css】\n第二步:静态页面中结构必须完整【container、wrap、slider】，类名不能瞎写\n第三步:初始化swiper实例")]),n._v(" "),e("hr"),n._v(" "),e("p",[n._v("1:swiper在Vue项目中使用 （开发ListContainer组件【首页banner图片】）\n提示：卸载插件，你可以不用删除node_modules文件夹，可以使用npm uninstall xxxx进行卸载\n1.1swiper安装到项目当中")]),n._v(" "),e("p",[n._v("1.2在相应的组件引入swiper.js|swiper.css")]),n._v(" "),e("p",[n._v("但是需要注意，home模块很多组件都使用到swiper.css,没必要在每一个组件内部都引入样式一次，\n只需要在入口文件引入一次即可。")]),n._v(" "),e("p",[n._v("1.3:初始化swiper实例在哪里书写?\n初始化swiper实例之前，页面中的节点（结构）务必要有，\n对于Vue一个组件而言，mounted[组件挂载完毕：相应的结构不就有了吗]\nmounted--\x3e组件挂载完毕")]),n._v(" "),e("p",[n._v("1.4动态效果为什么没有出来？\nSwiper需要获取到轮播图的节点DOM，才能给swiper轮播添加动态效果，\n因为没有获取到节点。")]),n._v(" "),e("p",[n._v("1.5第一种解决方案，延迟器（不是完美的解决方案）\n同学的想法：都不是完美的【错误的想法】\ncreated里面：created执行与mounted执行，时间差可能2ms，白扯\nupdated里面：如果组件有很多响应式（data），只要有一个属性值发生变化updated还会再次执行，再次初始化实例。")]),n._v(" "),e("p",[n._v("总结：第一种解决方案可以通过延迟器（异步）去解决问题，\n但是这种解决方案存在风险（无法确定用户请求到底需要多长时间），因此没办法确定\n延迟器时间。")]),n._v(" "),e("p",[n._v("2:Swiper在Vue项目中使用完美解决方案\n第一种解决方案问题出现在哪里：v-for,在遍历来自于Vuex（数据:通过ajax向服务器发请求，存在异步）")]),n._v(" "),e("p",[n._v("watch:监听属性，watch可以检测到属性值的变化，当属性值发生变化的时候，可以出发一次。")]),n._v(" "),e("p",[n._v("Vuex当中的仓库数据bannerList（组件在使用）：\nbannerList仓库数据有没有发生过变化？\n一定是有的：bannerList初始值空数组，当服务器的数据返回以后，它的bannerList存储的属性值会发生变化【变为服务器返回的数据】\n组件实例在使用仓库中的bannerList，组件的这个属性bannerList一定是发生过变化，watch可以监听到。")]),n._v(" "),e("p",[n._v("组件实例的一个方法:$nextTick\nthis.$nextTick(()=>{")]),n._v(" "),e("p",[n._v("})\nnextTick官网解释:\n在下次DOM更新, 循环结束之后,执行延迟回调。在 修改数据之后 立即使用这个方法，获取更新后的DOM。\n注意：组件实例的$nextTick方法，在工作当中经常使用，经常结合第三方插件使用，获取更新后的DOM节点")]),n._v(" "),e("p",[n._v("总结:\n1:Swiper插件工作的是很常用（今晚把API、基本使用方法）看看\n2:组件实例的$nextTick方法。\n在下次DOM更新, 循环结束之后,执行延迟回调。在 修改数据之后 立即使用这个方法，获取更新后的DOM")]),n._v(" "),e("p",[n._v("3)开发Floor组件\n开发Floor组件：Floor组件它被复用的（重复使用两次）")]),n._v(" "),e("p",[n._v("3.1:Floor组件获取mock数据，发请求的action书写在哪里?\n派发action应该是在父组件的组件挂载完毕生命周期函数中书写，因为父组件需要通知Vuex发请求，父组件\n获取到mock数据，通过v-for遍历 生成多个floor组件，因此达到复用作用。")]),n._v(" "),e("p",[n._v("3.2:父组件派发action，通知Vuex发请求，Home父组件获取仓库的数据，通过v-for遍历出多个Floor组件")]),n._v(" "),e("p",[n._v("3.3v-for|v-show|v-if|这些指令可以在自定义标签（组件）的身上使用")]),n._v(" "),e("p",[n._v("3.4组件间通信******面试必问的东西\nprops:父子\n插槽:父子\n自定义事件:子父\n全局事件总线$bus:万能\npubsub:万能\nVuex:万能\n$ref:父子通信\n3.5为什么在Floor组件的mounted中初始化SWiper实例轮播图可以使用.\n因为父组件的mounted发请求获取Floor组件，当父组件的mounted执行的时候。\nFloor组件结构可能没有完整，但是服务器的数据回来以后Floor组件结构就一定是完成的了\n，因此v-for在遍历来自于服务器的数据，如果服务器的数据有了，Floor结构一定的完整的。\n否则，你都看不见Floor组件")]),n._v(" "),e("p",[n._v("4)carousel全局组件\n如果项目当中出现类似的功能，且重复利用，封装为全局组件----【不封装也可以】")]),n._v(" "),e("p",[n._v("为了封装全局的轮播图组件:让Floor与listContainer组件中的代码一样，如果一样完全可以独立出来\n封装为一个全局组件。")]),n._v(" "),e("p",[n._v("最终:今天项目当中那部分业务有问题（没明白的）  ----1")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[n._v("项目业务逻辑OK的   -------------------------2\n")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);