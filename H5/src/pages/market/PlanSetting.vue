<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="发布设置" ></x-header>
        <group class="setting_box">
             <cell-box class="cell">
                 <div  class="cell_icon">
                     <p class="fl cell_title">玩法</p> <p class="fl play_way">{{playWay}}</p>
                 </div>
             </cell-box>
             <cell-box class="cell">
                 <div  class="cell_icon">
                     <p class="fl cell_title">计划名称</p> <input class="fl plan_name" placeholder="4-6位中文，设置后无法修改" >
                 </div>
             </cell-box>
             <cell-box class="cell ">
                 <div  class="cell_icon periods">
                     <p class="fl cell_title">计划周期</p> 
                     <p class=" fl plan_period">{{period}}</p>
                     <p class="fr period_num" :class="{active:showPeriods}" @click="isShow()">3期</p>
                     <ul class="periods_box"  v-show="showPeriods">
                         <li class="periods_item" v-for="(item,index) in periodList" :key="index" @click="checkPeriod(item)">{{item}}</li>
                         
                     </ul>
                 </div>    
             </cell-box>
             <cell-box class="cell">
                 <div  class="cell_icon">
                     <p class="fl cell_title">您选取的号码</p> 
                     <p class=" fl selected red">01658</p>
                 </div>    
             </cell-box>
             <cell-box class="cell">
                 <div  class="cell_icon">
                     <p class="fl cell_title">距离截止时间</p> 
                     <p class=" fl "><span class="ltime red">00:54</span> <span class="l_notice">(开奖前30秒不能发布计划)</span></p>
                 </div>    
             </cell-box>
             <x-switch class="cell" title="显示我的ID"  v-model="showId"  ></x-switch>
        </group>
        <x-button class="comfirm_plan" type="primary" action-type="button"  text="确认发布" @click.native="toPlan"></x-button>
        <!-- 开奖30s前不能发布的弹窗 -->
        <toast v-model="showToast" type="cancel" position="middle" width="12em">开奖前30秒不能发布计划</toast> 
        <!-- 发布成功的 弹窗 -->
          <alert v-model="showAlert" title="" button-text="查看计划" class="">
            <slot> 
                <img src="/webdemo/h5/res/images/tip_success.png" alt="">
                <div class="submit_text">提交成功</div>
                <p class="blue">5秒后自动回到您的计划列表</p>
            </slot>
          </alert>
    </div>
</template>
<script>
export default {
    data () {
        return {
            showId:false,
            showPeriods:false,
            showToast:false,
            showAlert:false,
            playWay:"重庆时时彩  定位-万码",
            playlist:["重庆时时彩  定位-万码"],
            period:"012 - 013期",
            periodList:["012 - 013期","012 - 014期","012 - 015期"]
        }
    },
    methods : {
        // 周期选择框
       isShow () {
           this.showPeriods=!this.showPeriods;
       },
        // 选择周期
       checkPeriod (item) {
          this.showPeriods=false;
          this.period=item;
       },
        // 确认发布
       toPlan () {
        //    this.showToast=true;
              this.showAlert=true;
        
       }
    }
}
</script>
<style scoped>
.submit_text{
    width:100%;
    text-align: center;
    height:1.6rem;
    font-weight:500;
    line-height:1.6rem;
    color:rgba(67,160,71,1);
}
.selected{
    letter-spacing: 0.5rem;
}
.red{
    color:#E34541;
}
.periods{
    position: relative;
}
.periods_box{
   z-index:10;
   position: absolute;
   width:11rem;
   left:6.5rem;
   top:1.8rem;
   padding: 0.2rem;
   background: #fbf8f8;

}
.periods_item{
    font-size:1.1rem;
    border-bottom:1px solid #d9d9d9;
    padding:0.5rem 0.2rem;
  
}
.periods_item:hover{
    color:#03A9F4;
  
}
.period_num{
    padding-right:2rem;
    background:url(/webdemo/h5/res/images/top_right.png) right center no-repeat;
    background-size:30%; 
}
.period_num.active{
    
    background:url(/webdemo/h5/res/images/top_down.png) right center no-repeat;
    background-size:30%; 
}
.ltime{
    color:#E34541;
}
.l_notice{
    font-size: 0.81rem;
    color:#999;
    margin-left:1rem;
}
.cell{
    width:100%;
    padding:0.9rem 0.7rem;
    box-sizing: border-box;
}
.cell_icon{
    width:100%;
}
.cell_title{
    width:7rem;
}
.setting_box{
    margin:0.6rem 0;
    background: #fff;
}
.play_way{
    color:#333;
}
.plan_name{
    border:none;
    height:1.5rem;
    line-height: 1.5rem;
    font-size:1rem;
    color:#333;
}
</style>
