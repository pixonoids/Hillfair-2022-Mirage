import axios from 'axios';
import { CONFIG } from '../../config/config';

export const get = async (url, query, options = {}) => {
  const queryParams = new URLSearchParams();
  for (const param in query) {
    if (param && query[param]) queryParams.set(param, query[param]);
  }

  const response = await axios.get(`${url}?${queryParams.toString()}`, {
    baseURL: CONFIG.apiBaseUrl,
    ...options,
  });

  return response.data;
};

export const post = async (url, data, options = {}) => {
  const authToken = localStorage.getItem('authToken');
  const response = await axios.post(url, data, {
    baseURL: CONFIG.apiBaseUrl,
    ...options,
    headers: {
      Authorization: 'Bearer ' + authToken,
      ...(options.headers ? options.headers : {}),
    },
  });

  return response.data;
};

export const put = async (url, data, options = {}) => {
  const authToken = localStorage.getItem('authToken');
  const response = await axios.put(url, data, {
    baseURL: CONFIG.apiBaseUrl,
    ...options,
    headers: {
      Authorization: 'Bearer ' + authToken,
      ...(options.headers ? options.headers : {}),
    },
  });

  return response.data;
};

export const Delete = async (url, options = {}) => {
  const authToken = localStorage.getItem('authToken');
  const response = await axios.delete(CONFIG.apiBaseUrl + url, {
    ...options,
    headers: {
      Authorization: 'Bearer ' + authToken,
      ...(options.headers ? options.headers : {}),
    },
  });

  return response.data;
};

export const getStatic = async (url, query, options = {}) => {
  const queryParams = new URLSearchParams();
  for (const param in query) {
    if (param && query[param]) queryParams.set(param, query[param]);
  }

  const response = await axios.get(`${url}?${queryParams.toString()}`, {
    baseURL: CONFIG.staticBaseUrl,
    ...options,
  });

  return response.data;
};
