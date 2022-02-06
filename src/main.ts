import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css'
import '@/index.css'

const toastOptions = {
  position: 'top-right',
  duration: 6000,
  dismissible: true
}
  
createApp(App)
  .use(store)
  .use(router)
  .use(VueToast, toastOptions)
  .mount('#app')
