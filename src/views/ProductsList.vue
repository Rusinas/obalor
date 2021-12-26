<template lang="pug">
.products-list
    ProductsSidebar(
        :search.sync="filters.search"
        :categories.sync="filters.categories"
    )

    transition(name="fade" mode="out-in")
        .flex-column(
            v-if="!loading && products.length"
            key="products"
        )
            .products.m-b-20
                ProductCard(
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                )

            Pagination(
                :pagination.sync="pagination"
                @update:pagination="getProducts()"
            )

        .products(
            key="loading"
            v-else-if="loading"
        )
            ProductCardPlaceholder(v-for="n in 6" :key="n")

        .no-products(v-else) Nothing found :(
</template>

<script>
import debounce from 'debounce'
import api from '@/api/api'
import ProductsSidebar from '@/components/ProductsList/ProductsListSidebar'
import ProductCard from '@/components/ProductsList/ProductCard'
import ProductCardPlaceholder from '@/components/ProductsList/Placeholders/ProductCard.placeholder'
import Pagination from '@/components/Common/Pagination'

export default {
    name: 'ProductsList',
    components: {
        ProductsSidebar,
        ProductCard,
        ProductCardPlaceholder,
        Pagination
    },
    created() {
        this.getProducts()
    },
    data() {
        return {
            loading: false,
            products: [],
            filters: {
                search: '',
                categories: [],
            },
            pagination: {
                count: 0,
                limit: 6,
                offset: 0
            }
        }
    },
    watch: {
        filters: {
            deep: true,
            handler() {
                this.debouncedGetProducts()
            }
        },
    },
    methods: {
        async getProducts() {
            try {
                this.loading = true
                
                const { data: { results: products, count } } = await api.getProductList({ ...this.filters, ...this.pagination })

                this.pagination.count = count
                this.products = products
            } catch (error) {
                console.error('Error loading products:', error)
                this.$vs.notification({
                    color: 'danger',
                    position: 'top-right',
                    title: 'Error loading products'
                })
            } finally {
                this.loading = false
            }
        },
        debouncedGetProducts: debounce(function() {
            this.pagination.offset = 0
            this.getProducts()
        }, 1000)
    }
}
</script>

<style lang="sass" scoped>
.products-list
    display: grid
    align-items: start
    grid-template-columns: 250px 1fr
    gap: 20px

    
    @include for-phone 
        grid-template-columns: 1fr


.products
    align-items: start
    display: grid
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
    gap: 20px


.no-products
    width: 100% 
    display: flex
    align-items: center 
    justify-content: center
    padding: 50px
    border-radius: 4px 
    background-color: #f7f7f7
    font-size: .8rem
    color: #c2c2c2
</style>