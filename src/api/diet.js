import { API_BASE } from './constants';

export const postDiet = async (diet) => {
  const response = await fetch(`${API_BASE}/diet/add`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(diet),
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default {
  postDiet,
};
