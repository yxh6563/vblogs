<template>
  <div id="add-volog">
    <h2>添加博客</h2>
    <form v-if="!submited">
      <label>博客主题:</label>
          <input type="text" v-model="blog.title" required/>
      <label>博客内容:</label>
          <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label>博客分类:</label>
        <label>Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categorys"/>
        <label>Angulard4</label>
        <input type="checkbox" value="Angulard4" v-model="blog.categorys"/>
        <label>Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categorys"/>
        <label>React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categorys"/>
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <div v-if="submited">
      <h3>您的博客发布成功！</h3>
    </div>
    <hr>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客标题:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categorys">{{category}}</li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-volog',
  data(){
    return{
      blog:{
        title: '',
        content: '',
        categorys:[],
        author:""
      },
      authors:["Henry","July","Tom"],
      submited:false
    }
  },
  methods:{
    post:function(){
      this.$http.post("http://localhost:3000/posts",this.blog)
        .then(function(data){
          console.log(data);
          this.submited = true;   //点击添加博客按钮时，submited为true,form表单为false，会隐藏，此时您的博客发布成功！为true，则会显示
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#add-volog *{
  box-sizing: border-box;
}
#add-volog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,select{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkboxes label{
  display: inline-block;
  margin: 0;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 10px;
}
</style>

