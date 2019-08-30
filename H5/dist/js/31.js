webpackJsonp([31],{

/***/ 484:
/* no static exports found */
/* all exports used */
/*!******************************************!*\
  !*** ./src/pages/market/PlanSetting.vue ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler/index?{"id":"data-v-3bfad3a4","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector?type=styles&index=0!./PlanSetting.vue */ 737)

var Component = __webpack_require__(/*! ../../../~/vue-loader/lib/component-normalizer */ 1)(
  /* script */
  __webpack_require__(/*! !babel-loader!../../../~/vux-loader/src/script-loader.js!../../../~/vue-loader/lib/selector?type=script&index=0!./PlanSetting.vue */ 577),
  /* template */
  __webpack_require__(/*! !../../../~/vue-loader/lib/template-compiler/index?{"id":"data-v-3bfad3a4"}!../../../~/vux-loader/src/before-template-compiler-loader.js!../../../~/vux-loader/src/template-loader.js!../../../~/vue-loader/lib/selector?type=template&index=0!./PlanSetting.vue */ 682),
  /* scopeId */
  "data-v-3bfad3a4",
  /* cssModules */
  null
)
Component.options.__file = "D:\\project\\H5\\src\\pages\\market\\PlanSetting.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] PlanSetting.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3bfad3a4", Component.options)
  } else {
    hotAPI.reload("data-v-3bfad3a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 577:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vux-loader/src/script-loader.js!./~/vue-loader/lib/selector.js?type=script&index=0!./src/pages/market/PlanSetting.vue ***!
  \******************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
    data: function data() {
        return {
            showId: false,
            showPeriods: false,
            showToast: false,
            showAlert: false,
            playWay: "重庆时时彩  定位-万码",
            playlist: ["重庆时时彩  定位-万码"],
            period: "012 - 013期",
            periodList: ["012 - 013期", "012 - 014期", "012 - 015期"]
        };
    },

    methods: {
        isShow: function isShow() {
            this.showPeriods = !this.showPeriods;
        },
        checkPeriod: function checkPeriod(item) {
            this.showPeriods = false;
            this.period = item;
        },
        toPlan: function toPlan() {
            this.showAlert = true;
        }
    }
};
module.exports = exports["default"];

/***/ }),

/***/ 626:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3bfad3a4","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/market/PlanSetting.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../~/css-loader/lib/css-base.js */ 2)(true);
// imports


