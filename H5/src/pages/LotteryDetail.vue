<template>
    <div class="g-inherit m-article">
        <x-header class="m-tab" :left-options="{backText: ' '}" >
            <h1 class="m-tab-top">重庆时时彩</h1>
            <a slot="left"></a>
            <a slot="right">关注</a>     
        </x-header>
        <group class="detail_box">
            <cell class="cell_box">
                <div slot="icon">
                    <p class="period">第180531084期</p>
                    <p class="l_time">距离开奖时间为: <span>00:50</span></p>

                </div>
            </cell>
            <cell class="cell_box">
                <div slot="icon">
                    <p  class="period">第180531084期</p>
                     <div class="number_box">
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>
                         <div class="num_item fl">3</div>                                                                
                     </div>        
                </div>
                <div class="l_data">
                    2018-11-11 21:30
                </div>
            </cell>
             <cell class="cell_box">
                <div slot="icon">
                    <p  class="period">第180531084期</p>
                     <div class="number_box">
                         <div class="num_item white fl">3</div>
                         <div class="num_item white fl">3</div>
                         <div class="num_item white fl">3</div>
                         <div class="num_item white fl">3</div>
                         <div class="num_item white fl">3</div>                                                                
                     </div>        
                </div>
                <div class="l_data">
                    2018-11-11 21:30
                </div>
            </cell>
             <cell class="cell_box">
                <div slot="icon">
                    <p  class="period">第180531084期</p>
                     <div class="number_box">
                         <div class="num_item white fl">3</div>
                         <div class="num_item white fl">3</div>
                         <div class="num_item white fl">3</div>
                         <div class="num_item white fl">3</div>
                         <div class="num_item white fl">3</div>                                                                
                     </div>        
                </div>
                <div class="l_data">
                    2018-11-11 21:30
                </div>
            </cell>
        </group>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .fl{
        float: left;
    }
  .detail_box{
      margin-top:4rem;
  }
  .cell_box{
      background: #fff;
      margin:0.5rem 0;
  }
  .period{
      margin-bottom:0.5rem;
  }
  .l_time{
      color:#E34541
  }
  .num_item{
       width:1.5rem;
       height:1.5rem;
       border-radius: 50%;
       background:linear-gradient(180deg,rgba(255,109,93,1) 0%,rgba(227,69,65,1) 36%,rgba(198,29,37,1) 100%);
       border:1px solid rgba(221,221,221,1);
       color:#fff;
       text-align: center;
       line-height: 1.5rem;
       margin: 0 0.1rem;
   }
   .white{
       background:rgba(255,255,255,1);
       border:1px solid rgba(221,221,221,1);
       color:#333;
   }
   .l_data{
       position: relative;
       top:-1.2rem;
       color:#555;
   }
</style>
