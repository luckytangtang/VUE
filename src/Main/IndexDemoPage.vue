<template>
  <div class="index">
    <Header></Header>
    <el-card style="border-radius: 0">
      <div slot="header">
        <span>OVERVIEW</span>
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
                <span slot="title">ACCURATE ANALYTICAL</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title">INTELLIGENT ADAPTER</span>
              </el-menu-item>
              <el-menu-item>
                <i class="el-icon-menu"></i>
                <span slot="title">READING</span>
              </el-menu-item>
              <el-menu-item>
                <el-link type="primary" href="/management">Uploaded papers>></el-link>
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
        <span>FEATURE</span>
      </div>
    <el-row>
      <el-col class="box-cards" :xs="24" :sm="24" :md="7" lg="7" xl="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>ACCURATE ANALYTICAL</span>
          </div>
          <div>You can upload the paper, the structure of the paper to parse, through the papers you uploaded, our system can process,
            this paper obtained the paper images and text, the thesis analysis, the paper according to the area, you can view by clicking on the reading the resolved every piece effect,
            after parsing the thesis data, you can to rearrange the information, and then get a better structure.When you get these parsed papers, you can process the data, for example, you can parse several similar papers to get the characteristics of this type of paper, or you can extract relevant abstracts.
          </div>
        </el-card>
      </el-col>
      <el-col class="box-cards" :xs="24" :sm="24" :md="7" lg="7" xl="7">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>INTELLIGENT ADAPTER</span>
        </div>
        <div>When we parse the paper, because there may be many formats of the paper, a single algorithm cannot parse all the papers. If some papers are not parsed accurately, the data of the parsed block will be incomplete or missing, which will greatly affect our reading experience.Therefore, when the data analysis of the paper is not accurate, we need to re-adjust the parsed paper block,
          by adjusting the size of each area, so as to make the best analysis effect of the paper。Intelligent adaptation will enable us to get more accurate values of the paper data, and all the papers can get ideal results.
        </div>
      </el-card>
      </el-col>
      <el-col class="box-cards" :xs="24" :sm="24" :md="7" lg="7" xl="7">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>READING</span>
        </div>
        <div>After analyzing the paper, we can see the structure of the rearranged paper.We can view our parsed paper data on the web page. When we click on a paper, we can see each box parsed. By clicking the button in the box, we can easily view the parsed content of this block.Of course, when we use the mobile phone to view the data of a paper that has been parsed, it will be more convenient, because the information of the paper has been parsed, it will be more convenient for us to read through the small screen,
          so that we can easily read the data of the paper, which is very suitable for our small screen reading</div>
      </el-card>
      </el-col>
    </el-row>
    </el-card>
    <div class="line" style="height: 20px"></div>

  </div>

</template>

<script>
  import Header from '@/components/HeaderDemo'
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
