<template lang="pug">
.category-select.m-t-10
    transition(name="fade" mode="out-in")
        CategorySelectPlaceholder(v-if="loading" key="loading")
        .categories(v-else-if="categories.length" key="categories")
            .category(
                v-for="category in categories"
                :key="category.id"
            ) 
                vs-checkbox(v-model="selected" :val="category.id") {{ category.name }}

        .no-categories(v-else) No categories found
</template>

<script>
import api from '@/api/api.js'
import CategorySelectPlaceholder from '@/components/ProductsList/Placeholders/CategorySelect.placeholder'

export default {
    name: 'CategorySelect',
    props: {
        value: Array,
        default: () => []
    },
    components: {
        CategorySelectPlaceholder
    },
    created() {
        this.getCategories()
    },
    watch: {
        selected(value) {
            this.$emit('input', value)
        }
    },
    data() {
        return {
            loading: false,
            categories: [],
            selected: []
        }
    },
    methods: {
        async getCategories() {
            try {
                this.loading = true

                const { data: categories } = await api.getCategories()

                this.categories = categories
            } catch (error) {
                console.error('Ошибка получения категорий:', error)
                this.$vs.notification({
                    color: 'danger',
                    position: 'top-right',
                    title: 'Error loading categories'
                })
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.category 
    display: flex
    align-items: center
    gap: 10px

    &:not(:last-of-type)
        margin-bottom: .25rem


.no-categories
    font-size: .8rem
    color: grey
</style>