<template>
    <div class="g-inherit m-main" >
        <x-header  :left-options="{showBack: true,backText: ' '}" title="积分明细"  >
        </x-header>
        <tab active-color="#108EE9" bar-active-color="#108EE9" >
            <!-- @on-item-click="onItemClick" -->
            <tab-item :selected="demo1===item" v-for="(item,index) in menuList" :key="index"  @click.native="showDiv(index)">{{item}}</tab-item>
        </tab>
        <div class="data_content">
             <div class="check_date flex">
                 <div class="fixed_date ">
                    <checker  default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                        <checker-item value="1">一周</checker-item>
                        <checker-item value="2">一月</checker-item>
                        <checker-item value="3">一年</checker-item>
                    </checker>
                 </div>
                 <div class="change_date flex">
                     <p class="start_date" @click="showDateView1()" >{{value1}}</p>
                     <p>-</p>
                     <p class="end_date" @click="showDateView2()">{{value2}}</p>
                 </div>
             </div>
             <div @click="hideDateView()">
               <datetime-view  id="date1" v-model="value1" ref="datetime" :format="format" v-if="showDate1"></datetime-view>
               <datetime-view  id="date2" v-model="value2" ref="datetime" :format="format" v-if="showDate2"></datetime-view>
                    <div class="all" v-show="index1==0">
                        <group>
                            <cell class="cell">
                                <div slot="icon">
                                    <div class="cell_title">查看计划</div>
                                    <div class="cell_desc">余额：666积分</div>
                                </div>
                                <div>
                                   <div class="plan_time">2018-11-24 21:30</div>
                                   <div class="expend_score"><span class="expend_num">-25</span> 积分</div>
                                </div>
                            </cell>
                            <cell class="cell">
                                <div slot="icon">
                                    <div class="cell_title">查看计划</div>
                                    <div class="cell_desc">余额：666积分</div>
                                </div>
                                <div>
                                   <div class="plan_time">2018-11-24 21:30</div>
                                   <div class="gain_score"><span class="gain_num">+100</span> 积分</div>
                                </div>
                            </cell>
                        </group>
                    </div>
                    <div class="gain"  v-show="index1==1">
                         <group>
                            <cell class="cell">
                                <div slot="icon">
                                    <div class="cell_title">查看计划</div>
                                    <div class="cell_desc">余额：666积分</div>
                                </div>
                                <div>
                                   <div class="plan_time">2018-11-24 21:30</div>
                                   <div class="gain_score"><span class="gain_num">+100</span> 积分</div>
                                </div>
                            </cell>
                              <cell class="cell">
                                <div slot="icon">
                                    <div class="cell_title">查看计划</div>
                                    <div class="cell_desc">余额：666积分</div>
                                </div>
                                <div>
                                   <div class="plan_time">2018-11-24 21:30</div>
                                   <div class="gain_score"><span class="gain_num">+100</span> 积分</div>
                                </div>
                            </cell>
                        </group>
                    </div>
                    <div class="expend"  v-show="index1==2">
                         <group>
                            <cell class="cell">
                                <div slot="icon">
                                    <div class="cell_title">查看计划</div>
                                    <div class="cell_desc">余额：666积分</div>
                                </div>
                                <div>
                                   <div class="plan_time">2018-11-24 21:30</div>
                                   <div class="expend_score"><span class="expend_num">-25</span> 积分</div>
                                </div>
                            </cell>
                            <cell class="cell">
                                <div slot="icon">
                                    <div class="cell_title">查看计划</div>
                                    <div class="cell_desc">余额：666积分</div>
                                </div>
                                <div>
                                   <div class="plan_time">2018-11-24 21:30</div>
                                   <div class="expend_score"><span class="expend_num">-25</span> 积分</div>
                                </div>
                            </cell>
                            
                            
                        </group>
                    </div>
              </div>
        </div>
   </div>
</template>
<script>
export default {
    data () {
        return {
            menuList:["全部","收入","支出"],
            fixedDate:["一周","一月","一年"],
            demo1:"全部",
            index1:0,
            value1: '2018-10-11',
            value2: '2019-10-24',
            format: 'YYYY-MM-DD',
            showDate1:false,
            showDate2:false

        }
    },
    methods :{
        showDiv (index) {
           this.index1=index;
           console.log(index);
        },
        showDateView1 () {
            this.showDate1 = true;
            this.showDate2 = false;
        },
        showDateView2 () {
            this.showDate1 = false;
            this.showDate2 = true;
        },
        hideDateView (event) {
            this.showDate1 = false;
            this.showDate2 = false;
            // var sp = document.getElementById("date1");
            // if(sp){
            //      console.log(333);
            //     if(!sp.contains(event.target)){ 
            //         console.log(222);
                
            //     }
            // }
        }


    }
}
</script>
<style scoped>
 .demo1-item{
     width:31%;
     text-align: center;
 }
 .demo1-item-selected{
     color:#039BE5;
 }
 .cell{
     padding:0.9rem 0.7rem;
     font-size:1.3rem;
 }
 .data_content{
     margin-top:0.8rem;
     background: #fff;
 }
 .cell_desc{
    font-size:0.95rem;
    font-size:#999;
 }
 .check_date{
     padding:1rem;
 }
 .fixed_date,.change_date{
     width:40%;
     justify-content: space-between;     
 }
 .change_date{
     width:50%;
 }
 .start_date,.end_date{
     font-size:0.9rem;
     /* color:#666; */
 }
 .active{
     color:#039BE5;
 }
 .plan_time{
     color:#757575;
     font-size: 0.95rem;
 }
 .expend_score,.gain_score{
     font-size:1.1rem;
 }
 .expend_num{
     color:#E34541;
 }
 .gain_num{
     color:#43A047;
 }
 .cell_title,.plan_time{
     margin-bottom:0.3rem;
 }
</style>
