import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BackgroundState {
  color: string;
}
const initialState: BackgroundState = {
  color: "#ffffff",
};


const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
  },
});




export const { setColor } = backgroundSlice.actions;
export default backgroundSlice.reducer;
