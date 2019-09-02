<template>
  <div class="errPage-container">
    <div>
        <ErrorA />
      <ErrorB />
    </div>
     <h3>{{ $t('errorLog.tips') }}</h3>
    <aside>
      {{ $t('errorLog.description') }}
      <a target="_blank" class="link-type" href="https://cn.vuejs.org/v2/api/#errorHandler">
        {{ $t('errorLog.documentation') }}
      </a>
    </aside>
  </div>
</template>

<script>

import ErrorA from './components/ErrorTestA'
import ErrorB from './components/ErrorTestB'

export default {
  name: 'ErrorLog',
  components: {
    ErrorA,
    ErrorB
  }
}
</script>

<style scoped>
.errPage-container {
  margin: 30px;
}
</style>