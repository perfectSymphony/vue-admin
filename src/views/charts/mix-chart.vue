<template>
  <div class="chart-container">
      <chart height="100%" width="100%">

      </chart>
  </div>
</template>

<script>

import Chart from '@/components/Charts/mixCharts'

export default {
    name: 'mixCharts',
    components: {
        Chart
    }
}
</script>

<style scoped>
.chart-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
}

</style>