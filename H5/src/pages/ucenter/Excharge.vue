<template>
    <div class="g-inherit m-main">
       <div class="top_banner">        
            <img src="/webdemo/h5/res/images/top_back_fill.png" alt="" class="top_back" @click="back()">         
       </div>
       <div class="excharge_msg">
            <div class="excharge_detail fl excharge_l">
                <div>斗鱼鱼丸1000个 限时限量100份 赶快抢购</div>
                <div class="score_icon fl">
                    <img src="/webdemo/h5/res/images/ico_jb_gray.png" alt="">
                    <span class="good_price">5000</span>                   
                </div>
            </div>
            <div class="fl excharge_r flex">
                <div class="to_excharge" @click="showPopup()">
                    兑换
                </div>
            </div>
       </div>
       <div class="group_bg">
                    <div class="bg1 group">
                        <div class="cell_title">
                            <div class="title_div fl"></div>
                            <div class="title">商品兑换</div>
                        </div>
                        <div class="cell_desc">
                            50元话费，够你说一个故事，这个故事有你有TA!
                        </div>
                    </div>
               
                    <div class=" group bg2" >
                        <div class="cell_title">
                            <div class="title_div fl"></div>
                            <div class="title">兑换说明</div>
                        </div>
                        <div class="cell_desc">
                            <p>1、兑换后请填写您填写手机号码，客服会在一周内为您发奖（节假日延顺）。</p>
                            <p>2、若因为号码填写错误，充到他人手机本平台不负责。 </p>
                            <p>3、兑换的话费是一次性消费品，不能退换。</p>
                        </div>
                    </div>
                
       </div>
       <!-- popup  -->
       <popup v-model="show" position="bottom" height="57%" hide-on-blur show-mask  >
            <div class="">
                 <div class="error_box" v-show="isError">
                    <img src="/webdemo/h5/res/images/ico_error.png" alt="" class="fl">
                    <div class="fl red">手机号两次输入不一致</div>
                    <img src="/webdemo/h5/res/images/ico_close-1.png" alt="" class="fr close"  @click="toClose()">
                </div>
                <div class="popup_title">充值确认</div>
                <div class="popup_content">
                    <div  class="content_item clearfix">
                        <div class="item_title fl">充值号码</div>
                        <div class="item_r fl">
                            <input type="text" placeholder="11位手机号">
                        </div>
                    </div>
                     <div  class="content_item clearfix">
                        <div class="item_title fl">确认号码</div>
                        <div class="item_r fl">
                            <input type="text" placeholder="确认手机号">
                        </div>
                    </div>
                     <div  class="content_item  clearfix">
                        <div class="item_title fl">兑换数量</div>
                        <div class="item_r fl xnumber_box">
                              <div class="minus fl" :class="{dark1:isDark}" @click="toMinis()">-</div>
                              <input type="text" :class="{dark2:isDark}" v-model="num" class="x_num fl" @change="toDark()"> 
                              <div class="add fl" @click="toAdd()">+</div>                      
                         </div>
                    </div>
                     <div  class="content_item clearfix">
                        <div class="item_title fl">需支付积分</div>
                        <div class="item_r fl">
                             <span class="expend_num">500</span><span class="redius_num">(您共有2000积分)</span>
                        </div>
                    </div>
                    
                </div>
                <div class="recharge_text" :class="{'op5':isActive}" @click="toRecharge()">
                    充值
                </div>
            </div>
      </popup>

    </div>    
