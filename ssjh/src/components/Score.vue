<template>
 <div id="main" class="clearfix">
        <!-- 头部导航start -->
        <ul id="nav" class="clearfix">
            <li class="nav_item fr pointer">积分商城</li>
            <li class="nav_item  fr active pointer">积分主页</li>
        </ul>  
        <!-- 头部导航end -->
        <div class="score1_logo clearfix">
            <img src="../assets/images/banner_text.png" alt="" class="banner_text pointer">
        </div>
        <!-- 我的积分模块start -->
        <div class="my_score1 score1_item clearfix">
            <div class="score1_item_top">
                <div class="top_title fl">
                    我的积分
                </div>
            </div>
            <div class="score1_item_box">
                <div class="box_left fl">
                    <div class="score1_detail_title">
                        积分概况
                    </div>
                    <div class="detail_box ">
                        <div class="detail_item fl">
                             <div class="score1_remain pointer">
                                  1688
                             </div>
                             <p class='remain_text'>我的积分余额</p>
                             <div class="recharge pointer">充值</div>
                        </div>
                        <div class="detail_item fl">
                            <div class="score1_earn pointer">
                                  +100
                             </div>
                             <p class='remain_text'>本月累积赚取</p>
                             <div class="detail_text pointer blue">明细 &gt;</div>
                        </div>
                        <div class="detail_item fl">
                            <div class="score1_used pointer">
                                  -200
                             </div>
                             <p class='remain_text'>本月累积消费</p>
                             <div class="detail_text pointer blue">明细 &gt;</div>
                        </div>
                    </div>
                </div>
                <div class="box_right fl">
                    <div class="score1_use_title">
                        积分用途
                    </div>
                    <ul class="score1_use_detail">
                        <li class="use_item">1、发布计划，勾选展现IM </li>
                        <li class="use_item">2、积分打赏 </li>
                        <li class="use_item">3、查看计划 </li>
                        <li class="use_item">4、积分商城兑换礼品</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 我的积分模块end -->
        <!-- 成长之路start -->
        <div class="grow score1_item clearfix">
            <div class="score1_item_top">
                <div class="top_title fl">
                     成长之路
                </div>
                <div class="top_coin fr">
                    <div class="coin_left fl pointer">
                          签到
                    </div>
                    <div class="coin_right fl">
                        <p class="coin_day">5天</p>
                        <p class="add_score yellow">+20</p>
                    </div>
                </div>
            </div>
            <div class="grow_box score1_item_box">
                 <div class="grow_box_left box_left fl">
                      <div class="grow_item everyday_coin active pointer">
                          每日一签
                          <div class="coin_step item_fllow active">0/3</div>
                        </div>
                      <div class="complete_information grow_item pointer">
                          完善信息
                        <div class="complete_step item_fllow">0/2</div>
                      </div>
                      <div class="grow_item invite_friends pointer">
                          邀请好友
                        <div class="invite_step item_fllow">0/1</div>
                      </div>
                </div>
                <div class="grow_box_right box_right fl ">
                     <!-- 每日一签start -->
                    <div class="grow_box_right_item ">
                        <div class="grow_box_right_l fl">
                            <div class="everyday_coin_title">
                                每日一签
                            </div>
                            <div class="coin_introduction">
                                介绍：每日签到有积分奖励哦，签越多拿越多
                            </div>
                            <div class="coin_msg">
                                    当前日期：2018年9月6 已连续签到 <span class="yellow">1天</span>
                            </div>
                            <div id="coin_date">
                                
                            </div>
                        </div>
                        <div class="grow_box_right_r fl">
                            <div class="coin_rule_title">
                                签到规则
                            </div>
                            <ul class="coin_rule_detail">
                                <li class="rule_item rule_first">1、每日签到可获得20积分,连续打卡可获得更多成长值：
                                    <div class="card_recode">
                                        <div class="recode_title">打卡天数</div>
                                        <ul class="recode_day">
                                            <li class="day_item">
                                                    <span class="day_text_l">每日签到</span>
                                                    <span class="day_text_r">+20积分</span>
                                            </li>
                                            <li class="day_item">
                                                    <span class="day_text_l">连续签到7天</span>
                                                    <span class="day_text_r">+30积分</span>
                                            </li>
                                            <li class="day_item">
                                                    <span class="day_text_l">连续签到15天</span>
                                                    <span class="day_text_r">+50积分</span>
                                            </li>
                                            <li class="day_item">
                                                    <span class="day_text_l">连续签到30天</span>
                                                    <span class="day_text_r">+100积分</span>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li class="rule_item">2、每<span class="yellow">30天一次循环</span>,最多连续签到30天 </li>
                                <li class="rule_item">3、连续签到指：截止到您当前签到日期,之前连续不间断 </li>
                                <li class="rule_item">&nbsp;&nbsp;&nbsp;的天数(<span class="yellow">跨月的天数也计入连续签到天数</span>);</li>
                                <li class="rule_item">4、连续签到到指定天数，可获得相应积分奖励，若某天</li>
                                <li class="rule_item">&nbsp;&nbsp;&nbsp;<span class="yellow">中断签到则需要重新开始计算连续签到天数</span>);</li>
                                <li class="rule_item">5、累计签到天数指从您开始签到到当前查看时间，累计签</li>
                                <li class="rule_item"> &nbsp;&nbsp;&nbsp;到的总天数；</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 每日一签end-->
                    <!-- 完善信息start -->
                    <div class="grow_box_right_item hide">
                        <div class="complete_box_item">
                            <div class="complete_item_l fl">
                                <div class="complete_logo fl">
                                    <img src="../assets/images/jf_list_ico.png" alt="">
                                </div>
                                <div class="complete_msg fl">
                                    <p class="complete_msg_top">注册送积分</p>
                                    <p class="complete_msg_bottom">成功注册即可领取奖励</p>
                                </div>
                            </div>
                            <div class="to_get pointer fr">
                                未领取
                            </div>
                            <div class="get_score yellow fr">
                                 100
                            </div>
                        </div>
                        <div class="complete_box_item">
                                <div class="complete_item_l fl">
                                    <div class="complete_logo fl">
                                        <img src="../assets/images/jf_list_ico.png" alt="">
                                    </div>
                                    <div class="complete_msg fl">
                                        <p class="complete_msg_top">完善信息送积分</p>
                                        <p class="complete_msg_bottom">完善个人基础信息即可领取奖励</p>
                                    </div>
                                </div>
                                <div class="to_get active pointer fr">
                                    已领取
                                </div>
                                <div class="get_score yellow fr">
                                     100
                                </div>
                        </div>
                        <div class="complete_box_item">
                                <div class="complete_item_l fl">
                                    <div class="complete_logo fl">
                                        <img src="../assets/images/jf_list_ico.png" alt="">
                                    </div>
                                    <div class="complete_msg fl">
                                        <p class="complete_msg_top">邀请注册送积分</p>
                                        <p class="complete_msg_bottom">邀请好友加入平台即可领取奖励</p>
                                    </div>
                                </div>
                                <div class="to_get pointer fr">
                                    未领取
                                </div>
                                <div class="get_score yellow fr">
                                     100
                                </div>
                        </div>
                    </div>
                    <!-- 完善信息end -->
                    <!-- 邀请朋友start -->
                    <div class="grow_box_right_item hide">
                        <div class="invite_friend_box">
                            <div class="invite_friend_title">
                                简单两步赚积分
                            </div>
                            <div class="invite_friend_step flex">
                                <div class="step_item ">
                                    <div class="step_item_img">
                                        <img src="../assets/images/yqhy_1.png" alt="">
                                    </div>
                                    <p class="step_item_text">登录上上计划</p>
                                    <p class="step_item_text">打开好友邀请界面</p>
                                </div>
                                <div class="step_arrow ">
                                     <img src="../assets/images/yqhy_arrow.png" alt="">
                                </div>
                                <div class="step_item ">
                                    <div class="step_item_img">
                                        <img src="../assets/images/yqhy_2.png" alt="">
                                    </div>
                                    <p class="step_item_text">被邀请人登录并完善用户</p>
                                    <p class="step_item_text">信息即邀请成功</p>
                                </div>
                                <div class="step_arrow ">
                                        <img src="../assets/images/yqhy_arrow.png" alt="">
                                   </div>
                                <div class="step_item ">
                                    <div class="step_item_img">
                                        <img src="../assets/images/yqhy_3.png" alt="">
                                    </div>
                                    <p class="step_item_text">获得奖励100积分</p>
                                    <p class="step_item_text">自动划转到您的账户</p>
                                </div>
                            </div>
                            <div class="invite_link flex">
                                 <p class="link_text">邀请链接:</p>
                                 <input type="text" class="link_msg" placeholder="www.ssjihua.com/115700" readonly>
                                 <p class="copy_link pointer">复制链接</p>
                            </div>
                        </div>
                    </div>
                    <!-- 邀请朋友end -->
                </div>
            </div>
        </div>
        <!-- 成长之路end -->
        <!--积分兑换start -->
        <div class="score_exchange score1_item clearfix">
            <div class="score1_item_top">
                <div class="top_title fl">
                    积分兑换
                </div>
                <div class="to_more top_title pointer fr">
                    更多
                </div>
            </div>
            <div class="score1_item_box  exchange_box flex">
                 <div class="exchange_item">
                     <div class="exchange_item_img">
                         <img src="../assets/images/thumb_demo.png" alt="">
                     </div>
                     <p class="img_describe">斗鱼鱼丸1000个</p>
                     <div class="to_exchange">
                         <div class="need_score fl yellow">
                                50000
                         </div>
                         <div class="exchange_btn pointer fr">
                             兑换
                         </div>
                     </div>
                 </div>
                 <div class="exchange_item">
                        <div class="exchange_item_img">
                                <img src="../assets/images/thumb_demo2.png" alt="">
                            </div>
                            <p class="img_describe">腾讯体育VIP月卡</p>
                            <div class="to_exchange">
                                <div class="need_score fl yellow">
                                       500
                                </div>
                                <div class="exchange_btn pointer fr">
                                    兑换
                                </div>
                            </div>
                 </div>
                 <div class="exchange_item">
                        <div class="exchange_item_img">
                                <img src="../assets/images/thumb_demo3.png" alt="">
                            </div>
                            <p class="img_describe">QQ超级会员月卡</p>
                            <div class="to_exchange">
                                <div class="need_score fl yellow">
                                       1000
                                </div>
                                <div class="exchange_btn pointer fr">
                                    兑换
                                </div>
                            </div>
                 </div>
                 <div class="exchange_item">
                        <div class="exchange_item_img">
                                <img src="../assets/images/thumb_demo4.png" alt="">
                            </div>
                            <p class="img_describe">OFO月卡</p>
                            <div class="to_exchange">
                                <div class="need_score fl yellow">
                                       10000
                                </div>
                                <div class="exchange_btn pointer fr">
                                    兑换
                                </div>
                            </div>
                 </div>
            </div>
        </div>
        <!--积分兑换end -->
    </div>
