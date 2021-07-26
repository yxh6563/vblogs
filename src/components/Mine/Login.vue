<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <h1>欢迎登录</h1>
                    <form @submit.prevent="onSubmit">
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" class="form-control" v-model="email" />
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" class="form-control" v-model="password" />
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                        <router-link to="/register">没有账号，请注册</router-link>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return{
          email:'',
          password:''
      }
  },
  //组件内导航守卫
  beforeRouterEnter:(to,from,next) =>{
      next(vm => vm.$store.dispatch("setUser",null))
  },
  methods:{
      onSubmit(){
          this.$http.get('http://localhost:3000/doLogin')
           .then(res => {
             //实现过滤
             let result = res.data.filter((value) =>{
               return value.email === this.email && value.password === this.password
             })
             //判断result的长度是否大于0
             if(result !=null && result.length > 0){
               this.$store.dispatch("setUser",result[0].email);
               this.$router.push({path:'/'})
             }
             else{
               this.$store.dispatch("setUser",null);
               alert("账号或密码错误!")
             }
           })
      }
  }
}
</script>

<style>
h1{
  text-align: center;
}
</style>