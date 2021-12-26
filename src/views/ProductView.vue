<template lang="pug">
.product-page
    transition(name="fade" mode="out-in")
        .loading(v-if="loading" key="loading")
            ProductViewPlaceholder
            ProductSidebarPlaceholder
            
        .product(v-else key="product")
            .product-info
                .product-image
                    img(v-lazy="`${product.image}/1500`")
                
                .product-author {{ product.author }}
                h1.product-title {{ product.name }}
                .product-teaser {{ product.teaser }}
                .product-description {{ product.description }}

            ProductSidebar(
                :product="product"
            )
</template>

<script>
import api from '@/api/api'
import ProductSidebar from '@/components/ProductView/ProductSidebar'
import ProductSidebarPlaceholder from '@/components/ProductView/Placeholders/ProductSidebar.placeholder'
import ProductViewPlaceholder from '@/components/ProductView/Placeholders/ProductView.placeholder'

export default {
    name: 'ProductView',
    components: {
        ProductSidebar,
        ProductViewPlaceholder,
        ProductSidebarPlaceholder
    },
    created() {
        this.getProduct()
    },
    data() {
        return {
            loading: false,
            product: null
        }
    },
    methods: {
        async getProduct() {
            try {
                this.loading = true

                const { data: product } = await api.getProduct(this.$route.params.product_id)

                this.product = product
            } catch (error) {
                console.error('Error loading product:', error)
                this.$vs.notification({
                    color: 'danger',
                    position: 'top-right',
                    title: 'Error loading product :('
                })
            } finally {
                // this.loading = false
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.product, .loading
    display: grid
    grid-template-columns: 1fr 320px
    align-items: start
    gap: 20px

    @include for-phone
        grid-template-columns: 1fr

.product
    &-author 
        font-size: .9rem
        margin: 1rem 0 .5rem

    &-image
        height: 40vw
        max-height: 500px
        overflow: hidden
        border-radius: 4px

        img
            max-width: 100%

    &-title 
        margin: .5rem 0

    &-teaser
        margin-bottom: 1rem
        color: grey

    &-description
        line-height: 1.6
</style>