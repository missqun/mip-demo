<template>
     <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="意见反馈" class="header" > </x-header>
        <group class="feedback1">
            <cell title="整体评分">
               <rater v-model="num" star="★" active-color="#FF9900" :margin="4">
                   <p>4分</p>
               </rater>
           </cell>
        </group>
        <group class="feedback2">
            <p class="feedback_title">反馈信息</p>
            <div class="clearfix">
                <div class="msg_item fl">页面卡顿</div>
                 <div class="msg_item fl">功能太少</div>
                  <div class="msg_item fl">界面太简单</div>
            </div>
            <div class="textarea_box">
               <textarea class="advice_box" name="advice" placeholder="用的不爽？您来吐槽" autosize ></textarea>    
            </div>
            <x-button class="submit" type="primary" action-type="button"  text="提交"></x-button>   
        </group>
    </div>
</template>
<script>
export default {
    data () {
        return  {
            num:2
        }
    }
}
</script>
<style scoped>
.fl{
    float:left;
}
  .g-window .weui-cell{
      padding:0.8rem  0.7rem ;
  }
   .feedback1,.feedback2{
       background: #fff;
       margin-top: 0.6rem;
   }
   .feedback_title{
       font-size:1.1rem;
       margin:0.5rem 0 0.5rem 0.5rem;
   }
  .msg_item{
      background:rgba(255,255,255,1);
     border:1px solid rgba(227,227,227,1);
     opacity:1;
    border-radius:4px;
    margin:0.3rem 0.5rem;
    padding:0.2rem 0.8rem;
    height:1.5rem;
    line-height: 1.5rem;
    text-align: center;
    font-size:0.9rem;
    color:rgba(102,102,102,1);
  }
  .advice_box{
      display: block;
      width:95%;
      height:10rem;
      background:rgba(250,250,250,1);
      border:1px solid rgba(221,221,221,1);
      border-radius:4px;
      margin:0.8rem auto;
      padding:1rem;
      font-size:1rem;
      color:rgba(102,102,102,1);
      font-family: Source Han Sans CN;
  }
  .submit{
      width:96%;
  }
  /* .textarea_box{
      background:rgba(250,250,250,1);
  } */
</style>
