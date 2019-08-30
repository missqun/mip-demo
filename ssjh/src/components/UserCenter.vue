<template>
    <div id="main">
            <div class="user_center_header_logo">
                    <div class="user_center_logo">
                        <img src="../assets/images/avatar@2x.png" alt="" class='avatar fl'>
                        <div class="user_name_id fl">
                             <p class="name">王五五</p>
                             <p class="id">ID:659878</p>
                        </div>
                    </div>
             </div> 
             <div class="user_box">
                 <!-- 用户中心侧边栏 -->
                 <user-left></user-left>
                 <div class="user_box_right fl">
                     <router-view></router-view>                                                                                                                  
                 </div>
             </div>            
    </div>
</template>

<script>
  import UserLeft from './section/UserLeft.vue'
  export default {
    name: 'UserCenter',
    components: {UserLeft}
  }
</script>
<style scoped>UserCenter
/*面板信息main的样式*/

#main{
    width:100%;
    height:1000px;
    margin:1px auto;  
    position: relative;
    background: #f6f6f6;
}
/*user_header_logo的样式*/
.user_center_header_logo{
    width: 1920px;
	height: 360px;
    background:url(../assets/images/profile_bg@2x.png) left top no-repeat;
	box-shadow: 3px 5px 6px 0px 
		rgba(204, 204, 204, 0.2);
    
}
.user_center_header_logo:before{
    content:"";
    display:table;
}
.user_center_logo{
    width:1200px;
    margin:42px auto;
    color: #ffffff;
}
.avatar{
    width:96px;
    margin-right:13px;
}
.name{
	font-size: 24px;
	line-height: 50px;
}
.id{
    font-size: 16px;
	line-height: 46px;
}
.user_box{
    position: absolute;
    top:225px;
    width: 1200px;
	height: 601px;
	background-color: #ffffff;
	box-shadow: 2px 2px 8px 0px 
    rgba(183, 183, 183, 0.35);
    margin:0 360px;
}
.user_box_left{
    width: 200px;
	height: 600px;
	background-color: #eefaff;
}
.user_box_right{
    width: 1000px;
	height: 600px;
}
.list_item{
	height:48px;
    opacity: 0.8;
    box-sizing: border-box;
    margin:10px 0;
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    border-left:4px solid transparent;
}
.list_item:hover,.list_item.active{
    border-left:4px solid  #039be5;
    background-color: #ffffff;
    color: #039be5;
    background-size:29px;
    transition: all .5s;
}
.user_information_li{
    background:url(../assets/images/grzx_grzl.png) 40px center no-repeat;
    
}
.user_information_li.active,.user_information_li:hover{
   background:url(../assets/images/grzx_grzl_active.png) 40px center no-repeat #fff;
}
.updata_avater_li{
    background:url(../assets/images/grzx_txxg.png) 40px center no-repeat;
    
}
.upadata_avater_li.active,.updata_avater_li:hover{
   background:url(../assets/images/grzx_txxg_active.png) 40px center no-repeat #fff;
}
.bind_phone_li{
    background:url(../assets/images/grzx_bdsj.png) 40px center no-repeat;
    
}
.bind_phone_li.active,.bind_phone_li:hover{
   background:url(../assets/images/grzx_bdsj_active.png) 40px center no-repeat #fff;
}
.updata_pwd_li{
     background:url(../assets/images/grzx_xgmm.png) 40px center no-repeat;
     
}
.updata_pwd_li.active,.updata_pwd_li:hover{
    background:url(../assets/images/grzx_xgmm_active.png) 40px center no-repeat #fff;
}
.information_img{
    width:29px;
}
/*基本信息的样式*/
.user_information_box{
    width: 471px;
    height: 298px;
    margin:50px 245px 253px 284px;
}
.information_item_left{
    width: 80px;
	height: 60px;
	font-size: 16px;
    line-height: 60px;
    text-align: right;
    margin-right:10px;
}
.information_item_right{
    width: 378px;
	height: 60px;
	font-size: 16px;
    line-height: 60px;
    text-align: left;
}
.information_input{
    width: 200px;
	height: 36px;
	background-color: #ffffff;
    border-radius: 4px;
    line-height:36px;
    padding-left:10px;
    box-sizing:border-box;
	border: solid 1px #dddddd;
}
.information_notice{
    font-size: 14px;
}
.layui-form-radio{
    margin:0;
}
.layui-form-radioed>i, .layui-form-radio>i:hover{
    color:#1e88e5;
}
.opaticy{
    opacity: 0;
}
.information_save{
    width: 170px;
	height: 42px;
	background-color: #039eed;
    border-radius: 4px;   
	font-size: 18px;
	line-height: 42px;
    text-align: center;
    color: #ffffff;
    margin-top:10px;
}
/*更改头像的样式*/
.updata_avater_box{
    width: 363px;
    height: 468px;
    margin:50px 298px 113px 339px;
}
.avater_item{
    margin:15px auto;
    width:190px;
}
.updata_avater_img{
    width: 190px;
	height: 190px;
	border-radius: 90px;
	border: solid 1px #ffffff;
}
.advice{
    width: 172px;
	height: 28px;
	font-size: 16px;
	line-height: 28px;
    color: #666666;
    text-align: center;
}
#reload_img{
    width: 170px;
	height: 42px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    text-align: center;
	font-size: 16px;
	line-height: 42px;
    color: #666666;
    box-sizing: border-box;
}
.avater_save{
    width: 170px;
	height: 42px;
	background-color: #039be5;
    border-radius: 4px;
	font-size: 16px;
	line-height: 42px;
    text-align: center;
    color: #fefefe;
    box-sizing: border-box;
}
/*未绑定手机的样式*/
.beforebind_phone_box{
    width: 443px;
    height: 227px;
    margin:64px 259px 310px 298px;
}
.phone_title{
	height:32px;
	font-size: 16px;
    line-height: 32px;
}
.phone_item{
    margin-bottom:20px;
}
.phone_item_left{
    width:64px;
    height:42px;
    line-height: 42px;
    text-align: right;
    margin-right:10px;
}
.phone_item_middle{
    text-align: left;
}
.phone_number{
    width: 300px;
	height: 42px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    line-height:42px;
    padding-left:10px;
    box-sizing: border-box;
}
.invite_box{
    width: 300px;
	height: 42px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    line-height:42px;
 
}
.invite_box.active{
    box-shadow: 0px 2px 4px 0px 
		rgba(3, 169, 244, 0.2);
    border: solid 1px #039be5;
    opacity: 0.5;
 
}
.invite{
    width:175px;
    height:42px;
    line-height:42;
    padding:5px 10px;
    box-sizing: border-box;
    border:none;
}
.get_invite{
    width: 125px;
	height: 42px;
    line-height:42px;
    text-align: center;
    border-left:solid 1px #dddddd;
    box-sizing: border-box;

}
.get_invite.active{
    border-left:solid 1px #039be5;
}
.binding{
    width: 170px;
	height: 42px;
	background-color: #039be5;
	border-radius: 4px;
	line-height: 42px;
    text-align: center;
	color: #fff;
}
.binding.active{
    opacity: 0.5;
}
  /*绑定成功的弹出层*/
