<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="积分商城"  >    
        </x-header>
        <div >
            <img src="/webdemo/h5/res/images/banner_jfsc.png" alt="" class="score_banner">
        </div>
        <div class="shop_box">
            <div class="score_avater fl">
                <img src="/webdemo/h5/res/images/ico_bi_xl.png" alt="">
            </div>
            <p class="fl redius ">积分余额 <span class="redius_num">1321</span></p>                       
        </div>
         <div  class="grid_box ">
            <div  v-for="item in goods" :key="item.key" class="grid_item">
                <img  :src="item.icon" class="item_img" >
                <div >
                    <div class="good_name">{{item.gname}}</div>
                    <div>
                        <div class="score_icon fl">
                            <img :src="item.scoreicon" alt="">
                            <span class="good_price">{{item.gprice}}</span>
                        </div>
                        <div class="excharge fr" @click="toExcharge()">
                            兑换
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <confirm v-model="show"
            title="积分提示"
            @on-cancel="onCancel"
            @on-confirm="onConfirm"
            @on-show="onShow"
            @on-hide="onHide">
                <p style="text-align:center;">您的积分不足(余额16),是否前往积分充值？</p>
      </confirm>
    </div>
</template>
<script>
export default {
    data () {
        return {
            show:false,
            goods:[
                {key:1,lable:"斗鱼鱼丸1000个",icon:"/webdemo/h5/res/images/qd_banner.png",scoreicon:"/webdemo/h5/res/images/ico_jb_gray.png",gname:"斗鱼鱼1000个",gprice:"50000"},
                {key:2,lable:"斗鱼鱼丸1000个",icon:"/webdemo/h5/res/images/qd_banner.png",scoreicon:"/webdemo/h5/res/images/ico_jb_gray.png",gname:"斗鱼鱼1000个",gprice:"50000"},
                {key:3,lable:"斗鱼鱼丸1000个",icon:"/webdemo/h5/res/images/qd_banner.png",scoreicon:"/webdemo/h5/res/images/ico_jb_gray.png",gname:"斗鱼鱼1000个",gprice:"50000"},
                {key:4,lable:"斗鱼鱼丸1000个",icon:"/webdemo/h5/res/images/qd_banner.png",scoreicon:"/webdemo/h5/res/images/ico_jb_gray.png",gname:"斗鱼鱼1000个",gprice:"50000"},
                {key:5,lable:"斗鱼鱼丸1000个",icon:"/webdemo/h5/res/images/qd_banner.png",scoreicon:"/webdemo/h5/res/images/ico_jb_gray.png",gname:"斗鱼鱼1000个",gprice:"50000"}


            ]
        }
    },
    methods : {
        toExcharge () {
        //    this.show=true;
             
               this.$router.push({path:'/excharge'}); 
        },
        // 兑换积分不够的弹出层
        onCancel () {

        },
        onConfirm () {
             this.$router.push({path:'/recharge'}); 
        },
        onShow () {

        },
        onHide () {

        }



    }
    
}
</script>
<style scoped>
.weui-panel{
    margin-top:0;
}
 .score_banner{
     width:100%;
 }
 
.shop_box{
    padding:0.9rem 0.7rem;
    height: 2rem;
    line-height:2rem;
    background: #fff;
}
.redius{
    font-size:1.1rem;
}
.redius_num,.good_price{
    color:#FB8C00;
}
.grid_box{
    width:100%;
    display: flex;
    justify-content:space-between;
   flex-wrap: wrap;
   padding:1rem;
   box-sizing: border-box;

}
.grid_item{
    background: #fff;
    width:47%;
    padding:0.5rem;
    box-sizing: border-box;
    margin-bottom:1rem;
}
.item_img{
    width:100%;
}    
.good_name{
    color:#333;
    line-height: 2rem;
}
.excharge{
    width:4rem;
    height:1.5rem;
    color:#fff;
    text-align: center;
    line-height:1.5rem;
    background:linear-gradient(90deg,rgba(255,198,13,1) 0%,rgba(255,125,0,1) 100%);
    box-shadow:0px 1px 3px rgba(0,0,0,0.16);
    border-radius:1rem;
    }
</style>
