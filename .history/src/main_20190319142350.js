import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import iView from "iview";

Vue.config.productionTip = false;
// Vue.use(iView, {
//   i18n: (path, options) => {
//     let value = i18n.t(path, options);
//     if (value) {
//       return value;
//     }
//     return "";
//   }
// });

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
