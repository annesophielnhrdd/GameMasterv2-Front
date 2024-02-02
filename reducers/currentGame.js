import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  characters: null,
  univers: null,
  storyLength: null,
  style: null,
};

export const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
    addCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { addCharacters } = currentGameSlice.actions;
export default currentGameSlice.reducer;
