<template lang="pug">
    .app_contain
        header
            h1.h1 examples for vue-kdialog
        .content
            .nav_tree
                router-link(:to="`./examples.html`") Before Use
                router-link(:to="`./loading.html`") loading / toast
                router-link(:to="`./alert.html`") alert / confirm

            transition(:name="transitionName")
                router-view

</template>

<script>

    export default {
        data () {
            return {
                transitionName:'slide-left',
            }
        },
    }
</script>

<style lang="postcss">
    html{overflow-x: hidden;}
    body{
        width:100%;
        min-height: 100%;
        &::-webkit-scrollbar {
            width: 4px;
        }
        &::-webkit-scrollbar-track {
            background-color: white;
        }
        &::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #999;
        }
    }
    pre, code{
        font-family: 'Source Pro',Helvetica,Sans-serif,San Francisco,Microsoft Yahei,SimHei;
    }
    pre{background: #f6f8fa;
        border-radius: 4px;
        padding: 10px;
        overflow:auto;
        font-size:85%;
    }
    input::-moz-placeholder{color: #ccc;}
    input::-webkit-input-placeholder{color: #ccc;}

    .modal-enter-active, .modal-leave-active {
    transition: opacity .3s ease, transform .3s linear;
    }
    .modal-leave-active {
        opacity: 0;
        transform:scale(0,0);
    }
    .pr{position:relative;}
    .block{display: block;}
    .inlinetop{
        display: inline-block;
        vertical-align:top;
    }
    .btn_wrap{
        line-height:34px;
    }
    .btn{height:34px;
        padding:0 10px;
        border-radius:5px;
        text-align:center;
        color:#fff;
        overflow:hidden;
        background:#ff8a00;
        text-decoration:none;
        transition-duration:.2s;
        cursor:pointer;
        @extend .inlinetop;
    }
    .btn:hover{background:#ef8100;text-decoration:none;}
    .btn.cancel{background:#999;}
    .btn.cancel:hover{background:#8c8c8c;}
    .btn.disable{background:#ccc;cursor:not-allowed;}
    .margin10{margin:10px;}
    .paddingB50{padding-bottom:50px;}

    /*
    *   过渡动画
    */
    .slide-left-enter,
    .slide-right-leave-active,
    .slide-right-enter,
    .slide-left-leave-active{
        opacity: 0;
        transition-duration: .3s;
        position: absolute;
        top:0; left: 0;
    }
    .slide-left-enter,
    .slide-right-leave-active {
        transform: translate(-100%, 0);
    }

    .slide-right-enter,
    .slide-left-leave-active {
        transform: translate(100% 0);
    }
    
    header{
        width:100%;
        background: cadetblue;
        margin-bottom: 20px;
    }

    .content{
        width: 1200px;
        margin:0 auto;
        position: relative;
    }

    .h1{font-size: 32px;
        text-align:center;
        padding:10px;
    }

    .nav_tree{
        width: 125px;
        position: absolute;
        top:0;left:0;
        line-height:32px;
        a{display: block;
            font-size: 16px;
            text-decoration:none;
            border-left: 6px solid #ccc;
            padding-left:10px;
            margin-top:10px;
            height:30px;
            line-height:30px;
            background:#f6f8fa;
            &.router-link-active{
                border-left-color: darkcyan;
            }
        }
    }

    .pages{
        padding-left:140px;
        h2{margin:20px;
            color: darkcyan;
            font-weight:bold;
        }
        h3{border-left: 6px solid darkcyan;
            padding-left:6px;
            margin-bottom:10px;
            height:34px;
            line-height:34px;
            background:#eee;
        }
    }

</style>
