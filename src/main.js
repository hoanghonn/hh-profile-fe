import DefaultLayout from "~/layouts/Layout.vue";
import "./index.css";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
