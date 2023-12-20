import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CekDaftar from "../views/CekStatus.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "Daftar",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/status",
      name: "status",
      component: CekDaftar,
    },
  ],
});

export default router;
