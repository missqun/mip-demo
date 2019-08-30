<template>
        <div id="left" class="fl">
                <div id="city">
                    <div class="pointer addre_title"><span class="addre">重庆时时彩</span><img src="../../assets/images/bg_down.png" alt="">  </div>
                    <div class="addre_box hide">
                         <p class="addre_item pointer">重庆时时彩</p>
                         <p class="addre_item pointer">天津时时彩</p>
                         <p class="addre_item pointer">新疆时时彩</p>
                         <p class="addre_item pointer">北京时时彩</p>
                         <p class="addre_item pointer">排列5</p>
                    </div>
                </div>
                <div class="left_menu">
                        <div class="plan flex pointer">
                            <span class="plan_text">计划项目列表 </span> 
                            <div class="to_up">
                                <img src="static/images/to_up.png" alt="" >
                            </div> 
                            <div class="to_down hide">
                                <img src="static/images/to_down.png" alt="" >
                            </div>
                        </div>
                        <div class="lists_box">
                            <div class="lists ">
                                <p class="lists_title  pointer">
                                    <i class="layui-icon layui-icon-triangle-d darkicon"></i>
                                    <i class="layui-icon layui-icon-triangle-r hide darkicon"></i>
                                    &nbsp;&nbsp;定位胆系列&nbsp;</p>
                                <ul class="ul_list ">
                                    <li class="list_item pointer active">定码 万位</li>
                                    <li class="list_item pointer">定码 千位</li>
                                    <li class="list_item pointer">定码 百位</li>
                                    <li class="list_item pointer">定码 十位</li>
                                    <li class="list_item pointer">定码 个位</li>
                                    <li class="list_item pointer">定码 万位</li>
                                    <li class="list_item pointer">定码 千位</li>
                                    <li class="list_item pointer">定码 百位</li>
                                    <li class="list_item pointer">定码 十位</li>    
                                </ul>
                            
                            </div>
                        
                            <div class="lists">
                                <p class="lists_title pointer">
                                    <i class="layui-icon layui-icon-triangle-r darkicon"></i>
                                    <i class="layui-icon layui-icon-triangle-d hide darkicon"></i>
                                    &nbsp;&nbsp;不定位胆系列</p>
                                <ul class="ul_list hide">
                                    <li class="list_item pointer">定码 万位</li>
                                    <li class="list_item pointer">定码 千位</li>
                                    <li class="list_item pointer">定码 百位</li>
                                    <li class="list_item pointer">定码 十位</li>
                                
                                </ul>
                            </div>
                            <div class="lists">
                                    <p class="lists_title pointer">
                                        <i class="layui-icon layui-icon-triangle-d hide darkicon"></i>
                                        <i class="layui-icon layui-icon-triangle-r darkicon"></i>
                                        &nbsp;&nbsp;任选胆码系列</p>    
                                        
                            </div>
                            <div class="lists">
                                    <p class="lists_title pointer">
                                        <i class="layui-icon layui-icon-triangle-d hide darkicon"></i>
                                        <i class="layui-icon layui-icon-triangle-r darkicon"></i>
                                        &nbsp;&nbsp;定组直选系列</p>       
                            </div>
                            <div class="lists">
                                    <p class="lists_title pointer">
                                        <i class="layui-icon layui-icon-triangle-d hide darkicon"></i>
                                        <i class="layui-icon layui-icon-triangle-r darkicon"></i>
                                        &nbsp;&nbsp;定位复式系列</p>       
                            </div>
                            <div class="lists">
                                    <p class="lists_title pointer">
                                        <i class="layui-icon layui-icon-triangle-d hide darkicon"></i>
                                        <i class="layui-icon layui-icon-triangle-r darkicon"></i>
                                        &nbsp;&nbsp;单式大底系列</p>       
                            </div>
                            <div class="lists">
                                    <p class="lists_title pointer">
                                        <i class="layui-icon layui-icon-triangle-d hide darkicon"></i>
                                        <i class="layui-icon layui-icon-triangle-r darkicon"></i>
                                        &nbsp;&nbsp;组选大底系列</p>       
                            </div>
                            <div class="lists">
                                    <p class="lists_title pointer">
                                        <i class="layui-icon layui-icon-triangle-d hide darkicon"></i>
                                        <i class="layui-icon layui-icon-triangle-r darkicon"></i>
                                        &nbsp;&nbsp;任选单式系列</p>       
                            </div>
                        </div>
                      
                        
                </div>
        </div>
</template>
<script>  
    export default {
     name: 'HomeLeft',
     mounted: function () {
        layui.use('layer', function () {
        var $ = layui.$;
            $(".addre_title").click(function(){
                $(".addre_box").show();
                $(".addre_item").click(function(){
                    $(".addre").html($(this).html());
                    $(".addre_box").hide();
                })
            })
            $('.lists_title').click(function(){
                $(this).children(".layui-icon").toggle();
                $(this).next().slideToggle(100);
                $(this).parent().siblings().find(".ul_list").slideUp(100);
                $(this).parent().siblings().find(".layui-icon-triangle-r").show();
                $(this).parent().siblings().find(".layui-icon-triangle-d").hide();
            })   
        }); 
     }
    }
</script>
<style scoped>
#left{
    width: 200px;
    height:719px;
    margin-right:20px; 
    position: relative;
}

#city{
    width: 200px;
	height: 36px;
	background-color: #039be5;
    border-radius: 4px;
    color: #ffffff;
    text-align: center;
    line-height: 36px;
    margin-bottom:10px;
    font-size:16px;
    border:none;
    box-sizing: border-box;
}
.addre_title{
    width: 200px;
	height: 36px;
	background-color: #039be5;
    border-radius: 4px;
    line-height:36px;
    font-weight: 600;
}
.addre{
    margin-right:20px;
}
.addre_box{
    width: 200px;
	background-color: #ffffff;
	box-shadow: 0px 2px 6px 0px 
		rgba(51, 51, 51, 0.2);
    border-radius: 4px;
    z-index:20;
    position: absolute;
    top:40px;
    left:0;
    box-sizing: border-box;
}
.addre_item{
    color:#666666;
    font-size:14px;
    text-align: center;
    line-height:35px;
}
.addre_item:hover,.addre_item.active{
    color:#1e88e5;
    background: #effaff;
    font-weight: 600;
}

.plan{
    width: 200px;
	height: 36px;
    background-color: #eeeeee;
    line-height:36px;
    font-size:15px;
    padding:0 15px;
    box-sizing: border-box;
    justify-content:space-between;
}
.lists{
    background-color: #f6f6f6;
}
.lists_title{
    height:36px;
    line-height: 36px;
    text-align: center;
    
}
.ul_list{
    background:#ffffff;
}
.list_item{
    text-align: center;
    width: 70px;
	height: 19px;
	font-size: 14px;
	line-height: 28px;
    margin:6px auto;
    color: #555555
}
.list_item:hover,.list_item.active{
    color:#1e88e5;
    font-weight: 600;
}      
    
</style>
      