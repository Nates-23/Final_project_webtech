import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Admissions from '@/views/Admissions.vue'
//finals programs requrement
import BSIT from '@/views/programs/BSIT.vue'
import BSCS from '@/views/programs/BSCS.vue'
import BSDMIA from '@/views/programs/BSDMIA.vue'
import BLIS from '@/views/programs/BLIS.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admissions',
      name: 'admissions',
      component: Admissions
    },
//progreams
    {
      path: '/programs/bsit',
      name: 'program-bsit',
      component: BSIT
    },
    {
      path: '/programs/bscs',
      name: 'program-bscs',
      component: BSCS
    },
    {
      path: '/programs/bsdmia',
      name: 'program-bsdmia',
      component: BSDMIA
    },
    {
      path: '/programs/blis',
      name: 'program-blis',
      component: BLIS
    }
  ],
//Scrollin gs
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
