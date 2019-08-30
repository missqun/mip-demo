<template>
        <div>
                <form id="getback_box" class="layui-form">
                        <div class="box"> 
                           <div class="getback_logo">
                               找回密码
                           </div>
                           <p class="is_login"><router-link to='/login' class="tologin fr">立即登录</router-link><span class="has_account fr">已有账号？</span></p>
                           <div class="phone">
                               <p class="utitle ">手机号&nbsp;:</p>
                               <input type="text" id="phone" placeholder="请输入您绑定的手机号码">
                               <div class="send_invite">
                                    <button type="button" class="send">发送验证码</button>
                               </div>
                           </div> 
                           <div class="finvite">
                               <p class="utitle ">验证码&nbsp;:</p>
                               <input type="text" id="finvite" placeholder="请输入验证码">
                           </div>
                           <div class="upwd">
                            <p class="utitle ">新密码&nbsp;:</p>
                            <input type="text" id="rupwd" placeholder="请输入新密码">
                           </div>
                           <div class="rupwd">
                               <p span class="utitle ">再次确认&nbsp;:</p>
                               <input type="text" id="invite" placeholder="请确认您的新密码">
                           </div>
                           <div class="sfind">
                               <p class="button">确认找回</p>
                           </div>
                        </div>
                    </form>
        </div>
 </template>
      <script>
      export default {
        name: 'HomeBack'
      }
      </script>
      <style scoped>

       /*getback-box*/
   #getback_box{
       position: absolute;
       left:0;
       right:0;
       top:0;
       bottom:0;
       margin:auto; 
       width:567px;
       height:651px;
       box-shadow: 0px 6px 6px #f2f2f2;
       border:1px solid #f2f2f2;
   }
   .box{
       margin:50px 35px;
       font-size:16px;
   } 
   .getback_logo{
       font-family: "庞门正道标题体";
       font-size:36px;
       color:#1e88e5;
       text-align: center;
       margin-bottom:35px;
   }
   .is_login{
    height:50px;
    width: 402px;
    margin:0 auto;

   }
   .has_account{
       color:#333333;
   }
   .tologin{
       color:#1e88e5;
   }
   
   input{
       width:336px;
       height:60px;
       border:1px solid #f2f2f2;
       box-shadow:0px 4px 4px #f2f2f2;
       box-sizing:border-box;
       display:inline-block;
       padding-left:20px;
   } 
   .phone{
       font-size:0px;
       display:flex;
   }
   .utitle,#phone,.send_invite{
       font-size:16px;
       margin-bottom:30px;
   }
   #phone{
       width:200px;
       border-right:none;
       margin-left:10px;
   }
  
   .send_invite{
       width: 133px;
       height:60px;
       border:1px solid #f2f2f2;
       box-shadow:0px 4px 4px #f2f2f2;
       border-left:none;
       background: #fff;
       display:inline-block;
       vertical-align: middle;
       box-sizing: border-box;
       line-height: 60px;

   }
   .send{
    width:93px;
    margin-left:20px;
    vertical-align: middle;
    background:#138bee;
     color:#fff;
     cursor: pointer;
     height:30px;
     line-height:30px;
     text-align: center;
     font-size:12px;
     border:1px solid #f2f2f2;
 }
   .utitle{
       width:90px;
       height:60px;
       line-height:60px;
       display:inline-block;
       text-align: right;
       margin-right:16px;
    }   
    .sfind{
        margin-left:108px;
    }
    .button{
        font-size:20px;
        width:336px;
        height:60px;
        line-height:60px;
        color:#fff;
        background: #138bee;
        text-align: center;
        border-radius:5px;
        cursor:pointer;
    }
      </style>
      