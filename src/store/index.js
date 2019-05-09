import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.docschina.org/guides/dependency-management/#require-context

const store = new Vuex.Store({
    getters
})

export default store