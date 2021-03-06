<template>
  <div id="app">
    <!-- 规格设置 -->
    <div class="specification">
      <ul class="spec-list">
        <Container @drop="onDrop($event)">
          <Draggable v-for="(item, index) in specification" :key="index">
            <li class="item">
              <div class="name">
                <el-input size="default" style="width:300px; float: left;" v-model="item.name" placeholder="输入产品规格"></el-input>
                
                <i class="el-icon-circle-close" @click="delSpec(index)"></i>
                <!-- <a-icon class="icon" type="close-circle" @click="delSpec(index)"></a-icon> -->
              </div>
              <div class="values">
                <Container @drop="onInnerDrop(item, $event)" orientation="horizontal" tag="span" style="display:inline-block;">
                  <Draggable v-for="(tag, num) in item.items" :key="num" tag="span" style="display:inline-block;">
                    <span class="tag">
                      <span class="select__tags-text">{{ tag.name }}</span>
                      <a-icon type="close" @click="delSpecTag(index, num)"></a-icon>
                    </span>
                  </Draggable>
                </Container>
                <div class="add-attr">
                  <el-input size="small" v-model="specValue[index]" placeholder="回车添加商品属性" @pressEnter="e => addSpecTag(e, index, item.items.length)">
                  </el-input>
                </div>
              </div>
            </li>
          </Draggable>
        </Container>
      </ul>
      <div class="add-spec">
        <el-button size="default" :disabled="specification.length >= 15" @click="addSpec">添加规格项目</el-button>
      </div>
    </div>
    <div class="example">
      <table class="stock-table" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th
              v-for="(item, index) in specification"
              :key="index">
              {{ item.name }}
            </th>
            <th>图片</th>
            <th>销售价</th>
            <th>建议零售价</th>
            <th>库存</th>
            <th>UPC码</th>
            <th>69码</th>
            <th>重量(克)</th>
          </tr>
        </thead>
        <tbody v-if="specification[0] && specification[0].items.length">
          <tr v-for="(item, index) in childProductArray" :key="item.childProductId || item.skuId">
            <template v-for="(n, specIndex) in specification.length">
              <td
                v-if="showTd(specIndex, index)"
                :key="n"
                :rowspan="countSum(n)">
                {{ getSpecAttr(specIndex, index, 'name') }}
              </td>
            </template>
            <td>
              <!-- <uploader
                style="width: 110px;"
                :type="2"
                :key="item.name"
                :goodsimgList="item.uploadObj"
                @change="(data) => childByValue(data, index)"
                v-decorator="[`picUnique[${index}]`, { initialValue: item.uploadObj, valuePropName: 'fileLsit', getValueFromEvent: normFile}]"
              /> -->
            </td>
            <td>
              <el-input
                size="small"
                type="text"
                v-model.number="item.goodsPrice"
                placeholder="输入销售价">
              </el-input>
            </td>
            <td>
              <el-input
                size="small"
                type="text"
                v-model.number="item.marketPrice"
                placeholder="建议零售价">
              </el-input>
            </td>
            <td>
              <el-input
                size="small"
                type="text"
                v-model.number="item.goodsNumber"
                placeholder="输入库存">
              </el-input>
            </td>
            <td>
              <el-input
                size="small"
                type="text"
                v-model.number="item.goodsUpc"
                placeholder="输入UPC码">
              </el-input>
            </td>
            <td>
              <el-input
                size="small"
                type="text"
                v-model.number="item.goodsCode"
                placeholder="输入69码">
              </el-input>
            </td>
            <td>
              <el-input
                size="small"
                type="text"
                v-model.number="item.goodsWeight"
                placeholder="输入重量">
              </el-input>
            </td>
          </tr>
          <tr>
            <td colspan="8" class="wh-foot">
              <span class="label">批量设置：</span>
              <ul class="set-list" v-if="isSetListShow">
                <li class="set-item" @click="openBatch('goodsPrice')">销售价</li>
                <li class="set-item" @click="openBatch('marketPrice')">建议零售价</li>
                <li class="set-item" @click="openBatch('goodsNumber')">库存</li>
                <li class="set-item" @click="openBatch('goodsUpc')">UPC码</li>
                <li class="set-item" @click="openBatch('goodsCode')">69码</li>
                <li class="set-item" @click="openBatch('goodsWeight')">重量(克)</li>
              </ul>
              <div class="set-form" v-else>
                <el-input size="small" v-model.number="batchValue" placeholder="输入要设置的数量"></el-input>
                
                <i class="el-icon-check" :style="{ color: '#0088ee' }" @click="setBatch"></i>
                <i class="el-icon-close" :style="{ color: '#cc0000' }" @click="cancelBatch"></i>
                <!-- <el-icon type="check" class="set-btn" :style="{ color: '#0088ee' }" @click="setBatch"/>
                <el-icon type="close" class="set-btn" :style="{ color: '#cc0000' }" @click="cancelBatch"/> -->
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { uuid } from '@/utils/uuid'
import { Container, Draggable } from 'vue-smooth-dnd'
import { applyDrag } from '@/utils/util'
// import Uploader from '@/components/Uploader'

  export default {
    name: 'newSku',
    props: {
      spec: {
        type: [Array, Object],
        default: () => {}
      },
      inheritAttrs: {
        type: Boolean,
        default: false
      }
    },
    components: {
      Container,
      Draggable,
    //   Uploader
    },
    data () {
      return {
        // list : [
        //   {name:'颜色',items:['red','yellow']},
        //   {name:'内存',items:["4G","8G"]}
        // ],
        specification: [],
        specValue: [],
        newList: [],
        newData: [],
        childProductArray: [],
        oldTableData: [],
        // 批量设置相关
        isSetListShow: true,
        batchValue: '', // 批量设置所绑定的值
        currentType: '', // 要批量设置的类型
      }
    },
    created () {
      // this.processing()
    },

    computed: {
      // stockSpecArr () {
      //   return this.childProductArray.map(item => item.childProductSpec)
      // },
      value () {
        const { specification, childProductArray } = this
        return {
          specification,
          childProductArray
        }
      }
    },
    watch: {
      value (newValue, oldValue) {
        this.$emit('change', newValue)
      },
    },
    mounted () {
      // 回显规格项目
      if (this.spec.length === 0) return
      const goodsSpec = this.spec.goodsSpec
      const spec = this.spec.goodsSpec.spec
      console.log(spec)
      this.specification = spec

      const option = this.spec.goodsSpec.option
      const selectSkuList = []
      for (const key in option) {
        const item = option[key]
        const subItem = item.name.split('+')
        const specs = item.specs.split('_')
        const items = []
        subItem.map((item, i) => {
          items.push({
            id: specs[i] - 0,
            name: (goodsSpec.spec[i] && goodsSpec.spec[i].name) || '',
            items: item
          })
        })
        selectSkuList.push({
          isShow: true,
          id: item.skuId,
          skuInfo: item,
          items
        })
      }
      const tmpSkuList = []
      selectSkuList.map(item => {
        tmpSkuList.push(item.skuInfo)
      })

      const displayArr = []
      let key = ''
      let value = ''
      tmpSkuList.map((items, i) => {
        const childProductSpec = {}
        const tmpDisplayObj = {}
        items.specInfo.map(item => {
          key = item.name
          value = item.value
          childProductSpec[key] = value
        })
        tmpDisplayObj.childProductSpec = childProductSpec
        displayArr.push(Object.assign({}, items, tmpDisplayObj))
      })
      this.childProductArray = displayArr
      this.childProductArray.forEach((item, index) => {
        let name = item.picUnique
        name = name.slice(name.lastIndexOf('.cn/') + 4, name.length)
        item.uploadObj = {
          url: item.picUnique,
          thumbUrl: item.picUnique,
          name: name,
          uid: item.picUnique,
          picUrl: item.picUnique,
          status: 'done'
        }
      })
    },
    methods: {
      // 添加规格项目
      addSpec () {
        if (this.specification.length < 15) {
          this.specification.push({
            name: '',
            specId: '' + uuid(8, 8),
            items: []
          })
        }
      },
      delSpec (index) {
        this.specification.splice(index, 1)
        this.processing()
      },
      // 添加子规格
      addSpecTag (e, index, num) {
        if (e.target.value === '') {
          this.$message.error('请输入内容')
          return false
        }
        const obj = {
          itemId: '' + uuid(16, 16),
          name: ''
        }
        obj.name = e.target.value
        let status = false
        this.specification[index].items.forEach((item) => {
          if (item.name === obj.name) {
            status = true
          }
        })
        if (status) {
          this.$message.error('请勿添加重复子规格')
        } else {
          this.specification[index].items.push(obj)
          this.specValue[index] = ''
          this.processing()
        }
      },
      // 删除子规格
      delSpecTag (index, num) {
        this.specification[index].items.splice(num, 1)
        this.processing()
      },
      //处理数据
      processing() {
        this.newData = [];
        console.log(this.specification)
        for (let i = 0; i < this.specification.length; i++) {
          let newlist = []
          console.log(this.specification[i].items)
          this.specification[i].items.forEach((item,index) => {
            let obj = {}
            obj[this.specification[i].name] = this.specification[i].items[index].name
            newlist.push(obj)
          })
          this.newData.push(newlist)
        }
        console.log(this.newData)
        this.getList()
      },
      //转换数据
      getList() {
        this.oldTableData = this.childProductArray.length ? this.childProductArray : []
        this.childProductArray = []
        this.newList = this.descartes(this.newData)
        console.log(this.newList)
        for (let index = 0; index < this.newList.length; index++) {
          let arr = []
          if (Array.isArray(this.newList[index])) {
            this.newList[index].forEach((item, i) => {
              let spec = {}
              // spec['id'] = this.specification[i].items[index].itemId
              spec['id'] = this.getSpecAttr(i, i, 'id')
              spec['typeName'] = this.getKey(item)
              spec['name'] = item[this.getKey(item)]
              arr.push(spec)
            })
          } else {
            let spec = {}
            spec['id'] = this.specification[0].items[index].itemId
            spec['typeName'] = this.getKey(this.newList[index])
            spec['value'] = this.newList[index][this.getKey(this.newList[index])]
            arr.push(spec)
          }
          let obj = {}
          obj['specInfo'] = arr
          obj['name'] = this.setName(this.newList[index])
          obj['goodsPrice'] = ''
          obj['goodsNumber'] = ''
          obj['picUnique'] = ''
          obj['marketPrice'] = ''
          obj['goodsUpc'] = ''
          obj['goodsCode'] = ''
          obj['goodsWeight'] = ''
          obj['uploadObj'] = {}
          obj['childProductId'] = '' + uuid(16, 16)
          obj['childProductSpec'] = this.getChildProductSpec(index)

          this.childProductArray.push(obj)
        }
        console.log(this.oldTableData)
        if (this.oldTableData.length) {
          this.verification()
        }
        console.log(this.childProductArray)
      },
      // 获取childProductArray的childProductSpec属性
      getChildProductSpec (index) {
        const obj = {}
        const that = this
        this.specification.forEach((item, specIndex) => {
          obj[item.name] = that.getSpecAttr(specIndex, index, 'name')
        })
        return obj
      },
      // 新旧数据校验
      verification () {
        this.childProductArray.forEach((item, index) => {
          this.oldTableData.forEach((ele) => {
            if (item.name === ele.name) {
            // if (this.verificationName(item.name, ele)) {
              this.childProductArray.splice(index, 1, ele)
            }
          })
        })
      },
      // 校验name相同的数据
      verificationName (name, arr) {
        let nameArr = name.split('+')
        let status = true
        if (nameArr.length !== arr.length) return false
        arr.forEach(item => {
          if(item.items.indexOf(name) < 0){
            return false
          }
        })
        return status
      },
      // 获取对象的key
      getKey (item) {
        return Object.keys(item)[0]
      },
      // 设置后台需要的skun，Name字段方法
      setName (item) {
        let name = ''
        if (Array.isArray(item)) {
          item.forEach((ele, index) => {
            if (index < item.length - 1) {
              name += ele[this.getKey(ele)] + '+'
            } else {
              name += ele[this.getKey(ele)]
            }
          })
          return name
        } else {
          return item[this.getKey(item)]
        }
      },
      //笛卡尔积算法
      descartes(array){
        console.log(array)
        if( array.length < 2 || (array.length === 2 && array[1].length === 0) ) {
          return array[0] || []
        }
        return [].reduce.call(array, function(col, set) {
          let res = []
          col.forEach(function(c) {
            set.forEach(function(s) {
              var t = [].concat( Array.isArray(c) ? c : [c] )
              t.push(s)
              res.push(t)
          })})
          console.log(res)
          return res
        })
      },
      // 拖拽
      onDrop (dropResult) {
        this.specification = applyDrag(this.specification, dropResult)
        this.processing()
      },
      onInnerDrop (item, dropResult) {
        const newItems = [...this.specification]
        const index = newItems.indexOf(item)
        newItems[index].items = applyDrag(newItems[index].items, dropResult)
        this.specification = newItems
        this.processing()
      },
      /*
        计算属性的乘积
        @params
          specIndex 规格项目在 advancedSpecification 中的序号
      */
      countSum (specIndex) {
        let num = 1
        this.specification.forEach((item, index) => {
          if (index >= specIndex && item.items.length) {
            num *= item.items.length
          }
        })
        return num
      },

      // 根据传入的条件，来判断是否显示该td
      showTd (specIndex, index) {
        // 如果当前项目下没有属性，则不显示
        if (!this.specification[specIndex]) {
          return false
        } else if (index % this.countSum(specIndex + 1) === 0) {
          return true
        } else {
          return false
        }
      },
      normFile (e) {
        if (Array.isArray(e)) {
          return e
        }
        return e && e.fileList
      },
      childByValue (data, index) {
        if (data.length === 0 || data.length === undefined) return
        if (!data[0].name) return
        this.childProductArray[index].picUnique = data[0].name
        this.childProductArray[index].url = data[0].thumbUrl
        this.childProductArray[index].uploadObj = data[0]
      },
      /*
        根据传入的属性值，拿到相应规格的属性
        @params
          specIndex 规格项目在 advancedSpecification 中的序号
          index 所有属性在遍历时的序号
      */
      getSpecAttr (specIndex, index, type) {
        if (type == 'id') {
          console.log(specIndex)
        }
        // 获取当前规格项目下的属性值
        const currentValues = this.specification[specIndex].items
        let indexCopy

        // 判断是否是最后一个规格项目
        if (this.specification[specIndex + 1] && this.specification[specIndex + 1].items.length) {
          indexCopy = index / this.countSum(specIndex + 1)
        } else {
          indexCopy = index
        }

        const i = Math.floor(indexCopy % currentValues.length)

        if (i.toString() !== 'NaN') {
          if (type === 'name') {
            return currentValues[i].name
          } else {
            return currentValues[i].itemId
          }
          // return this.specification[specIndex].items[i][type]
        } else {
          return ''
        }
      },
      // 打开批量设置
      openBatch (type) {
        this.currentType = type
        this.isSetListShow = false
      },
      // 批量设置
      setBatch () {
        if (typeof this.batchValue === 'string') {
          this.$message.warning('请输入正确的值')
          return
        }
        this.childProductArray.forEach(item => {
          item[this.currentType] = this.batchValue
        })

        this.cancelBatch()
      },
      // 取消批量设置
      cancelBatch () {
        this.batchValue = ''
        this.currentType = ''
        this.isSetListShow = true
      },
    }
  }
