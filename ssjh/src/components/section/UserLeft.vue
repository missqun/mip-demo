<template>
        <div class="user_box_left fl">
            <ul>
              <li class="list_item user_information_li pointer active" @click="toActive($event)">
                  <router-link to='/basic'>&nbsp;&nbsp;&nbsp;&nbsp;我的资料</router-link>
               </li>
              <li class="list_item updata_avater_li pointer" @click="toActive($event)">
                  <router-link to='/avater'>&nbsp;&nbsp;&nbsp;&nbsp;头像修改</router-link>
               </li>
              <li class="list_item bind_phone_li pointer" @click="toActive($event)">
                  <router-link to='/bind'>&nbsp;&nbsp;&nbsp;&nbsp;绑定手机</router-link>
               </li>
              <li class="list_item updatxa_pwd_li pointer" @click="toActive($event)">
                 <router-link to='/upwd'>&nbsp;&nbsp;&nbsp;&nbsp;修改密码</router-link>
               </li>
           </ul>
        </div>
    </template>
    <script>
      export default {
        name: 'UserLeft',
        methods :  {
            toActive : function (event) {
                $(event.target).addClass("active").siblings().removeClass("active");
            }
        }
      }
    </script>
    <style scoped>
      .user_box_left{
        width: 200px;
        height: 600px;
        background-color: #eefaff;
    }
    .list_item{
        height:48px;
        opacity: 0.8;
        box-sizing: border-box;
        margin:10px 0;
        line-height: 48px;
        text-align: center;
        font-size: 16px;
        border-left:4px solid transparent;
    }
    .list_item:hover,.list_item.active{
        border-left:4px solid  #039be5;
        background-color: #ffffff;
        color: #039be5;
        background-size:29px;
        transition: all .5s;
    }
    .user_information_li{
        background:url(../../assets/images/grzx_grzl.png) 40px center no-repeat;
        
    }
    .user_information_li.active,.user_information_li:hover{
       background:url(../../assets/images/grzx_grzl_active.png) 40px center no-repeat #fff;
    }
    .updata_avater_li{
        background:url(../../assets/images/grzx_txxg.png) 40px center no-repeat;
        
    }
    .upadata_avater_li.active,.updata_avater_li:hover{
       background:url(../../assets/images/grzx_txxg_active.png) 40px center no-repeat #fff;
    }
    .bind_phone_li{
        background:url(../../assets/images/grzx_bdsj.png) 40px center no-repeat;
        
    }
    .bind_phone_li.active,.bind_phone_li:hover{
       background:url(../../assets/images/grzx_bdsj_active.png) 40px center no-repeat #fff;
    }
    .updata_pwd_li{
         background:url(../../assets/images/grzx_xgmm.png) 40px center no-repeat;
         
    }
    .updata_pwd_li.active,.updata_pwd_li:hover{
        background:url(../../assets/images/grzx_xgmm_active.png) 40px center no-repeat #fff;
    }
    .information_img{
        width:29px;
    }
    </style>