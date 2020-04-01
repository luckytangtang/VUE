<template>
  <div class="content" v-html="URL"></div>
</template>

<script>
  import axios from 'axios';
  import qs from  'Qs';
  export default {
    name: 'AnalysisTest',
    data(){
      return{
        URL:'',
      }
    },
    props:{
      docId:String,
      pageId:String,
      pageIndex:String

    },
    activated () {
      console.log(this.$route.query.docId+'dddddddddddddddddddddd')
      var url=this.apiUrl+'/commonFile/getResetHtml'
      axios.get(url+"?docId="+this.$route.query.docId+"&pageId="+this.$route.query.pageId+"&pageIndex="+this.$route.query.pageIndex
      ).then((res)=>{
     //   console.log(res.data)
        var pdfCss=sessionStorage.getItem("pdfCss")
        var pdfHead="<html>\n" +
          "<head>\n" +
          "<meta charset=\"utf-8\"> \n" +
          "<title>test</title>\n" +
           pdfCss+"\n" +
          "</head>\n" +
          "<body>"
         console.log(pdfHead)
        var url=pdfHead+res.data
        console.log(url)
        this.URL=url
        this.$nextTick(
          ()=>{this.getLocal()})
      }).catch(error=>{
        console.log(error);
      });
    },
    created () {
      this.$nextTick(()=>{this.getLocal()})
    },
    mounted () {
      let that=this;
      that.$nextTick(function () {
        window.addEventListener('scroll',that.handelScroll)
      })
    },
    methods:{
      getLocal(){
        let blockOrder=this.$route.query.blockOrder;
        console.log(blockOrder+"进来了")
        let toElement=document.getElementById(blockOrder+'')
        console.log(toElement)
        if(blockOrder){
          toElement.scrollIntoView()
        }
      }
    }
  }
</script>

<style scoped>

</style>
