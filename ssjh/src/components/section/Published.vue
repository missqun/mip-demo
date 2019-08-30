<template>
   <div id="container" class="fl">
              <div class="subtitle">
                  <ul class="subtitle_left fl">
                      <li class="msg_item fl pointer win">已发布计划</li>
                  </ul>
                  <ul class="subtitle_right fr">
                       <li class="r_item fl" data-jump='collect'>
                           <router-link to='/collect' class="collect pointer">
                               <img src="../../assets/images/ico_sc.png" alt="" class="darkicon collect_img">我的收藏
                           </router-link>
                       </li>
                       <li class="r_item fl" data-jump='plan'>
                          <router-link to='/plan' class="layui-btn layui-btn-normal manage_plan">管理/发布计划</router-link>
                      </li>
                      
                  </ul>
              </div>
              <div class="clear_notice">
                    <img src="../../assets/images/ico_warn.png" alt="" class="warn_img">
                    清空提示:清空当前玩法的计划,将重新开始计划盈利率
             </div>
              <div class="published_box">
                    <div class="published_item pointer ">
                            <p class="published_name">天天中奖计划(30)</p>
                            <p class="published_gain">盈利率&nbsp;&nbsp;<span class="published_number">90%</span></p>
                            <p class="cansel_planed" data-cansel="plan"> 取消计划</p>
                    </div>
              </div>
        </div>
</template>
<script>
  export default {
    name: 'Published'   
  }
</script>
<style scoped>
#container{
    position: relative;
    width:979px;
}
.subtitle{
    width:100%;
    height:44px;
    border-bottom:1px solid #dddddd;
}
.msg_item,.collect{
    text-align: center;
	height: 44px;
	font-size: 16px;
	line-height: 44px;
    margin-right:20px;
}
.win{
	height: 44px;
	font-size: 18px;
	line-height: 44px;
    color: #333333;
    font-weight: 600;
}
.r_item{
    color:#666666;
    font-size:14px;
}
.collect_img{
    position: relative;
    top:-2px;
    margin-right:6px;
}
.collect{
    height:21px;
    margin-right:30px;
}
.manage_plan{
    width: 138px;
	height: 36px;
	background-color: #03a9f4;
    border-radius: 4px;
    font-size:16px;
}

.clear_notice{
    width:100%;
	height: 32px;
	background-color: #fffde7;
    border: solid 1px #ffecb3;
    margin:15px 0;
	font-size: 14px;
	line-height: 32px;
    color: #333333;
    padding:0 10px;
    box-sizing: border-box;
}
.published_box{
    width:100%;
    justify-content: space-between ;
    flex-wrap:wrap;
}
.published_item{
    width: 178px;
	height: 168px;
	background-color: #eefaff;
	box-shadow: 0px 0px 2px 0px 
		rgba(0, 0, 0, 0.2);
    border: solid 1px #90caf9;
    text-align: center;
    box-sizing: border-box;
    padding:20px 16px;
    margin-top:26px;
    color:#333;
}
.published_name{
    height: 24px;
    font-size: 18px;  
    line-height:24px;      
}
.published_gain{
height: 40px;
font-size: 14px;
line-height: 40px;
color:#666;
}
.published_number{
height: 24px;
font-size: 18px;
line-height: 24px;
color: #43a047;
font-weight:600;
}
.cansel_planed{
height: 36px;
background-color: #ffffff;
border-radius: 4px;
line-height:36px;
text-align: center;
margin-top:20px;
border: solid 1px #dddddd;
}

/*点击取消计划弹出层的样式*/
.layui-layer-title{
    position: relative;
    font-size: 18px !important;
    color: #333333;
    font-weight: 600;
}
.layui-layer-page .layui-layer-content{
    overflow:visible !important;
}
.layui-form-checked[lay-skin="primary"] i{
    border-color: #1e88e5;
    background-color: #1e88e5;
    color: #fff;
}
.layui-form-checkbox[lay-skin="primary"]:hover i{
    border-color:#1e88e5;
}
.gray_img{
    position: relative;
    top:-1px;
}
.planed_close{
    width: 14px;
    height: 14px;
    font-size: 18px;
    color: #999999;
    position: absolute;
    top:-84px;
    right:10px;
}
.planed_text{
    width: 396px;
	height: 54px;
	font-size: 18px;
	line-height: 30px;	
    color: #333333;
    margin:50px auto;
}

.sure_clear{
    width: 172px;
	height: 42px;
	background-color: #039be5;
    border-radius: 4px;
    text-align: center;
    line-height: 42px;
    color:#ffffff;
    margin:0 auto 16px auto;
}
.unsure_clear{
    width: 172px;
	height: 42px;
    background-color: #ffffff;
    border-radius: 4px;
    text-align: center;
    line-height: 42px;
    color: #666666;
    margin:0 auto;
    border: solid 1px #dddddd;
}

</style>