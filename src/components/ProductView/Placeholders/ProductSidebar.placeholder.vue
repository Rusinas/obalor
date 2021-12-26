<template lang="pug">
SidebarWrapper
    PlaceholderLine.m-b-10(
        width="60%"
    )
    PlaceholderLine.m-b-10(
        width="40%"
        height="30px"
    )
    PlaceholderLine(
        width="50%"
        height="40px"
    )
</template>

<script>
import PlaceholderLine from '@/components/Common/PlaceholderLine'

export default {
    name: 'ProductSidebarPlaceholder',
    components: {
        PlaceholderLine
    }
}
</script>

<style lang="sass" scoped>

</style>