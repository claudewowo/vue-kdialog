<template lang="pug">
    .kdialog(v-if="show", :id="id", :class="[this._type === 'loading' ? 'loading': ('modal_'+ _type), _runtime, customClass, modal_enter, modal_leave, rollfrom]")
        //- loading
        i.icon-loading(v-if="_type=='loading'")
        //- shadow
        .kdialog_bg(v-else, @click="shadowHide", v-on:touchstart="touchStart", v-on:touchend="touchEnd($event, 2)")

        .kdialog_wrap(v-if="_type!='loading'", :style="width?(`width:${ width };min-width:auto;`):''")
            //- toast
            .kdialog_msg(v-if="_type === 'toast'", v-html="msg")
            //- content box
            .kdialog_box(v-else)
                //- header
                .kdialog_header(v-if="title")
                    .kdialog_title(v-html="title")
                i.kdialog_close(@click="closePop", v-on:touchstart="touchStart", v-on:touchend="touchEnd")
                //- content
                .kdialog_content(v-if="component")
                    component(:is="component")
                .kdialog_content(v-else, v-html="content")
                //- footer
                .kdialog_footer(:class="_type + '_footer'")
                    a.confirm(href="javascript:;", @click="confirmPop", v-on:touchstart="touchStart", v-on:touchend="touchEnd($event, 1)", :class="disabled?'disabled':(submiting?'submiting':'')") {{_type === 'confirm'? confirmText: okText}}
                    a.cancel(href="javascript:;", @click="closePop", v-on:touchstart="touchStart", v-on:touchend="touchEnd", v-if="_type === 'confirm'") {{cancelText}}

</template>

