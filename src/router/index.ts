import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/assets/views/HomeView.vue'
import AboutView from '@/assets/views/AboutView.vue'
import ContactView from '@/assets/views/ContactView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    }
  ],
})

export default router
