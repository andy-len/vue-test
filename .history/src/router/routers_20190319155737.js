import index from "./../view/index.vue";
import app from "./../App.vue";

export default [
  {
    path: "/hello",
    redirect: "/hello",
    component: index,
    meta: {
      hideInMenu: true,
      notCache: true
    }
  },
  {
    path: "/hello",
    redirect: "/hello",
    component: app,
    meta: {
      hideInMenu: true,
      notCache: true
    }
  }
];
