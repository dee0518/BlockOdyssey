import { configureStore } from '@reduxjs/toolkit';
import product from 'store/product';

const store = configureStore({
  reducer: {
    product,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
