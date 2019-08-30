<template>
    <!-- 基本信息 -->
    <form class="user_information_box layui-form ">
            <div class="user_id information_item">
                 <p class="information_item_left fl">用户ID&nbsp;:</p>
                 <p class="information_item_right fl">
                     596836             
                 </p>
            </div>
            <div class="user_id information_item">
                 <p class="information_item_left fl">登录名&nbsp;:</p>
                 <p class="information_item_right fl">
                     <input type="text" placeholder="xjy123" class="information_input">             
                 </p>
            </div>
            <div class="user_id information_item">
                 <p class="information_item_left fl">绑定手机&nbsp;:</p>
                 <p class="information_item_right fl">
                     <span class="blue pointer" data-to="bind">立即绑定</span>
                     <span class="yellow information_notice">(绑定奖励100积分;手机号可以用于登录,找回密码)</span>             
                 </p>
            </div>
            <div class="user_id information_item">
                 <p class="information_item_left fl">用户昵称&nbsp;:</p>
                 <p class="information_item_right fl">
                     <input type="text" placeholder="石子" class="information_input">             
                 </p>
            </div>
            <div class="user_id information_item">
                 <p class="information_item_left fl">性别&nbsp;:</p>
                 <p class="information_item_right fl">
                         <input type="radio" name="sex" value="男" title="男">
                         <input type="radio" name="sex" value="女" title="女" checked>        
                 </p>
            </div>
            <div class="user_id information_item">
                 <p class="information_item_left fl opaticy">透明</p>
                 <p class=" information_item_right fl information_save pointer">
                     保存
                 </p>
            </div>
      </form>
</template>
<script>
  export default {
    name: 'UserBasic'   
  }
</script>
<style scoped>
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
</style>