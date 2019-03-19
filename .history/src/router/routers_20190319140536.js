import index from "@/view/index.vue";
import app from "@/app.vue";

export default [
  {
    path: "/hello",
    redirect: "/hello",
    comment: index,
    meta: {
      hideInMenu: true,
      notCache: true
    }
  }
];
