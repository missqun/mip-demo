webpackJsonp([49],{

/***/ 459:
/* no static exports found */
/* all exports used */
/*!********************************!*\
  !*** ./src/pages/Contacts.vue ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-08351c2d","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./Contacts.vue */ 715)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Contacts.vue */ 548),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-08351c2d"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Contacts.vue */ 659),
  /* scopeId */
  "data-v-08351c2d",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\Contacts.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Contacts.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-08351c2d", Component.options)
  } else {
    hotAPI.reload("data-v-08351c2d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 548:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Contacts.vue ***!
  \********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 50);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      value: "",
      results: []
    };
  },

  methods: {
    resultClick: function resultClick(item) {
      window.alert('you click the result item: ' + (0, _stringify2.default)(item));
    },
    getResult: function (_getResult) {
      function getResult(_x) {
        return _getResult.apply(this, arguments);
      }

      getResult.toString = function () {
        return _getResult.toString();
      };

      return getResult;
    }(function (val) {
      console.log('on-change', val);
      this.results = val ? getResult(this.value) : [];
    }),
    onSubmit: function onSubmit() {
      this.$refs.search.setBlur();
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      });
    },
    onFocus: function onFocus() {
      console.log('on focus');
    },
    onCancel: function onCancel() {
      console.log('on cncel');
    }
  },
  computed: {
    friendslist: function friendslist() {
      var _this = this;

      return this.$store.state.friendslist.filter(function (item) {
        var account = item.account;
        var thisAttrs = _this.userInfos[account];
        var alias = thisAttrs.alias ? thisAttrs.alias.trim() : '';
        item.alias = alias || thisAttrs.nick || account;
        item.link = '/namecard/' + item.account;
        if (!thisAttrs.isFriend || thisAttrs.isBlack) {
          return false;
        }
        return true;
      });
    },
    blacklist: function blacklist() {
      var _this2 = this;

      return this.$store.state.blacklist.filter(function (item) {
        var account = item.account;
        var thisAttrs = _this2.userInfos[account];
        var alias = thisAttrs.alias ? thisAttrs.alias.trim() : '';
        item.alias = alias || thisAttrs.nick || account;
        item.link = '/namecard/' + item.account;
        if (!thisAttrs.isFriend) {
          return false;
        }
        return true;
      });
    },
    robotslist: function robotslist() {
      return this.$store.state.robotslist.map(function (item) {
        item.link = '/namecard/' + item.account;
        return item;
      });
    },
    userInfos: function userInfos() {
      return this.$store.state.userInfos;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 604:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-08351c2d","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Contacts.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.vux-search-box[data-v-08351c2d]{\n  height:2rem;\n  font-size:1.1rem;\n}\n.search_box[data-v-08351c2d]{\n  height:2rem;\n}\n.p-contacts .add-friend[data-v-08351c2d] {\n  background-color: #fff;\n}\n.p-contacts .m-list[data-v-08351c2d] {\n  margin-top:4rem;\n}\n.p-contacts .u-search-box-wrap[data-v-08351c2d] {\n  text-align: center;\n}\n.p-contacts .u-search-box[data-v-08351c2d] {\n  position: relative;\n  display: inline-block;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  min-width: 45%;\n  padding: 1em;\n  height: 3rem;\n  text-align: center;\n  border: 1px solid #ccc;\n  background-color: #fff;\n  font-size: 0.8rem;\n  box-shadow: 2px 2px 6px #ccc;\n}\n.p-contacts .u-search-box a[data-v-08351c2d] {\n  display: inline-block;\n  -moz-box-sizing: border-box;\n       box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n}\n.p-contacts .u-card .icon[data-v-08351c2d] {\n  display: inline-block;\n  margin-right: 0.4rem;\n  width: 2.4rem;\n  height: 2.4rem;\n  background-size: 20rem;\n}\n.p-contacts .u-card .icon-team-advanced[data-v-08351c2d] {\n  /* background-image: url(/webdemo/h5/res/images/top_group.png); */\n}\n.p-contacts .u-card .icon-team[data-v-08351c2d] {\n  background-position: -2.1rem -3rem;\n  background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/Contacts.vue"],"names":[],"mappings":";AAqJA;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AAEG;EACE,uBAAuB;CACxB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,sBAAsB;EACtB,4BAAuB;OAAvB,uBAAuB;EACvB,eAAe;EACf,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,kBAAkB;EAClB,6BAA6B;CAO9B;AANC;EACE,sBAAsB;EACtB,4BAAuB;OAAvB,uBAAuB;EACvB,aAAa;EACb,YAAY;CACb;AAGD;EACE,sBAAsB;EACtB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,kEAAkE;CACnE;AACD;EACE,mCAAmC;EACnC,4EAA4E;CAC7E","file":"Contacts.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.vux-search-box{\n  height:2rem;\n  font-size:1.1rem;\n}\n.search_box{\n  height:2rem;\n}\n  .p-contacts {\n    .add-friend {\n      background-color: #fff;\n    }\n    .m-list {\n      margin-top:4rem;\n    }\n    .u-search-box-wrap {\n      text-align: center;\n    }\n    .u-search-box {\n      position: relative;\n      display: inline-block;\n      box-sizing: border-box;\n      min-width: 45%;\n      padding: 1em;\n      height: 3rem;\n      text-align: center;\n      border: 1px solid #ccc;\n      background-color: #fff;\n      font-size: 0.8rem;\n      box-shadow: 2px 2px 6px #ccc;\n      a {\n        display: inline-block;\n        box-sizing: border-box;\n        height: 100%;\n        width: 100%;\n      }\n    }\n    .u-card {\n      .icon {\n        display: inline-block;\n        margin-right: 0.4rem;\n        width: 2.4rem;\n        height: 2.4rem;\n        background-size: 20rem;\n      }\n      .icon-team-advanced {\n        /* background-image: url(/webdemo/h5/res/images/top_group.png); */\n      }\n      .icon-team {\n        background-position: -2.1rem -3rem;\n        background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n      }\n    }\n  }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 659:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-08351c2d"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Contacts.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main p-contacts"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("通讯录")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  }), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('img', {
    attrs: {
      "src": "/webdemo/h5/res/images/group_add.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "m-list",
    attrs: {
      "id": "userList"
    }
  }, [_c('div', {
    staticClass: "search_box"
  }, [_c('search', {
    ref: "search",
    attrs: {
      "results": _vm.results,
      "position": "absolute",
      "auto-scroll-to-top": "",
      "top": "0px",
      "placeholder": "搜索好友/群组"
    },
    on: {
      "result-click": _vm.resultClick,
      "on-change": _vm.getResult,
      "on-focus": _vm.onFocus,
      "on-cancel": _vm.onCancel,
      "on-submit": _vm.onSubmit
    },
    model: {
      value: (_vm.value),
      callback: function($$v) {
        _vm.value = $$v
      },
      expression: "value"
    }
  })], 1), _vm._v(" "), _c('group', {
    staticClass: "u-card"
  }, [_c('cell', {
    attrs: {
      "title": "高级群",
      "is-link": "",
      "link": "/teamlist/advanced"
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "20",
      "src": "/webdemo/h5/res/images/avatar_default.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "开奖信息",
      "is-link": "",
      "link": "/lotterymain"
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "20",
      "src": "/webdemo/h5/res/images/txl_kjxx.png"
    },
    slot: "icon"
  })]), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "消息提醒",
      "inline-desc": "用户李思思请求加好友",
      "is-link": "",
      "link": "/verifylist"
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "20",
      "src": "/webdemo/h5/res/images/verify.png"
    },
    slot: "icon"
  })])], 1), _vm._v(" "), _c('group', {
    staticClass: "u-card"
  }, _vm._l((_vm.friendslist), function(friend) {
    return _c('cell', {
      key: friend.account,
      attrs: {
        "title": friend.alias,
        "is-link": "",
        "link": friend.link
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "slot": "icon",
        "width": "30",
        "src": _vm.userInfos[friend.account].avatar
      },
      slot: "icon"
    })])
  }), 1)], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-08351c2d", module.exports)
  }
}

/***/ }),

/***/ 715:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-08351c2d","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Contacts.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-08351c2d","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./Contacts.vue */ 604);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("4d1f1646", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-08351c2d\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contacts.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-08351c2d\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Contacts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=49.js.map