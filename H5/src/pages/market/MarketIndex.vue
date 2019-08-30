<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: false,backText: ' '}" title="定位胆_个位" > 
             <img  slot="left" src="/webdemo/h5/res/images/top_menu.png" alt="" class="top_menu" @click="show2=true">
             <p slot="right" class="manage">管理计划</p>
        </x-header>
        <!-- 菜单栏的弹窗 -->
        <popup v-model="show2" position="left" width="70%">
              <div class="menu_box">
                    <div class="kind_box">
                        <div class="check_kind" @click="showKind=!showKind">{{checkedKind}}</div>
                        <div class="kind_menu" v-show="showKind">
                            <div class="kind_item" v-for="(item,index) in kindList" :key="index" @click="checkKind(index)">
                                 {{item}}
                            </div>
                                  
                        </div>
                    </div>
                    <div class="play_box">
                          <div  class="play_item_bg" v-for="(item,index) in playList" :key="index">
                              <div class="play_item" :class="{active:current1==index}" @click="showSeries(index)">{{item}}</div>
                              <div class="series_box flex" v-show="current1==index">
                                 <div class="series_item " v-for="(item,index1) in seriesList" :key="index1" :class="{active:current2==index1}" @click="seriesActive(index1)"> {{item}}</div>
                              </div> 
                          </div>
                                           
                    </div>
              </div>
        </popup>
        <div class="notice">
             *蓝色为未读计划， 红色为已读计划，白色为您发布的计划
        </div>
        <div class="plan_box">
            <div class="plan_help clearfix">
                <ul class="fl">
                    <li class="help_item  fl" v-for="(item,index) in helpMenus" :key="index" :class="{active:index==current}" @click="helpAdd(index)">
                          {{item}}
                    </li>             
                </ul>
                <router-link to="/mycollect" class="collect fr">
                    我的收藏
                </router-link>
            </div>
            <div class="plan flex">
                   <div class="plan_item readed" @click="toItem()">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>

                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item own_plan">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   <div class="plan_item">
                       <p class="item_title">计划中中(30)</p>
                       <p class="item_rate">盈利率 <span class="green">90%</span></p>
                   </div>
                   
            </div>
            <div class="im_add">
                <router-link to="/publishplan"><img src="/webdemo/h5/res/images/im_add.png" alt=""></router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            checkedKind:"重庆时时彩1",
            showKind:true,
            show2:false,
            current:0,
            current1:0,
            current2:0,
            helpMenus:["时间","准确率","点击率"],
            playList:[
               "定位胆","不定位胆","直选","任意单式","定位大小","定位单双"
            ],
            kindList:[
              "重庆时时彩","重庆时时彩1","重庆时时彩2","重庆时时彩3"
            ],
            seriesList:[
               "万位","千位","百位","十位","个位"
            ]
        }
    },
    methods : {
        helpAdd (index) {
            this.current=index;
        },
        checkKind (index) {
            console.log(this.kindList[index])
           this.checkedKind=this.kindList[index];
           this.showKind=false;
        },
        showSeries (index)  {
             this.current1=index;
        },
        seriesActive(index){
            this.current2=index;
        },
        toItem () {
            this.$router.push({path:'/item'}); 
        }
    }
}
</script>
<style scoped>
.play_item{
    width:100%;
    padding:0.6rem  0.7rem;
    box-sizing: border-box;
    background: url(/webdemo/h5/res/images/top_right.png) 95% center no-repeat;
    background-size:7%;
     
}
.play_item.active{
    background: url(/webdemo/h5/res/images/top_down.png) 95% center no-repeat;
    background-size:7%;
}
.play_item_bg{
    border-bottom:1px solid rgba(221,221,221,1);
}
.series_box{
    padding:0.6rem 0.5rem;
    box-sizing: border-box;
    width: 100%;
    justify-content: start;
    flex-wrap: wrap;
}
.series_item{
    width:4.4rem;
    height:1.9rem;
    text-align: center;
    line-height:1.9rem;
    background:rgba(255,255,255,1);
    border:1px solid rgba(227,227,227,1);
    border-radius:4px;
    font-size:0.85rem;
    color:#666;
    margin:0 0.4rem 0.5rem 0;
}
.series_item.active{
    background:rgba(3,169,244,1);
    border:1px solid rgba(3,169,244,1);
    color:#fff;
}
.kind_box{
    text-align: center;
    color:#333;
    font-weight: 500;
}
.check_kind{
    width:100%;
    padding:0.6rem 0.7rem;
    box-sizing: border-box;
    background: url(/webdemo/h5/res/images/top_down.png) 75% center no-repeat;
    background-size:7%; 
    border-bottom:1px solid rgba(221,221,221,1);
}
.kind_item{
    padding:0.6rem 0.7rem;
    width:100%;
    box-sizing: border-box;
}
.im_add{
    position: fixed;
    right:1.5rem;
    bottom:5rem;
}
.item_title{
    text-align: center; 
}
.item_rate{
    text-align: center;
    color:#666;
    font-size:0.7rem;
}
.green{
    color:#43A047;
    font-weight: bold;
    font-size:0.85rem;
}
.plan{
    justify-content: space-between;
    width: 100%;
    padding: 0.2rem 0.5rem 0.5rem 0.5rem ;
    box-sizing: border-box;
    flex-wrap: wrap;
  

}
.plan_item{
    padding: 0.75rem 0.6rem;
    width:7rem;
    height:4rem;
    box-sizing: border-box;
    background:rgba(238,250,255,1);
    border:1px solid rgba(144,202,249,1);
    border-radius:0.25rem;
    margin-bottom:0.6rem;
     color:#333;
    font-size:0.85rem;
}
.plan_item.readed{
    color:#E34541;
    background:rgba(255,247,247,1);
    border:1px solid rgba(255,171,145,1);
}
.plan_item.own_plan{
    background:rgba(255,255,255,1);
    border:1px solid rgba(221,221,221,1);
}
 .collect{
     background: url(/webdemo/h5/res/images/ico_sc.png) left center no-repeat;
     color:#666;
     padding-left:1.2rem;
 }
 .help_item{
     padding-left:0.8rem;
     color:#666;
     margin-right:0.5rem
 }
 .help_item.active{
     background: url(/webdemo/h5/res/images/grzx_paixu.png) left center no-repeat;
     color:#039BE5;
 }
 .manage{
     color:#666;
 }
 .notice{
     width:100%;
     text-align: center;
     font-size:0.8rem;
     color:#666;
     height:3.5rem;
     line-height: 3.5rem;
 }
 .plan_box{
     background: #FFF;
     width: 100%;
     height:100%;
 }
 .plan_help{
     padding:0.5rem ;
     box-sizing: border-box;
     color:#666;
 }
</style>
