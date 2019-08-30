webpackJsonp([38],{

/***/ 477:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./src/pages/TeamOwnManage.vue ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-0c4c4678","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./TeamOwnManage.vue */ 718)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./TeamOwnManage.vue */ 570),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-0c4c4678"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./TeamOwnManage.vue */ 662),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\TeamOwnManage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamOwnManage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c4c4678", Component.options)
  } else {
    hotAPI.reload("data-v-0c4c4678", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 570:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/TeamOwnManage.vue ***!
  \*************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    data: function data() {
        return {
            showIdentity: false,
            say: false,
            identityMenu: {
                menu1: "允许任何人加入",
                menu2: "需要验证",
                menu3: '不允许任何人加入'
            },
            arr: [1, 2, 3, 4, 5]
        };
    }
};
module.exports = exports["default"];

/***/ }),

/***/ 607:
/* no static exports found */
/* all exports used */
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-0c4c4678","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamOwnManage.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.vux-actionsheet-menu-default{\n     color:#039BE5;\n}\n.own_control{\n    width:100%;\n    margin-top:4.8rem;\n}\n.g_member_box{\n    background:#fff;\n}\n.g-window .own_control .weui-cell{\n    height:2.2rem;\n    background:#fff;\n}\n.g-window .own_control .weui-cell .weui-cell__ft{\n\n    font-size:0.9rem;\n    color:#666;\n}\n.g-window .weui-switch:checked, .g-window .weui-switch-cp__input:checked ~ .weui-switch-cp__box{\n    border-color: #04BE02;\n   background-color: #04BE02;\n}\n.g_member{\n    float: left;\n    width:16%;\n    margin:0.2rem 2%;\n}\nimg.avatar{\n    display: block;\n    margin:0 auto;\n}\np.g_name{\n    width:100%;\n    text-align: center;\n}\n.own_say{\n    margin-top:1rem;\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/TeamOwnManage.vue"],"names":[],"mappings":";AA6DC;KACI,cAAc;CACf;AACJ;IACI,WAAW;IACX,kBAAkB;CAErB;AACD;IACI,gBAAgB;CACnB;AACD;IACI,cAAc;IACd,gBAAgB;CACnB;AACA;;IAEG,iBAAiB;IACjB,WAAW;CACd;AACD;IACI,sBAAsB;GACvB,0BAA0B;CAC5B;AAED;IACI,YAAY;IACZ,UAAU;IACV,iBAAiB;CACpB;AACD;IACI,eAAe;IACf,cAAc;CACjB;AACD;IACI,WAAW;IACX,mBAAmB;CACtB;AACD;IACI,gBAAgB;CACnB","file":"TeamOwnManage.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n .vux-actionsheet-menu-default{\n     color:#039BE5;\n   }\n.own_control{\n    width:100%;\n    margin-top:4.8rem;\n   \n}\n.g_member_box{\n    background:#fff;\n}\n.g-window .own_control .weui-cell{\n    height:2.2rem;\n    background:#fff;\n} \n .g-window .own_control .weui-cell .weui-cell__ft{\n\n    font-size:0.9rem;\n    color:#666;\n}\n.g-window .weui-switch:checked, .g-window .weui-switch-cp__input:checked ~ .weui-switch-cp__box{\n    border-color: #04BE02;\n   background-color: #04BE02;\n}\n\n.g_member{\n    float: left;\n    width:16%;\n    margin:0.2rem 2%; \n}\nimg.avatar{\n    display: block;\n    margin:0 auto;\n}\np.g_name{\n    width:100%;\n    text-align: center;\n}\n.own_say{\n    margin-top:1rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 662:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-0c4c4678"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/TeamOwnManage.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("群管理")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "own_control"
  }, [_c('group', [_c('cell', {
    attrs: {
      "title": "加群验证",
      "is-link": ""
    }
  }, [_c('p', {
    on: {
      "click": function($event) {
        _vm.showIdentity = true
      }
    }
  }, [_vm._v("需要身份验证")])]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "邀请他人权限",
      "is-link": ""
    }
  }, [_c('p', {
    on: {
      "click": function($event) {
        _vm.showIdentity = true
      }
    }
  }, [_vm._v("管理员邀请")])]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "被邀请人身份验证",
      "is-link": ""
    }
  }, [_c('p', {
    on: {
      "click": function($event) {
        _vm.showIdentity = true
      }
    }
  }, [_vm._v("需要验证")])]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "群成员查看信息权限",
      "is-link": ""
    }
  }, [_c('p', {
    on: {
      "click": function($event) {
        _vm.showIdentity = true
      }
    }
  }, [_vm._v("允许")])])], 1), _vm._v(" "), _c('group', {
    staticClass: "g_member_box"
  }, [_c('cell', {
    attrs: {
      "title": "管理员",
      "value": "共5人"
    }
  }), _vm._v(" "), _vm._l((_vm.arr), function(member, index) {
    return _c('div', {
      key: index,
      staticClass: "g_member"
    }, [_c('img', {
      staticClass: "avatar",
      attrs: {
        "width": "40",
        "src": "http://yx-web.nos.netease.com/webdoc/h5/im/default-icon.png"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "g_name"
    }, [_vm._v("王老五")])])
  })], 2), _vm._v(" "), _c('group', {
    staticClass: "own_say"
  }, [_c('x-switch', {
    attrs: {
      "title": "禁言设置"
    },
    model: {
      value: (_vm.say),
      callback: function($$v) {
        _vm.say = $$v
      },
      expression: "say"
    }
  }, [_vm._v("仅限群主管理员发言")])], 1)], 1), _vm._v(" "), _c('action-sheet', {
    attrs: {
      "menus": _vm.identityMenu,
      "show-cancel": "",
      "close-on-clicking-mask": "",
      "close-on-clicking-menu": ""
    },
    on: {
      "on-after-hide": function($event) {
        _vm.log('after hide')
      },
      "on-after-show": function($event) {
        _vm.log('after show')
      }
    },
    model: {
      value: (_vm.showIdentity),
      callback: function($$v) {
        _vm.showIdentity = $$v
      },
      expression: "showIdentity"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c4c4678", module.exports)
  }
}

/***/ }),

/***/ 718:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-0c4c4678","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamOwnManage.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-0c4c4678","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamOwnManage.vue */ 607);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("3bbb9a4c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0c4c4678\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamOwnManage.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0c4c4678\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamOwnManage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=38.js.map