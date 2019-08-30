<template>
    <div>
        <div class="top_box">
                <img class="fl top_img" src="../assets/images/top_logo.png" alt="">
                <ul class="top_uer_score fr">
                    <li class="user fl pointer" @mouseenter="uenter" @mouseleave="uleave">
                        <img src="../assets/images/avatar.png" class="avater_img">
                        <span class="username">王五五</span>
                        <i class="layui-icon layui-icon-down user_list_down"></i>
                        <i class="layui-icon layui-icon-up user_list_up hide"></i>
                        <ul class="user_list hide">
                                <li class="ul_item pointer my_info">
                                   <router-link to='/basic'>基本信息</router-link>
                                </li>
                                <li class="ul_item pointer my_fans">
                                   <router-link to='/fans'>我的粉丝</router-link>
                               </li>
                               <li class="ul_item pointer my_logout">
                                   <router-link to='/login'>退出登录</router-link>                             
                                </li>                                 
                          </ul >
                    </li>
                    <li class="score fl " @mouseenter="senter" @mouseleave="sleave">
                      
                        <span class="userscore">100</span>
                        <i class="layui-icon layui-icon-down score_list_down"></i>
                        <i class="layui-icon layui-icon-up hide score_list_up"></i>     
                        <ul class="score_list hide ">
                            <li class="ul_item pointer my_score">
                                <router-link to='/score'>积分余额</router-link>
                            </li>                             
                            <li class="ul_item pointer my_score_shop">
                                <router-link to='/shop'> 积分商城</router-link>
                            </li>
                                
                        </ul >
                    </li>
                </ul>
                
                <ul class="top_menu fr">
                    <li class="menu_item fl pointer active">计划事集</li>
                    <li class="menu_item fl pointer">做号工具</li>
                    <li class="menu_item fl pointer">数据分析</li>
                </ul>
            </div>
        </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  methods : {
      uenter: function () {
        layui.use('layer', function () {
        var $ = layui.$;
            $(".user_list").slideDown(100);       
        }); 
      },
      uleave: function () {
        layui.use('layer', function () {
        var $ = layui.$;
            $(".user_list").slideUp(100);       
        }); 
      },
      senter: function () {
        layui.use('layer', function () {
        var $ = layui.$;
            $(".score_list").slideDown(100);       
        }); 
      },
      sleave: function () {
        layui.use('layer', function () {
        var $ = layui.$;
            $(".score_list").slideUp(100);       
        }); 
      },

  }
  
}
</script>
<style scoped>
    @import '../assets/css/reset.css';
    @import '../assets/css/layui.css';
  /*主页header的样式*/
.top_box{
    width:1200px;
    margin:0 auto;
    position: relative;
}
.top_img{
    margin-top:16px;
}
.menu_item{
    width:80px;
    font-size:18px;
    text-align: center;
    color: #333333;
    line-height: 80px;
    margin-right:49px;
    box-sizing: border-box;
    border-bottom:2px solid transparent;
}
.menu_item:hover,.menu_item.active{
    border-bottom:2px solid #1e88e5;
    color:#1e88e5;
    font-weight:bold;
}
.user,.score{
    line-height:80px;
    font-size:16px; 
    margin-left:20px; 
}
.user_list{
    width: 136px;
	height: 113px;
	background-color: #ffffff;
	box-shadow: 0px 2px 6px 0px 
		rgba(51, 51, 51, 0.2);
    border-radius: 4px;
    z-index:20;
    position: absolute;
    top:65px;
    left:80%;
    padding:6px 14px;
    box-sizing: border-box;

}
.ul_item{
    height:28px;
	font-size: 16px;
	line-height: 28px;
    color: #666666;
    padding-left:22px;
    box-sizing: border-box;
    text-align: center;
    margin:4px 0;
}
.ul_item>a:hover{
    color:#1e88e5;
}
.my_info{
    background:url(../assets/images/my_info.png) 3px center no-repeat;
}
.my_info:hover,.my_info.active{
    color:#1e88e5;
    background:url(../assets/images/bmy_info.png) 3px center no-repeat;
}
.my_fans{
    background:url(../assets/images/my_fans.png) 3px center no-repeat;
}
.my_fans:hover,.my_fans.active{
    color:#1e88e5;
    background:url(../assets/images/bmy_fans.png) 3px center no-repeat;
}
.my_logout{
    background:url(../assets/images/my_logout.png) 3px center no-repeat;
}
.my_logout:hover,.my_logout.active{
    color:#1e88e5;
    background:url(../assets/images/bmy_logout.png) 3px center no-repeat;
}
.score{
    padding-left:19px;
    background:url(../assets/images/top_jb.png) 0px center no-repeat; 
}
.score_list{
    width: 136px;
	height: 80px;
	background-color: #ffffff;
	box-shadow: 0px 2px 6px 0px 
		rgba(51, 51, 51, 0.2);
    border-radius: 4px;
    z-index:20;
    position: absolute;
    top:65px;
    right:0;
    padding:6px 14px;
    box-sizing: border-box;
}
.my_score{
    background:url(../assets/images/top_jb.png) 3px center no-repeat;
}
.my_score:hover,.my_score.active{
    color:#1e88e5;
    background:url(../assets/images/top_jb_active.png) 3px center no-repeat;
}
.my_score_shop{
    background:url(../assets/images/top_jfsc.png) 3px center no-repeat;
}
.my_score_shop:hover,.my_score_shop.active{
    color:#1e88e5;
    background:url(../assets/images/top_jfsc_active.png) 3px center no-repeat;
}
.username,.userscore{
    margin:0 15px;
}
.userscore{
    color: #fb8c00;
}
.user_list_down,.user_list_up,.score_list_down,.score_list_up{
    color: #999999;
}
</style>