</template>
<script>
export default {
    data () {
        return {
            show:true,
            num:1,
            isActive:false,
            isDark:false,
            isError:false
            
        }
    },
    methods : {
        back () {
            this.$router.back(-1);
        },
        // popup弹出层
        showPopup () {
            this.show=true;
        },
        toMinis () {
           this.num==0?this.num=0:this.num--;           
        },
        toAdd () {
           this.num++; 
        },
        toRecharge () {
            console.log(this.num);
            this.isActive=true;
            this.isError=true;
        },
        toClose () {
            this.isError=false;
        }
    },
    watch : {
        num : function () {
            this.num==0?this.isDark=true:this.isDark=false;
        }
    }
   
}
</script>
<style scoped>
.error_box{
  width:100%;
  height:2.9rem;
  background:rgba(255,234,234,1);
  padding:0.9rem 0.7rem;
  box-sizing: border-box;
}
.red{
    font-size:0.95rem;
    color:rgba(255,0,0,1);
    margin-left:0.5rem;

}
.close{
    position: relative;
    top:0.2rem;
}
.minus,.add{
    width:1.5rem;
    height:1.5rem;
    border-radius: 1.5rem;
    border:1px solid #039BE5;
    line-height:1.5rem;
    text-align: center;
    color:#039BE5;
    font-size:1.5rem;
}
.dark1{
    color:#999;
    border:1px solid #999;
}
.dark2{
    color:#999;
}
.x_num{
    height:1.5rem;
    width:3rem;
    text-align: center;
    font-size:1.2rem;
    color:#333;
}
.recharge_text{
    width:100%;
    height:3rem;
    background:linear-gradient(90deg,rgba(255,198,13,1) 0%,rgba(255,125,0,1) 100%);
    box-shadow:0px 2px 4px rgba(0,0,0,0.16);
    /* opacity:0.5; */
    color:#fff;
    line-height: 3rem;
    text-align: center;
    font-size:1.2rem;
}
.op5{
    opacity: 0.5;
}
.xnumber_box{
    height:1rem;
}
.expend_num{
    color:#FB8C00;
    font-size:1.1rem;
    display:inline-block;
    margin-right:0.5rem;
}
.redius_num{
    font-size:0.9rem;
    color:#757575;
}
.xnumber{
    position: relative;
    top:-0.4rem;
    left:-0.9rem;
}
.item_title{
    width:25%;
    margin-right:1rem;
    
}
.popup_title{
    border-bottom:1px solid #DDD;
    padding:1rem;
    box-sizing: border-box;
}
.content_item{
    padding:1rem 0;
    border-bottom:1px solid #DDD;
}
.popup_content{
    padding:0 1rem;
    box-sizing: border-box;
}
input{
    border:none;
    outline: none;
    width:70%;
    font-size:0.9rem;
}
.group_bg{
    background: DDDfff;
    margin-top:0.6rem;
}
.group{
    margin:1rem;
    padding:1rem 0;
    box-sizing: border-box;
}
.bg1{
    border-bottom:1px solid DDDDDD;
}
.bg2{
  padding-top:0;
}
.cell_title{
   margin-bottom:0.5rem;
}
.title_div{
    width:0.25rem;
    height:1rem;
    background:rgba(251,140,0,1);
    margin-right:0.5rem;
}
.title{
    color:#333;
    height:1rem;
    line-height: 1rem;
}
.cell_desc{
    font-size:0.9rem;
    line-height:1.6rem;
    color:rgba(102,102,102,1);
}
.top_banner{
    position: relative;
    width:100%;
    height:23.4rem;
   background: url(/webdemo/h5/res/images/jfsp_pic.png) left top no-repeat;
   background-size:cover;
}
.top_back{
    position: absolute;
    left:1rem;
    top:1rem;
}
.excharge_msg{
    background: #fff;
    width: 100%;
    height:6rem;
    padding: 1rem;
    box-sizing: border-box;
}
.excharge_l{
    width:67%;
}
.excharge_r{
    width:33%;
    align-items: center;
    height: 4rem;
    justify-content: center;
}
.good_price{
    color:#FB8C00;
}
.to_excharge{
    width:7rem;
    height:3rem;
    color:#fff;
    text-align: center;
    line-height:3rem;
    background:url(/webdemo/h5/res/images/btn_jfdh.png) left top no-repeat;  
}
</style>
