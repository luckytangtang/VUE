<template>
  <div>
    <Header></Header>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>STEPS</span>
      </div>
      <div style="display: block">
        <el-steps :active="4">
          <el-step title="Step 1" description="Upload original paper"></el-step>
          <el-step title="Step 2" description="Analysis of paper structure"></el-step>
          <el-step title="Step 3" description="Re-adapt the paper"></el-step>
          <el-step title="Step 4" description="Management of paper"></el-step>
        </el-steps>
      </div>
    </el-card>
    <div class="line" style="height: 20px"></div>
    <el-form :model="formItem" ref="uploadFile" action="" enctype="multipart/form-data" method="post">
      <el-row>
        <el-col class="el-file-upload" :span="11" style="height: 20px">
          <el-form-item >
            <el-upload
              class="upload-demo el-file-upload"
              :on-change="onchange"
              :auto-upload="false"
              drag
              multiple="false"
              style="margin-left: 20px">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
            </el-upload>
          </el-form-item>
        </el-col>
        <el-col :span="10" class="grid-content ">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Add paper information</span>
            </div>
            <div >
              <el-form-item>
                <el-input type="text" placeholder="Please enter the name of the paper" v-model="formItem.title">
                </el-input>
              </el-form-item>
            </div>
            <div style="margin: 20px 0;"></div>
            <div>
              <el-form-item>
                <el-input type="text" placeholder="Please enter the first author name" v-model="formItem.author"><div style="margin: 20px 0;"></div>
                </el-input>
              </el-form-item>
            </div>
            <div style="margin: 20px 0;"></div>
            <div >
              <el-form-item>
                <el-button style="margin: 20px 0 0 0; " type="primary" @click="submitForm">Submit
                </el-button>
              </el-form-item>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-form>
    <hr style="border:0.5px dotted #036"/>
    <div class="option">
      <el-button @click="hreftwo" round style="margin-left: 20px" type="info">
        Reading online</el-button>
      <el-button round style="margin-left: 20px" type="info">Download</el-button>
      <el-link style="float:right;margin-right: 20px;" type="primary">History papers</el-link>
      <el-link style="float:right;margin-right: 20px;" type="primary">Upload More</el-link>
    </div>
    <div class="line" style="height: 20px"></div>
    <div class="description">
      <el-card class="box-card" style="width:100%">
        <div class="clearfix" slot="header">
          <span>Instructions</span>
        </div>
        <div :key="o" class="text item" v-for="o in 4">
          {{'Explanation '+ o + ': On the right ear mask, it is equipped with sliding touch function (only available when bluetooth mode is turned on), music switching and volume adjustment, which can realize simple and light touch operation'}}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Header from '@/components/HeaderDemo'
  import Foot from '@/components/Foot'

  export default {
    data(){
      return{
        formItem:{
          title: '',
          author: ''
        },
        params:''
      };
    },
    name: 'Analysis',
    components: {Header, Foot},
    beforeCreate(){
      console.log("Analysis,beforeCreate");
      console.log("**Analysis,islogin:"+ sessionStorage.getItem("username"));
      if(!sessionStorage.getItem("token")){
        alert("Please log in to your account")
        this.$router.push("/");
      }
    },
    methods: {
      hreftwo () {
        this.$router.push({path: '/management'})
      },
      onchange(file,fileList){
        console.log(file);
        //创建一个临时路径来展示图片
        var windowURL=window.URL ||window.webkitURL;
        this.src=windowURL.createObjectURL(file.raw);
        this.params=new FormData();
        this.params.append("file",file.raw,file.name);
      },
      submitForm(){
        this.$refs.uploadFile.validate((valid)=>{
          console.log("执行");
          if(valid){
            var url=this.apiUrl+"/pdfFiles/savePdfFile";
            console.log("进来了");
            var  title=this.formItem.title;
            var author=this.formItem.author;
            var token=window.sessionStorage.getItem("token");
            var username=window.sessionStorage.getItem("username");
            var userId=window.sessionStorage.getItem("userId");
            //   var us=JSON.parse(user);
            //   console.log(us.id);
            this.params.append("title",title);
            this.params.append("author",author);
            this.params.append("userId",userId);
            this.params.append("username",username)
            console.log(this.params.get("file"));
            console.log(this.params.get("title")+"2442"+this.params.get("author"));
            console.log(this.params);
            console.log(token+userId)
            console.log(9443)
            axios.post(url,this.params,{
              headers: {
                'token': token
              }
            }).then((res)=>{
              console.log(323);
              console.log(res.data);
              if(res.data.code=="200") {
                alert(res.data.message);
                var document=res.data.data;
                console.log(document)
                sessionStorage.setItem("document",document)
                this.$router.push({path: '/management'});
              }
              else {
                alert(res.data.message);
                this.$router.push({path:'/analysis'})
              }
            }).catch(error=>{
              console.log(error);
            });
          }
          else {
            console.log('submit error&&!!');
            return false;
          }

        })
      }

    }
  }
</script>

<style scoped>

</style>
