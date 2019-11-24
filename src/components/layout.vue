<template>
  <div>
    <!--头部-->
<!--    <div>-->
<!--      <Header></Header>-->
<!--    </div>-->
    <div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
<!--    <div>-->
<!--      <Foot></Foot>-->
<!--    </div>-->
  </div>
</template>

<script>

  import Header from '@/components/Header'
  import Foot from '@/components/Foot'

  export default {
    name: 'Layout',
    components: {Header, Foot}
  }
</script>

<style>

</style>
