import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => (state = action.payload),
  },
});

export default userSlice.reducer;

export const { setUser } = userSlice.actions;
