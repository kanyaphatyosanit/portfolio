import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Activity from '../views/Activity.vue'
import Certificate from '../views/Certificate.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/Certificate',
      name: 'Certificate',
      component: Certificate
    },
  ]
})

export default router
