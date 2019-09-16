<template>
  <div id="tags-view-container" class="tags-view-container">
    <scroll-pane ref="scrollPane" class="tags-view-wrapper">
      <!-- https://vuejs.org/v2/guide/events.html#Mouse-Button-Modifiers -->
      <!-- https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components -->
      <!-- https://vuejs.org/v2/guide/events.html -->
      <router-link
        v-for="tag in visitedViews"
        ref="tag"
        :key="tag.path"
        :class="isActive(tag)?'active' : ''"
        :to="{ path: tag.path, query: tag.query, fullpath: tag.fullPath}"
        tag="span"
        class="tags-view-item"
        @click.middle.native="closeSelectedTag(tag)"
        @contextmenu.prevent.native="openMenu(tag, $event)"
      >
        {{ generateTitle(tag.title) }}
        <span v-if="!tag.meta.affix" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
      </router-link>
    </scroll-pane>
    <ul v-show="visible" :style="{ left: left +'px', top:top + 'px' }" class="contextmenu">
      <li @click="refreshSelectedTag(selectedTag)">
        {{ $t('tagsView.refresh') }}
      </li>
      <li v-if="!(selectedTag.meta && selectedTag.meta.affix)" @click="closeSelectedTag(selectedTag)">
        {{ $t('tagsView.close') }}
      </li>
      <li @click="closeOthersTags">
        {{ $t('tagsView.closeOthers') }}
      </li>
      <li @click="closeAllTags(selectedTag)">
        {{ $t('tagsView.closeAll') }}
      </li>
    </ul>
  </div>
</template>
<script>
import ScrollPane from './ScrollPane'
import { generateTitle } from '@/utils/i18n'
import path from 'path'

export default {
  name: 'TagsView',
  components: {
    ScrollPane
  },
  data() {
    return {
      top: 0,
      left: 0,
      visible: false,
      affixTags: [],
      selectedTag: {}
    }
  },
  computed: {
    visitedViews() {
      return this.$store.state.tagsView.visitedViews
    },
    routes() {
      return this.$store.state.permission.routes
    }
  },
  watch: {
    $route() {
      this.addTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  },
  methods: {
    generateTitle,
    isActive(route) {
      return route.path === this.$route.path
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          // path.resolve()将路径或者路径序列转换成绝对路径
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    initTags() {
      const affixTags = this.affixTags = this.filterAffixTags(this.routes)
      for (const tag of affixTags) {
        // Must have tag name
        if (tag.name) {
          this.$store.dispatch('tagsView/addVisitedView', tag)
        }
      }
    },
    addTags() {
      const { name } = this.$route
      if (name) {
        this.$store.dispatch('tagsView/addView', this.$route)
      }
      return false
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)
            // when query is different then update
            if (tag.to.fullPath !== this.$route.fullPath) {
              this.$store.dispatch('tagsView/updateVisitedView', this.$route)
            }
            break
          }
        }
      })
    },
    closeSelectedTag(view) {
      this.$store.dispatch('tagsView/delView', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
        }
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag)
      this.$store.dispatch('tagsView/delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags(view) {
      this.$store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
        if (this.affixTags.some(tag => tag.path === view.path)) return
        this.toLastView(visitedViews, view)
      })
    },
    refreshSelectedTag(view) {
      this.$store.dispatch('tagsView/delCachedView', view).then(() => {
        const { fullPath } = view
        this.$nextTick(() => {
          this.$router.replace({
            path: '/redirect' + fullPath
          })
        })
      })
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView)
      } else {
        // 现在，如果没有标签打开时，则默认重定向的到home页
        // 你可以根据自己的实际情况调整
        if (view.name === 'Dashboard') {
          // 重新加载home页
          this.$router.replace({ path: '/redirect' + view.fullPath })
        } else {
          this.$router.push('/')
        }
      }
    },
    // https://vuejs.org/v2/guide/events.html
    openMenu(tag, e) {
      const menuMinWidth = 105
      // console.log(this)
      // getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
      // 语法：这个方法没有参数。
      // offsetLeft --> 元素左边到视窗左边的距离
      const offsetLeft = this.$el.getBoundingClientRect().left
      const offsetWidth = this.$el.offsetWidth // 该容器的宽度
      const maxLeft = offsetWidth - menuMinWidth // left boundary
      const left = e.clientX - offsetLeft + 15 // 15: margin right

      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      this.visible = false
    }
  }
}

</script>
<style lang="scss" scoped>

// https://vue-loader-v14.vuejs.org/zh-cn/features/scoped-css.html
.tags-view-container {
	height: 34px;
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid #d8dce5;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
	.tags-view-wrapper {
		.tags-view-item {
			display: inline-block;
			position: relative;
			cursor: pointer;
			height: 26px;
			line-height: 26px;
			border: 1px solid #d8dce5;
			color: #495060;
			background: #fff;
			padding: 0 8px;
			font-size: 12px;
			margin-left: 5px;
			margin-top: 4px;
			&:first-of-type {
				margin-left: 15px;
			}
			&:last-of-type {
				margin-right: 15px;
			}
			&.active {
				background-color: #42b983;
				color: #fff;
				border-color: #42b983;
				&::before {
					content:  '';
					background: #fff;
					display: inline-block;
					width: 8px;
					height: 8px;
					border-radius: 50%;
					position: relative;
					margin-right: 2px;
				}
			}
		}
	}
	.contextmenu {
		margin: 0;
		background: #fff;
		z-index: 3000;
		position: absolute;
		list-style-type: none;
		padding: 5px 0;
		border-radius: 4px;
		font-size: 12px;
		font-weight: 400;
		color: #333;
		box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
		li {
			margin: 0;
			padding: 7px 16px;
			cursor: pointer;
			&:hover {
				background: #eee;
			}
		}
	}
}
</style>

<style lang="scss">
	.tags-view-wrapper{
		.tags-view-item {
			.el-icon-close {
				width: 16px;
				height: 16px;
				vertical-align: 2px;
				border-radius: 50%;
				text-align: center;
				transition: all .3s cubic-bezier(.645, .045, .355, 1);
				transition-origin: 100% 50%;
				&:before {
					transform: scale(.6);
					display: inline-block;
					vertical-align: -3px;
				}
				&:hover {
					background-color: #b4bccc;
					color: #fff;
				}
			}
		}
	}
</style>
