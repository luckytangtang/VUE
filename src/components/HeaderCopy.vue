<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Knowmap</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">首页 <span class="sr-only">(current)</span></a></li>
            <li class="active"><a href="/analysis">论文解析 <span class="sr-only">(current)</span></a></li>
            <li class="active"><a href="/management">论文管理 <span class="sr-only">(current)</span></a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right" v-show="!isLogin">
            <li><a v-if="!loginuser" @click="logClick">登录</a></li>
            <li><a v-if="!loginuser" @click="regClick">注册</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right" v-show="isLogin">
            <li> <a>{{ username }}</a></li>
            <li><a v-if="loginuser" @click="quit">退出</a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>
<style>
</style>
<script>
  import Logo from '@/assets/logo.png'
  export default {
    name: 'Header.vue',
    data () {
      return {
        logo: Logo,
        username: !sessionStorage.getItem("loginuser") ? '': JSON.parse(sessionStorage.getItem("loginuser")).username,//初始值为空，有返回时为用户名
        loginuser:sessionStorage.getItem("loginuser"),
      }
    },
    watch: {
      '$route' (to, from) {
        this.$router.go(0);
      }
    },
    beforeCreate(){
      var user= !sessionStorage.getItem("loginuser")? '': JSON.parse(sessionStorage.getItem("loginuser")).username;
      //console.log("**username is : "+ !sessionStorage.getItem("loginuser"));
      console.log("123执行");
    },
    created(){
      this.data();

    },
    computed: {
      isLogin () {
        return sessionStorage.getItem("loginuser");
      }
    },
    methods: {
      logClick () {
        this.$router.push({path: '/login'});
      },
      quit(){
        sessionStorage.setItem("loginuser",null);

      },
      showMenu(){
        // console.log(this.$refs.pp);
        // this.$refs.pp.style.display="none";
        console.log(this.$refs.navList);
        if(this.$refs.navList.style.display=="inline-block")
          this.$refs.navList.style.display="none";
        else this.$refs.navList.style.display="inline-block";
        // this.$refs.navList.style.width="200px";
        // this.$refs.navList.style.width="80px";
      },
    }

  }
</script>


