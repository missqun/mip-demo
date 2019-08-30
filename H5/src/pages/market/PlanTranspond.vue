<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="计划转发" > 
             <div slot="right">
                <p class="check_all">全选</p>
             </div>
        </x-header>
        <div class="member_box">
            <checklist>
                
            </checklist>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
/* .my_friends{
    width:100%;
    padding:0.9rem 0.7rem 0.9rem 2rem;
    background: url(/webdemo/h5/res/images/top_right.png) 1rem center no-repeat;
    color:#666;
    height: 3rem;
    line-height: 3rem;
    background-size:4%; 
} */
    .check_all{
        color:#999;
    }
   .member_box{
       margin-top:0.6rem;
       background: #fff;
       width:100%;
       height:100%;
   }
</style>
