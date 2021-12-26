<template lang="pug">
.table-wrapper
    vs-table(
        v-model="selected"
        striped
        :data="cart"
    )
        template(#thead)
            vs-tr
                vs-th(
                    v-if="cart.length"
                )
                    vs-checkbox(
                        v-model="is_all_checked"
                        :indeterminate="selected.length === cart.length"
                        @change="selected = $vs.checkAll(selected, cart)"
                    )

                template(v-if="!selected.length")
                    vs-th Title
                    vs-th Description
                    vs-th Price
                
                template(v-else)
                    vs-th
                        vs-button(flat size="small" @click="removeSelected") Remove

                    vs-th
                    vs-th

        template(#tbody)
            vs-tr(
                v-for="(tr, index) in cart" 
                :key="index" 
                :data="tr"
                :is-selected="!!selected.find(selected => selected.id === tr.id)"
            )
                vs-td(checkbox)
                    vs-checkbox(:val="tr" v-model="selected")

                vs-td {{ tr.name }}
                vs-td {{ tr.teaser }}
                vs-td {{ tr.price | price }}
</template>

<script>

export default {
    name: 'CartTable',
    computed: {
        cart() {
            return this.$store.getters['cart/cart']
        }
    },
    data() {
        return {
            is_all_checked: false,
            selected: []
        }
    },
    methods: {
        removeSelected() {
            for (let selected of this.selected) {
                this.selected = this.selected.filter(item => item.id !== selected.id)
                this.$store.commit('cart/remove_product_from_cart', selected.id)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.table-wrapper
    overflow: auto
    max-width: 100%
</style>