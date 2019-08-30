webpackJsonp([25],{

/***/ 490:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./src/pages/messages/VerifyList.vue ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-00f22330","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./VerifyList.vue */ 713)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./VerifyList.vue */ 583),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-00f22330"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./VerifyList.vue */ 657),
  /* scopeId */
  "data-v-00f22330",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\messages\\VerifyList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VerifyList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00f22330", Component.options)
  } else {
    hotAPI.reload("data-v-00f22330", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 583:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/messages/VerifyList.vue ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {};
module.exports = exports["default"];

/***/ }),

/***/ 602:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-00f22330","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/messages/VerifyList.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.v_l[data-v-00f22330]{\n    margin:0.6rem auto;\n    background: #fff;\n}\n.v_l_c[data-v-00f22330]{\n       font-size:1.2rem;\n}\n.agre_btn[data-v-00f22330]{\n    width:6rem;\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/messages/VerifyList.vue"],"names":[],"mappings":";AA6CA;IACI,mBAAmB;IACnB,iBAAiB;CAEpB;AACD;OACO,iBAAiB;CACvB;AACD;IACI,WAAW;CACd","file":"VerifyList.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.v_l{\n    margin:0.6rem auto;\n    background: #fff;\n \n}\n.v_l_c{\n       font-size:1.2rem;\n}\n.agre_btn{\n    width:6rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 657:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-00f22330"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/messages/VerifyList.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article"
  }, [_c('x-header', {
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_vm._v("\n                验证消息\n             "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('group', {
    staticClass: "v_l"
  }, [_c('cell', {
    staticClass: "v_l_c",
    attrs: {
      "title": "消息提醒",
      "inline-desc": "9:01 李思思请求加为好友",
      "value": "已失效"
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "50",
      "src": "/webdemo/h5/res/images/verify.png"
    },
    slot: "icon"
  }), _vm._v(" "), _c('x-button', {
    staticClass: "agre_btn",
    attrs: {
      "type": "primary"
    }
  }, [_vm._v("同意")])], 1)], 1), _vm._v(" "), _c('group', {
    staticClass: "v_l"
  }, [_c('cell', {
    staticClass: "v_l_c",
    attrs: {
      "title": "消息提醒",
      "inline-desc": "9:01 李思思请求加为好友",
      "value": "已失效"
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "50",
      "src": "/webdemo/h5/res/images/verify.png"
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('group', {
    staticClass: "v_l"
  }, [_c('cell', {
    staticClass: "v_l_c",
    attrs: {
      "title": "消息提醒",
      "inline-desc": "9:01 李思思请求加为好友",
      "value": "已通过"
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "50",
      "src": "/webdemo/h5/res/images/verify.png"
    },
    slot: "icon"
  })])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-00f22330", module.exports)
  }
}

/***/ }),

/***/ 713:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-00f22330","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/messages/VerifyList.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-00f22330","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./VerifyList.vue */ 602);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("bb0fa4c2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-00f22330\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VerifyList.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-00f22330\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VerifyList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=25.js.map