<template>
     <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="积分充值" class="header" > </x-header>
        <group class="feedback1" >
            <checklist title="请选择充值套餐" :max="1" label-position="left"  :options="scoreList"  class="checklist"></checklist>
        </group>
        <group class="feedback2">
             <x-input title='自定义金额' text-align="left"  v-model="sum" class="sum" placeholder="金额需为整数">
             </x-input>
            <p class="unit" >元</p>
        </group>
         <x-button class="next" type="primary" action-type="button"  text="下一步" @click.native="toRechargeDone()"></x-button> 
    </div>
</template>
<script>
export default {
    data () {
        return  {
            sum:"",
           scoreList:[
               {key: '1', value: '<span style="color:red;font-size:1.2rem;margin-right:0.5rem">10元</span><span style="color:#999;font-size:1rem;">(1000积分)</span>'},
               {key: '2', value: '<span style="color:red;font-size:1.2rem;margin-right:0.5rem">20元</span><span style="color:#999;font-size:1rem;">(2000积分)</span>'},
               {key: '3', value: '<span style="color:red;font-size:1.2rem;margin-right:0.5rem">50元</span><span style="color:#999;font-size:1rem;">(5000积分)</span>'},
               {key: '4', value: '<span style="color:red;font-size:1.2rem;margin-right:0.5rem">100元</span><span style="color:#999;font-size:1rem;">(12000积分)</span>'},
               {key: '5', value: '<span style="color:red;font-size:1.2rem;margin-right:0.5rem">200元</span><span style="color:#999;font-size:1rem;">(25000积分)</span>'}
           ]
        }
    },
    methods : {
        toRechargeDone () {
            this.$router.push({path:'/rechargedone'}); 
        }
    }
}
</script>
<style scoped>
  .g-window .weui-cell{
      padding:0.8rem  0.7rem ;
  }
   .feedback1,.feedback2{
       background: #fff;
       margin-top: 0.6rem;
   }
   .feedback2{
       position: relative;
   }
   .checklist{
       color:#e64340;
       font-size:1rem;
   }
   .sum{
       width:90%;
   }
   .next{
       margin-top:1rem;
   }
   .unit{
       position: absolute;
       top:0.85rem;
       right:0.5rem;
   }
  /* .textarea_box{
      background:rgba(250,250,250,1);
  } */
</style>
