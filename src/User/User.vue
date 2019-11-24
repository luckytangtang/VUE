<template>
  <div>
    <Header></Header>
    <el-card class="box-card">
      <el-tabs v-model="activeName">
        <el-tab-pane label="基本信息" name="index">

          <div class="panel-heading">
            <img src="http://placeimg.com/200/200/scenery">
            <span class="title"><p class="role">{{username}}</p><span class="name">超级管理员</span> </span>
            <i class="el-icon-edit-outline" style="font-size: 28px; position: absolute; right: 31px; cursor: pointer;"></i>
          </div>
          <div class="panel-body">
            <ul>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-id-card"></i></el-col>
                  <el-col :span="12">ID</el-col>
                  <el-col :span="6">
                    {{id}}
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-envelope"></i></el-col>
                  <el-col :span="12">EMAIL</el-col>
                  <el-col :span="6">{{email}}</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-female"></i></el-col>
                  <el-col :span="12">性别</el-col>
                  <el-col :span="6">{{gender}}</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-birthday-cake"></i></el-col>
                  <el-col :span="12">生日</el-col>
                  <el-col :span="6">{{birthday}}</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-phone"></i></el-col>
                  <el-col :span="12">手机</el-col>
                  <el-col :span="6">{{phone}}</el-col>
                </el-row>
              </li>
              <li>
                <el-row :gutter="20">
                  <el-col :span="6"><i class="fa fa-calendar"></i></el-col>
                  <el-col :span="12">注册时间</el-col>
                  <el-col :span="6">{{create_time}}</el-col>
                </el-row>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="头像修改" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="密码修改" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  import axios from 'axios'
  import qs from 'Qs'
  import Header from '@/components/Header'
  export default {
    name:'User',
    components: {Header},
    data() {
      var loginuser=window.JSON.parse(window.sessionStorage.getItem("loginuser"))
      return {
        id:loginuser.id,
        username:loginuser.username,
        email:loginuser.email,
        gender:loginuser.gender==0?'男':'女',
        phone:loginuser.phone,
        create_time:loginuser.create_time,
        birthday:loginuser.birthday,
        activeName: 'index'
      }
    },
   /* beforeCreate(){
      var username=window.sessionStorage.getItem("username")
      var token=window.sessionStorage.getItem("token")
      var param={username:username}
      axios.post(this.apiUrl+"/userAccounts/getUserBaseMessage",qs.stringify(param),{
        headers:{
          token:token
        }
      }).then((res)=>{

      })

    },*/
    methods: {},
    mounted: function () {

    }
  }
</script>
<style lang="less">
  .box-card {
    border-radius: 0;
    .panel-heading{
      display: flex;
      text-align: left;
      width: 100%;
      border-bottom: 1px solid #eeeff1;
      padding: 15px;
      font-weight: bold;
      img{
        margin-right: 15px;
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
      .title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .name{
          color: #367fa9;
          font-size: 18px;
        }
        .role{
          color: #99a9c0;
        }
      }
    }
    .panel-body{
      color: #3c8dbc;
      ul{
        li{
          border-bottom: 1px solid #eeeff1;
          padding: 0 15px;
          height: 45px;
          line-height: 45px;
        }
      }
    }
  }
</style>
