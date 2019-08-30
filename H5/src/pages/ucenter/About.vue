<template>
     <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="关于"> </x-header>
        <div class="feedback1">
             <p class="about_title">关于上上计划</p>
             <p class="about_content">12月3日晚，七乐彩第2018142期开奖，在361万元高奖池的助力下，中出2注单注奖金高达290万元的超值一等奖。福建彩民有幸揽获其中1注，
                 中奖彩票是一张11个号码的复式票，击中开奖的7个基本号，不仅中得1注290万元超值一等奖，还中得其它一些奖项，共获奖金294万元。
                12月4日，省福彩中心兑奖室迎来了一群欢天喜地的朋友，他们就是在前一天晚上中得七乐彩294万大奖的福州合买团彩民，而代表他们领奖的是投注站负责人、合买团发起人周女士。
            </p>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return  {
            
        }
    }
}
</script>
<style scoped>
  .g-window .weui-cell{
      padding:0.8rem  0.7rem ;
  }
   .feedback1{
       background: #fff;
       margin-top: 0.6rem;
       padding: 1rem 1.5rem;
       color:#000;
   }
   .about_title{
       font-size:1.6rem;
       text-align: center;
   }
   .about_content{
       font-size:1.2rem;
   }
</style>
