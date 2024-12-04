import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Explanation from './components/Explanation.vue';

const routes = [
    { path: '/', component: Home },  
    { path: '/explanation/:index', component: Explanation, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
