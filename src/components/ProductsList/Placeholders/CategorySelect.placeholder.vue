<template lang="pug">
.category-select-placeholder
    .flex-column.gap-10
        .flex.gap-10
            PlaceholderLine(width="22px" height="22px")
            PlaceholderLine(width="60%" height="22px")
        
        .flex.gap-10
            PlaceholderLine(width="22px" height="22px")
            PlaceholderLine(width="70%" height="22px")
        
        .flex.gap-10
            PlaceholderLine(width="22px" height="22px")
            PlaceholderLine(width="40%" height="22px")
        
        .flex.gap-10
            PlaceholderLine(width="22px" height="22px")
            PlaceholderLine(width="55%" height="22px")
</template>

<script>
import PlaceholderLine from '@/components/Common/PlaceholderLine'

export default {
    name: 'CategorySelectPlaceholder',
    components: {
        PlaceholderLine
    }
}
</script>

<style lang="sass" scoped>

</style>