import * as VueRouter from 'vue-router'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('./views/Home.vue')
    }
  ]
})

export default router
