webpackJsonp([12],{

/***/ 503:
/* no static exports found */
/* all exports used */
/*!*****************************************!*\
  !*** ./src/pages/ucenter/ScoreShop.vue ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-6d06ce79","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./ScoreShop.vue */ 745)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./ScoreShop.vue */ 596),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-6d06ce79"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./ScoreShop.vue */ 690),
  /* scopeId */
  "data-v-6d06ce79",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\ucenter\\ScoreShop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ScoreShop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d06ce79", Component.options)
  } else {
    hotAPI.reload("data-v-6d06ce79", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 596:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/ucenter/ScoreShop.vue ***!
  \*****************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    data: function data() {
        return {
            show: false,
            goods: [{ key: 1, lable: "斗鱼鱼丸1000个", icon: "/webdemo/h5/res/images/qd_banner.png", scoreicon: "/webdemo/h5/res/images/ico_jb_gray.png", gname: "斗鱼鱼1000个", gprice: "50000" }, { key: 2, lable: "斗鱼鱼丸1000个", icon: "/webdemo/h5/res/images/qd_banner.png", scoreicon: "/webdemo/h5/res/images/ico_jb_gray.png", gname: "斗鱼鱼1000个", gprice: "50000" }, { key: 3, lable: "斗鱼鱼丸1000个", icon: "/webdemo/h5/res/images/qd_banner.png", scoreicon: "/webdemo/h5/res/images/ico_jb_gray.png", gname: "斗鱼鱼1000个", gprice: "50000" }, { key: 4, lable: "斗鱼鱼丸1000个", icon: "/webdemo/h5/res/images/qd_banner.png", scoreicon: "/webdemo/h5/res/images/ico_jb_gray.png", gname: "斗鱼鱼1000个", gprice: "50000" }, { key: 5, lable: "斗鱼鱼丸1000个", icon: "/webdemo/h5/res/images/qd_banner.png", scoreicon: "/webdemo/h5/res/images/ico_jb_gray.png", gname: "斗鱼鱼1000个", gprice: "50000" }]
        };
    },

    methods: {
        toExcharge: function toExcharge() {

            this.$router.push({ path: '/excharge' });
        },
        onCancel: function onCancel() {},
        onConfirm: function onConfirm() {
            this.$router.push({ path: '/recharge' });
        },
        onShow: function onShow() {},
        onHide: function onHide() {}
    }

};
module.exports = exports["default"];

/***/ }),

