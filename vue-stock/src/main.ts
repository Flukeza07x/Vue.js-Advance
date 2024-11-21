import { createApp } from 'vue'

// Import Tailwind CSS and Custome CSS file
import './tailwind/app.css'
import './tailwind/custom.css'

import App from './App.vue'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')

