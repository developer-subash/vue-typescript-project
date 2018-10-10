import Vue from "vue";
import Router from "vue-router";
import AdminLandPage from "./views/Home.vue";
import AdminDashboard from "./views/Dashboard.vue";

import AuthenticationRoutes from "@/Modules/Authentication/_routes/routes";

Vue.use(Router);

const baseRoutes: any = [
  {
    path: "/admin",
    name: "AdminLandPage",
    title: "AdminLandPage",
    component: AdminLandPage
  },
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    title: "AdminDashbaord",
    component: AdminDashboard
  }
];

const routes = baseRoutes.concat(AuthenticationRoutes);
export default new Router({
  routes
});
