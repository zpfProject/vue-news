import Vue from 'vue'
import Router from 'vue-router'

import NewsList from '@/components/news-list'
import NewsDetail from '@/components/news-detail'
import Weather from '@/components/Weather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/NewsList/:type',
      component: NewsList
    },
    {
      path: '/NewsList/:type/:id',
      component: NewsDetail
    },
    // {
    //   path: '/NewsList/',
    //   component: NewsList
    // },
    {
      path: '/Weather/',
      component: Weather
    },
    {
      path: '/*',
      redirect: '/NewsList/tt'
    }
  ]
})
