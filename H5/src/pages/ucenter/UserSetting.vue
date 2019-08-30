<template>
     <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="设置" class="header" > </x-header>
        <group class="setting1">
            <cell title="意见反馈" is-link link="/feedback"></cell>
            <cell title="关于" is-link link="/about"></cell>
            <cell title="清楚缓存" is-link>15mb</cell>
        </group>
        <group class="setting2">
             <x-button class="exit" type="default" action-type="button"  text="退出登录"></x-button>    
        </group>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
   .exit{
       color:brown;
       background: #fff;
       padding:0.3rem 0.7rem;
   }
  .g-window .weui-cell{
      padding:0.8rem  0.7rem ;
  }
   .setting1,.setting2{
       background: #fff;
       margin-top: 0.6rem;
   }
  
</style>
