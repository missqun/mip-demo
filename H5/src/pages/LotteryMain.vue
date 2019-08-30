<template>
   <div class="g-inherit m-article">
      <x-header class="m-tab" :left-options="{backText: ' '}" >
        <h1 class="m-tab-top">重庆时时彩</h1>
        <a slot="left"></a>     
    </x-header>
    <group class="main_box">
        <cell class="cell_box"  @click.native="toLotteryDetail()" >
             <div slot="icon" class="flex">
                <img src="/webdemo/h5/res/images/txl_kjxx.png" alt="" class="fl" width="40">
                <div class="kind_msg">
                    <p class="kind">北京PK10</p>
                    <p class="period">第180531084期</p>
                     <div class="number_box">
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>                                                                
                     </div>                                        
                </div>
             </div>
            <x-button mini type="primary" class="attention_btn">关注</x-button>            
        </cell>
        <cell class="cell_box"  @click.native="toLotteryDetail()">
             <div slot="icon" class="flex">
                <img src="/webdemo/h5/res/images/txl_kjxx.png" alt="" class="fl" width="40">
                <div class="kind_msg">
                    <p class="kind">北京PK10</p>
                    <p class="period">第180531084期</p>
                     <div class="number_box">
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>                                                                
                     </div>                                        
                </div>
             </div>
            <x-button mini type="primary" class="attention_btn">关注</x-button>            
        </cell>
        <cell class="cell_box" @click.native="toLotteryDetail()">
             <div slot="icon" class="flex">
                <img src="/webdemo/h5/res/images/txl_kjxx.png" alt="" class="fl" width="40">
                <div class="kind_msg">
                    <p class="kind">北京PK10</p>
                    <p class="period">第180531084期</p>
                     <div class="number_box">
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>                                                                
                     </div>                                        
                </div>
             </div>
            <x-button mini type="default" class="cansel_attention_btn">取消关注</x-button>            
        </cell>
        
    
     
    </group>
   </div>
</template>
<script>
export default {
    methods : {
        toLotteryDetail () {
            this.$router.push({path:'/lotterydetail'})
        }
    }
}
</script>
<style scoped>
    .main_box{
        margin-top:4rem;
    }
    .cell_box{
        background: #fff;
        margin:0.5rem auto;
    }
   .fl{
       float: left;
   }
   .flex{
       display: flex;
       justify-content: space-around;
   }
   .kind_msg{
       margin-left:0.5rem;
   }
   .kind{
       font-weight: bold;
   }
   .period,.number_box{
      font-size:0.9rem;
      color:#555;
   }
   .num_item{
       width:1.5rem;
       height:1.5rem;
       border-radius: 50%;
       background:linear-gradient(180deg,rgba(255,109,93,1) 0%,rgba(227,69,65,1) 36%,rgba(198,29,37,1) 100%);
       color:#fff;
       text-align: center;
       line-height: 1.5rem;
       margin: 0 0.1rem;
   }
   .attention_btn{
       width:5.5rem;
   }
   .cansel_attention_btn{
      width:7rem;
      font-size:1rem;
      color:crimson;
      background: #fff;
      border:1px solid rgba(227,227,227,1);

   }
</style>
