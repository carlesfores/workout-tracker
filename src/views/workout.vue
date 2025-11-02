<script setup>
import { computed, ref, onMounted } from "vue";
import { useWorkout } from "@/composables/workout";
import { useRouter } from "vue-router";

const router = useRouter();

const { findWorkoutById, createWorkout, updateWorkout, deleteWorkout } =
  useWorkout();

const props = defineProps({
  workoutId: {
    type: String,
    default: null,
  },
});

const workout = ref(null);

onMounted(() => {
  workout.value = findWorkoutById(props.workoutId);
});
</script>

<template>
  <div class="workout-view">
    <div class="workout-view__content">
      <div class="section-view">
        <div class="section-view__title">WORKOUT NAME</div>
        <div>Workout name</div>
        <div class="section-view__title">WORKOUT NAME</div>
        <div>Workout days</div>
        <div class="section-view__title">EXCERCICES</div>
        <div>Excercices</div>
      </div>

      <div class="section-view">
        <div
          v-if="!workout"
          class="section-view__button"
          @click="createWorkout"
        >
          CREATE
        </div>
        <div v-if="workout" class="section-view__button" @click="updateWorkout">
          UPATE
        </div>
        <div v-if="workout" class="section-view__button" @click="deleteWorkout">
          DELETE
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.workout-view {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
}
</style>
