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
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

// 11
export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;

// 10 Redux export default
export default favoriteSlice.reducer;
