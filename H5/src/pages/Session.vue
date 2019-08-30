<template>
  <div class="g-inherit m-main p-session">
    <x-header  :left-options="{showBack: false}">消息<a slot="right" @click="show2click"><img src="/webdemo/h5/res/images/group_add.png" alt=""></a></x-header>
    <action-sheet 
      v-model="show2" 
      :menus="menus1"  
      show-cancel 
      close-on-clicking-mask 
      close-on-clicking-menu
      @on-click-menu-menu1="addFriends"
      @on-click-menu-menu2="createGrounp"
      >
      
    </action-sheet>
    <div class="s_search" style="position:relative;">
       <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="0px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"
      placeholder="搜索好友/群"
      ></search>
    </div>
    <group class="u-list">
        <!-- @click.native="enterSysMsgs"  -->
      <cell 
         class="u-list-item" 
         title="消息提醒" 
         @click.native="toVerifyList()"
         inline-desc="用户李思思请求加好友"
         v-touch:swipeleft="showDelBtn"
         v-touch:swiperight="hideDelBtn"
         >
        <img class="icon" slot="icon" width="30" :src="noticeIcon">
        <span class='u-session-time'>
          9：01
        </span>
        <span v-show="isShow" class="u-unread">5</span>
      </cell>
      <!-- <cell class="u-list-item" title="我的手机" @click.native="enterMyChat">
        <img class="icon" slot="icon" width="24" :src="myPhoneIcon">
      </cell> -->
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
        <img class="icon u-circle" slot="icon" width="24" :src="session.avatar">
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
  </div>
</template>

<script>
import util from '../utils'
import config from '../configs'

export default {
  data () {
    return {
      delSessionId: null,
      stopBubble: false,
      noticeIcon: config.noticeIcon,
      myPhoneIcon: config.myPhoneIcon,
      myGroupIcon: config.defaultGroupIcon,
      myAdvancedIcon: config.defaultAdvancedIcon,
      results: [],
      value: '',
      isShow:true,
      menus1: {
        menu1:"添加好友/群组",
        menu2:"创建群组"
      },
      show2:false
    }
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
    //进入验证消息界面
    toVerifyList () {
        this.$router.push({path: '/verifylist'});
    },
    addFriends () {
        this.$router.push({path: '/searchuser/:searchType'});
    },
    createGrounp () {
       this.$router.push({path: '/creategroup'});
    },
    show2click () {
      this.show2=!this.show2;
    },
    // 搜索框的方法
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    },
    // 搜索框的方法结束
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
  .g-window .m-main{
    margin-top:0rem;
  }
  .vux-header{
    background:#fff;
    font-size:2.25rem;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .s_search{
    height:2rem;
    background:rgba(245,245,245,1);
    line-height:2rem;
    font-size:1rem;
    padding-bottom:1rem;
  }
  .vux-actionsheet-menu-default{
    color:rgba(3,155,229,1) !important;
  }
  /* .g-window .u-list-item .icon{
    width:1.5rem;
    height:1.5rem;
  } */
  /* .vux-search-box{
     height:2.5rem;
     margin:0.2rem auto;
     line-height: 2.5rem;
     border-radius:1rem;
  } */
  /* .weui-search-bar__label{
    border-radius: 1rem !important;
  }  */
</style>
