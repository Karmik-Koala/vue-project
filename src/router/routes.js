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
    props: true,
    component: () => import("../pages/DetailsMeal.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../auth/AuthView.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../pages/FavoritesMeals.vue"),
    meta: { requiresAuth: true },
  },
];
