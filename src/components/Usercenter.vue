<template>
	<div>
		<blog-header :title="pageTitle"></blog-header>
		<div class="usercenter">
			<!-- <router-link> -->
				<div class="user">
					<div class="userimg"><img v-bind:src="'../../static/images/' + user.icon"/></div>
					<div class="username"><span>{{user.name}}</span></div>
				</div>
			<!-- </router-link>
			<router-link> -->
				<div class="myblog-plus">
					<i class="iconfont icon-wenzhang" aria-hidden="true"></i>
					&nbsp;&nbsp;&nbsp;&nbsp;我的文章
				</div>
			<!-- </router-link>
			<router-link> -->
				<div class="myblog-plus mymess-plus">
					<i class="iconfont icon-xiaoxi" aria-hidden="true"></i>
					&nbsp;&nbsp;&nbsp;我的消息
					<!-- <span v-if=" this.$store.state.totalmess > 0 ">
						+{{this.$store.state.totalmess}}
					</span> -->
				</div>
			<!-- </router-link> -->
			<router-link :to="{path: '/login'}">
				<div class="myblog-plus mymess-plus">
					<i class="iconfont icon-tuichu" aria-hidden="true"></i>
					&nbsp;&nbsp;&nbsp;退出登录
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import BlogHeader from '../components/BlogHeader.vue'
	export default {
		name: 'usercenter',
		data () {
			return {
				pageTitle: '个人中心',
				user: {},
				// url: 'http://localhost:3000/usercenter'
			}
		},
		components:{
			BlogHeader
		}

		// mounted: function (){
		// 	this.$http.get(this.url,{
		// 		withCredentials: true
		// 	}).then( res => {
		// 		this.user = res.body.user;
		// 		this.$store.state.totalmess = res.body.totalmess;
		// 		this.$store.state.title = '个人中心';
		// 	}).catch( error => {
		// 		console.log(error);
		// 	});
		// }
	}
</script>

<style scoped>

@import '../../static/css/usercenter.css'

</style>
