<template>
    <div id="app">
        <blogfooter></blogfooter>
        <router-view></router-view>
    </div>
</template>
<script>
import Footer from './components/Footer.vue'
export default {
    name:'app',
    components:{
        "blogfooter":Footer
    }
}
</script>