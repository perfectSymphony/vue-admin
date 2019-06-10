module.exports = {
    root: false,
    parserOptions: {
        //一个对babel解析器的包装，使其能够与eslint兼容
        parser: 'babel-eslint',
        //表示代码是ECMAScript模块
        sourceType: 'module'
    },
    env: {
        //node.js全局变量和node.js作用域
        node: true,
        //浏览器环境中的全局变量
        browser: true,
        //启用除了moudules以外的所有ECMAScript 6特性（该选项会自动设置ecmaVersion解析器选项为6
        es6: true
    },
    //'eslint:recommended'启动了一系列核心规则
    //'plugin:vue/recommended'启动了一个vue的eslint插件
    'extends': ['plugin:vue/recommended', 'eslint:recommended'],
    // 在这里添加自定义的规则，
    // 根据 https://github.com/vuejs/eslint-config-vue 和 https://eslint.vuejs.org/rules/
    rules: {
        'vue/max-attributes-per-line': [2, {
            'singleline': 10,
            'multiline': {
                'max': 1,
                'allowFirstLine': false
            }
        }],
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/name-property-casing': ['error', 'PascalCase'],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}