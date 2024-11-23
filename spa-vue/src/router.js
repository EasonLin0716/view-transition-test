import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import ContactView from './components/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach((before, after, next) => {
  document.startViewTransition(() => {
    next()
  })
})

export default router