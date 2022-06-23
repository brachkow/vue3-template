import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('./pages/HomePage/HomePage.vue');

const routes = [{ path: '/', component: HomePage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
