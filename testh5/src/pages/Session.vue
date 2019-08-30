<template>
  <div class="g-inherit m-main p-session">
    <x-header :left-options="{showBack: false}" title="消息"><a slot="right" class="add"><x-icon type="ios-plus-empty" size="30"></x-icon></a></x-header>
    <group class="search">
       <search class="search_box"
      ref="search"></search>
    </group>
    <group class="u-list">
      <cell class="u-list-item" title="消息中心" @click.native="enterSysMsgs">
        <img class="icon" slot="icon" width="24" :src="noticeIcon">
        <span v-show="sysMsgUnread > 0" class="u-unread">{{sysMsgUnread}}</span>
      </cell>
      <cell class="u-list-item" title="我的手机" @click.native="enterMyChat">
        <img class="icon" slot="icon" width="24" :src="myPhoneIcon">
      </cell>
      <cell  class="u-list-item" title="你大爷" @click.native="enterChat(session)">
         <img class="icon" slot="icon" width="24"  :src="user" alt="">
         <div class="time" >
             <span>10:01</span>
             <badge text="58" class="num"></badge>
         </div>
      </cell>
       <cell  class="u-list-item" title="你二爷" @click.native="enterChat(session)" inline-desc='你在么？'>
         <img class="icon" slot="icon" width="24"  :src="user" alt="">
         <div class="time" >
             <span>6-11</span>
             <badge text="5" class="num"></badge>
         </div>
      </cell>
       <cell  class="u-list-item" title="你三爷" @click.native="enterChat(session)">
         <img class="icon" slot="icon" width="24"  :src="user" alt="">
         <div class="time" >
             <span>昨天</span>
             <badge text="58" class="num"></badge>
         </div>
      </cell>
        <!-- 读取最近会话列表 -->
      <cell
        v-for="(session, index) in sessionlist"
        class="u-list-item"
        :title="session.name"
        :inline-desc="session.lastMsgShow"
        :key="session.id"
        :sessionId="session.id"
        v-touch:swipeleft="showDelBtn"
        v-touch:swiperight="hideDelBtn"
        @click.native="enterChat(session)" >
        <img class="icon u-circle" slot="icon" width="24" >
        <span class='u-session-time'>
          {{session.updateTimeShow}}
        </span>
        <span v-show="session.unread > 0" class="u-unread">{{session.unread}}</span>
        <span
          class="u-tag-del"
          :class="{active: delSessionId===session.id}"
          @click="deleteSession"
          ></span>
      </cell>
    </group>
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
  </div>
</template>

<script>
import util from '../utils'
import config from '../configs'

export default {
  data () {
    return {
      text:'搜索好友/群',
      delSessionId: null,
      stopBubble: false,
      noticeIcon: config.noticeIcon,
      myPhoneIcon: config.myPhoneIcon,
      myGroupIcon: config.defaultGroupIcon,
      myAdvancedIcon: config.defaultAdvancedIcon,
      user:config.defaultUserIcon
    }
  },
  created :function (){
       cookie.setCookie('uid', 3085026)
       cookie.setCookie('sdktoken','859576f942cfd4115711476136f82576')
  },
  computed: {
    sysMsgUnread () {
      let temp = this.$store.state.sysMsgUnread
      let sysMsgUnread = temp.addFriend || 0
      sysMsgUnread += temp.team || 0
      let customSysMsgUnread = this.$store.state.customSysMsgUnread
      return sysMsgUnread + customSysMsgUnread
    },
    userInfos () {
      return this.$store.state.userInfos
    },
    myInfo () {
      return this.$store.state.myInfo
    },
    myPhoneId () {
      return `${this.$store.state.userUID}`
    },
    sessionlist () {
      let sessionlist = this.$store.state.sessionlist.filter(item => {
        item.name = ''
        item.avatar = ''
        if (item.scene === 'p2p') {
          let userInfo = null
          if (item.to !== this.myPhoneId) {
            userInfo = this.userInfos[item.to]
          } else {
            // userInfo = this.myInfo
            // userInfo.alias = '我的手机'
            // userInfo.avatar = `${config.myPhoneIcon}`
            return false
          }
          if (userInfo) {
            item.name = util.getFriendAlias(userInfo)
            item.avatar = userInfo.avatar
          }
        } else if (item.scene === 'team') {
          let teamInfo = null
          teamInfo = this.$store.state.teamlist.find(team => {
            return team.teamId === item.to
          })
          if (teamInfo) {
            item.name = teamInfo.name
            item.avatar = teamInfo.avatar || (teamInfo.type === 'normal' ? this.myGroupIcon : this.myAdvancedIcon)
          } else {
            item.name = `群${item.to}`
            item.avatar = item.avatar || this.myGroupIcon
          }
        }
        let lastMsg = item.lastMsg || {}
        if (lastMsg.type === 'text') {
          item.lastMsgShow = lastMsg.text || ''
        } else if (lastMsg.type === 'custom') {
          item.lastMsgShow = util.parseCustomMsg(lastMsg)
        } else if (lastMsg.scene === 'team' && lastMsg.type === 'notification') {
          item.lastMsgShow = util.generateTeamSysmMsg(lastMsg)
        } else if (util.mapMsgType(lastMsg)) {
          item.lastMsgShow = `[${util.mapMsgType(lastMsg)}]`
        } else {
          item.lastMsgShow = ''
        }
        if (item.updateTime) {
          item.updateTimeShow = util.formatDate(item.updateTime, true)
        }
        return item
      })
      return sessionlist
    }
  },
  methods: {
    enterSysMsgs () {
      if (this.hideDelBtn())
        return
      location.href = '#/sysmsgs'
    },
    enterChat (session) {
      if (this.hideDelBtn())
        return
      if (session && session.id)
        location.href = `#/chat/${session.id}`
    },
    enterMyChat () {
      // 我的手机页面
      location.href = `#/chat/p2p-${this.myPhoneId}`
    },
    deleteSession () {
      if (this.delSessionId !== null) {
        this.$store.dispatch('deleteSession', this.delSessionId)
      }
    },
    showDelBtn (vNode) {
      if (vNode && vNode.data && vNode.data.attrs) {
        this.delSessionId = vNode.data.attrs.sessionId
        this.stopBubble = true
        setTimeout(() => {
          this.stopBubble = false
        }, 20)
      }
    },
    hideDelBtn () {
      if (this.delSessionId !== null && !this.stopBubble) {
        // 用于判断是否前置状态是显示删除按钮
        this.delSessionId = null
        return true
      }
      return false
    }
  }
}
</script>

<style type="text/css">
  .p-session {
    .vux-cell-primary {
      max-width: 70%;
    }
  }
  .vux-header{
    background: #fff;
  }
  .add{
    position: relative;
    top:-7px;
  }
  .search{
    height:35px;
  }
  .g-window .u-list{
    margin-top:1rem;
  }
.time{
  height:2.625rem;
  display: flex;
  width:4rem;
   flex-direction:column;
  justify-content: space-between; 
  margin-left:1.5rem; 
}
.time>span{
  text-align: center;
  width:2rem;
  margin:0 auto;
  display: inline-block;
}
.time>span.num{
  width:1.2rem;
}
</style>
