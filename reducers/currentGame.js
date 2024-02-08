import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: null,
  gameMaster: null,
  lastTimePlayed: null,
  players: null,
  storyLength: null,
  style: null,
  universe: null,
  charactersDescription: null,
  round: null,
  playerTurn: null,
  title: null,
  context: null,
  choices: null,
  selectedChoices: null,
};

export const currentGameSlice = createSlice({
  name: "currentGame",
  initialState,
  reducers: {
    addPlayers: (state, action) => {
      state.players = action.payload.players;
      state.charactersDescription = action.payload.charactersDescription;
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
    setStory: (state, action) => {
      state.title = action.payload.title;
      state.context = [action.payload.context];
      state.choices = action.payload.choices;
      state.storyId = action.payload.storyId;
    },
    setSelectedChoices: (state, action) => {
      state.selectedChoices = action.payload;
      state.round += 1;
    },
    setContinuation: (state, action) => {
      state.choices = action.payload.newChoices;
      state.context = [
        ...state.context,
        action.payload.choicesSummary,
        action.payload.continuation,
      ];
    },
    setCurrentGame: (state, action) => {
      return (state = action.payload);
    },
    clearCurrentGame: state => {
      return (state = initialState);
    },
  },
});

export const {
  addPlayers,
  setStoryLength,
  setStyle,
  setUniverse,
  setStory,
  setSelectedChoices,
  setContinuation,
  setCurrentGame,
  clearCurrentGame,
} = currentGameSlice.actions;
export default currentGameSlice.reducer;
