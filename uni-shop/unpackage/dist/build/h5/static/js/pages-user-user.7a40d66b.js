(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-user"],{"51a7":function(t,i,e){var a=e("b6fc");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("00f0880e",a,!0,{sourceMap:!1,shadowMode:!1})},"5c79":function(t,i,e){"use strict";var a=e("51a7"),n=e.n(a);n.a},"6ff6":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return c})),e.d(i,"a",(function(){return a}));var a={uniNumberBox:e("4433").default},n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",{staticClass:"container"},[t.hasLogin&&!0!==t.empty?e("v-uni-view",[e("v-uni-view",{staticClass:"cart-list"},[t._l(t.cartList,(function(i,a){return[e("v-uni-view",{key:i.id+"_0",staticClass:"cart-item",class:{"b-b":a!==t.cartList.length-1}},[e("v-uni-view",{staticClass:"image-wrapper"},[e("v-uni-image",{class:[i.loaded],attrs:{src:i.image,mode:"aspectFill","lazy-load":!0},on:{load:function(i){arguments[0]=i=t.$handleEvent(i),t.onImageLoad("cartList",a)},error:function(i){arguments[0]=i=t.$handleEvent(i),t.onImageError("cartList",a)}}}),e("v-uni-view",{staticClass:"yticon icon-xuanzhong2 checkbox",class:{checked:i.checked},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.check("item",a)}}})],1),e("v-uni-view",{staticClass:"item-right"},[e("v-uni-text",{staticClass:"clamp title"},[t._v(t._s(i.title))]),e("v-uni-text",{staticClass:"attr"},[t._v(t._s(i.attr_val))]),e("v-uni-text",{staticClass:"price"},[t._v("¥"+t._s(i.price))]),e("uni-number-box",{staticClass:"step",attrs:{min:1,max:i.stock,value:i.number>i.stock?i.stock:i.number,isMax:i.number>=i.stock,isMin:1===i.number,index:a},on:{eventChange:function(i){arguments[0]=i=t.$handleEvent(i),t.numberChange.apply(void 0,arguments)}}})],1),e("v-uni-text",{staticClass:"del-btn yticon icon-fork",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.deleteCartItem(a)}}})],1)]}))],2),e("v-uni-view",{staticClass:"action-section"},[e("v-uni-view",{staticClass:"checkbox"},[e("v-uni-image",{attrs:{src:t.allChecked?"/static/selected.png":"/static/select.png",mode:"aspectFit"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.check("all")}}}),e("v-uni-view",{staticClass:"clear-btn",class:{show:t.allChecked},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clearCart.apply(void 0,arguments)}}},[t._v("清空")])],1),e("v-uni-view",{staticClass:"total-box"},[e("v-uni-text",{staticClass:"price"},[t._v("¥"+t._s(t.total))]),e("v-uni-text",{staticClass:"coupon"},[t._v("已优惠"),e("v-uni-text",[t._v("74.35")]),t._v("元")],1)],1),e("v-uni-button",{staticClass:"no-border confirm-btn",attrs:{type:"primary"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.createOrder.apply(void 0,arguments)}}},[t._v("去结算")])],1)],1):e("v-uni-view",{staticClass:"empty"},[e("v-uni-image",{attrs:{src:"/static/emptyCart.jpg",mode:"aspectFit"}}),t.hasLogin?e("v-uni-view",{staticClass:"empty-tips"},[t._v("空空如也"),t.hasLogin?e("v-uni-navigator",{staticClass:"navigator",attrs:{url:"../index/index","open-type":"switchTab"}},[t._v("随便逛逛>")]):t._e()],1):e("v-uni-view",{staticClass:"empty-tips"},[t._v("空空如也"),e("v-uni-view",{staticClass:"navigator",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.navToLogin.apply(void 0,arguments)}}},[t._v("去登陆>")])],1)],1)],1)},c=[]},b6fc:function(t,i,e){var a=e("24fb");i=a(!1),i.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */.container[data-v-64ca8d64]{padding-bottom:%?134?%\n  /* 空白页 */}.container .empty[data-v-64ca8d64]{position:fixed;left:0;top:0;width:100%;height:100vh;padding-bottom:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:#fff}.container .empty uni-image[data-v-64ca8d64]{width:%?240?%;height:%?160?%;margin-bottom:%?30?%}.container .empty .empty-tips[data-v-64ca8d64]{display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?26?%;color:#c0c4cc}.container .empty .empty-tips .navigator[data-v-64ca8d64]{color:#fa436a;margin-left:%?16?%}\n/* 购物车列表项 */.cart-item[data-v-64ca8d64]{display:-webkit-box;display:-webkit-flex;display:flex;position:relative;padding:%?30?% %?40?%}.cart-item .image-wrapper[data-v-64ca8d64]{width:%?230?%;height:%?230?%;-webkit-flex-shrink:0;flex-shrink:0;position:relative}.cart-item .image-wrapper uni-image[data-v-64ca8d64]{border-radius:%?8?%}.cart-item .checkbox[data-v-64ca8d64]{position:absolute;left:%?-16?%;top:%?-16?%;z-index:8;font-size:%?44?%;line-height:1;padding:%?4?%;color:#c0c4cc;background:#fff;border-radius:50px}.cart-item .item-right[data-v-64ca8d64]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;position:relative;padding-left:%?30?%}.cart-item .item-right .title[data-v-64ca8d64], .cart-item .item-right .price[data-v-64ca8d64]{font-size:%?30?%;color:#303133;height:%?40?%;line-height:%?40?%}.cart-item .item-right .attr[data-v-64ca8d64]{font-size:%?26?%;color:#909399;height:%?50?%;line-height:%?50?%}.cart-item .item-right .price[data-v-64ca8d64]{height:%?50?%;line-height:%?50?%}.cart-item .del-btn[data-v-64ca8d64]{padding:%?4?% %?10?%;font-size:%?34?%;height:%?50?%;color:#909399}\n/* 底部栏 */.action-section[data-v-64ca8d64]{margin-bottom:%?100?%;position:fixed;left:%?30?%;bottom:%?30?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?690?%;height:%?100?%;padding:0 %?30?%;background:hsla(0,0%,100%,.9);box-shadow:0 0 %?20?% 0 rgba(0,0,0,.5);border-radius:%?16?%}.action-section .checkbox[data-v-64ca8d64]{height:%?52?%;position:relative}.action-section .checkbox uni-image[data-v-64ca8d64]{width:%?52?%;height:100%;position:relative;z-index:5}.action-section .clear-btn[data-v-64ca8d64]{position:absolute;left:%?26?%;top:0;z-index:4;width:0;height:%?52?%;line-height:%?52?%;padding-left:%?38?%;font-size:%?28?%;color:#fff;background:#c0c4cc;border-radius:0 50px 50px 0;opacity:0;-webkit-transition:.2s;transition:.2s}.action-section .clear-btn.show[data-v-64ca8d64]{opacity:1;width:%?120?%}.action-section .total-box[data-v-64ca8d64]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:right;padding-right:%?40?%}.action-section .total-box .price[data-v-64ca8d64]{font-size:%?32?%;color:#303133}.action-section .total-box .coupon[data-v-64ca8d64]{font-size:%?24?%;color:#909399}.action-section .total-box .coupon uni-text[data-v-64ca8d64]{color:#303133}.action-section .confirm-btn[data-v-64ca8d64]{padding:0 %?38?%;margin:0;border-radius:100px;height:%?76?%;line-height:%?76?%;font-size:%?30?%;background:#fa436a;box-shadow:1px 2px 5px rgba(217,60,93,.72)}\n/* 复选框选中状态 */.action-section .checkbox.checked[data-v-64ca8d64],\n.cart-item .checkbox.checked[data-v-64ca8d64]{color:#fa436a}',""]),t.exports=i},c45a:function(t,i,e){"use strict";e.r(i);var a=e("6ff6"),n=e("e18b");for(var c in n)"default"!==c&&function(t){e.d(i,t,(function(){return n[t]}))}(c);e("5c79");var o,r=e("f0c5"),s=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"64ca8d64",null,!1,a["a"],o);i["default"]=s.exports},e18b:function(t,i,e){"use strict";e.r(i);var a=e("f32b"),n=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(i,t,(function(){return a[t]}))}(c);i["default"]=n.a},f32b:function(t,i,e){"use strict";var a=e("4ea4");e("4160"),e("d81d"),e("a434"),e("a9e3"),e("b680"),e("159b"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("96cf");var n=a(e("1da1")),c=a(e("5530")),o=e("2f62"),r=a(e("4433")),s={components:{uniNumberBox:r.default},data:function(){return{total:0,allChecked:!1,empty:!1,cartList:[]}},onLoad:function(){this.loadData()},watch:{cartList:function(t){var i=0===t.length;this.empty!==i&&(this.empty=i)}},computed:(0,c.default)({},(0,o.mapState)(["hasLogin"])),methods:{loadData:function(){var t=this;return(0,n.default)(regeneratorRuntime.mark((function i(){var e,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,t.$api.json("cartList");case 2:e=i.sent,a=e.map((function(t){return t.checked=!0,t})),t.cartList=a,t.calcTotal();case 6:case"end":return i.stop()}}),i)})))()},onImageLoad:function(t,i){this.$set(this[t][i],"loaded","loaded")},onImageError:function(t,i){this[t][i].image="/static/errorImage.jpg"},navToLogin:function(){uni.navigateTo({url:"/pages/public/login"})},check:function(t,i){if("item"===t)this.cartList[i].checked=!this.cartList[i].checked;else{var e=!this.allChecked,a=this.cartList;a.forEach((function(t){t.checked=e})),this.allChecked=e}this.calcTotal(t)},numberChange:function(t){this.cartList[t.index].number=t.number,this.calcTotal()},deleteCartItem:function(t){var i=this.cartList,e=i[t];e.id;this.cartList.splice(t,1),this.calcTotal(),uni.hideLoading()},clearCart:function(){var t=this;uni.showModal({content:"清空购物车？",success:function(i){i.confirm&&(t.cartList=[])}})},calcTotal:function(){var t=this.cartList;if(0!==t.length){var i=0,e=!0;t.forEach((function(t){!0===t.checked?i+=t.price*t.number:!0===e&&(e=!1)})),this.allChecked=e,this.total=Number(i.toFixed(2))}else this.empty=!0},createOrder:function(){var t=this.cartList,i=[];t.forEach((function(t){t.checked&&i.push({attr_val:t.attr_val,number:t.number})})),uni.navigateTo({url:"/pages/order/createOrder?data=".concat(JSON.stringify({goodsData:i}))}),this.$api.msg("跳转下一页 sendData")}}};i.default=s}}]);