import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { AxiosError } from 'axios';
import { Profile } from 'entities/Profile';

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (userId, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI;

  try {
    const response = await extra.api.get<Profile>(`/profile/${userId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    const error = err as AxiosError<MyAxiosResponseDataError>;
    return rejectWithValue(
      error?.response?.data.message || 'default error message'
    );
  }
});
