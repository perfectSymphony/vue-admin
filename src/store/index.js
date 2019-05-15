import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.docschina.org/guides/dependency-management/#require-context
const modulesFiles = require.context('./modules', false, /\.js$/)

//你不需要 `import app from './modules/app'`
//它会自动加载所有的vuex模块从vuex文件夹中
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    //set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

const store = new Vuex.Store({
    modules,
    getters
})

export default store