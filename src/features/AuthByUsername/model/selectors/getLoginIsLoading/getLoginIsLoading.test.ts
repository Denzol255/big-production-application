import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
  test('should return login isLoading', () => {
    const state: DeepPartial<StateSchema> = {
      login: { isLoading: true },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBe(true);
  });
  test('should return false if state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toBe(false);
  });
});
