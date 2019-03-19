import Vue from "vue";
import Router from "vue-router";
import routes from "./routers";
import iView from "iview";

Vue.use(Router);
const router = new Router({
  routes
});
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  console.info(to, "0000");
  console.info(to, "0000");
  console.info(to, "0000");
});
export default router;
