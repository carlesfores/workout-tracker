import { ref } from "vue";

export function useWorkout() {
  const workouts = ref([
    {
      id: 1,
      title: "Biceps, Chest",
      day: ["tue"],
      excercices: ["Biceps_1", "Biceps_3", "Biceps_7", "Chest_1", "Chest_3"],
      collapsed: false,
    },
    {
      id: 2,
      title: "Cardio",
      day: ["tue"],
      excercices: ["Cardio_1", "Cardio_3", "Cardio_7"],
      collapsed: false,
    },
    {
      id: 3,
      title: "Sauna",
      day: ["tue", "wed"],
      collapsed: false,
    },
    {
      id: 4,
      title: "Chest",
      day: ["wed"],
      excercices: ["Chest_1", "Chest_3", "Chest_7"],
      collapsed: false,
    },
    {
      id: 5,
      title: "Sauna",
      day: ["wed"],
      collapsed: false,
    },
    {
      id: 6,
      title: "Cardio, Sauna",
      day: ["sat", "sun", "mon"],
      collapsed: false,
    },
  ]);

  const findWorkoutById = (workoutId) => {
    return (
      (workouts.value || []).find((workout) => workout.id === workoutId) || null
    );
  };

  const createWorkout = () => {};

  const updateWorkout = (workoutId) => {};

  const deleteWorkout = (workoutId) => {
    try {
      const index = workouts.value.indexOf(workoutId);
      workouts.value.splice(index, 1);
    } catch (e) {
      console.error("Error deleteing workout");
    }
  };

  return {
    workouts,
    findWorkoutById,
    createWorkout,
    updateWorkout,
    deleteWorkout,
  };
}
