/**
 * Created by keydone on 2017/03/01.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './examples.vue';
import KeyDialog from './keydialog.js';
import './keydialog_pc.css';

Vue.config.devtools = true; // 开启浏览器 devtools 调试

const beforeuse = () => import('./components/beforeuse');
const loading = () => import('./components/loading');
const alert = () => import('./components/alert');

const routes = [
    {
        path: '*/examples.html',
        component: beforeuse,
    },
    {
        path: '*/loading.html',
        component: loading,
    },
    {
        path: '*/alert.html',
        component: alert,
    },
];

const router = new VueRouter({
    mode: 'history',
    fallback: false,
    routes,
});

Vue.use(VueRouter);
Vue.use(KeyDialog);

KeyDialog.eventbus();

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
