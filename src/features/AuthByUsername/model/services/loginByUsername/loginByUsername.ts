import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/constants/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
  const { rejectWithValue, dispatch, extra } = thunkAPI;

  try {
    const response = await extra.api.post('/login', {
      username,
      password,
    });

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));
    return response.data;
  } catch (err) {
    const error = err as AxiosError<MyAxiosResponseDataError>;
    return rejectWithValue(
      error?.response?.data.message || 'default error message'
    );
  }
});
