<template>
  <div class="blog-header">
		  <div class="header"><span>{{title}}</span></div>
  	<!-- <div class="header"><span>{{this.$store.state.title}}</span></div>
  	<div class="dialog"><input type="text" placeholder="搜索文章" v-model="blogname"></div>
  	<div class="btn-plus"><span style="font-size:1.4rem"><i class="iconfont icon-shousuo" aria-hidden="true"></i></span></div> -->
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