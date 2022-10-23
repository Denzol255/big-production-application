import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
  test('should return login username', () => {
    const state: DeepPartial<StateSchema> = {
      login: { username: 'Ivan' },
    };
    expect(getLoginUsername(state as StateSchema)).toBe('Ivan');
  });
  test('should return "" if state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toBe('');
  });
});
