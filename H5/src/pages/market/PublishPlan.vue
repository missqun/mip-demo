<template>
     <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="发布计划" > 
             <div slot="right">
                <router-link to="/historyplans"><span class="history_plan">历史计划</span> </router-link>
             </div>
        </x-header>
        <div class="play_notice">
             玩法提示：从0-9选择一个或多个数字，与开奖号码最后一位匹配则中奖
        </div>
        <div class="plan_box">
             <div class="periods_times clearfix">
                 <div class="periods fl">当前周期是<span>012</span></div>
                 <div class="times fr">距本期截止截止时间: <span style="color:red">00:54</span></div>
             </div>
             <div class="series">
                 个位
             </div>
             <div class="number_box flex">
                   <div class="number_item" v-for="(item,index) in numberList" :key="index"  @click="addSelect(item,index)" :class="{active:current==index}">
                       {{item}}
                   </div>
             </div>
             <div class="clearfix">
                <div class="check_way fr flex ">
                    <div class="number_item" @click="all()">
                        全
                    </div>
                    <div class="number_item" @click="big()">
                        大
                    </div>
                    <div class="number_item" @click="small ()" >
                        小
                    </div>
                    <div class="number_item" @click="odd()">
                        奇
                    </div>
                    <div class="number_item" @click="even()">
                        偶
                    </div>
                    <div class="number_item yellow" @click="clear()" >
                        清
                    </div>
                </div>
             </div>
             <div class="selected_number  clearfix">
                  {{selectedList.join(",")}}
             </div>
        </div>
        <x-button class="plan" type="primary" action-type="button"  text="发布计划" @click.native="toPlan()"></x-button> 
        <!-- 提示弹窗 -->
        <confirm v-model="notice"
            title="提示"
            confirm-text="查看计划"
            @on-confirm="lookPlan"
            >
            此玩法已有进行中的计划，无法重复发布
        </confirm>
        <div class="plan_rule" >
            发布规则
        </div>
        
     </div>
</template>
<script>
export default {
     data () {
         return {
             current:0,
             notice:false,
             numberList:[0,1,2,3,4,5,6,7,8,9],
             selectedList:[]

         }
        
     },
     methods : {
         addSelect (item,index) {
            this.selectedList.push(item);
            this.current=index;
         },
         all () {
              this.selectedList=this.numberList;
         },
         big () {
             this.selectedList=[5,6,7,8,9];
         },
         small () {
             this.selectedList=[0,1,2,3,4];
         },
         odd () {
             this.selectedList=[1,3,5,7,9];
         },
         even () {
             this.selectedList=[0,2,4,6,8];
         },
         clear () {
             this.selectedList=[];
         },
        //  发布计划
        toPlan () {
              this.$router.push({path:'/plansetting'}); 
        },
        lookPlan () {
              this.$router.push({path:'/item'}); 
        }
        
     }
}
</script>
<style scoped>
    .plan_rule{
       position: fixed;
       bottom:1rem;
       width:90%;
       margin-left:5%;
       height: 2.375rem;
       line-height: 2.375rem;
       border:1px solid rgba(204,204,204,1);
       border-radius:0.375rem;
       text-align: center;
       color:#666;
       background: url(/webdemo/h5/res/images/jh_fbgz.png) 35% center no-repeat rgba(255,255,255,1);
    }
    .selected_number{
        margin:0.75rem 0;
         letter-spacing: 0.2rem;
         color:#333;
    }
    .check_way .number_item{
        margin-left:0.375rem;
    }
   .number_box{
       margin:0.75rem 0;
       justify-content: space-between;
   }
   .number_item{
        width:1.875rem;
        height:1.875rem;
        text-align: center;
        line-height: 1.875rem;
        background:rgba(255,255,255,1);
        border:1px solid rgba(204,204,204,1);
        border-radius:50%;
        font-size: 0.81rem;
        color:#333;
        cursor:pointer;
   }
   .number_item.active{
       background: #03A9F4;
       color:#fff;
   }
   .yellow{
        color:#F44336;
    }
    .series{
        color:#666;
        font-size: 0.75rem;
    }
   .times{
       color:#666;
       font-size:0.75rem;
       height:2rem;
       line-height:2rem;
   }
   .periods{
       height:2rem;
       line-height:2rem;
       font-size: 0.875rem;
   }
   .history_plan{
       color:#666;
   }
   .play_notice{
       width:100%;
       height:3.75rem;
       background:rgba(255,253,231,1);
       padding:0.75rem;
       box-sizing: border-box;
       color:#FB8C00;
       font-size:0.81rem;
   }
   .plan_box{
       margin:0.6rem 0;
       width:100%;
        height: 12.6rem;
        background: #fff;
        padding:0.8rem;
        box-sizing: border-box;
   }
</style>
