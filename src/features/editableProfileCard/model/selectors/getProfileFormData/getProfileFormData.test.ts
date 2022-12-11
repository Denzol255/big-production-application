import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData', () => {
  test('should return profile formData', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        formData: {
          age: 22,
          avatar: '',
          city: '',
          country: Country.RUSSIA,
          first: 'Pupa',
          lastname: 'Lupa',
          currency: Currency.RUB,
        },
      },
    };
    expect(getProfileFormData(state as StateSchema)).toEqual({
      age: 22,
      avatar: '',
      city: '',
      country: Country.RUSSIA,
      first: 'Pupa',
      lastname: 'Lupa',
      currency: Currency.RUB,
    });
  });
  test('should return undefined if state is empty', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileFormData(state as StateSchema)).toEqual(undefined);
  });
});
