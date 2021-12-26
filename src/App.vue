<template lang="pug">
#app
    .app-wrapper
        Topbar
        
        transition(name="slide-fade" mode="out-in")
            router-view(:key="$route.name")
</template>

<script>
import Topbar from '@/components/Common/Topbar'

export default {
    name: 'App',
    components: {
        Topbar
    },
    beforeCreate() {
        this.$store.dispatch('cart/getSavedCart')
    }
}
</script>

<style lang="sass">
@import '@/assets/styles/main.sass'

#app 
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    padding: 0 20px 50px

    

.app-wrapper
    width: 100% 
    max-width: 1300px

</style>