<template lang="pug">
.product-view-placeholder
    .image.m-b-20
        PlaceholderLine(height="100%")
    PlaceholderLine.m-b-20(height="30px" width="30%")

    .flex.gap-10(v-for="line in lines")
        PlaceholderLine.m-b-10(
            v-for="(block, index) in line.blocks"
            :key="index"
            height="16px" 
            :width="block.width + '%'"
        )

</template>

<script>
import PlaceholderLine from '@/components/Common/PlaceholderLine'

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default {
    name: 'ProductViewPlaceholder',
    components: {
        PlaceholderLine
    },
    data() {
        return {
            lines: []
        }
    },
    created() {
        this.generateLines()
    },
    methods: {
        // Генерация рандомных плейсхолдеров
        generateLines() {
            const line_count = 20

            for (let i = 0; i < line_count; i++) {
                const height = 14
                const max_line_length = 100
                let line_length = 0
                
                const line = {
                    blocks: []
                }


                while (line_length < max_line_length) {
                    const width = getRandomInt(10, max_line_length - line_length)
                    
                    line_length += width

                    line.blocks.push({
                        height,
                        width
                    })
                }

                

                this.lines.push(line)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.image
    height: 40vw
    max-height: 500px
</style>