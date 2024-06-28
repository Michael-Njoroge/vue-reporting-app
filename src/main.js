import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'flexmonster/flexmonster.css';

// createApp(App).mount('#app')
const app = createApp(App)
app.mount('#app')
app.use(router)
