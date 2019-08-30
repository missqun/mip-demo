<template>
     <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="积分充值" class="header" > </x-header>
        <group class="feedback2">
             <x-input title='充值金额' text-align="left"  v-model="sum" readonly>
             </x-input>
        </group>
        <group class="feedback1" title="请选择支付方式">
           <!-- <radio class="radio_box"  value="1" :options="payWay" @on-change="change"></radio> -->
           <checklist  :max="1" label-position="left"  :options="payWay"  class="checklist" v-model="checkedItem"></checklist>
        </group>
         <x-button class="pay" type="primary" action-type="button"  text="支付"></x-button> 
    </div>
</template>
<script>
export default {
    data () {
        return  {
            sum:"10元(1000积分)",
            payWay:[
                {key:1,icon:"/webdemo/h5/res/images/ico_wxzf.png",value:"<img src='/webdemo/h5/res/images/ico_wxzf.png' style='position:relative;top:0.35rem;margin-right:0.5rem;'>微信支付"},                 
                {key:2,icon:"/webdemo/h5/res/images/ico_zfb.png",value:"<img src='/webdemo/h5/res/images/ico_zfb.png' style='position:relative;top:0.35rem;margin-right:0.5rem;'>支付宝"}

            ],
            checkedItem:"1"
        }
    },
    mounted () {
  
    },
    methods : {
        change (value, label) {
        console.log('change:', value, label)
        }
    }
}
</script>
<style scoped>
  .weui-check__label{
      padding:0.9rem 0.7rem !important;
  }
  .g-window .weui-cell{
      padding:0.8rem  0.7rem ;
  }
   .feedback2{
       background: #fff;
       margin-top: 0.6rem;
   }
   .feedback1{
       margin-top: 0.6rem;
   }
   .radio_box{
       background: #fff;
       height:5rem;
   }
   .checklist{
       background: #fff;
   }

   .pay{
       margin-top:1rem;
   }
  
  /* .textarea_box{
      background:rgba(250,250,250,1);
  } */
</style>
