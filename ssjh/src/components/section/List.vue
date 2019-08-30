<template>
        <div  id="container" class="fl">
                <div class="subtitle">
                    <ul class="subtitle_left fl">
                        <li class="item_sort fl pointer"> <img src="../../assets/images/sort.png" alt="" class="sort_img">&nbsp;时间</li>
                        <li class="item_sort fl pointer"> <img src="../../assets/images/sort.png" alt=""  class="sort_img">&nbsp;准确率</li>
                        <li class="item_sort fl pointer"> <img src="../../assets/images/sort.png" alt=""  class="sort_img">&nbsp;点击量</li>
                    </ul>
                    <ul class="subtitle_right fr">
                         <li class="r_item fl">
                             <div class="collect pointer" data-jump="collect">
                                <router-link to='/collect'> <img src="../../assets/images/ico_sc.png" alt="" class="darkicon collect_img">我的收藏</router-link>
                             </div>
                         </li>
                         <li class="r_item fl" data-jump="plan">
                            <router-link to='/plan' class="layui-btn layui-btn-normal manage_plan">管理/发布计划</router-link>
                        </li>
                        
                    </ul>
                </div>
                <div class="cell_box flex">
                    <div class="cell pointer " @click="toItem()" v-for="(item,index) of lists" :key="item.sid">
                         <p class="cell_name">{{item.s_title}}</p>
                         <p class="cell_gain">盈利率&nbsp;&nbsp;<span class="gain_number">{{item.s_number}}</span></p>
                    </div>
                                 
                </div>
                <div class="pages" >
                       <div class="pages_box ">
                          <div class="pages_record fl ">共30条记录</div>
                          <div id="pages" class="fl">               
                          </div>
                      </div>
                </div>
          </div>
    
</template>
<script>
    export default {
    name: 'List',
    data () {
        return {
            lists:[],
        }
    },
    methods : {
        toItem : function () {
            this.$router.push('/item')
        },
        loadData () {
            var that=this;
            this.$ajax.get('/static/lists.json').then(function(res){ 
               that.lists=res.data;
               that.loadPages();

            })
            .catch(function(res){
                console.log (res);
            })
        },
        loadPages () {
            layui.use('laypage', function () {  
                var laypage=layui.laypage;
                laypage.render({
                elem: 'pages',
                count: 10, //数据总数，从服务端得到
                limit:5,
                groups:2,
                first:"首页",
                last:"尾页",
                prev:"上一页",
                next:"下一页",   
                theme:"#1e88e5",
              
                });
            })           
        }
    } ,
    created :function () {
        this.loadData();
              
    }
    }
</script>
<style scoped>
/*container 万位 页面样式*/
#container{
    width:979px;
}
.subtitle{
    width:100%;
    height:44px;
    border-bottom:1px solid #dddddd;
}
.item_sort,.collect{
    text-align: center;
	height: 16px;
	font-size: 16px;
	line-height: 44px;
    color: #666666;
    margin-right:10px;
}
.collect_img{
    position: relative;
    top:-2px;
    margin-right:2px;
}
.collect{
    height:21px;
    margin-right:20px;
}
.manage_plan{
    width: 138px;
	height: 36px;
	background-color: #03a9f4;
    border-radius: 4px;
    font-size:16px;
}
.cell_box{
    width:100%;
    justify-content: space-between ;
    flex-wrap:wrap;
}
.cell{
    width: 176px;
	height: 100px;
	background-color: #eefaff;
	box-shadow: 0px 0px 2px 0px 
		rgba(0, 0, 0, 0.2);
    border: solid 1px #90caf9;
    text-align: center;
    box-sizing: border-box;
    padding:20px 16px;
    margin-top:26px;
    color:#333;
}
.cell:hover,.cell.active{
    background-color: #fff7f7;
    border: solid 1px #ffab91;
    color: #f65726;
}
.cell_name{
        height: 24px;
        font-size: 18px;  
        line-height:24px;      
}
.cell_gain{
	height: 19px;
	font-size: 14px;
    line-height: 40px;
    color:#666;
}
.gain_number{
    width: 60px;
	height: 24px;
	font-size: 18px;
	line-height: 24px;
    color: #43a047;
    font-weight:600;
}
.pages{
    width:100%;
    position: absolute;
    bottom:61px;
}
.pages_box{   
    width:500px;
    margin:5px auto;
}
#pages{
    width:400px;
}
.pages_record{
	height: 45px;
	font-size: 14px;
    line-height: 45px;
    color:#666666;
    margin-right:20px;
}
</style>