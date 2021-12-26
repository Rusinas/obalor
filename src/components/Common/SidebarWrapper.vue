<template lang="pug">
.sidebar-wrapper
    slot
</template>

<script>

export default {
    name: 'SidebarWrapper',
}
</script>

<style lang="sass" scoped>
.sidebar-wrapper
    position: sticky
    top: 20px
    background-color: white
    box-shadow: 0 5px 15px rgba(0, 0, 0, .1)
    padding: 1rem 1.5rem
    box-sizing: border-box 
    border-radius: 4px

    @include for-phone 
        position: static
</style>