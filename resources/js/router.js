import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/get', component: () => import('./components/get'),
            name: 'get.index'
        },
        {
            path: '/user/login', component: () => import('./components/login'),
            name: 'user.login'
        },
        {
            path: '/user/register', component: () => import('./components/register'),
            name: 'user.register'
        },
    ]
})