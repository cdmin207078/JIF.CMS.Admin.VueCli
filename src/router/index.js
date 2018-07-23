import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import News from '@/components/News'
import Player from '@/components/Player'
import PlayerProfile from '@/components/Player/Profile'
import PlayerStats from '@/components/Player/Stats'

import DashBoardIndex from '@/components/dashboard/Index'
import ArticleIndex from '@/components/article/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: DashBoardIndex
    },
    {
      path: '/article',
      name: 'Article',
      component: ArticleIndex
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/player/:uid',
      name: 'Player',
      component: Player,
      children: [
        {
          path: 'profile',
          component: PlayerProfile
        },
        {
          path: 'stats',
          component: PlayerStats
        }
      ]
    }
  ]
})
