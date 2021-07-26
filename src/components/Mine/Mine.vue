<template>
	<ul class="list-group">
	 <li class="list-group-item disabled" aria-disabled="true">
	   <div>
		<img src="../../../src/assets/my.jpg"/>
	   </div>
	   {{currentUser}}
	</li>
    <li class="list-group-item">
		<i class="iconfont icon-wenzhang"></i>
		我的文章
	</li>
    <li class="list-group-item">
		<i class="iconfont icon-xiaoxi"></i>
		我的消息
	</li>
    <li class="list-group-item">
		<router-link to="/login">
		<i class="iconfont icon-tuichu"></i>
		退出登录
		</router-link>
	</li>
</ul>
</template>
<script>
import BlogHeader from '../../components/BlogHeader.vue'
	export default {
		name: 'mine',
		data () {
			return {
				pageTitle: '个人中心'
			}
		},
		computed:{
			isLogin:function(){
				return this.$store.getters.getIsLogin;
			},
			currentUser:function(){
				return this.$store.getters.getCurrentuser;
			}
		},
		components:{
			BlogHeader
		}
	}
</script>

<style scoped>
.list-group{
	margin-top: 20px;
}
div{
	width:100px;
	height: 100px;
	border-radius: 50%;
	overflow: hidden;
	margin-left: 10px;
}
div img{
	width: 100%;
}
</style>
