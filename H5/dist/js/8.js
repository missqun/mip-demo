webpackJsonp([8],{

/***/ 507:
/* no static exports found */
/* all exports used */
/*!*******************************************!*\
  !*** ./src/pages/ucenter/UserSetting.vue ***!
  \*******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-70a9e916","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./UserSetting.vue */ 748)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./UserSetting.vue */ 600),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-70a9e916"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./UserSetting.vue */ 693),
  /* scopeId */
  "data-v-70a9e916",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\ucenter\\UserSetting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] UserSetting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70a9e916", Component.options)
  } else {
    hotAPI.reload("data-v-70a9e916", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 600:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/ucenter/UserSetting.vue ***!
  \*******************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {};
module.exports = exports["default"];

/***/ }),

/***/ 637:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-70a9e916","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/ucenter/UserSetting.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.exit[data-v-70a9e916]{\n     color:brown;\n     background: #fff;\n     padding:0.3rem 0.7rem;\n}\n.g-window .weui-cell[data-v-70a9e916]{\n    padding:0.8rem  0.7rem ;\n}\n.setting1[data-v-70a9e916], .setting2[data-v-70a9e916]{\n     background: #fff;\n     margin-top: 0.6rem;\n}\n\n", "", {"version":3,"sources":["D:/project/H5/src/pages/ucenter/UserSetting.vue"],"names":[],"mappings":";AAmBC;KACI,YAAY;KACZ,iBAAiB;KACjB,sBAAsB;CACzB;AACF;IACI,wBAAwB;CAC3B;AACA;KACI,iBAAiB;KACjB,mBAAmB;CACtB","file":"UserSetting.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n .exit{\n     color:brown;\n     background: #fff;\n     padding:0.3rem 0.7rem;\n }\n.g-window .weui-cell{\n    padding:0.8rem  0.7rem ;\n}\n .setting1,.setting2{\n     background: #fff;\n     margin-top: 0.6rem;\n }\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 693:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-70a9e916"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/ucenter/UserSetting.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main"
  }, [_c('x-header', {
    staticClass: "header",
    attrs: {
      "left-options": {
        showBack: true,
        backText: ' '
      },
      "title": "设置"
    }
  }), _vm._v(" "), _c('group', {
    staticClass: "setting1"
  }, [_c('cell', {
    attrs: {
      "title": "意见反馈",
      "is-link": "",
      "link": "/feedback"
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "关于",
      "is-link": "",
      "link": "/about"
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "清楚缓存",
      "is-link": ""
    }
  }, [_vm._v("15mb")])], 1), _vm._v(" "), _c('group', {
    staticClass: "setting2"
  }, [_c('x-button', {
    staticClass: "exit",
    attrs: {
      "type": "default",
      "action-type": "button",
      "text": "退出登录"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-70a9e916", module.exports)
  }
}

/***/ }),

/***/ 748:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-70a9e916","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/ucenter/UserSetting.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-70a9e916","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./UserSetting.vue */ 637);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("3b33660e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-70a9e916\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserSetting.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-70a9e916\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./UserSetting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=8.js.map