import { createApp } from 'vue'

//Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//Import Bootstrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

//import Custom css
import './styles/custom.css'

//Import SweetAlert2
import 'sweetalert2/dist/sweetalert2.min.css'

// Import Root Component
import App from './App.vue'

//Import Pinia
import { createPinia } from 'pinia'

//Import Router
import router from './router/index'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