body .binded-class .layui-layer-title{
    display:none;
}
#binded{
    position: relative;
    height:197px;
}
.icon{
    width:54px;
    height:54px;
    border-radius: 50%;
    background-color: #4caf50;
    text-align: center;
    margin:20px auto 0 auto;
}
.layui-icon-ok:before{
    font-size:32px;
    color:#fff;
    height:50px;
    font-weight:bold;
    line-height:50px;

}
.binded_text{
    text-align: center;
	height: 40px;
	font-size: 20px;
	line-height: 40px;
    color: #43a047;
    font-weight: bold;
}
.get_100{
	height: 65px;
	font-family: Source Han Sans CN;
	font-size: 18px;
	line-height: 50px;
    color: #666666;
    text-align: center;
}
.binded_knowed{
    width: 170px;
	height: 42px;
	background-color: #03a9f4;
    border-radius: 4px;
    line-height: 42px;
    text-align: center;
    margin: 0 auto;
    color:#fff;
	font-family: Source Han Sans CN;
    font-size: 18px;
    position: absolute;
    bottom:0;
    left:160px;

}
/*已绑定手机的样式*/
.binded_phone_box{
    width: 900px;
    height: 89px;
    margin:44px 50px 468px 50px;
    border-bottom:1px solid #e9e9e9;
}
.bind_phone_logo{
    margin-right:20px;
}
.text_1{
	height: 30px;
	font-size: 18px;
	line-height: 30px;
	color: #333333;
}
.text_2{
	height: 19px;
	line-height: 19px;
	color: #666666;
}
.updata_bind{
    width: 104px;
	height: 42px;
	background-color: #039be5;
    border-radius: 4px;
    text-align: center;
	font-size: 16px;
	line-height: 42px;
	color: #ffff;
}
/*更换绑定手机的样式*/
.updatabind_phone_box{
    width: 443px;
    height: 227px;
    margin:64px 259px 310px 298px;
}
.updata_phone_item{
    margin-bottom:20px;
}
.updata_phone_item_left{
    width:64px;
    height:42px;
    line-height: 42px;
    text-align: right;
    margin-right:10px;
}
.updata_phone_item_middle{
    text-align: left;
}
.updata_phone_number{
    width: 300px;
	height: 42px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    line-height:42px;
    padding-left:10px;
    box-sizing: border-box;
}
.original{
    background-color: #f3f3f3;
}
.updata_invite_box{
    width: 300px;
	height: 42px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    line-height:42px;
 
}
.updata_invite_box.active{
    box-shadow: 0px 2px 4px 0px 
		rgba(3, 169, 244, 0.2);
    border: solid 1px #039be5;
    opacity: 0.5;
 
}
.updata_invite{
    width:175px;
    height:42px;
    line-height:42;
    padding:5px 10px;
    box-sizing: border-box;
    border:none;
}
.updata_get_invite{
    width: 125px;
	height: 42px;
    line-height:42px;
    text-align: center;
    border-left:solid 1px #dddddd;
    box-sizing: border-box;

}
.updata_get_invite.active{
    border-left:solid 1px #039be5;
}
.updata_binding{
    width: 170px;
	height: 42px;
	background-color: #039be5;
	border-radius: 4px;
	line-height: 42px;
    text-align: center;
	color: #fff;
}
.updata_binding.active{
    opacity: 0.5;
}
/*修改密码框的样式*/
/*修改密码*/
.layui-tab-brief > .layui-tab-title .layui-this{
    color:#03a9f4;
}
.layui-tab-brief > .layui-tab-title .layui-this:after, .layui-tab-brief > .layui-tab-more li.layui-this:after{
    border-bottom: 2px solid #03a9f4;
}
.layui-tab-title li{
    font-size:18px;
}
.updata_pwd{
    width: 328px;
    height: 302px;
    margin:32px 292px 204px 350px;
}
.updata_pwd_item.input>input{
    width: 300px;
	height: 42px;
	background-color: #ffffff;
    border-radius: 4px;
    line-height: 42px;
    font-size: 14px;
    padding:8px 0 8px 12px;
    border: solid 1px #dddddd;
    box-sizing: border-box;
    margin-bottom:16px;
}
.updata_pwd_item.input>input:focus,.updata_pwd_item.input>input:focus.active{
    border: solid 1px #03a9f4;
}
.updata_pwd_item.text{	
	font-size: 16px;	
	line-height: 39px;
}
.updata_pwd_item.btn{
    width: 299px;
	height: 42px;
	background-color: #039be5;
	border-radius: 4px;
	line-height:42px;
    color: #fff;
    text-align: center;
}
.font14{
    font-size:14px;
}

