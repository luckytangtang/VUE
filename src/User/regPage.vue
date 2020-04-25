<template>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <el-form-item class="login-header">
      <img src="../assets/timg.jpg" width="100" height="100" alt="">
    </el-form-item>
    <h3 class="title" style="margin-bottom: 20px">Knowmap</h3>
    <el-form-item  prop="users.username">
      <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="确认密码"></el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <el-input type="text" v-model="ruleForm2.phone" auto-complete="off" placeholder="电话号码"></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input type="text" v-model="ruleForm2.email" auto-complete="off" placeholder="邮箱"></el-input>
    </el-form-item>
    <el-form-item prop="birthday">
      <el-input type="text" v-model="ruleForm2.birthday" auto-complete="off" placeholder="生日(19960308)"></el-input>
    </el-form-item>
    <el-form-item prop="gender">
      <el-radio-group v-model="ruleForm2.gender">
        <el-radio @click.native.prevent="clickitem(0)" label="0" aria-checked="true">男</el-radio>
        <el-radio @click.native.prevent="clickitem(1)" label="1" aria-checked="true">女</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleForm2)">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  import axios from 'axios'
  import qs from 'Qs'
  export default {
    data() {
      var checkBirthday = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('生日不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      var regEmail= /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      var validateEail=(rule,value,callback)=>{
        if(value===''){
          callback(new Error("Email不能为空"));
        }/*else if(!regEmail.test(value)){
          callback(new Error("邮箱格式不正确"));
        }*/
      }
      var phone=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      var validatePhone=(rule,value,callback)=>{
        if(value===''){
          callback(new Error("电话号码不能为空"));
        }/*else if(!phone.test(value)){
          callback(new Error("电话号码格式不正确"));
        }*/
      }
      return {
        ruleForm2: {
          username:'',
          password: '',
          gender:'0',
          checkPass: '',
          phone:'',
          email:'',
          birthday: '',

        },
       rules2: {
         password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          /*birthday: [
            { validator: checkBirthday, trigger: 'blur' }
          ],
          phone:[
            {validator:validatePhone,trigger:'blur'}
          ],
          email:[
            {
              validator:validateEail,trigger:'blur'
            }
          ]*/
        }
      };
    },
    methods: {
      clickitem(e){
        e===0?this.ruleForm2.gender='0':this.ruleForm2.gender='1';
      },
      submitForm(ruleForm2){
        console.log("123");
        this.$refs.ruleForm2.validate((valid) => {
            console.log("zhixing");
          if (valid) {
            var url=this.apiUrl+'/userAccounts/resgister';
            var data= {
                username: this.ruleForm2.username,
                password: this.ruleForm2.password,
                birthday: this.ruleForm2.birthday,
                phone: this.ruleForm2.phone,
                email: this.ruleForm2.email,
                gender:this.ruleForm2.gender
            }
            var obj=qs.parse(data);
            var oje=JSON.stringify(data);
            console.log(qs.stringify(obj));
             axios.post(url ,qs.stringify(data)).then((res)=>{
             console.log(res.data);
             if(res.data.code=="200") {
               alert(res.data.serviceMessage);
               this.$router.push({path: '/'});
             }
             else {
               alert(res.data.serviceMessage);
               this.$router.push({path:'/reg'})
             }
           }).catch(error=>{
             console.log(error);
           });
          } else {
            console.log('submit error&&!!');
            return false;
          }
        }
        );
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
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
    width: 400px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .login-header{
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  el-form-item{
    line-height: 100px;
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
