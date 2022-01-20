import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NovaAssinatura from "../views/NovaAssinatura.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nova-assinatura",
    name: "NovaAssinatura",
    component: NovaAssinatura,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
