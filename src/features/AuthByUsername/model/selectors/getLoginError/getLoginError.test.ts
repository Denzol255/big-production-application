import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
  test('should return login error', () => {
    const state: DeepPartial<StateSchema> = {
      login: { error: 'cannot get data' },
    };
    expect(getLoginError(state as StateSchema)).toBe('cannot get data');
  });
  test('should return "" if state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toBe('');
  });
});
