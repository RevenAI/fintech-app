import { createSlice } from "@reduxjs/toolkit";

const sectionRefsSlice = createSlice({
  name: "sectionRefs",
  initialState: {},
  reducers: {
    setRef: (state, action) => {
      const { section, ref } = action.payload;
      state[section] = ref;
    },
  },
});

export const { setRef } = sectionRefsSlice.actions;
export default sectionRefsSlice.reducer;
