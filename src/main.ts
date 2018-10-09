import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";
import router from "./router";
import AuthenticationRoutes from "./Modules/Authentication/_routes/routes";
import store from "./store/store";
import "./registerServiceWorker";

Vue.config.productionTip = false;
Vue.use(Router);
new Vue({
  store,
  router,
  AuthenticationRoutes,
  render: h => h(App)
}).$mount("#app");
