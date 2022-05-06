import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: nanoid(4),
    hex: "#000000",
    name: "black",
  },
  {
    id: nanoid(4),
    hex: "#FFC0CB",
    name: "pink",
  },
];

const colorSlice = createSlice({
  name: "colorState",
  initialState,
  reducers: {
    addColor(state = initialState, { payload: { hex, name } }) {
      state.push({
        id: nanoid(4),
        hex,
        name,
      });
    },
    setColor(state = initialState, { payload: { code, hex } }) {
      const objToEdit = state.find((color) => color.id === code);
      objToEdit.hex = hex;
    },
  },
});

export default colorSlice.reducer;
export const { addColor, setColor } = colorSlice.actions;
