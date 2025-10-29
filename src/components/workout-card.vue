<script setup>
import { ref } from "vue";
import workoutStatus from "@/components/workout-status.vue";

const props = defineProps({
  workout: {
    type: Object,
    required: true,
  },
  showStatus: {
    type: Boolean,
    default: false,
  },
});

const isCollapsed = ref(true);

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div class="workout-card">
    <div class="workout-card__header">
      <div class="workout-card__header-title">{{ workout.title }}</div>
      <workout-status v-if="showStatus"></workout-status>
      <div class="workout-card__toggle" @click="toggleCollapsed">
        {{ isCollapsed ? "▼" : "▲" }}
      </div>
    </div>
    <transition>
      <div v-show="!isCollapsed" class="workout-card__content">
        <div>{{ (workout.day || []).toString() }}</div>
        <div>{{ (workout.excercices || []).toString() }}</div>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
.workout-card {
  display: flex;
  flex-direction: column;
  
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #0f0c5d;
  // box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
  //   rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  &__header {
    background-color: #c9cde8;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
  }

  &__toggle {
    cursor: pointer;
    font-size: 18px;
    user-select: none;
  }

  &__content {
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-height: 128px;
  }
}
</style>