/***/ 634:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-6d06ce79","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/ucenter/ScoreShop.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.weui-panel[data-v-6d06ce79]{\r\n    margin-top:0;\n}\n.score_banner[data-v-6d06ce79]{\r\n     width:100%;\n}\n.shop_box[data-v-6d06ce79]{\r\n    padding:0.9rem 0.7rem;\r\n    height: 2rem;\r\n    line-height:2rem;\r\n    background: #fff;\n}\n.redius[data-v-6d06ce79]{\r\n    font-size:1.1rem;\n}\n.redius_num[data-v-6d06ce79], .good_price[data-v-6d06ce79]{\r\n    color:#FB8C00;\n}\n.grid_box[data-v-6d06ce79]{\r\n    width:100%;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -moz-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack:justify;\r\n    -webkit-justify-content:space-between;\r\n       -moz-box-pack:justify;\r\n        -ms-flex-pack:justify;\r\n            justify-content:space-between;\r\n   -webkit-flex-wrap: wrap;\r\n       -ms-flex-wrap: wrap;\r\n           flex-wrap: wrap;\r\n   padding:1rem;\r\n   -moz-box-sizing: border-box;\r\n        box-sizing: border-box;\n}\n.grid_item[data-v-6d06ce79]{\r\n    background: #fff;\r\n    width:47%;\r\n    padding:0.5rem;\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\r\n    margin-bottom:1rem;\n}\n.item_img[data-v-6d06ce79]{\r\n    width:100%;\n}\n.good_name[data-v-6d06ce79]{\r\n    color:#333;\r\n    line-height: 2rem;\n}\n.excharge[data-v-6d06ce79]{\r\n    width:4rem;\r\n    height:1.5rem;\r\n    color:#fff;\r\n    text-align: center;\r\n    line-height:1.5rem;\r\n    background:-webkit-linear-gradient(left,rgba(255, 198, 13, 1) 0%,rgba(255, 125, 0, 1) 100%);\r\n    background:-moz- oldlinear-gradient(left,rgba(255, 198, 13, 1) 0%,rgba(255, 125, 0, 1) 100%);\r\n    background:linear-gradient(90deg,rgba(255, 198, 13, 1) 0%,rgba(255, 125, 0, 1) 100%);\r\n    box-shadow:0px 1px 3px rgba(0, 0, 0, .16);\r\n    border-radius:1rem;\n}\r\n", "", {"version":3,"sources":["D:/project/H5/src/pages/ucenter/ScoreShop.vue"],"names":[],"mappings":";AAmFA;IACI,aAAa;CAChB;AACA;KACI,WAAW;CACd;AAEF;IACI,sBAAsB;IACtB,aAAa;IACb,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,iBAAiB;CACpB;AACD;IACI,cAAc;CACjB;AACD;IACI,WAAW;IACX,qBAAc;IAAd,sBAAc;IAAd,kBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,yBAA8B;IAA9B,sCAA8B;OAA9B,sBAA8B;QAA9B,sBAA8B;YAA9B,8BAA8B;GAC/B,wBAAgB;OAAhB,oBAAgB;WAAhB,gBAAgB;GAChB,aAAa;GACb,4BAAuB;QAAvB,uBAAuB;CAEzB;AACD;IACI,iBAAiB;IACjB,UAAU;IACV,eAAe;IACf,4BAAuB;SAAvB,uBAAuB;IACvB,mBAAmB;CACtB;AACD;IACI,WAAW;CACd;AACD;IACI,WAAW;IACX,kBAAkB;CACrB;AACD;IACI,WAAW;IACX,cAAc;IACd,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,4FAA+E;IAA/E,6FAA+E;IAA/E,qFAA+E;IAC/E,0CAAwC;IACxC,mBAAmB;CAClB","file":"ScoreShop.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.weui-panel{\r\n    margin-top:0;\r\n}\r\n .score_banner{\r\n     width:100%;\r\n }\r\n \r\n.shop_box{\r\n    padding:0.9rem 0.7rem;\r\n    height: 2rem;\r\n    line-height:2rem;\r\n    background: #fff;\r\n}\r\n.redius{\r\n    font-size:1.1rem;\r\n}\r\n.redius_num,.good_price{\r\n    color:#FB8C00;\r\n}\r\n.grid_box{\r\n    width:100%;\r\n    display: flex;\r\n    justify-content:space-between;\r\n   flex-wrap: wrap;\r\n   padding:1rem;\r\n   box-sizing: border-box;\r\n\r\n}\r\n.grid_item{\r\n    background: #fff;\r\n    width:47%;\r\n    padding:0.5rem;\r\n    box-sizing: border-box;\r\n    margin-bottom:1rem;\r\n}\r\n.item_img{\r\n    width:100%;\r\n}    \r\n.good_name{\r\n    color:#333;\r\n    line-height: 2rem;\r\n}\r\n.excharge{\r\n    width:4rem;\r\n    height:1.5rem;\r\n    color:#fff;\r\n    text-align: center;\r\n    line-height:1.5rem;\r\n    background:linear-gradient(90deg,rgba(255,198,13,1) 0%,rgba(255,125,0,1) 100%);\r\n    box-shadow:0px 1px 3px rgba(0,0,0,0.16);\r\n    border-radius:1rem;\r\n    }\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 690:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-6d06ce79"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/ucenter/ScoreShop.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main"
  }, [_c('x-header', {
    attrs: {
      "left-options": {
        showBack: true,
        backText: ' '
      },
      "title": "积分商城"
    }
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "grid_box "
  }, _vm._l((_vm.goods), function(item) {
    return _c('div', {
      key: item.key,
      staticClass: "grid_item"
    }, [_c('img', {
      staticClass: "item_img",
      attrs: {
        "src": item.icon
      }
    }), _vm._v(" "), _c('div', [_c('div', {
      staticClass: "good_name"
    }, [_vm._v(_vm._s(item.gname))]), _vm._v(" "), _c('div', [_c('div', {
      staticClass: "score_icon fl"
    }, [_c('img', {
      attrs: {
        "src": item.scoreicon,
        "alt": ""
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "good_price"
    }, [_vm._v(_vm._s(item.gprice))])]), _vm._v(" "), _c('div', {
      staticClass: "excharge fr",
      on: {
        "click": function($event) {
          _vm.toExcharge()
        }
      }
    }, [_vm._v("\n                        兑换\n                    ")])])])])
  }), 0), _vm._v(" "), _c('confirm', {
    attrs: {
      "title": "积分提示"
    },
    on: {
      "on-cancel": _vm.onCancel,
      "on-confirm": _vm.onConfirm,
      "on-show": _vm.onShow,
      "on-hide": _vm.onHide
    },
    model: {
      value: (_vm.show),
      callback: function($$v) {
        _vm.show = $$v
      },
      expression: "show"
    }
  }, [_c('p', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_vm._v("您的积分不足(余额16),是否前往积分充值？")])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('img', {
    staticClass: "score_banner",
    attrs: {
      "src": "/webdemo/h5/res/images/banner_jfsc.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shop_box"
  }, [_c('div', {
    staticClass: "score_avater fl"
  }, [_c('img', {
    attrs: {
      "src": "/webdemo/h5/res/images/ico_bi_xl.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('p', {
    staticClass: "fl redius "
  }, [_vm._v("积分余额 "), _c('span', {
    staticClass: "redius_num"
  }, [_vm._v("1321")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d06ce79", module.exports)
  }
}

/***/ }),

/***/ 745:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-6d06ce79","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/ucenter/ScoreShop.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-6d06ce79","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./ScoreShop.vue */ 634);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("34cd76e8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6d06ce79\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ScoreShop.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6d06ce79\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ScoreShop.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=12.js.map