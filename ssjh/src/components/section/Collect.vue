<template>
        <div id="container" class="fl">
                <div class="subtitle">
                    <ul class="subtitle_left fl">
                        <li class="item_sort fl pointer"> <img src="../../assets/images/sort.png" alt="" class="sort_img">&nbsp;时间</li>
                        <li class="item_sort fl pointer"> <img src="../../assets/images/sort.png" alt=""  class="sort_img">&nbsp;准确率</li>
                        <li class="item_sort fl pointer"> <img src="../../assets/images/sort.png" alt=""  class="sort_img">&nbsp;点击量</li>
                    </ul>
                    <ul class="subtitle_right fr">
                         <li class="r_item fl" data-jump="plan">
                            <router-link to="/plan" class="layui-btn layui-btn-normal manage_plan">管理/发布计划</router-link>
                        </li>
                        
                    </ul>
                </div>
                <div class="cell_box flex">
                    <div class="cell_collect pointer active">
                         <p class="cell_name">计划中中中(30)</p>
                         <p class="cell_gain">盈利率&nbsp;&nbsp;<span class="gain_number">90%</span></p>
                         <p class="cansel_collect"   @click="handleClick($event)"> 取消收藏</p>
                    </div>
                    <div class="cell_collect pointer active">
                          <p class="cell_name">计划中中中(30)</p>
                          <p class="cell_gain">盈利率&nbsp;&nbsp;<span class="gain_number">90%</span></p>
                          <p class="cansel_collect"  @click="handleClick($event)"> 取消收藏</p>
                     </div>
                     <div class="cell_collect pointer active">
                          <p class="cell_name">计划中中中(30)</p>
                          <p class="cell_gain">盈利率&nbsp;&nbsp;<span class="gain_number">90%</span></p>
                          <p class="cansel_collect" data-cansel='collect'> 取消收藏</p>
                     </div>
                     <div class="cell_collect pointer active">
                          <p class="cell_name">计划中中中(30)</p>
                          <p class="cell_gain">盈利率&nbsp;&nbsp;<span class="gain_number">90%</span></p>
                          <p class="cansel_collect" data-cansel='collect'> 取消收藏</p>
                     </div>
                     <div class="cell_collect pointer active">
                          <p class="cell_name">计划中中中(30)</p>
                          <p class="cell_gain">盈利率&nbsp;&nbsp;<span class="gain_number">90%</span></p>
                          <p class="cansel_collect" data-cansel='collect'> 取消收藏</p>
                     </div> 
                     <div class="cell_collect pointer active">
                          <p class="cell_name">计划中中中(30)</p>
                          <p class="cell_gain">盈利率&nbsp;&nbsp;<span class="gain_number">90%</span></p>
                          <p class="cansel_collect" data-cansel='collect'> 取消收藏</p>
                     </div>                                                                                                        
                </div>
                <div class="pages" >
                       <div class="pages_box ">
                          <div class="pages_record fl ">共4条收藏</div>
                          <div id="pages" class="fl">               
                          </div>
                      </div>
                </div>
          </div>
</template>
<script>
  export default {
    name: 'Collect',
    methods : {
        handleClick : function () {
            console.log($(event.target));
            $(event.target).parent().remove();
        }
    }
  }

</script>
<style scoped>
 /*container 万位 页面样式*/
 #container{
    width:979px;
}
.subtitle{
    width:100%;
    height:44px;
    border-bottom:1px solid #dddddd;
}
.item_sort,.collect{
    text-align: center;
	height: 16px;
	font-size: 16px;
	line-height: 44px;
    color: #666666;
    margin-right:10px;
}
.collect_img{
    position: relative;
    top:-2px;
    margin-right:2px;
}
.collect{
    height:21px;
    margin-right:20px;
}
.manage_plan{
    width: 138px;
	height: 36px;
	background-color: #03a9f4;
    border-radius: 4px;
    font-size:16px;
}
.cell_box{
    width:100%;
    justify-content:space-between;
    flex-wrap:wrap;
}
.cell_collect{
    width: 176px;
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
.cell:hover,.cell.active{
    background-color: #fff7f7;
    border: solid 1px #ffab91;
    color: #f65726;
}
.cell_name{
        height: 24px;
        font-size: 18px;  
        line-height:24px;      
}
.cell_gain{
	height: 40px;
	font-size: 14px;
    line-height: 40px;
    color:#666;
}
.gain_number{
	height: 24px;
	font-size: 18px;
	line-height: 24px;
    color: #43a047;
    font-weight:600;
}
.cansel_collect{
	height: 36px;
	background-color: #ffffff;
    border-radius: 4px;
    line-height:36px;
    text-align: center;
    margin-top:20px;
	border: solid 1px #dddddd;
}
.pages{
    width:100%;
    position: absolute;
    bottom:61px;
}
.pages_box{   
    width:500px;
    margin:5px auto;
}
#pages{
    width:400px;
}
.pages_record{
	height: 45px;
	font-size: 14px;
    line-height: 45px;
    color:#666666;
    margin-right:20px;
}
/*取消收藏的弹出层样式*/
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
.collect_close{
    width: 14px;
    height: 14px;
    font-size: 18px;
    color: #999999;
    position: absolute;
    top:-84px;
    right:10px;
}
.collect_text{
    width: 396px;
	height: 54px;
	font-size: 18px;
	line-height: 30px;	
    color: #333333;
    margin:50px auto;
}

.sure_cansel{
    width: 172px;
	height: 42px;
	background-color: #039be5;
    border-radius: 4px;
    text-align: center;
    line-height: 42px;
    color:#ffffff;
    margin:0 auto 16px auto;
}
.unsure_cansel{
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