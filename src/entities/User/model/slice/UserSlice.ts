import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/userSchema';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state, action: PayloadAction<User>) => {
      if (action.payload) {
        state.authData = action.payload;
      }
    },
    logOut: (state) => {
      state.authData = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
