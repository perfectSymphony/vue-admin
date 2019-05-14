const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: '我是超级管理员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: '我是编辑员',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: '普通编辑员'
    }
}

export default [
    // 用户登录
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            const { username } = config.body
            const token = tokens[username]

            // 数据错误
            if (!token) {
                return {
                    code: 60204,
                    message: '账号或密码错误.'
                }
            }

            return {
                code: 20000,
                data: token
            }
        }
    },

    // 获取用户信息
    {
        url: '/user/info\.*',
        type: 'get',
        response: config => {
            const { token } = config.query
            const info = users[token]

            // 数据错误
            if (!info) {
                return {
                    code: 50008,
                    message: '登录失败，请重新登录.'
                }
            }

            return {
                code: 20000,
                data: info
            }
        }
    },

    // 退出登录成功
    {
        url: '/user/logout',
        type: 'post',
        response: _ => {
            return {
                code: 20000,
                data: '登出成功！'
            }
        }
    }
]