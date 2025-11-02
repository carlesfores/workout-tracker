<script setup>
import { computed } from "vue";
import workoutCard from "@/components/workout-card.vue";
import { useRouter } from "vue-router";
import { useWorkout } from "@/composables/workout";

const router = useRouter();

const { workouts } = useWorkout();

const today = computed(() => "sat");

const todayWorkouts = computed(() => {
  return workouts.value.filter((w) => {
    return w.day.includes(today.value);
  });
});
</script>

<template>
  <div class="home-view">
    <div class="home-view__content">
      <div v-if="todayWorkouts.length > 0" class="section-view">
        <div class="section-view__title">FOR TODAY</div>
        <workout-card
          v-for="workout in todayWorkouts"
          :key="workout.id"
          :workout="workout"
          :preview="true"
        />
      </div>

      <div v-if="todayWorkouts.length === 0" class="section-view">
        <div class="section-view__title">NO WORKOUTS TODAY</div>
        <div>
          You don't have defined workouts for today relax and enjoy the day.
        </div>
      </div>
    </div>

    <div class="section-view">
      <div class="section-view__title">FREE WORKOUT</div>
      <div
        class="section-view__button"
        @click="router.push({ path: '/workout' })"
      >
        FREE WORKOUT
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.home-view {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
