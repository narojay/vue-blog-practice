import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
// import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: () => import('../components/403.vue'),
        meta: {
            title: "主页",
            keepAlive: true
        }
    },

]



export default createRouter({
    history: createWebHashHistory(),
    routes
})