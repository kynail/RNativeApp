import { configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './CardSlice';

export default configureStore({
  reducer: {
    cardreducer: cardSlice.reducer,
  },
});
