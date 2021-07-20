<template>
  <div id="show-blogs" v-theme:column="'narrow'">
       <!-- <div class="nav">
       <div class="dialog"> -->
         <input type="text" placeholder="搜索文章" v-model="search"/>
         <i class="iconfont icon-shousuo"></i>
         <!-- <blog-header></blog-header>
       <!-- </div>
   </div> -->
   <h1>博客总览</h1>
   <div class="single-blog" v-for="blog in filteredBlogs">
       <router-link v-bind:to="'/blog/'+ blog.id">
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
       </router-link>
       <article>
           {{blog.content | sninspect}}
       </article>
   </div>
  </div>
</template>

<script>
import BlogHeader from './BlogHeader.vue';
export default {
  components: { BlogHeader },
  name: 'show-blogs',
  data(){
      return{
          blogs:[],
          search:''
      }
  },
  created(){
      this.$http.get("http://localhost:3000/posts")
      .then(function(data){
        console.log(data);
        this.blogs=data.body;
      })
  },
computed: {
    filteredBlogs() {
        return this.blogs.filter(blog => {
            return blog.title.match(this.search)
        })
    }
},
 components : {
   BlogHeader
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;
}
#show-blogs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 70%;
    height: 40px;
    box-sizing: border-box;
    border-radius: 15px;
    margin-top: 20px;
}
.icon-shousuo{
    font-size: 35px;
    /* width: 35px;
    height: 30px; */
    color: #fff;
    margin-left: 20px;
    margin-top: 20px;
    
}
</style>
