(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{372:function(t,a,e){"use strict";e.r(a);var s=e(15),v=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("笔记来源："),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1XJ411X7Ud",target:"_blank",rel:"noopener noreferrer"}},[t._v("尚硅谷Web前端HTML5&CSS3初学者零基础入门全套完整版"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("h1",{attrs:{id:"媒体查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询"}},[t._v("#")]),t._v(" 媒体查询")]),t._v(" "),a("h2",{attrs:{id:"响应式布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#响应式布局"}},[t._v("#")]),t._v(" 响应式布局")]),t._v(" "),a("ul",[a("li",[t._v("网页可以根据不通的设备或窗口大小呈现出不同的效果")]),t._v(" "),a("li",[t._v("使用 "),a("em",[t._v("响应式布局")]),t._v("，可以使一个网页适用于所有设备")]),t._v(" "),a("li",[t._v("响应布局的关键就是 "),a("em",[t._v("媒体查询")])]),t._v(" "),a("li",[t._v("通过媒体查询，可以为不同的设备，或设备不同状态来分别设置样式")])]),t._v(" "),a("h2",{attrs:{id:"媒体查询-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询-2"}},[t._v("#")]),t._v(" 媒体查询")]),t._v(" "),a("h3",{attrs:{id:"媒体查询语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体查询语法"}},[t._v("#")]),t._v(" 媒体查询语法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("@media查询规则{}")])])]),t._v(" "),a("h3",{attrs:{id:"媒体类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体类型"}},[t._v("#")]),t._v(" 媒体类型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("all")]),t._v(" 所有设备")]),t._v(" "),a("li",[a("code",[t._v("print")]),t._v(" 打印设备")]),t._v(" "),a("li",[a("code",[t._v("screen")]),t._v("带屏幕的设备")]),t._v(" "),a("li",[a("code",[t._v("speech")]),t._v(" 屏幕阅读器")])]),t._v(" "),a("p",[t._v("可以使用"),a("code",[t._v(",")]),t._v("连接多个媒体类型，这样它们之间就是一个或的关系")]),t._v(" "),a("p",[t._v("可以在媒体类型前添加一个"),a("code",[t._v("only")]),t._v("，表示只有。"),a("code",[t._v("only")]),t._v("的使用主要是为了兼容一些老版本浏览器")]),t._v(" "),a("h3",{attrs:{id:"媒体特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#媒体特性"}},[t._v("#")]),t._v(" 媒体特性")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("width")]),t._v(" 视口的宽度")]),t._v(" "),a("li",[a("code",[t._v("height")]),t._v(" 视口的高度")]),t._v(" "),a("li",[a("code",[t._v("min-width")]),t._v(" 视口的最小宽度（视口大于指定宽度时生效）")]),t._v(" "),a("li",[a("code",[t._v("max-width")]),t._v(" 视口的最大宽度（视口小于指定宽度时生效）")])]),t._v(" "),a("h3",{attrs:{id:"断点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#断点"}},[t._v("#")]),t._v(" 断点")]),t._v(" "),a("p",[t._v("样式切换的分界点，我们称其为断点，也就是网页的样式会在这个点时发生变化一般比较常用的断点")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("范围（px）")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型（屏幕）")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("写法（媒体特性）")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("小于768")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("超小屏幕")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("max-width=768px")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("大于768")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("小屏幕")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("min-width=768px")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("大于992")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("中型屏幕")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("min-width=992px")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("大于1260")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("大屏幕")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("min-width=1200px")])])])])]),t._v(" "),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("p",[t._v("当屏幕宽度为500px和700px之间时，背景色变为"),a("code",[t._v("#bfa")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("only")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("500px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("700px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #bfa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n")])])])])}),[],!1,null,null,null);a.default=v.exports}}]);