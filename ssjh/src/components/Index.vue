<template>
    <div id="main">
       <home-left></home-left>
       <router-view></router-view>
       
    </div>
</template>
<script>
  import HomeLeft from './section/LeftBar.vue'
  export default {
    name: 'HomeIndex',
    components: { HomeLeft},
    
  }
</script>
<style scoped>
 #main{
    width:1200px;
    height:800px;
    margin:20px auto;  
    position: relative;
}
</style>