/*找回密码*/
.find_pwd{
    width: 402px;
    height: 290px;
    margin:32px 298px 216px 270px;
    font-size:16px;
}
.find_pwd_item{
    margin-bottom:20px;
}
.find_pwd_item_left{
    width:80px;
    height:42px;
    line-height: 42px;
    text-align: right;
    margin-right:10px;
}
.find_pwd_item_middle{
    text-align: left;
}
.find_pwd_number,.new_pwd_number,.reload_pwd_number{
    width: 300px;
	height: 42px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    line-height:42px;
    padding-left:10px;
    box-sizing: border-box;
}
.original{
    background-color: #f3f3f3;
}
.find_invite_box{
    width: 300px;
	height: 42px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    line-height:42px;
 
}
.find_invite_box.active{
    box-shadow: 0px 2px 4px 0px 
		rgba(3, 169, 244, 0.2);
    border: solid 1px #039be5;
    opacity: 0.5;
 
}
.find_invite{
    width:175px;
    height:42px;
    line-height:42;
    padding:5px 10px;
    box-sizing: border-box;
    border:none;
}
.find_get_invite{
    width: 125px;
	height: 42px;
    line-height:42px;
    text-align: center;
    border-left:solid 1px #dddddd;
    box-sizing: border-box;

}
.find_get_invite.active{
    border-left:solid 1px #039be5;
}
.find_save{
    width: 300px;
	height: 42px;
	background-color: #039be5;
	border-radius: 4px;
	line-height: 42px;
    text-align: center;
	color: #fff;
}
.find_save.active{
    opacity: 0.5;
}
</style>