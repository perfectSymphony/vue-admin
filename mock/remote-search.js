const Mock = require('mockjs')

const NameList = []

const count = 100

for (let i = 0; i < count; i++) {
  NameList.push(Mock.mock({
    name: '@first'
  }))
}
NameList.push({ name: 'perfectSymphony' })

module.exports = [
  // transaction list
  {
    url: '/vue-admin/transaction/list',
    type: 'get',
    response: _ => {
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
  },

  {
    url: '/vue-admin/search/user',
    type: 'get',
    response: config => {
      const { name } = config.query
      const mockNameList = NameList.filter(item => {
        const lowerCaseName = item.name.toLowerCase()

        return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0)
      })
      return {
        code: 20000,
        data: {
          items: mockNameList
        }
      }
    }
  }
]
