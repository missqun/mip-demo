<template>
  <div class="g-inherit m-article p-namecard">
    <x-header class="m-tab" :left-options="{backText: ' '}">
      <!-- <h1 class="m-tab-top">{{userInfo.alias}}</h1> -->
      <h1 class="m-tab-top">查看信息</h1>
      <a slot="left"></a>
    </x-header>
    <div v-if="isRobot" class="m-list m-robot">
      <div class="u-logo">
        <img class="logo"  :src="userInfo.avatar">
        <h3>{{userInfo.alias}}</h3>
        <p>@{{userInfo.account}}</p>
      </div>
      <div class="u-desc">
        <p>{{userInfo.intro}}</p>
      </div>
      <div class="u-bottom">
        <x-button type="primary" action-type="button" @click.native="enterChat">开始对话</x-button>
      </div>
    </div>

    <div v-else class="m-list">
      <group class="card_top">
        <cell :title="userInfo.nick" inline-desc="ID:654321" :value="userInfo.gender=='不显示'?'':userInfo.gender">
        <!-- <cell :title="userInfo.account" :inline-desc="'昵称: '+userInfo.nick" :value="userInfo.gender=='不显示'?'':userInfo.gender"> -->
          <img class="icon" slot="icon" width="30" :src="userInfo.avatar">
        </cell>
        <div class="n_sign">个性签名</div>
      </group>
      <group class="u_card">
        <cell title="昵称" value="粉丝妹"></cell>
        <cell title="身份" ></cell>
        <cell title="入群时间" value="2018.12.08" ></cell>
      </group>
      <!-- <group class="u-card">
        <cell title="性别">{{userInfo.gender}}</cell>
        <cell title="生日">{{userInfo.birth}}</cell>
        <cell title="手机">{{userInfo.tel}}</cell>
        <cell title="邮箱">{{userInfo.email}}</cell>
        <cell title="签名">{{userInfo.sign}}</cell>
      </group> -->
      <!-- <group v-show="isFriend" class="u-card">
        <cell title="备注名" is-link :link="remarkLink">{{userInfo._alias}}</cell>
       
      </group> -->
      <group v-if='!isSelf' class="u_card">
        <!-- <x-switch class="u-switch" title="黑名单" v-model="isBlack" @on-change="changeBlack"></x-switch> -->
        <x-switch class="u-switch" title="禁言设置" v-model="isBlack" @on-change="changeBlack"></x-switch>
        
      </group>
      <div class="u-bottom">
        <!-- <x-button type="primary" action-type="button" @click.native="enterChat">聊天</x-button>
        <x-button v-show="isFriend" type="primary" action-type="button" @click.native="enterHistory">历史记录</x-button>
        <x-button v-show="isFriend" type="warn" action-type="button" @click.native="deleteFriend">删除好友</x-button>
        <x-button v-show="!isFriend && !isSelf" type="warn" action-type="button" @click.native="addFriend">添加好友</x-button> -->
        <x-button  type="primary" action-type="button" @click.native="addFriend">添加好友</x-button>
        <x-button type="default" action-type="button" class="n_remove" @click.native="showComfirm()">移出本群</x-button>
      </div>
     
    </div>
     
        <confirm v-model="show"
        @on-cancel="onCancel()"
        @on-confirm="onConfirm()"
        @on-show="onShow()"
        @on-hide="onHide()">
          <p style="text-align:center;color:#555;font-size:0.9rem;">群成员移出后无法恢复,确定移出吗？</p>
        </confirm>
      
  </div>
</template>

<script>
import util from '../utils'

export default {
  data () {
    return {
      isBlack: false,
      isSelf: false,
      show:false

    }
  },
  computed: {
    account () {
      return this.$route.params.userId
    },
    userInfo () {
      let info = {}
      if (this.isRobot) {
        info = Object.assign({}, this.robotInfos[this.account])
        info.alias = info.nick || account
        info.avatar = info.originAvatar || item.avatar
      } else if (this.account === this.$store.state.userUID) {
        info =  Object.assign({}, this.$store.state.myInfo)
        info.alias = info.nick
        this.isSelf = true
      } else {
        info = Object.assign({}, this.$store.state.userInfos[this.account])
        info._alias = info.alias //服务器中存的别名，在备注栏展示
        info.alias = util.getFriendAlias(info)
        this.isBlack = info.isBlack
      }
      return info
    },
    robotInfos () {
      return this.$store.state.robotInfos
    },
    // 是否是联系人，黑名单和好友都算
    isFriend () {
      let userInfo = this.userInfo
      return userInfo.isFriend
    },
    isRobot () {
      if (this.robotInfos[this.account]) {
        return true
      }
      return false
    },
    remarkLink () {
      return `/namecardremark/${this.account}`
    }
  },
  methods: {
    showComfirm() {
       this.show=true;
    },
     onCancel () {
      console.log('on cancel')
    },
    onConfirm (msg) {
      console.log('on confirm')
      if (msg) {
        alert(msg)
      }
    },
    onHide () {
      console.log('on hide')
    },
    onShow () {
      console.log('on show')
    },
    changeBlack () {
      this.$store.dispatch('updateBlack', {
        account: this.account,
        isBlack: this.isBlack
      })
    },
    enterChat () {
      location.href = `#/chat/p2p-${this.account}`
    },
    enterHistory () {
      location.href = `#/chatHistory/p2p-${this.account}`
    },
    addFriend () {
      this.$store.dispatch('addFriend', this.account)
    },
    deleteFriend () {
      let that = this
      this.$vux.confirm.show({
        title: '删除好友后，将同时解除双方的好友关系',
        onConfirm () {
          that.$store.dispatch('deleteFriend', that.account)
        }
      })
    }
  }
}
</script>

<style type="text/css">
  .p-namecard {
    .m-list {
      padding-top: 3.6rem;
    }
    .u-bottom {
      margin-bottom: 2rem;
    }
  }
 
 .g-window .card_top .weui-cell{
   background:#fff;
   height:4rem;
 }
 .g-window .u-card{
   margin:0;
   width:100%;
 }
 .g-window .card_top  .icon{
   width:4rem;
   height:4rem;
 }
 .u_card{
   margin-top:0.8rem;
   background:#FFF;

 }
 .g-window .u_card .weui-cell {
      font-size:1rem;
      height:2.5rem;
 }
 .u-bottom{
    margin-top:2rem;
 }
 .n_remove{
   background:#fff;
   color:red !important;
   width:90% !important;
 }
 .n_sign{
   position: absolute;
   bottom:0.1rem;
   left:4.5rem;
   font-size: 0.8rem;
   color: #999;
 }
</style>
