<template>
	<div id="tags-view-container" class="tags-view-container">
		<scroll-pane ref = "scrollPane" class="tags-view-wrapper">
			<router-link
			  v-for="tag in visitedViews"
			  ref="tag"
			  :key="tag.path"
			  :class = "isActive(tag)?'active' : ''"
			  :to="{ path: tag.path, query: tag.query, fullpath: tag.fullPath}"
			  tag ="span"
			  class="tags-view-item"
			>

			</router-link>	
		</scroll-pane>	
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
		}
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
		return route.path = this.$route.path
	},
	filterAffixTags(routes, basePath = '/'){
		let tags = []
		routes.forEach(route => {
			if(route.meta && route.meta.affix){
				// path.resolve()将路径或者路径序列转换成绝对路径
				const tagPath = path.resolve(basePath, route.path)
				const tags.push({
					fullPath: tagPath,
					path: tagPath,
					name: route.name,
					meta: { ...route.meta }
				})
			}
			if(routes.children){
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
	
}

</script>
<style lang="scss" scoped>
.tags-view-container {
	height: 34px;
	width: 100%;
	background-color: #fff;
	border-bottom: 1px solid #d8dce5;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .12), 0 0 3px 0 rgba(0, 0, 0, .04);
	.tags-view-wrapper {

	}
}
</style>
