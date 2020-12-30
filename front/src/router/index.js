import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Curses_dashboard from  '../views/Courses_dash'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/curses',
    name: 'Curses dashboard',
    component: Curses_dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
