import axios from 'axios';

export async function login(credentials) {
  const response = await axios.post('/api/auth/login', credentials);
  return response.data;
}

export async function register(data) {
  const response = await axios.post('/api/auth/register', data);
  return response.data;
}
