<template>
    <div class="g-inherit m-article">
            <x-header  :left-options="{backText: ' '}" >
                   创建群昵称
                <a slot="left"></a>
            </x-header>
            <group class="c_g">
                <x-textarea class="c_g_t" title="群昵称" placeholder="请输入您的群昵称" :max="8" :rows="1"  ></x-textarea>
            </group>
             <x-button type="primary" class="save_btn" @click.native="toAddMember()" >保存</x-button>
          
            
    </div>
</template>
<script>
export default {
    methods: {
        //创建群组加好友
        toAddMember () {
           this.$router.push({path: '/teaminvite/0'}); 
        }
    }
}
</script>
<style scoped>
 .c_g{
     background: #fff;
     margin:0.8rem auto;
 }
 .c_g_t{
     font-size:1.2rem;
 }
 .save_btn{
     margin-top:0.5rem;
 }
</style>
