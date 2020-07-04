<template>
  <div>
    <el-menu :default-active="activeIndex"  background-color="#545c64"
             text-color="#fff"
             active-text-color="#ffd04b" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <a class="navbar-brand" href="#">Knowmap</a>
      </el-menu-item>

      <el-menu-item index="4" aria-colspan="4" style="padding-left: 5.5rem">
        <router-link to="/demopaperList">
          LIST OF PARSED PAPERS <span class="sr-only">(current)</span>
        </router-link>
      </el-menu-item>

      <el-submenu index="6"  class="nav navbar-nav navbar-right" style="" v-show="isLogin">
        <template slot="title">
            {{username}}
        </template>
        <el-menu-item index="6-1">
          <router-link to="/userdemo">Personal</router-link>
        </el-menu-item>
        <el-menu-item index="6-2">
          <a @click="logout">Exit</a>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style>
  .object{

  }
</style>
<script>
  import Logo from '@/assets/logo.png'
  export default {
    name: 'HeaderDemo.vue',
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
        console.log(32323)
        console.log(this.$refs.navList);
        if(this.$refs.navList.style.display=="inline-block")
          this.$refs.navList.style.display="none";
        else this.$refs.navList.style.display="inline-block";

      },
    }

  }
</script>


