<template>
  <div>
     <home-header id="header"></home-header>
     <router-view></router-view>
     <home-footer id="footer"></home-footer>
  </div>
</template>
<script>
import HomeHeader from './Header.vue'
import HomeFooter from './Footer.vue'
import HomeIndex from './Index.vue'

export default {
  name: 'HomeMain',
  components: { HomeHeader , HomeFooter},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>

#header{
    width:100%;
    height:80px;
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
}
#footer{
    width:100%;
    height:47px;
    position:fixed;
    bottom:0px;
    font-size:14px;
   	background-color: #f0f0f0;
}
</style>
