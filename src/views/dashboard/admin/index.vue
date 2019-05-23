<template>
    <div class="dashboard-editor-container">
        <panel-group />
    </div>
</template>
<script>
import PanelGroup from './components/PanelGroup'

export default {
    name: 'DashboardAdmin',
    components: {
        PanelGroup
    },
}
</script>
<style lang="scss" scoped>
.dashboard-editor-container {
    padding: 32px;
    background-color: rgb(240, 242, 245);
    position: relative;
}
</style>
