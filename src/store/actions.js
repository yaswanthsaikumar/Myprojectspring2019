import { postExercise } from '../api/exercise';
import { postDiet } from '../api/diet';
import { postStat } from '../api/stat';

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

export const shareStat = async ({ dispatch }, payload) => {
  const response = await postStat(payload);
  if (response) {
    dispatch('user/getUser', null, { root: true });
  }
};

export default {
  addExercise,
  addDiet,
  shareStat,
};
