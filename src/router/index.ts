import { createRouter, createWebHistory } from 'vue-router'
import GuestRoutes from './guest/guest'
import ErrorsRoutes from './errors'

import ItemRoutes from './admin/item'

const routes = [
    ...GuestRoutes,
    ...ErrorsRoutes,
    ...ItemRoutes,
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router