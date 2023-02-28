import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {getAuth} from 'firebase/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/register",
      name: "register",
      component: () => import('../views/Register.vue')
    },
    {
      path: "/sign-in",
      name: "signin",
      component: () => import('../views/SignIn.vue')
    },
    {
      path: "/feed",
      name: "feed",
      component: () => import('../views/Feed.vue'),
      meta: {
        requiresAuth: true
      }
    }
  ]
})


router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(getAuth().current){
      alert(" You dont have access");
      next('/');
    }
  }else{
    next();
  }
})
export default router
