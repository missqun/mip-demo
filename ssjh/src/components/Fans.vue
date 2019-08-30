<template>
  <div id="main">
            <div class="user_header_logo">
                    <div class="user_logo">
                        <img src="../assets/images/avatar@2x.png" alt="" class='avatar fl'>
                        <div class="user_name_id fl">
                             <p class="name">王五五</p>
                             <p class="id">ID:659878</p>
                        </div>
                    </div>
             </div> 
             <div class="fans_title">
                 <img src="../assets/images/my_fans@2x.png" alt="" class="fans_img"><span>我的粉丝</span><span class="yellow">(24)</span>
             </div>
             <div class="fans_box">
                 <div class="fans_item">
                    <img src="../assets/images/avatar@2x.png" alt="" class='fans_avatar fl'>
                    <div class="fans_name_msg fl">
                         <p class="fans_name">李飞飞</p>
                         <p class="fans_msg">此人已于2018/11/2收藏了我的计划</p>
                    </div>
                    <div class="to_add_fans fr pointer">
                         加为好友
                    </div>
                 </div>
                 <div class="fans_item">
                    <img src="../assets/images/avatar@2x.png" alt="" class='fans_avatar fl'>
                    <div class="fans_name_msg fl">
                         <p class="fans_name">李飞飞</p>
                         <p class="fans_msg">此人已于2018/11/2收藏了我的计划</p>
                    </div>
                    <div class="to_add_fans fr pointer">
                         加为好友
                    </div>
                 </div>
                 <div class="fans_item">
                    <img src="../assets/images/avatar@2x.png" alt="" class='fans_avatar fl'>
                    <div class="fans_name_msg fl">
                         <p class="fans_name">李飞飞</p>
                         <p class="fans_msg">此人已于2018/11/2收藏了我的计划</p>
                    </div>
                    <div class="to_add_fans fr pointer">
                         加为好友
                    </div>
                 </div>
                 <div class="fans_item">
                    <img src="../assets/images/avatar@2x.png" alt="" class='fans_avatar fl'>
                    <div class="fans_name_msg fl">
                         <p class="fans_name">李飞飞</p>
                         <p class="fans_msg">此人已于2018/11/2收藏了我的计划</p>
                    </div>
                    <div class="to_add_fans fr pointer">
                         加为好友
                    </div>
                 </div>
                 <div class="fans_item">
                    <img src="../assets/images/avatar@2x.png" alt="" class='fans_avatar fl'>
                    <div class="fans_name_msg fl">
                         <p class="fans_name">李飞飞</p>
                         <p class="fans_msg">此人已于2018/11/2收藏了我的计划</p>
                    </div>
                    <div class="to_add_fans fr pointer">
                         加为好友
                    </div>
                 </div>
                <div class="" id="fans_pages">

                </div>
             </div>
    </div>
</template>
<script>
  export default {
    name: 'Fans' 
  }
</script>
<style scoped>
 /*面板信息main的样式*/

#main{
    width:100%;
    height:1000px;
    margin:1px auto;  
    position: relative;
    background: #f6f6f6;
}
/*user_header_logo的样式*/
.user_header_logo{
    width: 100%;
	height: 180px;
    background:url(../assets/images/profile_bg.png) left top no-repeat;
	box-shadow: 3px 5px 6px 0px 
		rgba(204, 204, 204, 0.2);
    
}
.user_header_logo:before{
    content:"";
    display:table;
}
.user_logo{
    width:1200px;
    margin:42px auto;
    color: #ffffff;
}
.avatar{
    width:96px;
    margin-right:13px;
}
.name{
	font-size: 24px;
	line-height: 50px;
}
.id{
    font-size: 16px;
	line-height: 46px;
}
.fans_img{
    width:31px;
    position: relative;
    top:-3px;
    margin-right:5px;
}
.fans_title{
    width:1200px;
    height:46px;
    margin:32px auto 0px auto;
	font-size: 18px;	
	line-height:30px;
	color: #333333;
}
.fans_box{
    width: 1200px;
	height: 796px;
	background-color: #ffffff;
	box-shadow: 2px 2px 8px 0px 
        rgba(183, 183, 183, 0.35);
    margin:0 auto;
    padding:0px 30px;
    box-sizing: border-box;
    position: relative;
}
/*清楚外边距溢出*/
.fans_box:before{
   content:'';
   display:table;
}
.fans_box:after{
    content:'';
    display:table;
 }
.fans_item{
    width: 1118px;
    height: 87px;
    border-bottom:1px solid #e9e9e9;
    line-height:87px;
    margin:25px 0;
}
.fans_avatar{
    width:54px;
    margin-right:13px;
}
.fans_name{
	height: 24px;
	font-size: 18px;
	line-height: 24px;
}
.fans_msg{
	height: 19px;
	font-size: 14px;
	line-height: 30px;
	color: #666666;
}
.to_add_fans{
    width: 106px;
	height: 38px;
	background-color: #039be5;
    border-radius: 4px;
    line-height:38px;
    color:#fff;
    text-align: center;
    margin:auto 0;
}
#fans_pages{
    position: absolute;
    bottom:80px;
    left:426px;
    width:400px;
}
</style>