<template>
    <div>
        <form id="login_box" class="layui-form">
            <div class="box"> 
                <div class="login_logo">
                    <img src="../../assets/images/login_logo.png" alt="">
                </div>
                <div class="login_name">
                    <input id="uname" type="text" placeholder="请输入用户名/上上ID/手机号码">
                </div>
                <div class="login_upwd ">
                    <input id="upwd" type="password" class="hide-pwd" placeholder="登录密码" ref="isShow" @keyup.enter="submit()" >
                    <div class="show_hide_pwd pointer" @click="toggle()"></div>
                </div>
                <div class="remenber">
                    <input type="checkbox" name="" id="remenber" title="记住我" lay-skin="primary" >
                </div>
                <div class="submit pointer" @click="submit()">
                    登录
                </div>
                <div class="other">
                <span class="no_account fl">还没账号?</span>
                <router-link to='/regis' href="register.html" class="free_register fl">免费注册</router-link>
                <router-link to='/back'  href="getback.html" class="forget_pwd fr">忘记密码</router-link>
                </div>
                <div>{{count}}</div>
                <div>{{a}}</div>
                <button type="button" @click="test1">测试1</button>
                <button type="button" @click="test2">测试2</button>
            </div>
        </form>
    </div>
</template>
<script>

import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex'
export default {
  name: 'HomeLogin',
  data () {
     return {
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
  methods: {
      test1 () {
        this.$store.dispatch("increment1");
     
      },
     test2 () {
         console.log(this.count);
     
      },
      toggle () {
          $(this.$refs.isShow).attr("type")=="password"?  $(this.$refs.isShow).attr("type","text"): $(this.$refs.isShow).attr("type","password")
         
      },
      //提示框
     layMsg (status,msg) {
        layui.use('layer', ()=>{
                    var layer = layui.layer;
                    layer.msg(msg,{
                        success: ()=> {
                            status?setTimeout(()=>{this.$router.push('/list');},500):setTimeout(()=>{ $("input").val("");},500);                                                     
                      }
                    });
        });       
     },
      //登录提交
      submit (){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val(); 
        var that=this; 
        this.$ajax.post("http://www.ssjh.com/api/login",this.$qs.stringify({
            username:uname,
            password:upwd
            })
        )
        .then(function(res){
            that.layMsg(res.data.status,res.data.message);
        })
        .catch(function(res){

        })    
      
      }
  },
  created :  ()=> {
        layui.use('form', function(){
            var form = layui.form;       
            });
      
        
  }

}
</script>
<style scoped>
/*login-box*/
#login_box{
        position: absolute;
        padding:40px 64px;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin:auto; 
        width:465px;
        height:590px;
        box-shadow: 0px 10px 5px #f1f1f1;
        border:1px solid #f1f1f1;
    }
    .box{
        margin:40px 64px;
    }
    .login_logo,.login_name,.remenber,.submit{
       margin-bottom:40px;
    }
    .login_upwd{
        margin-bottom:20px;
    }
    .submit{
        background:#1e88e5;
        color:#f0f0f0;
        text-align:center;
        width:100%;
        height:40px;
        line-height:40px;
        border-radius:5px;
        font-size:20px;
    }
    #uname,#upwd{
            width:335px;
            height:55px;
            border:1px solid #f1f1f1;
            box-shadow: 0px 5px 3px #f1f1f1;
            line-height:60px;
    }
    #uname{
        padding-left:58px;
        font-size:16px;
        background:url(../../assets/images/user.png) 9px center no-repeat;
        box-sizing:border-box;
    }
    #upwd[type='password']{
        padding-left:58px;
        padding-right:40px;
        box-sizing:border-box;
        font-size:16px;
        background:url(../../assets/images/pwd.png) 9px center no-repeat,
                   url(../../assets/images/to-hide.png) 95% center no-repeat;
    }
    #upwd[type='text']{
        padding-left:58px;
        padding-right:40px;
        font-size:16px;
        box-sizing:border-box;
        background:url(../../assets/images/pwd.png) 9px center no-repeat,
                   url(../../assets/images/to-show.png) 95% center no-repeat;
    }
    .layui-form-checked[lay-skin="primary"] i {
        border-color: #1e88e5;
        background-color: #1e88e5;
        color: #fff;
    }
    .layui-form-checked span, .layui-form-checked:hover span {
        background-color: #1e88e5;
    }
    .layui-form-checkbox[lay-skin="primary"]:hover i {
        border-color: #1e88e5;
        color: #fff;
    }
    .no_account,.free_register,.forget_pwd{
        font-size:16px;
    }
    .no_account{
        color:#d2d2d2;
        cursor: pointer;
    }
    .free_register,.forget_pwd{
        color:#1E9FFF;
        cursor: pointer;
    }
    .free_register:hover,.forget_pwd:hover{
        color:#1E9FFF;
        cursor: pointer;
    }
    /* 点击显示隐藏密码的样式 */
     .login_upwd{
         position: relative;
     }
     .show_hide_pwd{
         width:40px;
         height:55px;
         position: absolute;
         right:0;
         top:0;
     }

</style>