</template>
<script>
  export default {
    name: 'Score',
    mounted : function () {
        layui.use('laydate', function () {   
             //  加载日期插件
             var laydate = layui.laydate;
             laydate.render({
                     elem: '#coin_date' ,
                     type: 'date',
                     format: 'M月d日',
                     show: true ,
                     position: 'static',
                     showBottom: false,
                     zIndex: 99999999,
                     theme: '#43a047'
             });
        }); 
    }
  }
</script>
<style scoped>
/*面板信息main的样式*/

#main{
    width:100%;
    margin:1px auto;  
    position: relative;
    background: #f6f6f6;
    padding:20px 0 80px 0;
    box-sizing:border-box;
}
#nav{
    width:1200px;
    margin:0px auto  15px auto;
}
.nav_item{
    width: 90px;
	height: 36px;
    border-radius: 4px;
    line-height:36px;
    text-align: center;
    margin-left:20px;
}
.nav_item.active{
	background-color: #fb8c00;
    color:#fff;
}
.score1_logo{
    width:100%;
    height:210px;
    margin:0 auto;
    position: relative;
    background: url(../assets/images/banner_zjf1.png) left top no-repeat;
}
.banner_text{
     width:513px;
     margin:15px auto 0 auto;
     display: block;
     position: absolute;
     left:50%;
     margin-left:-256.5px;
     top:50%;
     margin-top:-8px;
     
}

