<template>
     <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="乖乖中奖计划" > 
             <div slot="right" class="options flex">
                 <img v-if="!isCollect" src="/webdemo/h5/res/images/ico_jsc.png" alt="" @click="isCollect=true">
                 <img v-else src="/webdemo/h5/res/images/top_ysc.png" alt="">
                 <router-link to="/plantranspond"> <img src="/webdemo/h5/res/images/ico_zf.png" alt=""></router-link>
             </div>
        </x-header>
        <div class="look_id">
             <span v-if="!isLookId" class="l_id" @click="showComfirm=true">查看ID<span class="expend">(将消耗20积分)</span></span>
             <span v-else class="l_id" >ID:12548</span>
        </div>
        <!-- 查看id的弹窗 -->
        <confirm v-model="showComfirm"
            title="积分提示"
            @on-confirm="onConfirm"
            >
            查看对方ID将扣除20积分，确定查看吗？
        </confirm>
        <!-- 积分不足的弹窗 -->
        <confirm v-model="showComfirm1"
            title="积分提示"
            @on-confirm="onConfirm1"
            >
            您的积分不足(余额16)，是否前往积分充值？
        </confirm>
        <x-table :cell-bordered="false" style="background-color:#fff;">
            <thead>
                <tr>
                    <th>计划期间</th>
                    <th>开奖号码</th>
                    <th>结果</th>
                    <th>预测值</th>
                </tr>
            </thead>
            <tbody >
                <tr v-for="item in planList" :key="item.key">
                    <td>{{item.period}}</td>           
                    <td v-if="item.result==4" class="red">07:53</td>
                    <td v-else class="l_number" >{{item.l_number}}</td>
                    <td v-if="item.result==1" ><div class="win">中</div></td>
                    <td v-else-if="item.result==2" ><div class="lose">挂</div></td>
                    <td v-else-if="item.result==4" >未开</td>
                    <td  v-if="item.result==4"><div class="look_plan">查看计划</div></td>
                    <td class="l_number" v-else>{{item.predict}}</td>
                </tr>
            </tbody>
      </x-table>
        <div class="bottom_text">
            <p>
                当前计划信息：重庆时时彩  万码-定码  定5码  5期计划
                </p>
               <p>当前计划状态：已完成30个周期，正确率<span class="green">100%</span>,错误<span class="red">0</span>个 </p>  
               <p>当前预测周期：033-037期间</p>  
                                 
        </div>
     </div>
</template>
<script>
export default {
    data () {
        return {
            isLookId:false,
            isCollect:false,
            showComfirm:false,
            showComfirm1:false,
            planList:[
                {key:1,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:2,period:"033-037期",l_number:"15564",result:2,predict:"12589"},
                {key:3,period:"033-037期",l_number:"15564",result:4,predict:"12589"},
                {key:4,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:5,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:7,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:6,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:8,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:9,period:"033-037期",l_number:"15564",result:2,predict:"12589"},
                {key:10,period:"033-037期",l_number:"15564",result:4,predict:"12589"},
                {key:11,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:12,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:13,period:"033-037期",l_number:"15564",result:1,predict:"12589"},
                {key:14,period:"033-037期",l_number:"15564",result:1,predict:"12589"}
            ]
        }
    },
    methods : {
        onConfirm () {
            this.showComfirm1=true;
        },
        onConfirm1 () {
           this.isLookId=true;
        }
    }
}
</script>
<style scoped>
    tbody{
        color:#666;
    }
    .look_plan{
        width:4.5rem;
        height:1.68rem;
        text-align: center;
        line-height: 1.68rem;
        background: #03A9F4;
        color:#fff;
        margin:0 auto;
        border-radius: 0.25rem;
        font-size: 0.85rem;
    }
    .win{
        width:1.25rem;
        height:1.25rem;
        border-radius: 50%;
        background: #50BE55;
        line-height: 1.25rem;
        text-align: center;
        color:#fff;
        margin:0 auto;
    }
    .lose{
        width:1.25rem;
        height:1.25rem;
        border-radius: 50%;
        background: #E34541;
        line-height: 1.25rem;
        text-align: center;
        color:#fff;
        margin:0 auto;
    }
    .l_number{
        letter-spacing: 0.2rem;
    }
    .green{
        color:#43A047;
    }
    .red{
        color:#E34541;
    }
    .options{
        width:3.5rem;
        justify-content: space-between
    }
    .look_id{
        padding:0.9rem 0.7rem 0.9rem 2.5rem;
        background: url(/webdemo/h5/res/images/ico_user.png) 1rem center no-repeat;
        box-sizing: border-box;
    }
    .l_id{
        color:rgba(3,155,229,1);  
        margin-right:0.5rem;
    }
    .expend{
        color:#999;
        width:2rem;
      
    }
    .bottom_text{
        padding:0.9rem 0.7rem;
        border-top:1px solid #999;
        position: fixed;
        bottom:0px;
        box-sizing: border-box;
        color:#666;
        font-size: 0.85rem;
        z-index: 10;
        background: #F8F8F8;
        width: 100%;
    }
</style>
