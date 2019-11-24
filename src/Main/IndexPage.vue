<template>
  <div class="index">
    <Header></Header>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>概览</span>
      </div>
      <div style="display: block">
        <el-row>
          <el-col :xs="24" :sm="24" :md="6" lg="6" xl="6" :span="6">
            <el-menu
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-menu-item height:60px>
                <span slot="title" style="text-align:center;font-family: Microsoft YaHei;font-size:30px">Knowmap</span>
              </el-menu-item>

              <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title">精确解析</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title">智能适配</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title">轻松阅览</span>
              </el-menu-item>
              <el-menu-item>
                <el-link type="primary" href="/management">查看我的历史论文>></el-link>
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col class="slid" :xs="24" :sm="24" :md="16" lg="16" xl="16" >
            <template>
              <el-carousel height="'600px" class="grid-content">
                <el-carousel-item v-for="item in imgList" :key="item.id">
                  <el-col :span="24"><img ref="imgHeight" :src="item.idView" class="banner_img"/></el-col>
                </el-carousel-item>
              </el-carousel>
            </template>
          </el-col>
        </el-row>
      </div>
    </el-card>

    <div class="line" style="height: 20px"></div>
    <el-card style="border-radius: 0;align-content: center">
      <div slot="header">
        <span>特点</span>
      </div>
    <el-row>
      <el-col class="box-cards" :xs="24" :sm="24" :md="7" lg="7" xl="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>精确解析</span>
          </div>
          <div>您应该阅读全文，特别是，如果您最近才对笔记本电脑产生兴趣或仅仅是一位初学者的话。如果在您第一次阅读后有不懂的地方，请不必担心，将这本说明书放在计算机旁，边用边学。
            无论您的电脑操作水平如何，请注意被标记的警告和安全信息，同时请注意前言中的安全信息。您应该阅读全文，特别是，如果您最近才对笔记本电脑产生兴趣或仅仅是一位初学者的话。如果在您第一次阅读后有不懂的地方，请不必担心，将这本说明书放在计算机旁，边用边学。
            无论您的电脑操作水平如何，请注意被标记的警告和安全信息，同时请注意前言中的安全信息。</div>
        </el-card>
      </el-col>
      <el-col class="box-cards" :xs="24" :sm="24" :md="7" lg="7" xl="7">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>智能适配</span>
        </div>
        <div>您应该阅读全文，特别是，如果您最近才对笔记本电脑产生兴趣或仅仅是一位初学者的话。如果在您第一次阅读后有不懂的地方，请不必担心，将这本说明书放在计算机旁，边用边学。
          无论您的电脑操作水平如何，请注意被标记的警告和安全信息，同时请注意前言中的安全信息。您应该阅读全文，特别是，如果您最近才对笔记本电脑产生兴趣或仅仅是一位初学者的话。如果在您第一次阅读后有不懂的地方，请不必担心，将这本说明书放在计算机旁，边用边学。
          无论您的电脑操作水平如何，请注意被标记的警告和安全信息，同时请注意前言中的安全信息。</div>
      </el-card>
      </el-col>
      <el-col class="box-cards" :xs="24" :sm="24" :md="7" lg="7" xl="7">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>轻松阅览</span>
        </div>
        <div>您应该阅读全文，特别是，如果您最近才对笔记本电脑产生兴趣或仅仅是一位初学者的话。如果在您第一次阅读后有不懂的地方，请不必担心，将这本说明书放在计算机旁，边用边学。
          无论您的电脑操作水平如何，请注意被标记的警告和安全信息，同时请注意前言中的安全信息。您应该阅读全文，特别是，如果您最近才对笔记本电脑产生兴趣或仅仅是一位初学者的话。如果在您第一次阅读后有不懂的地方，请不必担心，将这本说明书放在计算机旁，边用边学。
          无论您的电脑操作水平如何，请注意被标记的警告和安全信息，同时请注意前言中的安全信息。</div>
      </el-card>
      </el-col>
    </el-row>
    </el-card>
    <div class="line" style="height: 20px"></div>

  </div>

</template>

<script>
  import Header from '@/components/Header'
  import Foot from '@/components/Foot'
  import Logo from '@/assets/logo.png'
  import jpg from '@/assets/slideShow/pic1.jpg'


  export default {
    name: 'IndexPage',
    components: {Header, Foot},

    created(){
      this.getdata();
    },
    data () {
      return {
        logo: Logo,
        jpg: jpg,
        imgList: [
          {id: 0, idView: require('../assets/slideShow/pic1.jpg')},
          {id: 1, name: '详情', idView: require('../assets/slideShow/pic2.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/slideShow/pic3.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/slideShow/pic4.jpg')},
        ],
        data: []
      }

    }
  }
</script>

<style scoped>
  .index{
    padding:0px;
  }
  .box-cards{
    height:300px;
  }
  el-row {
    margin-bottom: 10px;
  }
  .el-col {
    border-radius: 4px;
    margin-left: 30px;
  }
  /*媒体查询*/
  /*屏幕宽度小于878px的时候执行里面的css*/

  @media only screen and (max-width: 878px) {
    .slid{
      margin-top: 20px;
    }
  }
</style>
