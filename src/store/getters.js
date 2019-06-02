const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    size: state => state.app.size,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes,
    visitedViews: state => state.tagsView.visitedViews,
    cacheViews: state => state.tagsView.cacheViews
}

export default getters