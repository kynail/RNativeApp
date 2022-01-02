import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
  },
  reducers: {
    storeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { storeEmail } = userSlice.actions;
