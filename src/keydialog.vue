<template lang="pug">
    .kdialog(v-if="show", :id="id", :class="[this._type === 'loading' ? 'loading': ('modal_'+ _type), _runtime, customClass, modal_animation_name, rollfrom]")
        //- loading
        i.icon-loading(v-if="_type=='loading'")
        //- shadow
        .kdialog_bg(v-else, :class="_type === 'toast'?'toast_bg':''", @click="shadowHide", v-on:touchstart="touchStart", v-on:touchend="touchEnd($event, 2)")
        //- toast
        .kdialog_toast(v-if="_type === 'toast'")
            p.kdialog_msg(:class="toast_animation_name", v-html="msg")
        //- content box
        .kdialog_box(v-if="_type!='toast' && _type!='loading'", :style="width?('width:'+ width +'px;min-width:auto;'):''")
            //- header
            .kdialog_header(v-if="title")
                h3.kdialog_title(v-html="title")
            i.kdialog_close(@click="closePop", v-on:touchstart="touchStart", v-on:touchend="touchEnd")
            //- content
            .kdialog_content(v-if="component")
                component(:is="component")
            .kdialog_content(v-else, v-html="content")
            //- footer
            .kdialog_footer(:class="_type + '_footer'")
                a.confirm(href="javascript:;", @click="confirmPop", v-on:touchstart="touchStart", v-on:touchend="touchEnd($event, 1)", :class="disabled?'disabled':(submiting?'submiting':'')") {{okText || "Confirm"}}
                a.cancel(href="javascript:;", @click="closePop", v-on:touchstart="touchStart", v-on:touchend="touchEnd", v-if="_type === 'confirm'") {{cancelText || "Cancel"}}

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
                showlock: false,                        // 弹窗显示状态锁
                stopBodyScroll:true,                    // 禁止body跟随窗口滚动
                rollfrom:'',                            // 弹窗唤起方向 class
                customClass:'',                         // 弹窗自定义 class
                _runtime: '',                           // 弹窗运行环境： 'pc/m'
                _type: '',                              // 弹窗默认类型： confirm/alert/toast/loading
                title:'',                               // 弹窗标题
                width: '',                              // 弹窗宽度
                content:'',                             // 弹窗内容
                ok: null,                               // 确定回调
                cancel:null,                            // 取消回调
                component:'',                           // 弹窗内包含的组件名称
                okEvent : '',                           // 确定按钮event事件
                cancelEvent: '',                        // 取消按钮event事件
                disabled: false,                        // confirm 按钮是否可点击
                submiting:false,                        // 正在提交？
                shadowClose:false,                      // 点击遮罩是否可关闭弹窗
                toast_animation_name: '',               // toast动画 class
                modal_animation_name: '',               // 弹窗过渡 class
                okText: '',                             // 确认按钮文案
                cancelText: '',                         // 取消按钮文案
                toastCall:null,                         // toast 消失后的回调
                timer: 2500,                            // toast 默认显示时长
                msg: '',                                // toast 弹窗信息
            }
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
                vm.modal_animation_name = '';
                
                setTimeout(() => {
                    vm.show = false;
                    setTimeout(()=>{
                        // 允许body滚动
                        vm.bodyScroll();
                        // ok event
                        if(vm.$bus && vm.okEvent){
                            return vm.$bus.$off(vm.okEvent);
                        }
                        // cancel event
                        if(vm.$bus && vm.cancelEvent){
                            return vm.$bus.$off(vm.cancelEvent);
                        }
                        
                        vm.$destroy();
                    });
                }, 200);
            },
            // 取消body禁止滚动
            bodyScroll(){
                const vm = this;
                const dialogs = document.querySelectorAll('.kdialog').length;
                if(vm.stopBodyScroll && dialogs<=1){
                    setTimeout(() => {
                        // 还原 position/top/scrolltop
			vm.body.el.style.left = vm.body.el.originLeft;
                        vm.body.el.style.right = vm.body.el.originRight;
                        vm.body.el.style.position = vm.body.el.originPosition;
                        vm.body.el.style.top = vm.body.el.originTop;
                        window.scrollTo(0, vm.body.el.originScrollTop);
                        
                        if(vm._runtime === 'runon_pc'){
                            vm.body.el.style.marginRight = vm.body.el.originMarginRight;
                        }
                        
                        // 移除body上设置的属性
                        vm.body.el.originTop = undefined;
                    });
                }
            }
        },
        mounted () {
            const vm = this;
            const doc = document;
            vm.body.el = doc.documentElement;
            if(vm.stopBodyScroll && vm.body.el.originTop === undefined){
                const win = window;
                if(vm._runtime === 'runon_pc'){
                    vm.body.el.originMarginRight = vm.body.el.style.marginRight;
                    vm.body.el.scrollbarWidth = win.innerWidth - doc.body.clientWidth; // 滚动条宽度
                    vm.body.el.style.marginRight = (vm.body.el.originMarginRight + vm.body.el.scrollbarWidth) + 'px';
                }
                // 获取原始数据
		vm.body.el.originLeft = vm.body.el.style.left;
		vm.body.el.originRight = vm.body.el.style.right;
                vm.body.el.originTop = vm.body.el.style.top;
		vm.body.el.style.left = vm.body.el.originLeft || 0;
		vm.body.el.style.right = vm.body.el.originRight || 0 ;
                vm.body.el.originScrollTop = win.scrollY;
                vm.body.el.originPosition = vm.body.el.style.position;
                // 设置 position/top/scrolltop
                vm.body.el.style.position = 'fixed';
                vm.body.scrollTop = vm.body.el.originTop || vm.body.el.originScrollTop;
                vm.body.el.style.top = -vm.body.scrollTop + 'px';
            };
            
            vm.rollfrom = 'from'+ (vm.rollfrom || 'center');
            // 弹窗动画加载期间防止被点击
            vm.showlock = true;
            if(vm._type === 'toast'){
                /* toast 弹窗 */
                if(vm.timer < 500) vm.timer = 500;
                setTimeout(() => {
                    vm.toast_animation_name = vm.toastName || 'bouncein';
                }, 66);
                setTimeout(() => {
                    vm.toast_animation_name = '';
                    vm.showlock = false;
                }, vm.timer-300);
                setTimeout(() => {
                    if(vm.ok){
                        return vm.ok();
                    }
                    vm.show = false;
                    // 允许body滚动
                    vm.bodyScroll();
                }, vm.timer);
            }else{
                setTimeout(() => {
                    vm.modal_animation_name = vm.modalName || 'fadeIn';
                }, 66);
                // 300ms 后允许点击
                setTimeout(()=>{
                    vm.showlock = false;
                },300);
            }
        }
    }
</script>
