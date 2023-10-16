import ListMeals from "../pages/ListMeals/ListMeals.vue";

export const routes = [
  {
    path: "/",
    name: "listMeals",
    component: ListMeals,
  },
  {
    path: "/details/:id",
    name: "detailsMeal",
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/DetailsMeal.vue"),
  },
];