.score1_item{
    width:1200px;
    margin:0px auto;
}
.score1_item_top{
    line-height:70px;
    height: 70px;
}
.top_title{
	font-size: 24px;		
}
.score1_item_box{
    width: 1200px;
	height: 288px;
	background-color: #ffffff;
	box-shadow: 2px 2px 8px 0px 
    rgba(183, 183, 183, 0.35);
    padding:10px 30px;
    box-sizing: border-box;
}
.box_left{
    width: 737px;
    height: 242px;  
    margin-right:91px;
}
.box_right{
    width: 311px;
    height: 242px;
}
.score1_detail_title{
    padding-left:35px;
    background: url(../assets/images/top_jb@2x.png) left center no-repeat;
    background-size:27px;
    height:45px;
    line-height:45px;
    font-size: 18px;
    border-bottom:1px solid #e5e5e5;
    	
}
.score1_use_title{
    height:45px;
    line-height:45px;
    font-size: 18px;
    border-bottom:1px solid #e5e5e5;
    	
}
.detail_item{
    width:200px;
    height:190px;
    margin:0px 20px;
}
.score1_remain,.score1_earn,.score1_used{
    width: 100px;
	height: 100px;
	background-color: #fff9f1;
    border: solid 1px #ffc984;
    border-radius: 50%;
    font-size: 28px;
    line-height:100px;
    text-align: center;
    color: #f65726;
    margin:30px auto 0 auto;
}
.score1_earn{
    background-color: #f4fff1;
    border: solid 1px #7cca60;  
	font-size: 24px;	
	color: #43a047;
}
.score1_used{
    background-color: #f1fdff;
    border: solid 1px #88d3ea;
	font-size: 24px;	
	color: #039be5;
}
.remain_text{   
	height:55px;
	font-size: 16px;
	line-height: 55px;
    text-align: center;
}
.recharge{
    width: 86px;
	height: 30px;
	background-color: #fb8c00;
    border-radius: 4px;
	font-size: 14px;
	line-height: 30px;
	color: #ffffff;
    text-align: center;	
    margin:0 auto;
}
.detail_text{
    width: 50px;
	height: 30px;
	line-height: 30px;
    text-align: center;	
    margin:0 auto;
	font-size: 16px;	
}
.score1_use_detail{
    margin:35px 0 0 10px;
}
.use_item{
    height:32px;
	font-size: 16px;
	line-height: 32px;
	color: #666666;
}

