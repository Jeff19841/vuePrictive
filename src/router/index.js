import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TodoListView from "@/views/TodoListView.vue";
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
      path: "/TodoListView",
      name: "TodoListView",
      component: TodoListView,
    },
    {
      path: "/TodoListTemplateView",
      name: "TodoListTemplateView",
      component: TodoListTemplateView,
    },
  ],
});

export default router;
