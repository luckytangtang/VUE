<template xmlns="http://www.w3.org/1999/html">
  <div id="box">
    <ol>
      鼠标：{{x}}&nbsp{{y}}
    </ol>
    <ol>
      大：{{bx}}&nbsp{{by}}
    </ol>
    <ol>
      小：{{sx}}&nbsp{{sy}}
    </ol>
    <div id="app1">
      <div v-drag class="drag">
        <div v-cdrag class="cdrag"></div>
        <div  v-rdrag class="rdrag"></div>
        <div v-fdrag class="fdrag"></div>
        <div v-kdrag class="kdrag"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .drag{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: red;
  }
  .rdrag{
    width:20px;
    height:20px;
    position: absolute;
    top:0px;
    right:0px;
    background-color: green;
  }
  .cdrag{
    width: 20px;
    height: 20px;
    position:relative;
    top:0px;
    left:0px;
    background-color: green;
  }
  .fdrag{
    width:20px;
    height:20px;
    position: absolute;
    bottom: 0px;
    left:0px;
    background-color: green;
  }
  .kdrag{
    width:20px;
    height:20px;
    position: absolute;
    bottom: 0px;
    right:0px;
    background-color: green;
  }
  . divobj{
    position: relative;     /*定位*/
    top: 10px;
    left: 10px;
    width: 200px;
    height: 200px;
    background: #666;       /*设置一下背景*/
  }

  .el-table_expanded-cell {
    padding: 5px;
  }

  .info {
    width: 100%;
  }

  .el-input {
    width: 300px;
    float: right;
    right: 20px;
  }

  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 100%;
    color: #99a9bf;
  }

  .el-form-item {
    width: 100%;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }

  /*媒体查询*/
  /*屏幕宽度小于878px的时候执行里面的css*/

  @media only screen and (max-width: 878px) {
    .delete {
      float: left;
    }
    .pdfobject-container { height: 30rem; border: 1rem solid rgba(0,0,0,.1); }
    .search {
      width: 60%;
      float: right;
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
  import pdf from 'pdfobject'
  export default {
    name: 'Manual',
    components: {Header},
    data(){
      var cars = new Array();
      cars[0] = [50,50,100,100];
      cars[1] = [50,50,100,100];
      cars[2] = [50,50,100,100];
      cars[3] = [50,50,100,100];
      return {
        url:'',
        val:123,
        x:'',y:'',
        bx:'',by:'', //左上坐标
        rx:'',ry:'', //右上角坐标
        lx:'',ly:'', //左下角坐标
        kx:'',ky:'', //右下角坐标
        sx:'',sy:'',
        disX:'',disY:'',
        flag:false,
        Height:100,   //正方形区域高的初始大小
        Width:100,   //正方形区域宽的初始大小
        point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
      }
    },
    methods:{
    },

    directives:{
      cdrag(el,binding,vnode){
//el为拖动的元素
        var oDiv =el;
        oDiv.onmousedown = function(e){
          e.preventDefault();
          console.log("cdrag")
          e.stopPropagation();
            vnode.context.flag=true;
            vnode.context.point=1;
        };
      },
      rdrag(el,binding,vnode){
        el.onmousedown=function (e) {
          e.preventDefault();
          console.log("右上角");
          e.stopPropagation();
          vnode.context.flag=true;
          vnode.context.point=2;
        }
      },
      fdrag(el,binding,vnode){
        el.onmousedown=function (e) {
          e.preventDefault()
          console.log("左下角")
          e.stopPropagation();
          vnode.context.flag=true;
          vnode.context.point=3;
        }
      },
      kdrag(el,binding,vnode){
        el.onmousedown=function (e) {
          e.preventDefault();
          console.log("右下角")
          e.stopPropagation()
          vnode.context.flag=true;
          vnode.context.point=4;
        }

      },
      drag(el,binding,vnode){
        if(!vnode.context.flag) {
          el.onmousedown = function (e) {
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            console.log(45883948394)
            document.onmousemove = function (e) {
              console.log("移动")
              el.style.left = e.pageX - disx + 'px';
              el.style.top = e.pageY - disy + 'px';
              vnode.context.bx = e.pageX - disx;
              vnode.context.by = e.pageY - disy;
              vnode.context.rx = vnode.context.bx+vnode.context.Width;
              vnode.context.ry=vnode.context.by;
              vnode.context.lx=vnode.context.bx;
              vnode.context.ly=vnode.context.by+vnode.context.Height;
              vnode.context.kx=vnode.context.bx+vnode.context.Width;
              vnode.context.ky=vnode.context.by+vnode.context.Height;
              console.log(vnode.context.bx+" "+vnode.context.by+" "+vnode.context.rx+" "+vnode.context.ry+" "+
                vnode.context.lx+" "+vnode.context.ly+" "+vnode.context.kx+" "+vnode.context.ky)
              vnode.context.point=0;
              console.log(vnode.context.Height+"height"+vnode.context.Width)
            }
            document.onmouseup = function () {
              document.onmousemove = document.onmouseup = null;
            }
          }
        }else if(vnode.context.flag && vnode.context.point==1){
          document.onmousemove = function (e) {
            var x=e.pageX
          var y=e.pageY
          vnode.context.x=x;
          vnode.context.y=y;
          console.log("左上角拖拽放大")
          console.log(x+"and"+y)
          el.style.left = x+ 'px';
          el.style.top = y + 'px';
          var w=vnode.context.bx-x;
          console.log(w)
          var h=vnode.context.by-y;
          vnode.context.Height=vnode.context.Height+h;
          vnode.context.Width=vnode.context.Width+w;
          el.style.width = vnode.context.Width+'px';
          el.style.height = vnode.context.Height+'px';
          vnode.context.bx=x;
          vnode.context.by=y;
          vnode.context.ry=y;
          vnode.context.lx=x;
          console.log(el.style.width+"kkdkd"+el.style.height)
          vnode.context.flag=false;
          vnode.context.point=0;
        }
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        }
        }
        else if(vnode.context.flag && vnode.context.point==2){
          document.onmousemove=function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.x=x;
            vnode.context.y=y;
            console.log("右上角拖拽放大"+vnode.context.Width)
            console.log(x+"and"+y)
            el.style.top = y + 'px';
            var w=x-vnode.context.rx;
            console.log(w)
            var h=vnode.context.ry-y;
            console.log(h+"ssssssss")
            vnode.context.Height=vnode.context.Height+h;
            vnode.context.Width=vnode.context.Width+w;
            el.style.width = vnode.context.Width+'px';
            el.style.height = vnode.context.Height+'px';
            vnode.context.rx=x;
            vnode.context.ry=y;
            vnode.context.by=y;
            vnode.context.kx=x;
            console.log(vnode.context.Width+"长宽"+vnode.context.Height)
            console.log(el.style.width+"右上角"+el.style.height)
            vnode.context.flag=false;
            vnode.context.point=0
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
          }
        }else if(vnode.context.flag && vnode.context.point==3){    //左下角这个点
          document.onmousemove=function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.x=x;
            vnode.context.y=y;
            console.log("左下角拖拽缩放")
            console.log(x+"and"+y)
            el.style.left = x+ 'px';
            var w=vnode.context.lx-x;
            console.log(w)
            var h=y-vnode.context.ly;
            vnode.context.Height=vnode.context.Height+h;
            vnode.context.Width=vnode.context.Width+w;
            el.style.width = vnode.context.Width+'px';
            el.style.height = vnode.context.Height+'px';
            vnode.context.lx=x;
            vnode.context.ly=y;
            vnode.context.ky=y;
            vnode.context.bx=x;
            console.log(vnode.context.Width+"长宽"+vnode.context.Height)
            console.log(el.style.width+"左下角"+el.style.height)
            vnode.context.flag=false;
            vnode.context.point=0
          }
          document.onmouseup = function () {
            document.onmousemove = document.onmouseup = null;
          }

        }else{
          document.onmousemove=function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.x=x;
            vnode.context.y=y;
            console.log("右下角拖拽缩放")
            console.log(x+"and"+y)
            var w=x-vnode.context.kx;
            console.log(w)
            var h=y-vnode.context.ky;
            vnode.context.Height=vnode.context.Height+h;
            vnode.context.Width=vnode.context.Width+w;
            el.style.width = vnode.context.Width+'px';
            el.style.height = vnode.context.Height+'px';
            vnode.context.kx=x;
            vnode.context.ky=y;
            vnode.context.ly=y;
            vnode.context.rx=x;
            console.log(vnode.context.Width+"长宽"+vnode.context.Height)
            console.log(el.style.width+"右上角"+el.style.height)
            vnode.context.flag=false;
            vnode.context.point=0
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
