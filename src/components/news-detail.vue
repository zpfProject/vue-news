<template>
  <div id="detail">
    <nav id="nav">
      <mt-header fixed class="mtheader" title="每日必看">
        <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
      </mt-header> 
    </nav> 
    <div class="content" v-for="item in newsList">
      <h3> {{ item.title }} </h3>
      <div class="newsContent" v-html="item.content">
        {{ item.content }}
      </div>
      <img class="imgpic" :src="item.pic" alt="">
    </div>
    <div class="loading" v-show="!newsList.length">
      <img :src="require('@/assets/imgs/loading.gif')" alt="">
    </div>
  </div>   
</template>

<script>
  // 引入请求数据的方法
  import { getNewsList } from '@/common/js/getData'
  export default {
    data () {
      return {
        newsList:[],
        arr: []
      }
    },
    created () {
      // console.log(this.$parent.$route.path)
      let str = this.$parent.$route.path;
      this.arr = str.split("/")
      this._getNewsList()
      console.log(this.newsList)
    },
    watch: {
      $route: function(){
        this._getNewsList()
      }
    },
    methods: {
      _getNewsList () {
        let paramstype;
        switch(this.arr[2])
        {
          case 'news':
          paramstype = '头条';
          break;
          case 'ent':
          paramstype = '娱乐';
          break;
          case 'mil':
          paramstype = '军事';
          break;
          case 'sports':
          paramstype = '体育';
          break;
          case 'tech':
          paramstype = '科技';
          break;
          case 'eladies':
          paramstype = '女性';
          break;
          case 'health':
          paramstype = '健康';
          break;
        }
        let params = {
          channel: paramstype,
          num: 1,
          start: this.arr[3]
        }
        getNewsList(params).then((res) => {
          if (res.status === 200 && res.data.result.result.list.length) {
            // console.log(res.data.result.result.list[0].content)
            console.log(res.data.result.result.list)
            this.newsList = res.data.result.result.list
          }
        }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style scoped>
  #detail{
    width: 100%;
    height: 100%;
    background: #fff;
    color: #000;
    position:absolute;
    left: 0;
    top: 0;
  }
  #nav>.mtheader{
    /*background:#3678EE;*/
    /*height: 3rem;*/
    /*font-size: 1.05rem;*/
  }
  #detail>h3{
    margin-top: 3rem;
    text-align: center;
  }
  .content{
    width: 100%;
    /*margin-bottom: 5rem;*/
    padding-bottom: 5rem;
  }
  .content h3{
    width: 95%;
    margin: 0 auto;
    margin-top: 3.5rem;
    font-size: 1.3rem;
    line-height: 1.5rem;
    letter-spacing:0.1rem;
  }
  .newsContent{
    width: 95%;
    margin: 0 auto;
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 2rem;
  }
  .imgpic{
    width: 90%;
    margin: 0 auto;
    display: block;
  }
  .loading{
    width: 6rem;
    margin: 0 auto;
    margin-top:10rem;
  }
  .loading>img{
    width: 100%;
    height: 80%
  }
  /*#app>footer>ul>li>a{
    color: red;
  }*/
</style>