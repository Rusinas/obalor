<template lang="pug">
SidebarWrapper
    .search
        vs-input(
            v-model="search"
            placeholder="Search"
        )

    CategorySelect(
        v-model="selected_categories"
    )

</template>

<script>
import CategorySelect from '@/components/ProductsList/CategorySelect'

export default {
    name: 'ProductsSidebar',
    components: {
        CategorySelect
    },
    watch: {
        search(value) {
            this.$emit('update:search', value)
        },
        selected_categories(value) {
            this.$emit('update:categories', value)
        }
    },
    data() {
        return {
            search: '',
            selected_categories: []
        }
    }
}
</script>
