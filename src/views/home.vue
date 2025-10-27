<script setup>
import { ref } from "vue";
import workoutCard from "@/components/workout-card.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const workouts = ref([
  {title: "(Biceps + Chest) Workout"},
  {title: "Sauna"},
]);

</script>

<template>
  <div class="home-view">
    <div class="home-view__content">
      <div class="section-view">
        <div class="section-view__title">FOR TODAY</div>

        <workout-card 
          v-for="(workout, index) in workouts"
          :key="index"
          :title="workout.title"
          :show-status="true"
        />

        <div v-if="workouts.length === 0">
          <p>
            You don't have defined workouts for today, create a new workout or
            edit defined ones.
          </p>
          <div
            class="section-view__button"
            @click="router.push({ path: '/workouts-list' })"
          >
            CREATE WORKOUTS
          </div>

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

    <div class="section-view">
      <div class="section-view__title">PERSONALIZE</div>
      <div
        class="section-view__button"
        @click="router.push({ path: '/admin' })"
      >
        ADMIN PANEL
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
.section-view {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__title {
    color: #0f0c5d;
    font-weight: bold;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 36px;
    cursor: pointer;
    color: #0f0c5d;
    border: 1px solid #0f0c5d;
    background-color: #ffffff;
    padding: 0px 16px;
    width: fit-content;
  }
  &__button:hover {
    color: #ffffff;
    background-color: #0f0c5d;
  }
}
</style>
