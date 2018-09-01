webpackJsonp([0],{

/***/ "E5vP":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("Ygik");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("d33dcdf6", content, true, {});

/***/ }),

/***/ "Ygik":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, ".input{width:236px;border:1px solid #999;padding:5px 10px;border-radius:4px;color:#333}", ""]);

// exports


/***/ }),

/***/ "YyhK":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, "ol li:nth-child(2n){background:#eee}.stopScroll_m .kdialog_wrap{left:0;right:0;-webkit-transform:translate(0);transform:translate(0)}.stopScroll_m.modal_enter .kdialog_wrap,.stopScroll_m.modal_leave .kdialog_wrap{top:auto}.stopScroll_m.modal_enter .kdialog_wrap{bottom:0}.stopScroll_m.modal_leave .kdialog_wrap{bottom:-100%}.stopScroll_m .kdialog_scroll_wrap li:nth-child(2n){background:#ddd}.stopScroll_m .kdialog_scroll_wrap li:nth-child(odd){background:#eee}", ""]);

// exports


/***/ }),

/***/ "ZPw6":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, "dl{height:30px;line-height:30px;margin-bottom:10px;white-space:nowrap}dd,dt{display:inline-block;vertical-align:top}dt{width:60px}.input{border:1px solid #999;padding:5px 10px;border-radius:4px;color:#333}li{padding:5px}.getit{height:22px;line-height:22px;margin-left:10px}", ""]);

// exports


/***/ }),

/***/ "aW/Q":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("YyhK");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("f888e1ea", content, true, {});

/***/ }),

/***/ "fSq5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/components/A.vue


