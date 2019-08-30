<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="积分中心" class="header" >
            <p  class="getback" slot="right" @click="toScoreList()">明细</p>     
        </x-header>
        <div >
            <img src="/webdemo/h5/res/images/banner_jfzx.png" alt="" class="score_banner">
        </div>
        <card class="card_box">
            <div slot="content" class="flex ">
                <div class="flex score_l">
                    <div class="score_avater">
                        <img src="/webdemo/h5/res/images/ico_bi_xl.png" alt="">
                    </div>
                    <div class="score_sum">
                        <p class="score_num yellow">1688</p>
                        <p class="">积分余额</p>
                    </div>
                </div>
                <div class=" score_m">
                    <div class="score_sum">
                        <p class="score_num ">+100</p>
                        <p class="score_desc">本月赚取</p>
                    </div>
                </div>
                <div class=" score_r">
                    <div class="score_sum">
                        <p class="score_num ">-200</p>
                        <p class="score_desc">本月消费</p>
                    </div>
                </div>
              
            </div>
        </card>
        <group class="score_box">
            <cell title="积分充值" class="cell" is-link link=""></cell>
            <cell title="积分商城" class="cell" is-link link="/scoreshop"></cell>
            <cell title="赚积分" class="cell" is-link link=""></cell>
        </group>
        <p class="score_rule">积分规则</p>
    </div>
</template>
<script>
export default {
    methods : {
        toScoreList () {
               this.$router.push({path:'/scorelist'}); 
        }
    }
    
}
</script>
<style scoped>
.weui-panel{
    margin-top:0;
}
 .score_banner{
     width:100%;
 }
 .score_box{
     background: #fff;
     margin-top:0.6rem;
 }
 .score_avater{
     display: flex;
     align-items: center;
     justify-content: center;
     background: #F9F5EB;
     width:3.5rem;
     height:3.5rem;
     border-radius: 50%;
     margin-right:1rem;
    

 }
 .card_box{
     padding:0.75rem;
 }
 .score_l{
     width:40%;
     border-right:1px solid rgba(238,238,238,1);
     padding-right:2rem;
 }
 .score_l,.score_m,.score_r{
     text-align: center;
 }
 .score_num{
    font-size:1.2rem;
    line-height:2.1rem;
    color:#666;
  
 }
 .yellow{
      color:rgba(251,140,0,1);
 }
 .score_desc{
     color:#666;
 }
 .score_sum{
     
 }
 .cell{
     padding:0.9rem 0.7rem;
 }
 .score_rule{
    font-size:0.9rem;
    font-family:Source Han Sans CN;
    color:#666;
    text-align: center;
    position: fixed;
    bottom:1.5rem;
    width:100%;
 }
</style>
