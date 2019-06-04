<template>
	<div id="tags-view-container" class="tags-view-container">
		<!-- <scroll-pane ref = "scrollPane" class="tags-view-wrapper"> -->
			<!-- https://vuejs.org/v2/guide/events.html#Mouse-Button-Modifiers -->
			<!-- https://vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components -->
			<router-link
			  v-for="tag in visitedViews"
			  ref="tag"
			  :key="tag.path"
			  :class = "isActive(tag)?'active' : ''"
			  :to="{ path: tag.path, query: tag.query, fullpath: tag.fullPath}"
			  tag ="span"
			  class="tags-view-item"
			  @click.middle.native="closeSelectedTag(tag)"
			>
			  {{ generateTitle(tag.title) }}
			  <span v-if="!tag.meta.affix" class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)"></span>
			</router-link>	
		<!-- </scroll-pane>	 -->
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
	data(){
		return {
			// visible: false,
			affixTags: []
		}
	},
	computed: {
		visitedViews(){
			return this.$store.state.tagsView.visitedViews
		},
		routes(){
			return this.$store.state.permission.routes
		}	
	},
	watch: {
		$route(){
			this.addTags(),
			this.moveToCurrentTag()
		},
		// visible(value){
		// 	if(value){
		// 		document.body.addEventListener('click', this.closeMenu)
		// 	} else {
		// 		document.body.removeEventListener('click', this.closeMenu)
		// 	}
		// }	
	},
	mounted(){
		this.initTags()
		this.addTags()
	},	
    methods: {
		generateTitle,
		isActive(route){
			return route.path === this.$route.path
		},
		filterAffixTags(routes, basePath = '/'){
			let tags = []
			routes.forEach(route => {
				if(route.meta && route.meta.affix){
					console.log(route)
					// path.resolve()将路径或者路径序列转换成绝对路径
					const tagPath = path.resolve(basePath, route.path)
					tags.push({
						fullPath: tagPath,
						path: tagPath,
						name: route.name,
						meta: { ...route.meta }
					})
				}
				if(route.children){
					const tempTags = this.filterAffixTags(route.children, route.path)
					if(tempTags.length >= 1){
						tags = [...tags, ...tempTags]
					}
				}
			})
			return tags
		},
		initTags(){
			const affixTags = this.affixTags = this.filterAffixTags(this.routes)
			for(const tag of affixTags){
				// Must have tag name
				if(tag.name){
					this.$store.dispatch('tagsView/addVisitedView', tag)
				}
			}
		},
		addTags(){
			const { name } = this.$route
			if(name){
				this.$store.dispatch('tagsView/addView', this.$route)
			}
			return false
		},
		moveToCurrentTag(){
			const tags = this.$refs.tag
			this.$nextTick(() => {
				for(const tag of tags){
					if(tag.to.path === this.$route.path){
						this.$refs.scrollPane.moveToTarget(tag)
						// when query is different then update
						if(tag.to.fullPath !== this.$route.fullPath){
							this.$store.dispatch('tagsView/updateVisitedView',this.$route)
						}
						break
					}
				}
			})
		},
		closeSelectedTag(view){
			this.$store.dispatch('tagsView/delAllViews', view).then(({ visitedViews }) => {
				if(this.isActive(view)){
					this.toLastView(visitedViews, view)
				}
			})
		},
		toLastView(visitedViews, view){
			const latestView = visitedViews.slice(-1)[0]
			if(latestView){
				this.$router.push(latestView)
			} else {
				// 现在，如果没有标签打开时，则默认重定向的到home页
				// 你可以根据自己的实际情况调整
				if(view.name === 'Dashboard'){
					// 重新加载home页
					this.$router.replace({ path: '/redirect' + view.fullPath })
				} else {
					this.$router.push('/')
				}
			}
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
		}
	}
}
</style>