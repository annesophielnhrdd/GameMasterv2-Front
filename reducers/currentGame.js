import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  players: null,
  storyLength: null,
  style: null,
  universe: null,
};

export const currentGameSlice = createSlice({
  name: 'currentGame',
  initialState,
  reducers: {
    addPlayers: (state, action) => {
      state.players = action.payload;
    },
    setStoryLength: (state, action) => {
      state.storyLength = action.payload;
    },
    setStyle: (state, action) => {
      state.style = action.payload;
    },
    setUniverse: (state, action) => {
      state.universe = action.payload;
    },
    clearCurrentGame: state => {
      state = initialState;
    },
  },
});

export const {
  addPlayers,
  setStoryLength,
  setStyle,
  setUniverse,
  clearCurrentGame,
} = currentGameSlice.actions;
export default currentGameSlice.reducer;
