import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ReportTable from './views/ReportTable.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/report',
    name: 'report',
    component: ReportTable
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
