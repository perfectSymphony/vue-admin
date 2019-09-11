const viewGenerator = require('./plop-template/view/prompt')
const componentGenerator = require('./plop-template/component/prompt')

module.exports = function(plop){
    plop.setGenerator('view', viewGenerator)
    plop.setGenerator('component', componentGenerator)
}
