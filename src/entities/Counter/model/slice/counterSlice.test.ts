import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('Increment test', () => {
    const state: CounterSchema = {
      value: 1,
    };
    expect(counterReducer(state, counterActions.increment())).toEqual({
      value: 2,
    });
  });
  test('Decrement test', () => {
    const state: CounterSchema = {
      value: 1,
    };
    expect(counterReducer(state, counterActions.decrement())).toEqual({
      value: 0,
    });
  });
  test('Should return work with empty state', () => {
    expect(counterReducer(undefined, counterActions.decrement())).toEqual({
      value: -1,
    });
  });
});
