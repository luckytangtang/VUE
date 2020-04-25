<template xmlns="http://www.w3.org/1999/html" xmlns:v-drag="http://www.w3.org/1999/xhtml">
  <div id="app1">
    <div v-for="i  in objectList.length">
      <div  v-drag="{index:i-1}" :style="styleObj[i-1]" class="drag">
        <div v-cdrag="{index:i-1}"class="cdrag"></div>
        <div class="index">
          <el-button type="success"  style="height: 20px;width: 20px" @click="handelBlock(i)">
            <div class="order">{{i-1}}</div>
          </el-button>
        </div>
        <div  v-rdrag="{index:i-1}" class="rdrag"></div>
        <div class="mark1">
          <el-button type="warning" icon="el-icon-star-off" size="mini" circle @click="handelMark(i-1)"></el-button>
        </div>
        <div v-fdrag="{index:i-1}" class="fdrag"></div>
        <div v-kdrag="{index:i-1}" class="kdrag"></div>
      </div>
    </div>
    <div class="el-backtop" style="right: 100px; bottom: 150px;">
      <i class="el-icon-circle-plus" @click="handelAddIcon">
      </i>
    </div>
    <div class="readerButton">
      <el-button type="success"round  @click="readerResult">预览效果</el-button>
    </div>
    <div class="successButton">
      <el-button type="success"round  @click="successButton">提交</el-button>
    </div>
  </div>
</template>
<style scoped>
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
    position: absolute;
    top: 0px;
    left: 220px;
    background-color: #99CCFF;
    opacity: 0.5;
  }
  .mark1{
    left: 30%;
    position: relative;
    top: -50px;
    font-weight:bold ;
  }
  .index{
    left: 50%;
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
    width:20px;
    height:20px;
    position: absolute;
    top:0px;
    right:0px;
    background-color: #6666CC;
    opacity: 0.8;
  }
  .cdrag{
    width: 20px;
    height: 20px;
    position:relative;
    top:0px;
    left:0px;
    background-color: #6666CC;
    opacity: 0.8;
  }
  .fdrag{
    width:20px;
    height:20px;
    position: absolute;
    bottom: 0px;
    left:0px;
    background-color: #6666CC;
    opacity: 0.8;
  }
  .kdrag{
    width:20px;
    height:20px;
    position: absolute;
    bottom: 0px;
    right:0px;
    background-color: #6666CC;
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
    name: 'Canvas',
    components: {Header},
    data(){
      return {
        objectList:[],
        styleObj:[{width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'},
          {width:'', height: '', position: 'absolute', top: '', left: '', opacity: 0.5, backgroundColor: '#99CCFF'}],
        url:'',
        len:'',
        screenWidth:'',
        tempWidth:''
      }
    },
    props:{
      num:Number
    },
    methods:{
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
      handelBlock(i){   //处理每一块数据得到的信息
        console.log(i)
        var username=window.sessionStorage.getItem("username")
        var token=window.sessionStorage.getItem("token")
        var pageIndex=this.num+''
        var docId=window.sessionStorage.getItem("docId")
        var url=this.apiUrl+'/pdfPage/getPdfPage'
        var params={docId:docId,username:username,pageIndex:pageIndex}
        axios.post(url,qs.stringify(params),{
          headers:{
            'token':token
          }
        }).then((res)=>{
          console.log(res.data)
          console.log(res.data.data.id)    //这里获得了PageId
          var pageId=res.data.data.id+''
          console.log("你好啊" )
          this.$router.push({path:"/scroll",query:{docId:docId,username:username,pageId:pageId,pageIndex:pageIndex,blockOrder:i}})
        })
      },
      handelMark(i){
        console.log(i)
      this.objectList[i].type=1
      },
      handelAddIcon(){
        this.objectList.push({
          bx:200,by:50,
          rx:400,ry:50, //右上角坐标
          lx:200,ly:250, //左下角坐标
          kx:400,ky:250, //右下角坐标
          flag:false,
          Height:200,   //正方形区域高的初始大小
          Width:200,   //正方形区域宽的初始大小
          point:''})
      },
      readerResult(){    //每一页的全部解析数据
        var docId=window.sessionStorage.getItem("docId")
        console.log(this.num)
        var username=window.sessionStorage.getItem("username")
        var token=window.sessionStorage.getItem("token")
        var pageIndex=this.num+''
        var url=this.apiUrl+'/pdfPage/getPdfPage'
        var params={docId:docId,username:username,pageIndex:pageIndex}
        axios.post(url,qs.stringify(params),{
          headers:{
            'token':token
          }
        }).then((res)=>{
          console.log(res.data)
          console.log(res.data.data.id)    //这里获得了PageId
          var pageId=res.data.data.id+''
          this.$router.push({path:"/scroll",query:{docId:docId,username:username,pageId:pageId,pageIndex:pageIndex}})
        })
      }
    },
    computed:{
    },
    watch:{
      num(oldValue,newValue){    //监测每一页num页数的变化
        console.log(oldValue+ "sss"+newValue)
        var docId=window.sessionStorage.getItem("docId")
        var username=window.sessionStorage.getItem("username")
        let url=this.apiUrl+"/pdfBlocks/getBlocks";
        var token=window.sessionStorage.getItem("token")
        var params={docId:docId,username:username,pageIndex:oldValue,pageSize:18}
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
          for(var i=0;i<datalist.length;i++){
            const object={
              bx:datalist[i].x1,by:datalist[i].y1,
              kx:datalist[i].x2,ky:datalist[i].y2
              ,rx:datalist[i].x2,ry:datalist[i].y1,
              lx:datalist[i].x1,ly:datalist[i].y2,
              flag:false,
              type:datalist[i].type,
              Height:'',Width:'',point:''}
            this.objectList.push(object)
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
      let url=this.apiUrl+"/pdfBlocks/getBlocks";
      var token=window.sessionStorage.getItem("token")
      console.log(this.num)
      var params={docId:docId,username:username,pageIndex:this.num,pageSize:16}
      axios.post(url,qs.stringify(params),{
        headers: {
          'token': token
        }
      }).then((res)=>{
        console.log(res.data.data)
        const datalist=res.data.data;
        window.sessionStorage.setItem("datalist",datalist)
        for(var i=0;i<datalist.length;i++){
          const object={
            bx:datalist[i].x1,by:datalist[i].y1,
            kx:datalist[i].x2,ky:datalist[i].y2
            ,rx:datalist[i].x2,ry:datalist[i].y1,
            lx:datalist[i].x1,ly:datalist[i].y2,
            flag:false,
            type:datalist[i].type,
            Height:'',Width:'',point:''}
          this.objectList.push(object)
        }
        this.len=this.objectList.length;
        console.log(this.objectList.length)
        this.screenWidth=document.body.offsetWidth;
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
          this.tempWidth = (this.screenWidth - 612 - 17) / 2.0
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
