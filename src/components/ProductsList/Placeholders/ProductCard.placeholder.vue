<template lang="pug">
.product-card-placeholder
    .image-placeholder
        PlaceholderLine(height="200px")

    .info-placeholder
        PlaceholderLine.m-b-10(width="40%")
        PlaceholderLine.m-b-5(height="14px" width="100%")
        PlaceholderLine.m-b-10(height="14px" width="40%")
        PlaceholderLine.m-b-15(height="20px" width="30%")

        .flex.gap-10
            PlaceholderLine(height="30px" width="30%")
            PlaceholderLine(height="30px" width="25%")
</template>

<script>
import PlaceholderLine from '@/components/Common/PlaceholderLine'

export default {
    name: 'ProductCardPlaceholder',
    components: {
        PlaceholderLine
    }
}
</script>

<style lang="sass" scoped>
.product-card-placeholder
    width: 100% 
    background-color: white
    border-radius: 4px
    overflow: hidden
    box-shadow: 0 2px 10px rgba(0, 0, 0, .1)


.image-placeholder
    margin-bottom: .5rem

.info-placeholder
    padding: .5rem 1rem


</style>