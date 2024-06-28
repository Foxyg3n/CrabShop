import { createRouter, createWebHistory } from "vue-router";
import ServerView from "../views/ServerView.vue";
import OfferView from "../views/OfferView.vue";
import AdminView from "../views/AdminView.vue";
import TermView from "../views/TermsView.vue";
import SetupView from "../views/SetupView.vue";
import AdminPanelView from "@/views/admin/AdminPanelView.vue";
import PanelServerView from "@/views/admin/PanelServerView.vue";
import PanelMainView from "@/views/admin/PanelMainView.vue";
import PanelDatabaseView from "@/views/admin/PanelDatabaseView.vue";

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
  },
  {
    path: "/admin-panel",
    name: "admin-panel",
    component: AdminPanelView,
    meta: { layout: "AdminPanelLayout" },
    children: [
      {
        name: "admin-main",
        path: "",
        component: PanelMainView
      },
      {
        path: "admin-servers",
        component: PanelServerView
      },
      {
        path: "admin-database",
        component: PanelDatabaseView
      }
    ]
  },
  {
    path: "/setup",
    name: "setup",
    component: SetupView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
