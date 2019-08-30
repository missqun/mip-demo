webpackJsonp([50],{

/***/ 456:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/AddInfo.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-104ef105","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./AddInfo.vue */ 722)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./AddInfo.vue */ 545),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-104ef105"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./AddInfo.vue */ 666),
  /* scopeId */
  "data-v-104ef105",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\AddInfo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AddInfo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-104ef105", Component.options)
  } else {
    hotAPI.reload("data-v-104ef105", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 545:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/AddInfo.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    methods: {
        toVerify: function toVerify() {
            this.$router.push({ path: '/userverify' });
        }
    }
};
module.exports = exports['default'];

/***/ }),

/***/ 611:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-104ef105","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/AddInfo.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.vux-header .vux-header-left.header .left-arrow[data-v-104ef105]:before{\r\n        border-left: 1px solid #fff !important;\r\n        border-top: 1px solid #fff !important;\n}\n.header[data-v-104ef105]{\r\n    background: transparent !important;\r\n    color:#fff;\n}\n.g-inherit.m-article[data-v-104ef105]{\r\n     background:#F8F8F8;\r\n     margin-top:0rem;\n}\n.info_bg[data-v-104ef105]{\r\n      width:100%;\r\n      height:11.625rem;\r\n      background:url(/webdemo/h5/res/images/user_banner.png)\n}\n.info_top_box[data-v-104ef105]{\r\n      width:20%;\r\n      height:auto;\r\n      margin:3rem auto;\n}\n.info_img[data-v-104ef105]{\r\n      width:2.25rem;\r\n      margin:0 auto;\r\n      display: block;\n}\np[data-v-104ef105]{\r\n      text-align: center;\r\n      color:#fff;\n}\n.info_id[data-v-104ef105]{\r\n      font-size:0.8rem;\n}\n.info_detail[data-v-104ef105]{\r\n      margin-top:0.5rem;\n}\n.sex_icon[data-v-104ef105]{\r\n      right:2rem;\n}\r\n  /* .clearfix::before{\r\n      content:\"\";\r\n      display: block;\r\n      clear: both;\r\n  }\r\n  .clearfix::after{\r\n      content:\"\";\r\n      display: block;\r\n      clear: both;\r\n  } */\n.flex[data-v-104ef105]{\r\n       display: -webkit-box;\r\n       display: -webkit-flex;\r\n       display: -moz-box;\r\n       display: -ms-flexbox;\r\n       display: flex;\r\n       -webkit-box-pack: start;\r\n       -webkit-justify-content: flex-start;\r\n          -moz-box-pack: start;\r\n           -ms-flex-pack: start;\r\n               justify-content: flex-start;\n}\n.to_add[data-v-104ef105]{\r\n       margin-top:0.75rem;\n}\n.g-window .weui-cell[data-v-104ef105]{\r\n       font-size:1.1rem;\n}\r\n", "", {"version":3,"sources":["D:/project/H5/src/pages/AddInfo.vue"],"names":[],"mappings":";AA6CA;QACQ,uCAAuC;QACvC,sCAAsC;CAC7C;AACD;IACI,mCAAmC;IACnC,WAAW;CACd;AACD;KACK,mBAAmB;KACnB,gBAAgB;CACpB;AACC;MACI,WAAW;MACX,iBAAiB;MACjB,sDAAsD;CACzD;AACD;MACI,UAAU;MACV,YAAY;MACZ,iBAAiB;CACpB;AACD;MACI,cAAc;MACd,cAAc;MACd,eAAe;CAClB;AACD;MACI,mBAAmB;MACnB,WAAW;CACd;AACD;MACI,iBAAiB;CACpB;AACD;MACI,kBAAkB;CACrB;AACD;MACI,WAAW;CACd;EACD;;;;;;;;;MASI;AACH;OACI,qBAAc;OAAd,sBAAc;OAAd,kBAAc;OAAd,qBAAc;OAAd,cAAc;OACd,wBAA4B;OAA5B,oCAA4B;UAA5B,qBAA4B;WAA5B,qBAA4B;eAA5B,4BAA4B;CAC/B;AACD;OACI,mBAAmB;CACtB;AACD;OACI,iBAAiB;CACpB","file":"AddInfo.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.vux-header .vux-header-left.header .left-arrow:before{\r\n        border-left: 1px solid #fff !important;\r\n        border-top: 1px solid #fff !important;\r\n}\r\n.header{\r\n    background: transparent !important;\r\n    color:#fff;\r\n}\r\n.g-inherit.m-article{\r\n     background:#F8F8F8;\r\n     margin-top:0rem;\r\n}\r\n  .info_bg{\r\n      width:100%;\r\n      height:11.625rem;\r\n      background:url(/webdemo/h5/res/images/user_banner.png)\r\n  }\r\n  .info_top_box{\r\n      width:20%;\r\n      height:auto;\r\n      margin:3rem auto;\r\n  }\r\n  .info_img{\r\n      width:2.25rem;\r\n      margin:0 auto;\r\n      display: block;\r\n  }\r\n  p{\r\n      text-align: center;\r\n      color:#fff;\r\n  }\r\n  .info_id{\r\n      font-size:0.8rem;\r\n  }\r\n  .info_detail{\r\n      margin-top:0.5rem;\r\n  }\r\n  .sex_icon{\r\n      right:2rem;\r\n  }\r\n  /* .clearfix::before{\r\n      content:\"\";\r\n      display: block;\r\n      clear: both;\r\n  }\r\n  .clearfix::after{\r\n      content:\"\";\r\n      display: block;\r\n      clear: both;\r\n  } */\r\n   .flex{\r\n       display: flex;\r\n       justify-content: flex-start;\r\n   }\r\n   .to_add{\r\n       margin-top:0.75rem;\r\n   }\r\n   .g-window .weui-cell{\r\n       font-size:1.1rem;\r\n   }\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 666:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-104ef105"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/AddInfo.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article",
    attrs: {
      "id": "spec"
    }
  }, [_c('div', {
    staticClass: "info_bg"
  }, [_c('x-header', {
    staticClass: "header",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_vm._v("\n            添加好友\n            "), _c('a', {
    staticStyle: {
      "color": "#fff"
    },
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('group', {
    staticClass: "info_detail"
  }, [_c('cell', {
    attrs: {
      "title": "性别"
    }
  }, [_c('div', {
    staticClass: "sex_icon flex"
  }, [_c('img', {
    attrs: {
      "src": "/webdemo/h5/res/images/sex_meal.png",
      "alt": ""
    }
  }), _c('span', [_vm._v("男")])])]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "年龄",
      "value": "保密"
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "个性签名",
      "value": "暂无"
    }
  })], 1), _vm._v(" "), _c('x-button', {
    staticClass: "to_add",
    attrs: {
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toVerify()
      }
    }
  }, [_vm._v("\n            加为好友")])], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('table'), _vm._v(" "), _c('div', {
    staticClass: "info_top_box clearfix"
  }, [_c('img', {
    staticClass: "info_img",
    attrs: {
      "src": "/webdemo/h5/res/images/my_avatar_default.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "info_name"
  }, [_vm._v("王五五")]), _vm._v(" "), _c('p', {
    staticClass: "info_id"
  }, [_vm._v("ID:654321")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-104ef105", module.exports)
  }
}

/***/ }),

/***/ 722:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-104ef105","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/AddInfo.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-104ef105","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./AddInfo.vue */ 611);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("3e90ebfa", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-104ef105\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddInfo.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-104ef105\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./AddInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=50.js.map