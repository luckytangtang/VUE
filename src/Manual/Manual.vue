<template xmlns="http://www.w3.org/1999/html" xmlns:Content-Disposition="http://www.w3.org/1999/xhtml">
  <div>
    <Header></Header>


<!--

<iframe
      :src="url"
       width="100%"
      height="850px" >
    </iframe>
-->
    <div id="lineArea">
    <embed
      :src="embedSrc"
      type="application/pdf"
      width="100%"
      height="600px"
      />
    </div>




  </div>
</template>
<style scoped>
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
        embedSrc:'',
      }
    },
    beforeCreate(){
   var docId=this.$route.query.docId;
   if(docId==null){
     alert("请先给定论文信息");
     this.$router.go(-1);
   }
    },
    beforeMount() {
      var docId=this.$route.query.docId;
      var username=this.$route.query.username
      console.log(docId+username)
   this.embedSrc=this.apiUrl+'/commonFile/getFileStream?docId='+docId+"&username="+username

    },
    mounted(){
      var canvasList = document.getElementById('lineArea'); //整个区域
      var canvas = document.createElement('canvas'); //canvas
      canvasList.appendChild(canvas);
      canvas.width = 1000; //☜
      canvas.height = 300;
      canvas.style.backgroundColor = '#eeeeee';
      var context = canvas.getContext('2d');  //获取画布对象
      context.fillStyle = "#EEEEFF";  //对画布填充颜色
      context.strokeStyle = "blue";  //图像的边框线颜色  ->strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式。
      context.lineWidth=1;//线的大小->lineWidth 属性设置或返回当前线条的宽度，以像素计。
      // context.fillRect(50,50,100,100);  //图像的坐标以及宽高
      context.strokeRect(50,50,100,100);
    }

  }
</script>




