import { configureStore } from '@reduxjs/toolkit';
import { clicksReducer } from 'redux/clicksSlice';
import { persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

//Створюємо store - весь Redux стан. reducer - незмінний обєкт. також у файлі index.js обгорнути у Provider з пропсом store з store.js
export const store = configureStore({
  reducer: {
    clicks: clicksReducer, //за частину стейту clicks відповідає редюсер clicksReducer
  },
  middleware: getDefaultMiddleware => //middleware - прослойка. ігнорує деякі типи екшенів (встроєнні функції у redux-persist)
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
