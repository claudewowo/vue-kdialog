<template lang="pug">
    .kdialog(v-if="show", :ref="id", :id="id", :class="[this._type === 'loading' ? 'loading': ('modal_'+ _type), _runtime, customClass, modal_enter, modal_leave, rollfrom]", @touchstart.stop="touchStart($event)", @touchmove.stop.prevent="", @click.stop.prevent="shadowHide('click')")
        //- loading
        i.icon-loading(v-if="_type=='loading'")
        //- shadow
        .kdialog_bg(v-else, @click.stop.prevent="shadowHide('click')", @touchend.stop.prevent="touchEnd($event, 2)")

        .kdialog_wrap(v-if="_type!='loading'", :style="width?(`width:${ width };min-width:auto;`):''", @click.stop="")
            //- toast
            .kdialog_msg(v-if="_type === 'toast'", v-html="msg")
            //- content box
            .kdialog_box(v-else)
                //- header
                .kdialog_header(v-if="title")
                    .kdialog_title(v-html="title")
                i.kdialog_close(@click.stop.prevent="closePop('click')", @touchstart.stop="touchStart($event)", @touchend.stop.prevent="touchEnd")
                //- content
                .kdialog_content(v-if="component")
                    component(:is="component")
                .kdialog_content(v-else, v-html="content")
                //- footer
                .kdialog_footer(:class="_type + '_footer'")
                    a.confirm(href="javascript:;", @click.stop.prevent="confirmPop('click')", @touchstart.stop="touchStart", @touchend.stop.prevent="touchEnd($event, 1)", :class="disabled?'disabled':(submiting?'submiting':'')") {{_type === 'confirm'? confirmText: okText}}
                    a.cancel(href="javascript:;", @click.stop.prevent="closePop('click')", @touchstart.stop="touchStart", @touchend.stop.prevent="touchEnd", v-if="_type === 'confirm'") {{cancelText}}

</template>

