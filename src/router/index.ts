import { nextTick } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import DashboardView from "../views/DashboardView.vue";
import OrderView from "../views/OrderView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/order",
    name: "order",
    component: OrderView,
    meta: {
      title: "Order",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const DEFAULT_TITLE = "Green washing";
router.afterEach((to) => {
  nextTick(() => {
    if (typeof to.meta.title === "string") {
      (document as Document).title = to.meta.title || DEFAULT_TITLE;
    }
  });
});

export default router;
