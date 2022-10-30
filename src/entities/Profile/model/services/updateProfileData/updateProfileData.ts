import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { validateProfile } from '../validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileErrors[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;

  const formData = getProfileFormData(getState());
  const errors = validateProfile(formData);

  if (errors.length) {
    return rejectWithValue(errors);
  }

  try {
    const response = await extra.api.put<Profile>('/profile', formData);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }
});
