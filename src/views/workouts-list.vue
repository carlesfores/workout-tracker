<script setup>
import { ref } from "vue";
import workoutCard from "@/components/workout-card.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const workouts = ref([
  {title: "(Biceps + Chest) Workout"},
  {title: "Cardio"},
  {title: "Sauna"},
]);

</script>

<template>
  <div class="workouts-list-view">
    <div class="workouts-list-view__content">

      <div class="section-view">
        <div class="section-view__title">WORKOUTS</div>
        <workout-card 
          v-for="(workout, index) in workouts"
          :key="index"
          :title="workout.title"
        />
      </div>

      <div class="section-view">
        <div class="section-view__title">ADD WORKOUT</div>
        <div class="section-view__button"
          @click="router.push({ path: '/workout' })">ADD WORKOUT</div>
      </div>

    </div>
  </div>
</template>

<style lang="scss">
.workouts-list-view {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
