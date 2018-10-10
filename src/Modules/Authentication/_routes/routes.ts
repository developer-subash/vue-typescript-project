import AdminLogin from "../_components/Login.vue";
import RegisterAdmin from "../_components/Register.vue";
import ForgetPassword from "../_components/ForgetPassword.vue";
import Authentication from "../../../views/Authentication.vue";

export default [
  {
    path: "admin",
    name: "admin",
    component: Authentication,
    redirect: { name: "admin-login" },
    children: [
      {
        path: "login",
        name: "admin-login",
        component: AdminLogin
      },
      {
        path: "register",
        name: "admin-register",
        component: RegisterAdmin
      },
      {
        path: "forgetPassword",
        name: "admin-forgetpassword",
        component: ForgetPassword
      }
    ]
  }
];
