import * as Vue from 'vue'
import App from './App.vue'
import router from './router'

// FIX: Não consegui fazer importar globalmente através do vue.config.js
import '@/scss/main.scss'

Vue.createApp(App)
  .use(router)
  .mount('body') // A ideia de carregar no body é para fica mais SEO friendly
