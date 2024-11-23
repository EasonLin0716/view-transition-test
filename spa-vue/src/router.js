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
  const viewTransition = document.startViewTransition(() => {
    next()
  })
  viewTransition.ready.then(() => {
    console.log('ready resolved')
  })
  viewTransition.updateCallbackDone.then(() => {
    console.log('updateCallbackDone resolved')
  })
  viewTransition.finished.then(() => {
    console.log('finished resolved')
  })
})

export default router