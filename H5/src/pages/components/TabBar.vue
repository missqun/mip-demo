<template>
    <tabbar>
      <tabbar-item link="/session">
        <img slot="icon" src="/webdemo/h5/res/images/bottom_xx.png">
        <img slot="icon-active" src="/webdemo/h5/res/images/bottom_xx_active.png">
        <span slot="label" >
            消息
        </span>
      </tabbar-item>
      <tabbar-item link="/contacts">
        <img slot="icon" src="/webdemo/h5/res/images/bottom_txl.png">
        <img slot="icon-active" src="/webdemo/h5/res/images/bottom_txl_active.png">
        <span slot="label">
            通讯录
        </span>
      </tabbar-item>
      <tabbar-item  link="/marketindex">
        <img slot="icon" src="/webdemo/h5/res/images/bottom_jhjs.png" class="jhjs">
        <img slot="icon-active" src="/webdemo/h5/res/images/bottom_jhjs_active.png" class="jhjs">
        <span slot="label">
          计划集市
        </span> 
      </tabbar-item>
      <tabbar-item  link="/information">
        <img slot="icon" src="/webdemo/h5/res/images/bottom_zx.png">
        <img slot="icon-active" src="/webdemo/h5/res/images/bottom_zx_active.png">
        <span slot="label">
           资讯
        </span> 
      </tabbar-item>
       <tabbar-item  link="/general">
        <img slot="icon" src="/webdemo/h5/res/images/bottom_profile.png">
        <img slot="icon-active" src="/webdemo/h5/res/images/bottom_profile_active.png"> 
         <span slot="label">
             我的
        </span>
     </tabbar-item>
    </tabbar>
  <!-- <tab class="g-header" :line-width="0">
    <tab-item @on-item-click="changePage" class="router-link">
      <router-link :to="{ name: 'session' }">最近会话</router-link>
    </tab-item>
    <tab-item @on-item-click="changePage" class="router-link">
      <router-link :to="{ name: 'contacts' }">通讯录</router-link>
    </tab-item>
    <tab-item @on-item-click="changePage" class="router-link">
      <router-link :to="{ name: 'room' }">直播间</router-link>
    </tab-item>
    <tab-item @on-item-click="changePage" class="router-link">
      <router-link :to="{ name: 'general' }">设置</router-link>
    </tab-item>
  </tab> -->
</template>

<script>
import { Tabbar, TabbarItem, Group, Cell } from 'vux'
// import { Tab, TabItem, Loading, ViewBox, XHeader } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
    Group,
    Cell
  },
  data () {
    return {
    }
  },
  computed: {
    route () {
      return this.$store.getters.route
    }
  },
  methods: {
    changePage (page) {
      console.log()
    }
  }
}
</script>
 <style >
   .weui-tabbar__icon img.jhjs{
      width:200%;
      height:200%;
      position:relative;
      left:-0.8rem;
      top:-1.6rem;
   }
   .weui-tabbar__icon-active img.jhjs{
      width:200%;
      height:200%;
      position:relative;
      left:-0.8rem;
      top:-1.6rem;
   }
   .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i, .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
     color:rgba(3,155,229,1);
   }
</style>

