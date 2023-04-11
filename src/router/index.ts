import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue')
    },
    {
      path: '/create-topic',
      name: 'create-topic',
      component: () => import('../views/CreateTopicView.vue')
    },
    {
      path: '/topic',
      name: 'topic',
      component: () => import('../views/TopicView.vue')
    }
  ]
})

export default router
