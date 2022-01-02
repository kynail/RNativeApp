import { configureStore } from '@reduxjs/toolkit';
import { cardSlice } from './CardSlice';
import { userSlice } from './UserSlice';

export default configureStore({
  reducer: {
    cardreducer: cardSlice.reducer,
    userreducer: userSlice.reducer,
  },
});