.laydate-theme-molv .layui-laydate-main{
    width:480px !important;
}
#layui-laydate1 .layui-laydate-header{
    display:none;
}
.layui-laydate-content{
    border: 1px solid #e2e2e2 !important;
}
.layui-laydate-content th, .layui-laydate-content td{
    width:70px !important;
    height:42px !important;
}
.grow_box{
    height:471px;
}
.top_coin{
    width: 176px;
    height: 42px;
    position: relative;
    top:15px;
	background-color: #ffffff;
	box-shadow: 1px 2px 7px 0px 
		rgba(110, 216, 241, 0.6);
	border-radius: 4px;
	border: solid 1px #01acfe;
}
.coin_left{
    padding-left:30px;
    box-sizing: border-box;
    width: 96px;
	height: 42px;
	background:url(../assets/images/jf_btn_qd.png) 15px center no-repeat #039be5;
    border-radius: 4px 0px 0px 4px;
    font-size: 16px;
    text-align: center;
	line-height: 42px;
	color: #ffffff;
}
.coin_right{
    width: 80px;
	height: 42px;
	border-radius: 4px 0px 0px 4px
}
.coin_day,.add_score{
    line-height:25px;
    height:17px;
    text-align: center;
	font-size: 10px;
	letter-spacing: 1px;

}
.coin_day{
    color: #4d4d4d;
}
.grow_box_left{
    width: 211px;
    height: 248px;
    margin-top:40px;
}
.grow_item{
    position: relative;
    width: 211px;
    height: 68px;
    padding-left:40px;
    padding-right:50px;
    box-sizing:border-box;
    margin-bottom:25px;
    border-radius: 4px;
    text-align: center;
    line-height: 68px;
    font-size: 18px;
}
.everyday_coin{
    color:#666666;
    border: solid 1px #dddddd;
    background:url(../assets/images/jf_mryq.png) 15px center no-repeat,
               url(../assets/images/jf_right_default.png) right center no-repeat;
}
.everyday_coin.active{
    color:#1e88e5;
    border: solid 1px #03a9f4;
    background:url(../assets/images/jf_mryq_active.png) 15px center no-repeat,
               url(../assets/images/jf_right_avtive.png) right center no-repeat;
}
.coin_step,.complete_step,.invite_step{
    position: absolute;
    right:10px;
    top:0;
    bottom:0;
	font-size: 18px;
}
.coin_step.active,.complete_step.active,.invite_step.active{
   color:#fff;
}
.complete_information{
    color:#666666;
    border: solid 1px #dddddd;
    background:url(../assets/images/jf_wsxx.png) 15px center no-repeat,
               url(../assets/images/jf_right_default.png) right center no-repeat;
}
.complete_information.active{
    color:#1e88e5;
    border: solid 1px #03a9f4;
    background:url(../assets/images/jf_wsxx_active.png) 15px center no-repeat,
               url(../assets/images/jf_right_avtive.png) right center no-repeat;
}
.invite_friends{
    color:#666666;
    border: solid 1px #dddddd;
    background:url(../assets/images/jf_yqhy.png) 15px center no-repeat,
               url(../assets/images/jf_right_default.png) right center no-repeat;
}
.invite_friends.active{
    color:#1e88e5;
    border: solid 1px #03a9f4;
    background:url(../assets/images/jf_yqhy_active.png) 15px center no-repeat,
               url(../assets/images/jf_right_avtive.png) right center no-repeat;
}


