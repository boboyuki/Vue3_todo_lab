import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@pages/HomePage/Index.vue'
import TodoPage from '@pages/TodoPage/Index.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { 
        path: "/",
        component: HomePage
    },
    {
        path: "/todo",
        component: TodoPage
    
    }
  ],
});

export default router