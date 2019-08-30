<template>
    <div id="container" class="fl">
              <div class="subtitle">
                  <ul class="subtitle_left fl">
                      <li class=" fl pointer before_publish">发布计划</li>
                      <li class=" fl pointer publish_rule"> <img src="../../assets/images/icon_prim.png" alt=""  class="prim_img">&nbsp;发布规则</li>
                  </ul>
                  <ul class="subtitle_right fr " data-jump="published">
                    <li class=" fl pointer published" > 
                        <router-link to='/published'>
                          <img src="../../assets/images/icon_clock.png" alt=""  class="clock_img">&nbsp;已发布计划
                       </router-link>  
                    </li>
                  </ul>
              </div>
              <div class="play_notice">
                  <img src="static/images/ico_warn.png" alt="" class="warn_img">
                  玩法提示:从0-9选择一个或者多个数字，与开奖号码最后一位匹配则中奖
              </div>
              <div class="now_box">
                  <ul class="select_date">
                      <li class="date fl">当前周期是<span class="yellow">012-014</span>期</li>
                      <li class="time fr">距离本期截止时间：<span class="yellow">00:54</span></li>
                 </ul>
                 <div class="select_box">
                       <div class="select_title">
                           <div class="title_left fl">选号区</div>
                           <div class="title_right fl">快键选号</div>
                       </div>
                       <div class="select_number_box clearfix">
                           <div class="oneplace fl">
                               个位
                           </div>
                           <div class="select_number fl">
                               <div class="number_item fl pointer" @click="toPush($event)" v-for="item of num">
                                   {{item}}
                               </div>
                           </div>
                           <div class="odd_even fl ">
                                <div class="number_item fl pointer">
                                        全
                                </div>
                                <div class="number_item fl pointer">
                                        大
                                </div>
                                <div class="number_item fl pointer">
                                        小
                                </div>
                                <div class="number_item fl pointer">
                                        奇
                                </div>
                                <div class="number_item fl pointer">
                                        偶
                                </div>
                                <div class="number_item fl pointer yellow">
                                        清
                                </div>
                           </div>
                       </div>
                       <div class="create pointer ">
                            生成
                        </div>
                        <div class="create_result">
                               {{checkNumber.join(" ")}}
                        </div>
                 </div>              
              </div>
              <div class="complete_plan pointer" data-complete="plan"> 
                  发布计划
              </div>
        </div>
</template>
<script>
  export default {
    name: 'Plan', 
    data () {
        return {
          checkNumber:[],
          num:[0,1,2,3,4,5,6,7,8,9]
        }
    },
    methods:{
        toPush : function (){
            this.checkNumber.push($(event.target).html());
        }
    }
  }
</script>
<style scoped>
/*container 万位 页面样式*/
.subtitle{
    width:100%;
    height:44px;
    border-bottom:1px solid #dddddd;
}
.before_publish,.publish_rule,.published{
	height: 45px;
	line-height: 45px;
    color: #333333; 
}
.before_publish{
    font-size: 18px;
    font-weight: 600;
    margin-right:10px;
}
.publish_rule{
    font-size:14px;
    color:#999999;
}
.prim_img{
    position: relative;
    top:-2px;
}
.published{
    color:#555555;
    font-size:14px;
}
.play_notice{
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
.warn_img{
    position: relative;
    top:-1px;
    margin-right:5px;
}
.select_date{
	height: 24px;
	font-size: 15px;
	line-height: 24px;
	color: #333333;
}
.select_box{
    width:100%;
	height: 200px;
	background-color: #fafdff;
    border: solid 1px #bbdefb;
    margin-top:18px;
    box-sizing: border-box;
    padding:16px 21px;
}
.select_title{
	height: 19px;
	font-size: 14px;
	line-height: 19px;
	color: #555555;
}
.title_right{
    margin-left:646px;
}
.oneplace{
    background:url(../../assets//images/oneplace.png) left center no-repeat;
    width: 56px;
    height: 40px;
    font-size: 14px;
    line-height:40px;
    text-align: center;
    color: #333333;
    margin-right:6px;
}
.select_number_box{
    color:#333333;
    margin-top:5px;
}
.select_number{
   position: relative;
   top:3px;
   margin-right:200px;
}
.number_item{
    width: 32px;
	height: 32px;
    line-height:32px;
    text-align: center;
    border-radius: 50%;
	font-size: 16px;
    background-color: #ffffff;
    border: solid 1px #cccccc;
    margin:0 4px;
}
.number_item.active{
    background-color: #03a9f4;
	color: #ffffff;
}
.create{
    width: 86px;
	height: 30px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #cccccc;
	font-size: 15px;	
    line-height: 30px;
    text-align: center;
    margin:20px auto;
}
.create_result{
	height: 31px;
	font-size: 24px;	
	line-height: 31px;
    color: #43a047;
    text-align:center;
}
.complete_plan{
    width: 140px;
	height: 36px;
	background-color: #03a9f4;
    border-radius: 4px;   
	font-size: 16px;
	line-height: 36px;
    color: #ffffff;
    text-align: center;
    margin:40px auto;
}

/*发布计划弹出框的样式*/
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
.close,.rule_close{
    width: 14px;
    height: 14px;
    font-size: 18px;
    color: #999999;
    position: absolute;
    top:-53px;
    right:10px;

}
.rule_colse{
    top:-10px;
}
.confirm_box{
    width: 473px;
    height: 266px;
    margin:19px 119px 19px 128px;
}
.sure_confirm,.knowed{
    width: 172px;
	height: 42px;
	background-color: #039be5;
    border-radius: 4px;   
	font-size: 16px;
	line-height: 42px;
    color: #fefefe;
    text-align: center;
    margin:30px auto;
}
.confirm_item{
    color: #333333;
    font-size: 16px;
    height:36px;
    line-height: 36px;
    margin:12px 0;  
}
.item_left{
    width:110px; 
    text-align: right;
    margin-right:10px;
}
.item_middle{
    text-align: left;
    margin-right:10px;
}
.item_right{
    font-size: 14px;
 
}
.plan_name{
    font-size: 14px;
    letter-spacing: 1px;
}
.plan_name{
    width: 200px;
	height: 36px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    padding:7px 0 7px 12px;  
    box-sizing: border-box;
}
.checked_number{
    letter-spacing: 3px;
}
.layui-form-select{
    width: 200px;	
	background-color: #ffffff;
    padding-right:0 !important;
    box-sizing: border-box;
}
.layui-input, .layui-textarea, .layui-select{
    height: 36px !important;
    border-radius: 4px !important;
}
.layui-form-select dl dd.layui-this{
    background:none;
    color:#333333;
}
/*发布规则的弹出框样式*/
.rule_box{
    width: 672px;
	font-size: 15px;
	letter-spacing: 1px;
    color: #333333;
    margin:18px 24px 8px 24px;
}
.rule_item{
   line-height:30px;
}


</style>