import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '@/views/ProductsPage.vue';

// Even though there is only one route for now, I have added the router since the requirements mention that this is "the foundation of a larger project"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/products',
            name: 'Products',
            component: ProductsPage,
        },  
        {
            path: '/',
            redirect: '/products',
        }
    ]
});

  
export default router