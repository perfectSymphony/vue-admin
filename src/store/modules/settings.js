// import variables from '@/styles/element-variables.scss'
import defaultSettings from '@/settings'
import { setStore, getStore } from '@/utils/store'

const { showSetting, tagsView, fixedHeader, sidebarLogo } = defaultSettings

const state = {
  theme: getStore({
    name: 'theme'
  }) || '#ff8282',
  showSetting: showSetting,
  tagsView: tagsView,
  fixedHeader: fixedHeader,
  sidebarLogo: sidebarLogo
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
      setStore({
        name: 'theme',
        value: value
      })
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
