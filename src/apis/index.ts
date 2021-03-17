import { fetchPost, ROOT_URL } from './common';

export const login = async (email: string, password: string) => {
  try {
    const result = await fetchPost({ email, password }, '/api/login');
    const resultJson = await result.json();
    return resultJson;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const getUserInfo = async () => {
  try {
    const result = await fetch(ROOT_URL + '/api/user/info');
    const resultJson = await result.json();
    return resultJson;
  } catch (error) {
    console.error(error);
    return error;
  }
};
