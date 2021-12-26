<template lang="pug">
.topbar
    .logo(
        @click="$router.push('/')"
    )
        Logo

    .cart(
        @click="$router.push({ name: 'Cart' })"
    )
        CartIcon
        .counter(v-if="count > 0") {{ count }}
</template>

<script>
import Logo from '@/components/Common/Svg/Logo'
import CartIcon from '@/components/Common/Svg/CartIcon'

export default {
    name: 'Topbar',
    components: {
        Logo,
        CartIcon
    },
    computed: {
        count() {
            return this.$store.getters['cart/products_count']
        }
    }
}
</script>

<style lang="sass" scoped>
.topbar
    display: flex
    align-items: center
    justify-content: space-between
    height: 50px
    margin: 50px 0

    @include for-phone
        margin: 25px 0

.logo, .cart
    cursor: pointer

.cart
    position: relative

.counter
    position: absolute
    top: -10px
    right: -15px
    background-color: $primary
    border-radius: 4px 
    color: white
    font-size: .6rem
    padding: .25em .6em
</style>