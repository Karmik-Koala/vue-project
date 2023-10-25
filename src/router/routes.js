import ListMeals from "@/pages/ListMeals.vue";

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
    component: () => import("../auth/pages/AuthView.vue"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../pages/FavoritesMeals.vue"),
    meta: { requiresAuth: true },
  },
];
