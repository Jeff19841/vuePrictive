import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodoListTemplateView from "@/views/TodoListTemplateView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/TodoListTemplateView",
      name: "TodoListTemplateView",
      component: TodoListTemplateView,
    },
  ],
});

export default router;
