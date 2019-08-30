<template>
   <div class="g-inherit m-article">
            <x-header  :left-options="{backText: ' '}" >
                   验证消息
                <a slot="left"></a>
            </x-header>
            <group class="v_l">
                <cell
                  class="v_l_c" 
                  title="消息提醒"
                  inline-desc="9:01 李思思请求加为好友"
                  value="已失效"
                >
                  <img class="icon" slot="icon" width="50" src="/webdemo/h5/res/images/verify.png" >
                  <x-button type="primary" class="agre_btn" >同意</x-button>
                </cell>
            </group>
            <group class="v_l">
                <cell
                  class="v_l_c" 
                  title="消息提醒"
                  inline-desc="9:01 李思思请求加为好友"
                  value="已失效"
                >
                  <img class="icon" slot="icon" width="50" src="/webdemo/h5/res/images/verify.png" >
                </cell>
            </group>
            <group class="v_l">
                <cell
                  class="v_l_c" 
                  title="消息提醒"
                  inline-desc="9:01 李思思请求加为好友"
                  value="已通过"
                >
                  <img class="icon" slot="icon" width="50" src="/webdemo/h5/res/images/verify.png" >
                </cell>
            </group>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
   .v_l{
       margin:0.6rem auto;
       background: #fff;
    
   }
   .v_l_c{
          font-size:1.2rem;
   }
   .agre_btn{
       width:6rem;
   }
</style>
