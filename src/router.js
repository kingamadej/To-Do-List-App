import { createRouter, createWebHistory } from 'vue-router'
import SettingsPage from './components/SettingsPage.vue'
import HomePage from './components/HomePage.vue'
import HelpPage from './components/HelpPage.vue'
import LoginPage from './components/LoginPage.vue'
import NewTaskPage from './components/NewTaskPage.vue'
import SearchPage from './components/SearchPage.vue'
import EditTaskPage from './components/EditTaskPage.vue'
import NotesPage from './components/NotesPage.vue'
import NewNotePage from './components/NewNotePage.vue'
import RegisterPage from './components/RegisterPage.vue'
import ResetPage from './components/ResetPage.vue'

const routes = [
  { path: '/tasks', component: HomePage },
  { path: '/settings', component: SettingsPage },
  { path: '/help', component: HelpPage },
  { path: '/', component: LoginPage },
  { path: '/new-task', component: NewTaskPage },
  { path: '/search', component: SearchPage },
  { path: '/edit-task', component: EditTaskPage },
  { path: '/notes', component: NotesPage },
  { path: '/new-note', component: NewNotePage },
   { path: '/register', component: RegisterPage },
  { path: '/reset', component: ResetPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
