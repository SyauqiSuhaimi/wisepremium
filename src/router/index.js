import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConciergeView from '../views/ConciergeView.vue'
import ValueProgView from '../views/ValueProgView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import FAQView from '../views/FAQView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import TermsView from '../views/TermsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/concierge',
    name: 'concierge',
    component: ConciergeView
  },
  {
    path: '/valueProg',
    name: 'valueProg',
    component: ValueProgView
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: ContactUsView
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQView
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyView
  },
  {
    path: '/terms-condition',
    name: 'terms-condition',
    component: TermsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
