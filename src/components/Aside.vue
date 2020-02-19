<template id='asidebar'>
  <div>
    1
  </div>
</template>

<script>
  export default {
    name:Aside,
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: auto;
  }
</style>
