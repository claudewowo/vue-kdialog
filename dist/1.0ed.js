webpackJsonp([1],{

/***/ "KgXo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/components/loading.vue

/* harmony default export */ var loading = ({
    data: function data() {
        return {
            init: true,
            case_0: '\n            export default {\n                created:{\n                    this.$loading();\n                }\n            }',
            case_1: '\n            export default {\n                methods:{\n                    loading(){\n                        const loading = this.$loading();\n                        setTimeout(() => {\n                            loading.close(); // (this loading will be closed after 2000ms)\n                        }, 2000);\n                    },\n                }\n            }',
            case_2: '\n            export default {\n                created:{\n                    this.$toast({ msg: \'This is a toast\', timer: 2500 });\n                }\n            }',
            case_3: '\n            <script>\n            export default {\n                created:{\n                    this.$toast({\n                        customClass: \'customTranstion\',\n                        msg: "This is a toast width custom transtion",\n                    });\n                }\n            }\n            </script>\n\n            <style lang="scss">\n                .customTranstion{\n                    .kdialog_msg{transform: translateY(50%) scale(1);}\n                    &.modal_enter, &.modal_leave{\n                        .kdialog_msg{transition-timing-function: initial;}\n                    }\n                    &.modal_enter .kdialog_msg{transform: translateY(0) scale(1);}\n                    &.modal_leave .kdialog_msg{transform: translateY(-50%) scale(1);}\n                }\n            </style>',
            case_4: '\n            export default {\n                created:{\n                    this.$toast({ msg: \'This is a toast\', ok: (dialog) => {\n                        dialog.close();\n                        setTimeout(()=>{\n                            this.$toast({ msg: "last toast was closed" });\n                        }, 300);\n                    } });\n                }\n            }'
        };
    },
    created: function created() {
        var _this = this;

        window.addEventListener('click', function () {
            if (!_this.init) {
                _this._loading.close();
                _this.init = true;
            }
        }, false);
    },

    methods: {
        loading: function loading() {
            var _this2 = this;

            this._loading = this.$loading();
            setTimeout(function () {
                _this2.init = false;
            }, 500);
        },
        toast: function toast() {
            this.$toast({ msg: 'This is a toast' });
        },
        toast_transition: function toast_transition() {
            this.$toast({
                customClass: 'customTranstion',
                msg: 'This is a toast width custom transtion'
            });
        },
        toast_call: function toast_call() {
            var _this3 = this;

            this.$toast({
                msg: 'This is a toast',
                ok: function ok(dialog) {
                    dialog.close();
                    setTimeout(function () {
                        _this3.$toast({ msg: 'last toast was closed' });
                    }, 300);
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-cf632358","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/components/loading.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pages"},[_c('div',{staticClass:"alertEx"},[_c('h2',[_vm._v("Normal Useage:")]),_c('h3',[_vm._v("show loading")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_0))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.loading}},[_vm._v("simple loading")]),_vm._v("    (click anywhere to close this loading)")]),_c('h3',[_vm._v("close loading")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_1))])]),_c('hr'),_c('h2',[_vm._v("Advance Useage:")]),_c('h3',[_vm._v("show toast")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_2))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.toast}},[_vm._v("simple toast")])]),_c('h3',[_vm._v("custom toast animation")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_3))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.toast_transition}},[_vm._v("custom toast animation")])]),_c('h3',[_vm._v("toast callback")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_4))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.toast_call}},[_vm._v("toast with callback")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_loading = (esExports);
// CONCATENATED MODULE: ./src/components/loading.vue
function injectStyle (ssrContext) {
  __webpack_require__("kZ5n")
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
  loading,
  components_loading,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_loading = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ayrG":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, ".customTranstion .kdialog_msg{-webkit-transform:translateY(50%) scale(1);transform:translateY(50%) scale(1)}.customTranstion.modal_enter .kdialog_msg,.customTranstion.modal_leave .kdialog_msg{-webkit-transition-timing-function:ease;-webkit-transition-timing-function:initial;transition-timing-function:ease}.customTranstion.modal_enter .kdialog_msg{-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}.customTranstion.modal_leave .kdialog_msg{-webkit-transform:translateY(-50%) scale(1);transform:translateY(-50%) scale(1)}", ""]);

// exports


/***/ }),

/***/ "kZ5n":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ayrG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("44bdebbc", content, true, {});

/***/ })

});