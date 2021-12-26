<template lang="pug">
.pagination
    .page(
        v-for="page in total_pages"
        :key="page"
        :class="{ 'active': page == current_page }"
        @click="setPage(page)"
    ) {{ page }}

</template>

<script>

export default {
    name: 'Pagination',
    props: {
        pagination: Object
    },
    computed: {
        current_page() {
            return Math.ceil((this.pagination.offset - 1) / this.pagination.limit) + 1
        },
        total_pages() {
            return Math.ceil(this.pagination.count / this.pagination.limit)
        }
    },
    methods: {
        setPage(page) {
            if (page == this.current_page) return 

            
            this.$emit('update:pagination', {
                ...this.pagination,
                offset: (this.pagination.limit * (page - 1))
            })
        }
    }
}
</script>

<style lang="sass" scoped>
.pagination
    display: flex
    justify-content: flex-end
    gap: 10px 

.page
    user-select: none
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    width: 30px
    height: 30px
    background-color: #f7f7f7
    border-radius: 4px

    &:hover 
        background-color: #c7c7c7
.active
    cursor: default
    background-color: $primary
    color: white

    &:hover 
        background-color: $primary
</style>