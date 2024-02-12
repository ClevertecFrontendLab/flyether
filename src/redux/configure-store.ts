import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { commonApi } from './services/common.api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { generalConditionsSlice } from './slices/GeneralConditionsSlice';


export const store = configureStore({
  reducer: {
    [commonApi.reducerPath]: commonApi.reducer,
    generalConditions: generalConditionsSlice.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(commonApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
