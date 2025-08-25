import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import defaultValue from "../defaultValue";
import { ThemeMode } from "../type";

const themeSlice = createSlice({
  name: "theme",
  initialState: defaultValue.themeState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

const { actions, reducer } = themeSlice
export const { setTheme , toggleTheme} = actions
export default reducer    