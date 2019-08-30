<template>
        <div class="beforebind_phone_box ">
                <div class="phone_item phone_title yellow clearfix">
                      &nbsp;&nbsp;&nbsp;成功绑定即奖励100积分;手机号用于登录,找回密码
                </div>
                <div class="phone_item clearfix ">
                    <div class="phone_item_left fl">手机号 :</div>
                    <div class="phone_item_middle fl">
                        <input type="text" class="phone_number" placeholder="请输入要绑定的手机号码">
                    </div>
                 </div>
                 <div class="phone_item clearfix ">
                    <div class="phone_item_left fl">验证码 :</div>
                    <div class="phone_item_middle invite_box fl">
                        <input type="text" class="invite fl">
                        <div class="get_invite fl pointer ">
                               获取验证码
                      </div>
                    </div>
                    
                </div>
                <div class="phone_item clearfix ">
                    <div class="phone_item_left fl opaticy ">ddfsa </div>
                    <div class="phone_item_middle fl">
                        <p class="binding pointer" data-bind="phone">
                            绑定
                        </p>
                    </div>
                 </div>
                </div>
</template>
<script>
  export default {
    name: 'UserBind'  
  }
</script>
<style scoped>
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
</style>