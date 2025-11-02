import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import WorkoutsList from "../views/workouts-list.vue";
import Workout from "../views/workout.vue";
import Statistics from "../views/statistics.vue";
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
    path: '/workout/:workoutId?',
    name: 'workout',
    component: Workout,
    props: true
  },
  {
    path: "/statistics",
    name: "statistics",
    component: Statistics,
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
