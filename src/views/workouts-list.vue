<script setup>
import { ref } from "vue";
import workoutCard from "@/components/workout-card.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const workouts = ref([
  {
    title: "Biceps, Chest",
    day: ["tue"],
    excercices: ["Biceps_1", "Biceps_3", "Biceps_7", "Chest_1", "Chest_3"],
  },
  {
    title: "Cardio",
    day: ["tue"],
    excercices: ["Cardio_1", "Cardio_3", "Cardio_7"],
  },
  {
    title: "Sauna",
    day: ["tue", "wed"],
  },
  {
    title: "Chest",
    day: ["wed"],
    excercices: ["Chest_1", "Chest_3", "Chest_7"],
  },
  {
    title: "Sauna",
    day: ["wed"],
  },
  {
    title: "Cardio, Sauna",
    day: ["sat", "sun", "mon"],
  }
]);
</script>

<template>
  <div class="workouts-list-view">
    <div class="workouts-list-view__content">
      <div class="section-view">
        <div class="section-view__title">ADD WORKOUT</div>
        <div
          class="section-view__button"
          @click="router.push({ path: '/workout' })"
        >
          ADD WORKOUT
        </div>
      </div>

      <div class="section-view">
        <div class="section-view__title">WORKOUTS</div>
        <div v-if="workouts.length === 0">No workouts created.</div>
        <workout-card
          v-for="(workout, index) in workouts"
          :key="index"
          :workout="workout"
        />
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
