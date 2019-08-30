<template>
    <div  class='g-inherit m-main'>
        <x-header class="m-tab" :left-options="{backText: ' '}">
        <h1 class="m-tab-top">群管理</h1>
        <a slot="left"></a>
        </x-header>
        <div class="own_control">
           <group>
               <cell title="加群验证" is-link>
                   <p @click="showIdentity=true">需要身份验证</p>
                </cell>
               <cell title="邀请他人权限" is-link>
                   <p @click="showIdentity=true">管理员邀请</p>
               </cell>
               <cell title="被邀请人身份验证" is-link>
                   <p @click="showIdentity=true">需要验证</p>
               </cell>
               <cell title="群成员查看信息权限" is-link>
                    <p @click="showIdentity=true">允许</p>
               </cell>
           </group>
           <group class="g_member_box">
                <cell title="管理员" value="共5人" ></cell>
                <div class='g_member' v-for='(member,index) in arr'   :key='index'  >
                    <img width="40" class='avatar' src='http://yx-web.nos.netease.com/webdoc/h5/im/default-icon.png'>
                    <p class="g_name">王老五</p>
                </div>
           </group>
            <group class='own_say'>
                <x-switch title="禁言设置" v-model="say">仅限群主管理员发言</x-switch>
            </group>
        </div>
        
        <action-sheet
       v-model="showIdentity"
      :menus="identityMenu"
      show-cancel
      close-on-clicking-mask 
      close-on-clicking-menu
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')">
    </action-sheet>
    </div>
</template>
<script>
export default {
    data () {
        return {
            showIdentity:false,
            say:false,
            identityMenu:{
              menu1:"允许任何人加入",
              menu2:"需要验证",
              menu3:'不允许任何人加入'
            },
            arr:[1,2,3,4,5]
        }
    }
}
</script>
<style >
  .vux-actionsheet-menu-default{
      color:#039BE5;
    }
 .own_control{
     width:100%;
     margin-top:4.8rem;
    
 }
 .g_member_box{
     background:#fff;
 }
 .g-window .own_control .weui-cell{
     height:2.2rem;
     background:#fff;
 } 
  .g-window .own_control .weui-cell .weui-cell__ft{

     font-size:0.9rem;
     color:#666;
 }
 .g-window .weui-switch:checked, .g-window .weui-switch-cp__input:checked ~ .weui-switch-cp__box{
     border-color: #04BE02;
    background-color: #04BE02;
 }

 .g_member{
     float: left;
     width:16%;
     margin:0.2rem 2%; 
 }
 img.avatar{
     display: block;
     margin:0 auto;
 }
 p.g_name{
     width:100%;
     text-align: center;
 }
 .own_say{
     margin-top:1rem;
 }
</style>

