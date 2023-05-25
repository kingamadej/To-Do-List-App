import { createRouter, createWebHistory } from 'vue-router'
import SettingsPage from './components/SettingsPage.vue'
import HomePage from './components/HomePage.vue'
import HelpPage from './components/HelpPage.vue'
import LoginPage from './components/LoginPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/settings', component: SettingsPage },
  { path: '/help', component: HelpPage },
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
