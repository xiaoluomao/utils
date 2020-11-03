
// 是整个应用程序的入口文件

import Vue from 'vue'
// 根组件
import App from './App.vue'

Vue.config.productionTip = false

// 使用ES6模块化语法，把路由实例导入进来
import router from './router'

// 状态管理 
import store from './store/'

// HTTP请求，把http封装的api方法，挂在原型上，便于整个应用程序进行使用
import http from '@/utils/api'
Vue.prototype.$http = http

// element 安装
// 一次加载进来并安装，然后就可以直接使用
// cnpm install element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)

// 创建根窗器、根组件
new Vue({
  router,  // 路由挂载
  store,
  render: h => h(App)
}).$mount('#app')

