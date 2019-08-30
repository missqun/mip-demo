webpackJsonp([51],{

/***/ 465:
/* no static exports found */
/* all exports used */
/*!****************************!*\
  !*** ./src/pages/Room.vue ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./Room.vue */ 555),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-350169b5"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./Room.vue */ 680),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\Room.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Room.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-350169b5", Component.options)
  } else {
    hotAPI.reload("data-v-350169b5", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 555:
/* no static exports found */
/* all exports used */
/*!****************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/Room.vue ***!
  \****************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _axios = __webpack_require__(/*! axios */ 153);

var _axios2 = _interopRequireDefault(_axios);

var _configs = __webpack_require__(/*! ../configs */ 9);

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mounted: function mounted() {
    var _this = this;

    this.$store.dispatch('showLoading');
    _axios2.default.get(_configs2.default.postUrl + '/api/chatroom/homeList', {
      headers: {
        'appkey': _configs2.default.appkey,
        'content-type': 'application/json'
      }
    }).then(function (res) {
      var data = res.data;
      if (data.res === 200) {
        var chatroomInfos = {};
        var roomCount = 0;
        _this.roomList = data.msg.list.map(function (item) {
          if (item.onlineusercount > 10000) {
            var value = new Number(item.onlineusercount / 10000);
            item.onlineusercount = value.toFixed(1) + '万';
          } else {
            item.onlineusercount = item.onlineusercount || 0;
          }
          item.album = _configs2.default.resourceUrl + '/chatroom/image' + roomCount + '.png';
          item.announcement = item.announcement || ' ';

          chatroomInfos[item.roomid] = item;
          roomCount++;
          return item;
        });
        _this.roomTotal = data.msg.total;

        _this.$store.dispatch('initChatroomInfos', chatroomInfos);
      } else {
        alert(_this.errorMsg);
      }
      _this.$store.dispatch('hideLoading');
    }).catch(function (err) {
      alert(err);
      _this.$store.dispatch('hideLoading');
    });
  },
  data: function data() {
    return {
      roomList: [],
      roomTotal: 0
    };
  },

  methods: {
    enterRoom: function enterRoom(chatroomId) {
      location.href = '#/roomChat/' + chatroomId;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 680:
/* no static exports found */
/* all exports used */
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-350169b5"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/Room.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main"
  }, [_c('div', {
    staticClass: "m-room-entry g-flex-c"
  }, _vm._l((_vm.roomList), function(item) {
    return _c('span', {
      staticClass: "u-box",
      on: {
        "click": function($event) {
          _vm.enterRoom(item.roomid)
        }
      }
    }, [_c('div', {
      staticClass: "album"
    }, [_c('img', {
      staticClass: "pic",
      attrs: {
        "src": item.album
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "status"
    }, [(item.status === 1) ? _c('strong', [_vm._v("正在直播")]) : _vm._e(), _vm._v(" "), _c('em', [_vm._v(_vm._s(item.onlineusercount) + " 人")])])]), _vm._v(" "), _c('p', {
      staticClass: "desc"
    }, [_vm._v(_vm._s(item.name))])])
  }), 0)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-350169b5", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=51.js.map