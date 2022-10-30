import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchProfileData } from './fetchProfileData';

const data = {
  age: 22,
  avatar: '',
  city: '',
  country: Country.RUSSIA,
  first: 'Pupa',
  lastname: 'Lupa',
  currency: Currency.RUB,
};

describe('fetchProfileData test', () => {
  test('success login', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(fetchProfileData);
    newTestAsyncThunk.api.get.mockReturnValue(
      Promise.resolve({
        data,
      })
    );
    const result = await newTestAsyncThunk.callThunk();
    expect(newTestAsyncThunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error login', async () => {
    const newTestAsyncThunk = new TestAsyncThunk(fetchProfileData);
    newTestAsyncThunk.api.get.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const result = await newTestAsyncThunk.callThunk();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
