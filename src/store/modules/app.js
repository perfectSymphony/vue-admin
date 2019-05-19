import Cookies from 'js-cookie'

const state = {
	sidebar: {
		opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
		withoutAnimation: false
	}
}

const mutations = {
	TOGGLE_SIDEBAR: state => {
		state.sidebar.opened = !state.sidebar.opened
		state.sidebar.withoutAnimation = false
		if(state.sidebar.opened){
			Cookies.set('sidebarStatus',1)
		} else {
			Cookies.set('sidebarStatus',0)
		}
	},
	CLOSE_SIDEBAR: (state, withoutAnimation) => {
		Cookies.set('sidebarStatus', 0)
		state.sidebar.opened = false
		state.sidebar.withoutAnimation = withoutAnimation
	}
}

const actions = {
	toggleSideBar({ commit }){
		commit('TOGGLE_SIDEBAR')
	},
	closeSideBar({ commit }, { widthoutAnimation }){
		commit('CLOSE_SIDEBAR', withoutAnimation)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}