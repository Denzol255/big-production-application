import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileErrors.INCORRECT_AGE],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      'INCORRECT_AGE',
    ]);
  });
  test('should return undefined if state is empty', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
