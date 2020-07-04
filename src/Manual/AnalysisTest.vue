<template>
  <div class="content" v-html="URL"></div>
</template>

<script>
  import axios from 'axios';
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
        var sct="<script type='text/javascript'>"+"window.addEventListener('popstate', function(e) {alert('返回')}, false);"+"<"+"/script>"
        var pdfHead="<html>\n" +
          "<head>\n" +
         '<meta content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no" name="viewport"> \n'+
          "<meta charset=\"utf-8\"> \n" +
          "<title>test</title>\n" +
          "<style type='text/css'>"+"img{height: auto; width: auto\\9; width:100%;}"+"</style>"+
           pdfCss+sct+
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
      if (window.history && window.history.pushState) {

      //  history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
      }
    },

   destroyed(){
      window.removeEventListener('popstate', this.goBack, false);
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
      },
     goBack(){
        console.log(2324544)
        document.querySelector('meta[name="viewport"]').setAttribute('content','width=device-width,initial-scale=1.0'+ ',minimum-scale=1.0'+ ',maximum-scale=1.0' + ',user-scalable=no');
     //   this.$router.replace({path: '/ltt'});
        //replace替换原路由，作用是避免回退死循环
      }
    }
  }
</script>

<style scoped>

</style>
