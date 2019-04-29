import { API_BASE } from './constants';

export const postStat = async (payload) => {
  const response = await fetch(`${API_BASE}/statmessage/share`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default {
  postStat,
};
