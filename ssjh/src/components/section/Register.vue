<template>
  <div>
    <form id="register_box" class="layui-form">
        <div class="box"> 
            <div class="register_logo">
                上上计划注册
            </div>
            <p class="is_login"><router-link to='/login'  class="tologin fr">立即登录</router-link><span class="has_account fr">已有账号？</span></p>
            <div class="uname">
                <p class="utitle "><img src="../../assets/images/dot.png" alt="">用户名&nbsp;:</p>
                <input type="text" id="uname" name='username' placeholder="请输入用户名" v-model="uname">
            </div> 
            <div class="upwd">
                <p class="utitle "><img src="../../assets/images/dot.png" alt="">登录密码&nbsp;:</p>
                <input type="text" id="upwd" name="password" placeholder="请输入密码" v-model="upwd">
            </div>
            <div class="upwd">
             <p class="utitle "><img src="../../assets/images/dot.png" alt="">再次输入&nbsp;:</p>
             <input type="text" id="rupwd" name="password_confirmation" placeholder="请再次输入密码" v-model="cwd">
            </div>
            <div class="invite">
                <p span class="utitle ">邀请码&nbsp;:</p>
                <input type="text" id="invite" name="superior" placeholder="请输入对方ID">
            </div>
            <div class="code clearfix">
                <p class="utitle fl"><img src="../../assets/images/dot.png" alt="">验证码&nbsp;:</p>
                <input type="text " id="code"  name="captcha" class="fl" placeholder="请输入验证码" v-model="ucode">
                <p class="code_img fl"><img :src="imgUrl" alt=""></p>
                <p class="repeat pointer fl" @click="repeatImg()"><img src="../../assets/images/reload.png" alt=""></p>
            </div>
            <div class="submit">
                <p class="notice"><img src="../../assets/images/dot.png" alt="">为必填</p>
                <p class="text"><span class="agreement">点击注册代表你已阅读并同意&nbsp;</span><a href="reg-agreement.html" class="agreement_text">用户使用协议</a></p>
                <P  class="button" @click="getResult()" >立即注册</P>
            </div>
         </div>
         <div>{{count}}</div>
         <div>{{a}}</div>
        <button type="button" @click="test1">测试1</button>
        <button type="button" @click="test2">测试2</button>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex'
export default {
  name: 'HomeRegister',
  data () {
      return {
          imgUrl:'http://www.ssjh.com/api/created_captcha',
          uname:'',
          upwd:'',
          cwd:'',
          ucode:'',
           mycount:10,
          a:"love"

      }
  },
  computed: {
       localComputed () { 
         
        },
      ...mapState({
      count: state => state.count,
      myname : state=>state.myname
      }),
      ...mapGetters({
      todos:'doneTodos'
      }),
      ...mapMutations([
          "increment"
      ])
  },
  methods : {
        test1 () {
        this.$store.dispatch("increment1");
     
      },
     test2 () {
         console.log(this.count);
     
      },
      repeatImg :function(){
          this.imgUrl+='?'+Math.random();
      },
      getResult : function (){
        var params={
            username:uname,
            password:upwd,
            password_confirmation:cwd,
            captcha:ucode
        }
        this.$http.post('http://www.ssjh.com/api/register',params).then(function (response) {
            console.log(response.data);
        })
		   
      }
  }
}
</script>
<style scoped> 
 #register_box{
       position: absolute;
       left:0;
       right:0;
       top:0;
       bottom:0;
       margin:auto; 
       width:518px;
       height:730px;
       box-shadow: 0px 6px 6px #f2f2f2;
       border:1px solid #f2f2f2;
   }
   .box{
       margin:30px 30px;
       font-size:16px;
   } 
   .register_logo{
       font-family: "庞门正道标题体";
       font-size:36px;
       color:#1e88e5;
       text-align: center;
       margin-bottom:35px;
   }
   .is_login{
    height:30px;
   }
   .has_account{
       color:#333333;
   }
   .tologin{
       color:#1e88e5;
   }
   .uname,.upwd,.invite,.code{
       margin-bottom:30px;   
   }
   input{
       width:334px;
       height:60px;
       border:1px solid #f2f2f2;
       box-shadow:0px 4px 4px #f2f2f2;
       box-sizing:border-box;
       display:inline-block;
       padding-left:20px;
      
       
   }
   .utitle{
       width:100px;
       height:60px;
       line-height:60px;
       display:inline-block;
       text-align: right;
       margin-right:16px;
    }
    .utitle>img,.notice>img{
        position:relative;
        top:-3px;
    }
    .code_img>img{
        width:97px;
        height:60px;
        margin-right:2px;
    }
    .code_img{
        box-shadow:0px 4px 4px #f2f2f2;
    }
    .repeat{
        background: #1e88e5;
        width:42px;
        height:60px;
        text-align: center;
        padding:17.5px 0;
        box-sizing: border-box;
        box-shadow:0px 4px 4px #f2f2f2;
    }
    #code{
        width:200px;
    }
    .submit{
        margin-left:106px;
    }
    .notice{
        font-size:12px;
        color:#999999;
        margin-bottom:10px;
    }
    .agreement{
        color:#cccccc;
    }
    .agreement_text{
        color:#138bee;
        direction:underline;
    }
    .text{
        margin-bottom:10px;
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
    }
</style>
