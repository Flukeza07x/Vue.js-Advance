import { createApp } from 'vue'

// Vuetify
import { vuetify } from './plugins/vuetify';

// Custom CSS
import "./styles/global.scss"

//Import Root Component
import App from './App.vue'

//Import Pinia
import { createPinia } from 'pinia';

// Import router
import router from './router/index';

// i18n Multi Language
import i18n from './plugins/i18n'

const app = createApp(App)
app.use(vuetify)
app.use(i18n)
app.use(createPinia())
app.use(router)
app.mount('#app')
