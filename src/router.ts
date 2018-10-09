import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Home.vue";
import peopleRoutes from "@/Modules/Authentication/_routes/routes";

Vue.use(Router);

const baseRoutes: any = [
  {
    path: "/dashboard",
    name: "dashboard",
    title: "Dashboard",
    icon: "fa-tachometer",
    component: Dashboard
  },
  {
    path: "*",
    redirect: { name: "dashboard" }
  }
];

const routes = baseRoutes.concat(peopleRoutes);
export default new Router({
  routes
});
