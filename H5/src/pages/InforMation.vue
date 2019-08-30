<template>
    <div class="g-inherit m-main">
       <x-header  :left-options="{showBack: false}">资讯</x-header>
        <div class="information_box" >
            <group>
                <cell class="in_cell" v-for="(item,index) in newsList" :key="index" @click.native="toNewsDetail(item.url)">
                     <div slot="icon" v-if="item.image_list.length<1">
                         <div class="n_title">{{item.title}}</div>
                         <div class="n_abstract">{{item.abstract}}</div>
                         <div class="n_time">{{item.time}}</div>                        
                     </div>
                     <div slot="icon" v-else-if="item.image_list.length<3&&item.image_list.length>=1" class="flex">
                         <div class="n_content">
                              <div v-for="(item,index) in item.image_list" :key="index">
                                 <img :src="item" alt="" class="in_img">
                              </div>
                         </div>
                         <div class="title_box">
                            <div class="n3_title">{{item.title}}</div>
                            <div class="n_time">{{item.time}}</div> 
                         </div>                       
                     </div>
                    <div slot="icon" v-else-if="item.image_list.length>=3">
                         <div class="n_title">{{item.title}}</div>
                          <div class="n_content flex in4">
                              <div v-for="(item,index) in item.image_list" :key="index">
                                 <img :src="item" alt="" class="in_img">
                              </div>
                         </div>
                         <div class="n_time">{{item.time}}</div>                        
                    </div>
                </cell>
            </group>
            <div class="bottom_div"></div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
    export default {
        data () {
           return {
               newsList:[],
           }
        },
        created : function () {
               this.$axios.post("http://www.ssjh.com/m/getAppToutiao").then(res=>{
                    console.log(111,res.data.data.list);
                    this.newsList=res.data.data.list;
                    
               })
       },
       methods : {
           toNewsDetail (url) {
               location.href=url;
           }
       }
    }
</script>
<style scoped>
    .in_cell{
        padding:0.9rem 0.8rem !important;
    }
    .flex{
        display: flex;
        justify-content: space-between
    }
   .n_title{
       width:20rem;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
       font-size:1.05rem;
       font-weight: 500;
   }
   .n_abstract{
       overflow: hidden; 
       text-overflow: ellipsis;
       font-size:0.8rem;
      color:#555;
      margin:0.5rem auto;
   }
   .n_time{
       font-size:0.5rem;
      color:#777;
   }
   .n3_title{
        width:12rem;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: pre-wrap;
       font-size:1.05rem;
       font-weight: 500;
   }
   .in_img{
       width:6.8rem;
       height:4.6rem;
       margin:0 0.2rem;
   }
   .title_box{
       width:6.8rem;
       margin-left:0.8rem;
       height:4.6rem;
   }
   .in4{
       margin:0.5rem auto;
   }
   .bottom_div{
       height:3.8rem;
   }
</style>
