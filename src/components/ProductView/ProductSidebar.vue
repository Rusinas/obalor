<template lang="pug">
SidebarWrapper
    h4 Price
    .price {{ product.price | price }}

    AddToCart(:product="product")
</template>

<script>
import AddToCart from '@/components/Common/AddToCart'

export default {
    name: 'ProductSidebar',
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    components: {
        AddToCart
    }
}
</script>

<style lang="sass" scoped>
.product-sidebar 
    padding: 1rem 1.5rem
    background-color: white
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1)
    border-radius: 4px

.price 
    font-size: 1.5rem
    font-weight: bold
    margin: .6rem 0
</style>