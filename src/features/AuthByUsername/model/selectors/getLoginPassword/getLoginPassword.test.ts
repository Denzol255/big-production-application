import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return login password', () => {
    const state: DeepPartial<StateSchema> = {
      login: { password: 'qwerty' },
    };
    expect(getLoginPassword(state as StateSchema)).toBe('qwerty');
  });
  test('should return "" if state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toBe('');
  });
});
