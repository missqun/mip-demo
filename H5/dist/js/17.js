webpackJsonp([17],{

/***/ 498:
/* no static exports found */
/* all exports used */
/*!********************************************!*\
  !*** ./src/pages/ucenter/PersonalData.vue ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-6f0255c9","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./PersonalData.vue */ 747)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./PersonalData.vue */ 591),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-6f0255c9"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./PersonalData.vue */ 692),
  /* scopeId */
  "data-v-6f0255c9",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\ucenter\\PersonalData.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PersonalData.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f0255c9", Component.options)
  } else {
    hotAPI.reload("data-v-6f0255c9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 591:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/ucenter/PersonalData.vue ***!
  \********************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    data: function data() {
        return {
            show1: false,
            menus: {
                menu1: "拍照",
                menu2: "相册选择"
            },
            userInfo: {
                uname: "lisa",
                id: "666666",
                avatar: '/webdemo/h5/res/images/my_avatar_default.png'
            }

        };
    },

    methods: {
        showMenu: function showMenu() {
            this.show1 = true;
        }
    }
};
module.exports = exports["default"];

/***/ }),

/***/ 636:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-6f0255c9","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/ucenter/PersonalData.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.vux-actionsheet-menu-default[data-v-6f0255c9]{\r\n    color:rgba(3, 155, 229, 1) !important;\n}\n.cell[data-v-6f0255c9]{\r\n    padding:0.9rem 0.7rem !important;\n}\n.personal_bg[data-v-6f0255c9]{\r\n    background: #fff;\r\n    margin-top:0.6rem;\n}\n.update_avater[data-v-6f0255c9]{\r\n     -webkit-box-pack: start;\r\n     -webkit-justify-content: start;\r\n        -moz-box-pack: start;\r\n         -ms-flex-pack: start;\r\n             justify-content: start;\r\n     background: #fff;\r\n     height:4rem;\r\n     width:100%;\r\n     padding:1rem;\n}\n.avater_img[data-v-6f0255c9]{\r\n    width:4rem;\r\n    height:4rem;\r\n    border:1px solid rgba(221, 221, 221, 1);\r\n    border-radius:50%;\n}\n.avater_img[data-v-6f0255c9]{\r\n     margin-right:1rem;\r\n     position: relative;\n}\n.user_id[data-v-6f0255c9]{\r\n     color:#999;\r\n     font-size:0.9rem;\n}\n.avater[data-v-6f0255c9]{\r\n     position: absolute;\r\n     left:50%;\r\n     top:50%;\r\n     margin:-17px 0 0 -18px;\r\n     width:36px;\r\n     height:34px;\n}\n.avater_change[data-v-6f0255c9]{\r\n    position: absolute;\r\n    right:-0.3rem;\r\n    bottom:0rem;\n}\n.hiddenInput[data-v-6f0255c9]{\r\n     opacity: 0;\r\n      position: absolute;\r\n     right:-0.3rem;\r\n     bottom:0rem;\r\n     width:22px;\r\n     height:18px;\n}\n.sex[data-v-6f0255c9]{\r\n     color:#999;\r\n     margin-right:2rem;\n}\n.sex_img[data-v-6f0255c9]{\r\n     position: relative;\r\n     top:0.1rem;\r\n     margin-right:0.2rem;\n}\n.xinput[data-v-6f0255c9]{\r\n     border:none;\r\n     outline: none;\r\n     height:1.5rem;\r\n     font-size:1rem;\r\n     color:#999;\n}\n.cell_title[data-v-6f0255c9]{\r\n     display:inline-block;\r\n     width:5rem;\n}\n.to_bind[data-v-6f0255c9]{\r\n     color:#039BE5;\n}\n.submit[data-v-6f0255c9]{\r\n     margin:0.6rem auto;\n}\n.other_msg[data-v-6f0255c9]{\r\n     color:rgba(153, 153, 153, 1);\r\n     font-size:0.9rem;\r\n     text-align: center;\n}\r\n\r\n", "", {"version":3,"sources":["D:/project/H5/src/pages/ucenter/PersonalData.vue"],"names":[],"mappings":";AAqFA;IACI,sCAAsC;CACzC;AACD;IACI,iCAAiC;CACpC;AACD;IACI,iBAAiB;IACjB,kBAAkB;CACrB;AACA;KACI,wBAAuB;KAAvB,+BAAuB;QAAvB,qBAAuB;SAAvB,qBAAuB;aAAvB,uBAAuB;KACvB,iBAAiB;KACjB,YAAY;KACZ,WAAW;KACX,aAAa;CAEhB;AACD;IACG,WAAW;IACX,YAAY;IACZ,wCAAqC;IACrC,kBAAkB;CACpB;AACD;KACI,kBAAkB;KAClB,mBAAmB;CACtB;AACD;KACI,WAAW;KACX,iBAAiB;CACpB;AACD;KACI,mBAAmB;KACnB,SAAS;KACT,QAAQ;KACR,uBAAuB;KACvB,WAAW;KACX,YAAY;CACf;AACD;IACG,mBAAmB;IACnB,cAAc;IACd,YAAY;CACd;AACD;KACI,WAAW;MACV,mBAAmB;KACpB,cAAc;KACd,YAAY;KACZ,WAAW;KACX,YAAY;CACf;AACD;KACI,WAAW;KACX,kBAAkB;CAErB;AACD;KACI,mBAAmB;KACnB,WAAW;KACX,oBAAoB;CACvB;AACD;KACI,YAAY;KACZ,cAAc;KACd,cAAc;KACd,eAAe;KACf,WAAW;CACd;AACD;KACI,qBAAqB;KACrB,WAAW;CACd;AACD;KACI,cAAc;CACjB;AACD;KACI,mBAAmB;CACtB;AACD;KACI,6BAA0B;KAC1B,iBAAiB;KACjB,mBAAmB;CACtB","file":"PersonalData.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.vux-actionsheet-menu-default{\r\n    color:rgba(3, 155, 229, 1) !important;\r\n}\r\n.cell{\r\n    padding:0.9rem 0.7rem !important;\r\n}\r\n.personal_bg{\r\n    background: #fff;\r\n    margin-top:0.6rem;\r\n}\r\n .update_avater{\r\n     justify-content: start;\r\n     background: #fff;\r\n     height:4rem;\r\n     width:100%;\r\n     padding:1rem;\r\n     \r\n }\r\n .avater_img{\r\n    width:4rem;\r\n    height:4rem;\r\n    border:1px solid rgba(221,221,221,1);\r\n    border-radius:50%;\r\n }\r\n .avater_img{\r\n     margin-right:1rem;\r\n     position: relative;\r\n }\r\n .user_id{\r\n     color:#999;\r\n     font-size:0.9rem;\r\n }\r\n .avater{\r\n     position: absolute;\r\n     left:50%;\r\n     top:50%;\r\n     margin:-17px 0 0 -18px;\r\n     width:36px;\r\n     height:34px;\r\n }\r\n .avater_change{\r\n    position: absolute;\r\n    right:-0.3rem;\r\n    bottom:0rem;\r\n }\r\n .hiddenInput{\r\n     opacity: 0;\r\n      position: absolute;\r\n     right:-0.3rem;\r\n     bottom:0rem;\r\n     width:22px;\r\n     height:18px;\r\n }\r\n .sex{\r\n     color:#999;\r\n     margin-right:2rem;\r\n\r\n }\r\n .sex_img{\r\n     position: relative;\r\n     top:0.1rem;\r\n     margin-right:0.2rem;\r\n }\r\n .xinput{\r\n     border:none;\r\n     outline: none;\r\n     height:1.5rem;\r\n     font-size:1rem;\r\n     color:#999;\r\n }\r\n .cell_title{\r\n     display:inline-block;\r\n     width:5rem;\r\n }\r\n .to_bind{\r\n     color:#039BE5;\r\n }\r\n .submit{\r\n     margin:0.6rem auto;\r\n }\r\n .other_msg{\r\n     color:rgba(153,153,153,1);\r\n     font-size:0.9rem;\r\n     text-align: center;\r\n }\r\n\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 692:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-6f0255c9"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/ucenter/PersonalData.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
      "title": "我的资料"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "update_avater flex"
  }, [_c('div', {
    staticClass: "avater_img "
  }, [_c('img', {
    staticClass: "avater",
    attrs: {
      "src": _vm.userInfo.avatar,
      "alt": ""
    }
  }), _vm._v(" "), _c('img', {
    staticClass: "avater_change",
    attrs: {
      "src": "/webdemo/h5/res/images/avatar_change.png",
      "alt": ""
    },
    on: {
      "click": _vm.showMenu
    }
  })]), _vm._v(" "), _c('action-sheet', {
    staticClass: "actiontext",
    attrs: {
      "menus": _vm.menus,
      "show-cancel": "",
      "close-on-clicking-mask": "",
      "close-on-clicking-menu": ""
    },
    model: {
      value: (_vm.show1),
      callback: function($$v) {
        _vm.show1 = $$v
      },
      expression: "show1"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user_name_id"
  }, [_c('p', {
    staticClass: "user_name"
  }, [_vm._v(_vm._s(_vm.userInfo.uname))]), _vm._v(" "), _c('p', {
    staticClass: "user_id"
  }, [_vm._v("ID:" + _vm._s(_vm.userInfo.id))])])], 1), _vm._v(" "), _c('group', {
    staticClass: "personal_bg"
  }, [_c('cell-box', {
    staticClass: "cell"
  }, [_c('span', {
    staticClass: "cell_title"
  }, [_vm._v("昵称")]), _vm._v(" "), _c('input', {
    staticClass: "xinput",
    attrs: {
      "type": "text",
      "placeholder": "请设置昵称",
      "name": ""
    }
  })]), _vm._v(" "), _c('cell-box', {
    staticClass: "cell"
  }, [_c('span', {
    staticClass: "cell_title"
  }, [_vm._v("性别")]), _vm._v(" "), _c('span', {
    staticClass: "sex",
    class: {
      active: _vm.isActive
    }
  }, [_c('img', {
    staticClass: "sex_img",
    attrs: {
      "src": "/webdemo/h5/res/images/sex_m.png",
      "alt": ""
    }
  }), _vm._v("男")]), _vm._v(" "), _c('span', {
    staticClass: "sex"
  }, [_c('img', {
    staticClass: "sex_img",
    attrs: {
      "src": "/webdemo/h5/res/images/sex_fm.png",
      "alt": ""
    }
  }), _vm._v("女")])]), _vm._v(" "), _c('cell-box', {
    staticClass: "cell",
    attrs: {
      "is-link": "",
      "link": "/bindphone"
    }
  }, [_c('span', {
    staticClass: "cell_title"
  }, [_vm._v("绑定手机")]), _vm._v(" "), _c('span', {
    staticClass: "to_bind"
  }, [_vm._v("去绑定")])]), _vm._v(" "), _c('x-textarea', {
    staticClass: "xtextarea",
    attrs: {
      "title": "个性前面",
      "placeholder": "这么有个性，签个名？"
    }
  })], 1), _vm._v(" "), _c('x-button', {
    staticClass: "submit",
    attrs: {
      "type": "primary",
      "action-type": "button",
      "text": "提交"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "other_msg"
  }, [_vm._v("完善个人信息奖励100积分")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f0255c9", module.exports)
  }
}

/***/ }),

/***/ 747:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-6f0255c9","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/ucenter/PersonalData.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-6f0255c9","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./PersonalData.vue */ 636);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("45ee1cec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6f0255c9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PersonalData.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-6f0255c9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PersonalData.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=17.js.map