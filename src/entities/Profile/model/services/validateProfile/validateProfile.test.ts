import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileErrors } from '../../types/profile';
import { validateProfile } from './validateProfile';

const data = {
  age: 22,
  avatar: '',
  city: '',
  country: Country.RUSSIA,
  first: 'Pupa',
  lastname: 'Lupa',
  currency: Currency.RUB,
};

describe('validateProfile test', () => {
  test('success login', async () => {
    const result = validateProfile(data);
    expect(result).toEqual([]);
  });

  test('incorrect user data', async () => {
    const result = validateProfile({ ...data, first: '' });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfile({ ...data, age: undefined });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
  });

  test('incorrect all', async () => {
    const result = validateProfile({});
    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
    ]);
  });
});
