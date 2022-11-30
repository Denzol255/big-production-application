import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

export const $api = axios.create({
  baseURL: __API__,
});

if (__PROJECT__ === 'frontend') {
  $api.interceptors.request.use((config) => {
    if (config.headers) {
      config.headers.Authorization =
        localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
    }
    return config;
  });
}
