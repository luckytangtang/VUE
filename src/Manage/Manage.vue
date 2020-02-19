<template>
  <div>
    <Header></Header>
    <div class="line" style="height: 20px"></div>
    <div class="demo-input-suffix">
      <el-button size="small" class="delete" icon="el-icon-delete" round type="info">回收站</el-button>
      <el-input
        class="search"
        placeholder="请输入论文关键字"
        prefix-icon="el-icon-search"
        size="small"
        v-model="input2">
      </el-input>
    </div>
    <el-table
      :data="listData"
      style="width: 100%">
      <el-table-column class="info" type="expand">
        <template slot-scope="props">
          <el-form class="demo-table-expand" label-position="left">
            <el-form-item label="论文名:">
              <span>{{ props.row.title }}</span>
            </el-form-item>
            <el-form-item label="文件名：">
              <span>{{props.row.file_name}}</span>
            </el-form-item>
            <el-form-item label="作者:">
              <span>{{ props.row.author }}</span>
            </el-form-item>
            <el-form-item label="创建时间:">
              <span>{{ props.row.create_time}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
        label="论文信息"
        prop="title"
      >
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="readerRow(scope.row.id)"
            size="small"
            type="text">
            阅读
          </el-button>
          <el-button
            @click.native.prevent="downloadRow(scope.row.id)"
            size="small"
            type="text">
            重新下载
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.row.id)"
            size="small"
            type="text">
            删除
          </el-button>
        </template>
        >
      </el-table-column>
    </el-table>
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

    .search {
      width: 60%;
      float: right;
    }

  }
</style>
<script>
  import Header from '@/components/Header'
  import axios from 'axios';
  import qs from  'Qs';
  export default {
    name: 'Manage',
    components: {Header},
    inject:['reload'],
    data () {
      return {
        listData:[],
        tableData: [{
          name: 'Abstractive Cross-Language Summarization via\n' +
            'Translation Model Enhanced Predicate Argument',
          author: 'Smith',
          status: '已下载',
          pageNum: '9',
          mess1: '其它信息1....',
          mess2: '其它信息2....',
          mess3: '其它信息3....',
          address: '9',
        }, {
          name: 'Abstractive Cross-Language Summarization via\n' +
            'Translation Model Enhanced Predicate Argument',
          author: 'Smith',
          status: '已下载',
          pageNum: '9',
          mess1: '其它信息1....',
          mess2: '其它信息2....',
          mess3: '其它信息3....',
          address: '9',
        }, {
          name: 'Abstractive Cross-Language Summarization via\n' +
            'Translation Model Enhanced Predicate Argument',
          author: 'Smith',
          status: '已下载',
          pageNum: '9',
          mess1: '其它信息1....',
          mess2: '其它信息2....',
          mess3: '其它信息3....',
          address: '9',
        }, {
          name: 'Abstractive Cross-Language Summarization via\n' +
            'Translation Model Enhanced Predicate Argument',
          author: 'Smith',
          status: '已下载',
          pageNum: '9',
          mess1: '其它信息1....',
          mess2: '其它信息2....',
          mess3: '其它信息3....',
          address: '9',
        }]
      }
    },
    beforeCreate () {
      if(!sessionStorage.getItem("token")){
        alert("请登录您的账号")
        this.$router.push("/");
      }
      var username=window.sessionStorage.getItem("username")
      var userId=window.sessionStorage.getItem("userId")
      var token=window.sessionStorage.getItem("token")
      var param={userId:userId,pageIndex:1,pageSize:6,username:username}
      axios.post(this.apiUrl+"/document/getList",qs.stringify(param),
        {
          headers: {
            'token': token
          }
        }).then((res)=> {
        const documentList = res.data.data;
        console.log(123)
        console.log(JSON.stringify(documentList));
        console.log(res.data.code)
        console.log(res.data.serviceCode)
        this.listData=documentList;
        console.log(this.listData);
      }).catch(error=>{
        console.log(error);
      });
    },
    created () {

    },
    methods:{
      downloadRow(id){
        console.log(id);
        var url=this.apiUrl+'/commonFile/getPdfFile';
        var username=window.sessionStorage.getItem("username")
        var token=window.sessionStorage.getItem("token")
        var data={docId:id,username:username}
        // http://xxxx/url>?p1=xx&p2=xxx
        window.location.href=url+"?docId="+id+"&username="+username
     //   window.open(url+"?docId="+id+"&username="+username)
        /*axios.get(url+"?docId="+id+"&username="+username
       ).then((res)=>{
            console.log(res.data)
           // console.log(res.data)
         //   this.download(res.data)
        }).catch(error=>{
          console.log(error);
        });*/
      },
      readerRow(id){
      //  var url=this.apiUrl+'/commonFile/getFileStream';
        var username=window.sessionStorage.getItem("username")
     //   var token=window.sessionStorage.getItem("token")
    //    var data={docId:id,username:username}
    //    console.log(id)
      //  console.log(username)
       this.$router.push({path:"/ltt",query:{docId:id,username:username}})
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
            this.$router.go(0);
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


