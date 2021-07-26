<template>
  <div id="single-blog">
    <h2>{{blog.title}}</h2>
    <article>{{blog.content}}</article>
    <textarea></textarea>
    <input type="button" value="评论" class="btn-ping" @click="comment"/>
    <el-button type="text"  class="btn-del" @click="delBlogs">删除</el-button>
  </div>
</template>

<script>
export default {
  name: 'single-blog',
  data(){
      return{
          id:this.$route.params.id,
          blog:{},
      }
  },
  methods:{
      comment(){
        this.$http.post("http://localhost:3000/posts/"+this.id)
           .then( res =>{
             console.log(res.data)
           })
      },
      //删除评论提示
      delBlogs(){
          this.$confirm('确定删除吗?','提示',{
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              this.$http.delete("http://localhost:3000/posts/"+this.id)
                 .then( res => {
                  console.log(res.data)
                  this.$message.success('删除成功!')
                  this.$router.push({path:'/'})
           });
          }).catch(() => {
            this.$message.info('已取消删除')
          })
      }
  },
  created(){
      this.$http.get("http://localhost:3000/posts/"+this.id)
         .then( res => {
            //  console.log(res.data)
            this.blog = res.body;
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
.btn-ping{
    background: crimson;
    color: #fff;
    margin-left: 190px;
    width: 60px;
    height: 40px;
    border:#eee;
    border-radius: 10px;
}
.btn-del{
    background: crimson;
    color: #fff;
    /* margin-left: 100px; */
    margin-left: 10px;
    width: 60px;
    height: 40px;
    border:#eee;
    border-radius: 10px;
}
textarea{
  border-radius: 5px;
}
</style>