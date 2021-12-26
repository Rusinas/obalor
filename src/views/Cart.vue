<template lang="pug">
.cart-page
    h1 Cart 

    .cart
        CartTable
        CartSidebar
</template>

<script>
import CartTable from '@/components/Cart/CartTable'
import CartSidebar from '@/components/Cart/CartSidebar'

export default {
    name: 'Cart',
    components: {
        CartTable,
        CartSidebar
    }
}
</script>

<style lang="sass" scoped>
.cart
    display: grid
    grid-template-columns: 1fr 260px
    align-items: start
    gap: 40px

    @include for-phone
        grid-template-columns: 1fr

h1
    margin-bottom: 1em
</style>