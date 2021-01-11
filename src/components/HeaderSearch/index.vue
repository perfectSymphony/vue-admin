<template>
  <div :class="{'show': show}" class="header-search">
    <svg-icon class="search-icon" icon-class="search" @click.stop="click" />
    <el-select
      ref="headerSearchSelect"
      v-model="search"
      :remote-method="querySearch"
      filterable
      remote
      default-first-option
      class="header-search-select"
      placeholder="搜索页面"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join('>')"
      />
    </el-select>
  </div>
</template>

<script>

import Fuse from 'fuse.js'
import path from 'path'
import i18n from '@/lang'

export default {
  name: 'Search',
  data() {
    return {
      show: false,
      search: '',
      options: [],
      fuse: undefined,
      searchPool: []
    }
  },
  computed: {
    lang() {
      return this.$store.getters.language
    },
    routes() {
      return this.$store.getters.permission_routes
    }
  },
  watch: {
    // Vehicle veh1 = new Vehicle();
    // 创建一个对象，也就是实例化
    // Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性。
    lang() {
      this.searchPool = this.generateRoutes(this.routes)
    },
    routes() {
      this.searchPool = this.generateRoutes(this.routes)
    },
    searchPool(list) {
      this.initFuse(list)
    },
    show(value) {
      if (value) {
        document.body.addEventListener('click', this.close)
      } else {
        document.body.removeEventListener('click', this.close)
      }
    }
  },
  mounted() {
    this.searchPool = this.generateRoutes(this.routes)
  },
  methods: {
    click() {
      this.show = !this.show
      if (this.show) {
        this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.focus()
      }
    },
    close() {
      this.$refs.headerSearchSelect && this.$refs.headerSearchSelect.blur()
      this.options = []
      this.show = false
    },
    change(val) {
      this.$router.push(val.path)
      this.search = ''
      this.options = []
      this.$nextTick(() => {
        this.show = false
      })
    },
    initFuse(list) {
      // list 为搜索的所有数据
      this.fuse = new Fuse(list, {
        shouldSort: true,
        Threshold: 0.5,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: [{
          name: 'title',
          weight: 0.7
        }, {
          name: 'path',
          weight: '0.3'
        }]
      })
    },
    generateRoutes(routes, basePath = '/', prefixTitle = []) {
      let res = []

      for (const router of routes) {
        // 跳过隐藏的路由
        if (router.hidden) {
          continue
        }

        const data = {
          path: path.resolve(basePath, router.path),
          title: [...prefixTitle]
        }

        if (router.meta && router.meta.title) {
          // 生成国际化的标题
          const i18ntitle = i18n.t(`route.${router.meta.title}`)

          data.title = [...data.title, i18ntitle]

          if (router.redirect !== 'noRedirect') {
            // only push the routes with title
            // special case: need to exclude parent router without redirect
            res.push(data)
          }
        }

        // 递归遍历子路由
        if (router.children) {
          const temRoutes = this.generateRoutes(router.children, data.path, data.title)

          if (temRoutes.length >= 1) {
            res = [...res, ...temRoutes]
          }
        }
      }
      return res
    },
    querySearch(query) {
      if (query !== '') {
        this.options = this.fuse.search(query)
      } else {
        this.options = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .header-search {
    font-size: 0 !important;

    .search-icon {
      cursor: pointer;
      font-size: 18px;
      vertical-align: middle;
    }

    .header-search-select {
      font-size: 18px;
      transition: width 1.8s;
      transition-timing-function: cubic-bezier(.71,-.46,.29,1.46);
      width: 0;
      overflow: hidden;
      background: transparent;
      border-radius: 0;
      display: inline-block;
      vertical-align: middle;

      ::v-deep .el-input__inner {
        border-radius: 0;
        border: 0;
        padding-left: 0;
        padding-right: 0;
        width: 650px;
        box-shadow: none !important;
        border-bottom: 1px solid #d9d9d9;
        vertical-align: middle;
      }
    }

    &.show {
      .header-search-select {
        width: 650px;
        margin-left: 10px;
      }
    }
  }
</style>
