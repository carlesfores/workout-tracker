<script setup>
import { ref, computed, defineEmits } from "vue";
import workoutStatus from "@/components/workout-status.vue";

const emit = defineEmits([
  "toggle-collapse",
  "update-workout",
  "delete-workout",
]);

const props = defineProps({
  workout: {
    type: Object,
    required: true,
  },
  isCollapsed: {
    type: Boolean,
    default: false,
  },
  preview: {
    type: Boolean,
    default: false,
  },
});

const actions = [
  {
    label: "delete",
    action: "delete-workout",
  },
  {
    label: "edit",
    action: "update-workout",
  },
];

const days = computed(() => {
  return props.workout.day || [];
});

const excercices = computed(() => {
  return props.workout.excercices || [];
});

const handleAction = (action) => {
  emit(action);
};

const capitalice = (w) => {
  return w.charAt(0).toUpperCase() + w.slice(1);
};
</script>

<template>
  <div class="workout-card">
    <div class="workout-card__header" @click="handleAction('toggle-collapse')">
      <div class="workout-card__header-title">
        <div>{{ workout.title }}</div>
      </div>
      <workout-status v-if="preview"></workout-status>
      <div v-if="!preview" class="workout-card__toggle">
        {{ isCollapsed ? "▼" : "▲" }}
      </div>
    </div>

    <transition>
      <div v-show="!isCollapsed" class="workout-card__content">
        <div class="workout-card__days">
          <div v-for="(day, index) in days" :key="index" class="custom-badge">
            {{ capitalice(day) }}
          </div>
          <div
            v-for="(excercice, index) in excercices"
            :key="index"
            class="custom-badge custom-badge--excercice"
          >
            {{ capitalice(excercice) }}
          </div>
        </div>

        <div v-if="!preview" class="workout-card__actions">
          <div
            v-for="({ label, action }, index) in actions"
            :key="index"
            class="custom-link"
            @click="handleAction(action)"
          >
            [{{ label }}]
          </div>
        </div>
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
  border-bottom-width: medium;
  border-left-width: thin;
  border-right-width: medium;
  border-radius: 3px 4px 3px 4px;

  &__header {
    background-color: #c9cde8;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-weight: bold;
  }

  &__toggle {
    user-select: none;
  }

  &__content {
    padding: 8px 16px;
    min-height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
  }

  &__days {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  &__excercices {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }

  &__actions {
    display: flex;
    gap: 6px;
    justify-content: flex-end;
  }
}
</style>
