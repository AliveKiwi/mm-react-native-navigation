// 1 Redux
import { configureStore } from '@reduxjs/toolkit';

// 12 favoriteSlice.reducer
import favoritesReducer from './favorites';

// 2 Redux
export const store = configureStore({
  // 13
  reducer: { favoriteMeals: favoritesReducer },
});
