<template>
  <el-tabs type="border-card">
  <el-tab-pane label="登录">
     <div>
    <el-form ref="form" :model="form" class="login-box" :rules="rules">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.userpass" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  </el-tab-pane>
  <el-tab-pane label="注册">
    <div>
    <el-form ref="form" :model="form" class="login-box" :rules="rules">
      <h3 class="login-title">欢迎注册</h3>
      <el-form-item label="用户名" prop="username">
        <el-input type="text" v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.userpass" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input type="password" v-model="form.repassword" placeholder="请输入确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-on:click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
  </el-tab-pane>
 
</el-tabs>
</template>
<script>
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          username: '',
          userpass: '',
          repassword: ''
        },
        rules: {
          username: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }
          ],
          userpass: [{
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }],
          repassword: [{
              required: true,
              message: '请输入确认密码',
              trigger: 'blur'
            }]
        }
      }
    },
    methods:{
      submit:function(){
        let data = {'username':this.form.username,'userpass':this.form.userpass}
        //请求接口
        this.$http.get("http://localhost:3000/users",data)
          .then((res)=>{
            console.log(res);
            if(res.data == -1){
              alert("该用户不存在")
            }else if(res.data == 0){
              alert("密码输入错误")
            }
            else{
              alert("登录成功")
              // setCookie('username',this.username,1000*60)
              setTimeout(function(){
                      this.$router.push('/')
                  }.bind(this),1000)
            }
          })
        // this.$http.get("http://localhost:3000/users",{
        //   username: this.form.username,
        //   userpass: this.form.userpass
        // })
        // .then(function(data){
        //   console.log(data);
        //   this.form.username=data.body.username,
        //   this.form.userpass=data.body.userpass
        //   if(this.form.username == data.body || this.form.userpass == data.body){
        //       this.$router.push('/');
        //   }
        // }).catch(error=>{
        //   alert('账号或密码错误');
        //   console.log(error);
        // })
      },
      register:function(){
        let data ={'username': this.form.username,'userpass':this.form.userpass,'repassword':this.form.repassword}
        this.$http.post("http://localhost:3000/users",data)
        .then(res =>{
          console.log(res);
          if(res.data == 'ok'){
            alert('注册成功');
            this.form.username=''
            this.form.userpass=''
            this.form.repassword=''
          }
        })
      }
      }
  }
</script>

<style lang="css">
  .login-box {
    width: 250px;
    margin: 40px auto;
    border: 1px solid #DCDFE6;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 30px #DCDFE6;
  }

  .login-title {
    text-align: center;
  }
</style>