<template>
     <div class="g-inherit m-article">
            <x-header  :left-options="{backText: ' '}" >
                 添加好友
                <a slot="left"></a>
            </x-header>
            <group class="user_box">
                <cell 
                    class="u-list-item"
                    title="王五五"
                    inline-desc="ID:654321"
                    >
                    <img class="icon" slot="icon" width="20" src="/webdemo/h5/res/images/avatar_default.png" >
                </cell>    
           </group>
           <group title="验证信息">
                 <x-textarea  :max="200" name="detail"  :rows="5" :show-counter="false"></x-textarea>
           </group>
           <x-button 
               class="to_send"
                @click.native="sendMsg()"
                type="primary">发送</x-button>
    </div>
</template>
<script>
export default {
    date () {
        return {
            isSend:false
        }
    },
    methods:{
        sendMsg () {
           this.isSend=true;
        }
    }
}
</script>
<style scoped>
   .user_box{
       width:100%;
       margin:1rem auto;
       background: #fff;
   }
   .weui-cells__title{
       font-size:1rem !important;
   }
   .to_send{
       margin-top:0.8rem;
   }
</style>
