import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const routes = [
  {
    path: '/',
    component: MainLayout, // 공통 레이아웃
    children: [
      {
        path: '', // 기본 경로 (Home)
        name: 'home',
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('@/views/AboutView.vue')
      },
      {
        path: 'board/BoardList',
        name: 'BoardList',
        component: () => import('@/views/board/BoardList.vue')
      },
      {
        path: 'board/AgGridPage',
        name: 'AgGridPage',
        component: () => import('@/views/board/AgGridPage.vue')
      }
      // {
      //   path: 'dashboard',
      //   name: 'dashboard',
      //   component: () => import('@/views/DashboardView.vue')
      // },
      // {
      //   path: 'settings',
      //   name: 'settings',
      //   component: () => import('@/views/SettingsView.vue')
      // }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
