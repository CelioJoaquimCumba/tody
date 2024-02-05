import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { store } from './provider/userProviders'

const app = createApp(App)

app.use(router)
app.use(store)

app.config.globalProperties.$store=store;

app.mount('#app')
