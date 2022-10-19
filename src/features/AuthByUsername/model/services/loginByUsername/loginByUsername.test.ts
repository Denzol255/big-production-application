import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername test', () => {
  // let dispatch: Dispatch;
  // let getState: () => StateSchema;

  // beforeEach(() => {
  //   dispatch = jest.fn();
  //   getState = jest.fn();
  // });

  // test('success login', async () => {
  //   const userValue = {
  //     username: '123',
  //     id: '1',
  //   };
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       data: userValue,
  //     })
  //   );
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('fulfilled');
  //   expect(result.payload).toEqual(userValue);
  // });

  // test('error login', async () => {
  //   mockedAxios.post.mockReturnValue(
  //     Promise.resolve({
  //       status: 403,
  //     })
  //   );
  //   const action = loginByUsername({ username: '123', password: '123' });
  //   const result = await action(dispatch, getState, undefined);
  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(mockedAxios.post).toHaveBeenCalled();
  //   expect(result.meta.requestStatus).toBe('rejected');
  //   expect(result.payload).toBe(undefined);
  // });

  test('success login', async () => {
    const userValue = {
      username: '123',
      id: '1',
    };
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        data: userValue,
      })
    );
    const newTestAsyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await newTestAsyncThunk.callThunk({
      username: '123',
      password: '123',
    });
    expect(newTestAsyncThunk.dispatch).toHaveBeenCalledWith(
      userActions.setAuthData(userValue)
    );
    expect(newTestAsyncThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('error login', async () => {
    mockedAxios.post.mockReturnValue(
      Promise.resolve({
        status: 403,
      })
    );
    const newTestAsyncThunk = new TestAsyncThunk(loginByUsername);
    const result = await newTestAsyncThunk.callThunk({
      username: '123',
      password: '123',
    });
    expect(newTestAsyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(undefined);
  });
});
