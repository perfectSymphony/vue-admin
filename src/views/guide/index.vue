<template>
    <div class="app-container">
        <aside>
            {{ $t('guide.description') }}
            <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js</a>
        </aside>
        <el-button icon="el-icon-question" type="primary" @click.prevent.stop="guide">
            {{ $t('guide.button') }}
        </el-button>
    </div>
</template>
<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'

export default {
    name: 'Guide',
    data(){
        return {
            dirver: null
        }
    },
    mounted(){
        this.dirver = new Driver()
    },
    methods: {
        guide(){
            this.dirver.defineSteps(steps)
            this.dirver.start()
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

