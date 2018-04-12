/**
 * Created by keydone on 2017/03/01.
 */

import Vue from 'vue';
import App from './examples.vue';
import KeyDialog from './keydialog.js';
import './keydialog_pc.css';

Vue.use(KeyDialog);

new Vue({
    render: h => h(App),
}).$mount('#app');