webpackJsonp([48],{

/***/ 460:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/General.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-74283c7e","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./General.vue */ 750)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./General.vue */ 549),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-74283c7e"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./General.vue */ 695),
  /* scopeId */
  "data-v-74283c7e",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\General.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] General.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74283c7e", Component.options)
  } else {
    hotAPI.reload("data-v-74283c7e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 549:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/General.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _index = __webpack_require__(/*! vux/src/components/group/index.vue */ 109);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! vux/src/components/cell/index.vue */ 152);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      isShow: false
    };
  },

  components: {
    Group: _index2.default,
    Cell: _index4.default
  },
  computed: {
    myInfo: function myInfo() {
      return this.$store.state.myInfo;
    }
  },
  methods: {
    logout: function logout() {
      var that = this;
      this.$vux.confirm.show({
        title: '确定要注销帐号？',
        onConfirm: function onConfirm() {
          that.$store.dispatch('logout');
        }
      });
    },
    showVersion: function showVersion() {
      this.isShow = true;
    },
    toUserSetting: function toUserSetting() {
      this.$router.push({ path: '/usersetting' });
    },
    toRecharge: function toRecharge() {
      this.$router.push({ path: '/recharge' });
    },
    toSign: function toSign() {
      this.$router.push({ path: '/sign' });
    },
    onShow: function onShow() {},
    onHide: function onHide() {}
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 639:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-74283c7e","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/General.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.fl[data-v-74283c7e]{\n  float: left;\n}\n.fr[data-v-74283c7e]{\n  float:right;\n}\n.flex[data-v-74283c7e]{\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: start;\n  -webkit-justify-content: start;\n     -moz-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: start;\n}\n.yellow[data-v-74283c7e]{\n  color:#FB8C00;\n}\n.dark[data-v-74283c7e]{\n  color:#999;\n}\n.blue[data-v-74283c7e]{\n  font-size:1.0rem;\n  margin:0.5rem 0;\n}\n#spec[data-v-74283c7e]{\n  position: relative;\n width: 100%;\nheight: 11.625rem;\nbackground: url(/webdemo/h5/res/images/user_banner.png);\n}\n.header[data-v-74283c7e], .u_card[data-v-74283c7e]{\n  background:transparent;\n  color:#fff;\n}\n.u_card[data-v-74283c7e]{\n  width:6rem;\n  margin:2rem 0 2rem 2rem;\n}\n.u_msg[data-v-74283c7e]{\n  margin-left:1rem;\n}\n.id[data-v-74283c7e]{\n  font-size:0.8rem;\n}\n.sign_box[data-v-74283c7e]{\n  width:6.3rem;\n  height:3rem;\n  position: absolute;\n  right:0;\n  top:5rem;\n  font-size:0.8rem;\n  color:#fff;\n  background: url(/webdemo/h5/res/images/grzx_qd_bg.png) left top no-repeat;\n  /* background-size:50; */\n}\n.sign_img[data-v-74283c7e]{\n  vertical-align: center;\n  position: relative;\n  top:0.5rem;\n  margin-left:1rem;\n}\n.score_box[data-v-74283c7e]{\n  position: absolute;\n  width:90%;\n  height:4rem;\n  top:9.5rem;\n  left:5%;\n  background:rgba(255, 255, 255, 1);\n  box-shadow:0px 2px 3px rgba(0, 0, 0, .16);\n  border-radius:0.5rem;\n  padding:1.2rem 1rem;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n}\n.residuce[data-v-74283c7e]{\n  margin-left:1rem;\n}\n.charge_btn[data-v-74283c7e]{\n  width:5rem;\n  position: relative;\n  top:-0.4rem;\n}\n.general_box[data-v-74283c7e]{\n  margin-top:2.8rem;\n  background:#fff;\n}\n.general_box1[data-v-74283c7e]{\n  margin-top:1rem;\n  background:#fff;\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/General.vue"],"names":[],"mappings":";AAmIA;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAAuB;EAAvB,+BAAuB;KAAvB,qBAAuB;MAAvB,qBAAuB;UAAvB,uBAAuB;CACxB;AACD;EACE,cAAc;CACf;AACD;EACE,WAAW;CACZ;AACD;EACE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB,YAAY;AACb,kBAAkB;AAClB,wDAAwD;CACvD;AACD;EACE,uBAAuB;EACvB,WAAW;CACZ;AACD;EACE,WAAW;EACX,wBAAwB;CACzB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,iBAAiB;EACjB,WAAW;EACX,0EAA0E;EAC1E,yBAAyB;CAC1B;AACD;EACE,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,YAAY;EACZ,WAAW;EACX,QAAQ;EACR,kCAA+B;EAC/B,0CAAwC;EACxC,qBAAqB;EACrB,oBAAoB;EACpB,4BAAuB;OAAvB,uBAAuB;CACxB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,WAAW;EACX,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,gBAAgB;CACjB","file":"General.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.fl{\n  float: left;\n}\n.fr{\n  float:right;\n}\n.flex{\n  display: flex;\n  justify-content: start;\n}\n.yellow{\n  color:#FB8C00;\n}\n.dark{\n  color:#999;\n}\n.blue{\n  font-size:1.0rem;\n  margin:0.5rem 0;\n}\n#spec{\n  position: relative;\n width: 100%;\nheight: 11.625rem;\nbackground: url(/webdemo/h5/res/images/user_banner.png);\n}\n.header,.u_card{\n  background:transparent;\n  color:#fff;\n}\n.u_card{\n  width:6rem;\n  margin:2rem 0 2rem 2rem;\n}\n.u_msg{\n  margin-left:1rem;\n}\n.id{\n  font-size:0.8rem;\n}\n.sign_box{\n  width:6.3rem;\n  height:3rem;\n  position: absolute;\n  right:0;\n  top:5rem;\n  font-size:0.8rem;\n  color:#fff;\n  background: url(/webdemo/h5/res/images/grzx_qd_bg.png) left top no-repeat;\n  /* background-size:50; */\n}\n.sign_img{\n  vertical-align: center;\n  position: relative;\n  top:0.5rem;\n  margin-left:1rem;\n}\n.score_box{\n  position: absolute;\n  width:90%;\n  height:4rem;\n  top:9.5rem;\n  left:5%;\n  background:rgba(255,255,255,1);\n  box-shadow:0px 2px 3px rgba(0,0,0,0.16);\n  border-radius:0.5rem;\n  padding:1.2rem 1rem;\n  box-sizing: border-box;\n}\n.residuce{\n  margin-left:1rem;\n}\n.charge_btn{\n  width:5rem;\n  position: relative;\n  top:-0.4rem;\n}\n.general_box{\n  margin-top:2.8rem;\n  background:#fff;\n}\n.general_box1{\n  margin-top:1rem;\n  background:#fff;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 695:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-74283c7e"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/General.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.myInfo.account) ? _c('div', {
    staticClass: "g-inherit m-main p-general"
  }, [_c('div', {
    attrs: {
      "id": "spec"
    }
  }, [_c('x-header', {
    staticClass: "header",
    attrs: {
      "left-options": {
        showBack: true,
        backText: ' '
      }
    }
  }, [_c('p', [_vm._v("个人中心")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "right"
    },
    on: {
      "click": function($event) {
        _vm.toUserSetting()
      }
    },
    slot: "right"
  }, [_c('img', {
    attrs: {
      "src": "/webdemo/h5/res/images/user_setting.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "u_card flex"
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "55",
      "src": "http://yx-web.nos.netease.com/webdoc/h5/im/default-icon.png"
    },
    slot: "icon"
  }), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "sign_box",
    on: {
      "click": function($event) {
        _vm.toSign()
      }
    }
  }, [_c('img', {
    staticClass: "sign_img",
    attrs: {
      "src": "/webdemo/h5/res/images/grzx_qd.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("签到有礼")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "score_box"
  }, [_c('img', {
    staticClass: "fl",
    attrs: {
      "src": "/webdemo/h5/res/images/ico_bi_lg.png",
      "alt": ""
    }
  }), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('x-button', {
    staticClass: "charge_btn fr",
    attrs: {
      "action-type": "button",
      "gradients": ['#FB8C00', '#FB8C00'],
      "text": "充值"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toRecharge()
      }
    }
  })], 1), _vm._v(" "), _c('group', {
    staticClass: "general_box"
  }, [_c('cell', {
    attrs: {
      "title": "个人资料",
      "is-link": "",
      "link": "/personaldata"
    }
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin-right": "5px"
    },
    attrs: {
      "slot": "icon",
      "width": "35",
      "src": "/webdemo/h5/res/images/grzx_grzl.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "修改密码",
      "is-link": "",
      "link": "/updateupwd"
    }
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin-right": "5px"
    },
    attrs: {
      "slot": "icon",
      "width": "35",
      "src": "/webdemo/h5/res/images/grzx_xgmm.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "我的粉丝",
      "is-link": "",
      "link": "/myfans"
    }
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin-right": "5px"
    },
    attrs: {
      "slot": "icon",
      "width": "35",
      "src": "/webdemo/h5/res/images/grzx_wdfs.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "积分中心",
      "is-link": "",
      "link": "/scorecenter"
    }
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin-right": "5px"
    },
    attrs: {
      "slot": "icon",
      "width": "35",
      "src": "/webdemo/h5/res/images/grzx_jfzx.png"
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('group', {
    staticClass: "general_box1"
  }, [_c('cell', {
    attrs: {
      "title": "联系客服",
      "is-link": ""
    }
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin-right": "5px"
    },
    attrs: {
      "slot": "icon",
      "width": "35",
      "src": "/webdemo/h5/res/images/grzx_lxkf.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "检查更新",
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return _vm.showVersion($event)
      }
    }
  }, [_c('img', {
    staticStyle: {
      "display": "block",
      "margin-right": "5px"
    },
    attrs: {
      "slot": "icon",
      "width": "35",
      "src": "/webdemo/h5/res/images/grzx_jcgx.png"
    },
    slot: "icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "dark"
  }, [_vm._v("有新版本")])])], 1), _vm._v(" "), _c('div', [_c('alert', {
    attrs: {
      "title": "",
      "button-text": "升级版本"
    },
    on: {
      "on-show": _vm.onShow,
      "on-hide": _vm.onHide
    },
    model: {
      value: (_vm.isShow),
      callback: function($$v) {
        _vm.isShow = $$v
      },
      expression: "isShow"
    }
  }, [_vm._t("default", [_c('img', {
    attrs: {
      "src": "/webdemo/h5/res/images/tip_update.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "blue"
  }, [_vm._v("检测到新版本v1.1,赶快升级吧")])])], 2)], 1)], 1) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "u_msg"
  }, [_c('p', {
    staticClass: "uname"
  }, [_vm._v("王五五")]), _vm._v(" "), _c('p', {
    staticClass: "id"
  }, [_vm._v("ID:654321")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "residuce fl"
  }, [_vm._v("积分余额 "), _c('span', {
    staticClass: "yellow"
  }, [_vm._v("1321")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-74283c7e", module.exports)
  }
}

/***/ }),

/***/ 750:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-74283c7e","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/General.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-74283c7e","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./General.vue */ 639);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("5b094669", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-74283c7e\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./General.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-74283c7e\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./General.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=48.js.map