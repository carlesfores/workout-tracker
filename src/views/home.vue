<script setup>
import { ref, computed } from "vue";
import workoutCard from "@/components/workout-card.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const workouts = ref([
  {
    title: "(Biceps + Chest) Workout",
    day: ["tue"],
    excercices: ["Biceps_1", "Biceps_3", "Biceps_7"],
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
]);

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
          v-for="(workout, index) in todayWorkouts"
          :key="index"
          :workout="workout"
          :show-status="true"
        />
      </div>

      <div v-if="todayWorkouts.length === 0" class="section-view">
        <div class="section-view__title">NO WORKOUTS TODAY</div>
        <div>
          You don't have defined workouts for today relax and enjoy the day.
        </div>
        <!-- <div class="section-view__button" @click="router.push({ path: '/workouts-list' })">
          CREATE WORKOUT
        </div> -->
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
