<template>
	<div :style="{ zIndex:zIndex, height:height, width:width }" class="liu-item">
<!-- 		<div class="liu-info">
			<div class="liu-info-roles-container">
				
				https://www.jb51.net/article/150676.htm
				
				<slot />
			</div>
		</div> -->
		<img :src="image" class="liu-thumb">
	</div>
</template>
<script>
export default {
	name: 'liuThumb',
	props: {
		image: {
			type: String,
			required: true
		},
		zIndex: {
			type: Number,
			default: 1
		},
		width: {
			type: String,
			default: '150px'
		},
		height: {
			type: String,
			default: '150px'
		}
	}
}
</script>
<style scoped>
	.liu-item {
		width: 200px;
		height: 200px;
		border-radius: 50%;
		display: inline-block;
		position: relative;
		cursor: default; 
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	}

	.liu-thumb {
		width: 100%;
		height: 100%;
		background-size: 100%;
		border-radius: 50%;
		overflow: hidden;
		position: absolute;
		transform-origin: 95% 40%;
		transition: all 0.3s ease-in-out;
	}
	.liu-thumb:after {
		content: '';
		width: 8px;
		height:8px;
		position: absolute;
		border-radius: 50%;
		top: 40%;
		left: 95%;
		margin: -4px 0 0 -4px;
		background: radial-gradient(ellipse at center, rgba(14, 14, 14, 1) 0%, rgba(125, 126, 125, 1) 100%);
		box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);		
	}

	.liu-item:hover .liu-thumb {
		transform: rotate(-110deg);
	}

</style>