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
  },
  {
    path: "/blog/:id",
    name: "page-blog_id",
    component: () => import("@/views/blog_id.vue")
  },
  {
    path: "/contact",
    name: "page-contact",
    component: () => import("@/views/contact.vue")
  },
  {
    path: "/about",
    name: "page-about",
    component: () => import("@/views/about.vue")
  },
  {
    path: "/gallery",
    name: "page-gallery",
    component: () => import("@/views/gallery.vue")
  },
  {
    path: "/service",
    name: "page-service",
    component: () => import("@/views/service.vue")
  },
  {
    path: "/service/:id",
    name: "page-service_id",
    component: () => import("@/views/service_id.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
