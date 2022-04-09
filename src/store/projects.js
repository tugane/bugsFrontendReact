import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    projectAdded: (projects, actions) => {
      projects.push({
        id: ++lastId,
        name: actions.payload.name,
      });
    },
  },
});
 
export const { projectAdded } = slice.actions;

export default slice.reducer;
  