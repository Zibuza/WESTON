
import { createWebHistory, createRouter } from "vue-router";


import Home from "./pages/home.vue";
import About from "./pages/about.vue";
import Properties from "./pages/properties.vue";
import Inner from "./pages/inner.vue" 


const routes = [
  {
    path: "/about",
    name: "About",
    component: About,
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/properties",
    name: "Properties",
    component: Properties,
  },
  {
    path: "/Inner",
    name: "Inner",
    component: Inner,
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
