<template>
  <div class='g-inherit m-article p-teaminvite'>
    <x-header class="m-tab" :left-options="{backText: ' '}">
      <h1 class="m-tab-top">邀请成员</h1>
      <a slot="left"></a>
    </x-header>
    <div  v-if="selected.length==0" style="position:absolute;top:1rem;;right:1rem;color:#000;z-index:100;"  @click='onNext'>全选</div>
    <div  v-else style="position:absolute;top:1rem;;right:1rem;color:#039BE5;z-index:100;"  @click='onNext'>{{`确认(${selected.length})`}}</div>
    <!-- <x-button class='btn' type="primary" :mini='true' action-type="button" @click.native='onNext'>{{`确认(${selected.length})`}}</x-button> -->
    <search class="a_m_s"
                @result-click="resultClick()"
                @on-change="getResult()"
                position="absolute"
                auto-scroll-to-top
                top="46px"
                placeholder="搜索好友"
                @on-focus="onFocus()"
                @on-cancel="onCancel()"
                @on-submit="onSubmit()"
                ref="search"></search>
    <div class="m-list1">
      <div class='m-group'>
        <!-- <em>{{group.letter}}</em> -->
        <cell title="我的好友" @click.native="isShow1()">
          <span ref='checkIcon' class='check-icon unchecked' slot='icon'  ></span>
          <img class="icon u-circle" slot="icon" width="17" height="17"  v-show="!show1" src="/webdemo/h5/res/images/top_right.png">
          <img class="icon u-circle" slot="icon" width="17" height="17"  v-show="show1" src="/webdemo/h5/res/images/top_down.png">
         
        </cell>
      </div>
    </div>
    <div class="m-list" v-show="show1">
      <div v-for="group in friendsGroups" :key="group.letter" class='m-group'>
        <!-- <em>{{group.letter}}</em> -->
        <cell v-for="friend in group.arr" :title="friend.alias" :key="friend.account" @click.native='itemClick(friend)'>
          <span ref='checkIcon' class='check-icon' slot='icon'  :class='friend.ingroup ? "checked-grey": (friend.checked ? "checked-blue": "unchecked")'></span>
          <img class="icon u-circle" slot="icon" width="25" height="25" :src="userInfos[friend.account].avatar">
        </cell>
      </div>
    </div>


      <div class="m-list1">
      <div class='m-group'>
        <!-- <em>{{group.letter}}</em> -->
        <cell title="最近联系" @click.native="isShow2()">
          <span ref='checkIcon' class='check-icon unchecked' slot='icon'  ></span>
          <img class="icon u-circle" slot="icon" width="17" height="17"  v-show="!show2" src="/webdemo/h5/res/images/top_right.png">
          <img class="icon u-circle" slot="icon" width="17" height="17"  v-show="show2" src="/webdemo/h5/res/images/top_down.png">
         
        </cell>
      </div>
    </div>
    <div class="m-list" v-show="show2">
      <div v-for="group in friendsGroups" :key="group.letter" class='m-group'>
        <!-- <em>{{group.letter}}</em> -->
        <cell v-for="friend in group.arr" :title="friend.alias" :key="friend.account" @click.native='itemClick(friend)'>
          <span ref='checkIcon' class='check-icon' slot='icon'  :class='friend.ingroup ? "checked-grey": (friend.checked ? "checked-blue": "unchecked")'></span>
          <img class="icon u-circle" slot="icon" width="25" height="25" :src="userInfos[friend.account].avatar">
        </cell>
      </div>
    </div>
    <!-- <div class='m-selected'>
      <div class='avators' ref='avators'>
        <img class='u-circle' v-for='friend in selected' :key='friend.account' width="30" height="30" :src='userInfos[friend.account].avatar' @click='unSelect(friend)'>
        <img width="30" height="30" src='http://yx-web.nos.netease.com/webdoc/h5/im/team_invite_dot_avatar.png'>
      </div>
      <x-button class='btn' type="primary" :mini='true' action-type="button" @click.native='onNext'>{{`确认(${selected.length})`}}</x-button>
    </div> -->
    <action-sheet v-model="showActionSheet" :menus="menus" @on-click-menu="onActionClick" show-cancel></action-sheet>
  </div>
</template>

<script>
import {getPinyin} from '../utils/pinyin'

