import '../static/sdk/ald-stat'
import Vue from 'vue'
import App from './App'
import 'normalize.css'

// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

//全局配置fly请求
const Fly = require("flyio/dist/npm/wx");
const fly = new Fly;

//将fly实例挂在vue原型上
Vue.prototype.$http = fly;



