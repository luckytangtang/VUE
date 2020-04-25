<template>
  <div>
  <div>
    <Header></Header>
  </div>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <el-form-item class="login-header">
      <img src="../assets/timg.jpg" width="100" height="100" alt="">
    </el-form-item>
    <h3 class="title" style="margin-bottom: 20px">Knowmap</h3>
    <el-form-item prop="username">
      <el-input
        type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="请输入用户名" suffix-icon="fa fa-user"
      >
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="请输入密码" suffix-icon="fa fa-keyboard-o"
      ></el-input>
    </el-form-item>
<!--    <el-checkbox v-model="checked" checked class="remember" style="margin-bottom: 10px">记住密码</el-checkbox>-->
<!--    <a href="/reg"  style="float: right;color: #3C8DBC;font-size: 14px;margin-bottom: 10px">注册</a>-->
    <router-link to="/reg">注册</router-link>
    <el-form-item style="width:100%;">
<!--      <el-button type="primary" style="width:100%;margin-top: 10px;" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>-->
      <el-button type="primary" style="width:100%;margin-top: 10px;" @click.native.prevent="login" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>

import axios from 'axios'
import qs from 'Qs'
  export default {
    name:'loginPage',
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: 'admin',
          checkPass: '123456'
        },
        rules2: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            //{ validator: validaePass }
          ],
          checkPass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      login () {
        console.log(this.ruleForm2.username);
        this.$refs.ruleForm2.validate((valid) => {
          if(valid){
            var url=this.apiUrl+ '/commonAccount/login001'
            var data={username:this.ruleForm2.username,password:this.ruleForm2.password};
            // var qs=require('querystring');
            axios.post(url,qs.stringify(data)).then((res)=>{
              const map=res.data.data;
              console.log(map);
              if(map!=null) {
                alert(res.data.serviceMessage);
                console.log(map.username+"  //"+map.token);
                window.sessionStorage.setItem("token",map.token);
                window.sessionStorage.setItem("username",map.username)
                var param={username:map.username}
                axios.post(this.apiUrl+"/userAccounts/getUserBaseMessage",qs.stringify(param),
                  {
                    headers: {
                      'token': map.token
                    }
                  }).then((res)=> {
                    const record = res.data.data;
                    console.log(123)
                    console.log(record);
                    window.sessionStorage.setItem("loginuser",window.JSON.stringify(record))
                    console.log(record.id);
                    window.sessionStorage.setItem("userId",record.id);
             //    console.log(JSON.parse(window.sessionStorage.getItem("user"))+1214)
                    this.$router.push({path: '/index'});
                  }
                )

              }
              else{
                alert(res.data.message);
                console.log(res.data);
              }
            }).catch(error=>{
              //   this.$router.push({ path: '/' });
              console.log(error);
              //  alert(error.data);
              //   alert('网络错误，不能访问');
            });
          }
        })


        /*
        http://148.70.210.242:8080/
        http://localhost:8080/
      user:  user0008
      password: xcsacascascasc

        if (this.ruleForm2.username === '') {
          this.$message.warning('用户名不能为空哦~~')
        } else if (this.ruleForm2.password === '') {
          this.$message.warning('密码不能为空哦~~')
        } else {
          console.log("登录")
          this.$store.dispatch('toLogin', {      // dispatch toLogin action
            username: this.ruleForm2.username,
            password: this.ruleForm2.password
          }).then(() => {
            console.log("登录成功");
            this.$store.dispatch('getUser')      // dispatch getUserInfo action
            let redirectUrl = decodeURIComponent('/index')
            console.log(redirectUrl)
            // 跳转到指定的路由
            this.$router.push({
              path: redirectUrl
            })
          }).catch((error) => {
            onsole.log("登录失败")
            console.log(error.response.data.message)
              // this.$router.push({ path: '/' });
                console.log("*网络错误"+error);
                //测试用，假数据
                var user = {
                  "username":"zyl",
                  "userid":"007"};
                sessionStorage.setItem("loginuser",JSON.stringify(user));//以字符串形式保存
                console.log("*username:"+JSON.parse(sessionStorage.getItem("loginuser")).username) //字符串形式转JSON
                alert("网络错误")
                this.$router.push({ path: '/index' });
          })
        }*/
      },
      // handleSubmit2:function (){
      //   this.$refs.ruleForm2.validate((valid) => {
      //     if(valid){
      //       var url='http://localhost:70/users/login';
      //       var data={username:this.ruleForm2.username,password:this.ruleForm2.password};
      //      // var qs=require('querystring');
      //       axios.post(url,qs.stringify(data)).then((res)=>{
      //        const user=res.data.user;
      //        if(user!=null) {
      //          sessionStorage.setItem("loginuser",JSON.stringify(user));
      //          console.log("123")
      //          console.log(sessionStorage.getItem("loginuser"));
      //        this.$router.push({path: '/'});
      //        }
      //        else{
      //          alert(res.data.msg);
      //          console.log(res.data);
      //        }
      //       }).catch(error=>{
      //      //   this.$router.push({ path: '/' });
      //         console.log("*网络错误"+error);
      //         //测试用，假数据
      //         var user = {
      //           "username":"zyl",
      //           "userid":"007"};
      //         sessionStorage.setItem("loginuser",JSON.stringify(user));//以字符串形式保存
      //         console.log("*username:"+JSON.parse(sessionStorage.getItem("loginuser")).username) //字符串形式转JSON
      //         alert("网络错误")
      //         this.$router.push({ path: '/index' });
      //       });
      //     }
      //   })
      // }
    }
  }
</script>

<style  scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 150px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;}
    .login-header{
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }

</style>
