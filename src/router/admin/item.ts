import { RouteRecordRaw } from 'vue-router'
import Category from '@/views/admin/Item/Category.vue'
const ItemsRoutes: Array<RouteRecordRaw> = [
    {
        path: '/category',
        name: 'Category',
        component: Category,
    }
]

export default ItemsRoutes