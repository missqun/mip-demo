webpackJsonp([6],{

/***/ 473:
/* no static exports found */
/* all exports used */
/*!**********************************!*\
  !*** ./src/pages/TeamManage.vue ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-022c65fc","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./TeamManage.vue */ 714)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./TeamManage.vue */ 566),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-022c65fc"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./TeamManage.vue */ 658),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\TeamManage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamManage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-022c65fc", Component.options)
  } else {
    hotAPI.reload("data-v-022c65fc", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 522:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/components/TeamMember.vue ***!
  \*********************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! babel-runtime/core-js/object/assign */ 21);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: {
    teamId: {
      type: String
    },

    advanced: {
      type: Boolean,
      default: false
    },

    showAllMode: {
      type: Boolean,
      default: false
    },
    filterAccount: {
      type: Array
    }
  },
  data: function data() {
    return {
      removeMode: false,
      hasManagePermission: false,
      hasSearched: false
    };
  },
  mounted: function mounted() {
    var teamMembers = this.$store.state.teamMembers[this.teamId];
    if (teamMembers === undefined) {
      this.$store.dispatch('getTeamMembers', this.teamId);
    }
  },

  computed: {
    teamInfo: function teamInfo() {
      var _this = this;

      var teamList = this.$store.state.teamlist;
      var team = teamList && teamList.find(function (team) {
        return team.teamId === _this.teamId;
      });
      if (!team) {
        return undefined;
      }
      return team;
    },
    members: function members() {
      var _this2 = this;

      var members = this.$store.state.teamMembers[this.teamId];
      var userInfos = this.$store.state.userInfos;
      var needSearchAccounts = [];
      if (members) {
        members = members.map(function (item) {
          var member = (0, _assign2.default)({}, item);
          member.valid = true;
          if (member.account === _this2.$store.state.userUID) {
            member.alias = '我';
            member.avatar = _this2.$store.state.myInfo.avatar;
            _this2.isOwner = member.type === 'owner';
            _this2.hasManagePermission = member.type !== 'normal';
          } else if (userInfos[member.account] === undefined) {
            needSearchAccounts.push(member.account);
            member.avatar = member.avatar || _this2.avatar;
            member.alias = member.nickInTeam || member.account;
          } else {
            member.avatar = userInfos[member.account].avatar;
            member.alias = member.nickInTeam || userInfos[member.account].nick;
          }
          return member;
        });
        if (needSearchAccounts.length > 0 && !this.hasSearched) {
          this.hasSearched = true;
          while (needSearchAccounts.length > 0) {
            this.searchUsers(needSearchAccounts.splice(0, 150));
          }
        }
        return members;
      }
      return [];
    },
    membersInDisplay: function membersInDisplay() {
      var _this3 = this;

      if (this.filterAccount) {
        return this.members.filter(function (member) {
          return !!_this3.filterAccount.find(function (account) {
            return account === member.account;
          });
        });
      } else if (this.advanced || this.showAllMode) {
        return this.members;
      } else {
        return this.members.slice(0, this.hasInvitePermission ? 3 : 4);
      }
    },
    hasInvitePermission: function hasInvitePermission() {
      return this.advanced && (this.hasManagePermission || this.teamInfo && this.teamInfo.inviteMode === "all");
    }
  },
  methods: {
    searchUsers: function searchUsers(Accounts) {
      var _this4 = this;

      this.$store.dispatch('searchUsers', {
        accounts: Accounts,
        done: function done(users) {
          _this4.updateTeamMember(users);
        }
      });
    },
    updateTeamMember: function updateTeamMember(users) {
      var _this5 = this;

      users.forEach(function (user) {
        var member = _this5.members.find(function (member) {
          return member.account === user.account;
        });
        if (member) {
          member.avatar = user.avatar;
          member.alias = member.nickInTeam || user.nick;
        }
      });
    },
    triggerRemove: function triggerRemove(e, show) {
      this.removeMode = !this.removeMode;
    },
    remove: function remove(e, member) {
      var _this6 = this;

      this.$store.dispatch('showLoading');
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'removeTeamMembers',
        options: {
          teamId: this.teamId,
          accounts: [member.account],
          done: function done(error, obj) {
            _this6.$toast('移除成功');
            _this6.$store.dispatch('hideLoading');
          }
        }
      });
      e.cancelBubble = true;
      e.preventDefault();
    },
    onMemberClick: function onMemberClick(member) {
      location.href = this.advanced ? '#/teammembercard/' + member.id : '#/namecard/' + member.account;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 523:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-1330a974","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/TeamMember.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.m-members[data-v-1330a974] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin:0 auto;\n  text-align: center;\n  width: 100%;\n  background:#fff;\n}\n.m-members img.avatar[data-v-1330a974]{\n  width: 3.8rem;\n  height: 3.8rem;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 1 auto;\n     -moz-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n}\n.m-members .u-member[data-v-1330a974] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n     -moz-box-orient: vertical;\n     -moz-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n     -moz-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 25%;\n  margin: .5rem 0;\n}\n.m-members .u-member .remove[data-v-1330a974], .m-members .u-member .manager[data-v-1330a974], .m-members .u-member .owner[data-v-1330a974]{\n  display: inline-block;\n  position: absolute;\n  bottom: 1.1rem;\n  right: 0;\n  width: 2rem;\n  height: 2rem;\n  background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n  background-position: -10.3rem 0;\n  background-size: 20rem\n}\n.m-members .u-member .owner[data-v-1330a974] {\n  background-position: -10.3rem -2.7rem;\n}\n.m-members .u-member .remove[data-v-1330a974] {\n  top: 0;\n  bottom: auto;\n  right: 0;\n  width: 2.4rem;\n  height: 2.4rem;\n  background-position: -10.1rem -5.1rem;\n}\n.m-members .u-member span[data-v-1330a974] {\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.m-members.s-bg-white[data-v-1330a974] {\n  background-color: white;\n}\n\n", "", {"version":3,"sources":["D:/project/H5/src/pages/components/TeamMember.vue"],"names":[],"mappings":";AAwKA;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,wBAAgB;MAAhB,oBAAgB;UAAhB,gBAAgB;EAChB,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;CAkDjB;AAjDC;EACE,cAAc;EACd,eAAe;EACf,oBAAe;EAAf,uBAAe;KAAf,iBAAe;MAAf,mBAAe;UAAf,eAAe;CAChB;AAED;EACE,qBAAc;EAAd,sBAAc;EAAd,kBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,mBAAmB;EACnB,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;KAAvB,0BAAuB;KAAvB,2BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB;EACvB,0BAAoB;EAApB,4BAAoB;KAApB,uBAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,WAAW;EACX,gBAAgB;CAgCjB;AA9BC;EACE,sBAAsB;EACtB,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,YAAY;EACZ,aAAa;EACb,sEAAsE;EACtE,gCAAgC;EAChC,sBAAsB;CACvB;AACD;EACE,sCAAsC;CACvC;AAED;EACE,OAAO;EACP,aAAa;EACb,SAAS;EACT,cAAc;EACd,eAAe;EACf,sCAAsC;CACvC;AAED;EACE,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CACrB;AAGH;EACE,wBAAwB;CACzB","file":"TeamMember.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.m-members {\n  display: flex;\n  flex-wrap: wrap;\n  margin:0 auto;\n  text-align: center;\n  width: 100%;\n  background:#fff;\n  img.avatar{\n    width: 3.8rem;\n    height: 3.8rem;\n    flex: 0 1 auto;\n  }\n\n  .u-member {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    width: 25%;\n    margin: .5rem 0;\n\n    .remove, .manager, .owner{\n      display: inline-block;\n      position: absolute;\n      bottom: 1.1rem;\n      right: 0;\n      width: 2rem;\n      height: 2rem;\n      background: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);\n      background-position: -10.3rem 0;\n      background-size: 20rem\n    }\n    .owner {\n      background-position: -10.3rem -2.7rem;\n    }\n\n    .remove {\n      top: 0;\n      bottom: auto;\n      right: 0;\n      width: 2.4rem;\n      height: 2.4rem;\n      background-position: -10.1rem -5.1rem;\n    }\n\n    span {\n      max-width: 100%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n  }\n\n  &.s-bg-white{\n    background-color: white;\n  }\n}\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 526:
/* no static exports found */
/* all exports used */
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-1330a974"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/components/TeamMember.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "m-members",
    class: {
      "s-bg-white": _vm.advanced && !_vm.showAllMode
    }
  }, [(_vm.hasInvitePermission && !_vm.showAllMode) ? _c('a', {
    staticClass: "u-member",
    attrs: {
      "href": "#/teaminvite/" + _vm.teamId
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "http://yx-web.nos.netease.com/webdoc/h5/im/team_member_add.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("添加")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.membersInDisplay), function(member) {
    return _c('a', {
      key: member.account,
      staticClass: "u-member",
      on: {
        "click": function($event) {
          _vm.onMemberClick(member)
        }
      }
    }, [_c('img', {
      staticClass: "avatar u-circle",
      attrs: {
        "width": "20",
        "src": member.avatar
      }
    }), _vm._v(" "), (_vm.removeMode && member.type != "owner" && member.account != _vm.$store.state.userUID) ? _c('span', {
      staticClass: "remove",
      on: {
        "click": function($event) {
          _vm.remove($event, member)
        }
      }
    }) : _vm._e(), _vm._v(" "), (member.type !== "normal") ? _c('span', {
      class: member.type === "manager" ? "manager" : "owner"
    }) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(member.alias))])])
  }), _vm._v(" "), (!_vm.advanced) ? [_c('a', {
    staticClass: "u-member",
    attrs: {
      "href": "#/teaminvite/" + _vm.teamId
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "http://yx-web.nos.netease.com/webdoc/h5/im/team_member_add.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("添加")])]), _vm._v(" "), (_vm.hasManagePermission) ? _c('div', {
    staticClass: "u-member",
    on: {
      "click": function($event) {
        _vm.triggerRemove()
      }
    }
  }, [_c('img', {
    staticClass: "avatar",
    attrs: {
      "src": "http://yx-web.nos.netease.com/webdoc/h5/im/team_member_delete.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("移除")])]) : _vm._e()] : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1330a974", module.exports)
  }
}

/***/ }),

/***/ 529:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-1330a974","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/components/TeamMember.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-1330a974","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamMember.vue */ 523);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("566f1d2e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1330a974\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamMember.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1330a974\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamMember.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 534:
/* no static exports found */
/* all exports used */
/*!*********************************************!*\
  !*** ./src/pages/components/TeamMember.vue ***!
  \*********************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-1330a974","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./TeamMember.vue */ 529)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./TeamMember.vue */ 522),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-1330a974"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./TeamMember.vue */ 526),
  /* scopeId */
  "data-v-1330a974",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\components\\TeamMember.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] TeamMember.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1330a974", Component.options)
  } else {
    hotAPI.reload("data-v-1330a974", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 566:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/TeamManage.vue ***!
  \**********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _configs = __webpack_require__(/*! ../configs */ 9);

var _configs2 = _interopRequireDefault(_configs);

var _utils = __webpack_require__(/*! ../utils */ 29);

var _utils2 = _interopRequireDefault(_utils);

var _TeamMember = __webpack_require__(/*! ./components/TeamMember.vue */ 534);

var _TeamMember2 = _interopRequireDefault(_TeamMember);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      notice1: false,
      show1: false,
      showMenu: false,
      ownMenu: {
        menu1: "解散群组",
        menu2: "转让群组"
      },
      comMenu: {
        menu3: "退出群组"
      },
      avatar: _configs2.default.defaultUserIcon,
      isOwner: false,
      hasSearched: false
    };
  },

  computed: {
    showAction1: function showAction1() {
      this.show1 = true;
    },
    teamId: function teamId() {
      return this.$route.params.teamId;
    },
    teamInfo: function teamInfo() {
      var _this = this;

      var teamList = this.$store.state.teamlist;
      var team = teamList && teamList.find(function (team) {
        return team.teamId === _this.teamId;
      });
      if (!team) {
        return undefined;
      }
      return team;
    },
    teamMembers: function teamMembers() {
      return this.$store.state.teamMembers[this.teamId];
    },
    teamMemberNum: function teamMemberNum() {
      return this.teamMembers && this.teamMembers.length;
    },
    teamAvatar: function teamAvatar() {
      return this.teamInfo.avatar || this.avatar;
    },
    teamName: function teamName() {
      return this.teamInfo && this.teamInfo.name || '未设置';
    },
    nickName: function nickName() {
      var _this2 = this;

      if (!this.teamMembers) return '未设置';
      var selfInfo = this.teamMembers.find(function (item) {
        return item.account === _this2.$store.state.userUID;
      });
      return selfInfo && selfInfo.nickInTeam || '未设置';
    },
    hasManagePermission: function hasManagePermission() {
      var _this3 = this;

      if (!this.teamMembers) return false;
      var self = this.teamMembers.find(function (member) {
        return member.account === _this3.$store.state.userUID;
      });
      this.isOwner = self.type === 'owner';
      return self.type !== 'normal';
    },
    hasEditPermission: function hasEditPermission() {
      return this.teamInfo.type === 'normal' || this.teamInfo.updateTeamMode === 'all' || this.hasManagePermission;
    }
  },
  methods: {
    onTeamAvatarClick: function onTeamAvatarClick() {
      if (this.hasEditPermission) {
        this.$refs.input.click();
      }
    },
    onFileSelected: function onFileSelected(event) {
      var _this4 = this;

      this.$store.dispatch('showLoading');
      var fileInput = event.target;
      if (fileInput.files.length === 0) {
        return;
      }
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'previewFile',
        options: {
          fileInput: fileInput,
          done: function done(err, data) {
            _this4.$store.dispatch('hideLoading');
            if (err) {
              _this4.$toast(err);
            } else {
              if (data.w < 300 || data.h < 300) {
                _this4.$toast("图片长宽不能小于300");
                return;
              }
              _this4.updateTeamAvatar(data.url);
            }
          }
        }
      });
    },
    updateTeamAvatar: function updateTeamAvatar(url) {
      var _this5 = this;

      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'updateTeam',
        options: {
          teamId: this.teamId,
          avatar: url,
          done: function done(err, data) {
            _this5.$toast(err ? err : '修改群头像成功');
          }
        }
      });
    },
    dismissTeam: function dismissTeam() {
      var that = this;
      this.$vux.confirm.show({
        title: '确定要解散群？',
        onConfirm: function onConfirm() {
          that.$store.dispatch('showLoading');
          that.$store.dispatch('delegateTeamFunction', {
            functionName: 'dismissTeam',
            options: {
              teamId: that.teamId,
              done: function done(error, obj) {
                that.$store.dispatch('hideLoading');
                that.$toast(error ? error : '已解散群');
                window.history.go(-1);
              }
            }
          });
        }
      });
    },
    leaveTeam: function leaveTeam() {
      var that = this;
      this.$vux.confirm.show({
        title: '确定要退出群？',
        onConfirm: function onConfirm() {
          that.$store.dispatch('showLoading');
          that.$store.dispatch('delegateTeamFunction', {
            functionName: 'leaveTeam',
            options: {
              teamId: that.teamId,
              done: function done(error, obj) {
                that.$store.dispatch('hideLoading');
                that.$toast(error ? error : '已退出群');
                window.history.go(-2);
              }
            }
          });
        }
      });
    },
    onEditItemClick: function onEditItemClick(title, inputType, updateKey, updateInfoInTeam) {
      this.$store.dispatch('enterSettingPage', {
        title: title,
        inputType: inputType,
        updateKey: updateKey,
        teamId: this.teamId,
        defaultValue: this.teamInfo[updateKey],
        updateInfoInTeam: updateInfoInTeam,
        enable: updateInfoInTeam ? true : this.hasEditPermission
      });
    },
    getTeamInfo: function getTeamInfo(key) {
      return _utils2.default.teamConfigMap[key][this.teamInfo[key]];
    },

    formateDate: function formateDate(timeMill) {
      var date = new Date(timeMill);
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
  },
  components: {
    TeamMember: _TeamMember2.default
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 603:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-022c65fc","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamManage.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.vux-actionsheet-menu-default{\n    color:#039BE5;\n}\n.t_member{\n     height:8.38rem;\n     overflow: hidden;\n}\n.g-window .weui-switch:checked, .g-window .weui-switch-cp__input:checked ~ .weui-switch-cp__box{\n   border-color: #04BE02;\n  background-color: #04BE02;\n}\n.g-window .auto_cell .weui-cell{\n          height:2.2rem;\n}\n.teaminfo_box{\n  background:#fff;\n}\n.my_group_card{\n   margin-top:0.7rem;\n   background:#fff;\n}\n.group_manager{\n   background:#fff;\n}\np.dark_text{\n      font-size:1rem;\n      color:#555;\n}\n.g-window .m-article.p-teammanager {\n  display:-webkit-box;\n  display:-webkit-flex;\n  display:-moz-box;\n  display:-ms-flexbox;\n  display:flex;\n  background-color: #e6ebf0;\n}\n.g-window .m-article.p-teammanager .m-body {\n    margin-top:3.6rem;\n    overflow-y: scroll;\n    width: 100%;\n}\n.g-window .m-article.p-teammanager img.avatar{\n    width: 3.0rem;\n    height: 3.0rem;\n    -webkit-box-flex: 0;\n    -webkit-flex: 0 1 auto;\n       -moz-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n}\n.g-window .m-article.p-teammanager .m-group {\n    background-color: white;\n}\n.g-window .m-article.p-teammanager .m-group .weui-cells:after {\n    border-bottom-style: none;\n}\n.g-window .m-article.p-teammanager .m-group .weui-cell:before {\n    border: none;\n}\n.g-window .m-article.p-teammanager .m-group .weui-cell:after {\n    content: \" \";\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height: 1px;\n    border-bottom: 1px solid #D9D9D9;\n    color: #D9D9D9;\n    -webkit-transform-origin: 0 100%;\n       -moz-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n    -webkit-transform: scaleY(0.5);\n       -moz-transform: scaleY(0.5);\n            transform: scaleY(0.5);\n    left: 15px;\n    right: 15px;\n}\n.g-window .m-article.p-teammanager .m-group .weui-btn {\n    margin: 1rem 5%;\n}\n.g-window .m-article.p-teammanager .m-group .weui-cell__ft{\n    max-width: 70%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color:#aaa;\n}\n.g-window .m-article.p-teammanager .m-group + .m-group{\n    margin-top:1rem;\n}\n.g-window .m-article.p-teammanager .m-teaminfo {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n       -moz-box-orient: horizontal;\n       -moz-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n       -moz-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background: #fff;\n}\n.g-window .m-article.p-teammanager .m-teaminfo .u-info{\n    margin-left: 1rem;\n}\n.g-window .m-article.p-teammanager .m-teaminfo .u-info span{\n    color: #999;\n    font-size: 0.9rem;\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/TeamManage.vue"],"names":[],"mappings":";AAgQE;IACE,cAAc;CACf;AACD;KACG,eAAe;KACf,iBAAiB;CACnB;AACF;GACE,sBAAsB;EACvB,0BAA0B;CAC1B;AACD;UACS,cAAc;CACtB;AACD;EACC,gBAAgB;CACjB;AACA;GACE,kBAAkB;GAClB,gBAAgB;CACjB;AACD;GACE,gBAAgB;CACjB;AACD;MACK,eAAe;MACf,WAAW;CAChB;AACD;EACE,oBAAa;EAAb,qBAAa;EAAb,iBAAa;EAAb,oBAAa;EAAb,aAAa;EACb,0BAA0B;CAgE3B;AA9DC;IACE,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;CACb;AAED;IACE,cAAc;IACd,eAAe;IACf,oBAAe;IAAf,uBAAe;OAAf,iBAAe;QAAf,mBAAe;YAAf,eAAe;CAChB;AAED;IACE,wBAAwB;CAmCzB;AA9BC;IACE,0BAA0B;CAC3B;AACD;IACE,aAAa;CACd;AACD;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,UAAU;IACV,SAAS;IACT,YAAY;IACZ,iCAAiC;IACjC,eAAe;IACf,iCAAyB;OAAzB,8BAAyB;YAAzB,yBAAyB;IACzB,+BAAuB;OAAvB,4BAAuB;YAAvB,uBAAuB;IACvB,WAAW;IACX,YAAY;CACb;AACD;IACE,gBAAgB;CACjB;AACD;IACE,eAAe;IACf,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,WAAW;CACZ;AAjCD;IACE,gBAAiB;CAClB;AAiCH;IACE,qBAAc;IAAd,sBAAc;IAAd,kBAAc;IAAd,qBAAc;IAAd,cAAc;IACd,+BAAoB;IAApB,8BAAoB;IAApB,4BAAoB;OAApB,4BAAoB;OAApB,2BAAoB;QAApB,wBAAoB;YAApB,oBAAoB;IACpB,0BAAoB;IAApB,4BAAoB;OAApB,uBAAoB;QAApB,uBAAoB;YAApB,oBAAoB;IACpB,iBAAiB;CAQlB;AAPC;IACE,kBAAkB;CAKnB;AAJC;IACE,YAAY;IACZ,kBAAkB;CACnB","file":"TeamManage.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  .vux-actionsheet-menu-default{\n    color:#039BE5;\n  }\n  .t_member{\n     height:8.38rem;\n     overflow: hidden;\n  }\n .g-window .weui-switch:checked, .g-window .weui-switch-cp__input:checked ~ .weui-switch-cp__box{\n   border-color: #04BE02;\n  background-color: #04BE02;\n }\n .g-window .auto_cell .weui-cell{\n          height:2.2rem;\n }\n .teaminfo_box{\n  background:#fff;\n}\n .my_group_card{\n   margin-top:0.7rem;\n   background:#fff;\n }\n .group_manager{\n   background:#fff;\n }\n p.dark_text{\n      font-size:1rem;\n      color:#555;\n}\n.g-window .m-article.p-teammanager {\n  display:flex;\n  background-color: #e6ebf0;\n  \n  .m-body {\n    margin-top:3.6rem;\n    overflow-y: scroll;\n    width: 100%;\n  }\n\n  img.avatar{\n    width: 3.0rem;\n    height: 3.0rem;\n    flex: 0 1 auto;\n  }\n\n  .m-group {\n    background-color: white;\n    & + .m-group {\n      margin-top: 1rem;\n    }\n   \n    .weui-cells:after {\n      border-bottom-style: none;\n    }\n    .weui-cell:before {\n      border: none;\n    }\n    .weui-cell:after {\n      content: \" \";\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      height: 1px;\n      border-bottom: 1px solid #D9D9D9;\n      color: #D9D9D9;\n      transform-origin: 0 100%;\n      transform: scaleY(0.5);\n      left: 15px;\n      right: 15px;\n    }\n    .weui-btn {\n      margin: 1rem 5%;\n    }\n    .weui-cell__ft{\n      max-width: 70%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      color:#aaa;\n    }\n  }\n  .m-teaminfo {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background: #fff;\n    .u-info{\n      margin-left: 1rem;\n      span{\n        color: #999;\n        font-size: 0.9rem;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 658:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-022c65fc"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/TeamManage.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-teammanager"
  }, [_c('action-sheet', {
    attrs: {
      "menus": _vm.ownMenu,
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
      value: (_vm.showMenu),
      callback: function($$v) {
        _vm.showMenu = $$v
      },
      expression: "showMenu"
    }
  }), _vm._v(" "), _c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      },
      "right-options": {
        showMore: true
      }
    },
    on: {
      "on-click-more": function($event) {
        _vm.showMenu = true
      }
    }
  }, [_c('h1', {
    staticClass: "m-tab-top"
  }, [_vm._v("上上计划群聊")]), _vm._v(" "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('div', {
    staticClass: "m-body"
  }, [(_vm.teamInfo && _vm.teamInfo.type === 'normal') ? [_c('team-member', {
    attrs: {
      "teamId": _vm.teamId
    }
  }), _vm._v(" "), _c('group', {
    staticClass: "m-group"
  }, [_c('cell', {
    attrs: {
      "title": "讨论组名称",
      "value": _vm.teamName,
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.onEditItemClick('修改讨论组名称', 'text', 'name'); })($event)
      }
    }
  }), _vm._v(" "), _c('x-button', {
    attrs: {
      "mini": "",
      "type": "warn"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.leaveTeam($event)
      }
    }
  }, [_vm._v("退出讨论组")])], 1)] : _vm._e(), _vm._v(" "), (_vm.teamInfo && _vm.teamInfo.type === 'advanced') ? [_c('cell', {
    staticClass: "teaminfo_box",
    attrs: {
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return _vm.onTeamAvatarClick($event)
      }
    }
  }, [_c('div', {
    staticClass: "m-teaminfo",
    attrs: {
      "slot": "icon"
    },
    slot: "icon"
  }, [_c('img', {
    staticClass: "avatar u-circle",
    attrs: {
      "src": _vm.teamAvatar
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "u-info"
  }, [_c('p', [_vm._v(_vm._s(_vm.teamInfo.name))]), _vm._v(" "), _c('p', {
    staticClass: "dark_text"
  }, [_vm._v(_vm._s(_vm.teamInfo.teamId))]), _vm._v(" "), _c('p', {
    staticClass: "dark_text"
  }, [_vm._v("于2018-12-17创建")])])]), _vm._v(" "), _c('form', [_c('input', {
    ref: "input",
    staticStyle: {
      "display": "none"
    },
    attrs: {
      "type": "file",
      "accept": "image/*"
    },
    on: {
      "change": _vm.onFileSelected
    }
  })])]), _vm._v(" "), _c('group', {
    staticClass: "my_group_card auto_cell"
  }, [_c('cell', {
    attrs: {
      "title": "我的群名片",
      "is-link": "",
      "link": "/teammembercard/1526847681-zxcvbnm321"
    }
  }, [_c('p', {
    staticClass: "dark_text"
  }, [_vm._v("点击设置")])])], 1), _vm._v(" "), _c('group', {
    staticClass: "m-group auto_cell t_member"
  }, [_c('cell', {
    attrs: {
      "title": "群成员",
      "value": ("共" + _vm.teamMemberNum + "人"),
      "is-link": "",
      "link": ("/teammembers/" + _vm.teamId)
    }
  }), _vm._v(" "), _c('team-member', {
    attrs: {
      "teamId": _vm.teamId,
      "advanced": true
    }
  })], 1), _vm._v(" "), _c('group', {
    staticClass: "m-group auto_cell"
  }, [_c('cell', {
    attrs: {
      "title": "群名称",
      "value": _vm.teamName
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.onEditItemClick(_vm.hasEditPermission ? '修改群名称' : '群名称', 'text', 'name'); })($event)
      }
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "群介绍",
      "value": _vm.teamInfo.intro || '暂无',
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.onEditItemClick(_vm.hasEditPermission ? '修改群介绍' : '群介绍', 'textarea', 'intro'); })($event)
      }
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "群公告",
      "value": _vm.teamInfo.intro || '暂无',
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.onEditItemClick(_vm.hasEditPermission ? '修改群介绍' : '群介绍', 'textarea', 'intro'); })($event)
      }
    }
  }), _vm._v(" "), _c('x-switch', {
    attrs: {
      "title": "消息提醒"
    },
    model: {
      value: (_vm.notice1),
      callback: function($$v) {
        _vm.notice1 = $$v
      },
      expression: "notice1"
    }
  })], 1), _vm._v(" "), (_vm.hasManagePermission) ? _c('group', {
    staticClass: "m-group auto_cell"
  }, [_c('cell', {
    attrs: {
      "title": "身份验证",
      "value": _vm.getTeamInfo('joinMode'),
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.onEditItemClick('身份验证', 'select', 'joinMode'); })($event)
      }
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('group', {
    staticClass: "m-group auto_cell"
  }, [(_vm.hasManagePermission) ? [_c('cell', {
    attrs: {
      "title": "邀请他人权限",
      "value": _vm.getTeamInfo('inviteMode'),
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.onEditItemClick('邀请他人权限', 'select', 'inviteMode'); })($event)
      }
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "群资料修改权限",
      "value": _vm.getTeamInfo('updateTeamMode'),
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.onEditItemClick('群资料修改权限', 'select', 'updateTeamMode'); })($event)
      }
    }
  }), _vm._v(" "), _c('cell', {
    attrs: {
      "title": "被邀请人身份验证",
      "value": _vm.getTeamInfo('beInviteMode'),
      "is-link": ""
    },
    nativeOn: {
      "click": function($event) {
        return (function () { return _vm.onEditItemClick('被邀请人身份验证', 'select', 'beInviteMode'); })($event)
      }
    }
  })] : _vm._e()], 2), _vm._v(" "), _c('group', {
    staticClass: "group_manager"
  }, [_c('cell', {
    attrs: {
      "title": "群管理",
      "is-link": "",
      "link": "/teamownmanage"
    }
  })], 1)] : _vm._e()], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-022c65fc", module.exports)
  }
}

/***/ }),

/***/ 714:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-022c65fc","scoped":false,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/TeamManage.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-022c65fc","scoped":false,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./TeamManage.vue */ 603);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("29c71480", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-022c65fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamManage.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-022c65fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TeamManage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=6.js.map