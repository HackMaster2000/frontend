import axios from 'axios';

const API_URL = `${import.meta.env.VITE_API_URL}/api/`;

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

const api = {
  getProducts: () => axiosInstance.get('products/'),
  getProduct: (productId) => axiosInstance.get(`products/${productId}`),
  getTestimonials: () => axiosInstance.get('testimonials/'),
  getBlogs: () => axiosInstance.get('blogs/'),
  getTeamMembers: () => axiosInstance.get('team-members/'),
};

export default api;
