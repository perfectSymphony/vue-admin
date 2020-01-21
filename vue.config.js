'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title || 'perfectSymphony Admin'
const port = 8888 

//所有的详细配置都在 https://cli.vuejs.org/config/
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false, 
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://localhost:${port}/mock`,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    // 在服务内部的所有其他中间件之后， 提供执行自定义中间件的功能。
    after: require('./mock/mock-server.js')
  },
  configureWebpack: {
    //为每个页面设置对应的title
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }, 
  css: {
    sourceMap: false
  },
  // 该函数会在环境变量被设置之后懒执行
  // https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    //设置 svg-sprite-loader
    // 可以将多个svg打包成svg-sprite
    // https://github.com/kisenka/svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()
      // 2，添加对icons规则，对svg文件进行处理
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons')) //在排除设置里，添加一条需要排除内容的绝对路径
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    //设置vue去掉元素之间的空格
    //减少文件体积
    //https://zhuanlan.zhihu.com/p/25589193
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = false
        return options
      })
      .end()

    // https://webpack.js.org/configuration/devtool/#development
    config.when(process.env.NODE_ENV === 'development', consfig => config.devtool('cheap-source-map'))

    // 参数when(condition, whenTruthy, whenFalsy)
    config
      .when(process.env.NODE_ENV !== 'development',
          config => {
            //Enhances html-webpack-plugin functionality with different deployment options for your scripts 
            config
              .plugin('ScriptExtHtmlWebpackPlugin')
              .after('html')
              .use('script-ext-html-webpack-plugin', [{
                  // `runtime` must same as runtimeChunk name. default is `runtime`
                  inline: /runtime\..*\.js$/
              }])
              .end()
              //webpack 分包工具
            config
              .optimization.splitChunks({
                // include all types of chunks
                //https://webpack.docschina.org/plugins/split-chunks-plugin/#splitchunks-chunks
                chunks: 'all',
                cacheGroups: {
                  libs: {
                    name: 'chunk-libs',
                    test: /[\\/]node_modules[\\/]/,
                    priority: 10,
                    chunks: 'initial' // only package third parties that are initially dependent
                  },
                  elementUI: {
                    name: 'chunk-elementUI', //拆分element-ui成为单独的包
                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/, //为了适应于cnpm
                    priority: 20
                  },
                  commons: {
                    name: 'chunk-commons',
                    test: resolve('src/components'), //能自定义自己的规则
                    minChunks: 3,
                    priority: 5,
                    reuseExistingChunk: true
                  }
                }
              })
            config.optimization.runtimeChunk('single')
          }
      )
  }
}