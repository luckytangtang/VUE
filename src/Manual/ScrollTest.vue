<template>
<analysis-test :docId="docId" :pageId="pageId" :pageIndex="pageIndex"></analysis-test>
</template>

<script>
  import AnalysisTest from '@/Manual/AnalysisTest'
  export default {
    components:{AnalysisTest},
    name: 'ScrollTest',
    data(){
      return {
        docId:'',
        pageId:'',
        pageIndex:''

      }
    },
    activated () {
    /* this.docId=this.$route.query.docId
      this.pageId=this.$route.query.pageId
      this.pageIndex=this.$route.query.pageIndex
      console.log(this.docId+"kkkkkkkkkkkkk")
      let blockOrder=this.$route.query.blockOrder+'';
      let toElement=document.getElementById(blockOrder)
      console.log(toElement)
      console.log("进来了这个页")
      if(blockOrder){
        toElement.scrollIntoView()
      }*/

    }
  }
</script>

<style scoped>

</style>
