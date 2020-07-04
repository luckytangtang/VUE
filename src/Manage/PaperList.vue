<template>
  <div>
    <Header></Header>
    <div class="line" style="height: 20px"></div>
    <div class="demo-input-suffix">
      <el-button size="small" class="delete" icon="el-icon-delete" round type="info">Rubbish station</el-button>
      <el-input
        class="search"
        placeholder="Please enter the thesis keyword"
        prefix-icon="el-icon-search"
        size="small"
        v-model="input2">
      </el-input>
    </div>
    <el-table
      v-loading="isloading"
      :data="listData"
      style="width: 100%">
      <el-table-column class="info" type="expand">
        <template slot-scope="props">
          <el-form class="demo-table-expand" label-position="left">
            <el-form-item label="Papername:">
              <span>{{ props.row.title }}</span>
            </el-form-item>
            <el-form-item label="Filename：">
              <span>{{props.row.file_name}}</span>
            </el-form-item>
            <el-form-item label="Author:">
              <span>{{ props.row.author }}</span>
            </el-form-item>
            <el-form-item label="Create Time:">
              <span>{{ props.row.create_time}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="Paper Information"
        prop="title"
      >
      </el-table-column>
      <el-table-column
        label="Operation">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="readerRow(scope.row.id)"
            size="small"
            type="text">
            Reading
          </el-button>
          <el-button
            @click.native.prevent="preReaderAdjust(scope.row.id)"
            size="small"
            type="text">
            Adjustment
          </el-button>
          <el-button
            @click.native.prevent="downloadRow(scope.row.id)"
            size="small"
            type="text">
            Download
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.row.id)"
            size="small"
            type="text">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="paginationClass">
      <el-pagination
        @size-change="handleSizeChange"
        background
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 8, 10, 15]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>

</template>
<style scoped>

  .paginationClass{
    width:100%;
    height: 50px;
    position:relative;
    bottom: 0px;
    align-content: center;
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

    .search {
      width: 60%;
      float: right;
    }

  }
