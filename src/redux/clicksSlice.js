import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const clicksSlice = createSlice({ //записує зміни у Redux стан 
  name: 'clicks',
  initialState: { value: 0 }, //початкове значення
  reducers: {
    update(state, action) {
      state.value += action.payload;  //payload данні що передаються з файлу App у update (onClick={() => dispatch(update(5))})
    },
  },
});

//налаштування локал-стореджа.
const persistConfig = {
  key: 'clicks',
  storage,
};
//зберігає данні у локал-сторедж
export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { update } = clicksSlice.actions;

//Selectors
export const getCklickValue = state => state.clicks.value


