import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return profile data', () => {
    const data = {
      age: 22,
      avatar: '',
      city: '',
      country: Country.RUSSIA,
      first: 'Pupa',
      lastname: 'Lupa',
      currency: Currency.RUB,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });
  test('should return profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
