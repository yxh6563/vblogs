<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.content}}</article>
    <p>作者:{{blog.author}}</p>
    <p>分类:</p>
    <ul>
      <li v-for="category in blog.categorys">
        {{category}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'single-blog',
  data(){
      return{
          id:this.$route.params.id,
          blog:{}
      }
  },
  created(){
      this.$http.get('http://localhost:3000/posts/'+this.id)
      .then(function(data){
          this.blog = data.body;
      })
  }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
}
</style>
