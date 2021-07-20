<template>
  <!--页脚-->
	<footer class="choice-box">
		<div class="home-btn">
		<!-- <a @click="toList"> -->
		<router-link to="/">
        <!-- <span :class="{on: '/show'===$route.path}" @click="goTo('/show')" > -->
			<div class="icon-style"><i class="iconfont  icon-faxian" aria-hidden="true"></i></div>
			<div class="text-style">发现</div>
        <!-- </span> -->
		</router-link>
		</div>
		<div class="talk-btn">
			<!-- <a @click="toWrite"> -->
            <!-- <span :class="{on: '/add'===$route.path}" @click="goTo('/add')"> -->
            <router-link to="/add">
			写文章
			</router-link>
        	<!-- </span> -->
		</div>
		<div class="user-btn">
			<!-- <a @click="toMy"> -->
            <!-- <span :class="{on: '/usercenter'===$route.path}" @click="goTo('/usercenter')"> -->
			<router-link to="/usercenter">
			<div class="icon-style">
            	<i class="iconfont  fa-user-circle" aria-hidden="true"></i>
	            <span>
	            	<i class="iconfont  icon-my" aria-hidden="true" style="color:red; font-size:0.5rem"></i>
	            </span>
            </div>
            <div class="text-style">我的</div>
        	<!-- </span> -->
			</router-link>
		</div>
	</footer>
</template>

<script>

export default {
	name: 'blog-footer',
	data() {
		return {
			// totalmess: 0,
			// currentindex: 1
		}
	},

	methods: {
		goTo(path){
			this.$router.replace(path)
		}
	}
}
	
</script>

<style scoped>

@import '../../static/css/footer.css'

</style>