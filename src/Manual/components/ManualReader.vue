<template>
  <div>
    <!--<h1 align="center">PDF预览</h1>-->
    <canvas class="canvas"
            :id="'the-canvas'+num"
            :key="num"></canvas>
    <Loading v-show="!flag"></Loading>
    <ManualPoint v-show="flag" :num="num">
    </ManualPoint>
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
  import ManualPoint from '@/Manual/components/ManualPoint'
  import Loading from "@/components/Loading"

  // const Base64 = require('js-base64').Base64
  export default {
    name: "ContractPreview",
    components: {ManualPoint,Loading},
    data() {
      return {
        title: "PDF预览文件",
        pdfDoc: null,
        pages: 0,
        flag:false,
        num:1
      };
    },
    methods: {
      handelNextPage(){
        this.num++;
        if(this.num>this.pages)
        {
          alert("This is the last page")
          this.num--;
        }
        else{
          this._renderPage(this.num)
          console.log("this.num")
        }
      },
      handelLastPage(){
        this.num--;
        if(this.num<1){
          alert("This is the first page")
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
          if(this.pdfDoc!=null)
            this.flag=true;
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
     // let url=this.apiUrl+'/commonFile/getResetHtml?docId='+1+"&pageId="+1+"&pageIndex="+1
      this.initThePDFJSLIB();
      document.title = this.title;
      this._loadFile(url);
    }
  };
</script>

<style scoped>

  .paginateleft{
    top:50%;
    left: 8%;
  }
  .paginateright{
    top: 50%;
    right: 8%;
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
  .demo-table-expand label {
    width: 100%;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }


</style>
