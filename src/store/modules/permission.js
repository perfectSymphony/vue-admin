import { asyncRoutes, constantRoutes } from '@/router'


/**
 *
 * Use meta.role to determine if the current user has permission
 */

function hasPerssion(roles, route){
	if(route.meta && route.meta.roles){
		// 确定数组的所有成员是否满足指定的测试
		return roles.some(role => {
			// 判断是否包含某一元素
			route.meta.roles.includes(role)
		})
	} else {
		return true
	}
}

/**
 * Filter asyncRoutes routing tables by recursion
 * 
 */

export function filterAsyncRoutes(routes, roles) {
	const res = []

	routes.forEach(route =>{
		const tmp = {...route }
		if(hasPerssion(roles, tmp)){
			if(tmp.children){
				tmp.children = filterAsyncRoutes(tmp.children, roles)
			}
			res.push(tmp)
		}
	})

	return res
}

const state = {
	routes: [],
	addRoutes: []
}

const mutations = {
	SET_ROUTES: (state, routes) =>{
		state.addRoutes = routes
		state.routes = constantRoutes.concat(routes)
	}
}

const actions = {
	generateRoutes({ commit }, roles) {
		return new Promise(resolve => {
			let accessedRoutes
			if(roles.includes('admin')){
				accessedRoutes = asyncRoutes || []
			} else {
				accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
			}
			commit('SET_ROUTES', accessedRoutes)
			resolve(accessedRoutes)
		})
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
