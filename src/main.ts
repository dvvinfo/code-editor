import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { makeServer } from './server'

// @ts-expect-error запуск makeServe
if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const app = createApp(App)

app.use(router)

app.mount('#app')
