import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("history")) || [];

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      const ttnNumber = action.payload;
      const existingItem = state.find((item) => item.ttnNumber === ttnNumber);

      if (!existingItem) {
        state.push({
          ttnNumber: ttnNumber,
          timestamp: new Date().toISOString(),
        });

        localStorage.setItem("history", JSON.stringify(state));
      }
    },
  },
});

export const { addToHistory } = historySlice.actions;

export default historySlice.reducer;
