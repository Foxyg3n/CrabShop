import { createRouter, createWebHistory } from "vue-router";
import ServerView from "../views/ServerView.vue";
import AboutView from "../views/AboutView.vue";
import OfferView from "../views/OfferView.vue";
import AdminView from "../views/AdminView.vue";
import TermView from "../views/TermsView.vue";

const routes = [
  {
    path: "/",
    name: "servers",
    component: ServerView,
  },
  {
    path: "/tos",
    name: "terms of service",
    component: TermView,
  },
  {
    path: "/offers/:server",
    name: "offers",
    component: OfferView,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
