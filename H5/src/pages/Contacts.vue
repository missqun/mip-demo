<template>
  <div class="g-inherit m-main p-contacts">
    <!-- <div class="m-cards u-search-box-wrap">
      <span class="u-search-box">
        <a href="#/searchUser/0">
          添加好友\群
        </a>
      </span>
      <span class="u-search-box">
        <a href='#/teaminvite/0'>
        创建组\群
        </a>
      </span>
    </div> -->
     <x-header class="m-tab" :left-options="{backText: ' '}" >
      <h1 class="m-tab-top">通讯录</h1>
      <a slot="left"></a>
      <a slot="right">
         <img src="/webdemo/h5/res/images/group_add.png" alt="">
      </a>
    </x-header>
    
    <div id="userList" class="m-list">
       <div class="search_box">
          <search
            @result-click="resultClick"
              @on-change="getResult"
              :results="results"
              v-model="value"
              position="absolute"
              auto-scroll-to-top
              top="0px"
              placeholder="搜索好友/群组"
              @on-focus="onFocus"
              @on-cancel="onCancel"
              @on-submit="onSubmit"
            ref="search"></search>
      </div>
      <group class="u-card">
        <cell title="高级群" is-link link='/teamlist/advanced'>
           <img class="icon" slot="icon" width="20" src="/webdemo/h5/res/images/avatar_default.png">
        </cell>
        <cell title="开奖信息" is-link link='/lotterymain'>
           <img class="icon" slot="icon" width="20" src="/webdemo/h5/res/images/txl_kjxx.png">
        </cell>
         <cell title="消息提醒"  inline-desc="用户李思思请求加好友"  is-link link='/verifylist'>
           <img class="icon" slot="icon" width="20" src="/webdemo/h5/res/images/verify.png">
        </cell>
        <!-- <cell title="讨论组" is-link link='/teamlist/normal'>
          <img class="icon" slot="icon" width="20" src="/webdemo/h5/res/images/top_group.png"> 
        </cell> -->
      </group>
      <group class="u-card">
        <cell v-for="friend in friendslist" :title="friend.alias" :key="friend.account" is-link :link="friend.link">
          <img class="icon" slot="icon" width="30" :src="userInfos[friend.account].avatar">
        </cell>
        <!-- <RecyclerView
          :prerender="5"
          :item="Cell" 
          :list="friendslist">
        </RecyclerView> -->
      </group>
      <!-- <group class="u-card"title="机器人">
        <cell v-for="robot in robotslist" :title="robot.nick" :key="robot.account" is-link :link="robot.link">
          <img class="icon u-circle" slot="icon" width="30" :src="robot.avatar">
        </cell>
      </group>
      <group class="u-card" title="黑名单">
        <cell v-for="friend in blacklist" :title="friend.alias" :key="friend.account" is-link :link="friend.link">
          <img class="icon u-circle" slot="icon" width="30" :src="userInfos[friend.account].avatar">
        </cell>
      </group> -->
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      value:"",
      results: [],
    }
  },
  methods :{
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
      console.log('on cncel')
    }
  },
  computed: {
    friendslist () {
      return this.$store.state.friendslist.filter(item => {
        let account = item.account
        let thisAttrs = this.userInfos[account]
        let alias = thisAttrs.alias ? thisAttrs.alias.trim() : ''
        item.alias = alias || thisAttrs.nick || account
        item.link = `/namecard/${item.account}`
        if ((!thisAttrs.isFriend) || (thisAttrs.isBlack)) {
          return false
        }
        return true
      })
    },
    blacklist () {
      return this.$store.state.blacklist.filter(item => {
        let account = item.account
        let thisAttrs = this.userInfos[account]
        let alias = thisAttrs.alias ? thisAttrs.alias.trim() : ''
        item.alias = alias || thisAttrs.nick || account
        item.link = `/namecard/${item.account}`
        if (!thisAttrs.isFriend) {
          return false
        }
        return true
      })
    },
    robotslist () {
      return this.$store.state.robotslist.map(item => {
        item.link = `/namecard/${item.account}`
        return item
      })
    },
    userInfos () {
      return this.$store.state.userInfos
    }
  }
}
</script>

<style type="text/css" scoped>
.vux-search-box{
  height:2rem;
  font-size:1.1rem;
}
.search_box{
  height:2rem;
}
  .p-contacts {
    .add-friend {
      background-color: #fff;
    }
    .m-list {
      margin-top:4rem;
    }
    .u-search-box-wrap {
      text-align: center;
    }
    .u-search-box {
      position: relative;
      display: inline-block;
      box-sizing: border-box;
      min-width: 45%;
      padding: 1em;
      height: 3rem;
      text-align: center;
      border: 1px solid #ccc;
      background-color: #fff;
      font-size: 0.8rem;
      box-shadow: 2px 2px 6px #ccc;
      a {
        display: inline-block;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
      }
    }
    .u-card {
      .icon {
        display: inline-block;
        margin-right: 0.4rem;
        width: 2.4rem;
        height: 2.4rem;
        background-size: 20rem;
      }
      .icon-team-advanced {
        /* background-image: url(/webdemo/h5/res/images/top_group.png); */
      }
      .icon-team {
        background-position: -2.1rem -3rem;
        background-image: url(http://yx-web.nos.netease.com/webdoc/h5/im/icons.png);
      }
    }
  }
</style>
