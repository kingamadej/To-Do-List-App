import { createRouter, createWebHistory } from 'vue-router'
import SettingsPage from './components/SettingsPage.vue'
import HomePage from './components/HomePage.vue'
import HelpPage from './components/HelpPage.vue'
import LoginPage from './components/LoginPage.vue'
import RegisterPage from './components/RegisterPage.vue'
import ResetPage from './components/ResetPage.vue'
import NewTaskPage from './components/NewTaskPage.vue'
import SearchPage from './components/SearchPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/settings', component: SettingsPage },
  { path: '/help', component: HelpPage },
  { path: '/login', component: LoginPage },
  { path: '/register', component: RegisterPage },
  { path: '/reset', component: ResetPage },
  { path: '/new-task', component: NewTaskPage },
  { path: '/search', component: SearchPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
