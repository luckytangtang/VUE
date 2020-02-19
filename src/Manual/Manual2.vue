<template xmlns="http://www.w3.org/1999/html">
  <div>
    <Header></Header>
    <iframe
      id = "iframe"
      :src="url"
      type="application/x-google-chrome-pdf"
      width="100%"
      height="400px" >
    </iframe>
    <div id="lineArea"></div>
    <div id = "divobj">
    </div>


  </div>
</template>
<style scoped>
  #divobj{
    height: 600px;
    width: 100%;
    background-color:#eeeeff;
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
      }
    },

    mounted () {
      this.url=`../static/pdf/web/viewer.html?file=/static/FifthLanuage.pdf`;
      var canvasList = document.getElementById('lineArea'); //整个区域
      var canvas = document.createElement('canvas'); //canvas
      canvasList.appendChild(canvas);
      canvas.width = 1000; //☜
      canvas.height = 500;
      canvas.style.backgroundColor = '#eeeeee';
      var context = canvas.getContext('2d');  //获取画布对象
      context.fillStyle = "#EEEEFF";  //对画布填充颜色
      context.strokeStyle = "blue";  //图像的边框线颜色  ->strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。
      context.lineWidth=1;//线的大小->lineWidth 属性设置或返回当前线条的宽度，以像素计。
      // context.fillRect(50,50,100,100);  //图像的坐标以及宽高
      context.strokeRect(50,50,100,100);  //strokeRect() 方法绘制矩形（不填色）。笔触的默认颜色是黑色。
    }

  }
</script>
