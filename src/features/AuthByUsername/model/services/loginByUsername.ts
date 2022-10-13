import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.post('http://localhost:8000/login', {
      username,
      password,
    });

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (err) {
    const error = err as AxiosError<MyAxiosResponseDataError>;
    console.log(error);

    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
