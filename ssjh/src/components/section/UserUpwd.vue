<template>
  <!-- 修改找回密码 -->
  <div class="updata_pwd_box ">
        <div class="layui-tab layui-tab-brief" lay-filter="docDemoTabBrief">
            <ul class="layui-tab-title">
              <li class="layui-this">修改密码</li>
              <li>找回密码</li>
            </ul>
            <div class="layui-tab-content">
                <!-- 修改密码 -->
                <form class="layui-tab-item updata_pwd layui-show">
                     <div class="updata_pwd_item text">
                         现有密码
                     </div>
                     <div class="updata_pwd_item input">
                         <input type="text" class="text" placeholder="******">
                     </div>
                     <div class="updata_pwd_item text">
                         新密码 <span class="darkicon font14">(不少于6位数字、密码组合)</span>
                     </div>
                     <div class="updata_pwd_item input">
                        <input type="text" class="text">
                     </div>
                     <div class="updata_pwd_item input">
                        <input type="text" class="text" placeholder="确认密码">
                     </div>
                     <div class="updata_pwd_item btn pointer">
                         保存
                     </div>
                </form>
                <!-- 找回密码 -->
                <div class="layui-tab-item find_pwd">
                    <div class="find_pwd_item clearfix ">
                        <div class="find_pwd_item_left fl">手机号 :</div>
                        <div class="find_pwd_item_middle fl">
                            <input type="text" class="original find_pwd_number" placeholder="150****88888" readonly>
                        </div>
                     </div>
                     <div class="find_pwd_item clearfix ">
                        <div class="find_pwd_item_left fl">验证码 :</div>
                        <div class="find_pwd_item_middle updata_invite_box fl">
                            <input type="text" class="find_invite fl">
                            <div class="find_get_invite fl pointer ">
                                   获取验证码
                          </div>
                        </div>
                        
                    </div>
                    <div class="find_pwd_item clearfix ">
                        <div class="find_pwd_item_left fl">新密码 :</div>
                        <div class="find_pwd_item_middle fl">
                            <input type="text" class="new_pwd_number" placeholder="不少于6位数字、字母组合">
                        </div>
                     </div>
                     <div class="find_pwd_item clearfix ">
                            <div class="find_pwd_item_left fl">确认密码 :</div>
                            <div class="find_pwd_item_middle fl">
                                <input type="text" class="reload_pwd_number" >
                            </div>
                         </div>
                    <div class="find_pwd_item clearfix ">
                        <div class="find_pwd_item_left fl opaticy ">ddfsa </div>
                        <div class="find_pwd_item_middle fl">
                            <p class="find_save pointer" data-find="pwd">
                                保存
                            </p>
                        </div>
                     </div>
                </div>
            </div>
          </div> 
     </div>
</template>
<script>
  export default {
    name: 'UserUpwd'
  }
</script>
<style scoped>
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

</style>