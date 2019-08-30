<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="修改密码" class="header" >
            <p  class="getback" slot="right" @click="getBack()">找回密码</p>     
        </x-header>
        <div class="error_box" v-show="isError">
            <img src="/webdemo/h5/res/images/ico_error.png" alt="" class="fl">
            <div class="fl red">现有密码错误</div>
            <img src="/webdemo/h5/res/images/ico_close-1.png" alt="" class="fr close"  @click="toClose()">
        </div>
        <group class="update_box">
            <cell-box class="cell_box">
                <span class="cell_title">现有密码</span>
                <input type="password" value="dsfsadfsafas" class="xinput" >
            </cell-box>
        </group>
         <group class="update_box">
            <cell-box  class="cell_box">
                <span class="cell_title">新密码</span>
                <input type="text" placeholder="不少于6位数字、字母组合" class="xinput" >
            </cell-box>
            <cell-box  class="cell_box">
                <span class="cell_title">确认密码</span>
                <input type="text" class="xinput" >
            </cell-box>
        </group>
         <x-button class="save" type="primary" action-type="button"  text="保存"></x-button> 
    </div>  
</template>
<script>
export default {
    data () {
        return {
            isError:true
        }
    },
    methods: {
        toClose () {
            this.isError=false;
        },
        getBack() {
             this.$router.push({path:'/getback'}); 
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
.getback{
    color:#666;
    font-size:0.95rem;
}
.update_box{
    background: #fff;
    margin-top:0.6rem;
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
