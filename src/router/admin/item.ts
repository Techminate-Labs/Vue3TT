import { RouteRecordRaw } from 'vue-router'
import CategoryList from '@/views/admin/item/Category.vue'

const ItemsRoutes: Array<RouteRecordRaw> = [
    {
        path: '/category',
        name: 'Category',
        component: CategoryList,
    }
]

export default ItemsRoutes