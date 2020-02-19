<template>
  <div>
    <nav class="navbar navbar-inverse" style="height: 80px;font-size: 18px;">
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
            <li><a href="/index">首页 <span class="sr-only">(current)</span></a></li>
            <li><a href="/analysis">论文解析 <span class="sr-only">(current)</span></a></li>
            <li><a href="/management">论文管理 <span class="sr-only">(current)</span></a></li>
            <li><a href="/manual">自动调整 <span class="sr-only">(current)</span></a></li>
          </ul>
<!--          <ul class="nav navbar-nav navbar-right" v-show="!isLogin">-->
<!--            <li><a v-if="!loginuser" @click="logClick">登录</a></li>-->
<!--            <li><a v-if="!loginuser" @click="regClick">注册</a></li>-->
<!--          </ul>-->
<!--          <ul class="nav navbar-nav navbar-right" v-show="isLogin">-->
<!--            <li> <a>{{ username }}</a></li>-->
<!--            <li><a v-if="loginuser" @click="quit">退出</a></li>-->
<!--          </ul>-->
          <ul class="nav navbar-nav navbar-right" v-show="isLogin">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{username}} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/user">个人中心</a></li>
                <li><a @click="logout">退出</a></li>
              </ul>
            </li>
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
        username: !sessionStorage.getItem("username") ? '': sessionStorage.getItem("username"),//初始值为空，有返回时为用户名
      }
    },
    watch: {
      '$route' (to, from) {
        this.$router.go(0);
      }
    },
   /* beforeCreate(){
      var user= !sessionStorage.getItem("username")? '': sessionStorage.getItem("username");
      console.log("123执行");
    },*/
    created(){
      this.data();
    },
    computed: {
      isLogin () {
        return sessionStorage.getItem("username");
      }
    },
    methods: {
      logClick () {
        this.$router.push({path: '/login'});
      },
      logout() {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("username")
        sessionStorage.removeItem("loginuser")
        this.$router.push({path: '/'});
      },
      showMenu(){
        console.log(this.$refs.navList);
        if(this.$refs.navList.style.display=="inline-block")
          this.$refs.navList.style.display="none";
        else this.$refs.navList.style.display="inline-block";

      },
    }

  }
</script>


