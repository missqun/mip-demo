webpackJsonp([46],{

/***/ 462:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./src/pages/LotteryMain.vue ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-6d419c38","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./LotteryMain.vue */ 746)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./LotteryMain.vue */ 552),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-6d419c38"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./LotteryMain.vue */ 691),
  /* scopeId */
  "data-v-6d419c38",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\LotteryMain.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] LotteryMain.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6d419c38", Component.options)
  } else {
    hotAPI.reload("data-v-6d419c38", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 552:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/LotteryMain.vue ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    methods: {
        toLotteryDetail: function toLotteryDetail() {
            this.$router.push({ path: '/lotterydetail' });
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 635:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-6d419c38","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/LotteryMain.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.main_box[data-v-6d419c38]{\n     margin-top:4rem;\n}\n.cell_box[data-v-6d419c38]{\n     background: #fff;\n     margin:0.5rem auto;\n}\n.fl[data-v-6d419c38]{\n    float: left;\n}\n.flex[data-v-6d419c38]{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: space-around;\n        -ms-flex-pack: distribute;\n            justify-content: space-around;\n}\n.kind_msg[data-v-6d419c38]{\n    margin-left:0.5rem;\n}\n.kind[data-v-6d419c38]{\n    font-weight: bold;\n}\n.period[data-v-6d419c38], .number_box[data-v-6d419c38]{\n   font-size:0.9rem;\n   color:#555;\n}\n.num_item[data-v-6d419c38]{\n    width:1.5rem;\n    height:1.5rem;\n    border-radius: 50%;\n    background:-webkit-linear-gradient(top,rgba(255, 109, 93, 1) 0%,rgba(227, 69, 65, 1) 36%,rgba(198, 29, 37, 1) 100%);\n    background:-moz- oldlinear-gradient(top,rgba(255, 109, 93, 1) 0%,rgba(227, 69, 65, 1) 36%,rgba(198, 29, 37, 1) 100%);\n    background:linear-gradient(180deg,rgba(255, 109, 93, 1) 0%,rgba(227, 69, 65, 1) 36%,rgba(198, 29, 37, 1) 100%);\n    color:#fff;\n    text-align: center;\n    line-height: 1.5rem;\n    margin: 0 0.1rem;\n}\n.attention_btn[data-v-6d419c38]{\n    width:5.5rem;\n}\n.cansel_attention_btn[data-v-6d419c38]{\n   width:7rem;\n   font-size:1rem;\n   color:crimson;\n   background: #fff;\n   border:1px solid rgba(227, 227, 227, 1);\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/LotteryMain.vue"],"names":[],"mappings":";AA0EC;KACI,gBAAgB;CACnB;AACD;KACI,iBAAiB;KACjB,mBAAmB;CACtB;AACF;IACI,YAAY;CACf;AACD;IACI,qBAAc;IAAd,sBAAc;IAAd,kBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,sCAA8B;QAA9B,0BAA8B;YAA9B,8BAA8B;CACjC;AACD;IACI,mBAAmB;CACtB;AACD;IACI,kBAAkB;CACrB;AACD;GACG,iBAAiB;GACjB,WAAW;CACb;AACD;IACI,aAAa;IACb,cAAc;IACd,mBAAmB;IACnB,oHAAsG;IAAtG,qHAAsG;IAAtG,+GAAsG;IACtG,WAAW;IACX,mBAAmB;IACnB,oBAAoB;IACpB,iBAAiB;CACpB;AACD;IACI,aAAa;CAChB;AACD;GACG,WAAW;GACX,eAAe;GACf,cAAc;GACd,iBAAiB;GACjB,wCAAqC;CAEvC","file":"LotteryMain.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n .main_box{\n     margin-top:4rem;\n }\n .cell_box{\n     background: #fff;\n     margin:0.5rem auto;\n }\n.fl{\n    float: left;\n}\n.flex{\n    display: flex;\n    justify-content: space-around;\n}\n.kind_msg{\n    margin-left:0.5rem;\n}\n.kind{\n    font-weight: bold;\n}\n.period,.number_box{\n   font-size:0.9rem;\n   color:#555;\n}\n.num_item{\n    width:1.5rem;\n    height:1.5rem;\n    border-radius: 50%;\n    background:linear-gradient(180deg,rgba(255,109,93,1) 0%,rgba(227,69,65,1) 36%,rgba(198,29,37,1) 100%);\n    color:#fff;\n    text-align: center;\n    line-height: 1.5rem;\n    margin: 0 0.1rem;\n}\n.attention_btn{\n    width:5.5rem;\n}\n.cansel_attention_btn{\n   width:7rem;\n   font-size:1rem;\n   color:crimson;\n   background: #fff;\n   border:1px solid rgba(227,227,227,1);\n\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 691:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-6d419c38"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/LotteryMain.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
  })]), _vm._v(" "), _c('group', {
    staticClass: "main_box"
  }, [_c('cell', {
    staticClass: "cell_box",
    nativeOn: {
      "click": function($event) {
        _vm.toLotteryDetail()
      }
    }
  }, [_c('div', {
    staticClass: "flex",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }, [_c('img', {
    staticClass: "fl",
    attrs: {
      "src": "/webdemo/h5/res/images/txl_kjxx.png",
      "alt": "",
      "width": "40"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "kind_msg"
  }, [_c('p', {
    staticClass: "kind"
  }, [_vm._v("北京PK10")]), _vm._v(" "), _c('p', {
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
  }, [_vm._v("3")])])])]), _vm._v(" "), _c('x-button', {
    staticClass: "attention_btn",
    attrs: {
      "mini": "",
      "type": "primary"
    }
  }, [_vm._v("关注")])], 1), _vm._v(" "), _c('cell', {
    staticClass: "cell_box",
    nativeOn: {
      "click": function($event) {
        _vm.toLotteryDetail()
      }
    }
  }, [_c('div', {
    staticClass: "flex",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }, [_c('img', {
    staticClass: "fl",
    attrs: {
      "src": "/webdemo/h5/res/images/txl_kjxx.png",
      "alt": "",
      "width": "40"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "kind_msg"
  }, [_c('p', {
    staticClass: "kind"
  }, [_vm._v("北京PK10")]), _vm._v(" "), _c('p', {
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
  }, [_vm._v("3")])])])]), _vm._v(" "), _c('x-button', {
    staticClass: "attention_btn",
    attrs: {
      "mini": "",
      "type": "primary"
    }
  }, [_vm._v("关注")])], 1), _vm._v(" "), _c('cell', {
    staticClass: "cell_box",
    nativeOn: {
      "click": function($event) {
        _vm.toLotteryDetail()
      }
    }
  }, [_c('div', {
    staticClass: "flex",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }, [_c('img', {
    staticClass: "fl",
    attrs: {
      "src": "/webdemo/h5/res/images/txl_kjxx.png",
      "alt": "",
      "width": "40"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "kind_msg"
  }, [_c('p', {
    staticClass: "kind"
  }, [_vm._v("北京PK10")]), _vm._v(" "), _c('p', {
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
  }, [_vm._v("3")])])])]), _vm._v(" "), _c('x-button', {
    staticClass: "cansel_attention_btn",
    attrs: {
      "mini": "",
      "type": "default"
    }
  }, [_vm._v("取消关注")])], 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6d419c38", module.exports)
  }
}

/***/ }),

/***/ 746:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-6d419c38","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/LotteryMain.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-6d419c38","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./LotteryMain.vue */ 635);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("1d985d94", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6d419c38\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LotteryMain.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6d419c38\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LotteryMain.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=46.js.map