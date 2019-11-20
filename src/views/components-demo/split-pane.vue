<template>
  <div class="components-container">
    <aside><strong>SplitPane</strong>
      <a href="https://github.com/PanJiaChen/vue-split-pane" target="_blank"> Github repository</a>
    </aside>
    <split-pane split="vertical">
      <template slot="paneL">
        <div class="left-container" />
      </template>
      <template slot="paneR">
        <split-pane split="horizontal">
          <template slot="paneL">
            <div class="top-container" />
          </template>
          <template slot="paneR">
            <div class="bottom-container" />
          </template>
        </split-pane>
      </template>
    </split-pane>
  </div>
</template>
<script>
import splitPane from 'vue-splitpane'

export default {
  name: 'SplitpaneDemo',
  components: { splitPane }
}
</script>
<style lang="scss" scoped>
    .components-container {
        position: relative;
        height: 100vh;
    }

    .left-container {
        background-color: #F38181;
        height: 100%;
    }

    .top-container {
        background-color: #FCE38A;
        width: 100%;
        height:100%;
    }
    .bottom-container {
        width: 100%;
        background-color: #95E1D3;
        height: 100%;
    }
</style>

