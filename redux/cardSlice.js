import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCard } = cardSlice.actions;
