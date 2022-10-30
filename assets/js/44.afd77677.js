(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{349:function(t,s,a){"use strict";a.r(s);var r=a(15),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-网络请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-网络请求"}},[t._v("#")]),t._v(" Vue 网络请求")]),t._v(" "),s("h2",{attrs:{id:"vue-脚手架配置代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-脚手架配置代理"}},[t._v("#")]),t._v(" Vue 脚手架配置代理")]),t._v(" "),s("h3",{attrs:{id:"配置单个代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置单个代理"}},[t._v("#")]),t._v(" 配置单个代理")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("vue.config.js")]),t._v(" 中添加如下配置：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devServer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:5000'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("优点：配置简单，请求资源时直接发给前端（8080）即可。")]),t._v(" "),s("li",[t._v("缺点：不能配置多个代理，不能灵活的控制请求是否走代理。")]),t._v(" "),s("li",[t._v("工作方式：若按照上述配置代理，当请求了前端不存在的资源时，那么该请求会转发给服务器 （优先匹配前端资源）")])]),t._v(" "),s("h3",{attrs:{id:"配置多个代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置多个代理"}},[t._v("#")]),t._v(" 配置多个代理")]),t._v(" "),s("p",[t._v("编写 "),s("code",[t._v("vue.config.js")]),t._v(" 配置具体代理规则：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devServer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("proxy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/api1'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有以 '/api1'开头的请求路径")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:5000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代理目标的基础路径")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把路径的 /api1 替换为空串")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pathRewrite")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'^/api1'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'/api2'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配所有以 '/api2'开头的请求路径")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("target")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:5001'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("changeOrigin")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pathRewrite")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'^/api2'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\nchangeOrigin 设置为 true 时，服务器收到的请求头中的 host：localhost:5000\nchangeOrigin 设置为 false 时，服务器收到的请求头中的 host：localhost:8080\nchangeOrigin 默认为 true\n*/")]),t._v("\n")])])]),s("ul",[s("li",[t._v("优点：可以配置多个代理，且可以灵活的控制请求是否走代理。")]),t._v(" "),s("li",[t._v("缺点：配置略微繁琐，请求资源时必须加前缀")])]),t._v(" "),s("h2",{attrs:{id:"vue-2-x-全局配置-axios"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-2-x-全局配置-axios"}},[t._v("#")]),t._v(" vue 2.x 全局配置 axios")]),t._v(" "),s("p",[t._v("实际项目开发中，几乎每个组件中都会使用 "),s("code",[t._v("axios")]),t._v(" 发起数据请求。此时会遇到如下两个问题：")]),t._v(" "),s("ul",[s("li",[t._v("每个组件中都需要导入 "),s("code",[t._v("axios")]),t._v("（代码臃肿）")]),t._v(" "),s("li",[t._v("每次发请求都需要填写完整的请求路径（不利于后期的维护）")])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("main.js")]),t._v(" 文件中进行配置：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 配置请求根路径")]),t._v("\naxios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaults"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("baseURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.com'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 把 axios 挂载到 Vue 原型上")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$http "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" aixos\n")])])]),s("p",[t._v("优点：每个组件可以通过 "),s("code",[t._v("this.$http.get")]),t._v(" 直接发起请求，无需再导入 "),s("code",[t._v("axios")]),t._v(" ；若根路径发生改变，只需修改 "),s("code",[t._v("axios.defaults.baseURL")]),t._v(" ，有利于代码维护。")]),t._v(" "),s("p",[t._v("缺点：无法实现 "),s("code",[t._v("API")]),t._v(" 的复用。即多个组件需要对同一个接口发起请求，那么每个组件都需要重复书写 "),s("code",[t._v("this.$http.get('/users')")]),t._v(" 类似的代码，造成冗余。（视频上的说法，个人认为真正的缺点是如果存在多个根路径，这种方式无法解决，所以才会有下面的改进方式。）")]),t._v(" "),s("p",[t._v("改进：对于每一个根路径，独立封装一个 "),s("code",[t._v("request.js")]),t._v(" 模块，组件导入所需根路径对应的 "),s("code",[t._v("axios")]),t._v(" 进行使用。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建 axios 实例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" request "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("baseURL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://api.taobao.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" request\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);