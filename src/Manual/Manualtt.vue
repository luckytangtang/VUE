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
      <div v-drag="{bx:x,by:y,flag:false}" class="drag">
        <div v-cdrag="greet" class="cdrag">
        </div>

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
  .cdrag{
    width: 20px;
    height: 20px;
    position:relative;
    top:0px;
    left:0px;
    background-color: green;
  }
  divobj{
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
        x:'',y:'',bx:'',by:'',sx:'',sy:'',
        flag:false,
      }
    },
    methods:{
      greet(){
        console.log(3258888880890655)
        //  console.log(this.x+"ddkkd"+this.y)
      },
      setpp(){
        console.log(9382389238)
      }

    },

    directives:{
      cdrag(el,binding,vnode,oldVnode){
//el为拖动的元素
        var oDiv =el;
        oDiv.onmousedown = function(e){
          e.preventDefault();
          e.stopPropagation();
          var disX = e.offsetX;
          var disY = e.offsetY;
          console.log(disX+"de"+disY)
          document.onmousemove = function(e){
            e.preventDefault();
            e.stopPropagation();
            binding.value
            console.log(binding)
            var x=e.pageX-disX;
            var y=e.pageY-disY
            oDiv.style.left=x
            oDiv.style.top=y
            console.log(x+"ddd"+y)
            vnode.context.x=x;
            vnode.context.y=y;
          };
          document.onmouseup = function(){
            //    document.onmousemove=null;
            console.log(9999)
            document.onmouseup=null;
          };
        };
      }
      ,
      drag(el,binding,vnode){
        el.onmousedown = function(e){
          var disx = e.pageX - el.offsetLeft;
          var disy = e.pageY - el.offsetTop;
          console.log(45883948394)
          console.log(binding.value.bx+binding.value.by)
          document.onmousemove = function (e){
            console.log("drag begin")
            el.style.left = e.pageX - disx+'px';
            el.style.top = e.pageY - disy+'px';
            console.log(binding.value.bx)
            el.style.height=200+binding.value.bx+'px'
            el.style.height=binding.value.by+'px'
            vnode.context.bx=e.pageX - disx;
            vnode.context.by=e.pageY - disy;
          }
          document.onmouseup = function(){
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
