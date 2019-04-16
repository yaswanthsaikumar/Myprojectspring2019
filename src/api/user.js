import { API_BASE } from './constants';

export const getAuthUserDetails = async () => {
  const response = await fetch(`${API_BASE}/user/auth/details`, {
    credentials: 'include',
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default {
  getAuthUserDetails,
};
