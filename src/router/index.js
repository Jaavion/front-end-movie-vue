import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import SignUp from "../views/SignUp.vue";
import MoviesIndex from "../views/movies/Index.vue";
import MoviesNew from "../views/movies/New.vue";
import ShowMovie from "../views/movies/Show.vue";
import EditMovie from "../views/movies/Edit.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/movies",
    name: "movies-index",
    component: MoviesIndex,
  },
  {
    path: "/movies/new",
    name: "movies-new",
    component: MoviesNew,
  },
  {
    path: "/movies/:id",
    name: "movies-show",
    component: ShowMovie,
  },
  {
    path: "/movies/:id/edit",
    name: "movies-edit",
    component: EditMovie,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
