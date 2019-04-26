import { postExercise } from '../api/exercise';
import { postDiet } from '../api/diet';

export const addExercise = async ({ dispatch }, exercise) => {
  const response = await postExercise(exercise);
  if (response) {
    dispatch('user/getUser', null, { root: true });
  }
};

export const addDiet = async ({ dispatch }, diet) => {
  const response = await postDiet(diet);
  if (response) {
    dispatch('user/getUser', null, { root: true });
  }
};

export default {
  addExercise,
  addDiet,
};
