import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "page-home",
    component: () => import("@/views/home.vue")
  },
  {
    path: "/blog",
    name: "page-blog",
    component: () => import("@/views/blog.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
