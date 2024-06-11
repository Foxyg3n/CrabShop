import { createRouter, createWebHashHistory } from "vue-router";
import ServerView from "../views/ServerView.vue";
import AboutView from "../views/AboutView.vue";
import OfferView from "../views/OfferView.vue";

const routes = [
  {
    path: "/",
    name: "servers",
    component: ServerView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/offers/:server",
    name: "offers",
    component: OfferView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
