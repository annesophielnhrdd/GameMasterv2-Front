import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  username: null,
  friends: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.friends = action.payload.friends;
    },
    logout: (state) => {
      state.token = null;
      state.username = null;
      state.friends = [];
    },
    addFriend: (state, action) => {
      return state.friends.push(action.payload);
    },

    // TODO : SEARCH INDEX FUNCTION
    removeFriend: (state, action) => {
      const index = state.findIndex((user) => user.friends === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { login, logout, addFriend, removeFriend } = userSlice.actions;
export default userSlice.reducer;
