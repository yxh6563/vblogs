<template>
  <div id="app">
      <!-- <addlog></addlog>
      <show-blogs></show-blogs> -->
      <!-- <blog-header></blog-header> -->
      <blog-footer></blog-footer>
    <router-view/>
  </div>
</template>

<script>
import Addlog from './components/Addlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'
import BlogFooter from './components/BlogFooter'
export default {
  name: 'App',
  components: { 
    Addlog,
    ShowBlogs,
    BlogHeader,
    BlogFooter
    }
}
</script>

<style>

</style>