// module
exports.push([module.i, "\n.submit_text[data-v-3bfad3a4]{\r\n    width:100%;\r\n    text-align: center;\r\n    height:1.6rem;\r\n    font-weight:500;\r\n    line-height:1.6rem;\r\n    color:rgba(67, 160, 71, 1);\n}\n.selected[data-v-3bfad3a4]{\r\n    letter-spacing: 0.5rem;\n}\n.red[data-v-3bfad3a4]{\r\n    color:#E34541;\n}\n.periods[data-v-3bfad3a4]{\r\n    position: relative;\n}\n.periods_box[data-v-3bfad3a4]{\r\n   z-index:10;\r\n   position: absolute;\r\n   width:11rem;\r\n   left:6.5rem;\r\n   top:1.8rem;\r\n   padding: 0.2rem;\r\n   background: #fbf8f8;\n}\n.periods_item[data-v-3bfad3a4]{\r\n    font-size:1.1rem;\r\n    border-bottom:1px solid #d9d9d9;\r\n    padding:0.5rem 0.2rem;\n}\n.periods_item[data-v-3bfad3a4]:hover{\r\n    color:#03A9F4;\n}\n.period_num[data-v-3bfad3a4]{\r\n    padding-right:2rem;\r\n    background:url(/webdemo/h5/res/images/top_right.png) right center no-repeat;\r\n    background-size:30%;\n}\n.period_num.active[data-v-3bfad3a4]{\r\n    \r\n    background:url(/webdemo/h5/res/images/top_down.png) right center no-repeat;\r\n    background-size:30%;\n}\n.ltime[data-v-3bfad3a4]{\r\n    color:#E34541;\n}\n.l_notice[data-v-3bfad3a4]{\r\n    font-size: 0.81rem;\r\n    color:#999;\r\n    margin-left:1rem;\n}\n.cell[data-v-3bfad3a4]{\r\n    width:100%;\r\n    padding:0.9rem 0.7rem;\r\n    -moz-box-sizing: border-box;\r\n         box-sizing: border-box;\n}\n.cell_icon[data-v-3bfad3a4]{\r\n    width:100%;\n}\n.cell_title[data-v-3bfad3a4]{\r\n    width:7rem;\n}\n.setting_box[data-v-3bfad3a4]{\r\n    margin:0.6rem 0;\r\n    background: #fff;\n}\n.play_way[data-v-3bfad3a4]{\r\n    color:#333;\n}\n.plan_name[data-v-3bfad3a4]{\r\n    border:none;\r\n    height:1.5rem;\r\n    line-height: 1.5rem;\r\n    font-size:1rem;\r\n    color:#333;\n}\r\n", "", {"version":3,"sources":["D:/project/H5/src/pages/market/PlanSetting.vue"],"names":[],"mappings":";AAsFA;IACI,WAAW;IACX,mBAAmB;IACnB,cAAc;IACd,gBAAgB;IAChB,mBAAmB;IACnB,2BAAwB;CAC3B;AACD;IACI,uBAAuB;CAC1B;AACD;IACI,cAAc;CACjB;AACD;IACI,mBAAmB;CACtB;AACD;GACG,WAAW;GACX,mBAAmB;GACnB,YAAY;GACZ,YAAY;GACZ,WAAW;GACX,gBAAgB;GAChB,oBAAoB;CAEtB;AACD;IACI,iBAAiB;IACjB,gCAAgC;IAChC,sBAAsB;CAEzB;AACD;IACI,cAAc;CAEjB;AACD;IACI,mBAAmB;IACnB,4EAA4E;IAC5E,oBAAoB;CACvB;AACD;;IAEI,2EAA2E;IAC3E,oBAAoB;CACvB;AACD;IACI,cAAc;CACjB;AACD;IACI,mBAAmB;IACnB,WAAW;IACX,iBAAiB;CACpB;AACD;IACI,WAAW;IACX,sBAAsB;IACtB,4BAAuB;SAAvB,uBAAuB;CAC1B;AACD;IACI,WAAW;CACd;AACD;IACI,WAAW;CACd;AACD;IACI,gBAAgB;IAChB,iBAAiB;CACpB;AACD;IACI,WAAW;CACd;AACD;IACI,YAAY;IACZ,cAAc;IACd,oBAAoB;IACpB,eAAe;IACf,WAAW;CACd","file":"PlanSetting.vue","sourcesContent":["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.submit_text{\r\n    width:100%;\r\n    text-align: center;\r\n    height:1.6rem;\r\n    font-weight:500;\r\n    line-height:1.6rem;\r\n    color:rgba(67,160,71,1);\r\n}\r\n.selected{\r\n    letter-spacing: 0.5rem;\r\n}\r\n.red{\r\n    color:#E34541;\r\n}\r\n.periods{\r\n    position: relative;\r\n}\r\n.periods_box{\r\n   z-index:10;\r\n   position: absolute;\r\n   width:11rem;\r\n   left:6.5rem;\r\n   top:1.8rem;\r\n   padding: 0.2rem;\r\n   background: #fbf8f8;\r\n\r\n}\r\n.periods_item{\r\n    font-size:1.1rem;\r\n    border-bottom:1px solid #d9d9d9;\r\n    padding:0.5rem 0.2rem;\r\n  \r\n}\r\n.periods_item:hover{\r\n    color:#03A9F4;\r\n  \r\n}\r\n.period_num{\r\n    padding-right:2rem;\r\n    background:url(/webdemo/h5/res/images/top_right.png) right center no-repeat;\r\n    background-size:30%; \r\n}\r\n.period_num.active{\r\n    \r\n    background:url(/webdemo/h5/res/images/top_down.png) right center no-repeat;\r\n    background-size:30%; \r\n}\r\n.ltime{\r\n    color:#E34541;\r\n}\r\n.l_notice{\r\n    font-size: 0.81rem;\r\n    color:#999;\r\n    margin-left:1rem;\r\n}\r\n.cell{\r\n    width:100%;\r\n    padding:0.9rem 0.7rem;\r\n    box-sizing: border-box;\r\n}\r\n.cell_icon{\r\n    width:100%;\r\n}\r\n.cell_title{\r\n    width:7rem;\r\n}\r\n.setting_box{\r\n    margin:0.6rem 0;\r\n    background: #fff;\r\n}\r\n.play_way{\r\n    color:#333;\r\n}\r\n.plan_name{\r\n    border:none;\r\n    height:1.5rem;\r\n    line-height: 1.5rem;\r\n    font-size:1rem;\r\n    color:#333;\r\n}\r\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 682:
/* no static exports found */
/* all exports used */
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler?{"id":"data-v-3bfad3a4"}!./~/vux-loader/src/before-template-compiler-loader.js!./~/vux-loader/src/template-loader.js!./~/vue-loader/lib/selector.js?type=template&index=0!./src/pages/market/PlanSetting.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "g-inherit m-main"
  }, [_c('x-header', {
    attrs: {
      "left-options": {
        showBack: true,
        backText: ' '
      },
      "title": "发布设置"
    }
  }), _vm._v(" "), _c('group', {
    staticClass: "setting_box"
  }, [_c('cell-box', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "cell_icon"
  }, [_c('p', {
    staticClass: "fl cell_title"
  }, [_vm._v("玩法")]), _vm._v(" "), _c('p', {
    staticClass: "fl play_way"
  }, [_vm._v(_vm._s(_vm.playWay))])])]), _vm._v(" "), _c('cell-box', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "cell_icon"
  }, [_c('p', {
    staticClass: "fl cell_title"
  }, [_vm._v("计划名称")]), _vm._v(" "), _c('input', {
    staticClass: "fl plan_name",
    attrs: {
      "placeholder": "4-6位中文，设置后无法修改"
    }
  })])]), _vm._v(" "), _c('cell-box', {
    staticClass: "cell "
  }, [_c('div', {
    staticClass: "cell_icon periods"
  }, [_c('p', {
    staticClass: "fl cell_title"
  }, [_vm._v("计划周期")]), _vm._v(" "), _c('p', {
    staticClass: " fl plan_period"
  }, [_vm._v(_vm._s(_vm.period))]), _vm._v(" "), _c('p', {
    staticClass: "fr period_num",
    class: {
      active: _vm.showPeriods
    },
    on: {
      "click": function($event) {
        _vm.isShow()
      }
    }
  }, [_vm._v("3期")]), _vm._v(" "), _c('ul', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showPeriods),
      expression: "showPeriods"
    }],
    staticClass: "periods_box"
  }, _vm._l((_vm.periodList), function(item, index) {
    return _c('li', {
      key: index,
      staticClass: "periods_item",
      on: {
        "click": function($event) {
          _vm.checkPeriod(item)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }), 0)])]), _vm._v(" "), _c('cell-box', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "cell_icon"
  }, [_c('p', {
    staticClass: "fl cell_title"
  }, [_vm._v("您选取的号码")]), _vm._v(" "), _c('p', {
    staticClass: " fl selected red"
  }, [_vm._v("01658")])])]), _vm._v(" "), _c('cell-box', {
    staticClass: "cell"
  }, [_c('div', {
    staticClass: "cell_icon"
  }, [_c('p', {
    staticClass: "fl cell_title"
  }, [_vm._v("距离截止时间")]), _vm._v(" "), _c('p', {
    staticClass: " fl "
  }, [_c('span', {
    staticClass: "ltime red"
  }, [_vm._v("00:54")]), _vm._v(" "), _c('span', {
    staticClass: "l_notice"
  }, [_vm._v("(开奖前30秒不能发布计划)")])])])]), _vm._v(" "), _c('x-switch', {
    staticClass: "cell",
    attrs: {
      "title": "显示我的ID"
    },
    model: {
      value: (_vm.showId),
      callback: function($$v) {
        _vm.showId = $$v
      },
      expression: "showId"
    }
  })], 1), _vm._v(" "), _c('x-button', {
    staticClass: "comfirm_plan",
    attrs: {
      "type": "primary",
      "action-type": "button",
      "text": "确认发布"
    },
    nativeOn: {
      "click": function($event) {
        return _vm.toPlan($event)
      }
    }
  }), _vm._v(" "), _c('toast', {
    attrs: {
      "type": "cancel",
      "position": "middle",
      "width": "12em"
    },
    model: {
      value: (_vm.showToast),
      callback: function($$v) {
        _vm.showToast = $$v
      },
      expression: "showToast"
    }
  }, [_vm._v("开奖前30秒不能发布计划")]), _vm._v(" "), _c('alert', {
    attrs: {
      "title": "",
      "button-text": "查看计划"
    },
    model: {
      value: (_vm.showAlert),
      callback: function($$v) {
        _vm.showAlert = $$v
      },
      expression: "showAlert"
    }
  }, [_vm._t("default", [_c('img', {
    attrs: {
      "src": "/webdemo/h5/res/images/tip_success.png",
      "alt": ""
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "submit_text"
  }, [_vm._v("提交成功")]), _vm._v(" "), _c('p', {
    staticClass: "blue"
  }, [_vm._v("5秒后自动回到您的计划列表")])])], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3bfad3a4", module.exports)
  }
}

/***/ }),

/***/ 737:
/* no static exports found */
/* all exports used */
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-compiler?{"id":"data-v-3bfad3a4","scoped":true,"hasInlineConfig":true}!./~/vux-loader/src/style-loader.js!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/pages/market/PlanSetting.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../~/css-loader?sourceMap!../../../~/vue-loader/lib/style-compiler?{"id":"data-v-3bfad3a4","scoped":true,"hasInlineConfig":true}!../../../~/vux-loader/src/style-loader.js!../../../~/vue-loader/lib/selector.js?type=styles&index=0!./PlanSetting.vue */ 626);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../~/vue-style-loader/lib/addStylesClient.js */ 3)("455caf96", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3bfad3a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PlanSetting.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?sourceMap!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-3bfad3a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vux-loader/src/style-loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./PlanSetting.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ })

});
//# sourceMappingURL=31.js.map