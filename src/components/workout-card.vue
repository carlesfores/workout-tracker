<script setup></script>

<template>
  <div class="workout-card">
    <div class="workout-card__header">
      <div class="workout-card__header-title">(Biceps + Chest) Workout</div>
      <div class="workout-card__header-status">TO DO</div>
    </div>
    <div class="workout-card__content">
      <div>
        <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. -->
      </div>
    </div>
    <!-- <div class="workout__badget-list">
      <div class="workout__badget">title workout</div>
      <div class="workout__badget">Biceps (bagdet)</div>
      <div class="workout__badget">Triceps (bagdet)</div>
      <div class="workout__badget">Shoulders (bagdet)</div>
    </div> -->
  </div>
</template>

<style lang="scss">
.workout-card {
  display: flex;
  flex-direction: column;
  min-height: 64px;
  width: 100%;
  background-color: #ffffff;

  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
  }

  &__content {
    padding: 8px 16px;
  }
}
</style>
