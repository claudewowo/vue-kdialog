/**
 * Created by keydone on 2017/03/01.
 */

import Vue from 'vue';
import App from './app.vue';
import KeyDialog from '../keydialog';

Vue.use(KeyDialog);

new Vue({
    render: h => h(App),
}).$mount('#app');