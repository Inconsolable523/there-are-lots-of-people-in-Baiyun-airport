/*

                  _ooOoo_
                 o8888888o
                 88" . "88
                 (| -_- |)
                 O\  =  /O
               ___/`---'\____
             .'  \\|     |//  `.
           /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
             .-\__  `-`  ___/-. /  /
        ___`. .'  /--.--\  `. . __
     ."" '<  `.___\_<|>_/___.'  >'"".
    | | :  `- \`.;`\ _ /`;.`/ - ` : | |
    \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                佛祖保佑，永无BUG!

*/
import Vue from 'vue';
import 'bootstrap';
import router from './router';
import store from '@/store';
// 加载roboto字体和字体图标
import '../static/fonts/roboto/roboto.css';
import '../static/fonts/material-icons/index.css';
// 加载bootstrap样式
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// 加载Material Design UI 库
import '../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import '../node_modules/bootstrap-material-design/dist/css/ripples.min.css';
import '../node_modules/bootstrap-material-design/dist/js/material.min';
import '../node_modules/bootstrap-material-design/dist/js/ripples.min';

import globalConfig from '@/utils/globalConfig';

// 导入全局配置
Vue.use(globalConfig);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    router,
    store
}).$mount('#app');
