<template>
  <div class="g-window">
    
    <!-- 切页动画设置 -->
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <fullscreen-img></fullscreen-img>
    <loading></loading>
    <tab-bar v-show="showTab"></tab-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import {XTable,Selector,Toast,XNumber,Grid,GridItem,CheckerItem,Checker,Popup,DatetimeView,TabItem,Tab,Card,CellBox,Radio,Rater,Msg,Alert,Confirm,CheckIcon,Group, Cell, XHeader, XInput, XTextarea, XButton, XSwitch, Datetime, ViewBox, Search, ButtonTab, ButtonTabItem, Divider, Actionsheet,Checklist,AlertPlugin, ConfirmPlugin} from 'vux'
import Loading from './pages/components/Loading'
import FullscreenImg from './pages/components/FullscreenImg'
// ToastPlugin是对vux中的ToastPlugin在使用上的简单封装。
import ToastPlugin from './plugins/toastPlugin'
Vue.use(ConfirmPlugin)
// 全局注册vux的组件
Vue.component('Group', Group)
Vue.component('Cell', Cell)
Vue.component('Datetime', Datetime)
Vue.component('ButtonTab', ButtonTab)
Vue.component('ButtonTabItem', ButtonTabItem)
Vue.component('Divider', Divider)
Vue.component('Search', Search)
Vue.component('XInput', XInput)
Vue.component('XTextarea', XTextarea)
Vue.component('XButton', XButton)
Vue.component('XHeader', XHeader)
Vue.component('XSwitch', XSwitch)
Vue.component('ActionSheet', Actionsheet)
Vue.component('Checklist', Checklist)
Vue.component('CheckIcon', CheckIcon)
Vue.component('Confirm', Confirm)
Vue.component('Alert', Alert)
Vue.component('Msg', Msg)
Vue.component('Rater', Rater)
Vue.component('Radio', Radio)
Vue.component('CellBox', CellBox)
Vue.component('Card', Card)
Vue.component('Tab', Tab)
Vue.component('TabItem', TabItem)
Vue.component('DatetimeView', DatetimeView)
Vue.component('Popup', Popup)
Vue.component('Checker', Checker)
Vue.component('CheckerItem', CheckerItem)
Vue.component('GridItem', GridItem)
Vue.component('Grid', Grid)
Vue.component('XNumber', XNumber)
Vue.component('Toast', Toast)
Vue.component('Selector', Selector)
Vue.component('XTable', XTable)












Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)






// import NavBar from './pages/components/NavBar'
import TabBar from './pages/components/TabBar'
import cookie from './utils/cookie'
import pageUtil from './utils/page'

const sessionHistory = window.sessionStorage

export default {
  data () {
    return {
      transitionName: 'forward',
    }
  },
  watch: {
    // 更新页面所在位置，用于判断是前进页还是后退页
    '$route' (to, from) {
      if (to && from) {
        let toPath = to.path
        let fromPath = from.path
        let count = parseInt(sessionHistory.getItem('count'))
        // 如果是导航页或者没有初始记录
        if (Number.isNaN(count)) {
          count = 1
          this.transitionName = 'forward'
        } else {
          count += 1
          let fromCount = parseInt(sessionHistory.getItem(fromPath))
          let toCount = parseInt(sessionHistory.getItem(toPath))
          if (toCount < fromCount && fromCount < count && (!pageUtil.showTab(fromPath))) {
            this.transitionName = 'backward'
            count = toCount
          } else {
            this.transitionName = 'forward'
          }
          if (pageUtil.showTab(toPath)) {
            count = 1
          }
        }
        sessionHistory.setItem(toPath, count)
        sessionHistory.setItem('count', count)
      }
    }
  },
  // 所有页面更新都会触发此函数
  updated () {
    // 提交sdk连接请求
    this.$store.dispatch('connect')
    this.$store.dispatch('updateRefreshState')
  },
  components: {
    TabBar,
    ViewBox,
    Loading,
    FullscreenImg
  },
  computed: {
    // 是否显示导航条
    showTab() {
      return pageUtil.showTab(this.$route.path)
    }
  }
}
</script>

