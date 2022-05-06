import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#000000",
};

createSlice({
  name: colorState,
  initialState,
  reducers: {
    SET_COLOR(state, { payload }) {
      state.color = payload;
    },
  },
});
