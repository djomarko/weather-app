import { createSlice } from "@reduxjs/toolkit";

interface TempUnitState {
  isImperial: boolean;
}

const initialState: TempUnitState = {
  isImperial: false,
};

export const tempUnitSlice = createSlice({
  name: "tempUnit",
  initialState,
  reducers: {
    toggleUnit(state) {
      state.isImperial = !state.isImperial;
    },
  },
});

export const { toggleUnit } = tempUnitSlice.actions;
