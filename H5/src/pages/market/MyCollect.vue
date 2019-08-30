<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="我的收藏(6)" > 
             <div slot="right" v-if="!isCheck" class="part_delete" @click="isCheck=true">批量删除</div>
             <div slot="right" v-if="isCheck" class="part_delete flex"><p class="cansel" @click="isCheck=false">取消</p><p class="delete" @click="deleteItme()">删除(<span>{{checkPlans.length}}</span>)</p></div>
        </x-header>
        <div class="plan_box">
            <div class="plan_help clearfix">
                <ul class="fl">
                    <li class="help_item  fl" v-for="(item,index) in helpMenus" :key="index" :class="{active:index==current}" @click="helpAdd(index)">
                          {{item}}
                    </li>             
                </ul>
            </div>
            <form action="">
                <div class="plan flex">
                
                    <div class="plan_item" :class="{delete_bg:isCheck}" v-for="item in itemList" :key="item.key" @click="toItem()">   
                                <p class="item_title">{{item.title}}</p>
                                <p class="item_rate">盈利率 <span class="green">{{item.rate}}</span></p>                           
                                <input type="checkbox" class="checkbox"  v-show="isCheck"  value="item.key"  @click="addCheck(item)">
  
                    </div> 
                    
                </div>
            </form> 
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            checkNum:0,
            isCheck:false,
            current:0,
            helpMenus:["时间","准确率","点击率"],
            checkPlans:[],
            itemList:[
                {key:1,title:"计划中中(30)",rate:"90%"},
                {key:2,title:"计划中中(31)",rate:"90%"},
                {key:3,title:"计划中中(32)",rate:"90%"},
                {key:4,title:"计划中中(33)",rate:"90%"},
                {key:5,title:"计划中中(34)",rate:"90%"},
                {key:6,title:"计划中中(35)",rate:"90%"},
                {key:7,title:"计划中中(36)",rate:"90%"}
            ]
        }
    },
    methods : {
        helpAdd (index) {
            this.current=index;
        },
        toItem () {
            if(!this.isCheck){
              this.$router.push({path:'/item'}); 
            }
        },
        addCheck (item) {
            item.checked = !item.checked
            if (item.checked) {
            this.checkPlans.push(item.key)
            } else {
            this.checkPlans.splice(this.checkPlans.indexOf(item.key), 1)
            }
        },
        deleteItme () {
            console.log(this.checkPlans.sort().reverse());
            for (let i = 0; i < this.checkPlans.length; i++) {
                console.log(this.checkPlans[i]);
                    this.itemList.splice(this.checkPlans[i], 1);
                
            }
        }

    }
    // created:function () {
    //     this.isCheck=false;
    // }
}
</script>
<style scoped>
.delete{
    color:#039BE5;
}
.part_delete{
    justify-content: space-evenly;
    width:6rem;
    text-align: center;
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
    height:auto;
    box-sizing: border-box;
    background:rgba(238,250,255,1);
    border:1px solid rgba(144,202,249,1);
    border-radius:0.25rem;
    margin-bottom:0.6rem;
     color:#333;
    font-size:0.85rem;
    position: relative;
}
.delete_bg{
    
    background:rgba(0,0,0,1);
    opacity:0.7;
}
.checkbox{
    padding:1rem;
    width:2rem;
    margin:1rem auto 0 auto;
    z-index:10;
    display: block;
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
 .plan_box{
     background: #FFF;
     margin-top:0.6rem;
     width: 100%;
     height:100%;
 }
 .plan_help{
     padding:0.5rem ;
     box-sizing: border-box;
     color:#666;
 }
</style>