</script>

<style lang="scss">
  * {
    list-style: none;
    padding: 0;
    border: 0;
  }
  #app {
    .example {
      margin-top: 50px;
      .code-area {
        width: 100%;
        min-height: 300px;
        box-sizing: border-box;
        padding: 20px;
        border: 2px dashed #c00;
        font-size: 14px;
        line-height: 1.6;
      }
    }
    .specification {
      display: inline-block;
      vertical-align: top;
      width: 100%;
      .spec-list {
        background-color: #fff;
        border: 1px solid #d8d8d8;
        padding: 10px;
        .item {
          margin-top: 5px;
          &:first-child {
            margin-top: 0;
          }
          .name {
            background: #f3f6fb;
            padding: 2px 8px;
            text-align: right;
            overflow: hidden;
            .a-input {
              float: left;
              width: 150px;
            }
            .icon {
              display: none;
              color: #929292;
              cursor: pointer;
              &:hover {
                color: #880000;
              }
            }
            &:hover {
              .icon {
                display: inline-block;
              }
            }
          }
          .values {
            .tag {
              margin: 8px 0 0 8px;
              background-color: #ecf5ff;
              border-color: #d9ecff;
              display: inline-block;
              height: 32px;
              padding: 0 10px;
              line-height: 30px;
              font-size: 12px;
              color: #409EFF;
              border-width: 1px;
              border-style: solid;
              border-radius: 4px;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              white-space: nowrap;
            }
            .add-attr {
              display: inline-block;
              vertical-align: top;
              margin: 6px 0 0 11px;
              .el-input {
                width: 200px;
                margin: 2px 0 0 4px;
              }
            }
          }
        }
        .add-spec {
          font-size: 13px;
        }
      }
    }
    .stock-table {
      width: 100%;
      padding: 0;
      border-collapse: separate;
      border-color: #dfe6ec;
      border-style: solid;
      border-width: 1px 0 0 1px;
      background-color: #fff;
      td,
      th {
        padding: 4px 10px;
        border-bottom: 1px solid #dfe6ec;
        border-right: 1px solid #dfe6ec;
      }
      th {
        line-height: 30px;
        background-color: #eef1f6;
      }
      .link {
        cursor: pointer;
        color: #0088ee;
        font-size: 13px;
        margin-left: 6px;
      }
      .wh-foot {
        line-height: 30px;
        .label {
          display: inline-block;
          vertical-align: top;
        }
        .set-list {
          display: inline-block;
          vertical-align: top;
          font-size: 0;
          .set-item {
            display: inline-block;
            vertical-align: top;
            margin-left: 15px;
            font-size: 13px;
            cursor: pointer;
            color: #0088ee;
          }
        }
        .set-form {
          display: inline-block;
          margin-left: 10px;
          .el-input {
            display: inline-block;
            width: 120px;
          }
          .set-btn {
            display: inline-block;
            padding: 0 2px;
            font-size: 15px;
            cursor: pointer;
            &.blue {
              color: #0088ee;
            }
            &.red {
              color: #cc0000;
            }
          }
        }
        .right {
          float: right;
        }
        .text {
          font-size: 13px;
        }
      }
    }
  }
</style>
