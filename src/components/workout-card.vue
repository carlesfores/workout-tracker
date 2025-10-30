<script setup>
import { ref, computed } from "vue";
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

const isCollapsed = ref(false);

const actions = [
  {
    label: "delete",
    action: "delete-workout",
  },
  {
    label: "edit",
    action: "edit-workout",
  },
];

const days = computed(() => {
  return props.workout.day || [];
});

const excercices = computed(() => {
  return props.workout.excercices || [];
});

const handleAction = (action) => {
  console.log(action);
};

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};

const capitalice = (w) => {
  return w.charAt(0).toUpperCase() + w.slice(1);
};
</script>

<template>
  <div class="workout-card">

    <div class="workout-card__header" @click="toggleCollapsed">
      <div class="workout-card__header-title">
        <div>{{ workout.title }}</div>
      </div>
      <workout-status v-if="showStatus"></workout-status>
      <div class="workout-card__toggle">
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

        <!-- <div class="workout-card__excercices">
          <span
            v-for="(excercice, index) in excercices"
            :key="index"
            class="custom-badge custom-badge--excercice"
          >
            {{ capitalice(excercice) }}
          </span>
        </div> -->

        <div class="workout-card__actions">
          <div
            v-for="({ label, action }, index) in actions"
            :key="index"
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
  // box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
  //   rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  &__header {
    background-color: #c9cde8;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 8px 16px;
    align-items: center;
    cursor: pointer;
    user-select: none;
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
