<template>
  <div>
     <tabbar>
      <tabbar-item selected link="/session">
        <img slot="icon" src="">
        <span slot="label">消息</span>
      </tabbar-item>
      <tabbar-item  link="/contacts">
        <img slot="icon" src="">
        <span slot="label">通讯录</span>
      </tabbar-item>
      <tabbar-item  link="/planindex">
        <img slot="icon" src="">
        <span slot="label">计划集市</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/news">
        <img slot="icon" src="">
        <span slot="label">资讯</span>
      </tabbar-item>
        <tabbar-item  link="/general">
        <img slot="icon" src="">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  data () {
    return {
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  computed: {
    
    
  },
  methods: {
  
  }
}
</script>

<style type="text/css">
 
</style>
