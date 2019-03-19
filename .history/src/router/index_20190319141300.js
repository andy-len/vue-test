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
  // eslint-disable-next-line no-console
  console.log(to, "0000");
  // eslint-disable-next-line no-console
  console.info(from, "0000");
  // eslint-disable-next-line no-console
  console.info(next, "0000");
  next();
});
router.afterEach(to => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0)
},
export default router;
