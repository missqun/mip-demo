import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Index from '@/components/Index'
import Fans from '@/components/Fans'
import Score from '@/components/Score'
import Shop from '@/components/Shop'
import Login from '@/components/section/Login'
import Register from '@/components/section/Register'
import Back from '@/components/section/Back'
import UserCenter from '@/components/UserCenter'
import List from '@/components/section/List'
import Item from '@/components/section/Item'
import Collect from '@/components/section/Collect'
import Plan from '@/components/section/Plan'
import Published from '@/components/section/Published'
import UserBasic from '@/components/section/UserBasic'
import UserAvater from '@/components/section/UserAvater'
import UserBind from '@/components/section/UserBind'
import UserUpwd from '@/components/section/UserUpwd'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component:Main,
      children:[
        {path:'/login',component:Login},
        {path:'/regis',component:Register},
        {path:'/back',component:Back},
        {path:'/fans',component:Fans},
        {path:'/score',component:Score},
        {path:'/shop',component:Shop},
        {path:'/user',component:UserCenter,
            children:[
             {path:'/basic',component:UserBasic},
             {path:'/avater',component:UserAvater},
             {path:'/bind',component:UserBind},
             {path:'/upwd',component:UserUpwd}
            ]
        },
        {path:'/index',component:Index,
           children:[
            {path:'/list',component:List},
            {path:'/item',component:Item},
            {path:'/collect',component:Collect},
            {path:'/plan',component:Plan},
            {path:'/published',component:Published}
           ]
        }
      
      ]
    }
  ]
})
