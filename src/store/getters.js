const getters = {
    sidebar: state => state.app.sidebar,
    language: state => state.app.language,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes
}

export default getters