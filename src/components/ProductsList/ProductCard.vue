<template lang="pug">
.product
    .product-image
        img(v-lazy="`${product.image}/500`")

    .product-info
        .product-author {{ product.author }}
        .product-category {{ product.category.name }}
        .product-name {{ product.name }}
        .product-description {{ product.teaser }}
        .product-price {{ product.price | price }}

        .flex.ai-center
            AddToCart(:product="product")

            vs-button(
                :to="`/products/${product.id}`"
                flat
            ) Details
</template>

<script>
import AddToCart from '@/components/Common/AddToCart'

export default {
    name: 'ProductCard',
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
.product
    background-color: white
    width: 100% 
    border-radius: 4px
    box-shadow: 0 2px 10px rgba(0, 0, 0, .1)
    transition: box-shadow .15s linear
    box-sizing: border-box

    &:hover 
        box-shadow: 0 5px 25px rgba(0, 0, 0, .15)

    &-image
        margin-bottom: .5rem
        border-radius: 4px 4px 0 0
        min-height: 100px
        height: 30vw
        max-height: 220px
        overflow: hidden 

        & img 
            max-width: 100%

    &-info
        display: flex
        flex-direction: column
        padding: .5rem 1rem

    &-author
        font-size: .75rem
        margin-bottom: .5rem

    &-category
        font-size: .7rem 
        color: white 
        background-color: $primary
        padding: .25rem .5rem
        border-radius: 7px
        margin-bottom: .5rem
        justify-self: flex-start
        align-self: flex-start

    &-name 
        font-weight: bold
        font-size: 1.1rem
        margin-bottom: .5rem
        
    &-price
        font-weight: bold
        font-size: 1.2rem
        margin-bottom: .5rem

    &-description
        font-size: .9rem
        margin-bottom: .6rem
        color: grey

</style>