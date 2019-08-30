webpackJsonp([43],{

/***/ 468:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/Session.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-3e6f2f2c","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./Session.vue */ 740)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Session.vue */ 561),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-3e6f2f2c"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Session.vue */ 685),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\Session.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Session.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e6f2f2c", Component.options)
  } else {
    hotAPI.reload("data-v-3e6f2f2c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 561:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Session.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ 50);

var _stringify2 = _interopRequireDefault(_stringify);

var _utils = __webpack_require__(/*! ../utils */ 29);

var _utils2 = _interopRequireDefault(_utils);

var _configs = __webpack_require__(/*! ../configs */ 9);

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      delSessionId: null,
      stopBubble: false,
      noticeIcon: _configs2.default.noticeIcon,
      myPhoneIcon: _configs2.default.myPhoneIcon,
      myGroupIcon: _configs2.default.defaultGroupIcon,
      myAdvancedIcon: _configs2.default.defaultAdvancedIcon,
      results: [],
      value: '',
      isShow: true,
      menus1: {
        menu1: "添加好友/群组",
        menu2: "创建群组"
      },
      show2: false
    };
  },

  computed: {
    sysMsgUnread: function sysMsgUnread() {
      var temp = this.$store.state.sysMsgUnread;
      var sysMsgUnread = temp.addFriend || 0;
      sysMsgUnread += temp.team || 0;
      var customSysMsgUnread = this.$store.state.customSysMsgUnread;
      return sysMsgUnread + customSysMsgUnread;
    },
    userInfos: function userInfos() {
      return this.$store.state.userInfos;
    },
    myInfo: function myInfo() {
      return this.$store.state.myInfo;
    },
    myPhoneId: function myPhoneId() {
      return '' + this.$store.state.userUID;
    },
    sessionlist: function sessionlist() {
      var _this = this;

      var sessionlist = this.$store.state.sessionlist.filter(function (item) {
        item.name = '';
        item.avatar = '';
        if (item.scene === 'p2p') {
          var userInfo = null;
          if (item.to !== _this.myPhoneId) {
            userInfo = _this.userInfos[item.to];
          } else {
            return false;
          }
          if (userInfo) {
            item.name = _utils2.default.getFriendAlias(userInfo);
            item.avatar = userInfo.avatar;
          }
        } else if (item.scene === 'team') {
          var teamInfo = null;
          teamInfo = _this.$store.state.teamlist.find(function (team) {
            return team.teamId === item.to;
          });
          if (teamInfo) {
            item.name = teamInfo.name;
            item.avatar = teamInfo.avatar || (teamInfo.type === 'normal' ? _this.myGroupIcon : _this.myAdvancedIcon);
          } else {
            item.name = '\u7FA4' + item.to;
            item.avatar = item.avatar || _this.myGroupIcon;
          }
        }
        var lastMsg = item.lastMsg || {};
        if (lastMsg.type === 'text') {
          item.lastMsgShow = lastMsg.text || '';
        } else if (lastMsg.type === 'custom') {
          item.lastMsgShow = _utils2.default.parseCustomMsg(lastMsg);
        } else if (lastMsg.scene === 'team' && lastMsg.type === 'notification') {
          item.lastMsgShow = _utils2.default.generateTeamSysmMsg(lastMsg);
        } else if (_utils2.default.mapMsgType(lastMsg)) {
          item.lastMsgShow = '[' + _utils2.default.mapMsgType(lastMsg) + ']';
        } else {
          item.lastMsgShow = '';
        }
        if (item.updateTime) {
          item.updateTimeShow = _utils2.default.formatDate(item.updateTime, true);
        }
        return item;
      });
      return sessionlist;
    }
  },
  methods: {
    toVerifyList: function toVerifyList() {
      this.$router.push({ path: '/verifylist' });
    },
    addFriends: function addFriends() {
      this.$router.push({ path: '/searchuser/:searchType' });
    },
    createGrounp: function createGrounp() {
      this.$router.push({ path: '/creategroup' });
    },
    show2click: function show2click() {
      this.show2 = !this.show2;
    },
    setFocus: function setFocus() {
      this.$refs.search.setFocus();
    },
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
      console.log('on cancel');
    },
    enterSysMsgs: function enterSysMsgs() {
      if (this.hideDelBtn()) return;
      location.href = '#/sysmsgs';
    },
    enterChat: function enterChat(session) {
      if (this.hideDelBtn()) return;
      if (session && session.id) location.href = '#/chat/' + session.id;
    },
    enterMyChat: function enterMyChat() {
      location.href = '#/chat/p2p-' + this.myPhoneId;
    },
    deleteSession: function deleteSession() {
      if (this.delSessionId !== null) {
        this.$store.dispatch('deleteSession', this.delSessionId);
      }
    },
    showDelBtn: function showDelBtn(vNode) {
      var _this2 = this;

      if (vNode && vNode.data && vNode.data.attrs) {
        this.delSessionId = vNode.data.attrs.sessionId;
        this.stopBubble = true;
        setTimeout(function () {
          _this2.stopBubble = false;
        }, 20);
      }
    },
    hideDelBtn: function hideDelBtn() {
      if (this.delSessionId !== null && !this.stopBubble) {
        this.delSessionId = null;
        return true;
      }
      return false;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 629:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3e6f2f2c","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Session.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.p-session .vux-cell-primary {\n  max-width: 70%;\n}\n.g-window .m-main{\n  margin-top:0rem;\n}\n.vux-header{\n  background:#fff;\n  font-size:2.25rem;\n  font-weight:500;\n  color:rgba(51, 51, 51, 1);\n}\n.s_search{\n  height:2rem;\n  background:rgba(245, 245, 245, 1);\n  line-height:2rem;\n  font-size:1rem;\n  padding-bottom:1rem;\n}\n.vux-actionsheet-menu-default{\n  color:rgba(3, 155, 229, 1) !important;\n}\n/* .g-window .u-list-item .icon{\n  width:1.5rem;\n  height:1.5rem;\n} */\n/* .vux-search-box{\n   height:2.5rem;\n   margin:0.2rem auto;\n   line-height: 2.5rem;\n   border-radius:1rem;\n} */\n/* .weui-search-bar__label{\n  border-radius: 1rem !important;\n}  */\n", "", {"version":3,"sources":["D:/project/H5/src/pages/Session.vue"],"names":[],"mappings":";AAwPE;EACE,eAAe;CAChB;AAEH;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,0BAAuB;CACxB;AACD;EACE,YAAY;EACZ,kCAA+B;EAC/B,iBAAiB;EACjB,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,sCAAmC;CACpC;AACD;;;IAGI;AACJ;;;;;IAKI;AACJ;;KAEK","file":"Session.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.p-session {\n  .vux-cell-primary {\n    max-width: 70%;\n  }\n}\n.g-window .m-main{\n  margin-top:0rem;\n}\n.vux-header{\n  background:#fff;\n  font-size:2.25rem;\n  font-weight:500;\n  color:rgba(51,51,51,1);\n}\n.s_search{\n  height:2rem;\n  background:rgba(245,245,245,1);\n  line-height:2rem;\n  font-size:1rem;\n  padding-bottom:1rem;\n}\n.vux-actionsheet-menu-default{\n  color:rgba(3,155,229,1) !important;\n}\n/* .g-window .u-list-item .icon{\n  width:1.5rem;\n  height:1.5rem;\n} */\n/* .vux-search-box{\n   height:2.5rem;\n   margin:0.2rem auto;\n   line-height: 2.5rem;\n   border-radius:1rem;\n} */\n/* .weui-search-bar__label{\n  border-radius: 1rem !important;\n}  */\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 685:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-3e6f2f2c"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Session.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main p-session"
  }, [_c('x-header', {
    attrs: {
      "left-options": {
        showBack: false
      }
    }
  }, [_vm._v("消息"), _c('a', {
    attrs: {
      "slot": "right"
    },
    on: {
      "click": _vm.show2click
    },
    slot: "right"
  }, [_c('img', {
    attrs: {
      "src": "/webdemo/h5/res/images/group_add.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('action-sheet', {
    attrs: {
      "menus": _vm.menus1,
      "show-cancel": "",
      "close-on-clicking-mask": "",
      "close-on-clicking-menu": ""
    },
    on: {
      "on-click-menu-menu1": _vm.addFriends,
      "on-click-menu-menu2": _vm.createGrounp
    },
    model: {
      value: (_vm.show2),
      callback: function($$v) {
        _vm.show2 = $$v
      },
      expression: "show2"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "s_search",
    staticStyle: {
      "position": "relative"
    }
  }, [_c('search', {
    ref: "search",
    attrs: {
      "results": _vm.results,
      "position": "absolute",
      "auto-scroll-to-top": "",
      "top": "0px",
      "placeholder": "搜索好友/群"
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
    staticClass: "u-list"
  }, [_c('cell', {
    directives: [{
      name: "touch",
      rawName: "v-touch:swipeleft",
      value: (_vm.showDelBtn),
      expression: "showDelBtn",
      arg: "swipeleft"
    }, {
      name: "touch",
      rawName: "v-touch:swiperight",
      value: (_vm.hideDelBtn),
      expression: "hideDelBtn",
      arg: "swiperight"
    }],
    staticClass: "u-list-item",
    attrs: {
      "title": "消息提醒",
      "inline-desc": "用户李思思请求加好友"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toVerifyList()
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "30",
      "src": _vm.noticeIcon
    },
    slot: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "u-session-time"
  }, [_vm._v("\n        9：01\n      ")]), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isShow),
      expression: "isShow"
    }],
    staticClass: "u-unread"
  }, [_vm._v("5")])]), _vm._v(" "), _vm._l((_vm.sessionlist), function(session, index) {
    return _c('cell', {
      directives: [{
        name: "touch",
        rawName: "v-touch:swipeleft",
        value: (_vm.showDelBtn),
        expression: "showDelBtn",
        arg: "swipeleft"
      }, {
        name: "touch",
        rawName: "v-touch:swiperight",
        value: (_vm.hideDelBtn),
        expression: "hideDelBtn",
        arg: "swiperight"
      }],
      key: session.id,
      staticClass: "u-list-item",
      attrs: {
        "title": session.name,
        "inline-desc": session.lastMsgShow,
        "sessionId": session.id
      },
      nativeOn: {
        "click": function($event) {
          _vm.enterChat(session)
        }
      }
    }, [_c('img', {
      staticClass: "icon u-circle",
      attrs: {
        "slot": "icon",
        "width": "24",
        "src": session.avatar
      },
      slot: "icon"
    }), _vm._v(" "), _c('span', {
      staticClass: "u-session-time"
    }, [_vm._v("\n        " + _vm._s(session.updateTimeShow) + "\n      ")]), _vm._v(" "), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (session.unread > 0),
        expression: "session.unread > 0"
      }],
      staticClass: "u-unread"
    }, [_vm._v(_vm._s(session.unread))]), _vm._v(" "), _c('span', {
      staticClass: "u-tag-del",
      class: {
        active: _vm.delSessionId === session.id
      },
      on: {
        "click": _vm.deleteSession
      }
    })])
  })], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e6f2f2c", module.exports)
  }
}

/***/ }),

/***/ 740:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3e6f2f2c","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Session.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-3e6f2f2c","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue */ 629);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("206eae54", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3e6f2f2c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3e6f2f2c\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=43.js.map