<template>
    <div class="g-inherit m-article">
            <x-header  :left-options="{backText: ' '}"  >
                  创建群组
                <a slot="left"></a>
            </x-header>
            <div class="tocheck"  @click="toChat()">
                 全选
            </div>
              <!-- :results="results" -->
              <!-- v-model="value" -->
            <search class="a_m_s"
                @result-click="resultClick()"
                @on-change="getResult()"
                position="absolute"
                auto-scroll-to-top
                top="46px"
                placeholder="搜索好友"
                @on-focus="onFocus()"
                @on-cancel="onCancel()"
                @on-submit="onSubmit()"
                ref="search"></search>
           
            <group class="a_m am1 group"  @click.native="isShow1()" >
                <cell 
                    title="我的好友"
                >
                   <img slot="icon" width="20" style="display:block;margin-right:5px;"  v-show="!show1" src="/webdemo/h5/res/images/top_right.png">
                   <img slot="icon" width="20" style="display:block;margin-right:5px;"  v-show="show1" src="/webdemo/h5/res/images/top_down.png">
                   <check-icon :value.sync="isCheck"></check-icon>  
                  
                </cell>
            </group>
            <group class="a_m" v-show="show1">
                <cell
                    title="小王"
                >
                   <img slot="icon" width="45" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/avatar_default.png">
                   <check-icon :value.sync="isCheck"></check-icon>  
                  
                </cell>
                 <cell
                    title="小王"
                >
                   <img slot="icon" width="45" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/avatar_default.png">
                   <check-icon :value.sync="isCheck"></check-icon>  
                  
                </cell>
                 <cell
                    title="小王"
                >
                   <img slot="icon" width="45" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/avatar_default.png">
                   <check-icon :value.sync="isCheck"></check-icon>  
                  
                </cell>
            </group>
              <group class="a_m group"  @click.native="isShow2()">
                <cell 
                    title="最近联系"
                >
                   <img slot="icon" width="20" style="display:block;margin-right:5px;" v-show="!show2" src="/webdemo/h5/res/images/top_right.png">
                   <img slot="icon" width="20" style="display:block;margin-right:5px;" v-show="show2"  src="/webdemo/h5/res/images/top_down.png">
                   <check-icon :value.sync="isCheck"></check-icon>  
                  
                </cell>
            </group>
            <group class="a_m" v-show="show2">
                <cell
                    title="大王"
                >
                   <img slot="icon" width="45" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/avatar_default.png">
                   <check-icon :value.sync="isCheck"></check-icon>  
                  
                </cell>
                 <cell
                    title="大王"
                >
                   <img slot="icon" width="45" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/avatar_default.png">
                   <check-icon :value.sync="isCheck"></check-icon>  
                  
                </cell>
                 <cell
                    title="大王"
                >
                   <img slot="icon" width="45" style="display:block;margin-right:5px;" src="/webdemo/h5/res/images/avatar_default.png">
                   <check-icon :value.sync="isCheck"></check-icon>  
                  
                </cell>
            </group>
          
            
    </div>
</template>
<script>
export default {
   data () {
    return {
      show1:false,
      show2:false,
      isCheck:false,
      results: [],
      value: 'test',
      commonList:[{key:'name',value:'value',icon:'/webdemo/h5/res/images/to_right.png'},{key:'name1',value:'value1',icon:'/webdemo/h5/res/images/to_right.png'}]
    }
   },
   methods: {
    //  好友联系人展开收缩
    isShow1 () {
       this.show1=!this.show1
    },
    isShow2 () {
       this.show2=!this.show2
    },
    // 点击确定跳转到群聊天
    toChat () {
          this.$router.push({path: '/chat/team-1526847681'}); 
    },
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', val)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  }
}
</script>
<style scoped> 
  .tocheck{
    position: absolute;
    right:1rem;
    top:0.7rem;
  }
   .a_m_s{
       height:2.3rem;
       line-height:2.3rem;
   }
   .am1{
     margin-top:1rem;
   }
   .a_m{
     background: #fff;
   }
   .group cell{
      font-size:1.3rem;
   }
</style>
