import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../Layout/index.vue';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: {
      name: 'home'
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/article/:id',
        name: 'articleDetail',
        component: () => import('../views/article/index.vue')
      }
    ],
  },
  {
    path: '/love',
    name: 'love',
    component: () => import('../views/mylove/index.vue')
  }
  // {
  //   path: '/:pathMatch(.*)',
  //   redirect: {
  //     name: 'home'
  //   },
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router