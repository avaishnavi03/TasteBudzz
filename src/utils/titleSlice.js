import { createSlice } from "@reduxjs/toolkit";

const titleSlice = createSlice({
  name: "title",
  initialState: {
    pageTitle: "TasteBudzz",
    favicon: "/favicon.png",
  },
  reducers: {
    setPageTitle(state, action) {
      state.pageTitle = action.payload;
    },
    setFavicon(state, action) {
      state.favicon = action.payload;
  },
},
});

export const { setPageTitle, setFavicon } = titleSlice.actions;
export default titleSlice.reducer;
