import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from 'entities/Profile';
import { ValidateProfileErrors } from '../../const/editableProfileCardConst';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
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
    const response = await extra.api.put<Profile>(
      `/profile/${formData?.id}`,
      formData
    );

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
  }
});
