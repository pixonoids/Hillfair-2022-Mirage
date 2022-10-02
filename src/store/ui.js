import { createSlice } from '@reduxjs/toolkit';

export const configSlice = createSlice({
  name: 'ui',
  initialState: {
    navVisible: true,
  },
  reducers: {
    setNavVisible: (state, action) => {
      state.navVisible = action.payload;
    },
  },
});

export const { setNavVisible } = configSlice.actions;
export default configSlice.reducer;
