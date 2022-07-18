import { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const HomePage = () => import('./pages/HomePage/HomePage.vue');

class Route {
  path: string;
  component: Component;

  constructor(path: string, component: Component) {
    this.path = path;
    this.component = component;
  }

  get name() {
    return this.path
      .split('')
      .map((char: string, index: number) => {
        if (char === '/' && index === 0) return '';
        if (char === '/') return '-';
        if (char === ':') return '';
        return char;
      })
      .join('');
  }
}

const routes = [new Route('/', HomePage)];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
