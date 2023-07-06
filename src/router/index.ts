import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '../layout/index.vue';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
              path: '/home',
              component: () => import('@/views/index.vue'),
              name: 'Index',
              meta: { title: '首页', icon: 'dashboard', affix: true }
            }
          ]
      },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;