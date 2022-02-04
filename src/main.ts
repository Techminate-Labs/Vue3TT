import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import VueToast from 'vue-toast-notification'


import 'vue-toast-notification/dist/theme-default.css';
import '@/index.css'

const options = {
  legend: { enabled: true },
  credits: { enabled: false },
  exporting: { enabled: false },
  chart: {
    style: {
      fontFamily: '"Roboto", sans-serif'
    },
    backgroundColor: 'transparent'
  },
  boost: {
    enabled: false
  },
  scrollbar: {
    enabled: true
  },
  navigator: { enabled: false },
  rangeSelector: {
    enabled: false
  },
  plotOptions: {
    series: {
      allowPointSelect: true,
      marker: {
        enabled: true,
        radius: 3,
        fillColor: '#ff1145'
      }
    },
  },
}

let toastOptions = {
  position: 'top-right',
  duration: 6000,
  dismissible: true
}



createApp(App)
  .use(store)
  .use(router)
  .use(VueToast, toastOptions)
  .mount('#app')