<script>
    
    export default {
        name: 'kdialog',
        data () {
            return {
                body:{
                    el:'',
                    scrollTop:'',
                    position:'',
                    top:'',
                    sTime:'',
                    eTime:'',
                },
                show: true,                             // 显示/隐藏弹窗
                showlock: true,                         // 弹窗显示状态锁
                stopBodyScroll:true,                    // 禁止body跟随窗口滚动
                customClass:'',                         // 弹窗自定义 class
                rollfrom:'',                            // 弹窗唤起方向 class
                _runtime:'',                            // 弹窗运行环境： 'pc/m'
                _type: '',                              // 弹窗默认类型： confirm/alert/toast/loading
                width: '',                              // 弹窗宽度(width uint)
                title:'',                               // 弹窗标题
                content:'',                             // 弹窗内容
                ok: null,                               // 确定回调
                cancel:null,                            // 取消回调
                component:'',                           // 弹窗内包含的组件名称
                okEvent : '',                           // 确定按钮event事件
                cancelEvent: '',                        // 取消按钮event事件
                disabled: false,                        // confirm 按钮是否可点击
                submiting:false,                        // 正在提交？
                shadowClose: true,                      // 点击遮罩是否可关闭弹窗
                modal_enter: '',                        // 入场动画 class
                modal_leave: '',                        // 离场动画 class
                okText: '',                             // alert确认按钮文案
                confirmText: '',                        // confirm 确认按钮文案
                cancelText: '',                         // 取消按钮文案
                timer: 2500,                            // toast 默认显示时长
                msg: '',                                // toast 弹窗信息
            }
        },
        mounted () {
            const vm = this;
            const doc = document;
            const lang = vm._language;
            const okText = vm.okText;
            const confirmText = vm.confirmText;
            const cancelText = vm.cancelText;
            if(Object.prototype.toString.call(lang.default) === '[object String]'){
                vm.okText = okText || lang[lang.default].ok;
                vm.confirmText = confirmText || lang[lang.default].confirm;
                vm.cancelText = cancelText || lang[lang.default].cancel;
            }else{
                vm.okText = okText || lang.default.ok;
                vm.confirmText = confirmText || lang.default.confirm;
                vm.cancelText = cancelText || lang.default.cancel;
            }

            this.$nextTick(()=>{
                vm.body.el = doc.documentElement;
                if(vm.stopBodyScroll && !vm.body.el.scrollbar){
                    const win = window;
                    if(vm._runtime === 'runon_pc'){
                        vm.body.el.originMarginRight = vm.body.el.style.marginRight;
                        vm.body.el.scrollbarWidth = win.innerWidth - doc.body.clientWidth; // 滚动条宽度
                        vm.body.el.style.marginRight = (vm.body.el.originMarginRight + vm.body.el.scrollbarWidth) + 'px';
                        vm.body.el.style.overflow = 'hidden';
                    }
                    vm.body.el.scrollbar = true;
                };
                
                vm.rollfrom = 'from'+ (vm.rollfrom || 'center');

                vm.modal_enter = vm.modal_leave = '';
                setTimeout(() => {
                    vm.modal_enter = 'modal_enter';
                }, 66);

                if(vm._type === 'toast'){
                    /* toast 弹窗 */
                    if(vm.timer < 500) vm.timer = 500;
                    setTimeout(() => {
                        vm.modal_enter = '';
                        vm.modal_leave = 'modal_leave';
                        vm.showlock = false;
                    }, vm.timer-200);
                    setTimeout(() => {
                        if(vm.ok){
                            return vm.ok(vm);
                        }
                        const dialogs = doc.querySelectorAll('.kdialog').length;
                        // 允许body滚动
                        vm.bodyScroll(dialogs);
                        vm.show = false;
                    }, vm.timer);
                }else{
                    // 400ms 后允许点击
                    setTimeout(()=>{
                        vm.showlock = false;
                    },400);
                }
            });
        },
        methods: {
            touchStart(){
                this.sTime = +new Date();
            },
            touchEnd(ev, method){
                const vm = this;
                vm.eTime = +new Date();
                if(vm.eTime - vm.sTime <= 200){
                    if(method == 1){
                        vm.confirmPop();
                    }else if(method == 2){
                        vm.shadowHide();
                    }else{
                        vm.closePop();
                    }
                }
                ev.stopPropagation();
                ev.preventDefault();
            },
            shadowHide(){
                const vm = this;
                if(!vm.shadowClose || vm.showlock) return;
                vm.close();
            },
            confirmPop(){
                const vm = this;
                if(vm.submiting || vm.disabled) return;
                vm.submiting = true;
                if(vm.ok){
                    return vm.ok(vm);
                }else if(vm.$bus && vm.okEvent){
                    return vm.$bus.$emit( vm.okEvent, ({ $dialog: vm }));
                }
                vm.close();
            },
            closePop(){
                const vm = this;
                if(vm.cancel){
                    return vm.cancel(vm);
                }else if(vm.$bus && vm.cancelEvent){
                    return vm.$bus.$emit( vm.cancelEvent, ({ $dialog: vm }));
                }
                vm.close();
            },
            close(){
                // 关闭弹窗
                const vm = this;
                vm.modal_enter = '';
                vm.modal_leave = 'modal_leave';
                
                setTimeout(() => {
                    const dialogs = document.querySelectorAll('.kdialog').length;
                    vm.show = false;
                    setTimeout(()=>{
                        // 允许body滚动
                        vm.bodyScroll(dialogs);
                        /* // ok event
                        vm.$bus.$off(vm.okEvent);
                        // cancel event
                        vm.$bus.$off(vm.cancelEvent); */
                        
                        vm.$destroy();
                    });
                }, 200);
            },
            // 取消body禁止滚动
            bodyScroll(dialogs){
                const vm = this;
                if(vm.stopBodyScroll && dialogs<=1){
                    setTimeout(() => {

                        if(vm._runtime === 'runon_pc'){
                            // 还原 overflow
                            vm.body.el.style.overflow = '';
                            vm.body.el.style.marginRight = vm.body.el.originMarginRight;
                        }
                        
                        // 移除body上设置的属性
                        vm.body.el.scrollbar = false;
                    });
                }
            }
        },
    }
</script>
