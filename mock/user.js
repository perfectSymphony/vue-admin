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
        avatar: 'https://raw.githubusercontent.com/perfectSymphony/vue-admin/vue-cli3.0-Mockjs/src/assets/logo.png',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: '我是编辑员',
        avatar: 'https://raw.githubusercontent.com/perfectSymphony/vue-admin/vue-cli3.0-Mockjs/src/assets/logo.png',
        name: '普通编辑员'
    }
}

module.exports = [
    // 用户登录
    {
        url: '/vue-admin/user/login',
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
        url: '/vue-admin/user/info\.*',
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
        url: '/vue-admin/user/logout',
        type: 'post',
        response: _ => {
            return {
                code: 20000,
                data: '登出成功！'
            }
        }
    }
]