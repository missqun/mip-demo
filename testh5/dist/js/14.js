webpackJsonp([14],{

/***/ 349:
/* no static exports found */
/* all exports used */
/*!*******************************!*\
  !*** ./src/pages/Session.vue ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-3e6f2f2c","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./Session.vue */ 512)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Session.vue */ 441),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-3e6f2f2c"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Session.vue */ 488),
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

/***/ 441:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Session.vue ***!
  \*******************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _utils = __webpack_require__(/*! ../utils */ 18);

var _utils2 = _interopRequireDefault(_utils);

var _configs = __webpack_require__(/*! ../configs */ 6);

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      text: '搜索好友/群',
      delSessionId: null,
      stopBubble: false,
      noticeIcon: _configs2.default.noticeIcon,
      myPhoneIcon: _configs2.default.myPhoneIcon,
      myGroupIcon: _configs2.default.defaultGroupIcon,
      myAdvancedIcon: _configs2.default.defaultAdvancedIcon,
      user: _configs2.default.defaultUserIcon
    };
  },

  created: function created() {
    cookie.setCookie('uid', 3085026);
    cookie.setCookie('sdktoken', '859576f942cfd4115711476136f82576');
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

/***/ 465:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3e6f2f2c","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Session.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 3)(true);
// imports


// module
exports.push([module.i, "\n.p-session .vux-cell-primary {\n    max-width: 70%;\n}\n.vux-header{\n    background: #fff;\n}\n.add{\n    position: relative;\n    top:-7px;\n}\n.search{\n    height:35px;\n}\n.g-window .u-list{\n    margin-top:1rem;\n}\n.time{\n  height:2.625rem;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  width:4rem;\n   -webkit-box-orient:vertical;\n   -webkit-box-direction:normal;\n   -webkit-flex-direction:column;\n      -moz-box-orient:vertical;\n      -moz-box-direction:normal;\n       -ms-flex-direction:column;\n           flex-direction:column;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n     -moz-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; \n  margin-left:1.5rem;\n}\n.time>span{\n  text-align: center;\n  width:2rem;\n  margin:0 auto;\n  display: inline-block;\n}\n.time>span.num{\n  width:1.2rem;\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/Session.vue"],"names":[],"mappings":";AAoMI;IACE,eAAe;CAChB;AAEH;IACE,iBAAiB;CAClB;AACD;IACE,mBAAmB;IACnB,SAAS;CACV;AACD;IACE,YAAY;CACb;AACD;IACE,gBAAgB;CACjB;AACH;EACE,gBAAgB;EAChB,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,WAAW;GACV,4BAAsB;GAAtB,6BAAsB;GAAtB,8BAAsB;MAAtB,yBAAsB;MAAtB,0BAAsB;OAAtB,0BAAsB;WAAtB,sBAAsB;EACvB,0BAA+B;EAA/B,uCAA+B;KAA/B,uBAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,cAAc;EACd,sBAAsB;CACvB;AACD;EACE,aAAa;CACd","file":"Session.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  .p-session {\n    .vux-cell-primary {\n      max-width: 70%;\n    }\n  }\n  .vux-header{\n    background: #fff;\n  }\n  .add{\n    position: relative;\n    top:-7px;\n  }\n  .search{\n    height:35px;\n  }\n  .g-window .u-list{\n    margin-top:1rem;\n  }\n.time{\n  height:2.625rem;\n  display: flex;\n  width:4rem;\n   flex-direction:column;\n  justify-content: space-between; \n  margin-left:1.5rem; \n}\n.time>span{\n  text-align: center;\n  width:2rem;\n  margin:0 auto;\n  display: inline-block;\n}\n.time>span.num{\n  width:1.2rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 488:
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
      },
      "title": "消息"
    }
  }, [_c('a', {
    staticClass: "add",
    attrs: {
      "slot": "right"
    },
    slot: "right"
  }, [_c('svg', {
    staticClass: "vux-x-icon vux-x-icon-ios-plus-empty",
    attrs: {
      "type": "ios-plus-empty",
      "size": "30",
      "xmlns": "http://www.w3.org/2000/svg",
      "width": "30",
      "height": "30",
      "viewBox": "0 0 512 512"
    }
  }, [_c('path', {
    attrs: {
      "d": "M384 265H264v119h-17V265H128v-17h119V128h17v120h120v17z"
    }
  })])])]), _vm._v(" "), _c('group', {
    staticClass: "search"
  }, [_c('search', {
    ref: "search",
    staticClass: "search_box"
  })], 1), _vm._v(" "), _c('group', {
    staticClass: "u-list"
  }, [_c('cell', {
    staticClass: "u-list-item",
    attrs: {
      "title": "消息中心"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.enterSysMsgs($event)
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "24",
      "src": _vm.noticeIcon
    },
    slot: "icon"
  }), _vm._v(" "), _c('span', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.sysMsgUnread > 0),
      expression: "sysMsgUnread > 0"
    }],
    staticClass: "u-unread"
  }, [_vm._v(_vm._s(_vm.sysMsgUnread))])]), _vm._v(" "), _c('cell', {
    staticClass: "u-list-item",
    attrs: {
      "title": "我的手机"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.enterMyChat($event)
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "24",
      "src": _vm.myPhoneIcon
    },
    slot: "icon"
  })]), _vm._v(" "), _c('cell', {
    staticClass: "u-list-item",
    attrs: {
      "title": "你大爷"
    },
    nativeOn: {
      "click": function($event) {
        _vm.enterChat(_vm.session)
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "24",
      "src": _vm.user,
      "alt": ""
    },
    slot: "icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_c('span', [_vm._v("10:01")]), _vm._v(" "), _c('badge', {
    staticClass: "num",
    attrs: {
      "text": "58"
    }
  })], 1)]), _vm._v(" "), _c('cell', {
    staticClass: "u-list-item",
    attrs: {
      "title": "你二爷",
      "inline-desc": "你在么？"
    },
    nativeOn: {
      "click": function($event) {
        _vm.enterChat(_vm.session)
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "24",
      "src": _vm.user,
      "alt": ""
    },
    slot: "icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_c('span', [_vm._v("6-11")]), _vm._v(" "), _c('badge', {
    staticClass: "num",
    attrs: {
      "text": "5"
    }
  })], 1)]), _vm._v(" "), _c('cell', {
    staticClass: "u-list-item",
    attrs: {
      "title": "你三爷"
    },
    nativeOn: {
      "click": function($event) {
        _vm.enterChat(_vm.session)
      }
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "24",
      "src": _vm.user,
      "alt": ""
    },
    slot: "icon"
  }), _vm._v(" "), _c('div', {
    staticClass: "time"
  }, [_c('span', [_vm._v("昨天")]), _vm._v(" "), _c('badge', {
    staticClass: "num",
    attrs: {
      "text": "58"
    }
  })], 1)]), _vm._v(" "), _vm._l((_vm.sessionlist), function(session, index) {
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
        "width": "24"
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
  })], 2), _vm._v(" "), _c('actionsheet', {
    attrs: {
      "menus": _vm.menus2,
      "show-cancel": ""
    },
    on: {
      "on-click-menu": _vm.click
    },
    model: {
      value: (_vm.show2),
      callback: function($$v) {
        _vm.show2 = $$v
      },
      expression: "show2"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3e6f2f2c", module.exports)
  }
}

/***/ }),

/***/ 512:
/* no static exports found */
/* all exports used */
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3e6f2f2c","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/Session.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-3e6f2f2c","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./Session.vue */ 465);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 4)("206eae54", content, false);
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
//# sourceMappingURL=14.js.map