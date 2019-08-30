webpackJsonp([0],{

/***/ 174:
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** ./src/pages/InforMation.vue ***!
  \***********************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-2b8113e2","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector?type=styles&index=0!./InforMation.vue */ 734)

var Component = __webpack_require__(/*! ../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../~/vux-loader/src/script-loader.js!../../~/vue-loader/lib/selector?type=script&index=0!./InforMation.vue */ 550),
  /* template */
  __webpack_require__(/*! !../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-2b8113e2"}!../../~/vux-loader/src/before-template-compiler-loader.js!../../~/vux-loader/src/template-loader.js!../../~/vue-loader/lib/selector?type=template&index=0!./InforMation.vue */ 678),
  /* scopeId */
  "data-v-2b8113e2",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\InforMation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] InforMation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b8113e2", Component.options)
  } else {
    hotAPI.reload("data-v-2b8113e2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 550:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/InforMation.vue ***!
  \***********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(/*! vue */ 26);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            newsList: []
        };
    },

    created: function created() {
        var _this = this;

        this.$axios.post("http://www.ssjh.com/m/getAppToutiao").then(function (res) {
            console.log(111, res.data.data.list);
            _this.newsList = res.data.data.list;
        });
    },
    methods: {
        toNewsDetail: function toNewsDetail(url) {
            location.href = url;
        }
    }
};
module.exports = exports["default"];

/***/ }),

