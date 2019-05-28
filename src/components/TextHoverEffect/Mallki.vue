<template>
	<a :class="className" class="link--mallki" href="#">
		{{ text }}
	    <span :data-letters="text" />
	    <span :data-letters="text" />		
	</a>
</template>
<script>
export default {
	name: 'Mallki',
	data(){
		return {

		}
	},
	props: {
		className: {
			type: String,
			default: ''
		},
		text: {
			type: String,
			default: 'vue-admin'
		}
	}
}
</script>
<style>
	
</style>