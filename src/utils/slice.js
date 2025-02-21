import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "dashboard",
  initialState: {
    openSideBar: true,
  },
  reducers: {
    toggleSideBar: (state, action) => {
      state.openSideBar = !state.openSideBar;
    },

    closeSideBar: (state, action) => {
      state.openSideBar = false;
    },
    openSideBarAction: (state, action) => {
      state.openSideBar = true;
    },
  },
});

export const { toggleSideBar, closeSideBar, openSideBarAction } = slice.actions;
export default slice.reducer;