/***/ 623:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-2b8113e2","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/InforMation.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.in_cell[data-v-2b8113e2]{\n     padding:0.9rem 0.8rem !important;\n}\n.flex[data-v-2b8113e2]{\n     display: -webkit-box;\n     display: -webkit-flex;\n     display: -moz-box;\n     display: -ms-flexbox;\n     display: flex;\n     -webkit-box-pack: justify;\n     -webkit-justify-content: space-between;\n        -moz-box-pack: justify;\n         -ms-flex-pack: justify;\n             justify-content: space-between\n}\n.n_title[data-v-2b8113e2]{\n    width:20rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size:1.05rem;\n    font-weight: 500;\n}\n.n_abstract[data-v-2b8113e2]{\n    overflow: hidden; \n    text-overflow: ellipsis;\n    font-size:0.8rem;\n   color:#555;\n   margin:0.5rem auto;\n}\n.n_time[data-v-2b8113e2]{\n    font-size:0.5rem;\n   color:#777;\n}\n.n3_title[data-v-2b8113e2]{\n     width:12rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: pre-wrap;\n    font-size:1.05rem;\n    font-weight: 500;\n}\n.in_img[data-v-2b8113e2]{\n    width:6.8rem;\n    height:4.6rem;\n    margin:0 0.2rem;\n}\n.title_box[data-v-2b8113e2]{\n    width:6.8rem;\n    margin-left:0.8rem;\n    height:4.6rem;\n}\n.in4[data-v-2b8113e2]{\n    margin:0.5rem auto;\n}\n.bottom_div[data-v-2b8113e2]{\n    height:3.8rem;\n}\n", "", {"version":3,"sources":["D:/project/H5/src/pages/InforMation.vue"],"names":[],"mappings":";AA4DC;KACI,iCAAiC;CACpC;AACD;KACI,qBAAc;KAAd,sBAAc;KAAd,kBAAc;KAAd,qBAAc;KAAd,cAAc;KACd,0BAA8B;KAA9B,uCAA8B;QAA9B,uBAA8B;SAA9B,uBAA8B;aAA9B,8BAA8B;CACjC;AACF;IACI,YAAY;IACZ,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,kBAAkB;IAClB,iBAAiB;CACpB;AACD;IACI,iBAAiB;IACjB,wBAAwB;IACxB,iBAAiB;GAClB,WAAW;GACX,mBAAmB;CACrB;AACD;IACI,iBAAiB;GAClB,WAAW;CACb;AACD;KACK,YAAY;IACb,iBAAiB;IACjB,wBAAwB;IACxB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;CACpB;AACD;IACI,aAAa;IACb,cAAc;IACd,gBAAgB;CACnB;AACD;IACI,aAAa;IACb,mBAAmB;IACnB,cAAc;CACjB;AACD;IACI,mBAAmB;CACtB;AACD;IACI,cAAc;CACjB","file":"InforMation.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n .in_cell{\n     padding:0.9rem 0.8rem !important;\n }\n .flex{\n     display: flex;\n     justify-content: space-between\n }\n.n_title{\n    width:20rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size:1.05rem;\n    font-weight: 500;\n}\n.n_abstract{\n    overflow: hidden; \n    text-overflow: ellipsis;\n    font-size:0.8rem;\n   color:#555;\n   margin:0.5rem auto;\n}\n.n_time{\n    font-size:0.5rem;\n   color:#777;\n}\n.n3_title{\n     width:12rem;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: pre-wrap;\n    font-size:1.05rem;\n    font-weight: 500;\n}\n.in_img{\n    width:6.8rem;\n    height:4.6rem;\n    margin:0 0.2rem;\n}\n.title_box{\n    width:6.8rem;\n    margin-left:0.8rem;\n    height:4.6rem;\n}\n.in4{\n    margin:0.5rem auto;\n}\n.bottom_div{\n    height:3.8rem;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 678:
/* no static exports found */
/* all exports used */
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-2b8113e2"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/InforMation.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main"
  }, [_c('x-header', {
    attrs: {
      "left-options": {
        showBack: false
      }
    }
  }, [_vm._v("资讯")]), _vm._v(" "), _c('div', {
    staticClass: "information_box"
  }, [_c('group', _vm._l((_vm.newsList), function(item, index) {
    return _c('cell', {
      key: index,
      staticClass: "in_cell",
      nativeOn: {
        "click": function($event) {
          _vm.toNewsDetail(item.url)
        }
      }
    }, [(item.image_list.length < 1) ? _c('div', {
      attrs: {
        "slot": "icon"
      },
      slot: "icon"
    }, [_c('div', {
      staticClass: "n_title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "n_abstract"
    }, [_vm._v(_vm._s(item.abstract))]), _vm._v(" "), _c('div', {
      staticClass: "n_time"
    }, [_vm._v(_vm._s(item.time))])]) : (item.image_list.length < 3 && item.image_list.length >= 1) ? _c('div', {
      staticClass: "flex",
      attrs: {
        "slot": "icon"
      },
      slot: "icon"
    }, [_c('div', {
      staticClass: "n_content"
    }, _vm._l((item.image_list), function(item, index) {
      return _c('div', {
        key: index
      }, [_c('img', {
        staticClass: "in_img",
        attrs: {
          "src": item,
          "alt": ""
        }
      })])
    }), 0), _vm._v(" "), _c('div', {
      staticClass: "title_box"
    }, [_c('div', {
      staticClass: "n3_title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "n_time"
    }, [_vm._v(_vm._s(item.time))])])]) : (item.image_list.length >= 3) ? _c('div', {
      attrs: {
        "slot": "icon"
      },
      slot: "icon"
    }, [_c('div', {
      staticClass: "n_title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('div', {
      staticClass: "n_content flex in4"
    }, _vm._l((item.image_list), function(item, index) {
      return _c('div', {
        key: index
      }, [_c('img', {
        staticClass: "in_img",
        attrs: {
          "src": item,
          "alt": ""
        }
      })])
    }), 0), _vm._v(" "), _c('div', {
      staticClass: "n_time"
    }, [_vm._v(_vm._s(item.time))])]) : _vm._e()])
  }), 1), _vm._v(" "), _c('div', {
    staticClass: "bottom_div"
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2b8113e2", module.exports)
  }
}

/***/ }),

/***/ 734:
/* no static exports found */
/* all exports used */
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-2b8113e2","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/InforMation.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../~/css-loader?sourceMap!../../~/vue-loader/lib/style-compiler?{"id":"data-v-2b8113e2","scoped":true,"hasInlineConfig":true}!../../~/vux-loader/src/style-loader.js!../../~/vue-loader/lib/selector.js?type=styles&index=0!./InforMation.vue */ 623);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../~/vue-style-loader/lib/addStylesClient.js */ 3)("0f8ad2a4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b8113e2\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InforMation.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-2b8113e2\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vux-loader/src/style-loader.js!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./InforMation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=0.js.map