.grow_box_right{
    width:830px;
    height:451px;
}
.grow_box_right_l{
    width: 503px;
    height: 445px;
    margin-right:18px;
   
}
.grow_box_right_r{
    width: 307px;
    height: 445px;
}
.everyday_coin_title{
    height: 24px;
	font-size: 18px;
	line-height: 32px;
}
.coin_introduction{
	height: 50px;
	font-size: 14px;
	line-height: 45px;
    color: #686767;
    width: 509px;
	border-bottom:1px solid #cccccc;
}
.coin_msg{
	height: 40px;
	font-size: 14px;
	line-height: 40px;
	color: #666666;
}

.coin_rule_title{
    height:22px;
    line-height:22px;
    font-size: 18px;
}
.coin_rule_detail{
    margin:15px 0 0 0px;
}
.rule_item{
    color: #666666;
	height: 30px;
	font-size: 12px;
	line-height: 20px;
}
.rule_first{
    height:195px;
    margin-bottom:10px;
}
.recode_day{
    margin-left:10px;
}
.recode_title{
	height: 36px;
    background-color: #f6f6f6;
    line-height:36px;
    font-size: 12px;
    padding-left:10px;
}
.day_item{
    height: 36px;
    line-height:36px;
    font-size: 12px; 
}
.day_text_l{
    display:inline-block;
    width:160px;
}
.day_text_r{
    display:inline-block;
}
.to_more{
    line-height: 70px;
    height: 70px;
	font-size: 16px;
	color: #666666;
}
.exchange_box{
    justify-content:space-between;
    height:330px;
}
.exchange_item{
    width: 262px;
	height: 278px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dfdfdf;
    padding:20px 19px;
    box-sizing: border-box;
    margin-top:10px;
}
.exchange_item_img{
    width: 223px;
    height: 154px;
    margin:5px auto;
}
.img_describe{
    width: 223px;
    line-height:30px;
    height:30px;
    margin:5px auto;
	
}
.to_exchange{
    width: 223px;
    margin:5px auto;
    line-height:30px ;
    height:30px;
}
.need_score{
    padding-left:20px;
    background:url(../assets/images/top_jb.png) left center no-repeat;
}
.exchange_btn{
    width: 68px;
    height: 30px;
    text-align: center;
	background-color: #fb8c00;
    border-radius: 4px;
	font-size: 14px;
	color: #ffffff;
}
</style>