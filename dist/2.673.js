webpackJsonp([2],{

/***/ "631B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/components/beforeuse.vue


/* harmony default export */ var beforeuse = ({
  methods: {
    loading: function loading() {
      this.$loading();
    },
    toast: function toast() {
      this.$toast({ msg: "This is a toast" });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-30d90cc5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/components/beforeuse.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pages"},[_c('div',{staticClass:"beforeUse"},[_c('h2',[_vm._v("Ready to use:")]),_c('h3',[_vm._v("1, import")]),_c('pre',[_c('code',[_vm._v("import Vue from 'vue';\nimport kdialog from 'vue-kdialog';\nVue.use(kdialog);")])]),_c('h3',[_vm._v("2, with css")]),_c('pre',[_c('code',[_vm._v("import Vue from 'vue';\nimport kdialog from 'vue-kdialog'; // only nodeElement\nimport 'vue-kdialog/src/keydialog_pc.css'; // css for PC\nVue.use(kdialog);")])]),_c('h2',[_vm._v("Global function")]),_c('h3',[_vm._v("1, event bus")]),_c('pre',[_c('code',[_vm._v("import Vue from 'vue';\nimport kdialog from 'vue-kdialog'; // only nodeElement\nimport 'vue-kdialog/src/keydialog_pc.css'; // css for PC\nVue.use(kdialog);\nkdialog.eventbus(); // init the eventbus, the bus will be mounted to Vue prototype (全局使用eventbus事件，并挂载到vue原型上)")])]),_c('h3',[_vm._v("2, set language")]),_c('pre',[_c('code',[_vm._v("import Vue from 'vue';\nimport kdialog from 'vue-kdialog'; // only nodeElement\nimport 'vue-kdialog/src/keydialog_pc.css'; // css for PC\nVue.use(kdialog);\nkdialog.setLanguage('en'); // only can be 'en'/'zh-cn'\n/* or\nkdialog.setLanguage({\n   ok: 'OK',\n   confirm: 'Confirm',\n   cancel: 'cancel'\n}); */")])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_beforeuse = (esExports);
// CONCATENATED MODULE: ./src/components/beforeuse.vue
function injectStyle (ssrContext) {
  __webpack_require__("bjak")
}
var normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  beforeuse,
  components_beforeuse,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_beforeuse = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "bjak":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("viay");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("3f5f250f", content, true, {});

/***/ }),

/***/ "viay":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ })

});