import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 定义路由
// 每个路由应该映射一个组件。 其中"component"是一个组件配置对象。
const routes = [
  // 设置聊天列表页面为首页
  {
    path: '/',
    redirect: {
      name: 'session'
    }
  },
  // 最近消息列表（会话）
  {
    path: '/session',
    name: 'session',
    component (resolve) {
      require(['../pages/Session'], resolve)
    }
  },
  // 系统消息
  {
    path: '/sysmsgs',
    name: 'sysmsgs',
    component (resolve) {
      require(['../pages/SysMsgs'], resolve)
    }
  },
  // 聊天记录
  {
    path: '/chat/:sessionId',
    name: 'chat',
    component (resolve) {
      require(['../pages/Chat'], resolve)
    }
  },
  // 聊天历史记录
  {
    path: '/chathistory/:sessionId',
    name: 'chathistory',
    component (resolve) {
      require(['../pages/ChatHistory'], resolve)
    }
  },
    // 资讯
  {
    path:'/information',
    name:'inforMation',
    component(resolve) {
      require(['../pages/InforMation'],resolve)
    }
  },
    //  添加好友/群组
  {
    path:'/information',
    name:'information',
    component(resolve) {
      require(['../pages/InforMation'],resolve)
    }
  },
      //  要添加的好友信息
  {
    path:'/addinfo',
    name:'addinfo',
    component(resolve) {
      require(['../pages/AddInfo'],resolve)
    }
  },
        //  添加好友验证
  {
      path:'/userverify',
      name:'userverify',
      component(resolve) {
        require(['../pages/messages/UserVerify'],resolve)
      }
  },
         //  验证信息列表
  {
      path:'/verifylist',
      name:'verifylist',
      component(resolve) {
        require(['../pages/messages/VerifyList'],resolve)
      }
  },
        // 创建群昵称和修改群昵称
  {
      path:'/creategroup',
      name:'creategroup',
      component(resolve) {
        require(['../pages/messages/CreateGroup'],resolve)
      }
  },
          // 创建群拉好友
  {
      path:'/addmember',
      name:'addmember',
      component(resolve) {
        require(['../pages/messages/AddMember'],resolve)
      }
  },
  
  // 直播间
  {
    path: '/room',
    name: 'room',
    component (resolve) {
      require(['../pages/Room'], resolve)
    }
  },
  // 直播聊天页
  {
    path: '/roomChat/:chatroomId',
    name: 'roomChat',
    component (resolve) {
      require(['../pages/RoomChat'], resolve)
    }
  },
  // 通讯录
  {
    path: '/contacts',
    name: 'contacts',
    component (resolve) {
      require(['../pages/Contacts'], resolve)
    }
  },
   // 开奖信息主界面
   {
    path: '/lotterymain',
    name: 'lotterymain',
    component (resolve) {
      require(['../pages/LotteryMain'], resolve)
    }
  },
   // 开奖信息详情页
   {
    path: '/lotterydetail',
    name: 'lotterydetail',
    component (resolve) {
      require(['../pages/LotteryDetail'], resolve)
    }
  },
  // 好友名片
  {
    path: '/namecard/:userId',
    name: 'namecard',
    component (resolve) {
      require(['../pages/NameCard'], resolve)
    }
  },
  // 好友名片-设置备注
  {
    path: '/namecardremark/:userId',
    name: 'namecardremark',
    component (resolve) {
      require(['../pages/NameCardRemark'], resolve)
    }
  },
  // 好友名片-搜索好友/群
  {
    path: '/searchuser/:searchType',
    name: 'searchuser',
    component (resolve) {
      require(['../pages/SearchUser'], resolve)
    }
  },
  // 邀请好友-加入群
  {
    path: '/teaminvite/:teamId',
    name: 'teaminvite',
    component (resolve) {
      require(['../pages/TeamInvite'], resolve)
    }
  },
  // 通用页面
  {
    path: '/general',
    name: 'general',
    component (resolve) {
      require(['../pages/General'], resolve)
    }
  },
  // 群列表
  {
    path: '/teamlist/:teamType',
    name: 'teamlist',
    component (resolve) {
      require(['../pages/TeamList'], resolve)
    }
  },
  // 群名片
  {
    path: '/teamcard/:teamId',
    name: 'teamcard',
    component (resolve) {
      require(['../pages/TeamCard'], resolve)
    }
  },
  // 群信息主界面
  {
    path: '/teammanage/:teamId',
    name: 'teammanage',
    component(resolve) {
      require(['../pages/TeamManage'], resolve)
    }
  },
    // 群管理
    {
      path: '/teamownmanage',
      name: 'teamownmanage',
      component(resolve) {
        require(['../pages/TeamOwnManage'], resolve)
      }
    },
  // 群设置
  { 
    path: '/teamsetting',
    name: 'teamsetting',
    component(resolve) {
      require(['../pages/TeamSetting'], resolve)
    }
  },
  // 群成员列表
  {
    path: '/teammembers/:teamId',
    name: 'teammembers',
    component(resolve) {
      require(['../pages/TeamMembers'], resolve)
    }
  },
  // 群成员名片
  {
    path: '/teammembercard/:member',
    name: 'teammembercard',
    component(resolve) {
      require(['../pages/TeamMemberCard'], resolve)
    }
  },
  // 发送群消息回执页
  {
    path: '/teamSendMsgReceipt/:teamId',
    name: 'TeamSeamMsgReceipt',
    component(resolve) {
      require(['../pages/TeamSendMsgReceipt'], resolve)
    }
  },
  // 群消息回执详情页
  {
    path: '/msgReceiptDetail/:msgInfo',
    name: 'msgReceiptDetail',
    component(resolve) {
      require(['../pages/TeamMsgReceiptDetail'], resolve)
    }
  },
  //个人中心设置
  {
    path: '/usersetting',
    name: 'userSetting',
    component(resolve) {
      require(['../pages/ucenter/UserSetting'], resolve)
    }

  },
  //意见反馈
  {
    path: '/feedback',
    name: 'feedBack',
    component(resolve) {
      require(['../pages/ucenter/FeedBack'], resolve)
    }

  },
   //关于
   {
    path: '/about',
    name: 'about',
    component(resolve) {
      require(['../pages/ucenter/About'], resolve)
    }

  },
  //积分充值1
  {
    path: '/recharge',
    name: 'recharge',
    component(resolve) {
      require(['../pages/ucenter/Recharge'], resolve)
    }

  },
   //积分充值2
   {
    path: '/rechargedone',
    name: 'rechargeDone',
    component(resolve) {
      require(['../pages/ucenter/RechargeDone'], resolve)
    }
  },
   //我的资料
   {
    path: '/personaldata',
    name: 'personalData',
    component(resolve) {
      require(['../pages/ucenter/PersonalData'], resolve)
    }
  },
    //修改密码
   {
    path: '/updateupwd',
    name: 'updateUpwd',
    component(resolve) {
      require(['../pages/ucenter/UpdateUpwd'], resolve)
    }
  },
   //找回密码
   {
    path: '/getback',
    name: 'getBack',
    component(resolve) {
      require(['../pages/ucenter/GetBack'], resolve)
    }
  },
    //绑定手机
    {
      path: '/bindphone',
      name: 'bindPhone',
      component(resolve) {
        require(['../pages/ucenter/BindPhone'], resolve)
      }
    },
    //更改绑定手机
    {
      path: '/updatebind',
      name: 'updateBind',
      component(resolve) {
        require(['../pages/ucenter/UpdateBind'], resolve)
      }
    },
      //我的粉丝
    {
      path: '/myfans',
      name: 'myFans',
      component(resolve) {
        require(['../pages/ucenter/MyFans'], resolve)
      }
    },
     //积分中心
     {
      path: '/scorecenter',
      name: 'scoreCenter',
      component(resolve) {
        require(['../pages/ucenter/ScoreCenter'], resolve)
      }
    },
   //积分明细
   {
    path: '/scorelist',
    name: 'scoreList',
    component(resolve) {
      require(['../pages/ucenter/ScoreList'], resolve)
    }
  },
    //积分商城
   {
    path: '/scoreshop',
    name: 'scoreShop',
    component(resolve) {
      require(['../pages/ucenter/ScoreShop'], resolve)
    }
  },
  //兑换界面
  {
    path: '/excharge',
    name: 'excharge',
    component(resolve) {
      require(['../pages/ucenter/Excharge'], resolve)
    }
  },
  //赚取积分
  {
    path: '/sign',
    name: 'sign',
    component(resolve) {
      require(['../pages/ucenter/Sign'], resolve)
    }
  },
  //签到和邀请规则
  {
    path: '/inviterule',
    name: 'inviteRule',
    component(resolve) {
      require(['../pages/ucenter/InviteRule'], resolve)
    }
  },
   //计划集市首页
   {
    path: '/marketindex',
    name: 'marketIndex',
    component(resolve) {
      require(['../pages/market/MarketIndex'], resolve)
    }
  },
  //计划详情页面
  {
    path: '/item',
    name: 'item',
    component(resolve) {
      require(['../pages/market/Item'], resolve)
    }
  },
  //计划转发
  {
    path: '/plantranspond',
    name: 'planTranspond',
    component(resolve) {
      require(['../pages/market/PlanTranspond'], resolve)
    }
  },
    //我的收藏
  {
    path: '/mycollect',
    name: 'myCollect',
    component(resolve) {
      require(['../pages/market/MyCollect'], resolve)
    }
  },
      //发布计划
  {
    path: '/publishplan',
    name: 'publishPlan',
    component(resolve) {
      require(['../pages/market/PublishPlan'], resolve)
    }
  },
  //发布设置
  {
    path: '/plansetting',
    name: 'planSetting',
    component(resolve) {
      require(['../pages/market/PlanSetting'], resolve)
    }
  },
  //历史计划
  {
    path: '/historyplans',
    name: 'historyPlans',
    component(resolve) {
      require(['../pages/market/HistoryPlans'], resolve)
    }
  }
]

let router = new VueRouter({
  history: true,
  routes
})

export default router
