<template xmlns="http://www.w3.org/1999/html" xmlns:v-drag="http://www.w3.org/1999/xhtml">
  <div id="app1">
    <div v-for="i  in objectList.length">
      <div  v-drag="{index:i-1}" :style="styleObj[i-1]" class="drag">
        <div v-cdrag="{index:i-1}"class="cdrag"></div>
        <div class="index">
          <el-button  v-if="isRouterAlive"  icon="el-icon-star-off" size="mini"  circle  :type="button[i-1]" @click="handelMark(i-1)" >
          </el-button>
          <el-button type="danger"   icon="el-icon-delete"  size="mini" circle  @click="deleteBlock(i-1)">
          </el-button>
        </div>
        <div  v-rdrag="{index:i-1}" class="rdrag"></div>
        <div v-fdrag="{index:i-1}" class="fdrag"></div>
        <div v-kdrag="{index:i-1}" class="kdrag"></div>
      </div>
    </div>
    <div class="primaryButton">
      <el-button type="primary"icon="el-icon-star-off"  size="mini" circle  ></el-button>
       <span style=" color: black; font-size: 12px;   line-height: 8px;">  Text</span>
    </div>
    <div class="wariningButton">
      <el-button type="warning"icon="el-icon-star-off"  size="mini" circle  ></el-button>
      <span style=" color: black; font-size: 12px;   line-height: 8px;">  Picture</span>
    </div>
    <div class="succButton">
      <el-button type="success"icon="el-icon-star-off"  size="mini" circle  ></el-button>
      <span style=" color: black; font-size: 12px;   line-height: 8px;">  Table</span>
    </div>

    <div class="el-backtop" style="right: 100px; bottom: 150px;">
      <i class="el-icon-circle-plus" @click="handelAddIcon">
      </i>
    </div>
    <div class="successButton">
      <el-button type="success"round  @click="successButton">提交</el-button>
    </div>
  </div>
</template>
<style scoped>
  .el-button--primary{
    color: #fff;
    background-color: #FF69B4;
    border-color: #FF69B4;
  }
  .el-button--primary:hover{
    background-color: #FF69B4;
    border-color: #FF69B4;
  }
  .el-button--primary:focus{
    background-color: #FF69B4;
    border-color: #FF69B4;
  }
  .primaryButton{
    position: fixed;
    top:50px;
    left: 85%
  }
  .wariningButton{
    position: fixed;
    top:100px;
    left: 85%
  }
  .succButton{
    position: fixed;
    top:150px;
    left: 85%
  }
  .successButton{
    position: fixed;
    top:92%;
    right: 10%;
  }
  .readerButton{
    position: fixed;
    top:4%;
    right: 10%;
  }
  .drag{
    width: 100px;
    height: 100px;
    position: relative;
    top: 0px;
    left: 220px;
    border:1.5px solid red;

  }
  .mark1{
    left: 30%;
    position: relative;
    top: -50px;
    font-weight:bold ;
  }
  .index{
    left: 30%;
    position: relative;
    top: -20px;
    opacity: 1;
    font-weight:bold ;
  }
  .order{
    left: 50%;
    position: relative;
    align-content: center;

  }
  .openReader{
    left: 50%;
    position: relative;
    top: -30px;
  }
  .rdrag{
    width:10px;
    height:10px;
    position: absolute;
    top:0px;
    right:0px;
    background-color: darkorchid;
    opacity: 0.8;
  }
  .cdrag{
    width: 10px;
    height: 10px;
    position:relative;
    top:0px;
    left:0px;
    background-color: darkorchid;
    opacity: 0.8;
  }
  .fdrag{
    width:10px;
    height:10px;
    position: absolute;
    bottom: 0px;
    left:0px;
    background-color:darkorchid;
    opacity: 0.8;
  }
  .kdrag{
    width:10px;
    height:10px;
    position: absolute;
    bottom: 0px;
    right:0px;
    background-color: darkorchid;
    opacity: 0.8;
  }
  . divobj{
    position: relative;     /*定位*/
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    background: #666;       /*设置一下背景*/
  }
  .demo-table-expand label {
    width: 100%;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
  @media only screen and (max-width: 878px) {
    .delete {
      float: left;
    }
    #pdf-content{
      width: 200px;
      height: 200px;
      position: fixed;
      top: 0;
      left: 20%;
      background: #99a9bf;
    }

  }
