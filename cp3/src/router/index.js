import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Publisher from "../views/Publisher.vue";
import ESRB from "../views/ESRB.vue";
import Console from "../views/Console.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/publisher",
    name: "Publisher",
    
    component: Publisher
  },
    {
    path: "/esrb",
    name: "ESRB",
    
    component: ESRB
  },
  {
    path: "/console",
    name: "Console",
    
    component: Console
  }
];

const router = new VueRouter({
  routes
});

export default router;
