<template>
    <div class="g-inherit m-article" id="spec">
        <div class="info_bg">
            <x-header  :left-options="{backText: ' '}"  class="header">
                添加好友
                <a slot="left" style="color:#fff;"></a>
            </x-header>
            <div >
                <table></table>
                <div class="info_top_box clearfix">
                    <img src="/webdemo/h5/res/images/my_avatar_default.png" alt="" class="info_img">
                    <p class="info_name">王五五</p>
                    <p class="info_id">ID:654321</p>
                </div>
            </div>
            <group class="info_detail">
                <cell title="性别">
                    <div class="sex_icon flex">
                        <img src="/webdemo/h5/res/images/sex_meal.png" alt=""><span>男</span>
                    </div>
                </cell>
                <cell title="年龄" value="保密"></cell>
                <cell title="个性签名" value="暂无"></cell>


           </group>
           <x-button 
                class="to_add" 
                type="primary" 
                @click.native="toVerify()">
                加为好友</x-button>
        </div>
    </div>
</template>
<script>
export default {
    methods : {
        //加为好友跳转好友验证
        toVerify () {
        this.$router.push({path: '/userverify'});
        }
    }
}
</script>
<style scoped>
.vux-header .vux-header-left.header .left-arrow:before{
        border-left: 1px solid #fff !important;
        border-top: 1px solid #fff !important;
}
.header{
    background: transparent !important;
    color:#fff;
}
.g-inherit.m-article{
     background:#F8F8F8;
     margin-top:0rem;
}
  .info_bg{
      width:100%;
      height:11.625rem;
      background:url(/webdemo/h5/res/images/user_banner.png)
  }
  .info_top_box{
      width:20%;
      height:auto;
      margin:3rem auto;
  }
  .info_img{
      width:2.25rem;
      margin:0 auto;
      display: block;
  }
  p{
      text-align: center;
      color:#fff;
  }
  .info_id{
      font-size:0.8rem;
  }
  .info_detail{
      margin-top:0.5rem;
  }
  .sex_icon{
      right:2rem;
  }
  /* .clearfix::before{
      content:"";
      display: block;
      clear: both;
  }
  .clearfix::after{
      content:"";
      display: block;
      clear: both;
  } */
   .flex{
       display: flex;
       justify-content: flex-start;
   }
   .to_add{
       margin-top:0.75rem;
   }
   .g-window .weui-cell{
       font-size:1.1rem;
   }
</style>
