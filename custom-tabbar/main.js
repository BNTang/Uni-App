import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import './utils/tabbar.js'

// 导入验证工具 (H5环境下可用)
// #ifdef H5
import './utils/verify-custom-tabbar.js'
// #endif

export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif