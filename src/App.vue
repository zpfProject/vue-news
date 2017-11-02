<template>
  <div id="app">
  	<!-- 新闻导航 -->
  	<news-nav></news-nav>
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import newsNav from '@/components/news-nav'
import bottomNav from '@/components/bottom-nav'
export default {
  components: {
  	newsNav,
    bottomNav
  },
  created() {
  	console.log(this.$route)
  }
}
</script>

<style>
  .newsContent img{
    width: 90%;
    margin: 0 auto;
    display: block;
  }
</style>
