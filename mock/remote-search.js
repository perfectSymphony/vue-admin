import Mock from 'mockjs'

const NameList = []

const count = 100

for (let i = 0; i < count; i++) {
    NameList.push(Mock.mock({
        name: '@first'
    }))
}
NameList.push({ name: 'perfectSymphony' })


export default [
    // transaction list
    {
        url: '/transaction/list',
        type: 'get',
        response: _ => { //一般来说加下划线的变量为私有变量，这是大家都比较遵守的一种代码规范
            // console.log(_);
            return {
                code: 20000,
                data: {
                    total: 20,
                    'items|20': [{
                        order_no: '@guid()',
                        timestamp: Mock.Random.date('T'),
                        username: '@name()',
                        price: '@float(2000, 15000, 0, 2)',
                        'status|1': ['success', 'pending']
                    }]
                }
            }
        }
    }
]