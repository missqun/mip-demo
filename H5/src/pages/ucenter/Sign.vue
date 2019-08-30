<template>
      <div class="g-inherit m-main ">
            <div class="top_bg">
               <x-header  :left-options="{showBack: false,backText: ' '}" title="签到赚积分" class="header" >
                     <div slot="left">
                           <img src="/webdemo/h5/res/images/top_back_light.png" alt="" @click="back()">
                     </div>
               </x-header>
               <div class="sign_box">
                    <div class="sign_target">
                          <p class="con_sign">连续签到</p>
                          <p class="con_date">2天</p>
                    </div>
                    <div class="next_get">
                          明天可获取40积分
                    </div>
               </div>
               <div class="dates flex">
                     <div class="date_item ">
                           <p class="sign_score active">20</p>
                           <p class="sign_date">今天</p>
                     </div>
                     <div class="date_item ">
                           <p class="sign_score">20</p>
                           <p class="sign_date">今天</p>
                     </div>
                     <div class="date_item ">
                           <p class="sign_score">20</p>
                           <p class="sign_date">今天</p>
                     </div>
                     <div class="date_item ">
                           <p class="sign_score">20</p>
                           <p class="sign_date">今天</p>
                     </div>
                     <div class="date_item ">
                           <p class="sign_score">20</p>
                           <p class="sign_date">今天</p>
                     </div>
                     <div class="date_item ">
                           <p class="sign_score">20</p>
                           <p class="sign_date">今天</p>
                     </div>
                     
               </div>
            </div>
            <div class="gain_more">
                  <div class="more_title cleaxfix">
                        <div class="more_div fl "></div>
                        <div class="title fl">赚更多积分</div>
                  </div>
                   <div class="complete_msg  flex">
                        <div class="com_title ">完善个人资料</div>
                        <div class="award_score ">奖励100积分</div>
                        <!-- <div class="to_get">领取</div> -->
                        <div class="geted">已领取</div>
                  </div>
                  <div class="complete_msg  flex">
                        <div class="com_title ">邀请好友</div>
                        <div class="award_score">奖励200积分</div>
                        <div class="to_get " @click="toInvite()">去邀请</div>
                  </div>                                             
            </div>
            <div class="score_excharge_img">
                  <img src="/webdemo/h5/res/images/banner_jfsc.png" alt="">
            </div>
            <div class="invite_rule" @click="toInviteRule()">
                  签到与邀请规则
            </div>
            <toast v-model="showToast" text="复制邀请信息成功" type="success" position="middle" width="12em">   
            </toast>
      </div>
</template>
<script>
export default {
   data () {
         return {
               showToast:false
         }
   },
   methods :{
         back () {
               this.$router.back(-1);
         },
         toInvite () {
             this.showToast=true;
         },
         toInviteRule () {
             this.$router.push({path:'/inviterule'});   
         }
   } 
}
</script>
<style scoped>
    .invite_rule {
      width:100%;
      font-size:13px; 
      font-weight:400;
      text-align: center;
      color:rgba(102,102,102,1); 
      position: fixed;
      bottom:2rem;    
    }
   .score_excharge_img img{
         width:100%;
         margin-top:0.6rem;
   }
   .header{
      background:transparent;
      color:#fff;
    }
    .top_bg{
          width:100%;
          background: url(/webdemo/h5/res/images/qd_banner.png) left top no-repeat;
          background-size:cover;
          height:18.5rem;
    }
    .sign_box{
          width:100%;
          height:6rem;
          margin-bottom:3.5rem;
    }
    .sign_target{
          width:5.4rem;
          height:5.4rem;
          background:rgba(255,255,255,1);
          border:2px solid rgba(255,222,130,0.5019607843137255);
          box-shadow:0px 5px 6px rgba(0,0,0,0.1);
          border-radius:50%;
          margin:2rem auto 1rem auto;
          text-align: center;
    }
    .next_get{
          text-align: center;
          color:#fff;
          opacity: 0.8;
    }
    .con_sign{
      font-size:0.8rem;    
      line-height:3.25rem;
      color:rgba(117,117,117,1);
    }
    .con_date{
      font-size:1.25rem;
      line-height:0.9rem;
      color:rgba(227,69,65,1)
    }
    .sign_score{
       width:1.7rem;
      height:1.7rem;
      border:1px solid rgba(255,255,255,0.5019607843137255);
      border-radius:50%;
      opacity:0.8;
      color:#fff;
      font-size:0.8rem;
      text-align: center;
      line-height:1.7rem;
    }
    .dates{
          justify-content: space-around;
          padding: 0 1.5rem;
          box-sizing: border-box;
    }
    
    .sign_date{
      text-align: center;
      color:#fff;
       opacity:0.8;
       font-size:0.8rem;
       line-height:2rem;
    }
    .active{
       background:rgba(255,204,86,1);
       border:1px solid rgba(255,255,255,0.5019607843137255);
    }
   .gain_more{
         margin-top:0.6rem;
         background: #fff;
         height:auto;
         padding:1rem;
         box-sizing: border-box;
   }
   .more_div{
         width:0.25rem;
         height:1rem;
         background:rgba(251,140,0,1);
         margin-right:0.5rem;
   }
   .title{   
      height:1rem;
      font-weight:500;
      line-height:1rem;
      color:rgba(51,51,51,1);
   }
   .more_title{
      height:1.5rem;
   }
   .complete_msg{
          padding-top:1rem;
         box-sizing: border-box;   
         justify-content:space-between;
   }
   .com_title{
      width:6rem;
      font-weight:400;  
      color:#333;   
   }
   .award_score{  
      font-weight:400;    
      color:rgba(251,140,0,1);   
   }
   .to_get{
      width:5rem;
      height:2rem;
      background:linear-gradient(90deg,rgba(255,198,13,1) 0%,rgba(255,125,0,1) 100%);
      box-shadow:0px 2px 4px rgba(0,0,0,0.16);
      opacity:1;
      border-radius:15.6rem;
      text-align: center;
      line-height: 2rem;
      color:#fff;
   }
   .geted{
      width:5rem;
      height:2rem;
      border:1px solid rgba(221,221,221,1);
      border-radius:15.6rem;
      text-align: center;
      line-height: 2rem;
      color:#666666;    
   }
</style>
