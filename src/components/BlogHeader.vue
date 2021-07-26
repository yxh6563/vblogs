<template>
  <div class="blog-header">
		  <div class="header"><span>{{title}}</span></div>
  </div>
</template>

<script>

export default {
	name: 'blog-header',
	data() {
		return {
			// blogname: ''
		}
	},
	props:{
		title: String
	}
}
	
</script>

<style scoped>

@import '../../static/css/nav.css'

</style>