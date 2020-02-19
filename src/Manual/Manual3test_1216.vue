<template xmlns="http://www.w3.org/1999/html" xmlns:v-drag="http://www.w3.org/1999/xhtml">
  <div id="app1">

    <div v-for="i  in len">
      <div v-drag="{index:i-1}" class="drag">
        <div v-cdrag="{index:i-1}"class="cdrag"></div>
        <div  v-rdrag="{index:i-1}" class="rdrag"></div>
        <div v-fdrag="{index:i-1}" class="fdrag"></div>
        <div v-kdrag="{index:i-1}" class="kdrag"></div>
      </div>
    </div>
    <div v-for="(item,index) in objectList">
      {{item.bx+"  "+item.by+" "+item.rx+"  "+item.ry+" "+item.lx+"  "+item.ly+" "+item.kx+"  "+item.ky +"//" +index}}
    </div>
    </div>
</template>
<style scoped>
  .drag{
  width: 100px;
  height: 100px;
  position: absolute;
  top: 0px;
  left: 220px;
  background-color: #99CCFF
  ;
  opacity: 0.5;
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
  export default {
    name: 'Canvas',
    components: {Header},
    data(){
      return {
            objectList:[{
              x:'',y:'',    //鼠标移动坐标
              bx:'',by:'', //左上坐标
              rx:'',ry:'', //右上角坐标
              lx:'',ly:'', //左下角坐标
              kx:'',ky:'', //右下角坐标
              disX:'',disY:'',
              flag:false,
              Height:100,   //正方形区域高的初始大小
              Width:100,   //正方形区域宽的初始大小
              point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
            },
              {
                x:'',y:'',    //鼠标移动坐标
                bx:'',by:'', //左上坐标
                rx:'',ry:'', //右上角坐标
                lx:'',ly:'', //左下角坐标
                kx:'',ky:'', //右下角坐标
                disX:'',disY:'',
                flag:false,
                Height:100,   //正方形区域高的初始大小
                Width:100,   //正方形区域宽的初始大小
                point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
              },
              {
                x:'',y:'',    //鼠标移动坐标
                bx:'',by:'', //左上坐标
                rx:'',ry:'', //右上角坐标
                lx:'',ly:'', //左下角坐标
                kx:'',ky:'', //右下角坐标
                disX:'',disY:'',
                flag:false,
                Height:100,   //正方形区域高的初始大小
                Width:100,   //正方形区域宽的初始大小
                point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
              },
              {
                x:'',y:'',    //鼠标移动坐标
                bx:'',by:'', //左上坐标
                rx:'',ry:'', //右上角坐标
                lx:'',ly:'', //左下角坐标
                kx:'',ky:'', //右下角坐标
                disX:'',disY:'',
                flag:false,
                Height:100,   //正方形区域高的初始大小
                Width:100,   //正方形区域宽的初始大小
                point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
              },
              {
                x:'',y:'',    //鼠标移动坐标
                bx:'',by:'', //左上坐标
                rx:'',ry:'', //右上角坐标
                lx:'',ly:'', //左下角坐标
                kx:'',ky:'', //右下角坐标
                disX:'',disY:'',
                flag:false,
                Height:100,   //正方形区域高的初始大小
                Width:100,   //正方形区域宽的初始大小
                point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
              },{
                x:'',y:'',    //鼠标移动坐标
                bx:'',by:'', //左上坐标
                rx:'',ry:'', //右上角坐标
                lx:'',ly:'', //左下角坐标
                kx:'',ky:'', //右下角坐标
                disX:'',disY:'',
                flag:false,
                Height:100,   //正方形区域高的初始大小
                Width:100,   //正方形区域宽的初始大小
                point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
              },
              {
                x:'',y:'',    //鼠标移动坐标
                bx:'',by:'', //左上坐标
                rx:'',ry:'', //右上角坐标
                lx:'',ly:'', //左下角坐标
                kx:'',ky:'', //右下角坐标
                disX:'',disY:'',
                flag:false,
                Height:100,   //正方形区域高的初始大小
                Width:100,   //正方形区域宽的初始大小
                point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
              },
              {
                x:'',y:'',    //鼠标移动坐标
                bx:'',by:'', //左上坐标
                rx:'',ry:'', //右上角坐标
                lx:'',ly:'', //左下角坐标
                kx:'',ky:'', //右下角坐标
                disX:'',disY:'',
                flag:false,
                Height:100,   //正方形区域高的初始大小
                Width:100,   //正方形区域宽的初始大小
                point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
              }],
           url:'',
           len:'',
      }
    },
    methods:{
    },
    beforeMount(){
      this.len=this.objectList.length;
    },
    directives:{
      cdrag(el,binding,vnode){
        console.log(binding.value.index+'88888888888')
        var i=binding.value.index
//el为拖动的元素
        var oDiv =el;
        oDiv.onmousedown = function(e){
          e.preventDefault();
          console.log("cdrag")
          e.stopPropagation();
            vnode.context.objectList[i].flag=true;
            vnode.context.objectList[i].point=1;
        };
      },
      rdrag(el,binding,vnode){
        var i=binding.value.index
        el.onmousedown=function (e) {
          e.preventDefault();
          console.log("右上角");
          e.stopPropagation();
          vnode.context.objectList[i].flag=true;
          vnode.context.objectList[i].point=2;
        }
      },
      fdrag(el,binding,vnode){
        var i=binding.value.index
        el.onmousedown=function (e) {
          e.preventDefault()
          console.log("左下角")
          e.stopPropagation();
          vnode.context.objectList[i].flag=true;
          vnode.context.objectList[i].point=3;
        }
      },
      kdrag(el,binding,vnode){
        var i=binding.value.index
        el.onmousedown=function (e) {
          e.preventDefault();
          console.log("右下角")
          e.stopPropagation()
          vnode.context.objectList[i].flag=true;
          vnode.context.objectList[i].point=4;
        }

      },
      drag(el,binding,vnode){
        console.log(binding)
        console.log(binding.value.index)
        console.log(vnode.context.objectList[0].flag)
        var index=binding.value.index
        if(!vnode.context.objectList[index].flag) {
          el.onmousedown = function (e) {
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            console.log(45883948394)
            document.onmousemove = function (e) {
              console.log("移动")
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
              console.log(vnode.context.objectList[index].bx+" "+vnode.context.objectList[index].by+" "+vnode.context.objectList[index].rx+" "+vnode.context.objectList[index].ry+" "+
                vnode.context.objectList[index].lx+" "+vnode.context.objectList[index].ly+" "+vnode.context.objectList[index].kx+" "+vnode.context.objectList[index].ky)
              vnode.context.objectList[index].point=0;
              console.log(vnode.context.objectList[index].Height+"height"+vnode.context.objectList[index].Width)
            }
            document.onmouseup = function () {
              document.onmousemove = document.onmouseup = null;
            }
          }
        }else if(vnode.context.objectList[index].flag && vnode.context.objectList[index].point==1){
          document.onmousemove = function (e) {
            var x=e.pageX
          var y=e.pageY
          vnode.context.objectList[index].x=x;
          vnode.context.objectList[index].y=y;
          console.log("左上角拖拽放大")
          console.log(x+"and"+y)
          el.style.left = x+ 'px';
          el.style.top = y + 'px';
          var w=vnode.context.objectList[index].bx-x;
          console.log(w)
          var h=vnode.context.objectList[index].by-y;
          vnode.context.objectList[index].Height=vnode.context.objectList[index].Height+h;
          vnode.context.objectList[index].Width=vnode.context.objectList[index].Width+w;
          el.style.width = vnode.context.objectList[index].Width+'px';
          el.style.height = vnode.context.objectList[index].Height+'px';
          vnode.context.objectList[index].bx=x;
          vnode.context.objectList[index].by=y;
          vnode.context.objectList[index].ry=y;
          vnode.context.objectList[index].lx=x;
          console.log(el.style.width+"kkdkd"+el.style.height)
          vnode.context.objectList[index].flag=false;
          vnode.context.objectList[index].point=0;
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        }
        }
        else if(vnode.context.objectList[index].flag && vnode.context.objectList[index].point==2){
          document.onmousemove=function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.objectList[index].x=x;
            vnode.context.objectList[index].y=y;
            console.log("右上角拖拽放大"+vnode.context.objectList[index].Width)
            console.log(x+"and"+y)
            el.style.top = y + 'px';
            var w=x-vnode.context.objectList[index].rx;
            console.log(w)
            var h=vnode.context.objectList[index].ry-y;
            console.log(h+"ssssssss")
            vnode.context.objectList[index].Height=vnode.context.objectList[index].Height+h;
            vnode.context.objectList[index].Width=vnode.context.objectList[index].Width+w;
            el.style.width = vnode.context.objectList[index].Width+'px';
            el.style.height = vnode.context.objectList[index].Height+'px';
            vnode.context.objectList[index].rx=x;
            vnode.context.objectList[index].ry=y;
            vnode.context.objectList[index].by=y;
            vnode.context.objectList[index].kx=x;
            console.log(vnode.context.objectList[index].Width+"长宽"+vnode.context.objectList[index].Height)
            console.log(el.style.width+"右上角"+el.style.height)
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
            console.log("左下角拖拽缩放")
            console.log(x+"and"+y)
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
            console.log(vnode.context.objectList[index].Width+"长宽"+vnode.context.objectList[index].Height)
            console.log(el.style.width+"左下角"+el.style.height)
            vnode.context.objectList[index].flag=false;
            vnode.context.objectList[index].point=0
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
          }

        }else{
          document.onmousemove=function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.objectList[index].x=x;
            vnode.context.objectList[index].y=y;
            console.log("右下角拖拽缩放")
            console.log(x+"and"+y)
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
