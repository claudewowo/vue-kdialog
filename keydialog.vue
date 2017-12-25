<template lang="pug">
    .kdialog(v-if="show", :class="type=='loading'?('loading '+popAnimation):(type=='toast'?'modal_toast':popAnimation)", :id="id")
        i.icon-loading(v-if="type=='loading'")
        
        .kdialog_bg(v-else, :class="type=='toast'?'toast_bg':''")
        .kdialog_toast(v-if="type=='toast'")
            p.kdialog_msg(:class="animationClass") {{msg}}
        .kdialog_box(v-if="type!='toast' && type!='loading'", :style="width?('width:'+ width +'px;min-width:auto;'):''")
            .kdialog_header(v-if="title")
                h3.kdialog_title {{title}}
            i.kdialog_close(@click="closePop")
                
            .kdialog_content(v-if="component")
                component(:is="component")
            .kdialog_content(v-else, v-html="content")
            
            .kdialog_footer
                a.confirm(href="javascript:;", @click="confirmPop", :class="disabled?'disabled':(submiting?'submiting':'')") {{confirmText || "Confirm"}}
                a.cancel(href="javascript:;", @click="closePop", v-if="type == 'confirm'") Cancel

</template>

<script>

    import Bus from './bus';

    /*
    * vue 弹窗组件，confirm/alert/toast/loading等类型，已挂载到全局，可以直接通过vue实例调用
    * alert 弹窗：
        this.$alert({
            usefor:'gift',
            component: gift,
            componentData: {
                data,
                groupList: groupList,
                activityId: activityId,
            },
            title: 'Change a Gift'
        });
        只有1个确认按钮，可以传入组件或者使用 content 参数传入html，不可混用
    * confirm 弹窗：
        this.$confirm({
            usefor:'gift',
            component: gift,
            componentData: {
                data,
                groupList: groupList,
                activityId: activityId,
            },
            title: 'Change a Gift'
        });
        有确定和取消两个按钮，可以传入组件或者使用 content 参数传入html，不可混用。确定按钮默认会发布'confirmPop'事件，弹窗只能手动关闭。取消按钮默认不发布事件，需要发布事件时请传入 cancelCall:true，就会发布'cancelPop'事件，然后在外部调用close进行关闭。
    * toast：
        this.$toast({ timer: 1500, msg: 'toast 提示' });
        显示以后会自动关闭，默认时长 2500ms
    * loading
        const loading = this.$loading();    // 使用 loading
        loading.show = false;               // 移除 loading
        必须手动关闭
    ** 以上几种类型按需使用，有些参数可以不传，具体参见下方参数注释。传入组件的话需在使用弹窗的组件中 import 组件，
    ** 并在调用弹窗时传入 component：组件名称。
    */
    export default {
        name: 'kdialog',
        data () {
            return {
                usefor: '',                             // 伴随弹窗实例，可用于判断弹窗用途/使用的组件
                type: '',                               // 弹窗默认类型： confirm/alert/toast/loading
                show: true,                             // 显示/隐藏弹窗
                component:'',                       // 弹窗内包含的组件名称
                componentData:'',                       // 弹窗内包含组件需要的数据
                disabled:false,                         // confirm 按钮是否可点击
                submiting:false,                        // 正在提交？
                title:'',                               // 弹窗标题
                content:'',                             // 弹窗内容
                width: '',                              // 弹窗内容宽度
                animation: '',                          // 过渡动画名称
                animationClass: '',                     // 过渡动画class
                popAnimation: '',                       // 弹窗过渡class
                cancelCall:false,                       // 取消按钮发布事件
                confirmText: '',                        // 确认按钮文案
                timer: 2500,                            // toast 默认显示时长
                msg: '',                                // toast 弹窗信息
            }
        },
        methods: {
            confirmPop(){
                const vm = this;
                if(vm.submiting || vm.disabled) return;
                // 发布确认事件
                Bus.$emit('confirmPop', {
                    kdialog: vm,
                    usefor: vm.usefor
                });
            },
            closePop(){
                const vm = this;
                if(vm.cancelCall){
                    // 发布取消事件
                    return Bus.$emit('cancelPop', {
                        kdialog: vm,
                        usefor: vm.usefor
                    });
                }
                vm.close();
            },
            close(){
                // 关闭弹窗
                const vm = this;
                vm.popAnimation = '';
                setTimeout(() => {
                    vm.show = false;
                }, 165);
            }
        },
        mounted () {
            const vm = this;
            if(vm.type == 'toast'){
                /* toast 弹窗 */
                setTimeout(() => {
                    vm.animationClass = vm.animation || 'bouncein';
                }, 66);
                setTimeout(() => {
                    vm.animationClass = '';
                }, vm.timer-330);
                setTimeout(() => {
                    vm.show = false;
                }, vm.timer);
            }else{
                setTimeout(() => {
                    vm.popAnimation = vm.animation || 'fadeIn';
                }, 66);
            }
        }
    }
</script>
