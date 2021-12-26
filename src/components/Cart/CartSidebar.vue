<template lang="pug">
SidebarWrapper
    h4.m-b-10 Total
    .total.m-b-15 {{ total | price }}

    .flex.gap-10
        vs-button(
            @click="checkout()"
            :loading="checking_out"
        ) Checkout

        vs-button(
            @click="clear()"
            transparent
        ) Clear
</template>

<script>

export default {
    name: 'CartSidebar',
    computed: {
        total() {
            return this.$store.getters['cart/total']
        }
    },
    data() {
        return {
            checking_out: false
        }
    },
    methods: {
        async checkout() {
            this.checking_out = true

            await new Promise(resolve => setTimeout(resolve, 1000))
            
            this.checking_out = false
            
            this.$store.dispatch('cart/clear')
            this.$router.push('/')
            
            this.$vs.notification({
                color: 'success',
                position: 'top-right',
                title: 'Thanks for your purchase!',
                text: `We've sent your courses on your email 🥸`
            })
        },
        clear() {
            this.$store.dispatch('cart/clear')
            this.$router.push('/')
            this.$vs.notification({
                color: 'warning',
                position: 'top-right',
                title: 'Cart has been emptied',
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.total
    font-size: 1.5rem
    font-weight: bold
</style>