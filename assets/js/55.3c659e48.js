(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{361:function(t,v,_){"use strict";_.r(v);var a=_(15),e=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("blockquote",[v("p",[t._v("笔记来源："),v("a",{attrs:{href:"https://www.bilibili.com/video/BV1XJ411X7Ud",target:"_blank",rel:"noopener noreferrer"}},[t._v("尚硅谷 Web 前端 HTML5&CSS3 初学者零基础入门全套完整版"),v("OutboundLink")],1)])]),t._v(" "),v("p",[t._v("[toc]")]),t._v(" "),v("h1",{attrs:{id:"高度塌陷与-bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#高度塌陷与-bfc"}},[t._v("#")]),t._v(" 高度塌陷与 BFC")]),t._v(" "),v("h2",{attrs:{id:"_1-高度塌陷"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-高度塌陷"}},[t._v("#")]),t._v(" 1. 高度塌陷")]),t._v(" "),v("p",[t._v("在浮动布局中，父元素的高度默认是被子元素撑开的")]),t._v(" "),v("p",[t._v("当子元素浮动后，其会完全脱离文档流，子元素从文档流中脱离将会无法撑起父元素的高度，导致父元素的高度丢失")]),t._v(" "),v("p",[t._v("父元素高度丢失以后，其下的元素会自动上移，导致页面的布局混乱")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/79ace51ec70494c5917ac3d27ff5329b.gif",alt:"动画2021-41"}})]),t._v(" "),v("p",[t._v("所以高度塌陷是浮动布局中比较常见的一个问题，这个问题我们必须要进行处理！")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/11a161357960e3308e5d889ca6c60eba.png",alt:"img"}})]),t._v(" "),v("p",[t._v("别急，我们接着往下看")]),t._v(" "),v("h2",{attrs:{id:"_2-bfc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-bfc"}},[t._v("#")]),t._v(" 2. BFC")]),t._v(" "),v("p",[t._v("BFC（Block Formatting Context）块级格式化环境")]),t._v(" "),v("ul",[v("li",[t._v("BFC 是一个 CSS 中的一个"),v("mark",[t._v("隐含的属性")]),t._v("，可以为一个元素开启 BFC")]),t._v(" "),v("li",[t._v("开启 BFC 该元素会变成一个"),v("mark",[t._v("独立的布局区域")])])]),t._v(" "),v("p",[t._v("元素开启 BFC 后的特点：")]),t._v(" "),v("ul",[v("li",[v("mark",[t._v("不会被浮动元素覆盖")])]),t._v(" "),v("li",[v("mark",[t._v("父子元素外边距不会重叠")])]),t._v(" "),v("li",[v("mark",[t._v("可以包含浮动的元素")])])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/428820832a6f375b1cda617fde8453b8.png",alt:"img"}})]),t._v(" "),v("p",[t._v("可以通过一些特殊方式来开启元素的 BFC：")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("设置为"),v("mark",[t._v("浮动（不推荐）")]),t._v("：很明显下方元素被覆盖了，总不能让所有元素都浮动吧")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/a38cbf9ed8239821e3a9467190cbf1fa.gif",alt:"动画2021-40"}})])]),t._v(" "),v("li",[v("p",[t._v("设置为"),v("mark",[t._v("行内块元素（不推荐）")]),t._v("：不再独占一行，宽度变了，同时与下方元素产生了一点空隙")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/7558d16d4432a5069baf896fc023505f.gif",alt:"动画2021-39"}})])]),t._v(" "),v("li",[v("p",[t._v("设置"),v("mark",[v("code",[t._v("overflow")]),t._v("为非"),v("code",[t._v("visible")]),t._v("值")]),t._v("：既没有覆盖元素，也保持了独占一方的特性（保持了宽度），与下方元素也保持了最初的间隙")]),t._v(" "),v("p",[t._v("常用的方式为元素设置"),v("code",[t._v("overflow:hidden")]),t._v("（"),v("code",[t._v("overflow:auto")]),t._v("也是 ok 的） 开启其 BFC， 以使其可以包含浮动元素")]),t._v(" "),v("p",[v("code",[t._v("overflow:scroll")]),t._v(" 会有滚动条，可能并不需要的，所以不太推荐")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ca62f230f7f5767c0888734ed36ead36.gif",alt:"动画2021-38"}})]),t._v(" "),v("p",[t._v("不过，这种方式也存在一定问题，如下，"),v("code",[t._v("overflow")]),t._v("并没有完全清除 div2 布局上受到的影响")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/3c81ef620cbd90f54bc1023f38967e8b.gif",alt:"动画2021-34"}})])])]),t._v(" "),v("p",[v("strong",[t._v("总结")])]),t._v(" "),v("ul",[v("li",[t._v("可以通过变成浮动元素，来防止自身被浮动元素覆盖（有点“以毒攻毒”那味了）")]),t._v(" "),v("li",[t._v("可以设置行内块，来防止自身及其他元素被浮动元素覆盖（如果说浮动是“独善其身”，那行内块就有点“兼济天下”的意思）")]),t._v(" "),v("li",[t._v("可以设置"),v("code",[t._v("overflow")]),t._v("属性，包含浮动元素（既“独善其身”，又“兼济天下”，但仍有缺陷）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/b4e408068ab82a6ecab73a1fbc25f9b5.png",alt:"img"}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/6d2288432ad5b7031581962a1d9afbdd.png",alt:"img"}})]),t._v(" "),v("p",[t._v("我们可以打开"),v("code",[t._v("Zeal")]),t._v("手册（《02-前端开发准备》有介绍），查看关于 BFC 的说明文档")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/a4df090e5a9a297c2c7b07e1b5251306.png",alt:"image-20210526210723927"}})]),t._v(" "),v("p",[t._v("打开"),v("code",[t._v("Block formatting context")]),t._v("模块后，可以看到有很多开启 BFC 的方式")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/715774f89f4902f61e44de7a23f8f1d7.png",alt:"image-20210526210843339"}})]),t._v(" "),v("p",[t._v("我这里大概翻译了一下，并整理了一份表格，应该看起来更直观一点（有些概念因为还没有学习，翻译和理解有误的地方还望谅解）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("元素或属性")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("<html>")])]),t._v(" "),v("td",[t._v("文档根元素")])]),t._v(" "),v("tr",[v("td",[v("mark",[v("code",[t._v("float: left")])]),v("br"),v("mark",[v("code",[t._v("float: right")])])]),t._v(" "),v("td",[t._v("浮动元素（"),v("code",[t._v("float")]),t._v("不为"),v("code",[t._v("none")]),t._v("）")])]),t._v(" "),v("tr",[v("td",[v("mark",[v("code",[t._v("position: absolut")])]),v("br"),v("mark",[v("code",[t._v("position: fixed")])])]),t._v(" "),v("td",[t._v("绝对定位元素")])]),t._v(" "),v("tr",[v("td",[v("mark",[v("code",[t._v("display: inline-block")])])]),t._v(" "),v("td",[t._v("行内块元素")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("display: table-cell")])]),t._v(" "),v("td",[t._v("表格单元，默认值")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("display: table-caption")])]),t._v(" "),v("td",[t._v("表格标题，默认值")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("display: table")]),v("br"),v("code",[t._v("display: table-row")]),v("br"),v("code",[t._v("display: table-row-group")]),v("br"),v("code",[t._v("display: table-header-group")]),v("br"),v("code",[t._v("display: table-footer-group")]),v("br"),v("code",[t._v("display: inline-table")])]),t._v(" "),v("td",[t._v("匿名的表格单元，分别是 HTML 表格、表行、表体、表头和表脚的默认值")])]),t._v(" "),v("tr",[v("td",[v("mark",[v("code",[t._v("overflow: hidden")])]),v("br"),v("mark",[v("code",[t._v("overflow: scroll")])]),v("br"),v("mark",[v("code",[t._v("overflow: auto")])])]),t._v(" "),v("td",[v("code",[t._v("overflow")]),t._v("不为"),v("code",[t._v("visible")]),t._v("和"),v("code",[t._v("clip")]),t._v("的块元素")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("display: flow-root")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("contain: layout")]),v("br"),v("code",[t._v("contain: content")]),v("br"),v("code",[t._v("contain: paint")])]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("code",[t._v("display: flex")]),v("br"),v("code",[t._v("display: inline-flex")]),t._v("的直接子元素")]),t._v(" "),v("td",[t._v("Flex 项，如果它们本身既不是"),v("code",[t._v("flex")]),t._v("，也不是"),v("code",[t._v("grid")]),t._v("或"),v("code",[t._v("table")]),t._v("容器")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("display: grid")]),v("br"),v("code",[t._v("display: inline-grid")]),t._v("的直接子元素")]),t._v(" "),v("td",[t._v("Grid 项，如果它们本身既不是"),v("code",[t._v("flex")]),t._v("，也不是"),v("code",[t._v("grid")]),t._v("或"),v("code",[t._v("table")]),t._v("容器")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("column-count")]),t._v("不为"),v("code",[t._v("auto")]),v("br"),v("code",[t._v("column-width")]),t._v("不为"),v("code",[t._v("auto")])]),t._v(" "),v("td",[t._v("Multicol 容器，包含"),v("code",[t._v("column-count: 1")])])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("column-span: all")])]),t._v(" "),v("td",[t._v("应该总是创建一个新的格式化上下文，即使"),v("code",[t._v("column-span: all")]),t._v("元素不在 multicol 容器中")])])])]),t._v(" "),v("p",[t._v("但是，注意不管哪种方式，多多少少都会有些隐患、缺陷或者说“副作用”")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/54a3b91bf3738e16dc8d60c506924d20.png",alt:"image-20210526231648421"}})]),t._v(" "),v("h2",{attrs:{id:"_3-clear"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-clear"}},[t._v("#")]),t._v(" 3. clear")]),t._v(" "),v("p",[t._v("我们这里设计三个兄弟元素，对前两个元素进行"),v("code",[t._v("float")]),t._v("的浮动属性设置，看下效果")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/6285eef0e0e5defcaef2925ec2b85696.gif",alt:"动画2021-36"}})]),t._v(" "),v("p",[t._v("由于 box1 的浮动，导致 box3 位置上移也就是 box3 受到了 box1 浮动的影响，位置发生了改变（注意，这里文字并没有被覆盖，《09-浮动》一节说过浮动的特点，其中第 7 点就是“文字环绕”的问题）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/29f0b07925ee64e09181cca348316db7.png",alt:"img"}})]),t._v(" "),v("p",[t._v("如果我们不希望某个元素因为其他元素浮动的影响而改变位置，可以通过"),v("code",[t._v("clear")]),t._v("属性来清除浮动元素对当前元素所产生的影响")]),t._v(" "),v("p",[v("code",[t._v("clear")]),t._v("作用："),v("mark",[t._v("清除浮动元素对当前元素所产生的影响（本质是为元素添加一个"),v("code",[t._v("margin-top")]),t._v("属性，值由浏览器自动计算）")])]),t._v(" "),v("p",[t._v("可选值：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("left")]),t._v(" 清除左侧浮动元素对当前元素的影响")]),t._v(" "),v("li",[v("code",[t._v("right")]),t._v(" 清除右侧浮动元素对当前元素的影响")]),t._v(" "),v("li",[v("code",[t._v("both")]),t._v(" 清除两侧中影响较大一侧元素的影响（注意，这里不是同时清除两侧的影响）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/7b3a3be80af3b924c768f14d1feef532.gif",alt:"动画2021-37"}})]),t._v(" "),v("h2",{attrs:{id:"_4-after"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-after"}},[t._v("#")]),t._v(" 4. after")]),t._v(" "),v("p",[t._v("我们学习了上面知识后，了解了高度塌陷问题的解决方式，其中主要有")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("通过"),v("code",[t._v("overflow: hidden")]),t._v("等可以为元素开启 BFC")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/2a64a7f4d7361b89342ad40eabb82710.gif",alt:"动画2021-35"}})])]),t._v(" "),v("li",[v("p",[t._v("通过"),v("code",[t._v("clear: both")]),t._v("等可以清除浮动对元素产生的影响")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/296eed7a83250499d08f2fbaa1b3291f.gif",alt:"动画2021-33"}})])])]),t._v(" "),v("p",[t._v("同时也了解到，这两种方式都有一定的弊端和隐患。那有没有一种更好的方式去解决高度塌陷的问题呢？")]),t._v(" "),v("p",[t._v("答案当然是：有！")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/9d32694d81d9cc615113bfd6de3b2a45.png",alt:"image-20210526233234635"}})]),t._v(" "),v("p",[t._v("我们直接上效果图")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ac9d8de28e765aa3612db88e0e3665ab.gif",alt:"动画2021-32"}})]),t._v(" "),v("p",[v("strong",[t._v("Q1：这里使用了一个伪元素选择器"),v("code",[t._v("::after")]),t._v("，那有人会问了，跟在 box2 下直接定义一个 box3 有什么区别呢？")])]),t._v(" "),v("p",[t._v("A：我们知道，网页的结构思想是：结构+表现+行为。在 box2 下直接定义一个 box3，属于结构；而使用伪元素选择器，属于表现")]),t._v(" "),v("p",[t._v("而高度塌陷问题属于表现问题，定义 box3 的目的是为了撑起 box1 的内容，属于表现，而不是结构，所以在 css 中定义"),v("code",[t._v("::after")]),t._v("更符合网页的编程思想")]),t._v(" "),v("p",[v("strong",[t._v("Q2：为什么需要使用"),v("code",[t._v("display: block")]),t._v("呢？")])]),t._v(" "),v("p",[t._v("A：因为默认情况下，"),v("code",[t._v("::after")]),t._v("伪元素是一个行内元素，如果不转为块元素，将仍然撑不起 box1 的高度")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/38df19f0100616bfd366757a2df68018.png",alt:"image-20210526235431125"}})]),t._v(" "),v("h2",{attrs:{id:"_5-clearfix"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-clearfix"}},[t._v("#")]),t._v(" 5. clearfix")]),t._v(" "),v("p",[t._v("我们在前面《06-盒模型》一节中说过垂直布局中边距重叠的问题：相邻的垂直方向外边距会发生重叠现象")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ba545f805064146c3744634c3a18d6cc.gif",alt:"动画2021-30"}})]),t._v(" "),v("p",[t._v("如上图所示，子元素设置了一个"),v("code",[t._v("margin-top")]),t._v("之后，父元素跟随子元素一起进行了移动")]),t._v(" "),v("p",[t._v("即我们之前说的"),v("q",[t._v("父子元素间相邻外边距，子元素会传递给父元素（上外边距）")])]),t._v(" "),v("p",[t._v("聪明的小伙伴已经想到了，用刚才说的伪元素选择器啊")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ce282bce62e362e18faf2d65c90b08b3.gif",alt:"img"}})]),t._v(" "),v("p",[t._v("好，我们先来看下效果")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/d03986dc25481fafe66233a5c5470ef6.gif",alt:"动画2021-29"}})]),t._v(" "),v("p",[t._v("貌似是没有任何变化，到底是什么地方不对呢？")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/09fd881a8713a5541ab547fa10bcea10.png",alt:"img"}})]),t._v(" "),v("p",[t._v("我们再来回顾下使用"),v("code",[t._v("after")]),t._v("伪元素的心路历程：")]),t._v(" "),v("ul",[v("li",[t._v("使用无内容的 box3 撑起 box1 ==》表现代替结构（"),v("code",[t._v("::after")]),t._v("代替 box3）")]),t._v(" "),v("li",[v("code",[t._v("clear")]),t._v("清除浮动对元素产生的影响（还记得"),v("code",[t._v("clear")]),t._v("的原理么？）")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/9bd752f3fdd37c33a292b5fccd1f2b8f.png",alt:"img"}})]),t._v(" "),v("p",[t._v("其实就是给元素设置了一个"),v("code",[t._v("margin-top")]),t._v("属性，不过这个在开发者工具中是看不到的")]),t._v(" "),v("p",[t._v("既然如此，就相当于在 box2 下面添加一个 box3，然后给 box3 设置一个"),v("code",[t._v("margin-top")]),t._v("属性")]),t._v(" "),v("p",[t._v("到此为止，")]),t._v(" "),v("p",[t._v("∵ "),v("q",[t._v("相邻的垂直方向外边距")]),t._v(" 这个条件仍然满足")]),t._v(" "),v("p",[t._v("∴ "),v("q",[t._v("会发生重叠现象")]),t._v("这个结论也依然成立")]),t._v(" "),v("p",[t._v("具体点就是，"),v("q",[t._v("父子元素间相邻外边距，子元素会传递给父元素（上外边距）")]),t._v("，表现为 box1 和 box2 同步往下移动")]),t._v(" "),v("p",[t._v("那我们应该怎么做才能解决这个问题？ "),v("s",[t._v("凭你们朴素的情感，应该怎么判？")]),t._v(" 当然就是让上述条件不满足呗！")]),t._v(" "),v("p",[t._v("怎么能够不满足？当然是让两个元素垂直外边距不相邻啊！")]),t._v(" "),v("p",[t._v("好，多说无益，我们直接上代码看效果！")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/87eab6edc155de046c6841b0586ba336.gif",alt:"动画2021-28"}})]),t._v(" "),v("p",[t._v("我们用了"),v("code",[t._v("before")]),t._v("伪元素选择器，目的当然是让 box1 和 box2 的外边距不相邻，但是好像并没有效果")]),t._v(" "),v("p",[t._v("我们再换成"),v("code",[t._v("display: inline-block")]),t._v("属性看看")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/b5a137926b68526aff7ad926c032fe98.gif",alt:"动画2021-27"}})]),t._v(" "),v("p",[t._v("好像是解决了父元素布局的问题，但是子元素怎么还往下跑了一段距离？ "),v("s",[t._v("是谁给的勇气？")])]),t._v(" "),v("p",[t._v("因为"),v("code",[t._v("inline-block")]),t._v("兼顾行内元素和块元素的特点，既可以设置宽高也不独占一行")]),t._v(" "),v("p",[t._v("在没有设置宽高时，会存在一个默认高度，所以"),v("code",[t._v("inline-block")]),t._v("仍然行不通")]),t._v(" "),v("p",[t._v("还有一个属性，"),v("code",[t._v("display: table")])]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/7999d34a5a577908d59299abb852fe35.gif",alt:"动画2021-26"}})]),t._v(" "),v("p",[t._v("Bingo！实现了我们最终想要的效果")]),t._v(" "),v("p",[v("strong",[t._v("Q1：为什么没有使用 clear 属性？")])]),t._v(" "),v("p",[t._v("A：不是说了吗？"),v("code",[t._v("clear")]),t._v("是为了清除浮动对布局的影响，我们现在没有浮动的元素啊，我们要讨论的也不是浮动的问题")]),t._v(" "),v("p",[v("strong",[t._v("Q2：display 不是还有一个"),v("code",[t._v("none")]),t._v("属性么，为什么不用呢？")])]),t._v(" "),v("p",[t._v("A："),v("code",[t._v("none")]),t._v("属性是不占据位置，但是也不能让元素相邻的外边距分离啊")]),t._v(" "),v("p",[v("strong",[t._v("Q3：为什么"),v("code",[t._v("table")]),t._v("值就可以呢？")])]),t._v(" "),v("p",[t._v("A：这个问题问的非常好，算是问到点上了！我们上面在讲开启 BFC 的一些方法的时候，也提到了该属性。而且，应该牢记的是，元素开启 BFC 后的其中一个特点就是 "),v("q",[v("mark",[t._v("父子元素外边距不会重叠")])]),t._v("。当然，这里也需要合理选择伪元素选择器，使其外边距不相邻才行")]),t._v(" "),v("p",[t._v("另外，总结一下：")]),t._v(" "),v("ul",[v("li",[t._v("高度塌陷问题，一般用"),v("code",[t._v("::after")])]),t._v(" "),v("li",[t._v("外边距重叠问题，一般用"),v("code",[t._v("::before")])])]),t._v(" "),v("p",[t._v("不知道到这里，大家能不能想明白这两件事情")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ca42dae38fd9f042dc0fb3640a1489a9.png",alt:"img"}})]),t._v(" "),v("p",[t._v("那么问题来了，有没有一个两全其美的办法，既可以解决高度塌陷，又可以解决外边距重叠呢？")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/0819d9f0a70423ba3116ab56c728cda3.png",alt:"img"}})]),t._v(" "),v("p",[t._v("当然有！"),v("code",[t._v("clearfix")]),t._v(" 这个样式就可以同时解决高度塌陷和外边距重叠的问题")]),t._v(" "),v("p",[t._v("当你在遇到这些问题时，直接使用"),v("code",[t._v("clearfix")]),t._v("这个类即可，他就可以帮你轻松搞定 css 中的两大难题")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix::before,\n.clearfix::after")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("其中"),v("code",[t._v(".clearfix::before")]),t._v("是为了解决外边距重叠问题")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix::before")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[v("code",[t._v(".clearfix::after")]),t._v("是为了解决高度塌陷问题")]),t._v(" "),v("div",{staticClass:"language-css extra-class"},[v("pre",{pre:!0,attrs:{class:"language-css"}},[v("code",[v("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".clearfix::after")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token property"}},[t._v("clear")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("两者合在一起，就可以完美地解决高度塌陷和外边距重叠这两大“世纪难题”了")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f93beec8c02faaf177b44418a7edcb24.png",alt:"image-20210528030932616"}})])])}),[],!1,null,null,null);v.default=e.exports}}]);