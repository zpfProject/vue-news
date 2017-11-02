<template>
	<div class="container" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100">
    <ul>
      <li><router-link to="/NewsList/tt">头条</router-link></li>
      <li><router-link to="/NewsList/yl">娱乐</router-link></li>
      <li><router-link to="/NewsList/js">军事</router-link></li>
      <li><router-link to="/NewsList/ty">体育</router-link></li>
      <li><router-link to="/NewsList/kj">科技</router-link></li>
      <li><router-link to="/NewsList/nx">女性</router-link></li>
      <li><router-link to="/NewsList/jk">健康</router-link></li>
    </ul>
    <div class="wrap" v-for="(item, index) in newsList">
        <div class="content" v-if="item.pic === ''">
          <router-link id="routerlinka" :to="'/NewsList/' + item.category + '/' + index"> {{ item.title }} </router-link>
          <p>
            <span> {{ item.src }} </span>
            <span> {{ item.time }} </span>
          </p>
        </div>
        <div class="contentpic" v-else>
          <div class="left">
            <router-link id="routerlinka" :to="'/NewsList/' + item.category + '/'+ index"> {{ item.title }} </router-link>
            <p>
              <span> {{ item.src }} </span>
              <span> {{ item.time }} </span>
            </p>
          </div>
          <div class="right">
          <router-link id="routerlinka" :to="'/NewsList/' + item.category + '/'+ index"> 
            <img v-lazy="item.pic" alt="">
            </router-link>
          </div>
        </div>
    </div>
    <!-- <h2 @click="loadmore" v-else-if="newsList.length">点击加载更多...</h2> -->

    <!-- 正在加载 loading 状态 -->
    <!-- <img :src="require('@/assets/imgs/loading.gif')" alt=""> -->
    <!-- <div class="loading" v-show="isloadmore">
      <img :src="require('@/assets/imgs/loading.gif')" alt="">
    </div> -->

    <div class="isloadmore" v-show="loading">
      <img :src="require('@/assets/imgs/loading.gif')" alt="">
    </div>
    
	  <!-- 该位置有一个loading组件 -->
	  <!-- <router-view></router-view> -->
	</div>
</template>
<script>
  // import {mapState} from 'vuex'
  // 引入请求数据的方法
  import { getNewsList } from '@/common/js/getData'
  let num = 0;

  export default {
    data () {
      return {
        newsList: [],
        isloadmore: false,
        loading: false
      }
    },
    // 该位置created只实例化一遍
    created () {
      // this._getNewsList()
    },
    // deactivated () {
    //   this._getNewsList()
    // },
    methods: {
      _getNewsList () {
        // 读取本地的todoLists
        // let newsLists = JSON.parse(localStorage.getItem(''+this.$route.params.type+''))
        // 定义参数
        let paramstype;
        switch(this.$route.params.type)
        {
          case 'tt':
          paramstype = '头条';
          break;
          case 'yl':
          paramstype = '娱乐';
          break;
          case 'js':
          paramstype = '军事';
          break;
          case 'ty':
          paramstype = '体育';
          break;
          case 'kj':
          paramstype = '科技';
          break;
          case 'nx':
          paramstype = '女性';
          break;
          case 'jk':
          paramstype = '健康';
          break;
        }
        let params = {
          channel: paramstype,
          start: num==1?'0': num*10,
        }

        getNewsList(params).then((res) => {
          if (res.status === 200 && res.data.result.result.list.length) {
            // console.log(res.data.result.result.list[0].content)
            // console.log(res.data.result.result.list)
            if(num == 1) {
              this.newsList = res.data.result.result.list
            }else {
              // this.isloadmore = ['1']
              let newl = this.newsList
              res.data.result.result.list.forEach(function(item) {
               newl.push(item)
             })
            }
            // this.setItem(this.$route.params.type)
          }
        }).catch((error) => {
          console.log(error)
        })
        
      },
      loadmore() {
          num++;
          // this.isloadmore = []
         this._getNewsList()
      },
      // 自定义存储localStorage的函数
      setItem: function(type) {
        // 将当前的数据存储到localStorage中
        localStorage.setItem(''+type+'', JSON.stringify(this.newsList))
      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          // // let last = this.list[this.list.length - 1];
          // for (let i = 1; i <= 10; i++) {
          //   // this.list.push(last + i);
          //   console.log(i);
          // }
          this.loadmore()
          this.loading = false;
        }, 2500);
      }
    },
    watch: {
      // 检测路由信息的变化，重新发送请求
      $route: function () {
        console.log(this.$route)
        this.newsList = []
        this.loading = true;
        this._getNewsList()
      }
    }
  }
</script>
<style scoped>
  .container{
    clear: both;
    margin-bottom: 3.5rem;
  }
  .container>.wrap{
    width: 100%;
    height: 6rem;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
  }
  .container>.wrap>.content{
    width: 94%;
    height: 6rem;
    /*background: red;*/
    letter-spacing: 0.05rem;
    margin: 0 auto;
    padding-top: 0.8rem;
    /*padding-bottom: 0.6rem;*/
  }
  .container>.wrap>.content>a{
    font-size: 1.2rem;
    color: #3E3E3E;
    text-decoration: none;
    line-height: 1.5rem;
    height:3rem;
    overflow: hidden;
  }
  .container>.wrap>.content>p{
    margin-top: 0.8rem;
    font-size: 0.6rem;
    color: #9E9E9E;
    border-bottom: 0.5rem;
  }
  .container>.wrap>.contentpic{
    width: 94%;
    height: 5rem;
    /*background: red;*/
    letter-spacing: 0.05rem;
    margin: 0 auto;
    padding-top: 0.8rem;
  }
  .container>.wrap>.contentpic>.left{
    width: 64%;
    height: 100%;
    float: left;
  }
  .container>.wrap>.contentpic>.left>a{
    font-size: 1.2rem;
    color: #3E3E3E;
    text-decoration: none;
    line-height: 1.5rem;
    height:3rem;
    overflow: hidden;
    display: block;
  }
  .container>.wrap>.contentpic>.left>p{
    margin-top: 0.8rem;
    font-size: 0.6rem;
    color: #9E9E9E;  
  }
  .container>.wrap>.contentpic>.right{
    width: 30%;
    height:100%;
    float:right;
  }
  .container>.wrap>.contentpic>.right img{
    width:100%;
    height: 92%;
  }
  .container>h2{
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    margin: 0.5rem 0;
  }
  
  /*新闻分类导航*/
  .container ul{
    width: 100%;
    height: 1.8rem;
    border-bottom: 0.01rem solid #f8f8f8;
    margin-top: 1.4rem;
  }
  .container ul li{
    float: left;
    width: 14%;
    /*padding: 0 0.9rem;*/
    text-align: center;
    /*border-bottom: 1px solid #ccc;*/
  }
  .container ul li a{
    font-size: 1rem;
    color: #000;
    text-decoration: none;
    font-weight: 500;
  }

  .container ul li a.router-link-active{
    color: #3678EE;
    font-weight: bold;
  }
  .loading{
    width: 6rem;
    margin: 0 auto;
    margin-top:10rem;
  }
  .loading>img{
    width: 100%;
  }
  .isloadmore{
    width: 4rem;
    margin: 0 auto;
    margin-bottom: 2rem;
  }
  .isloadmore>img{
    width: 100%;
  }
</style>