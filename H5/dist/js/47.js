webpackJsonp([47],{

/***/ 461:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./src/pages/LotteryDetail.vue ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-08c52510","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./LotteryDetail.vue */ 716)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./LotteryDetail.vue */ 551),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-08c52510"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./LotteryDetail.vue */ 660),
  /* scopeId */
  "data-v-08c52510",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\LotteryDetail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LotteryDetail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08c52510", Component.options)
  } else {
    hotAPI.reload("data-v-08c52510", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 551:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/LotteryDetail.vue ***!
  \*************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {};
module.exports = exports["default"];

/***/ }),

/***/ 605:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-08c52510","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/LotteryDetail.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.fl[data-v-08c52510]{\n      float: left;\n}\n.detail_box[data-v-08c52510]{\n    margin-top:4rem;\n}\n.cell_box[data-v-08c52510]{\n    background: #fff;\n    margin:0.5rem 0;\n}\n.period[data-v-08c52510]{\n    margin-bottom:0.5rem;\n}\n.l_time[data-v-08c52510]{\n    color:#E34541\n}\n.num_item[data-v-08c52510]{\n     width:1.5rem;\n     height:1.5rem;\n     border-radius: 50%;\n     background:-webkit-linear-gradient(top,rgba(255, 109, 93, 1) 0%,rgba(227, 69, 65, 1) 36%,rgba(198, 29, 37, 1) 100%);\n     background:-moz- oldlinear-gradient(top,rgba(255, 109, 93, 1) 0%,rgba(227, 69, 65, 1) 36%,rgba(198, 29, 37, 1) 100%);\n     background:linear-gradient(180deg,rgba(255, 109, 93, 1) 0%,rgba(227, 69, 65, 1) 36%,rgba(198, 29, 37, 1) 100%);\n     border:1px solid rgba(221, 221, 221, 1);\n     color:#fff;\n     text-align: center;\n     line-height: 1.5rem;\n     margin: 0 0.1rem;\n}\n.white[data-v-08c52510]{\n     background:rgba(255, 255, 255, 1);\n     border:1px solid rgba(221, 221, 221, 1);\n     color:#333;\n}\n.l_data[data-v-08c52510]{\n     position: relative;\n     top:-1.2rem;\n     color:#555;\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/LotteryDetail.vue"],"names":[],"mappings":";AAqEE;MACI,YAAY;CACf;AACH;IACI,gBAAgB;CACnB;AACD;IACI,iBAAiB;IACjB,gBAAgB;CACnB;AACD;IACI,qBAAqB;CACxB;AACD;IACI,aAAa;CAChB;AACD;KACK,aAAa;KACb,cAAc;KACd,mBAAmB;KACnB,oHAAsG;KAAtG,qHAAsG;KAAtG,+GAAsG;KACtG,wCAAqC;KACrC,WAAW;KACX,mBAAmB;KACnB,oBAAoB;KACpB,iBAAiB;CACpB;AACD;KACI,kCAA+B;KAC/B,wCAAqC;KACrC,WAAW;CACd;AACD;KACI,mBAAmB;KACnB,YAAY;KACZ,WAAW;CACd","file":"LotteryDetail.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  .fl{\n      float: left;\n  }\n.detail_box{\n    margin-top:4rem;\n}\n.cell_box{\n    background: #fff;\n    margin:0.5rem 0;\n}\n.period{\n    margin-bottom:0.5rem;\n}\n.l_time{\n    color:#E34541\n}\n.num_item{\n     width:1.5rem;\n     height:1.5rem;\n     border-radius: 50%;\n     background:linear-gradient(180deg,rgba(255,109,93,1) 0%,rgba(227,69,65,1) 36%,rgba(198,29,37,1) 100%);\n     border:1px solid rgba(221,221,221,1);\n     color:#fff;\n     text-align: center;\n     line-height: 1.5rem;\n     margin: 0 0.1rem;\n }\n .white{\n     background:rgba(255,255,255,1);\n     border:1px solid rgba(221,221,221,1);\n     color:#333;\n }\n .l_data{\n     position: relative;\n     top:-1.2rem;\n     color:#555;\n }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 660:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-08c52510"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/LotteryDetail.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("重庆时时彩")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_vm._v("关注")])]), _vm._v(" "), _c('group', {
    staticClass: "detail_box"
  }, [_c('cell', {
    staticClass: "cell_box"
  }, [_c('div', {
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }, [_c('p', {
    staticClass: "period"
  }, [_vm._v("第180531084期")]), _vm._v(" "), _c('p', {
    staticClass: "l_time"
  }, [_vm._v("距离开奖时间为: "), _c('span', [_vm._v("00:50")])])])]), _vm._v(" "), _c('cell', {
    staticClass: "cell_box"
  }, [_c('div', {
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }, [_c('p', {
    staticClass: "period"
  }, [_vm._v("第180531084期")]), _vm._v(" "), _c('div', {
    staticClass: "number_box"
  }, [_c('div', {
    staticClass: "num_item fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item fl"
  }, [_vm._v("3")])])]), _vm._v(" "), _c('div', {
    staticClass: "l_data"
  }, [_vm._v("\n                2018-11-11 21:30\n            ")])]), _vm._v(" "), _c('cell', {
    staticClass: "cell_box"
  }, [_c('div', {
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }, [_c('p', {
    staticClass: "period"
  }, [_vm._v("第180531084期")]), _vm._v(" "), _c('div', {
    staticClass: "number_box"
  }, [_c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")])])]), _vm._v(" "), _c('div', {
    staticClass: "l_data"
  }, [_vm._v("\n                2018-11-11 21:30\n            ")])]), _vm._v(" "), _c('cell', {
    staticClass: "cell_box"
  }, [_c('div', {
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }, [_c('p', {
    staticClass: "period"
  }, [_vm._v("第180531084期")]), _vm._v(" "), _c('div', {
    staticClass: "number_box"
  }, [_c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")]), _vm._v(" "), _c('div', {
    staticClass: "num_item white fl"
  }, [_vm._v("3")])])]), _vm._v(" "), _c('div', {
    staticClass: "l_data"
  }, [_vm._v("\n                2018-11-11 21:30\n            ")])])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08c52510", module.exports)
  }
}

/***/ }),

/***/ 716:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-08c52510","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/LotteryDetail.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-08c52510","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./LotteryDetail.vue */ 605);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("6f7b9a5c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-08c52510\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LotteryDetail.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-08c52510\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LotteryDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=47.js.map