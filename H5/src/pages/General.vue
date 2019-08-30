<template>
  <!-- <div class="g-inherit m-main p-general" v-if="myInfo.account"> -->
   <div class="g-inherit m-main p-general" v-if="myInfo.account" > 
      <div id="spec">
        <x-header  :left-options="{showBack: true,backText: ' '}" class="header" > 
            <p >个人中心</p>
            <a slot="right" @click="toUserSetting()">
              <img src="/webdemo/h5/res/images/user_setting.png" alt="">
            </a>
        </x-header>
        <!-- <group class="u_card">
          <cell :title="myInfo.nick" :inline-desc="'帐号: ' + myInfo.account">
            <img class="icon" slot="icon" width="40" :src="myInfo.avatar">
          </cell>
          </group> -->
         <div class="u_card flex" >
             <img class="icon" slot="icon" width="55" src="http://yx-web.nos.netease.com/webdoc/h5/im/default-icon.png">
             <div class="u_msg">
                <p class="uname">王五五</p>
                <p class="id">ID:654321</p>
             </div>
         </div>
         <!-- 签到小框 -->
         <div class="sign_box" @click="toSign()">
             <img src="/webdemo/h5/res/images/grzx_qd.png" alt="" class="sign_img">
             <span>签到有礼</span>
         </div>
      </div>
      <div class="score_box">    
            <img src="/webdemo/h5/res/images/ico_bi_lg.png" alt="" class="fl">
            <p class="residuce fl">积分余额 <span class="yellow">1321</span></p>            
            <x-button  class="charge_btn fr" action-type="button" :gradients="['#FB8C00', '#FB8C00']" text="充值" @click.native="toRecharge()"></x-button>         
      </div>
      <group class="general_box">
          <cell title="个人资料" is-link link="/personaldata">
            <img slot="icon" width="35" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/grzx_grzl.png">
          </cell>
          <cell title="修改密码" is-link link="/updateupwd">
            <img slot="icon" width="35" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/grzx_xgmm.png">
          </cell>
          <cell title="我的粉丝" is-link link="/myfans">
            <img slot="icon" width="35" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/grzx_wdfs.png">
          </cell>
         <cell title="积分中心" is-link link="/scorecenter">
            <img slot="icon" width="35" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/grzx_jfzx.png">
          </cell>
          
      </group> 
      <group class="general_box1">
          <cell title="联系客服" is-link>
            <img slot="icon" width="35" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/grzx_lxkf.png">
          </cell>
          <cell title="检查更新" is-link @click.native="showVersion">
            <img slot="icon" width="35" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/grzx_jcgx.png">
            <!-- <p class="dark">已是最新</p> -->
            <p class="dark" >有新版本</p>
          </cell>
          
      </group>

      <div >
          <alert v-model="isShow" title="" button-text="升级版本" @on-show="onShow" @on-hide="onHide">
            <slot> 
                <img src="/webdemo/h5/res/images/tip_update.png" alt="">
                <!-- <p class="blue">有新版本</p> -->
                <p class="blue">检测到新版本v1.1,赶快升级吧</p>


            </slot>
          </alert>
      </div>
        <!-- <group class="u-card">
          <cell title="昵称">{{myInfo.nick || ''}}</cell>
          <cell title="性别">{{myInfo.gender}}</cell>
          <cell title="生日">{{myInfo.birth}}</cell>
          <cell title="手机">{{myInfo.tel}}</cell>
          <cell title="邮箱">{{myInfo.email}}</cell>
          <cell title="签名">{{myInfo.sign}}</cell>
        </group> -->
    <!-- <div>
      <x-button type="warn" action-type="button" @click.native="logout">注销</x-button>
    </div> -->
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  data () {
    return {
      isShow:false
    }
  },
  components: {
    Group,
    Cell
  },
  computed: {
    myInfo () {
      return this.$store.state.myInfo
    }
  },
  methods: {
    logout () {
      let that = this
      this.$vux.confirm.show({
        title: '确定要注销帐号？',
        onConfirm () {
          that.$store.dispatch('logout')
        }
      })
    },
    showVersion () {
       this.isShow=true;
    },
    toUserSetting () {
       this.$router.push({path:'/usersetting'}); 
    },
    toRecharge() {
       this.$router.push({path:'/recharge'}); 
    },
    toSign() {
        this.$router.push({path:'/sign'}); 
    },
    onShow () {},
    onHide () {}
  }
}
</script>
<style scoped>
    .fl{
      float: left;
    }
    .fr{
      float:right;
    }
    .flex{
      display: flex;
      justify-content: start;
    }
    .yellow{
      color:#FB8C00;
    }
    .dark{
      color:#999;
    }
    .blue{
      font-size:1.0rem;
      margin:0.5rem 0;
    }
    #spec{
      position: relative;
     width: 100%;
    height: 11.625rem;
    background: url(/webdemo/h5/res/images/user_banner.png);
    }
    .header,.u_card{
      background:transparent;
      color:#fff;
    }
    .u_card{
      width:6rem;
      margin:2rem 0 2rem 2rem;
    }
    .u_msg{
      margin-left:1rem;
    }
    .id{
      font-size:0.8rem;
    }
    .sign_box{
      width:6.3rem;
      height:3rem;
      position: absolute;
      right:0;
      top:5rem;
      font-size:0.8rem;
      color:#fff;
      background: url(/webdemo/h5/res/images/grzx_qd_bg.png) left top no-repeat;
      /* background-size:50; */
    }
    .sign_img{
      vertical-align: center;
      position: relative;
      top:0.5rem;
      margin-left:1rem;
    }
    .score_box{
      position: absolute;
      width:90%;
      height:4rem;
      top:9.5rem;
      left:5%;
      background:rgba(255,255,255,1);
      box-shadow:0px 2px 3px rgba(0,0,0,0.16);
      border-radius:0.5rem;
      padding:1.2rem 1rem;
      box-sizing: border-box;
    }
    .residuce{
      margin-left:1rem;
    }
    .charge_btn{
      width:5rem;
      position: relative;
      top:-0.4rem;
    }
    .general_box{
      margin-top:2.8rem;
      background:#fff;
    }
    .general_box1{
      margin-top:1rem;
      background:#fff;
    }
</style>

