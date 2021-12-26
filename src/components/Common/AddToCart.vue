<template lang="pug">
.add-to-cart
    template(v-if="is_added_to_cart")
        vs-button(
            @click="removeFromCart(product.id)"
            color="success"
            flat
            key="added"
        ) In cart

    template(v-else)
        vs-button(
            color="primary"
            @click="addToCart(product)"
            key="add"
        ) Add to cart
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'AddToCart',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        is_added_to_cart() {
            return this.$store.getters['cart/is_added_to_cart'](this.product.id)
        }
    },
    methods: {
        ...mapActions({
            addToCart: 'cart/addToCart',
            removeFromCart: 'cart/removeFromCart'
        })
    }
}
</script>