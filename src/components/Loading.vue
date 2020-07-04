<template>
  <div class="loading">
    <div class="loading-img">
      <i class="el-icon-loading"></i>
        <span>Loading</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style scoped>
  .loading-img{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    width: 100px;
    height: 100px;
    margin: auto;
    font-size: 50px;
  }
  .loading{
    background: #6E6E6E;
    opacity: 0.5;
  }
  .el-icon-loading{
    size: A5;
  }
</style>
