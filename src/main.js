import Vue from 'vue'
import App from './App.vue'


// 导入全局样式
// 导入bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// 导入index.css
import './assets/css/index.css';

import router from './routes/router.js';

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
