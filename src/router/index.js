import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'ProductList',
        component: () => import('@/views/ProductsList.vue')
    },
    {
        path: '/products/:product_id',
        name: 'ProductView',
        component: () => import('@/views/ProductView.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        // В идеале вынести middleware в отдельный модуль
        beforeEnter(to, from, next) {
            // Необходимо вызвать проверку принудительно, т.к. 
            // Если обновить страницу, то хук beforeCreate сработает позже данной проверки
            // И корзина на момент проверки будет пуста
            store.dispatch('cart/getSavedCart')
            
            const products_count = store.getters['cart/products_count']

            if (products_count > 0) {
                return next()
            } else {
                Vue.prototype.$vs.notification({
                    color: 'warn',
                    position: 'top-right',
                    title: 'Your cart is empty'
                })
            }
        },
        component: () => import('@/views/Cart.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    }
})

export default router
