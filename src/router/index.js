import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import WorkoutsList from "../views/workouts-list.vue";
import Workout from "../views/workout.vue";
import Kpi from "../views/kpi.vue";
import Admin from "../views/admin.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/workouts-list",
    name: "workouts-list",
    component: WorkoutsList,
  },
  {
    path: "/workout",
    name: "workout",
    component: Workout,
  },
  {
    path: "/kpi",
    name: "kpi",
    component: Kpi,
  },
  {
    path: "/admin",
    name: "admin",
    component: Admin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
