<script setup>
import { computed, ref } from "vue";
import workoutCard from "@/components/workout-card.vue";
import { useRouter } from "vue-router";
import { useWorkout } from "@/composables/workout";

const router = useRouter();
const { workouts, deleteWorkout } = useWorkout();

const collapsedWorkoutCards = ref([]);

const hasWorkouts = computed(() => {
  return workouts.value.length > 0;
});

const isCollapsed = (workoutId) => {
  return collapsedWorkoutCards.value.includes(workoutId);
};

const collapseAll = () => {
  collapsedWorkoutCards.value = [];

  for (let workout of workouts.value) {
    collapsedWorkoutCards.value.push(workout.id);
  }
};

const togglecollapse = (workoutId) => {
  const index = collapsedWorkoutCards.value.indexOf(workoutId);

  if (index > -1) {
    collapsedWorkoutCards.value.splice(index, 1);
  } else {
    collapsedWorkoutCards.value.push(workoutId);
  }
};

const goToWorkout = (workoutId = null) => {
  router.push({ path: `/workout/${workoutId}`, params: workoutId });
};
</script>

<template>
  <div class="workouts-list-view">
    <div class="workouts-list-view__content">
      <div class="section-view">
        <div
          class="section-view__button"
          @click="router.push({ path: '/workout' })"
        >
          ADD WORKOUT
        </div>
      </div>

      <div class="section-view">
        <div class="section-view__header">
          <div class="section-view__title">WORKOUTS</div>
          <div
            v-if="hasWorkouts"
            class="section-view__actions custom-link"
            @click="collapseAll"
          >
            [collapse]
          </div>
        </div>

        <div v-if="!hasWorkouts">No workouts created.</div>

        <workout-card
          v-for="workout in workouts"
          :key="workout.id"
          :workout="workout"
          :is-collapsed="isCollapsed(workout.id)"
          @toggle-collapse="togglecollapse(workout.id)"
          @update-workout="goToWorkout(workout.id)"
          @delete-workout="deleteWorkout(workout.id)"
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