/* harmony default export */ var A = ({
  methods: {
    getit: function getit() {
      this.$toast({
        msg: 'got it!'
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-7f445cda","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/components/A.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"forms"},[_c('li',[_c('div',{staticClass:"title"},[_vm._v("This is a coupon"),_c('span',{staticClass:"getit btn",on:{"click":_vm.getit}},[_vm._v("Get it")])])]),_c('li',[_c('div',{staticClass:"title"},[_vm._v("This is a coupon"),_c('span',{staticClass:"getit btn",on:{"click":_vm.getit}},[_vm._v("Get it")])])]),_c('li',[_c('div',{staticClass:"title"},[_vm._v("This is a coupon"),_c('span',{staticClass:"getit btn",on:{"click":_vm.getit}},[_vm._v("Get it")])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_A = (esExports);
// CONCATENATED MODULE: ./src/components/A.vue
function injectStyle (ssrContext) {
  __webpack_require__("tppE")
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
  A,
  components_A,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_A = (Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/components/B.vue


/* harmony default export */ var B = ({
  data: function data() {
    return {
      Age: ''
    };
  }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-4a81d9d6","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/components/B.vue
var B_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"forms"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.Age),expression:"Age"}],staticClass:"input",attrs:{"type":"text","placeholder":"Your Age"},domProps:{"value":(_vm.Age)},on:{"input":function($event){if($event.target.composing){ return; }_vm.Age=$event.target.value}}})])}
var B_staticRenderFns = []
var B_esExports = { render: B_render, staticRenderFns: B_staticRenderFns }
/* harmony default export */ var components_B = (B_esExports);
// CONCATENATED MODULE: ./src/components/B.vue
function B_injectStyle (ssrContext) {
  __webpack_require__("E5vP")
}
var B_normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var B___vue_template_functional__ = false
/* styles */
var B___vue_styles__ = B_injectStyle
/* scopeId */
var B___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var B___vue_module_identifier__ = null
var B_Component = B_normalizeComponent(
  B,
  components_B,
  B___vue_template_functional__,
  B___vue_styles__,
  B___vue_scopeId__,
  B___vue_module_identifier__
)

/* harmony default export */ var src_components_B = (B_Component.exports);

// CONCATENATED MODULE: ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=script&index=0!./src/components/alert.vue





/* harmony default export */ var components_alert = ({
    data: function data() {
        return {
            init: true,
            case_0: '\n            export default {\n                created:{\n                    this.$alert({\n                        title: \'<h3 style="margin-left:-12px;">title with html</h3>\',\n                        content: \'This is a alert!\'\n                    });\n                }\n            }',
            case_1: '\n            export default {\n                created:{\n                    this.$alert({\n                        title: \'<h3 style="margin-left:-12px;">title with html</h3>\',\n                        content: \'This is a alert! (width : 250px)\',\n                        shadowClose: true,\n                        width: \'250px\',\n                        ok(dialog){\n                            dialog.content = \'<h3 style="font-weight:bold;">callback...</h3>\';\n                            dialog.okText = \'OK\';\n                        }\n                    });\n                }\n            }',
            case_2: '\n            import componentA from \'A.vue\';\n            export default {\n                created:{\n                    this.$alert({\n                        title: \'Get your coupons\',\n                        component: componentA,\n                        width: \'230px\',\n                        ok(dialog){\n                            console.log(dialog);\n                        }\n                    });\n                }\n            }',
            case_3: '\n            <template>\n              <ul class="forms">\n                  <li>\n                      <div class="title">This is a coupon\n                          <span class="getit btn" @click="getit">Get it</span>\n                      </div>\n                      <div class="title">This is a coupon\n                          <span class="getit btn" @click="getit">Get it</span>\n                      </div>\n                      <div class="title">This is a coupon\n                          <span class="getit btn" @click="getit">Get it</span>\n                      </div>\n                  </li>\n              </ul>\n            </template>',
            case_4: '\n            import componentB from \'B.vue\';\n            export default {\n                created:{\n                    this.$bus.$on(\'okEvent\', data => {\n                        if(data.$dialog.$children[0].Age == \'\'){\n                            data.$dialog.submiting = false;\n                            return this.$toast({ msg: \'Can\'t be empty\' });\n                        }\n                        this.$toast({ msg: `Your Age is: ${data.$dialog.$children[0].Age}`, ok(toast){\n                            data.$dialog.close();\n                            toast.close();\n                        } });\n                    });\n                    this.$bus.$on(\'cancelEvent\', data => {\n                        data.$dialog.close();\n                        console.log(\'closed by your hand\');\n                    });\n                }\n            }',
            case_5: '\n            <template>\n                <div class="forms">\n                    <input class="input" type="text" v-model="Age" placeholder="Your Age">\n                </div>\n            </template>\n\n            <script>\n                export default {\n                    data(){\n                        return{\n                            Age: \'\'\n                        }\n                    },\n                };\n            </script>',
            case_6: '\n            export default {\n                created:{\n                    this.$confirm({\n                        rollfrom:\'bottom\',\n                        confirmText:\'confirm\',\n                        title: \'show from bottom\',\n                        content: \'confirm show from bottom. This is nice in mobile\',\n                    });\n                }\n            };\n            ',
            case_7: '\n            export default {\n                created:{\n                    alert_stopScroll(){\n                        let str = \'\';\n                        for(let i=0; i<162; i++){\n                            str += `<li>line ${i}</li>`;\n                        }\n                        this.$alert({\n                            title: \'\u6807\u9898\',\n                            rollfrom: \'bottom\',\n                            customClass: \'stopScroll_m\',\n                            content: `<ul class="kdialog_scroll_wrap">${str}</ul>`,\n                            createdCall: (dialog) => {\n                              console.log(dialog);\n                            },\n                            mountedCall: (dialog) => {\n                              console.log(dialog);\n                            }\n                        });\n                    }\n                }\n            };\n            '
        };
    },
    created: function created() {
        var _this = this;

        var str = '';
        for (var i = 0; i < 6666; i += 1) {
            str += '<li>' + i + '</li>';
        }

        window.addEventListener('click', function () {
            if (!_this.init) {
                _this._loading.close();
                _this.init = true;
            }
        }, false);
        this.$bus.$on('okEvent', function (data) {
            if (data.$dialog.$children[0].Age == '') {
                data.$dialog.submiting = false;
                return _this.$toast({ msg: 'Can\'t be empty' });
            }
            _this.$toast({
                msg: 'Your Age is: ' + data.$dialog.$children[0].Age,
                ok: function ok(toast) {
                    data.$dialog.close();
                    toast.close();
                }
            });
        });
        this.$bus.$on('cancelEvent', function (data) {
            data.$dialog.close();
            console.log('closed by your hand');
        });
    },

    methods: {
        alert: function alert() {
            this.$alert({
                title: '<h3 style="margin-left:-12px;">title with html</h3>',
                content: 'This is a alert!'
            });
        },
        alert_callback: function alert_callback() {
            this.$alert({
                title: '<h3 style="margin-left:-12px;">title with html</h3>',
                content: 'This is a alert! (width : 250px)',
                shadowClose: false,
                width: '250px',
                ok: function ok(dialog) {
                    dialog.content = '<h2 style="font-weight:bold;">callback...</h2>';
                    dialog.okText = 'OK';
                }
            });
        },
        alert_component: function alert_component() {
            this.$alert({
                title: 'Get your coupons',
                component: src_components_A,
                width: '230px',
                ok: function ok(dialog) {
                    dialog.close();
                }
            });
        },
        confirm_eventbus: function confirm_eventbus() {
            this.$bus.$off('okEvent');
            this.$bus.$off('cancelEvent');
            this.$confirm({
                title: 'test for event bus',
                content: 'click buttons bellow to show result.',
                component: src_components_B,
                okEvent: 'okEvent',
                cancelEvent: 'cancelEvent'
            });
        },
        confirm_from: function confirm_from() {
            this.$confirm({
                rollfrom: 'bottom',
                confirmText: 'confirm',
                title: 'show from bottom',
                content: 'confirm show from bottom. This is nice in mobile'
            });
        },
        alert_stopScroll: function alert_stopScroll() {
            var str = '';
            for (var i = 0; i < 162; i++) {
                str += '<li>line ' + i + '</li>';
            }
            this.$alert({
                title: '标题',
                rollfrom: 'bottom',
                customClass: 'stopScroll_m',
                content: '<ul class="kdialog_scroll_wrap">' + str + '</ul>',
                createdCall: function createdCall(dialog) {
                    console.log(dialog);
                },
                mountedCall: function mountedCall(dialog) {
                    console.log(dialog);
                }
            });
        }
    }
});
// CONCATENATED MODULE: ./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler?{"id":"data-v-02ce3f73","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/_vue-loader@13.7.1@vue-loader/lib/template-compiler/preprocessor.js?engine=pug!./node_modules/_vue-loader@13.7.1@vue-loader/lib/selector.js?type=template&index=0!./src/components/alert.vue
var alert_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pages"},[_c('div',{staticClass:"alertEx"},[_c('h2',[_vm._v("Normal Useage:")]),_c('h3',[_vm._v("show alert")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_0))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.alert}},[_vm._v("simple alert")])]),_c('h3',[_vm._v("alert with callback")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_1))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.alert_callback}},[_vm._v("alert with callback")])]),_c('hr'),_c('h2',[_vm._v("Advance Useage:")]),_c('h3',[_vm._v("alert with component")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_2)),_c('hr'),_vm._v("In componentA:\n"+_vm._s(_vm.case_3))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.alert_component}},[_vm._v("alert with component")])]),_c('h3',[_vm._v("alert/confirm with event bus")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("First: In App.js\n  Vue.use(KeyDialog); // use KeyDialog\n  KeyDialog.eventbus(); // use event bus"),_c('hr'),_vm._v("second: in your vue component:\n"+_vm._s(_vm.case_4)),_c('hr'),_vm._v("In componentB:\n"+_vm._s(_vm.case_5))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.confirm_eventbus}},[_vm._v("alert/confirm with eventbus")])]),_c('h3',[_vm._v("confirm show from bottom")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("In your vue component:"),_c('hr'),_vm._v(_vm._s(_vm.case_6))])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.confirm_from}},[_vm._v("confirm show from bottom")])]),_c('h3',[_vm._v("stop body scroll (test in mobile)")]),_c('h4',[_vm._v("code:")]),_c('pre',[_c('code',[_vm._v("1, In pc, u just need add max-height, overflow-y:auto for dialog's content;\n2, in mobile, u must put scroll content in 'kdialog_scroll_wrap', and add max-height :"),_c('hr'),_vm._v(_vm._s(_vm.case_7)),_c('hr'),_vm._v("3, If scroll content need async or in other component, just bind ref props, and call this.$parent.touchScroll(this.$refs['your bind ref']);")])]),_c('h4',[_vm._v("test:")]),_c('div',{staticClass:"btn_wrap paddingB50"},[_c('span',{staticClass:"btn",on:{"click":_vm.alert_stopScroll}},[_vm._v("stop body scroll")])])])])}
var alert_staticRenderFns = []
var alert_esExports = { render: alert_render, staticRenderFns: alert_staticRenderFns }
/* harmony default export */ var selectortype_template_index_0_src_components_alert = (alert_esExports);
// CONCATENATED MODULE: ./src/components/alert.vue
function alert_injectStyle (ssrContext) {
  __webpack_require__("aW/Q")
}
var alert_normalizeComponent = __webpack_require__("Z0/y")
/* script */


/* template */

/* template functional */
var alert___vue_template_functional__ = false
/* styles */
var alert___vue_styles__ = alert_injectStyle
/* scopeId */
var alert___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var alert___vue_module_identifier__ = null
var alert_Component = alert_normalizeComponent(
  components_alert,
  selectortype_template_index_0_src_components_alert,
  alert___vue_template_functional__,
  alert___vue_styles__,
  alert___vue_scopeId__,
  alert___vue_module_identifier__
)

/* harmony default export */ var src_components_alert = __webpack_exports__["default"] = (alert_Component.exports);


/***/ }),

/***/ "tppE":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("ZPw6");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("FIqI")("0db5e332", content, true, {});

/***/ })

});