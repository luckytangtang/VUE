<template>
  <div>
    <!--<h1 align="center">PDF预览</h1>-->
    <canvas class="canvas"
            :id="'the-canvas'+num"
            :key="num"></canvas>
    <Canvas :objectList="objectList"></Canvas>
    <div class="el-backtop paginateleft" >
      <i class="el-icon-arrow-left" @click="handelLastPage">
      </i>
    </div>
    <div class="el-backtop paginateright" >
      <i class="el-icon-arrow-right" @click="handelNextPage">
      </i>
    </div>


  </div>
</template>

<script>
  import PDFJS from "pdfjs-dist";
  import pdfjsLib from "pdfjs-dist";
  import Canvas from '@/Manual/Manual3test_0102'
  // const Base64 = require('js-base64').Base64
  export default {
    name: "ContractPreview",
    components: {Canvas},
    data() {
      return {
        objectList:[{
          x:'',y:'',    //鼠标移动坐标
          bx:53.79799999999983,by:68.27858299999991, //左上坐标
          rx:554.2189505026663,ry:68.27858299999991, //右上角坐标
          lx:53.79799999999983,ly:483.93550000000005, //左下角坐标
          kx:554.2189505026663,ky:483.93550000000005, //右下角坐标
          flag:false,
          Height:'',   //正方形区域高的初始大小
          Width:'',   //正方形区域宽的初始大小
          point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
        },
          {
            x:'',y:'',    //鼠标移动坐标
            bx:53.79799999999983,by:493.94120000000004, //左上坐标
            rx:225.4879340000001408,ry:493.94120000000004, //右上角坐标
            lx:53.79799999999983,ly:546.0865950000001, //左下角坐标
            kx:225.4879340000001408,ky:546.0865950000001, //右下角坐标
            flag:false,
            Height:'',   //正方形区域高的初始大小
            Width:'',   //正方形区域宽的初始大小
            point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
          },
          {
            x:'',y:'',    //鼠标移动坐标
            bx:53.79799999999983,by:549.8155, //左上坐标
            rx:292.90397800000034,ry:549.8155, //右上角坐标
            lx:53.79799999999983,ly:600.6245000000001, //左下角坐标
            kx:292.90397800000034,ky:600.6245000000001, //右下角坐标
            flag:false,
            Height:'',   //正方形区域高的初始大小
            Width:'',   //正方形区域宽的初始大小
            point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
          },
          {
            x:'',y:'',    //鼠标移动坐标
            bx:53.29800420000001,by:604.7160034, //左上坐标
            rx:173.8500042,ry:604.7160034, //右上角坐标
            lx:53.29800420000001,ly:618.0100485351562, //左下角坐标
            kx:173.8500042,ky:618.0100485351562, //右下角坐标
            flag:false,
            Height:'',   //正方形区域高的初始大小
            Width:'',   //正方形区域宽的初始大小
            point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
          },{
            x:'',y:'',    //鼠标移动坐标
            bx:53.79800000000001,by:632.360024, //左上坐标
            rx:292.9224949736326,ry:632.360024, //右上角坐标
            lx:53.79800000000001,ly:688.147753149414, //左下角坐标
            kx:292.9224949736326,ky:688.147753149414, //右下角坐标
            flag:false,
            Height:'',   //正方形区域高的初始大小
            Width:'',   //正方形区域宽的初始大小
            point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
          },
          {
            x:'',y:'',    //鼠标移动坐标
            bx:53.79800000000001,by:691.1400239999999, //左上坐标
            rx:231.1714540000002,ry:691.1400239999999, //右上角坐标
            lx:53.79800000000001,ly:721.4945, //左下角坐标
            kx:231.1714540000002,ky:721.4945, //右下角坐标
            flag:false,
            Height:'',   //正方形区域高的初始大小
            Width:'',   //正方形区域宽的初始大小
            point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
          },
          {
            x:'',y:'',    //鼠标移动坐标
            bx:316.812,by:501.37050000000005, //左上坐标
            rx:555.9137016000004,ry:501.37050000000005, //右上角坐标
            lx:316.812,ly:719.5515000000001, //左下角坐标
            kx:555.9137016000004,ky:719.5515000000001, //右下角坐标
            flag:false,
            Height:'',   //正方形区域高的初始大小
            Width:'',   //正方形区域宽的初始大小
            point:'',  //用来判断点击了哪个角 1-->左上  2-->右上  3-->左下    4-->右上
          }],
        title: "PDF预览文件",
        pdfDoc: null,
        pages: 0,
        num:1
      };
    },
    methods: {
      handelNextPage(){
        this.num++;
        if(this.num>this.pages)
        {
          alert("这已经是最后一页了")
          this.num--;
        }
        else{
          this._renderPage(this.num)
        }
      },
      handelLastPage(){
        this.num--;
        if(this.num<1){
          alert("这已经是第一页")
          this.num++
        }
        else {
          this._renderPage(this.num)
        }
      },
      // 初始化pdfjs
      initThePDFJSLIB: function() {
        pdfjsLib.GlobalWorkerOptions.workerSrc = "../static/pdf/build/pdf.worker.js";
      },
      _renderPage(num) {
        this.pdfDoc.getPage(num).then(page => {
          let canvas = document.getElementById("the-canvas" + num);//// 得到canvas
          let ctx = canvas.getContext("2d");//// 得到canvas的上下文环境
          let dpr = window.devicePixelRatio || 1;  //设备像素比
          let bsr =
            ctx.webkitBackingStorePixelRatio ||
            ctx.mozBackingStorePixelRatio ||
            ctx.msBackingStorePixelRatio ||
            ctx.oBackingStorePixelRatio ||
            ctx.backingStorePixelRatio || 1;
          let ratio = dpr / bsr;
          let viewport = page.getViewport(1);
          console.log(viewport)  //得到整个页面大小
          canvas.width = viewport.width * ratio;  //canvas.style.width是浏览器渲染canvas的尺寸，而canvas.width是canvas的画布大小
          canvas.height = viewport.height * ratio;
          canvas.style.width = viewport.width + "px";
          canvas.style.height = viewport.height + "px";
          ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
          let renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          page.render(renderContext);
        });
      },
      _loadFile(url) {
        PDFJS.getDocument(url).then(pdf => {
          this.pdfDoc = pdf;
          this.pages = this.pdfDoc.numPages;   //获得总页数
          this.$nextTick(() => {
            this._renderPage(1);
          });
        });
      }
    },
    mounted() {
      var docId=this.$route.query.docId;
      var username=this.$route.query.username
      console.log(docId+username)
      let url=this.apiUrl+'/commonFile/getPdfFile?docId='+docId+"&username="+username
      this.initThePDFJSLIB();
      document.title = this.title;
      this._loadFile(url);
    },
    beforeMount () {
      var docId=this.$route.query.docId;
      var username=this.$route.query.username;
      console.log("before "+docId+username)
    }
  };
</script>

<style scoped>

  .paginateleft{
    top:40%;
    left: 25%;
  }
  .paginateright{
    top: 40%;
    right: 25%;
  }
  .canvas {
    display: block;
    border-bottom: 1px solid black;
    margin: 0 auto;
  }
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
