<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="我的资料" class="header" > </x-header>
        <div class="update_avater flex">
            <div class="avater_img ">
                 <img :src="userInfo.avatar" alt="" class="avater">
                 <img src="/webdemo/h5/res/images/avatar_change.png" alt="" class="avater_change" @click="showMenu" >
                 <!-- @click.stop="uploadHeadImg" -->
                 <!-- <input type="file" accept="image/*" @change="handleFile"  class="hiddenInput"/> -->

            </div>
            <action-sheet
            class="actiontext"
            v-model="show1" 
            :menus="menus"  
            show-cancel 
            close-on-clicking-mask 
            close-on-clicking-menu
            >
            </action-sheet>
            <div class="user_name_id">
                <p class="user_name">{{userInfo.uname}}</p>
                <p class="user_id">ID:{{userInfo.id}}</p>
            </div>
        </div>
        <group class="personal_bg">
            <cell-box class="cell">
                <span class="cell_title">昵称</span>
                <input type="text" placeholder="请设置昵称" name="" class="xinput">
            </cell-box>
            <cell-box class="cell">
                <span class="cell_title">性别</span>
                <span class="sex" :class="{active:isActive}"><img src="/webdemo/h5/res/images/sex_m.png" alt="" class="sex_img">男</span>
                <span class="sex"><img src="/webdemo/h5/res/images/sex_fm.png" alt="" class="sex_img">女</span>
            </cell-box>
            <cell-box class="cell" is-link link="/bindphone">
                <span class="cell_title">绑定手机</span>
                <span class="to_bind">去绑定</span>
            </cell-box>
            <x-textarea title="个性前面" placeholder="这么有个性，签个名？"  class="xtextarea"></x-textarea>
        </group>
         <x-button class="submit" type="primary" action-type="button"  text="提交"></x-button> 
         <p class="other_msg">完善个人信息奖励100积分</p>
    </div>
</template>
<script>
export default {
    data () {
        return {
          show1:false,
          menus:{
             menu1:"拍照",
             menu2:"相册选择"
          },
          userInfo:{
               uname:"lisa",
               id:"666666",
               avatar:'/webdemo/h5/res/images/my_avatar_default.png'     
          }
            
        }
    },
    methods: {
        showMenu () {
            this.show1=true;
        }
    // // 打开图片上传
    // uploadHeadImg: function () {
    //   this.$el.querySelector('.hiddenInput').click()
    // },
    // // 将头像显示
    // handleFile: function (e) {
    //   let $target = e.target || e.srcElement
    //   let file = $target.files[0]
    //   var reader = new FileReader()
    //   reader.onload = (data) => {
    //     let res = data.target || data.srcElement
    //     this.userInfo.avatar = res.result
    //   }
    //   reader.readAsDataURL(file);
    // },
  }
}
</script>
<style scoped>
.vux-actionsheet-menu-default{
    color:rgba(3, 155, 229, 1) !important;
}
.cell{
    padding:0.9rem 0.7rem !important;
}
.personal_bg{
    background: #fff;
    margin-top:0.6rem;
}
 .update_avater{
     justify-content: start;
     background: #fff;
     height:4rem;
     width:100%;
     padding:1rem;
     
 }
 .avater_img{
    width:4rem;
    height:4rem;
    border:1px solid rgba(221,221,221,1);
    border-radius:50%;
 }
 .avater_img{
     margin-right:1rem;
     position: relative;
 }
 .user_id{
     color:#999;
     font-size:0.9rem;
 }
 .avater{
     position: absolute;
     left:50%;
     top:50%;
     margin:-17px 0 0 -18px;
     width:36px;
     height:34px;
 }
 .avater_change{
    position: absolute;
    right:-0.3rem;
    bottom:0rem;
 }
 .hiddenInput{
     opacity: 0;
      position: absolute;
     right:-0.3rem;
     bottom:0rem;
     width:22px;
     height:18px;
 }
 .sex{
     color:#999;
     margin-right:2rem;

 }
 .sex_img{
     position: relative;
     top:0.1rem;
     margin-right:0.2rem;
 }
 .xinput{
     border:none;
     outline: none;
     height:1.5rem;
     font-size:1rem;
     color:#999;
 }
 .cell_title{
     display:inline-block;
     width:5rem;
 }
 .to_bind{
     color:#039BE5;
 }
 .submit{
     margin:0.6rem auto;
 }
 .other_msg{
     color:rgba(153,153,153,1);
     font-size:0.9rem;
     text-align: center;
 }

</style>
