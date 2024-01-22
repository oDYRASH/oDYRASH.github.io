import { createRouter, createWebHistory } from 'vue-router'
import feed from '../views/feed.vue'
import login from '../views/login.vue'
import profile from '../views/profile.vue'
import makeapost from '../views/makeapost.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'feed',
      component: feed
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/makeapost',
      name: 'makeapost',
      component: makeapost
    }
  ]
})

export default router
