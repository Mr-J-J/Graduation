(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item"],{"1b38":function(t,n,e){},"8a3e":function(t,n,e){"use strict";e.r(n);var i=e("c76e"),a=e("9321");for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);e("e904");var r,c=e("f0c5"),o=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"0087ad7e",null,!1,i["a"],r);n["default"]=o.exports},9321:function(t,n,e){"use strict";e.r(n);var i=e("f580"),a=e.n(i);for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);n["default"]=a.a},c76e:function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return i}));var i={uIcon:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(e.bind(null,"5bee"))},uBadge:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uview-ui/components/u-badge/u-badge")]).then(e.bind(null,"c8d4"))}},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.$u.addStyle(t.customStyle)]));t.$mp.data=Object.assign({},{$root:{s0:e}})},u=[]},e904:function(t,n,e){"use strict";var i=e("1b38"),a=e.n(i);a.a},f580:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("9958"));function a(t){return t&&t.__esModule?t:{default:t}}var u={name:"u-tabbar-item",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],data:function(){return{isActive:!1,parentData:{value:null,activeColor:"",inactiveColor:""}}},created:function(){this.init()},methods:{init:function(){this.updateParentData(),this.parent||t.$u.error("u-tabbar-item必须搭配u-tabbar组件使用");var n=this.parent.children.indexOf(this);this.isActive=(this.name||n)===this.parentData.value},updateParentData:function(){this.getParentData("u-tabbar")},updateFromParent:function(){this.init()},clickHandler:function(){var t=this;this.$nextTick((function(){var n=t.parent.children.indexOf(t),e=t.name||n;e!==t.parent.value&&t.parent.$emit("change",e),t.$emit("click",e)}))}}};n.default=u}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item-create-component',
    {
        'uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8a3e"))
        })
    },
    [['uni_modules/uview-ui/components/u-tabbar-item/u-tabbar-item-create-component']]
]);
