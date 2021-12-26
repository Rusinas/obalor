function updateLocalStorage(cart) {
    if (cart && cart.length) {
        window.localStorage.setItem('saved_cart', JSON.stringify(cart))
    } else {
        window.localStorage.removeItem('saved_cart')
    }
}

export default {
    namespaced: true,
    state: () => ({
        cart: []
    }),
    mutations: {
        set_cart(state, cart) {
            state.cart = cart
        },
        add_product_to_cart(state, product) {
            state.cart.push(product)
        },
        remove_product_from_cart(state, product_id) {
            state.cart = state.cart.filter(product => product.id !== product_id)
        },
        clear(state) {
            state.cart = []
        }
    },
    actions: {
        getSavedCart({ commit }) {
            let saved_cart 

            try {
                saved_cart = JSON.parse(window.localStorage.getItem('saved_cart')) || []
            } catch (ignore) {}

            if (saved_cart && saved_cart.length) {
                commit('set_cart', saved_cart)
            }
        },
        addToCart({ commit, state }, product) {
            commit('add_product_to_cart', product)
            updateLocalStorage(state.cart)
        },
        removeFromCart({ commit, state }, product_id) {
            commit('remove_product_from_cart', product_id)
            updateLocalStorage(state.cart)
        },
        clear({ commit }) {
            commit('clear')
            updateLocalStorage()
        } 
    },
    getters: {
        cart: ({ cart }) => cart,
        is_added_to_cart: ({ cart }) => product_id => !!cart.find(product => product.id === product_id),
        products_count: ({ cart }) => cart.length,
        total: ({ cart }) => cart.reduce((acc, curr) => acc + curr.price, 0)
    }
}