import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Dashboard.vue";
import LoginAdmin from "./Modules/Authentication/_components/Login.vue";
import RegisterAdmin from "./Modules/Authentication/_components/Register.vue";
import ForgetPassword from "./Modules/Authentication/_components/ForgetPassword.vue";

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "login",
      name: "admin-login",
      component: LoginAdmin
    },
    {
      path: "register",
      name: "admin-register",
      component: RegisterAdmin
    },
    {
      path: "ForgetPassword",
      name: "admin-forgetpassword",
      component: ForgetPassword
    }
  ]
});
