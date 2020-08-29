import * as VueRouter from 'vue-router'
import Home from '@/views/Home'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    }
  ]
})

export default router
