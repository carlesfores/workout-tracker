<script setup>
import { computed } from "vue";
import { WORKOUT_STATUS } from "@/data/enums";

const props = defineProps({
  status: {
    type: String,
    default: WORKOUT_STATUS.TODO,
  }
});

const statusClass = computed(() => {
  if (props.status === WORKOUT_STATUS.TODO) {
    return "workout-status--todo";
  }
  if (props.status === WORKOUT_STATUS.IN_PROGRESS) {
    return "workout-status--in-progress";
  }
  if (props.status === WORKOUT_STATUS.DONE) {
    return "workout-status--done";
  }
  if (props.status === WORKOUT_STATUS.CANCELED) {
    return "workout-status--canceled";
  }
});

</script>

<template>
  <div class="workout-status" :class="statusClass"></div>
</template>

<style lang="scss">
.workout-status {
  width: 14px;
  height: 14px;
  border: 1px solid #0f0c5d;
  border-radius: 100%;

  &--todo {
    background-color: #e2602d;
  }
  &--in-progress {
    background-color: #ffd655;
  }
  &--done {
    background-color: #49e048;
  }
  &--canceled {
    background-color: #9e9e9e;
  }
}
</style>
