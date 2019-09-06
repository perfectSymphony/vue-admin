import variables from '@/styles/element-variables.scss'

import defaultSettings from '@/settings'

const { showSetting, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
    theme: variables.theme,
    showSetting: showSetting,
    tagsView: tagsView,
    fixedHeader: fixedHeader,
    sidebarLogo: sidebarLogo
}

const mutations = {
    CHANGE_SETTING: (state, { key, value }) => {
        console.log(key, value)
        if(state.hasOwnProperty(key)){
            state[key] = value
        }
    }
}

const actions = {
    changeSetting({ commit }, data){
        console.log(data)
        commit('CHANGE_SETTING', data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}