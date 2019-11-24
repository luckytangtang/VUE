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
      <div v-drag="{bx:x,by:y,flag}" class="drag">
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
        disX:'',disY:'',
        flag:false,
      }
    },
    methods:{
      greet(){
        console.log(3258888880890655)

      },
      setpp(){
        console.log(9382389238)
      }

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

        };
      },
      drag(el,binding,vnode){
        if(!vnode.context.flag) {
          el.onmousedown = function (e) {
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            console.log(45883948394)
            console.log(binding.value.bx + binding.value.by)
            document.onmousemove = function (e) {
              console.log("drag this")
              el.style.height=100;
              el.style.width=100;
              el.style.left = e.pageX - disx + 'px';
              el.style.top = e.pageY - disy + 'px';
              console.log(binding.value.bx)
              vnode.context.bx = e.pageX - disx;
              vnode.context.by = e.pageY - disy;
            }
            document.onmouseup = function () {
              document.onmousemove = document.onmouseup = null;
            }
          }
        }else{
          document.onmousemove = function (e) {
            var x=e.pageX
            var y=e.pageY
            vnode.context.x=x;
            vnode.context.y=y;
            console.log("drag begin")
            console.log(x+"and"+y)
            console.log(vnode.context.bx)
            console.log(el.style.left)
            el.style.left = x+ 'px';
            el.style.top = y + 'px';
            console.log(el.style.height)
            console.log(el.style.width)
            var w=vnode.context.bx-x;
            console.log(w)
            var h=vnode.context.by-y;
            el.style.width = 100+w+'px';
            el.style.height = 100+h+'px';
            console.log(el.style.width+"kkdkd"+el.style.height)
           vnode.context.flag=false;
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
