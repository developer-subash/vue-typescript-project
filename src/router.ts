import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Home.vue";
import About from "./views/About.vue";
import AuthenticationRoutes from "@/Modules/Authentication/_routes/routes";

Vue.use(Router);

const baseRoutes: any = [
  {
    path: '/dashboard',
    name: 'dashboard',
    title: 'Dashboard',
    icon: 'fa-tachometer',
    component: Dashboard,
  },
  // {

  //   path: '/admin',
  //   name: 'about',
  //   component: About,

  // },
  
  
];

const routes = baseRoutes.concat(AuthenticationRoutes);
export default new Router({
  routes
});
