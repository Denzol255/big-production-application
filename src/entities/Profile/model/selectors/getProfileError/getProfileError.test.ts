import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'New error',
      },
    };
    expect(getProfileError(state as StateSchema)).toEqual('New error');
  });
  test('should return profile error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
