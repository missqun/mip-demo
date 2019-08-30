<template>
  <!-- 修改头像 -->
  <div class="updata_avater_box ">
        <div class="updata_avater_img avater_item">
             <img src="../../assets/images/my.jpg" alt="">
        </div>
        <div class="avater_notice img avater_item">
            <p class="advice">建议尺寸 150*150px</p>
            <p class="advice">支持jpg、png、gif格式</p>
        </div>
        <div id="reload_img" class="pointer avater_item">
            重新上传
        </div>
        <div class="avater_save pointer img avater_item">
            保存
        </div>
  </div>
</template>
<script>
  export default {
    name: 'UserAvater'
  }
</script>
<style scoped>
/*更改头像的样式*/
.updata_avater_box{
    width: 363px;
    height: 468px;
    margin:50px 298px 113px 339px;
}
.avater_item{
    margin:15px auto;
    width:190px;
}
.updata_avater_img{
    width: 190px;
	height: 190px;
	border-radius: 90px;
	border: solid 1px #ffffff;
}
.advice{
    width: 172px;
	height: 28px;
	font-size: 16px;
	line-height: 28px;
    color: #666666;
    text-align: center;
}
#reload_img{
    width: 170px;
	height: 42px;
	background-color: #ffffff;
	border-radius: 4px;
    border: solid 1px #dddddd;
    text-align: center;
	font-size: 16px;
	line-height: 42px;
    color: #666666;
    box-sizing: border-box;
}
.avater_save{
    width: 170px;
	height: 42px;
	background-color: #039be5;
    border-radius: 4px;
	font-size: 16px;
	line-height: 42px;
    text-align: center;
    color: #fefefe;
    box-sizing: border-box;
}
</style>