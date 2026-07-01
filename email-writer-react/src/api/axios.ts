import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateEmail = async (emailContent: string, tone: string) => {
  const response = await api.post('/email/generate', {
    emailContent,
    tone,
  });
  return response.data; // Expected to be Plain Text
};

export default api;
