// eslint-disable-next-line import/no-unresolved
import { postExercise } from '../api/exercise';

export const addExercise = async ({ dispatch }, exercise) => {
  const response = await postExercise(exercise);
  if (response) {
    dispatch('user/getUser', null, { root: true });
  }
};

export default {
  addExercise,
};
