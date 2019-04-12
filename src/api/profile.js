import { API_BASE } from './constants';

export const signin = async (credentials) => {
  const response = await fetch(`${API_BASE}/profile/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const signout = async () => {
  const response = await fetch(`${API_BASE}/profile/signout`);
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const signup = async (signUpData) => {
  const response = await fetch(`${API_BASE}/profile/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signUpData),
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default {
  signin,
  signout,
  signup,
};
