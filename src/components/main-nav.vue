<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentPath = ref("/");

const routes = [
  {
    label: "Home",
    name: "home",
    path: "/",
  },
  {
    label: "Workouts list",
    name: "workouts-list",
    path: "/workouts-list",
  },
  {
    label: "[Workout]",
    name: "workout",
    path: "/workout",
  },
  {
    label: "KPI's",
    name: "kpi",
    path: "/kpi",
  },
  {
    label: "Admin",
    name: "admin",
    path: "/admin",
  },
];

const goTo = (path) => {
  currentPath.value = path;
  router.push({ path });
};
</script>

<template>
  <nav class="main-nav">
    <div
      v-for="route in routes"
      :key="route.name"
      class="main-nav__link"
      :class="{ 'main-nav__link--active': currentPath === route.path }"
      @click="goTo(route.path)"
    >
      {{ route.label }}
    </div>
  </nav>
</template>

<style lang="scss">
.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;

  &__link {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    color: #34345c;

    &--active {
      text-decoration: underline;
    }
  }
}
</style>