</style>
<script>
  import Header from '@/components/HeaderDemo'
  import Loading from "@/components/Loading"
  import axios from 'axios';
  import qs from  'Qs';
  export default {
    name: 'Manage',
    components: {Header},
    inject:['reload'],
    data () {
      return {
        isloading:false,
        listData:[],
        currentPage:1,
        total:1,
        pageSize:5
      }
    },
    beforeCreate () {
      if(!sessionStorage.getItem("token")){
        alert("Please log in to your account")
        this.$router.push("/");
      }
      var username=window.sessionStorage.getItem("username")
      var userId=window.sessionStorage.getItem("userId")
      var token=window.sessionStorage.getItem("token")
      var param={userId:userId,pageIndex:1,pageSize:9,username:username}
      axios.post(this.apiUrl+"/document/getDemoDocuments",qs.stringify(param),
        {
          headers: {
            'token': token
          }
        }).then((res)=> {
        const documentList = res.data.data;
        this.total=documentList.length;
        var len=this.total>this.pageSize?this.pageSize:this.total;
        window.sessionStorage.setItem("documentList",JSON.stringify(documentList));
        for( var i=0;i<len;i++){
          console.log(documentList[i])
          this.listData.push(documentList[i])
        }
        console.log(this.listData);
      }).catch(error=>{
        console.log(error);
      });
    },
    created () {

    },
    methods:{
      /* testData(){
         var token=window.sessionStorage.getItem("token")
         var params={"point":[{"x1":316.81,"y1":298.63,"x2":443.09,"y2":312.60},
             {"x1":52.67,"y1":57.03,"x2":293.35,"y2":714.57},
             {"x1":327.59,"y1":57.03,"x2":557.64,"y2":223.55},
             {"x1":316.812,"y1":595.51,"x2":555.92,"y2":719.55},
             {"x1":316.81,"y1":234.024,"x2":555.91,"y2":284.83},

           ],"pageIndex":1,"userId":1,"docId":1}
         console.log(params)
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
       },*/
      handleCurrentChange(currentPage){
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
        this.listData=[]
        var document=window.sessionStorage.getItem("documentList")
        console.log(document)
        var documentList=JSON.parse(document)
        var len=(this.currentPage-1)*this.pageSize+this.pageSize>this.total?this.total:(this.currentPage-1)*this.pageSize+this.pageSize
        for(var i=(this.currentPage-1)*this.pageSize;i<len;i++)
          this.listData.push(documentList[i])
        console.log(this.listData)

      },
      handleSizeChange(pageSize){
        this.pageSize=pageSize
        this.handleCurrentChange(this.currentPage)

      },
      preReaderAdjust(id){
        var username=window.sessionStorage.getItem("username")
        window.sessionStorage.setItem("docId", id)
        this.$router.push({path:"/pdfReader",query:{docId:id,username:username}})
      },
      downloadRow(id){
        console.log(id);
        var url=this.apiUrl+'/commonFile/getPdfFile';
        var username=window.sessionStorage.getItem("username")
        var token=window.sessionStorage.getItem("token")
        var data={docId:id,username:username}
        window.location.href=url+"?docId="+id+"&username="+username
      },
      analysisRow(id){
        var url=this.apiUrl+'/commonFile/getResetHtml'
        this.$router.push({path:"/any",query:{docId:id,username:username}})
        var username=window.sessionStorage.getItem("username")
        var token=window.sessionStorage.getItem("token")
        var data={docId:1,username:username,pageId:1,pageIndex:1}
        //  parent.location.href=url+"?docId="+1+"&pageId="+1+"&pageIndex="+1

      },
      readerRow(id){
        this.isloading=true;
        var _this=this;
        var status=0;//用这个判断是否解析成功
        var username=window.sessionStorage.getItem("username")
        var token=window.sessionStorage.getItem("token")
        var statusurl=this.apiUrl+"/task/getTaskStatus"
        var params={docId:id,username:username}
        var timer= window.setInterval(function () {
          axios.post(statusurl,qs.stringify(params),
            {
              headers:{
                token:token
              }
            }
          ).then(res=>{
            console.log(res.data.data)
            var data=res.data.data.status;
            var task=res.data.data
            if(data==6)
            {
              clearInterval(timer)
              status=data
              console.log(status)

            }
            else if(data==4){
              clearInterval(timer)
              status=data
            }
            console.log("跳出")
            if(status==6) {
              console.log("开始获得CSS")
              var url = "http://148.70.210.242:8080"+ "/commonFile/getCssFile";
              console.log(url)
              axios.get(url + "?docId=" + id + "&username=" + username
              ).then((res) => {
                console.log(res.data)
                sessionStorage.setItem("pdfCss", res.data)
                window.sessionStorage.setItem("docId", id)
                _this.isloading=false
                _this.$router.push({path: "/ltt", query: {docId: id, username: username}})
              }).catch(error => {
                console.log(error);
                window.sessionStorage.setItem("docId", id)
                _this.isloading=false
                _this.$router.push({path: "/ltt", query: {docId: id, username: username}})
              });
            }
            else if(status==4){
              alert("Parse failure,the reason is："+res.data.data.errorInfo)
              _this.isloading=false;
            }
          })
        }, 2000);

        /*  */
        //  parent.location.href=url+"?docId="+id+"&username="+username
      },
      deleteRow(id) {
        console.log(id);
        console.log(12396);
        var url = this.apiUrl+'/document/remove'
        var userId=window.sessionStorage.getItem("userId")
        var username=window.sessionStorage.getItem("username")
        var token=window.sessionStorage.getItem("token")
        var data = {docId: id,userId:userId,username:username}
        console.log(323)
        axios.post(url, qs.stringify(data),
          {
            headers: {
              'token': token
            }
          }).then((res) => {
          console.log(2445)
          if(res.data.code==200){
            console.log(3445566)
            this.$router.go(0);//重新刷新
            //    this.reload();
          }else{
            console.log(res.data.message)
          }
        }).catch(error => {
          console.log(error);
        });

      },
      download(data){
        if(!data){
          return
        }
        console.log(data)
        var blob=new Blob([data],{
          type: 'application/pdf;charset=utf-8'
        });
        console.log(blob)
        var  url = window.URL.createObjectURL(blob);
        var  link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', 'jack.pdf')
        document.body.appendChild(link)
        link.click()

      }
    }
  }
</script>


