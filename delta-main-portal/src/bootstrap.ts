// import('userManagementPortal/UserManagementPortalStyles')
import './assets/main.css'
import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
