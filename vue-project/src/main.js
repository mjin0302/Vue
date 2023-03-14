import { createApp } from 'vue' // == newVue
import App from './App.vue' // new vue가 app.vue에 있다
import router from './router'

createApp(App).use(router).mount('#app')
