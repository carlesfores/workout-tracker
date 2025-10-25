<script setup>
import workoutCard from "@/components/workout-card.vue";
</script>

<template>
  <div class="home-view">
    <div class="home-view__title">Ey Link</div>
    <div class="home-view__content">
      <div class="section-view">
        <div class="section-view__title">
          For today (Biceps + Chest)
        </div>
        <workout-card></workout-card>
      </div>
    </div>
    <div class="home-view__title">Workout</div>
    <div class="section-view">
        <div class="section-view__title">
          Start free workout, you can registry the data.
        </div>
        <button>Start workout</button>
      </div>
  </div>
</template>

<style lang="scss">
.home-view {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    color: #0f0c5d;
    font-weight: bold;
    font-size: 24px;
  }
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
}
</style>
