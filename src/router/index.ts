import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import GuestRoutes from './guest/guest'
<<<<<<< HEAD


const routes = [
    ...GuestRoutes,
=======
import ErrorsRoutes from './errors'

const routes = [
    ...GuestRoutes,
    ...ErrorsRoutes,
>>>>>>> 6c76e0ef6791ee1ac9e25cae292cfdb73f0a7dab
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.state.user.isAuthenticated
    const hasToken = store.state.session.bearerToken.length

    if (to.meta.auth && !isAuthenticated) {
  	  next('/')
    } else if (to.name === "GuestLogin" && isAuthenticated && hasToken) {
        next('/dashboard')
    } else {
	    next()
    }

})

export default router