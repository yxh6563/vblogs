<template>
  <el-tabs type="border-card">
  <el-tab-pane label="登录">
     <div>
    <el-form ref="form" :model="form" class="login-box" :rules="rules">
      <h3 class="login-title">欢迎登录</h3>
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  </el-tab-pane>
  <el-tab-pane label="注册">
    <div>
    <el-form ref="form" :model="form" class="login-box" :rules="rules">
      <h3 class="login-title">欢迎注册</h3>
      <el-form-item label="用户名" prop="name">
        <el-input type="text" v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input type="password" v-model="form.repassword" placeholder="请输入确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">注册</el-button>
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
          name: '',
          password: '',
          repassword: ''
        },
        rules: {
          name: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            }
          ],
          password: [{
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