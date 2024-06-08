// 6 Redux
import { createSlice } from '@reduxjs/toolkit';

// 7 Redux
const favoriteSlice = createSlice({
  // 8 Define Initial State
  name: 'favorites',
  initialState: {
    ids: [],
  },
  // 9 Define Methods to manipulate the state
  reducers: {
    addFavorites: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.spaice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

// 11
export const addFavorites = favoriteSlice.actions.addFavorites;
export const removeFavorite = favoriteSlice.actions.removeFavorite;

// 10 Redux export default
export default favoriteSlice.reducer;
