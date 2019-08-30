webpackJsonp([44],{

/***/ 467:
/* no static exports found */
/* all exports used */
/*!**********************************!*\
  !*** ./src/pages/SearchUser.vue ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-b515b626","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./SearchUser.vue */ 759)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./SearchUser.vue */ 560),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-b515b626"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./SearchUser.vue */ 705),
  /* scopeId */
  "data-v-b515b626",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\SearchUser.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] SearchUser.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b515b626", Component.options)
  } else {
    hotAPI.reload("data-v-b515b626", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 560:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/SearchUser.vue ***!
  \**********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _configs = __webpack_require__(/*! ../configs */ 9);

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.searchType = parseInt(_this.$route.params.searchType);
      _this.$store.dispatch('resetSearchResult');
    });

    setTimeout(function () {
      _this.$refs.searchInput.$refs.input.focus();
    }, 500);
  },
  data: function data() {
    return {
      searchType: 0,
      searchText: '',
      searchList: [],
      errMsg: '',

      firstEntry: true
    };
  },

  watch: {
    searchResult: function searchResult(val, oldVal) {
      if (val.length === 0 && !this.firstEntry) {
        this.errMsg = '无记录';
      } else {
        this.errMsg = '';
      }
      this.searchList = val;
    },
    searchType: function searchType() {
      this.$refs.searchInput.$refs.input.focus();
    }
  },
  computed: {
    searchResult: function searchResult() {
      var result = [];
      if (this.searchType === 1) {
        result = this.$store.state.searchedTeams.map(function (item) {
          item.avatar = item.avatar || _configs2.default.defaultUserIcon;
          item.link = '/teamcard/' + item.teamId;
          return item;
        });
      } else if (this.searchType === 0) {
        result = this.$store.state.searchedUsers.map(function (item) {
          item.nick = item.nick || item.account;
          item.link = '/namecard/' + item.account;
          item.avatar = item.avatar || _configs2.default.defaultUserIcon;
          return item;
        });
      }
      return result;
    }
  },
  methods: {
    toAddInfo: function toAddInfo() {
      this.$router.push({ path: '/addinfo' });
    },
    toVerrigy: function toVerrigy() {
      this.$router.push({ path: '/userverify' });
    },
    searchUser: function searchUser() {
      if (!this.searchText) {
        this.$toast('未输入内容');
        return;
      }
      this.firstEntry = false;
      if (this.searchType === 1) {
        if (!/^(\d){4,9}$/.test(this.searchText)) {
          this.$toast('输入的群号非法');
          return;
        }
        this.$store.dispatch('searchTeam', {
          teamId: this.searchText
        });
      } else if (this.searchType === 0) {
        if (this.searchText === this.$store.state.userUID) {
          this.searchList = [];
          this.errMsg = '别看了，就是你自己！';
        } else {
          this.$store.dispatch('searchUsers', {
            accounts: [this.searchText]
          });
        }
      }
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 648:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-b515b626","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SearchUser.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.g-window .m-article[data-v-b515b626]{\n    margin-top:0rem;\n    /* background:#fff; */\n}\n.g-window .u-card .weui-cells[data-v-b515b626]{\n   margin-top:1.3rem;\n}\n.g-window .m-tab[data-v-b515b626]{\n  background:#fff;\n  color:#333;\n}\n.g-window .u-search[data-v-b515b626]{\n  margin-top:5rem;\n  margin-bottom:0;\n}\n.g-window .m-tab .vux-header-left .left-arrow[data-v-b515b626]::before{\n  border-color:#333 !important;\n}\nbutton.weui-btn_mini[data-v-b515b626]{\n  width:8rem;\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/SearchUser.vue"],"names":[],"mappings":";AA0JC;IACG,gBAAgB;IAChB,sBAAsB;CACvB;AACF;GACE,kBAAkB;CACnB;AACF;EACE,gBAAgB;EAChB,WAAW;CACZ;AACD;EACE,gBAAgB;EAChB,gBAAgB;CACjB;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,WAAW;CACZ","file":"SearchUser.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n .g-window .m-article{\n    margin-top:0rem;\n    /* background:#fff; */\n  }\n .g-window .u-card .weui-cells{\n   margin-top:1.3rem;\n }\n.g-window .m-tab{\n  background:#fff;\n  color:#333;\n}\n.g-window .u-search{\n  margin-top:5rem;\n  margin-bottom:0;\n}\n.g-window .m-tab .vux-header-left .left-arrow::before{\n  border-color:#333 !important;\n}\nbutton.weui-btn_mini{\n  width:8rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 705:
/* no static exports found */
/* all exports used */
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-b515b626"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/SearchUser.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-article p-search-user"
  }, [_c('x-header', {
    staticClass: "m-tab",
    attrs: {
      "left-options": {
        backText: ' '
      }
    }
  }, [_vm._v("\n      添加好友/群组\n    "), _c('a', {
    attrs: {
      "slot": "left"
    },
    slot: "left"
  })]), _vm._v(" "), _c('group', {
    staticClass: "u-search"
  }, [_c('search', {
    ref: "searchInput",
    staticClass: "u-ipt-default",
    attrs: {
      "type": "text",
      "required": false,
      "auto-fixed": false,
      "placeholder": _vm.searchType === 0 ? '请输入搜索内容' : '好友ID或群ID'
    },
    model: {
      value: (_vm.searchText),
      callback: function($$v) {
        _vm.searchText = $$v
      },
      expression: "searchText"
    }
  }, [_c('span', {
    attrs: {
      "slot": "label"
    },
    slot: "label"
  }, [_vm._v("搜索：")])])], 1), _vm._v(" "), _c('group', {
    staticClass: "u-card u-list"
  }, [_c('cell', {
    staticClass: "u-list-item",
    attrs: {
      "title": "user",
      "inline-desc": "useraccount"
    }
  }, [_c('img', {
    staticClass: "icon",
    attrs: {
      "slot": "icon",
      "width": "20",
      "src": "/webdemo/h5/res/images/group_add.png"
    },
    on: {
      "click": _vm.toAddInfo
    },
    slot: "icon"
  }), _vm._v(" "), _c('x-button', {
    attrs: {
      "mini": "",
      "type": "primary"
    },
    nativeOn: {
      "click": function($event) {
        _vm.toVerrigy()
      }
    }
  }, [_vm._v("加为好友")])], 1), _vm._v(" "), _vm._l((_vm.searchList), function(user, index) {
    return (_vm.searchType === 0) ? _c('cell', {
      key: user.account,
      staticClass: "u-list-item",
      attrs: {
        "title": user.nick,
        "inline-desc": user.account,
        "userId": index,
        "is-link": "",
        "link": user.link
      }
    }, [_c('img', {
      staticClass: "icon",
      attrs: {
        "slot": "icon",
        "width": "20",
        "src": user.avatar
      },
      slot: "icon"
    })]) : _vm._l((_vm.searchList), function(team) {
      return _c('cell', {
        key: team.teamId,
        staticClass: "u-list-item",
        attrs: {
          "title": team.name,
          "is-link": "",
          "link": team.link
        }
      }, [_c('img', {
        staticClass: "icon",
        attrs: {
          "slot": "icon",
          "width": "20",
          "src": team.avatar
        },
        slot: "icon"
      })])
    })
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "u-card"
  }, [_c('h3', [_vm._v(_vm._s(_vm.errMsg))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b515b626", module.exports)
  }
}

/***/ }),

/***/ 759:
/* no static exports found */
/* all exports used */
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-b515b626","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/SearchUser.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-b515b626","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./SearchUser.vue */ 648);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("4dc59504", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b515b626\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchUser.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-b515b626\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./SearchUser.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=44.js.map