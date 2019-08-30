<template>
    <div class="g-inherit m-main">
        <x-header  :left-options="{showBack: true,backText: ' '}" title="找回密码" class="header" >    
        </x-header>
        <group class="update_box">
            <cell-box class="cell_box">
                <span class="cell_title">预留手机</span>
                <input type="text" value="158****3388" class="xinput tel_number" >
                <span class="send_invite" v-show="!isSend" @click="toSend()">发送验证码</span>
                <span class="sended" v-show="isSend">重新发送(<span>59</span>)</span>
            </cell-box>
             <cell-box class="cell_box">
                <span class="cell_title">验证码</span>
                <input type="type" placeholder="不能为空" class="xinput" >
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
.tel_number{
    width:12rem;
}
.send_invite{
    width:7rem;
    color:#039BE5;
    font-size: 0.9rem;
}
.sended{
    width:7rem;
    color:#999;
      font-size: 0.9rem;
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