</style>
<script>
  import Header from '@/components/Header'
  import axios from 'axios';
  import qs from  'Qs';
  export default {
    inject:['reload'],
    name: 'ManualPoint',
    components: {Header},
    provide(){
      return{
        reload:this.reload
      }
    },
    data(){
      return {
        objectList:[],
        styleObj:[],
        url:'',
        button:[],
        count:[],
        btn:"primary",
        len:'',
        screenWidth:'',
        tempWidth:'',
        isRouterAlive:true
      }
    },
    props:{
      num:Number
    },
    methods:{
      reload(){
        this.isRouterAlive=false;
        this.$nextTick(function(){
          this.isRouterAlive=true;
        })
      },
      deleteBlock(i){
        console.log(i)
        console.log(this.styleObj)
        this.styleObj.splice(i,1)
        this.objectList.splice(i,1)
        this.button.splice(i,1)
        console.log(this.objectList)

      },
      successButton(){
        alert("确定提交吗")
        //要先确定屏幕大小
        var paramList=[];
        this.len=this.objectList.length;
        console.log(this.screenWidth)
        if(this.screenWidth<612){
          for (let i = 0; i < this.len; i++) {
            const object={
              x1:this.objectList[i].bx ,
              y1:this.objectList[i].by,
              x2:this.objectList[i].kx,
              y2:this.objectList[i].ky,
              type:this.objectList[i].type
            }
            paramList.push(object)
          }
        }
        else{
          console.log(this.tempWidth)
          for (let i = 0; i < this.len; i++) {
            const object={
              x1:this.objectList[i].bx - this.tempWidth,
              y1:this.objectList[i].by,
              x2:this.objectList[i].kx- this.tempWidth,
              y2:this.objectList[i].ky,
              type:this.objectList[i].type
            }
            paramList.push(object)
          }
        }
        console.log(paramList)
        var token=window.sessionStorage.getItem("token")
        var userId=window.sessionStorage.getItem("userId")
        var docId=window.sessionStorage.getItem("docId")
        console.log(userId+"sss"+docId)
        var params={point:paramList,pageIndex:this.num,userId:userId,docId:docId}
        let url=this.apiUrl+"/points/savePointJSonFile"
        axios.post(url,JSON.stringify(params),{
          headers:{
            'token':token
          }
        }).then((res)=>{
          console.log(res);
        }).catch((error)=>{
            console.log(error)
        }
        )
      },
      handelMark(i){
        this.count[i]++;
        if(this.count[i]%3===1)
          this.button[i]="warning"
        else if(this.count[i]%3==2)
          this.button[i]="success"
        else
          this.button[i]="primary"
        console.log(i)
        console.log(this.button)
       this.objectList[i].type=this.count[i]%3;
        this.reload();
      },
      ChangeColor(i){
        console.log(this.button[i])
        return this.button[i];
      },
      handelAddIcon(){
        console.log(123)
        this.objectList.push({
          bx:200,by:50,
          rx:300,ry:50, //右上角坐标
          lx:200,ly:150, //左下角坐标
          kx:300,ky:150, //右下角坐标
          type:0,
          flag:false,
          Height:100,   //正方形区域高的初始大小
          Width:100,   //正方形区域宽的初始大小
          point:''})
        const style= {width:'', height: '', position: 'absolute', top: '', left: '', border:'1.5px solid #6666CC'}
        this.styleObj.push(style)
        console.log(this.styleObj)
        this.button.push("primary")
        this.count.push(0)
      },
    },
    computed:{
    },
    watch:{
    /*  button(oldValue,newValue){
        console.log(oldValue+newValue)
      },*/
      num(oldValue,newValue){    //监测每一页num页数的变化
        console.log(oldValue+ "sss"+newValue)
        var docId=window.sessionStorage.getItem("docId")
        var username=window.sessionStorage.getItem("username")
        var userId=window.sessionStorage.getItem("userId")
        let url=this.apiUrl+"/pdfBlocks/getJsonBlocks";
        var token=window.sessionStorage.getItem("token")
        var params={docId:docId,username:username,pageIndex:oldValue,userId:userId}
        axios.post(url,qs.stringify(params),{
          headers: {
            'token': token
          }
        }).then((res)=>{
          console.log(res.data.data)
          console.log(9999999)
          const datalist=res.data.data;
          window.sessionStorage.setItem("datalist",datalist)
          this.objectList.splice(0,this.objectList.length) //删除和替换的功能都有，表示删除上一页的所有数据
          this.styleObj.splice(0,this.styleObj.length)
          for(var i=0;i<datalist.length;i++){
            if(datalist[i].type==0){
              this.button[i]="primary"
              this.count[i]=0
            }
            else if(datalist[i].type==1){
              this.button[i]="warning"
              this.count[i]=1
            }
            else{
              this.button[i]="success"
              this.count[i]=2
            }
            const object={
              bx:datalist[i].x1,by:datalist[i].y1,
              kx:datalist[i].x2,ky:datalist[i].y2
              ,rx:datalist[i].x2,ry:datalist[i].y1,
              lx:datalist[i].x1,ly:datalist[i].y2,
              flag:false,
              type:datalist[i].type,
              Height:'',Width:'',point:''}
            this.objectList.push(object)
           const style= {width:'', height: '', position: 'absolute', top: '', left: '', border:'1.5px solid #6666CC'}
            this.styleObj.push(style)
          }
          this.len=this.objectList.length;
          console.log(this.objectList.length)
          this.screenWidth=document.body.offsetWidth;
          console.log(this.screenWidth)
          if(this.screenWidth<612){   //解析是以612为宽度进行解析的
            var ratio=(this.screenWidth-17)/612.0;
            console.log(ratio)
            for(let i=0; i<this.len; i++){
              this.objectList[i].Height=this.objectList[i].ky-this.objectList[i].by
              this.objectList[i].Width=(this.objectList[i].kx-this.objectList[i].bx)
              this.objectList[i].bx=this.objectList[i].bx
              this.objectList[i].rx=this.objectList[i].rx
              this.objectList[i].lx=this.objectList[i].lx
              this.objectList[i].kx=this.objectList[i].kx
              this.styleObj[i].width=this.objectList[i].rx-this.objectList[i].bx +'px'
              this.styleObj[i].height=this.objectList[i].ly-this.objectList[i].by+'px'
              this.styleObj[i].left=this.objectList[i].bx+'px'
              this.styleObj[i].top=this.objectList[i].by+'px'
            }
          }
          else {
            this.tempWidth = (this.screenWidth - 612) / 2.0   //屏幕宽度比612长的一个差距
            console.log(this.tempWidth)
            for (let i = 0; i < this.len; i++) {
              this.objectList[i].Height = this.objectList[i].ky - this.objectList[i].by
              this.objectList[i].Width = this.objectList[i].kx - this.objectList[i].bx
              this.objectList[i].bx = this.objectList[i].bx + this.tempWidth
              this.objectList[i].rx = this.objectList[i].rx + this.tempWidth
              this.objectList[i].lx = this.objectList[i].lx + this.tempWidth
              this.objectList[i].kx = this.objectList[i].kx + this.tempWidth
              this.styleObj[i].width = this.objectList[i].rx - this.objectList[i].bx + 'px'
              this.styleObj[i].height = this.objectList[i].ly - this.objectList[i].by + 'px'
              this.styleObj[i].left = this.objectList[i].bx + 'px'
              this.styleObj[i].top = this.objectList[i].by + 'px'
            }
            console.log(this.objectList)
          }
        }).catch(
          (error)=>{
            console.log(error)
          }
        )
      }
    },
    beforeMount(){
      var docId=window.sessionStorage.getItem("docId")
      var username=window.sessionStorage.getItem("username")
      let url=this.apiUrl+"/pdfBlocks/getJsonBlocks";
      var token=window.sessionStorage.getItem("token")
      var userId=window.sessionStorage.getItem("userId")
      var params={docId:docId,username:username,pageIndex:this.num,userId:userId}
      axios.post(url,qs.stringify(params),{
        headers: {
          'token': token
        }
      }).then((res)=>{
        console.log(res.data.data)
        const datalist=res.data.data;
        window.sessionStorage.setItem("datalist",datalist)
        for(var i=0;i<datalist.length;i++){
          if(datalist[i].type==0){
            this.button[i]="primary"  //button用来算是哪种颜色
            this.count[i]=0       //用来循环
          }
          else if(datalist[i].type==1){
            this.button[i]="warning"
            this.count[i]=1
          }
          else{
            this.button[i]="success"
            this.count[i]=2
          }
          const object={
            bx:datalist[i].x1,by:datalist[i].y1,
            kx:datalist[i].x2,ky:datalist[i].y2
            ,rx:datalist[i].x2,ry:datalist[i].y1,
            lx:datalist[i].x1,ly:datalist[i].y2,
            flag:false,
            type:datalist[i].type,
            Height:'',Width:'',point:''}
          this.objectList.push(object)
          const style= {width:'', height: '', position: 'absolute', top: '', left: '', border:'1.5px solid #6666CC'}
          this.styleObj.push(style)
        }
        this.len=this.objectList.length;
        console.log(this.objectList.length)
        this.screenWidth=document.body.offsetWidth;
        this.screenHeight=window.innerHeight;
        console.log(this.screenWidth)
        if(this.screenWidth<629){
          var ratio=(this.screenWidth-17)/612.0;
          console.log(ratio)
          for(let i=0; i<this.len; i++){
            this.objectList[i].Height=this.objectList[i].ky-this.objectList[i].by
            this.objectList[i].Width=(this.objectList[i].kx-this.objectList[i].bx)
            this.objectList[i].bx=this.objectList[i].bx
            this.objectList[i].rx=this.objectList[i].rx
            this.objectList[i].lx=this.objectList[i].lx
            this.objectList[i].kx=this.objectList[i].kx
            this.styleObj[i].width=this.objectList[i].rx-this.objectList[i].bx +'px'
            this.styleObj[i].height=this.objectList[i].ly-this.objectList[i].by+'px'
            this.styleObj[i].left=this.objectList[i].bx+'px'
            this.styleObj[i].top=this.objectList[i].by+'px'
          }
        }
        else {
          if(this.screenHeight<792){
            this.tempWidth = (this.screenWidth - 612 - 17) / 2.0
            console.log(this.tempWidth)
          }
          else{
            this.tempWidth = (this.screenWidth - 612) / 2.0
            console.log(this.tempWidth)
          }
          for (let i = 0; i < this.len; i++) {
            this.objectList[i].Height = this.objectList[i].ky - this.objectList[i].by
            this.objectList[i].Width = this.objectList[i].kx - this.objectList[i].bx
            this.objectList[i].bx = this.objectList[i].bx + this.tempWidth
            this.objectList[i].rx = this.objectList[i].rx + this.tempWidth
            this.objectList[i].lx = this.objectList[i].lx + this.tempWidth
            this.objectList[i].kx = this.objectList[i].kx + this.tempWidth
            this.styleObj[i].width = this.objectList[i].rx - this.objectList[i].bx + 'px'
            this.styleObj[i].height = this.objectList[i].ly - this.objectList[i].by + 'px'
            this.styleObj[i].left = this.objectList[i].bx + 'px'
            this.styleObj[i].top = this.objectList[i].by + 'px'
          }
        }
        console.log(this.objectList)
      }).catch(
        (error)=>{
          console.log(error)
        }
      )

    },
    directives:{
      cdrag(el,binding,vnode){    //左上角的点
        var i=binding.value.index
//el为拖动的元素
        var oDiv =el;
        oDiv.onmousedown = function(e){
          e.preventDefault();
          e.stopPropagation();
          vnode.context.objectList[i].flag=true;
          vnode.context.objectList[i].point=1;
        };
      },
      rdrag(el,binding,vnode){   //右上角的点
        var i=binding.value.index
        el.onmousedown=function (e) {
          e.preventDefault();
          e.stopPropagation();
          vnode.context.objectList[i].flag=true;
          vnode.context.objectList[i].point=2;
        }
      },
      fdrag(el,binding,vnode){    //左下角的点
        var i=binding.value.index
        el.onmousedown=function (e) {
          e.preventDefault()
          e.stopPropagation();
          vnode.context.objectList[i].flag=true;  //用来判断拖动状态
          vnode.context.objectList[i].point=3;
        }
      },
      kdrag(el,binding,vnode){    //右下角的点
        var i=binding.value.index
        el.onmousedown=function (e) {
          e.preventDefault();
          e.stopPropagation()
          vnode.context.objectList[i].flag=true;
          vnode.context.objectList[i].point=4;
        }

      },
      drag(el,binding,vnode){
        var index=binding.value.index
        if(!vnode.context.objectList[index].flag) {  //表示拖动
          el.onmousedown = function (e) {
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            document.onmousemove = function (e) {
              el.style.left = e.pageX - disx + 'px';
              el.style.top = e.pageY - disy + 'px';
              vnode.context.objectList[index].bx = e.pageX - disx;
              vnode.context.objectList[index].by = e.pageY - disy;
              vnode.context.objectList[index].rx = vnode.context.objectList[index].bx+vnode.context.objectList[index].Width;
              vnode.context.objectList[index].ry=vnode.context.objectList[index].by;
              vnode.context.objectList[index].lx=vnode.context.objectList[index].bx;
              vnode.context.objectList[index].ly=vnode.context.objectList[index].by+vnode.context.objectList[index].Height;
              vnode.context.objectList[index].kx=vnode.context.objectList[index].bx+vnode.context.objectList[index].Width;
              vnode.context.objectList[index].ky=vnode.context.objectList[index].by+vnode.context.objectList[index].Height;
              vnode.context.styleObj[index].width=vnode.context.objectList[index].rx-vnode.context.objectList[index].bx +'px'
              vnode.context.styleObj[index].height=vnode.context.objectList[index].ly-vnode.context.objectList[index].by+'px'
              console.log(vnode.context.styleObj[index].width)
              vnode.context.styleObj[index].left=vnode.context.objectList[index].bx+'px'
              vnode.context.styleObj[index].top=vnode.context.objectList[index].by+'px'
              console.log(vnode.context.objectList[index].bx+"bbb"+vnode.context.objectList[index].by+"   "+vnode.context.objectList[index].rx+"rrr "+vnode.context.objectList[index].ry+"   "+
                vnode.context.objectList[index].lx+"llll "+vnode.context.objectList[index].ly+"    "+vnode.context.objectList[index].kx+"kkkk "+vnode.context.objectList[index].ky)
              vnode.context.objectList[index].point=0;
              //    console.log(vnode.context.objectList[index].Height+"height"+vnode.context.objectList[index].Width)
            }
            document.onmouseup = function () {
              document.onmousemove = document.onmouseup = null;
            }
          }
        }else if(vnode.context.objectList[index].flag && vnode.context.objectList[index].point==1){  //点击的是左上角
          document.onmousemove = function (e) {
            console.log("第一步执行")
            var x=e.pageX
            var y=e.pageY
            vnode.context.objectList[index].x=x;
            vnode.context.objectList[index].y=y;
            el.style.left = x+ 'px';
            el.style.top = y + 'px';
            var w=vnode.context.objectList[index].bx-x;
            var h=vnode.context.objectList[index].by-y;
            vnode.context.objectList[index].Height=vnode.context.objectList[index].Height+h;
            vnode.context.objectList[index].Width=vnode.context.objectList[index].Width+w;
            el.style.width = vnode.context.objectList[index].Width+'px';
            el.style.height = vnode.context.objectList[index].Height+'px';
            vnode.context.objectList[index].bx=x;
            vnode.context.objectList[index].by=y;
            vnode.context.objectList[index].ry=y;
            vnode.context.objectList[index].lx=x;
            vnode.context.objectList[index].flag=false;
            vnode.context.styleObj[index].width=vnode.context.objectList[index].rx-vnode.context.objectList[index].bx +'px'
            vnode.context.styleObj[index].height=vnode.context.objectList[index].ly-vnode.context.objectList[index].by+'px'
            vnode.context.styleObj[index].left=vnode.context.objectList[index].bx+'px'
            vnode.context.styleObj[index].top=vnode.context.objectList[index].by+'px'
            vnode.context.objectList[index].point=0;
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
          }
        }
        else if(vnode.context.objectList[index].flag && vnode.context.objectList[index].point==2){  //点击的是右上角
          document.onmousemove=function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.objectList[index].x=x;
            vnode.context.objectList[index].y=y;
            el.style.top = y + 'px';
            var w=x-vnode.context.objectList[index].rx;
            var h=vnode.context.objectList[index].ry-y;
            vnode.context.objectList[index].Height=vnode.context.objectList[index].Height+h;
            vnode.context.objectList[index].Width=vnode.context.objectList[index].Width+w;
            el.style.width = vnode.context.objectList[index].Width+'px';
            el.style.height = vnode.context.objectList[index].Height+'px';
            vnode.context.objectList[index].rx=x;
            vnode.context.objectList[index].ry=y;
            vnode.context.objectList[index].by=y;
            vnode.context.objectList[index].kx=x;
            /*  console.log(vnode.context.objectList[index].Width+"长宽"+vnode.context.objectList[index].Height)
              console.log(el.style.width+"右上角"+el.style.height)*/
            vnode.context.styleObj[index].width=vnode.context.objectList[index].rx-vnode.context.objectList[index].bx +'px'
            vnode.context.styleObj[index].height=vnode.context.objectList[index].ly-vnode.context.objectList[index].by+'px'
            vnode.context.styleObj[index].left=vnode.context.objectList[index].bx+'px'
            vnode.context.styleObj[index].top=vnode.context.objectList[index].by+'px'
            vnode.context.objectList[index].flag=false;
            vnode.context.objectList[index].point=0
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
          }
        }else if(vnode.context.objectList[index].flag && vnode.context.objectList[index].point==3){    //左下角这个点
          document.onmousemove=function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.objectList[index].x=x;
            vnode.context.objectList[index].y=y;
            /* if(x<220){
               x=220
             }*/
            el.style.left = x+ 'px';
            var w=vnode.context.objectList[index].lx-x;
            console.log(w)
            var h=y-vnode.context.objectList[index].ly;
            vnode.context.objectList[index].Height=vnode.context.objectList[index].Height+h;
            vnode.context.objectList[index].Width=vnode.context.objectList[index].Width+w;
            el.style.width = vnode.context.objectList[index].Width+'px';
            el.style.height = vnode.context.objectList[index].Height+'px';
            vnode.context.objectList[index].lx=x;
            vnode.context.objectList[index].ly=y;
            vnode.context.objectList[index].ky=y;
            vnode.context.objectList[index].bx=x;
            /*console.log(vnode.context.objectList[index].Width+"长宽"+vnode.context.objectList[index].Height)
            console.log(el.style.width+"左下角"+el.style.height)*/
            vnode.context.styleObj[index].width=vnode.context.objectList[index].rx-vnode.context.objectList[index].bx +'px'
            vnode.context.styleObj[index].height=vnode.context.objectList[index].ly-vnode.context.objectList[index].by+'px'
            vnode.context.styleObj[index].left=vnode.context.objectList[index].bx+'px'
            vnode.context.styleObj[index].top=vnode.context.objectList[index].by+'px'
            vnode.context.objectList[index].flag=false;
            vnode.context.objectList[index].point=0
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
          }

        }else{     //右下角这个点
          document.onmousemove=function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.objectList[index].x=x;
            vnode.context.objectList[index].y=y;
            var w=x-vnode.context.objectList[index].kx;
            console.log(w)
            var h=y-vnode.context.objectList[index].ky;
            vnode.context.objectList[index].Height=vnode.context.objectList[index].Height+h;
            vnode.context.objectList[index].Width=vnode.context.objectList[index].Width+w;
            el.style.width = vnode.context.objectList[index].Width+'px';
            el.style.height = vnode.context.objectList[index].Height+'px';
            vnode.context.objectList[index].kx=x;
            vnode.context.objectList[index].ky=y;
            vnode.context.objectList[index].ly=y;
            vnode.context.objectList[index].rx=x;
            console.log(vnode.context.objectList[index].Width+"长宽"+vnode.context.objectList[index].Height)
            console.log(el.style.width+"右上角"+el.style.height)
            vnode.context.styleObj[index].width=vnode.context.objectList[index].rx-vnode.context.objectList[index].bx +'px'
            vnode.context.styleObj[index].height=vnode.context.objectList[index].ly-vnode.context.objectList[index].by+'px'
            vnode.context.styleObj[index].left=vnode.context.objectList[index].bx+'px'
            vnode.context.styleObj[index].top=vnode.context.objectList[index].by+'px'
            vnode.context.objectList[index].flag=false;
            vnode.context.objectList[index].point=0
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
          }
        }

      }
    },
    mounted () {
      this.url=`../static/pdf/web/viewer.html?file=/static/FifthLanuage.pdf`;
    }

  }
</script>
