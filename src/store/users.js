import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    userAdded: (users, actions) => {
      users.push({
        id: ++lastId,
        name: actions.payload.name,
      });
    },
  },
});

export const { userAdded } = slice.actions;

export default slice.reducer;
