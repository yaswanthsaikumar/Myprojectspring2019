import { API_BASE } from './constants';

export const getAuthUserDetails = async () => {
  const response = await fetch(`${API_BASE}/user/auth/details`, {
    credentials: 'include',
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const updateAuthUserDetails = async (payload) => {
  const response = await fetch(`${API_BASE}/user/auth/updateDetails`, {
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

export const searchUsers = async (query) => {
  const response = await fetch(`${API_BASE}/user/${query}`);
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default {
  getAuthUserDetails,
  updateAuthUserDetails,
  searchUsers,
};