<script>

    export default {
        /* eslint-disable */
        name: 'kdialog',
        data() {
            return {
                body: {
                    el: '',
                    sTime: '',
                    mTime: '',
                    startX: '',
                    startY: '',
                    moveY: '',
                    clientY: '',
                    scrollTop: '',
                    scrollWrap: null,
                    bounceForce: 100,
                },
                isMobile: false,
                frameLock: false,
                show: true,                 // 显示/隐藏弹窗
                showlock: true,             // 弹窗显示状态锁
                stopBodyScroll: true,       // 禁止body跟随窗口滚动
                customClass: '',            // 弹窗自定义 class
                rollfrom: '',               // 弹窗唤起方向 class
                _runtime: '',               // 弹窗运行环境： 'pc/m'
                _type: '',                  // 弹窗默认类型： confirm/alert/toast/loading
                width: '',                  // 弹窗宽度(width uint)
                title: '',                  // 弹窗标题
                content: '',                // 弹窗内容
                ok: null,                   // 确定回调
                cancel: null,               // 取消回调
                createdCall: null,          // 创建时回调
                mountedCall: null,          // 挂载后回调
                component: '',              // 弹窗内包含的组件名称
                okEvent: '',                // 确定按钮event事件
                cancelEvent: '',            // 取消按钮event事件
                disabled: false,            // confirm 按钮是否可点击
                submiting: false,           // 正在提交？
                shadowClose: true,          // 点击遮罩是否可关闭弹窗
                modal_enter: '',            // 入场动画 class
                modal_leave: '',            // 离场动画 class
                okText: '',                 // alert确认按钮文案
                confirmText: '',            // confirm 确认按钮文案
                cancelText: '',             // 取消按钮文案
                timer: 2500,                // toast 默认显示时长
                msg: '',                    // toast 弹窗信息
            };
        },
        created() {
            const vm = this;
            vm.isMobile = 'ontouchstart' in document;
            vm.modal_enter = vm.modal_leave = '';
            vm.rollfrom = `from${vm.rollfrom || 'center'}`;
            vm.createdCall && vm.createdCall(vm);
        },
        /* eslint-enable */
        mounted() {
            const vm = this;
            const doc = document;
            const lang = vm._language;                  // eslint-disable-line
            const okText = vm.okText;                   // eslint-disable-line
            const confirmText = vm.confirmText;         // eslint-disable-line
            const cancelText = vm.cancelText;           // eslint-disable-line
            if (Object.prototype.toString.call(lang.default) === '[object String]') {
                vm.okText = okText || lang[lang.default].ok;
                vm.confirmText = confirmText || lang[lang.default].confirm;
                vm.cancelText = cancelText || lang[lang.default].cancel;
            } else {
                vm.okText = okText || lang.default.ok;
                vm.confirmText = confirmText || lang.default.confirm;
                vm.cancelText = cancelText || lang.default.cancel;
            }

            this.$nextTick(() => {
                const scrollWrap = vm.$refs[vm.id].getElementsByClassName('kdialog_scroll_wrap')[0];
                vm.stopBodyScroll && scrollWrap && vm.touchScroll(scrollWrap); // eslint-disable-line

                vm.body.el = doc.documentElement;
                if (vm.stopBodyScroll && !vm.body.el.scrollbar) {
                    const win = window;
                    if (vm._runtime === 'runon_pc') { // eslint-disable-line
                        vm.body.el.originMarginRight = vm.body.el.style.marginRight;
                        vm.body.el.scrollbarWidth = win.innerWidth - doc.body.clientWidth; // 滚动条宽度
                        vm.body.el.style.marginRight = `${vm.body.el.originMarginRight + vm.body.el.scrollbarWidth}px`;
                        vm.body.el.style.overflow = 'hidden';
                    }
                    vm.body.el.scrollbar = true;
                }
                setTimeout(() => {
                    vm.modal_enter = 'modal_enter';
                }, 66);

                if (vm._type === 'toast') { // eslint-disable-line
                    /* toast 弹窗 */
                    if (vm.timer < 500) vm.timer = 500;
                    setTimeout(() => {
                        vm.modal_enter = '';
                        vm.modal_leave = 'modal_leave';
                        vm.showlock = false;
                    }, vm.timer - 200);
                    setTimeout(() => {
                        if (vm.ok) {
                            return vm.ok(vm);
                        }
                        const dialogs = doc.querySelectorAll('.kdialog').length;
                        // 允许body滚动
                        vm.bodyScroll(dialogs);
                        vm.show = false;
                        return false;
                    }, vm.timer);
                } else {
                    // 400ms 后允许点击
                    setTimeout(() => {
                        vm.showlock = false;
                    }, 400);
                }
                vm.mountedCall && vm.mountedCall(vm); // eslint-disable-line
            });
        },
        methods: {
            touchStart(ev) {
                this.sTime = +new Date();
                this.startX = ev.touches[0].pageX;
                this.startY = ev.touches[0].clientY;
            },
            touchEnd(ev, method) {
                const vm = this;
                const endTouch = ev.changedTouches[0];
                const endX = endTouch.pageX;
                const endY = endTouch.clientY;
                if ((+new Date() - vm.sTime <= 150) && (endX - vm.startX <= 5) && (endY - vm.startY <= 5)) {
                    if (method === 1) {
                        vm.confirmPop();
                    } else if (method === 2) {
                        vm.shadowHide();
                    } else {
                        vm.closePop();
                    }
                }
            },
            touchScroll($scrollwrap) {
                const vm = this;
                let scrollWrap = null;
                if (vm.body.scrollWrap === (null || undefined)) {
                    return false;
                }
                scrollWrap = vm.$refs.kdialog_scroll_wrap || $scrollwrap;
                vm.body.scrollWrap = scrollWrap;

                if (scrollWrap) {
                    scrollWrap.style.overflow = 'hidden';
                    vm.body.scrollTop = scrollWrap.scrollTop;
                    vm.body.clientY = 0;
                    let disDis = 0;
                    const friction = 0.75; // 摩擦系数
                    let scrollFrame = null;
                    let timer = null; // eslint-disable-line

                    scrollFrame = () => {
                        disDis *= friction;
                        if (Math.abs(disDis) >= 1) {
                            // window.requestAnimationFrame(scrollFrame);
                            timer = setTimeout(scrollFrame, 20);
                            vm.body.scrollTop += disDis;
                            vm.body.scrollWrap.scrollTo(0, vm.body.scrollTop);
                        } else {
                            clearTimeout(timer);
                            // window.cancelAnimationFrame(scrollFrame);
                        }
                    };
                    // touchstart
                    scrollWrap.addEventListener('touchstart', function (e) { // eslint-disable-line
                        // window.cancelAnimationFrame(scrollFrame);
                        clearTimeout(timer);
                        vm.body.scrollTop = this.scrollTop;
                        vm.body.clientY = e.touches[0].clientY;
                    }, false);

                    // touchmove
                    scrollWrap.addEventListener('touchmove', (e) => {
                        vm.body.moveY = e.touches[0].clientY;
                        const moveY = vm.body.moveY - vm.body.clientY;
                        vm.body.mTime = +new Date();
                        clearTimeout(timer);
                        // window.cancelAnimationFrame(scrollFrame);
                        vm.body.scrollWrap.scrollTo(0, vm.body.scrollTop - moveY);
                    });
                    // touchend
                    scrollWrap.addEventListener('touchend', function (e) { // eslint-disable-line
                        clearTimeout(timer);
                        // window.cancelAnimationFrame(scrollFrame);
                        if (this.scrollTop === 0 || this.scrollTop === vm.body.scrollTop) {
                            e.stopPropagation();
                            return false;
                        }

                        const touchend = +new Date();
                        const timeDiff = touchend - vm.body.mTime;
                        // console.log(vm.body.moveY, e.changedTouches[0].clientY, e.changedTouches[0].clientY - vm.body.moveY, timeDiff);
                        disDis = (this.scrollTop - vm.body.scrollTop) * 0.5;
                        if (timeDiff <= 20 && Math.abs(disDis) >= 5) {
                            timer = setTimeout(scrollFrame, 20);
                            // window.requestAnimationFrame(scrollFrame);
                        }
                        return false;
                    }, false);
                }
                return false;
            },
            shadowHide(isClick) {
                const vm = this;
                if (!vm.shadowClose || vm.showlock) return;
                if ((vm.isMobile && isClick !== 'click') || (!vm.isMobile && isClick === 'click')) {
                    vm.close();
                }
            },
            confirmPop(isClick) {
                const vm = this;
                if (vm.submiting || vm.disabled) return;
                if ((vm.isMobile && isClick !== 'click') || (!vm.isMobile && isClick === 'click')) {
                    vm.submiting = true;
                    if (vm.ok) {
                        vm.ok(vm);
                    } else if (vm.$bus && vm.okEvent) {
                        vm.$bus.$emit(vm.okEvent, ({ $dialog: vm }));
                    } else {
                        vm.close();
                    }
                }
            },
            closePop(isClick) {
                const vm = this;
                if ((vm.isMobile && isClick !== 'click') || (!vm.isMobile && isClick === 'click')) {
                    if (vm.cancel) {
                        return vm.cancel(vm);
                    } else if (vm.$bus && vm.cancelEvent) {
                        return vm.$bus.$emit(vm.cancelEvent, ({ $dialog: vm }));
                    }
                    vm.close();
                    return false;
                }
                return false;
            },
            close() {
                // 关闭弹窗
                const vm = this;
                vm.modal_enter = '';
                vm.modal_leave = 'modal_leave';
    
                setTimeout(() => {
                    vm.show = false;
                    const dialogs = document.querySelectorAll('.kdialog').length;
                    setTimeout(() => {
                        const leftDOM = document.getElementById(`kDialog_${vm.id}`);
                        if (leftDOM) {
                            document.body.remove(leftDOM);
                        }
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
            bodyScroll(dialogs) {
                const vm = this;
                if (vm.stopBodyScroll && dialogs <= 1) {
                    setTimeout(() => {

                        if (vm._runtime === 'runon_pc') { // eslint-disable-line
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
    };
</script>