export default {
  data() {
    return {
      show1:false,
      show2:false,
      selected: [],
      showActionSheet: false,
      menus: {
        menu1: '创建讨论组',
        menu2: '创建高级群'
      }
    }
  },
  computed: {
    frinedList () {
      var teamMember = this.$store.state.teamMembers && this.$store.state.teamMembers[this.teamId]
      var list = this.$store.state.friendslist.map(item => {
        var friend = Object.assign({}, item)
        let account = friend.account
        let thisAttrs = this.userInfos[account]
        let alias = thisAttrs.alias ? thisAttrs.alias.trim() : ''
        friend.alias = alias || thisAttrs.nick || account
        friend.pinyin = getPinyin(friend.alias, '').toUpperCase()
        friend.checked = false

        if (teamMember) {
          teamMember.forEach(item=>{
            if (friend.account === item.account) {
              friend.ingroup = true
            }
          })
        }
        return friend
      })
      list.sort((a, b) => {
        return a.pinyin < b.pinyin ? -1 : a.pinyin>b.pinyin ? 1 : 0
      })
      return list
    },
    friendsGroups () {
      var map = Object.create(null)
      this.frinedList.forEach(friend=>{
        var firstLetter = friend.pinyin[0]
        var firstLetter = firstLetter>='A' && firstLetter<='Z' ? firstLetter : '#'
        if(map[firstLetter] === undefined) {
          map[firstLetter] = []
        }
        map[firstLetter].push(friend)
      })
      var groups = []
      for (const key in map) {
        groups.push({
          letter: key, 
          arr: map[key]
        })
      }
      return groups
    },
    userInfos () {
      return this.$store.state.userInfos
    },
    teamId() {
      return this.$route.params.teamId
    },
  },
  methods: {
    //搜索好友
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
    //  好友联系人展开收缩
    isShow1 () {
       this.show1=!this.show1
    },
    isShow2 () {
       this.show2=!this.show2
    },
    itemClick(friend) {
      if (!friend.ingroup) {
        friend.checked = !friend.checked
        if (friend.checked) {
          this.selected.push(friend)
        } else {
          this.selected.splice(this.selected.indexOf(friend), 1)
        }
        this.$forceUpdate()
        this.$nextTick(()=>{
          // this.$refs.avators.scrollLeft = this.$refs.avators.scrollWidth
        })
      }
    },
    unSelect(friend) {
      friend.checked = false
      this.selected.splice(this.selected.indexOf(friend), 1)
      this.$forceUpdate()
    },
    onNext() {
      if (this.selected.length<1) {
        this.$toast('未选择成员')
        return 
      }
      // if (this.teamId==="0") {
       else {
        // 创建群模式
        // this.showActionSheet = true
        this.$router.push({path: '/chat/team-1526847681'}); 
      } 
      // else {
      //   // 添加新成员
      //   this.addMembers()
      // }
    },
    addMembers() {
      this.$store.dispatch('showLoading')
      var accounts = this.selected.map((friend)=>{
        return friend.account
      })
      this.$store.dispatch('delegateTeamFunction', {
        functionName: 'addTeamMembers', 
        options: {
          teamId: this.teamId,
          accounts: accounts,
          done:(error, obj)=>{
            this.$store.dispatch('hideLoading')
            if (error) {
              this.$toast(error)
              return
            }
            this.$toast('邀请成员成功')
            setTimeout(() => {
              window.history.go(-1)
            }, 200);
          }
        }
      })
    },
    onActionClick(key) {
      var type, name, accounts = this.selected.map((friend)=>{
        return friend.account
      })
      switch(key) {
        case "menu1":
          type = 'normal'
          name = '讨论组'
          break
        case "menu2":
          type = 'advanced'
          name = '高级群'
        break
        default:
          // cancle
          return
      }
      this.$store.dispatch('showLoading')
      this.$store.dispatch('delegateTeamFunction',{
        functionName: 'createTeam', 
        options: {
          type: type,
          name: name,
          avatar: '',
          accounts: accounts,
          done: (error, obj)=>{
            if (error) {
              this.$toast('创群失败'+ error)
            }
            if(!error) {
              if(history.replaceState) {
                // 改变当前页路由的hash值为联系人页，这样从会话页返回时，不再回到邀请页
                history.replaceState(null, null, '#/contacts')
              } else {
                history.go(-1)
              } 
              setTimeout(() => {
                location.href = `#/chat/team-${obj.team.teamId}`
                this.$store.dispatch('hideLoading')
              }, 20);
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
  .a_m_s{
       height:2.3rem;
       line-height:2.3rem;
   }
  .p-teaminvite {
    display: flex;
    flex-direction: column;
    padding-top: 0;
    .m-tab {
      position: relative;
    }
    .g-window .m-list{
      height:1.6rem;
    }
    .m-list {
      position: relative;
      flex-grow: 1;

      .check-icon{
        margin-right: 0.8rem;
      }

      .icon{
        margin-right: 0.5rem;
      }
    }
    .m-selected {
      display: inherit;
      height: 5rem;
      background-color: black;
      align-items: center;
      justify-content: space-between;

      .avators {
        display: flex;
        flex: 1 0 1rem;
        overflow-x: scroll;

        &::-webkit-scrollbar{
          display: none;
        }

        img {
          margin: .5rem;
        }
      }

      .btn {
        width: 6rem;
        height: 2.5rem;
        margin: auto .3rem;
        padding: 0;
        flex-shrink: 0;   
      }
    }
    .m-group {
      & +.m-group{
        margin-top: 1.1rem;
      }
      .checked-grey, .checked-blue, .unchecked{
        display: inline-block;
        width: 1.4rem;
        height: 1.4rem;
        background-size: 20rem;
        background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);
        background-position: -5rem .2rem;
      }

      .checked-blue {
        background-position: -3.7rem -2.95rem;
      }

      .unchecked {
        background-position: -5.15rem -2.95rem;
      }

      em{
        display: block;
        position: relative;
        padding-left: 1rem;
      }
      .weui-cell:before {
        border-top: none;
      }
      em:after, .weui-cell:after {
        content: " ";
        position: absolute;
        left: 70px;
        right: 15px;
        bottom: 0;
        height: 1px;
        border-bottom: 1px solid #D9D9D9;
        color: #D9D9D9;
        transform-origin: 0 100%;
        transform: scaleY(0.5);
      }
      em:after {
        left: 15;
        right: 15;
      }
    }
  }
</style>
