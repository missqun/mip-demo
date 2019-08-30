<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="我的粉丝" class="header" >    
        </x-header>
        <div class="fans_notice">收藏过您计划的用户将成为你的粉丝哦，可主动向对方申请加为好友</div>
        <group class="update_box" >
            <cell  
               title="成龙-Jack chen"
               inline-desc="于2018.11.7日收藏我"
            >
            <img src="/webdemo/h5/res/images/avatar_default.png" alt="" slot="icon" width="60" class="fans_avater">
            <x-button mini type="primary" class="add">加为好友</x-button>
            </cell>
            <cell  
               title="成龙-Jack chen"
               inline-desc="于2018.11.7日收藏我"
            >
            <img src="/webdemo/h5/res/images/avatar_default.png" alt="" slot="icon" width="60" class="fans_avater">
            <x-button mini type="primary" class="add">加为好友</x-button>
            </cell>
            <cell  
               title="成龙-Jack chen"
               inline-desc="于2018.11.7日收藏我"
            >
            <img src="/webdemo/h5/res/images/avatar_default.png" alt="" slot="icon" width="60" class="fans_avater">
            <x-button mini type="primary" class="add">加为好友</x-button>
            </cell>
            <cell  
               title="成龙-Jack chen"
               inline-desc="于2018.11.7日收藏我"
            >
            <img src="/webdemo/h5/res/images/avatar_default.png" alt="" slot="icon" width="60" class="fans_avater">
            <p class="added">已添加</p>
            </cell>
            
           
        </group>
    </div>  
</template>
<script>
export default {
    data () {
        return {
            isError:true,
            isSend:false
        }
    },
    methods: {
        toClose () {
            this.isError=false;
        },
        toSend () {
            this.isSend=true;
        } 
    }
}
</script>
<style scoped>
.fans_notice{
    padding: 1rem;
    box-sizing: border-box;
    font-size:1rem;
    font-family:Source Han Sans CN;
    font-weight:400;
    line-height:1.4rem;
    color:rgba(153,153,153,1);
}
.add{
    width:7rem;
}
.fans_avater{
    margin-right:1rem;
}
.added{
   color:#666;
   width:7rem;
   text-align: center;
}
.update_box{
    background: #fff;
}
.cell_box{
    padding:0.9rem 0.7rem;
}
 .xinput{
     border:none;
     outline: none;
     height:1.5rem;
     font-size:1rem;
     color:#999;
 }
 .cell_title{
     width:6rem;
 }
 .save{
     margin-top:0.8rem;
 }
</style>
