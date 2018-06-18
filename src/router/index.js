import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
import Register from '../components/Register'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/shop',
            name: 'Shop',
            component: Shop
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/cart',
            name: 'Warenkorb',
            component: Cart
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})
