import { API_BASE } from './constants';

export const postExercise = async (exercise) => {
  const response = await fetch(`${API_BASE}/exercise/add`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(exercise),
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default {
  postExercise,
};
