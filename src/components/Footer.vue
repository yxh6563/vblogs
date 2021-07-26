<template>
  <!--页脚-->
	<footer class="choice-box">
		<div class="home-btn">
		<router-link to="/">
			<div class="icon-style"><i class="iconfont  icon-faxian" aria-hidden="true"></i></div>
			<div class="text-style">发现</div>
		</router-link>
		</div>
		<div class="talk-btn">
            <router-link to="/addBlog">
			写文章
			</router-link>
		</div>
		<div class="user-btn">
			<router-link to="/mine">
			<div class="icon-style">
            	<i class="iconfont  fa-user-circle" aria-hidden="true"></i>
	            <span>
	            	<i class="iconfont  icon-my" aria-hidden="true" style="color:red; font-size:0.5rem"></i>
	            </span>
            </div>
            <div class="text-style">我的</div>
			</router-link>
		</div>
	</footer>
</template>

<script>
export default {
	// name: 'footer',
	data() {
		return {
		}
	},

	methods: {
		
	}
}
	
</script>

<style scoped>

@import '../../static/css/footer.css'

</style>