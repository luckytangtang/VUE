<template>
  <div>
    <Header></Header>
    <div :gutter="10" style="height:">
      <el-col :span="3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div>
          概况
          <el-row :gutter="20">
            <el-col :span="6">
              <div class="grid-content ">
                <div style="padding: 10px;background: #673AB7">
                  <i class="el-icon-location-outline index-icon"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">
                <div style="padding: 10px;background: #3c8dbc">
                  <i class="el-icon-picture index-icon"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!
                </div>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content ">
                <div style="padding: 10px;background: #009688">
                  <i class="el-icon-service index-icon"></i>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div>
          步骤
        </div>
      </el-col>
    </div>
<!--    <div class="Aside" style="display: inline">-->
<!--&lt;!&ndash;      <el-col :xs="24" :sm="24" :md="3" lg="3" xl="3" :span="3">&ndash;&gt;-->
<!--        <el-menu-->
<!--          default-active="2"-->
<!--          class="el-menu-vertical-demo"-->
<!--          @open="handleOpen"-->
<!--          @close="handleClose"-->
<!--          background-color="#545c64"-->
<!--          text-color="#fff"-->
<!--          active-text-color="#ffd04b">-->
<!--          <el-submenu index="1">-->
<!--            <template slot="title">-->
<!--              <i class="el-icon-location"></i>-->
<!--              <span>导航一</span>-->
<!--            </template>-->
<!--            <el-menu-item-group>-->
<!--              <template slot="title">分组一</template>-->
<!--              <el-menu-item index="1-1">选项1</el-menu-item>-->
<!--              <el-menu-item index="1-2">选项2</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-menu-item-group title="分组2">-->
<!--              <el-menu-item index="1-3">选项3</el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--            <el-submenu index="1-4">-->
<!--              <template slot="title">选项4</template>-->
<!--              <el-menu-item index="1-4-1">选项1</el-menu-item>-->
<!--            </el-submenu>-->
<!--          </el-submenu>-->
<!--          <el-menu-item index="2">-->
<!--            <i class="el-icon-menu"></i>-->
<!--            <span slot="title">导航二</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="3" disabled>-->
<!--            <i class="el-icon-document"></i>-->
<!--            <span slot="title">导航三</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="4">-->
<!--            <i class="el-icon-setting"></i>-->
<!--            <span slot="title">导航四</span>-->
<!--          </el-menu-item>-->
<!--        </el-menu>-->
<!--&lt;!&ndash;      </el-col>&ndash;&gt;-->
<!--    </div>-->
<!--    <div class="Body">-->
<!--                      <div style="float:left;">-->

<!--                        <div style="padding: 10px;background: #673AB7">-->
<!--                          <i class="el-icon-location-outline index-icon"></i><span>精确解析</span>-->
<!--                          <div>-->
<!--                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!-->
<!--                          </div>-->
<!--                          </div>-->
<!--                      </div>-->

<!--                      <div style="float:left;">-->
<!--                        <div style="padding: 10px;background: #3c8dbc">-->
<!--                          <i class="el-icon-picture index-icon"></i><span>精确解析</span>-->
<!--                          <div>-->
<!--                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!-->
<!--                          </div>-->
<!--                          </div>-->
<!--                      </div>-->


<!--                      <div style="float:left;">-->
<!--                        <div style="padding: 10px;background: #009688">-->
<!--                          <i class="el-icon-service index-icon"></i><span>精确解析</span>-->
<!--                         <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!-->
<!--                         </div>-->
<!--                        </div>-->
<!--                      </div>-->

<!--    <el-card style="border-radius: 0;display: inline" >-->
<!--      <div slot="header">-->
<!--        <span>概况</span>-->
<!--      </div>-->
<!--      <div class="demo">-->
<!--        <el-row :gutter="10">-->
<!--          <el-col :span="6">-->
<!--            <div class="grid-content ">-->

<!--              <div style="padding: 10px;background: #673AB7">-->
<!--                <i class="el-icon-location-outline index-icon"></i><span>精确解析</span>-->
<!--                <div>-->
<!--                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!-->
<!--                </div>-->
<!--                </div>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <div class="grid-content ">-->
<!--              <div style="padding: 10px;background: #3c8dbc">-->
<!--                <i class="el-icon-picture index-icon"></i><span>精确解析</span>-->
<!--                <div>-->
<!--                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!-->
<!--                </div>-->
<!--                </div>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <div class="grid-content ">-->
<!--              <div style="padding: 10px;background: #009688">-->
<!--                <i class="el-icon-service index-icon"></i><span>精确解析</span>-->
<!--               <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!-->
<!--               </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <div class="grid-content ">-->
<!--              <div style="padding: 10px;background: #607D8B">-->
<!--                <i class="el-icon-bell index-icon"></i><span>精确解析</span>-->
<!--                <div>-->
<!--                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum enim fugiat illum iusto minus modi nam natus nisi sequi!-->
<!--                </div>-->
<!--                </div>-->
<!--            </div>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </div>-->
<!--    </el-card>-->
<!--    <br>-->
<!--    <el-card style="border-radius: 0">-->
<!--      <div slot="header">-->
<!--        <span>步骤</span>-->
<!--      </div>-->
<!--          <div style="display: block">-->
<!--            <el-steps :active="4">-->
<!--              <el-step title="步骤 1" description="上传原始论文"></el-step>-->
<!--              <el-step title="步骤 2" description="解析论文结构"></el-step>-->
<!--              <el-step title="步骤 3" description="重适配论文"></el-step>-->
<!--              <el-step title="步骤 4" description="用户操作论文"></el-step>-->
<!--            </el-steps>-->
<!--          </div>-->
<!--    </el-card>-->
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import Foot from '@/components/Foot'
  export default {
    name:'index',
    components: {Header, Foot},
    data() {
      return {
        imgList: [
          {id: 0, idView: require('../assets/slideShow/pic1.jpg')},
          {id: 1, name: '详情', idView: require('../assets/slideShow/pic2.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/slideShow/pic3.jpg')},
          {id: 2, name: '推荐', idView: require('../assets/slideShow/pic4.jpg')},
        ],
        elRate: 2,
        selectedOptions: [],
        num: '',
        dateVal: '',
      }
    },
    methods: {
      open() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success'
            });
          }
        });
      }
    },
    mounted: function () {

    }
  }
</script>
<style lang="less">
  .demo{
    margin: 10px;
    .grid-content {
      border-radius: 4px;
      overflow: hidden;
      color: #fff;
      background: #d3dce6;
      .index-icon{
        font-size: 82px;
        color: #fff;
      }
    }
  }
</style>
