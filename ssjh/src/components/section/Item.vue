<template>
        <div id="container" class="fl">
                <div class="subtitle">
                    <ul class="subtitle_left fl">
                        <li class="msg_item fl pointer win">乖乖中奖计划</li>
                        <li class="msg_item fl pointer check"> 
                            <img src="../../assets/images/my_info@2x.png" alt=""  class="msg_img">
                            查看ID
                            <span class="use_score">(将消耗20积分)</span></li>
                    </ul>
                    <ul class="subtitle_right fr">
                          <li class="r_item fl">
                                  <div class="collect pointer">
                                      <img src="../../assets/images/ico_jsc.png" alt="" class="darkicon collect_img">收藏
                                  </div>
                          </li>
                          <li class="r_item fl">
                                  <div class="collect pointer">
                                      <img src="../../assets/images/ico_zf.png" alt="" class="darkicon collect_img">转发好友/群
                                  </div>
                          </li>
                         <li class="r_item fl">
                             <router-link  to="/collect" class="collect pointer" data-jump='collect'>
                                 <img src="../../assets/images/ico_sc.png" alt="" class="darkicon collect_img">我的收藏
                             </router-link>
                         </li>
                         <li class="r_item fl" data-jump='plan'>
                            <router-link to="/plan" class="layui-btn layui-btn-normal manage_plan">管理/发布计划</router-link>
                        </li>
                        
                    </ul>
                </div>
                <div class="item_list">
                      <table class="layui-table" lay-skin="line">
                          <colgroup>
                              <col width="180">
                              <col width="260">
                              <col width="160">
                              <col width="150">
                              <col width="275">
                          </colgroup>
                          <thead>
                              <tr>
                                  <th class="td_first">计划时间</th>
                                  <th>最终截止</th>
                                  <th>计划结果</th>
                                  <th>当前预测值</th>
                                  <th class="grounds_number"><span>组号:5组</span><p class="copy pointer">复制</p></th>
                                  
                              </tr>   
                          </thead>
                              <tbody>
                                <tr>
                                  <td  class="td_first">033-037期</td>
                                  <td>第一期-033期-15614</td>
                                  <td><span class="layui-badge-dot layui-bg-green"></span>&nbsp;中</td>
                                  <td>12489</td>
                                  <td rowspan="8" class="write_number">
                                          <textarea autofocus>
                                          </textarea>
                                  </td>
                                </tr>
                                <tr>
                                      <td  class="td_first">033-037期</td>
                                      <td>第一期-033期-15614</td>
                                      <td><span class="layui-badge-dot layui-bg-green"></span>&nbsp;中</td>
                                      <td>12489</td>
                                      <td >     
                                      </td>
                                  </tr>
                                  <tr>
                                          <td  class="td_first">033-037期</td>
                                          <td>第一期-033期-15614</td>
                                          <td><span class="layui-badge-dot layui-bg-green"></span>&nbsp;中</td>
                                          <td>12489</td>
                                          <td >     
                                          </td>
                                  </tr>
                                  <tr>
                                          <td  class="td_first">033-037期</td>
                                          <td>第一期-033期-15614</td>
                                          <td><span class="layui-badge-dot layui-bg-green"></span>&nbsp;中</td>
                                          <td>12489</td>
                                          <td ></td>
                                  </tr>
                                  <tr>
                                          <td  class="td_first">033-037期</td>
                                          <td>第一期-033期-15614</td>
                                          <td><span class="layui-badge-dot layui-bg-green"></span>&nbsp;中</td>
                                          <td>12489</td>
                                          <td ></td>
                                  </tr>
                                
                                <tr>
                                      <td  class="td_first">033-037期</td>
                                      <td>第一期-033期-15614</td>
                                      <td><span class="layui-badge-dot"></span>&nbsp;挂</td>
                                      <td>12489</td>
                                      <td></td>
                               </tr>
                               <tr>
                                      <td  class="td_first">033-037期</td>
                                      <td>第一期-033期-15614</td>
                                      <td><span class="layui-badge-dot layui-bg-black"></span>&nbsp;未开</td>
                                      <td class="btn1"><p class="to_look pointer" data-to="look">查看计划</p></td>
                                      <td></td>
                              </tr>
                              <tr>
                                      <td  class="td_first">033-037期</td>
                                      <td>第一期-033期-15614</td>
                                      <td></td>
                                      <td>12489</td>
                                      <td></td>
                              </tr>
                               
                              </tbody>
                     </table>
                </div>
                <div class="now_status">
                      <p class="status">当前计划信息:  重庆时时彩  万位_定码  定5码  5期计划</p>
                      <p class="status">当前计划状态:  已完全30个周期,盈利率100.00%,错误0,最大连对30个,最大连错,当前连错0。</p>
                      <p class="status">当前预测周期：033-037期间</p>
                </div>
          </div>
</template>
<script>
  export default {
    name: 'Item',
  }
</script>
<style scoped>
/*container  index_item万位 页面样式*/
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
.msg_img{
    height:20px;
    position: relative;
    top:-3px;
}
.use_score{
    color:#666666;
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
.item_list{
    height: 480px;
    border: solid 1px #e3e3e3;
    margin-top:16px;
}
.layui-table{
    margin:0px;
    letter-spacing: 5px;
    
}
.layui-badge-dot{
    width:15px;
    height:15px;
    position: relative;
    top:3px;
}
.layui-table th, .layui-table td{
    padding:12px 0px;
   
}
.td_first{
    padding-left:5px !important;
}
.to_look{
    color:#fff;
    font-size:15px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 1px;
    width: 86px;
	height: 30px;
	background-color: #03a9f4;
    border-radius: 4px;
    position: relative;
    left:-10px;
}
.copy{
    width:50px;
    height:25px;
    line-height: 25px;
    background: #ffffff !important;
    position: absolute;
    right:10px;
    top:10px;
    text-align: center;
    letter-spacing: 1px;
}
.btn1{
    padding:0 !important;
}
.grounds_number{
    border-left:1px solid #e6e6e6 !important;
    padding-left:5px !important;
    position: relative;
}
.write_number,.write_number:hover{
    background:#fff;
    border-left:1px solid #e6e6e6 !important;
}
textarea{
    width:272px;
    height:316px;
}
.now_status{
    width:100%;
	height: 115px;
	background-color: #f7fcff;
    border: solid 1px #e3e3e3;
    box-sizing: border-box;
    padding:13px 0 0 18px;
}
.status{
	font-size: 15px;
	line-height: 24px;
    color: #333333;
    height:24px;
    padding:2px 0;
}
/*消耗积分弹出框的样式*/
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
.score_close{
    width: 14px;
    height: 14px;
    font-size: 18px;
    color: #999999;
    position: absolute;
    top:-56px;
    right:10px;
}
.score_notice{
    width:271px;
	font-size: 20px;
    color: #333333;
    margin:24px 104px;
}
.score_item{
    margin:20px 0;
}
.score_img{
    text-align: center;
}
.text_left,.text_right{
	height: 36px;
	font-size: 20px;
    line-height: 36px;
}
.text_left{
    margin-right:4px;
}
.score_sign{
    text-align: center;
    height: 26px;
	font-size: 16px;
	line-height: 26px;
}
.sure_use{
    width: 172px;
	height: 42px;
	background-color: #039be5;
    border-radius: 4px;
    text-align: center;
    line-height: 42px;
    color:#ffffff;
    margin:0 auto;
}
</style>