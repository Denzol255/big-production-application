import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should return login state', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: '123',
        password: '321',
        isLoading: false,
        error: '',
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: '123',
      password: '321',
      isLoading: false,
      error: '',
    });
  });
  test('should return undefined if state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
