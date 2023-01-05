import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ValidateProfileErrors } from '../../const/editableProfileCardConst';
import { updateProfileData } from './updateProfileData';

const data = {
  age: 22,
  avatar: '',
  city: '',
  country: Country.RUSSIA,
  first: 'Pupa',
  lastname: 'Lupa',
  currency: Currency.RUB,
  id: '1',
};

describe('updateProfileData test', () => {
  test('success change profile data', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
      },
    });
    newTestAsyncThunk.api.put.mockReturnValue(
      Promise.resolve({
        data,
      })
    );
    const result = await newTestAsyncThunk.callThunk();
    expect(newTestAsyncThunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('server error change profile data', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
      },
    });
    newTestAsyncThunk.api.put.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const result = await newTestAsyncThunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.SERVER_ERROR]);
  });

  test('user error change profile data', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: { ...data, first: '' },
      },
    });
    const result = await newTestAsyncThunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });
});
