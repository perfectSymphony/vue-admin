const chokidar = require('chokidar') //nodejs文件监控 是一个基于node.JS的监听文件夹改变模块。
const badyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')
const Mock = require('mockjs')

// process.cwd() 返回的是当前Node.js进程执行时的工作目录
// __dirname  当前模块的目录名 / 不是一个全局变量，而是每个模块内部的
const mockDir = path.join(process.cwd(), 'mock')

function registerRoutes(app) {
    let mockLastIndex
    const { mocks } = require('./index.js')
    const mocksForServer = mocks.map(route => {
        return responseFake(route.url, route.type, route.response)
      })
    for (const mock of mocksForServer) {
        app[mock.type](mock.url, mock.response)
        mockLastIndex = app._router.stack.length
    }
    // 知道对象的所有属性，for...in...也可以
    //  keys 方法仅返回可枚举属性和方法的名称；若要返回可枚举和不可枚举属性和方法的名称，可以使用 Object.getOwnPropertyNames()函数。
    const mockRoutesLength = Object.keys(mocksForServer).length
    return {
        mockRoutesLength: mockRoutesLength,
        mockStartIndex: mockLastIndex - mockRoutesLength
    }
}

//后台模拟数据
const responseFake = (url, type, respond) => {
    return {
        url: new RegExp(`${process.env.VUE_APP_BASE_API}${url}`),
        type: type || 'GET',
        response(req, res) {
            console.log('请求路径:' + req.path)
            res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
        }
    }
}

function unregisterRoutes() {
    // 在Node.js中，定义了一个require.cache对象，该对象代表缓存了所有已被加载模块的缓存区
    Object.keys(require.cache).forEach(i => {
        if (i.includes(mockDir)) {
            // nodejs清除require缓存 delete require.cache
            // 开发nodejs应用时会面临一个麻烦的事情，就是修改了配置数据之后，必须重启服务器才能看到修改后的结果
            // 怎么做到修改文件之后，自动重启服务器
            delete require.cache[require.resolve(i)]
        }
    })
}

module.exports = app => {
    //es6 polyfill
    // Polyfill是一个js库，主要抚平不同浏览器之间对js实现的差异
    // polyfill 是 shim的一种。 
    // shim是将不同 api封装成一种，比如 jQuery的 $.ajax 封装了 XMLHttpRequest和 IE用ActiveXObject方式创建xhr对象。它将一个新的API引入到一个旧的环境中,而且仅靠旧环境中已有的手段实现。
    require('@babel/register')
    app.use(badyParser.json()) // for parsing application/json
    app.use(badyParser.urlencoded({
            extended: true
        })) //for parsing application/x-www-form-urlencoded

    const mockRoutes = registerRoutes(app)
    var mockRoutesLength = mockRoutes.mockRoutesLength
    var mockStartIndex = mockRoutes.mockStartIndex

    // watch files, hot reload mock server
    chokidar.watch(mockDir, {
        ignored: /mock-server/,
        ignoreInitial: true,
    }).on('all', (event, path) => {
        if (event === 'change' || event === 'add') {
            // remove mock routes stack
            app._router.stack.splice(mockStartIndex, mockRoutesLength)

            //清除路由缓存
            unregisterRoutes()

            const mockRoutes = registerRoutes(app)
            mockRoutesLength = mockRoutes.mockRoutesLength
            mockStartIndex = mockRoutes.mockStartIndex

            console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
        }
    })
}