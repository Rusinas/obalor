<template lang="pug">
.placeholder-line(:style="computed_style")
</template>

<script>

export default {
    name: 'PlaceholderLine',
    props: {
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '20px'
        },
        color: {
            type: String,
            default: 'grey'
        }
    },
    computed: {
        computed_style() {
            return {
                width: this.width,
                height: this.height,
                backgroundColor: this.color
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.placeholder-line
    border-radius: 2px
    @include animated-placeholder
</style>