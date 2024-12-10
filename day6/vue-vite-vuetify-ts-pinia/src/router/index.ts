import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import HomeVue from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
    {

        // Defalut Layout
        path: '/',
        name: 'Default',
        component: DefaultLayout,
        children:[
            {
                
                path: '',
        name: 'Home',
        component: HomeVue,
        meta: {
            title: 'Home'
        }
    }

]
    },
]
    




const router = createRouter({
    history: createWebHistory(import.meta.env.URL),
    routes
})

router.beforeEach((to, _, next) => {

    if(typeof(to.meta.title) == 'string'){
        document.title = to.meta.title
    }

    next()
})

export default router